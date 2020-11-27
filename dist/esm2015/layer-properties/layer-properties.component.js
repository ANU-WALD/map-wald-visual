"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerPropertiesComponent = void 0;
const core_1 = require("@angular/core");
const map_wald_1 = require("map-wald");
const layered_map_component_1 = require("../layered-map/layered-map.component");
const i0 = require("@angular/core");
const i1 = require("map-wald");
const i2 = require("@angular/common");
const i3 = require("@ng-bootstrap/ng-bootstrap");
const i4 = require("@angular/forms");
const i5 = require("../date-selection/date-selection.component");
function LayerPropertiesComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 3);
    i0.ɵɵtext(1, " \u00A0");
    i0.ɵɵelement(2, "i", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngbTooltip", ctx_r0.layer.description())("placement", ctx_r0.tooltipPlacement);
} }
function LayerPropertiesComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "small");
    i0.ɵɵelementStart(2, "a", 5);
    i0.ɵɵelement(3, "i", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("href", ctx_r1.layer.interpolatedDownloadURL, i0.ɵɵsanitizeUrl)("ngbTooltip", "Download data");
} }
function LayerPropertiesComponent_div_7_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Timestep ");
    i0.ɵɵelementEnd();
} }
function LayerPropertiesComponent_div_7_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r9.layer.layer.options.publicationLabel || "Variable", " ");
} }
function LayerPropertiesComponent_div_7_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    i0.ɵɵproperty("ngValue", i_r12);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(p_r11.label || p_r11.timestep);
} }
function LayerPropertiesComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, LayerPropertiesComponent_div_7_span_1_Template, 2, 0, "span", 2);
    i0.ɵɵtemplate(2, LayerPropertiesComponent_div_7_span_2_Template, 2, 1, "span", 2);
    i0.ɵɵelementStart(3, "select", 7);
    i0.ɵɵlistener("ngModelChange", function LayerPropertiesComponent_div_7_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.layer.options.publication = $event; })("ngModelChange", function LayerPropertiesComponent_div_7_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.publicationSelected($event); });
    i0.ɵɵtemplate(4, LayerPropertiesComponent_div_7_option_4_Template, 2, 2, "option", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.layer.layer.publications[0].timestep);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.layer.layer.publications[0].timestep);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r2.layer.options.publication);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.layer.layer.publications);
} }
function LayerPropertiesComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.publication == null ? null : ctx_r3.publication.label, " ");
} }
function LayerPropertiesComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "hr");
    i0.ɵɵelementStart(2, "date-selection", 10);
    i0.ɵɵlistener("dateChange", function LayerPropertiesComponent_div_9_Template_date_selection_dateChange_2_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.layer.options.date = $event; })("dateChange", function LayerPropertiesComponent_div_9_Template_date_selection_dateChange_2_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.update($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("date", ctx_r4.layer.options.date)("timestep", ctx_r4.publication.timestep)("stepDays", ctx_r4.publication.timestepMultiplier || 1)("referenceDate", ctx_r4.publication.timestepReference)("minDate", ctx_r4.publication.options.start)("maxDate", ctx_r4.publication.options.end);
} }
function LayerPropertiesComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "hr");
    i0.ɵɵelementStart(2, "button", 11);
    i0.ɵɵlistener("click", function LayerPropertiesComponent_div_10_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.zoomToExtent(); });
    i0.ɵɵtext(3, "Zoom to Extent");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function LayerPropertiesComponent_div_11_div_1_option_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const val_r24 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", val_r24.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(val_r24.label);
} }
function LayerPropertiesComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "select", 7);
    i0.ɵɵlistener("ngModelChange", function LayerPropertiesComponent_div_11_div_1_Template_select_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r26); const tag_r22 = ctx.$implicit; const ctx_r25 = i0.ɵɵnextContext(2); return (ctx_r25.tags[tag_r22] = $event); })("ngModelChange", function LayerPropertiesComponent_div_11_div_1_Template_select_ngModelChange_2_listener() { i0.ɵɵrestoreView(_r26); const tag_r22 = ctx.$implicit; const ctx_r27 = i0.ɵɵnextContext(2); return ctx_r27.tagChanged(tag_r22); });
    i0.ɵɵtemplate(3, LayerPropertiesComponent_div_11_div_1_option_3_Template, 2, 2, "option", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tag_r22 = ctx.$implicit;
    const ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", tag_r22, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r21.tags[tag_r22]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r21.availableTags[tag_r22]);
} }
function LayerPropertiesComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, LayerPropertiesComponent_div_11_div_1_Template, 4, 3, "div", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r6.getKeys(ctx_r6.availableTags));
} }
function LayerPropertiesComponent_div_12_option_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const v_r29 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", v_r29.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(v_r29.label);
} }
function LayerPropertiesComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Variable: ");
    i0.ɵɵelementStart(2, "select", 7);
    i0.ɵɵlistener("ngModelChange", function LayerPropertiesComponent_div_12_Template_select_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r30 = i0.ɵɵnextContext(); return ctx_r30.selectedVariable = $event; })("ngModelChange", function LayerPropertiesComponent_div_12_Template_select_ngModelChange_2_listener() { i0.ɵɵrestoreView(_r31); const ctx_r32 = i0.ɵɵnextContext(); return ctx_r32.queryPointData(); });
    i0.ɵɵtemplate(3, LayerPropertiesComponent_div_12_option_3_Template, 2, 2, "option", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r7.selectedVariable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r7.pointVariables);
} }
class LayerPropertiesComponent {
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
}
exports.LayerPropertiesComponent = LayerPropertiesComponent;
LayerPropertiesComponent.ɵfac = function LayerPropertiesComponent_Factory(t) { return new (t || LayerPropertiesComponent)(i0.ɵɵdirectiveInject(i1.PointSelectionService)); };
LayerPropertiesComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LayerPropertiesComponent, selectors: [["layer-properties"]], inputs: { layer: "layer", map: "map", tooltipPlacement: "tooltipPlacement" }, outputs: { propertyChanged: "propertyChanged" }, decls: 13, vars: 9, consts: [[1, "container-fluid"], ["class", "layer-info-target", "container", "body", 3, "ngbTooltip", "placement", 4, "ngIf"], [4, "ngIf"], ["container", "body", 1, "layer-info-target", 3, "ngbTooltip", "placement"], [1, "fa", "fa-info-circle"], ["target", "_blank", "container", "body", 3, "href", "ngbTooltip"], [1, "fa", "fa-download"], [3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], [3, "date", "timestep", "stepDays", "referenceDate", "minDate", "maxDate", "dateChange"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [4, "ngFor", "ngForOf"]], template: function LayerPropertiesComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "p");
        i0.ɵɵelementStart(2, "strong");
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, LayerPropertiesComponent_span_4_Template, 3, 2, "span", 1);
        i0.ɵɵtext(5, " \u00A0");
        i0.ɵɵtemplate(6, LayerPropertiesComponent_span_6_Template, 4, 2, "span", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, LayerPropertiesComponent_div_7_Template, 5, 4, "div", 2);
        i0.ɵɵtemplate(8, LayerPropertiesComponent_div_8_Template, 2, 1, "div", 2);
        i0.ɵɵtemplate(9, LayerPropertiesComponent_div_9_Template, 3, 6, "div", 2);
        i0.ɵɵtemplate(10, LayerPropertiesComponent_div_10_Template, 4, 0, "div", 2);
        i0.ɵɵtemplate(11, LayerPropertiesComponent_div_11_Template, 2, 1, "div", 2);
        i0.ɵɵtemplate(12, LayerPropertiesComponent_div_12_Template, 4, 2, "div", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.layer == null ? null : ctx.layer.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.layer.description());
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.layer.interpolatedDownloadURL);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx.layer == null ? null : ctx.layer.layer.publications.length) > 1);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx.layer == null ? null : ctx.layer.layer.publications.length) === 1);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.publication && ctx.publication.timestep);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.layer.layer.options.smallExtent);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.availableTags);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.publication == null ? null : ctx.publication.pointdata);
    } }, directives: [i2.NgIf, i3.NgbTooltip, i4.SelectControlValueAccessor, i4.NgControlStatus, i4.NgModel, i2.NgForOf, i4.NgSelectOption, i4.ɵangular_packages_forms_forms_x, i5.DateSelectionComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LayerPropertiesComponent, [{
        type: core_1.Component,
        args: [{
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
            }]
    }], function () { return [{ type: i1.PointSelectionService }]; }, { layer: [{
            type: core_1.Input
        }], map: [{
            type: core_1.Input
        }], propertyChanged: [{
            type: core_1.Output
        }], tooltipPlacement: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItcHJvcGVydGllcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJsYXllci1wcm9wZXJ0aWVzL2xheWVyLXByb3BlcnRpZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUF3SDtBQUN4SCx1Q0FDMEQ7QUFDMUQsZ0ZBQTJFOzs7Ozs7OztJQVN2RSwrQkFLRjtJQUFBLHVCQUFNO0lBQUEsdUJBQWlDO0lBQ3ZDLGlCQUFPOzs7SUFMTCx1REFBa0Msc0NBQUE7OztJQU05Qiw0QkFDSjtJQUFBLDZCQUFPO0lBQUEsNEJBSUw7SUFBQSx1QkFBOEI7SUFDaEMsaUJBQUk7SUFBQSxpQkFBUTtJQUNkLGlCQUFPOzs7SUFMSyxlQUFzQztJQUF0Qyw2RUFBc0MsK0JBQUE7OztJQVNoRCw0QkFBbUQ7SUFBQSx5QkFBUztJQUFBLGlCQUFPOzs7SUFDbkUsNEJBQW9EO0lBQUEsWUFBeUQ7SUFBQSxpQkFBTzs7O0lBQWhFLGVBQXlEO0lBQXpELHlGQUF5RDs7O0lBRTNHLGlDQUE4RTtJQUFBLFlBQXlCO0lBQUEsaUJBQVM7Ozs7SUFBaEQsK0JBQWE7SUFBQyxlQUF5QjtJQUF6QixtREFBeUI7Ozs7SUFKM0csMkJBQ0U7SUFBQSxpRkFBbUU7SUFDbkUsaUZBQW9IO0lBQ3BILGlDQUNFO0lBRE0sMk9BQXVDLHVOQUFBO0lBQzdDLHFGQUFnSDtJQUNsSCxpQkFBUztJQUNYLGlCQUFNOzs7SUFMRyxlQUEwQztJQUExQyxrRUFBMEM7SUFDMUMsZUFBMkM7SUFBM0MsbUVBQTJDO0lBQzFDLGVBQXVDO0lBQXZDLDBEQUF1QztJQUN2QixlQUE2QjtJQUE3Qix5REFBNkI7OztJQUd2RCwyQkFDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBTTs7O0lBREosZUFDRjtJQURFLDZGQUNGOzs7O0lBRUEsMkJBQ0U7SUFBQSxxQkFDQTtJQUFBLDBDQU1zQztJQU50QixzT0FBNkIsNE1BQUE7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BMkVMLEVBQUUsTUFBTSxFQUFFLEVBQUU7YUFDbEI7d0VBR1UsS0FBSztrQkFBYixZQUFLO1lBQ0csR0FBRztrQkFBWCxZQUFLO1lBQ0ksZUFBZTtrQkFBeEIsYUFBTTtZQUNFLGdCQUFnQjtrQkFBeEIsWUFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFwcGVkTGF5ZXIsIFB1YmxpY2F0aW9uLCBMYXllclRhZ1ZhbHVlLCBMYXllclRhZ01hcCxcbiAgUG9pbnRTZWxlY3Rpb25TZXJ2aWNlLCBQb2ludFNlbGVjdGlvbiB9IGZyb20gJ21hcC13YWxkJztcbmltcG9ydCB7IExheWVyZWRNYXBDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcmVkLW1hcC9sYXllcmVkLW1hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2VvbWV0cnlPYmplY3QsIEZlYXR1cmUgfSBmcm9tICdnZW9qc29uJztcblxuZGVjbGFyZSB2YXIgUGxvdGx5OiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xheWVyLXByb3BlcnRpZXMnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cbiAgPHA+PHN0cm9uZz57e2xheWVyPy50aXRsZX19PC9zdHJvbmc+XG4gICAgPHNwYW4gKm5nSWY9XCJsYXllci5kZXNjcmlwdGlvbigpXCJcbiAgICBbbmdiVG9vbHRpcF09XCJsYXllci5kZXNjcmlwdGlvbigpXCJcbiAgICBbcGxhY2VtZW50XT1cInRvb2x0aXBQbGFjZW1lbnRcIlxuICAgIGNsYXNzPVwibGF5ZXItaW5mby10YXJnZXRcIlxuICAgIGNvbnRhaW5lcj1cImJvZHlcIj5cbiAgJm5ic3A7PGkgY2xhc3M9XCJmYSBmYS1pbmZvLWNpcmNsZVwiPjwvaT5cbiAgPC9zcGFuPlxuICAmbmJzcDs8c3BhbiAqbmdJZj1cImxheWVyLmludGVycG9sYXRlZERvd25sb2FkVVJMXCI+XG4gICAgPHNtYWxsPjxhIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIFtocmVmXT1cImxheWVyLmludGVycG9sYXRlZERvd25sb2FkVVJMXCJcbiAgICAgICAgICAgICAgW25nYlRvb2x0aXBdPVwiJ0Rvd25sb2FkIGRhdGEnXCJcbiAgICAgICAgICAgICAgY29udGFpbmVyPVwiYm9keVwiPlxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1kb3dubG9hZFwiPjwvaT5cbiAgICA8L2E+PC9zbWFsbD5cbiAgPC9zcGFuPlxuICA8L3A+XG5cbiAgPGRpdiAqbmdJZj1cImxheWVyPy5sYXllci5wdWJsaWNhdGlvbnMubGVuZ3RoPjFcIj5cbiAgICA8c3BhbiAqbmdJZj1cImxheWVyLmxheWVyLnB1YmxpY2F0aW9uc1swXS50aW1lc3RlcFwiPlRpbWVzdGVwIDwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cIiFsYXllci5sYXllci5wdWJsaWNhdGlvbnNbMF0udGltZXN0ZXBcIj57eyBsYXllci5sYXllci5vcHRpb25zLnB1YmxpY2F0aW9uTGFiZWwgfHwgJ1ZhcmlhYmxlJyB9fSA8L3NwYW4+XG4gICAgPHNlbGVjdCBbKG5nTW9kZWwpXT1cImxheWVyLm9wdGlvbnMucHVibGljYXRpb25cIiAobmdNb2RlbENoYW5nZSk9XCJwdWJsaWNhdGlvblNlbGVjdGVkKCRldmVudClcIj5cbiAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IHAgb2YgbGF5ZXIubGF5ZXIucHVibGljYXRpb25zOyBsZXQgaT1pbmRleFwiIFtuZ1ZhbHVlXT1cImlcIj57e3AubGFiZWwgfHwgcC50aW1lc3RlcH19PC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+XG4gIDwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwibGF5ZXI/LmxheWVyLnB1YmxpY2F0aW9ucy5sZW5ndGg9PT0xXCI+XG4gICAge3twdWJsaWNhdGlvbj8ubGFiZWx9fVxuICA8L2Rpdj5cblxuICA8ZGl2ICpuZ0lmPVwicHVibGljYXRpb24mJnB1YmxpY2F0aW9uLnRpbWVzdGVwXCI+XG4gICAgPGhyLz5cbiAgICA8ZGF0ZS1zZWxlY3Rpb24gWyhkYXRlKV09XCJsYXllci5vcHRpb25zLmRhdGVcIlxuICAgICAgKGRhdGVDaGFuZ2UpPVwidXBkYXRlKCRldmVudClcIlxuICAgICAgW3RpbWVzdGVwXT1cInB1YmxpY2F0aW9uLnRpbWVzdGVwXCJcbiAgICAgIFtzdGVwRGF5c109XCJwdWJsaWNhdGlvbi50aW1lc3RlcE11bHRpcGxpZXJ8fDFcIlxuICAgICAgW3JlZmVyZW5jZURhdGVdPVwicHVibGljYXRpb24udGltZXN0ZXBSZWZlcmVuY2VcIlxuICAgICAgW21pbkRhdGVdPVwicHVibGljYXRpb24ub3B0aW9ucy5zdGFydFwiXG4gICAgICBbbWF4RGF0ZV09XCJwdWJsaWNhdGlvbi5vcHRpb25zLmVuZFwiPjwvZGF0ZS1zZWxlY3Rpb24+XG4gIDwvZGl2PlxuXG4gIDxkaXYgKm5nSWY9XCJsYXllci5sYXllci5vcHRpb25zLnNtYWxsRXh0ZW50XCI+XG4gICAgPGhyLz5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeVwiIChjbGljayk9XCJ6b29tVG9FeHRlbnQoKVwiPlpvb20gdG8gRXh0ZW50PC9idXR0b24+XG4gIDwvZGl2PlxuXG48IS0tXG4gIDxkaXYgKm5nSWY9XCJsYXllci5sYXllci5vcHRpb25zLnZlY3RvcnNcIj5cbiAgICA8cD5MZXRzIGZpbHRlciB0aG9zZSB7e2xheWVyLmxheWVyLm9wdGlvbnMudmVjdG9yc319cywgZWg/PC9wPlxuICA8L2Rpdj5cbi0tPlxuXG4gIDxkaXYgKm5nSWY9XCJhdmFpbGFibGVUYWdzXCI+XG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgdGFnIG9mIGdldEtleXMoYXZhaWxhYmxlVGFncylcIj5cbiAgICAgIHt7dGFnfX1cbiAgICAgIDxzZWxlY3QgWyhuZ01vZGVsKV09XCJ0YWdzW3RhZ11cIiAobmdNb2RlbENoYW5nZSk9XCJ0YWdDaGFuZ2VkKHRhZylcIj5cbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgdmFsIG9mIGF2YWlsYWJsZVRhZ3NbdGFnXVwiIFtuZ1ZhbHVlXT1cInZhbC52YWx1ZVwiPnt7dmFsLmxhYmVsfX08L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2ICpuZ0lmPVwicHVibGljYXRpb24/LnBvaW50ZGF0YVwiPlxuICAgIFZhcmlhYmxlOlxuICAgIDxzZWxlY3QgWyhuZ01vZGVsKV09XCJzZWxlY3RlZFZhcmlhYmxlXCIgKG5nTW9kZWxDaGFuZ2UpPVwicXVlcnlQb2ludERhdGEoKVwiPlxuICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgdiBvZiBwb2ludFZhcmlhYmxlc1wiIFtuZ1ZhbHVlXT1cInYudmFsdWVcIj57e3YubGFiZWx9fTwvb3B0aW9uPlxuICAgIDwvc2VsZWN0PlxuICA8L2Rpdj5cbiAgPCEtLVxuICA8ZGl2ICpuZ0lmPVwicHVibGljYXRpb25cIj5cbiAgICA8cD5TdGFydDoge3twdWJsaWNhdGlvbi5vcHRpb25zLnN0YXJ0fX08L3A+XG4gICAgPHA+RW5kOiB7e3B1YmxpY2F0aW9uLm9wdGlvbnMuZW5kfX08L3A+XG4gICAgPHA+e3twdWJsaWNhdGlvbnxqc29ufX08L3A+XG4gIDwvZGl2PlxuICA8YnV0dG9uIChjbGljayk9XCJ1cGRhdGUoKVwiPkZvcmNlIHVwZGF0ZS4uLjwvYnV0dG9uPlxuICAtLT5cbjwvZGl2PmAsIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTGF5ZXJQcm9wZXJ0aWVzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgZ2V0S2V5cyA9IE9iamVjdC5rZXlzO1xuICBASW5wdXQoKSBsYXllcjogTWFwcGVkTGF5ZXI7XG4gIEBJbnB1dCgpIG1hcDogTGF5ZXJlZE1hcENvbXBvbmVudDtcbiAgQE91dHB1dCgpIHByb3BlcnR5Q2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgdG9vbHRpcFBsYWNlbWVudDogc3RyaW5nID0gJ3JpZ2h0JztcbiAgYXZhaWxhYmxlVGFnczogTGF5ZXJUYWdNYXAgPSBudWxsO1xuICB0YWdzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge31cbiAgcG9pbnRWYXJpYWJsZXM6IExheWVyVGFnVmFsdWVbXSA9IFtdO1xuICBzZWxlY3RlZFZhcmlhYmxlOiBzdHJpbmc7XG4gIHNlbGVjdGVkRmVhdHVyZTogRmVhdHVyZTxHZW9tZXRyeU9iamVjdD47XG4gIHNlbGVjdGVkRmVhdHVyZVN1YnNjcmlwdGlvbjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcG9pbnRTZWxlY3Rpb25TZXJ2aWNlOiBQb2ludFNlbGVjdGlvblNlcnZpY2UpIHtcblxuICB9XG5cbiAgZ2V0IHB1YmxpY2F0aW9uKCk6IChQdWJsaWNhdGlvbiB8IG51bGwpIHtcbiAgICBpZiAoIXRoaXMubGF5ZXIgfHwgIXRoaXMubGF5ZXIubGF5ZXIgfHwgIXRoaXMubGF5ZXIubGF5ZXIucHVibGljYXRpb25zKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubGF5ZXIubGF5ZXIucHVibGljYXRpb25zW3RoaXMubGF5ZXIub3B0aW9ucy5wdWJsaWNhdGlvbiB8fCAwXTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyBpZih0aGlzLmxheWVyKXtcbiAgICAvLyAgIHRoaXMucHVibGljYXRpb249dGhpcy5sYXllci5sYXllci5wdWJsaWNhdGlvbnNbdGhpcy5sYXllci5vcHRpb25zLnB1YmxpY2F0aW9ufHwwXTtcbiAgICAvLyB9XG4gICAgLy8gaWYgKHRoaXMubGF5ZXIgJiZcbiAgICAvLyAgIHRoaXMubGF5ZXIubGF5ZXIub3B0aW9ucy5zbWFsbEV4dGVudCAmJlxuICAgIC8vICAgIXRoaXMubGF5ZXIuc3BhdGlhbEV4dGVudCkge1xuICAgIC8vICAgdGhpcy5sb2FkRXh0ZW50KCk7XG4gICAgLy8gfVxuICAgIGlmICh0aGlzLm1hcCkge1xuICAgICAgdGhpcy5zZWxlY3RlZEZlYXR1cmVTdWJzY3JpcHRpb24gPVxuICAgICAgICB0aGlzLm1hcC5mZWF0dXJlU2VsZWN0ZWQuc3Vic2NyaWJlKChldnQ6IHsgZmVhdHVyZTogRmVhdHVyZTxHZW9tZXRyeU9iamVjdD4sIGxheWVyPzogTWFwcGVkTGF5ZXIgfSkgPT4gdGhpcy5mZWF0dXJlU2VsZWN0ZWQoZXZ0KSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmZpbmRUYWdzKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEZlYXR1cmVTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRGZWF0dXJlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgZmVhdHVyZVNlbGVjdGVkKGV2dDogeyBmZWF0dXJlOiBGZWF0dXJlPEdlb21ldHJ5T2JqZWN0PiwgbGF5ZXI/OiBNYXBwZWRMYXllciB9KSB7XG4gICAgaWYgKCF0aGlzLnB1YmxpY2F0aW9uIHx8ICF0aGlzLnB1YmxpY2F0aW9uLnBvaW50ZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkRmVhdHVyZSA9IGV2dC5mZWF0dXJlO1xuICAgIC8vIE5vIGd1YXJhbnRlZSB0aGF0IHRoaXMgaXMgZnJvbSB0aGUgc2FtZSBsYXllciEhISFcbiAgICB0aGlzLnF1ZXJ5UG9pbnREYXRhKCk7XG4gIH1cblxuICBwdWJsaWNhdGlvblNlbGVjdGVkKGlkeDogbnVtYmVyKSB7XG4gICAgdGhpcy5sYXllci5vcHRpb25zLnB1YmxpY2F0aW9uID0gaWR4O1xuICAgIC8vIHRoaXMucHVibGljYXRpb249dGhpcy5sYXllci5sYXllci5wdWJsaWNhdGlvbnNbaWR4XTtcbiAgICBpZiAodGhpcy5wdWJsaWNhdGlvbi5wb2ludGRhdGEpIHtcbiAgICAgIHRoaXMucG9pbnRTZWxlY3Rpb25DaGFuZ2VkKCk7XG4gICAgICB0aGlzLnVwZGF0ZVZhcmlhYmxlcygpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlKGlkeCk7XG4gIH1cblxuICB1cGRhdGVMYXllcigpIHtcbiAgICB0aGlzLmxheWVyLm9wdGlvbnMudGFncyA9IHRoaXMudGFncztcbiAgICB0aGlzLmxheWVyLnVwZGF0ZSgpO1xuICAgIHRoaXMucHJvcGVydHlDaGFuZ2VkLmVtaXQodGhpcy5sYXllcik7XG4gIH1cblxuICB1cGRhdGUoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMudXBkYXRlTGF5ZXIoKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5maW5kVGFncygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvY2Vzc1RhZ3ModGFnczogeyBba2V5OiBzdHJpbmddOiBBcnJheTxzdHJpbmcgfCBMYXllclRhZ1ZhbHVlPiB9KTogTGF5ZXJUYWdNYXAge1xuICAgIGlmICghdGFncykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IHJlc3VsdDogTGF5ZXJUYWdNYXAgPSB7fTtcblxuICAgIE9iamVjdC5rZXlzKHRhZ3MpLmZvckVhY2goayA9PiB7XG4gICAgICBsZXQgdmFsdWVzOiBBcnJheTxzdHJpbmcgfCBMYXllclRhZ1ZhbHVlPiA9IHRhZ3Nba107XG4gICAgICByZXN1bHRba10gPSB2YWx1ZXMubWFwKHYgPT4ge1xuICAgICAgICBsZXQgdkFzVGFnID0gPExheWVyVGFnVmFsdWU+djtcbiAgICAgICAgaWYgKHZBc1RhZy52YWx1ZSAmJiB2QXNUYWcubGFiZWwpIHtcbiAgICAgICAgICByZXR1cm4gdkFzVGFnO1xuICAgICAgICB9XG4gICAgICAgIGxldCB2QXNTdHJpbmcgPSA8c3RyaW5nPnY7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IHZBc1N0cmluZyxcbiAgICAgICAgICBsYWJlbDogdkFzU3RyaW5nXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZpbmRUYWdzKCkge1xuICAgIGlmICh0aGlzLnB1YmxpY2F0aW9uLnBvaW50ZGF0YSkge1xuICAgICAgdGhpcy5hdmFpbGFibGVUYWdzID0gdGhpcy5wcm9jZXNzVGFncyh0aGlzLnB1YmxpY2F0aW9uLnBvaW50ZGF0YS50YWdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdmFpbGFibGVUYWdzID0gdGhpcy5wcm9jZXNzVGFncyh0aGlzLmxheWVyLmZsYXR0ZW5lZFNldHRpbmdzLm9wdGlvbnMudGFncyk7XG4gICAgfVxuICAgIHRoaXMuc2V0RGVmYXVsdFRhZ3MoKTtcbiAgfVxuXG4gIHRhZ0NoYW5nZWQodDogc3RyaW5nKSB7XG4gICAgdGhpcy5xdWVyeVBvaW50RGF0YSgpO1xuICAgIHRoaXMudXBkYXRlKG51bGwpO1xuICB9XG5cbiAgc2V0RGVmYXVsdFRhZ3MoKSB7XG4gICAgaWYgKCF0aGlzLmF2YWlsYWJsZVRhZ3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmF2YWlsYWJsZVRhZ3MpLmZvckVhY2godGFnID0+IHtcbiAgICAgIGlmICh0aGlzLnRhZ3NbdGFnXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMudGFnc1t0YWddID0gdGhpcy5hdmFpbGFibGVUYWdzW3RhZ11bMF0udmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnVwZGF0ZUxheWVyKCk7XG4gIH1cblxuICB6b29tVG9FeHRlbnQoKSB7XG4gICAgaWYgKCF0aGlzLm1hcCkge1xuICAgICAgY29uc29sZS5sb2coJ05PIE1BUCEnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm1hcC5sYXQgPSB0aGlzLmxheWVyLmxheWVyLmxhdDtcbiAgICB0aGlzLm1hcC5sbmcgPSB0aGlzLmxheWVyLmxheWVyLmxvbjtcbiAgICB0aGlzLm1hcC56b29tID0gdGhpcy5sYXllci5sYXllci56b29tIHx8IDEzO1xuICB9XG5cbiAgcG9pbnRTZWxlY3Rpb24oKTogUG9pbnRTZWxlY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICBjYXRhbG9nOiB0aGlzLnB1YmxpY2F0aW9uLnBvaW50ZGF0YSxcbiAgICAgIHZhcmlhYmxlOiB0aGlzLnNlbGVjdGVkVmFyaWFibGUsXG4gICAgICBmZWF0dXJlOiB0aGlzLnNlbGVjdGVkRmVhdHVyZSxcbiAgICAgIHRhZ3M6IHRoaXMudGFnc1xuICAgIH07XG4gIH1cblxuICBxdWVyeVBvaW50RGF0YSgpIHtcbiAgICBsZXQgcG9pbnRkYXRhID0gdGhpcy5wdWJsaWNhdGlvbiAmJiB0aGlzLnB1YmxpY2F0aW9uLnBvaW50ZGF0YTtcblxuICAgIGlmICghdGhpcy5wdWJsaWNhdGlvbiB8fCAhdGhpcy5wdWJsaWNhdGlvbi5wb2ludGRhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnBvaW50U2VsZWN0aW9uQ2hhbmdlZCgpO1xuICAgIHRoaXMudXBkYXRlVmFyaWFibGVzKCk7XG4gIH1cblxuICB1cGRhdGVWYXJpYWJsZXMoKXtcbiAgICBsZXQgc2VsID0gdGhpcy5wb2ludFNlbGVjdGlvbigpO1xuICAgIHRoaXMucG9pbnRTZWxlY3Rpb25TZXJ2aWNlLnRpbWVzZXJpZXNWYXJpYWJsZXMoXG4gICAgICBzZWwpLnN1YnNjcmliZSh2YXJpYWJsZXMgPT4ge1xuICAgICAgICB0aGlzLnBvaW50VmFyaWFibGVzID0gdmFyaWFibGVzLnNsaWNlKCk7XG4gICAgICAgIGlmKHRoaXMucHVibGljYXRpb24ucG9pbnRkYXRhLmV4Y2x1ZGUpe1xuICAgICAgICAgIHRoaXMucG9pbnRWYXJpYWJsZXMgPSB0aGlzLnBvaW50VmFyaWFibGVzLmZpbHRlcih2PT57XG4gICAgICAgICAgICByZXR1cm4gIXRoaXMucHVibGljYXRpb24ucG9pbnRkYXRhLmV4Y2x1ZGUuc29tZShwYXR0ZXJuPT57XG4gICAgICAgICAgICAgIHJldHVybiAhIXYudmFsdWUubWF0Y2gocGF0dGVybik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZighdGhpcy5wb2ludFZhcmlhYmxlcy5sZW5ndGgpe1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWYXJpYWJsZSA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wb2ludFZhcmlhYmxlcy5maW5kSW5kZXgodD0+dC52YWx1ZT09PXRoaXMuc2VsZWN0ZWRWYXJpYWJsZSkgPCAwKSB7XG4gICAgICAgICAgaWYgKHRoaXMucG9pbnRWYXJpYWJsZXMuZmluZEluZGV4KHQ9PnQudmFsdWU9PT10aGlzLnB1YmxpY2F0aW9uLnBvaW50ZGF0YS5kZWZhdWx0VmFyaWFibGUpID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWYXJpYWJsZSA9IHRoaXMucHVibGljYXRpb24ucG9pbnRkYXRhLmRlZmF1bHRWYXJpYWJsZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZhcmlhYmxlID0gdGhpcy5wb2ludFZhcmlhYmxlc1swXS52YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb2ludFNlbGVjdGlvbkNoYW5nZWQoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcG9pbnRTZWxlY3Rpb25DaGFuZ2VkKCkge1xuICAgIHRoaXMucG9pbnRTZWxlY3Rpb25TZXJ2aWNlLnBvaW50U2VsZWN0aW9uKHRoaXMucG9pbnRTZWxlY3Rpb24oKSk7XG4gIH1cbn1cbiJdfQ==