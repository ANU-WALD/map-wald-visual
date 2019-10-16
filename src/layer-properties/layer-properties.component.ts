import { Component, Input, ViewChild, AfterViewInit, ElementRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { MappedLayer, Publication, LayerTagValue, LayerTagMap,
  PointSelectionService, PointSelection } from 'map-wald';
import { LayeredMapComponent } from '../layered-map/layered-map.component';
import { GeometryObject, Feature } from 'geojson';

declare var Plotly: any;

@Component({
  selector: 'layer-properties',
  template: `<div class="container-fluid">
  <p><strong>{{layer?.title}}</strong>
    <span *ngIf="layer.description()"
    [ngbTooltip]="layer.description()"
    [placement]="tooltipPlacement"
    class="layer-info-target"
    container="body">
  &nbsp;<i class="fa fa-info-circle"></i>
  </span>
  &nbsp;<span *ngIf="layer.interpolatedDownloadURL">
    <small><a target="_blank"
              [href]="layer.interpolatedDownloadURL"
              [ngbTooltip]="'Download data'"
              container="body">
      <i class="fa fa-download"></i>
    </a></small>
  </span>
  </p>

  <div *ngIf="layer?.layer.publications.length>1">
    <span *ngIf="layer.layer.publications[0].timestep">Timestep </span>
    <span *ngIf="!layer.layer.publications[0].timestep">{{ layer.layer.options.publicationLabel || 'Variable' }} </span>
    <select [(ngModel)]="layer.options.publication" (ngModelChange)="publicationSelected($event)">
      <option *ngFor="let p of layer.layer.publications; let i=index" [ngValue]="i">{{p.label || p.timestep}}</option>
    </select>
  </div>
  <div *ngIf="layer?.layer.publications.length===1">
    {{publication?.label}}
  </div>

  <div *ngIf="publication&&publication.timestep">
    <hr/>
    <date-selection [(date)]="layer.options.date"
      (dateChange)="update($event)"
      [timestep]="publication.timestep"
      [stepDays]="publication.timestepMultiplier||1"
      [referenceDate]="publication.timestepReference"
      [minDate]="publication.options.start"
      [maxDate]="publication.options.end"></date-selection>
  </div>

  <div *ngIf="layer.layer.options.smallExtent">
    <hr/>
    <button class="btn btn-sm btn-primary" (click)="zoomToExtent()">Zoom to Extent</button>
  </div>

<!--
  <div *ngIf="layer.layer.options.vectors">
    <p>Lets filter those {{layer.layer.options.vectors}}s, eh?</p>
  </div>
-->

  <div *ngIf="availableTags">
    <div *ngFor="let tag of getKeys(availableTags)">
      {{tag}}
      <select [(ngModel)]="tags[tag]" (ngModelChange)="tagChanged(tag)">
        <option *ngFor="let val of availableTags[tag]" [ngValue]="val.value">{{val.label}}</option>
      </select>
    </div>
  </div>

  <div *ngIf="publication?.pointdata">
    Variable:
    <select [(ngModel)]="selectedVariable" (ngModelChange)="queryPointData()">
      <option *ngFor="let v of pointVariables" [ngValue]="v.value">{{v.label}}</option>
    </select>
  </div>
  <!--
  <div *ngIf="publication">
    <p>Start: {{publication.options.start}}</p>
    <p>End: {{publication.options.end}}</p>
    <p>{{publication|json}}</p>
  </div>
  <button (click)="update()">Force update...</button>
  -->
</div>`, styles: []
})
export class LayerPropertiesComponent implements AfterViewInit, OnDestroy {
  getKeys = Object.keys;
  @Input() layer: MappedLayer;
  @Input() map: LayeredMapComponent;
  @Output() propertyChanged = new EventEmitter();
  @Input() tooltipPlacement: string = 'right';
  availableTags: LayerTagMap = null;
  tags: { [key: string]: string } = {}
  pointVariables: LayerTagValue[] = [];
  selectedVariable: string;
  selectedFeature: Feature<GeometryObject>;
  selectedFeatureSubscription: any;

  constructor(private pointSelectionService: PointSelectionService) {

  }

  get publication(): (Publication | null) {
    if (!this.layer || !this.layer.layer || !this.layer.layer.publications) {
      return null;
    }
    return this.layer.layer.publications[this.layer.options.publication || 0];
  }

  ngAfterViewInit() {
    // if(this.layer){
    //   this.publication=this.layer.layer.publications[this.layer.options.publication||0];
    // }
    // if (this.layer &&
    //   this.layer.layer.options.smallExtent &&
    //   !this.layer.spatialExtent) {
    //   this.loadExtent();
    // }
    if (this.map) {
      this.selectedFeatureSubscription =
        this.map.featureSelected.subscribe((evt: { feature: Feature<GeometryObject>, layer?: MappedLayer }) => this.featureSelected(evt));
    }

    if (this.layer) {
      setTimeout(() => {
        this.findTags();
      });
    }
  }

  ngOnDestroy(): void {
    if (this.selectedFeatureSubscription) {
      this.selectedFeatureSubscription.unsubscribe();
    }
  }

  featureSelected(evt: { feature: Feature<GeometryObject>, layer?: MappedLayer }) {
    if (!this.publication || !this.publication.pointdata) {
      return;
    }
    this.selectedFeature = evt.feature;
    // No guarantee that this is from the same layer!!!!
    this.queryPointData();
  }

  publicationSelected(idx: number) {
    this.layer.options.publication = idx;
    // this.publication=this.layer.layer.publications[idx];
    if (this.publication.pointdata) {
      this.pointSelectionChanged();
      this.updateVariables();
    }

    this.update(idx);
  }

  updateLayer() {
    this.layer.options.tags = this.tags;
    this.layer.update();
    this.propertyChanged.emit(this.layer);
  }

  update(event: any) {
    this.updateLayer();

    setTimeout(() => {
      this.findTags();
    });
  }

  processTags(tags: { [key: string]: Array<string | LayerTagValue> }): LayerTagMap {
    if (!tags) {
      return null;
    }

    let result: LayerTagMap = {};

    Object.keys(tags).forEach(k => {
      let values: Array<string | LayerTagValue> = tags[k];
      result[k] = values.map(v => {
        let vAsTag = <LayerTagValue>v;
        if (vAsTag.value && vAsTag.label) {
          return vAsTag;
        }
        let vAsString = <string>v;
        return {
          value: vAsString,
          label: vAsString
        };
      })
    })
    return result;
  }

  findTags() {
    if (this.publication.pointdata) {
      this.availableTags = this.processTags(this.publication.pointdata.tags);
    } else {
      this.availableTags = this.processTags(this.layer.flattenedSettings.options.tags);
    }
    this.setDefaultTags();
  }

  tagChanged(t: string) {
    this.queryPointData();
    this.update(null);
  }

  setDefaultTags() {
    if (!this.availableTags) {
      return;
    }

    Object.keys(this.availableTags).forEach(tag => {
      if (this.tags[tag] === undefined) {
        this.tags[tag] = this.availableTags[tag][0].value;
      }
    });

    this.updateLayer();
  }

  zoomToExtent() {
    if (!this.map) {
      console.log('NO MAP!');
      return;
    }

    this.map.lat = this.layer.layer.lat;
    this.map.lng = this.layer.layer.lon;
    this.map.zoom = this.layer.layer.zoom || 13;
  }

  pointSelection(): PointSelection {
    return {
      catalog: this.publication.pointdata,
      variable: this.selectedVariable,
      feature: this.selectedFeature,
      tags: this.tags
    };
  }

  queryPointData() {
    let pointdata = this.publication && this.publication.pointdata;

    if (!this.publication || !this.publication.pointdata) {
      return;
    }

    this.pointSelectionChanged();
    this.updateVariables();
  }

  updateVariables(){
    let sel = this.pointSelection();
    this.pointSelectionService.timeseriesVariables(
      sel).subscribe(variables => {
        this.pointVariables = variables.slice();
        if(this.publication.pointdata.exclude){
          this.pointVariables = this.pointVariables.filter(v=>{
            return !this.publication.pointdata.exclude.some(pattern=>{
              return !!v.value.match(pattern);
            });
          });
        }
        if(!this.pointVariables.length){
          this.selectedVariable = null;
        } else if (this.pointVariables.findIndex(t=>t.value===this.selectedVariable) < 0) {
          if (this.pointVariables.findIndex(t=>t.value===this.publication.pointdata.defaultVariable) >= 0) {
            this.selectedVariable = this.publication.pointdata.defaultVariable;
          } else {
            this.selectedVariable = this.pointVariables[0].value;
          }
        }
        this.pointSelectionChanged();
      });
  }

  pointSelectionChanged() {
    this.pointSelectionService.pointSelection(this.pointSelection());
  }
}
