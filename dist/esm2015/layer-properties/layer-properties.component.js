"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const map_wald_1 = require("map-wald");
const layered_map_component_1 = require("../layered-map/layered-map.component");
let LayerPropertiesComponent = class LayerPropertiesComponent {
    constructor(pointSelectionService) {
        this.pointSelectionService = pointSelectionService;
        this.getKeys = Object.keys;
        this.propertyChanged = new core_1.EventEmitter();
        this.tooltipPlacement = 'right';
        this.availableTags = null;
        this.tags = {};
        this.pointVariables = [];
    }
    get publication() {
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
                this.map.featureSelected.subscribe((evt) => this.featureSelected(evt));
        }
        if (this.layer) {
            setTimeout(() => {
                this.findTags();
            });
        }
    }
    ngOnDestroy() {
        if (this.selectedFeatureSubscription) {
            this.selectedFeatureSubscription.unsubscribe();
        }
    }
    featureSelected(evt) {
        if (!this.publication || !this.publication.pointdata) {
            return;
        }
        this.selectedFeature = evt.feature;
        // No guarantee that this is from the same layer!!!!
        this.queryPointData();
    }
    publicationSelected(idx) {
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
    update(event) {
        this.updateLayer();
        setTimeout(() => {
            this.findTags();
        });
    }
    processTags(tags) {
        if (!tags) {
            return null;
        }
        let result = {};
        Object.keys(tags).forEach(k => {
            let values = tags[k];
            result[k] = values.map(v => {
                let vAsTag = v;
                if (vAsTag.value && vAsTag.label) {
                    return vAsTag;
                }
                let vAsString = v;
                return {
                    value: vAsString,
                    label: vAsString
                };
            });
        });
        return result;
    }
    findTags() {
        if (this.publication.pointdata) {
            this.availableTags = this.processTags(this.publication.pointdata.tags);
        }
        else {
            this.availableTags = this.processTags(this.layer.flattenedSettings.options.tags);
        }
        this.setDefaultTags();
    }
    tagChanged(t) {
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
    pointSelection() {
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
    updateVariables() {
        let sel = this.pointSelection();
        this.pointSelectionService.timeseriesVariables(sel).subscribe(variables => {
            this.pointVariables = variables.slice();
            if (this.publication.pointdata.exclude) {
                this.pointVariables = this.pointVariables.filter(v => {
                    return !this.publication.pointdata.exclude.some(pattern => {
                        return !!v.value.match(pattern);
                    });
                });
            }
            if (!this.pointVariables.length) {
                this.selectedVariable = null;
            }
            else if (this.pointVariables.findIndex(t => t.value === this.selectedVariable) < 0) {
                if (this.pointVariables.findIndex(t => t.value === this.publication.pointdata.defaultVariable) >= 0) {
                    this.selectedVariable = this.publication.pointdata.defaultVariable;
                }
                else {
                    this.selectedVariable = this.pointVariables[0].value;
                }
            }
            this.pointSelectionChanged();
        });
    }
    pointSelectionChanged() {
        this.pointSelectionService.pointSelection(this.pointSelection());
    }
};
LayerPropertiesComponent.ctorParameters = () => [
    { type: map_wald_1.PointSelectionService }
];
__decorate([
    core_1.Input(),
    __metadata("design:type", map_wald_1.MappedLayer)
], LayerPropertiesComponent.prototype, "layer", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", layered_map_component_1.LayeredMapComponent)
], LayerPropertiesComponent.prototype, "map", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LayerPropertiesComponent.prototype, "propertyChanged", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LayerPropertiesComponent.prototype, "tooltipPlacement", void 0);
LayerPropertiesComponent = __decorate([
    core_1.Component({
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
</div>`
    }),
    __metadata("design:paramtypes", [map_wald_1.PointSelectionService])
], LayerPropertiesComponent);
exports.LayerPropertiesComponent = LayerPropertiesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItcHJvcGVydGllcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJsYXllci1wcm9wZXJ0aWVzL2xheWVyLXByb3BlcnRpZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQXdIO0FBQ3hILHVDQUMwRDtBQUMxRCxnRkFBMkU7QUFvRjNFLElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBYW5DLFlBQW9CLHFCQUE0QztRQUE1QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBWmhFLFlBQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBR1osb0JBQWUsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUN0QyxxQkFBZ0IsR0FBVyxPQUFPLENBQUM7UUFDNUMsa0JBQWEsR0FBZ0IsSUFBSSxDQUFDO1FBQ2xDLFNBQUksR0FBOEIsRUFBRSxDQUFBO1FBQ3BDLG1CQUFjLEdBQW9CLEVBQUUsQ0FBQztJQU9yQyxDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRTtZQUN0RSxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxlQUFlO1FBQ2Isa0JBQWtCO1FBQ2xCLHVGQUF1RjtRQUN2RixJQUFJO1FBQ0osb0JBQW9CO1FBQ3BCLDRDQUE0QztRQUM1QyxpQ0FBaUM7UUFDakMsdUJBQXVCO1FBQ3ZCLElBQUk7UUFDSixJQUFJLElBQUks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Q25CO0lBQVIsWUFBSyxFQUFFOzhCQUFNLDJDQUFtQjtxREFBQztBQUN4QjtJQUFULGFBQU0sRUFBRTs7aUVBQXNDO0FBQ3RDO0lBQVIsWUFBSyxFQUFFOztrRUFBb0M7QUFMakMsd0JBQXdCO0lBL0VwQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQTJFTDtLQUNOLENBQUM7cUNBYzJDLGdDQUFxQjtHQWJyRCx3QkFBd0IsQ0FvTXBDO0FBcE1ZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFwcGVkTGF5ZXIsIFB1YmxpY2F0aW9uLCBMYXllclRhZ1ZhbHVlLCBMYXllclRhZ01hcCxcbiAgUG9pbnRTZWxlY3Rpb25TZXJ2aWNlLCBQb2ludFNlbGVjdGlvbiB9IGZyb20gJ21hcC13YWxkJztcbmltcG9ydCB7IExheWVyZWRNYXBDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcmVkLW1hcC9sYXllcmVkLW1hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2VvbWV0cnlPYmplY3QsIEZlYXR1cmUgfSBmcm9tICdnZW9qc29uJztcblxuZGVjbGFyZSB2YXIgUGxvdGx5OiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xheWVyLXByb3BlcnRpZXMnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cbiAgPHA+PHN0cm9uZz57e2xheWVyPy50aXRsZX19PC9zdHJvbmc+XG4gICAgPHNwYW4gKm5nSWY9XCJsYXllci5kZXNjcmlwdGlvbigpXCJcbiAgICBbbmdiVG9vbHRpcF09XCJsYXllci5kZXNjcmlwdGlvbigpXCJcbiAgICBbcGxhY2VtZW50XT1cInRvb2x0aXBQbGFjZW1lbnRcIlxuICAgIGNsYXNzPVwibGF5ZXItaW5mby10YXJnZXRcIlxuICAgIGNvbnRhaW5lcj1cImJvZHlcIj5cbiAgJm5ic3A7PGkgY2xhc3M9XCJmYSBmYS1pbmZvLWNpcmNsZVwiPjwvaT5cbiAgPC9zcGFuPlxuICAmbmJzcDs8c3BhbiAqbmdJZj1cImxheWVyLmludGVycG9sYXRlZERvd25sb2FkVVJMXCI+XG4gICAgPHNtYWxsPjxhIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIFtocmVmXT1cImxheWVyLmludGVycG9sYXRlZERvd25sb2FkVVJMXCJcbiAgICAgICAgICAgICAgW25nYlRvb2x0aXBdPVwiJ0Rvd25sb2FkIGRhdGEnXCJcbiAgICAgICAgICAgICAgY29udGFpbmVyPVwiYm9keVwiPlxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1kb3dubG9hZFwiPjwvaT5cbiAgICA8L2E+PC9zbWFsbD5cbiAgPC9zcGFuPlxuICA8L3A+XG5cbiAgPGRpdiAqbmdJZj1cImxheWVyPy5sYXllci5wdWJsaWNhdGlvbnMubGVuZ3RoPjFcIj5cbiAgICA8c3BhbiAqbmdJZj1cImxheWVyLmxheWVyLnB1YmxpY2F0aW9uc1swXS50aW1lc3RlcFwiPlRpbWVzdGVwIDwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cIiFsYXllci5sYXllci5wdWJsaWNhdGlvbnNbMF0udGltZXN0ZXBcIj57eyBsYXllci5sYXllci5vcHRpb25zLnB1YmxpY2F0aW9uTGFiZWwgfHwgJ1ZhcmlhYmxlJyB9fSA8L3NwYW4+XG4gICAgPHNlbGVjdCBbKG5nTW9kZWwpXT1cImxheWVyLm9wdGlvbnMucHVibGljYXRpb25cIiAobmdNb2RlbENoYW5nZSk9XCJwdWJsaWNhdGlvblNlbGVjdGVkKCRldmVudClcIj5cbiAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IHAgb2YgbGF5ZXIubGF5ZXIucHVibGljYXRpb25zOyBsZXQgaT1pbmRleFwiIFtuZ1ZhbHVlXT1cImlcIj57e3AubGFiZWwgfHwgcC50aW1lc3RlcH19PC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+XG4gIDwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwibGF5ZXI/LmxheWVyLnB1YmxpY2F0aW9ucy5sZW5ndGg9PT0xXCI+XG4gICAge3twdWJsaWNhdGlvbj8ubGFiZWx9fVxuICA8L2Rpdj5cblxuICA8ZGl2ICpuZ0lmPVwicHVibGljYXRpb24mJnB1YmxpY2F0aW9uLnRpbWVzdGVwXCI+XG4gICAgPGhyLz5cbiAgICA8ZGF0ZS1zZWxlY3Rpb24gWyhkYXRlKV09XCJsYXllci5vcHRpb25zLmRhdGVcIlxuICAgICAgKGRhdGVDaGFuZ2UpPVwidXBkYXRlKCRldmVudClcIlxuICAgICAgW3RpbWVzdGVwXT1cInB1YmxpY2F0aW9uLnRpbWVzdGVwXCJcbiAgICAgIFtzdGVwRGF5c109XCJwdWJsaWNhdGlvbi50aW1lc3RlcE11bHRpcGxpZXJ8fDFcIlxuICAgICAgW3JlZmVyZW5jZURhdGVdPVwicHVibGljYXRpb24udGltZXN0ZXBSZWZlcmVuY2VcIlxuICAgICAgW21pbkRhdGVdPVwicHVibGljYXRpb24ub3B0aW9ucy5zdGFydFwiXG4gICAgICBbbWF4RGF0ZV09XCJwdWJsaWNhdGlvbi5vcHRpb25zLmVuZFwiPjwvZGF0ZS1zZWxlY3Rpb24+XG4gIDwvZGl2PlxuXG4gIDxkaXYgKm5nSWY9XCJsYXllci5sYXllci5vcHRpb25zLnNtYWxsRXh0ZW50XCI+XG4gICAgPGhyLz5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeVwiIChjbGljayk9XCJ6b29tVG9FeHRlbnQoKVwiPlpvb20gdG8gRXh0ZW50PC9idXR0b24+XG4gIDwvZGl2PlxuXG48IS0tXG4gIDxkaXYgKm5nSWY9XCJsYXllci5sYXllci5vcHRpb25zLnZlY3RvcnNcIj5cbiAgICA8cD5MZXRzIGZpbHRlciB0aG9zZSB7e2xheWVyLmxheWVyLm9wdGlvbnMudmVjdG9yc319cywgZWg/PC9wPlxuICA8L2Rpdj5cbi0tPlxuXG4gIDxkaXYgKm5nSWY9XCJhdmFpbGFibGVUYWdzXCI+XG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgdGFnIG9mIGdldEtleXMoYXZhaWxhYmxlVGFncylcIj5cbiAgICAgIHt7dGFnfX1cbiAgICAgIDxzZWxlY3QgWyhuZ01vZGVsKV09XCJ0YWdzW3RhZ11cIiAobmdNb2RlbENoYW5nZSk9XCJ0YWdDaGFuZ2VkKHRhZylcIj5cbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgdmFsIG9mIGF2YWlsYWJsZVRhZ3NbdGFnXVwiIFtuZ1ZhbHVlXT1cInZhbC52YWx1ZVwiPnt7dmFsLmxhYmVsfX08L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2ICpuZ0lmPVwicHVibGljYXRpb24/LnBvaW50ZGF0YVwiPlxuICAgIFZhcmlhYmxlOlxuICAgIDxzZWxlY3QgWyhuZ01vZGVsKV09XCJzZWxlY3RlZFZhcmlhYmxlXCIgKG5nTW9kZWxDaGFuZ2UpPVwicXVlcnlQb2ludERhdGEoKVwiPlxuICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgdiBvZiBwb2ludFZhcmlhYmxlc1wiIFtuZ1ZhbHVlXT1cInYudmFsdWVcIj57e3YubGFiZWx9fTwvb3B0aW9uPlxuICAgIDwvc2VsZWN0PlxuICA8L2Rpdj5cbiAgPCEtLVxuICA8ZGl2ICpuZ0lmPVwicHVibGljYXRpb25cIj5cbiAgICA8cD5TdGFydDoge3twdWJsaWNhdGlvbi5vcHRpb25zLnN0YXJ0fX08L3A+XG4gICAgPHA+RW5kOiB7e3B1YmxpY2F0aW9uLm9wdGlvbnMuZW5kfX08L3A+XG4gICAgPHA+e3twdWJsaWNhdGlvbnxqc29ufX08L3A+XG4gIDwvZGl2PlxuICA8YnV0dG9uIChjbGljayk9XCJ1cGRhdGUoKVwiPkZvcmNlIHVwZGF0ZS4uLjwvYnV0dG9uPlxuICAtLT5cbjwvZGl2PmAsIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTGF5ZXJQcm9wZXJ0aWVzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgZ2V0S2V5cyA9IE9iamVjdC5rZXlzO1xuICBASW5wdXQoKSBsYXllcjogTWFwcGVkTGF5ZXI7XG4gIEBJbnB1dCgpIG1hcDogTGF5ZXJlZE1hcENvbXBvbmVudDtcbiAgQE91dHB1dCgpIHByb3BlcnR5Q2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgdG9vbHRpcFBsYWNlbWVudDogc3RyaW5nID0gJ3JpZ2h0JztcbiAgYXZhaWxhYmxlVGFnczogTGF5ZXJUYWdNYXAgPSBudWxsO1xuICB0YWdzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge31cbiAgcG9pbnRWYXJpYWJsZXM6IExheWVyVGFnVmFsdWVbXSA9IFtdO1xuICBzZWxlY3RlZFZhcmlhYmxlOiBzdHJpbmc7XG4gIHNlbGVjdGVkRmVhdHVyZTogRmVhdHVyZTxHZW9tZXRyeU9iamVjdD47XG4gIHNlbGVjdGVkRmVhdHVyZVN1YnNjcmlwdGlvbjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcG9pbnRTZWxlY3Rpb25TZXJ2aWNlOiBQb2ludFNlbGVjdGlvblNlcnZpY2UpIHtcblxuICB9XG5cbiAgZ2V0IHB1YmxpY2F0aW9uKCk6IChQdWJsaWNhdGlvbiB8IG51bGwpIHtcbiAgICBpZiAoIXRoaXMubGF5ZXIgfHwgIXRoaXMubGF5ZXIubGF5ZXIgfHwgIXRoaXMubGF5ZXIubGF5ZXIucHVibGljYXRpb25zKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubGF5ZXIubGF5ZXIucHVibGljYXRpb25zW3RoaXMubGF5ZXIub3B0aW9ucy5wdWJsaWNhdGlvbiB8fCAwXTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyBpZih0aGlzLmxheWVyKXtcbiAgICAvLyAgIHRoaXMucHVibGljYXRpb249dGhpcy5sYXllci5sYXllci5wdWJsaWNhdGlvbnNbdGhpcy5sYXllci5vcHRpb25zLnB1YmxpY2F0aW9ufHwwXTtcbiAgICAvLyB9XG4gICAgLy8gaWYgKHRoaXMubGF5ZXIgJiZcbiAgICAvLyAgIHRoaXMubGF5ZXIubGF5ZXIub3B0aW9ucy5zbWFsbEV4dGVudCAmJlxuICAgIC8vICAgIXRoaXMubGF5ZXIuc3BhdGlhbEV4dGVudCkge1xuICAgIC8vICAgdGhpcy5sb2FkRXh0ZW50KCk7XG4gICAgLy8gfVxuICAgIGlmICh0aGlzLm1hcCkge1xuICAgICAgdGhpcy5zZWxlY3RlZEZlYXR1cmVTdWJzY3JpcHRpb24gPVxuICAgICAgICB0aGlzLm1hcC5mZWF0dXJlU2VsZWN0ZWQuc3Vic2NyaWJlKChldnQ6IHsgZmVhdHVyZTogRmVhdHVyZTxHZW9tZXRyeU9iamVjdD4sIGxheWVyPzogTWFwcGVkTGF5ZXIgfSkgPT4gdGhpcy5mZWF0dXJlU2VsZWN0ZWQoZXZ0KSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmZpbmRUYWdzKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEZlYXR1cmVTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRGZWF0dXJlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgZmVhdHVyZVNlbGVjdGVkKGV2dDogeyBmZWF0dXJlOiBGZWF0dXJlPEdlb21ldHJ5T2JqZWN0PiwgbGF5ZXI/OiBNYXBwZWRMYXllciB9KSB7XG4gICAgaWYgKCF0aGlzLnB1YmxpY2F0aW9uIHx8ICF0aGlzLnB1YmxpY2F0aW9uLnBvaW50ZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkRmVhdHVyZSA9IGV2dC5mZWF0dXJlO1xuICAgIC8vIE5vIGd1YXJhbnRlZSB0aGF0IHRoaXMgaXMgZnJvbSB0aGUgc2FtZSBsYXllciEhISFcbiAgICB0aGlzLnF1ZXJ5UG9pbnREYXRhKCk7XG4gIH1cblxuICBwdWJsaWNhdGlvblNlbGVjdGVkKGlkeDogbnVtYmVyKSB7XG4gICAgdGhpcy5sYXllci5vcHRpb25zLnB1YmxpY2F0aW9uID0gaWR4O1xuICAgIC8vIHRoaXMucHVibGljYXRpb249dGhpcy5sYXllci5sYXllci5wdWJsaWNhdGlvbnNbaWR4XTtcbiAgICBpZiAodGhpcy5wdWJsaWNhdGlvbi5wb2ludGRhdGEpIHtcbiAgICAgIHRoaXMucG9pbnRTZWxlY3Rpb25DaGFuZ2VkKCk7XG4gICAgICB0aGlzLnVwZGF0ZVZhcmlhYmxlcygpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlKGlkeCk7XG4gIH1cblxuICB1cGRhdGVMYXllcigpIHtcbiAgICB0aGlzLmxheWVyLm9wdGlvbnMudGFncyA9IHRoaXMudGFncztcbiAgICB0aGlzLmxheWVyLnVwZGF0ZSgpO1xuICAgIHRoaXMucHJvcGVydHlDaGFuZ2VkLmVtaXQodGhpcy5sYXllcik7XG4gIH1cblxuICB1cGRhdGUoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMudXBkYXRlTGF5ZXIoKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5maW5kVGFncygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvY2Vzc1RhZ3ModGFnczogeyBba2V5OiBzdHJpbmddOiBBcnJheTxzdHJpbmcgfCBMYXllclRhZ1ZhbHVlPiB9KTogTGF5ZXJUYWdNYXAge1xuICAgIGlmICghdGFncykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IHJlc3VsdDogTGF5ZXJUYWdNYXAgPSB7fTtcblxuICAgIE9iamVjdC5rZXlzKHRhZ3MpLmZvckVhY2goayA9PiB7XG4gICAgICBsZXQgdmFsdWVzOiBBcnJheTxzdHJpbmcgfCBMYXllclRhZ1ZhbHVlPiA9IHRhZ3Nba107XG4gICAgICByZXN1bHRba10gPSB2YWx1ZXMubWFwKHYgPT4ge1xuICAgICAgICBsZXQgdkFzVGFnID0gPExheWVyVGFnVmFsdWU+djtcbiAgICAgICAgaWYgKHZBc1RhZy52YWx1ZSAmJiB2QXNUYWcubGFiZWwpIHtcbiAgICAgICAgICByZXR1cm4gdkFzVGFnO1xuICAgICAgICB9XG4gICAgICAgIGxldCB2QXNTdHJpbmcgPSA8c3RyaW5nPnY7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IHZBc1N0cmluZyxcbiAgICAgICAgICBsYWJlbDogdkFzU3RyaW5nXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZpbmRUYWdzKCkge1xuICAgIGlmICh0aGlzLnB1YmxpY2F0aW9uLnBvaW50ZGF0YSkge1xuICAgICAgdGhpcy5hdmFpbGFibGVUYWdzID0gdGhpcy5wcm9jZXNzVGFncyh0aGlzLnB1YmxpY2F0aW9uLnBvaW50ZGF0YS50YWdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdmFpbGFibGVUYWdzID0gdGhpcy5wcm9jZXNzVGFncyh0aGlzLmxheWVyLmZsYXR0ZW5lZFNldHRpbmdzLm9wdGlvbnMudGFncyk7XG4gICAgfVxuICAgIHRoaXMuc2V0RGVmYXVsdFRhZ3MoKTtcbiAgfVxuXG4gIHRhZ0NoYW5nZWQodDogc3RyaW5nKSB7XG4gICAgdGhpcy5xdWVyeVBvaW50RGF0YSgpO1xuICAgIHRoaXMudXBkYXRlKG51bGwpO1xuICB9XG5cbiAgc2V0RGVmYXVsdFRhZ3MoKSB7XG4gICAgaWYgKCF0aGlzLmF2YWlsYWJsZVRhZ3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmF2YWlsYWJsZVRhZ3MpLmZvckVhY2godGFnID0+IHtcbiAgICAgIGlmICh0aGlzLnRhZ3NbdGFnXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMudGFnc1t0YWddID0gdGhpcy5hdmFpbGFibGVUYWdzW3RhZ11bMF0udmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnVwZGF0ZUxheWVyKCk7XG4gIH1cblxuICB6b29tVG9FeHRlbnQoKSB7XG4gICAgaWYgKCF0aGlzLm1hcCkge1xuICAgICAgY29uc29sZS5sb2coJ05PIE1BUCEnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm1hcC5sYXQgPSB0aGlzLmxheWVyLmxheWVyLmxhdDtcbiAgICB0aGlzLm1hcC5sbmcgPSB0aGlzLmxheWVyLmxheWVyLmxvbjtcbiAgICB0aGlzLm1hcC56b29tID0gdGhpcy5sYXllci5sYXllci56b29tIHx8IDEzO1xuICB9XG5cbiAgcG9pbnRTZWxlY3Rpb24oKTogUG9pbnRTZWxlY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICBjYXRhbG9nOiB0aGlzLnB1YmxpY2F0aW9uLnBvaW50ZGF0YSxcbiAgICAgIHZhcmlhYmxlOiB0aGlzLnNlbGVjdGVkVmFyaWFibGUsXG4gICAgICBmZWF0dXJlOiB0aGlzLnNlbGVjdGVkRmVhdHVyZSxcbiAgICAgIHRhZ3M6IHRoaXMudGFnc1xuICAgIH07XG4gIH1cblxuICBxdWVyeVBvaW50RGF0YSgpIHtcbiAgICBsZXQgcG9pbnRkYXRhID0gdGhpcy5wdWJsaWNhdGlvbiAmJiB0aGlzLnB1YmxpY2F0aW9uLnBvaW50ZGF0YTtcblxuICAgIGlmICghdGhpcy5wdWJsaWNhdGlvbiB8fCAhdGhpcy5wdWJsaWNhdGlvbi5wb2ludGRhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnBvaW50U2VsZWN0aW9uQ2hhbmdlZCgpO1xuICAgIHRoaXMudXBkYXRlVmFyaWFibGVzKCk7XG4gIH1cblxuICB1cGRhdGVWYXJpYWJsZXMoKXtcbiAgICBsZXQgc2VsID0gdGhpcy5wb2ludFNlbGVjdGlvbigpO1xuICAgIHRoaXMucG9pbnRTZWxlY3Rpb25TZXJ2aWNlLnRpbWVzZXJpZXNWYXJpYWJsZXMoXG4gICAgICBzZWwpLnN1YnNjcmliZSh2YXJpYWJsZXMgPT4ge1xuICAgICAgICB0aGlzLnBvaW50VmFyaWFibGVzID0gdmFyaWFibGVzLnNsaWNlKCk7XG4gICAgICAgIGlmKHRoaXMucHVibGljYXRpb24ucG9pbnRkYXRhLmV4Y2x1ZGUpe1xuICAgICAgICAgIHRoaXMucG9pbnRWYXJpYWJsZXMgPSB0aGlzLnBvaW50VmFyaWFibGVzLmZpbHRlcih2PT57XG4gICAgICAgICAgICByZXR1cm4gIXRoaXMucHVibGljYXRpb24ucG9pbnRkYXRhLmV4Y2x1ZGUuc29tZShwYXR0ZXJuPT57XG4gICAgICAgICAgICAgIHJldHVybiAhIXYudmFsdWUubWF0Y2gocGF0dGVybik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZighdGhpcy5wb2ludFZhcmlhYmxlcy5sZW5ndGgpe1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWYXJpYWJsZSA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wb2ludFZhcmlhYmxlcy5maW5kSW5kZXgodD0+dC52YWx1ZT09PXRoaXMuc2VsZWN0ZWRWYXJpYWJsZSkgPCAwKSB7XG4gICAgICAgICAgaWYgKHRoaXMucG9pbnRWYXJpYWJsZXMuZmluZEluZGV4KHQ9PnQudmFsdWU9PT10aGlzLnB1YmxpY2F0aW9uLnBvaW50ZGF0YS5kZWZhdWx0VmFyaWFibGUpID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWYXJpYWJsZSA9IHRoaXMucHVibGljYXRpb24ucG9pbnRkYXRhLmRlZmF1bHRWYXJpYWJsZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZhcmlhYmxlID0gdGhpcy5wb2ludFZhcmlhYmxlc1swXS52YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb2ludFNlbGVjdGlvbkNoYW5nZWQoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcG9pbnRTZWxlY3Rpb25DaGFuZ2VkKCkge1xuICAgIHRoaXMucG9pbnRTZWxlY3Rpb25TZXJ2aWNlLnBvaW50U2VsZWN0aW9uKHRoaXMucG9pbnRTZWxlY3Rpb24oKSk7XG4gIH1cbn1cbiJdfQ==