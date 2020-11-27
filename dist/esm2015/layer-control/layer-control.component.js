"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerControlComponent = void 0;
const core_1 = require("@angular/core");
const map_wald_1 = require("map-wald");
const layered_map_component_1 = require("../layered-map/layered-map.component");
const i0 = require("@angular/core");
const i1 = require("map-wald");
const i2 = require("@angular/common");
const i3 = require("../map-legend/map-legend.component");
const i4 = require("../layer-properties/layer-properties.component");
const i5 = require("@ng-bootstrap/ng-bootstrap");
function LayerControlComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵelementStart(2, "i", 5);
    i0.ɵɵlistener("click", function LayerControlComponent_div_1_Template_i_click_2_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.allLegends(false); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 6);
    i0.ɵɵlistener("click", function LayerControlComponent_div_1_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.allLegends(true); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "br");
    i0.ɵɵelementEnd();
} }
function LayerControlComponent_div_2_div_1_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "map-legend", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const l_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("title", l_r6.title)("imageURL", l_r6.legendURL)("helpText", l_r6.description())("mapUnits", l_r6.flattenedSettings == null ? null : l_r6.flattenedSettings.units)("cbPalette", (l_r6.flattenedSettings == null ? null : l_r6.flattenedSettings.palette == null ? null : l_r6.flattenedSettings.palette.name) || (l_r6.flattenedSettings == null ? null : l_r6.flattenedSettings.palette))("cbCount", (l_r6.flattenedSettings == null ? null : l_r6.flattenedSettings.numcolorbands) || (l_r6.flattenedSettings == null ? null : l_r6.flattenedSettings.palette == null ? null : l_r6.flattenedSettings.palette.count))("cbReverse", l_r6.flattenedSettings == null ? null : l_r6.flattenedSettings.palette == null ? null : l_r6.flattenedSettings.palette.reverse)("cbRange", l_r6.flattenedSettings == null ? null : l_r6.flattenedSettings.colorscalerange);
} }
function LayerControlComponent_div_2_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, LayerControlComponent_div_2_div_1_div_2_div_1_Template, 2, 8, "div", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const l_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (l_r6.flattenedSettings == null ? null : l_r6.flattenedSettings.palette) || l_r6.legendURL);
} }
function LayerControlComponent_div_2_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "layer-properties", 20);
    i0.ɵɵlistener("propertyChanged", function LayerControlComponent_div_2_div_1_div_3_Template_layer_properties_propertyChanged_1_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(3); return ctx_r28.layerPropertyChanged($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const l_r6 = i0.ɵɵnextContext().$implicit;
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("layer", l_r6)("map", ctx_r9.map);
} }
function LayerControlComponent_div_2_div_1_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 21);
} }
function LayerControlComponent_div_2_div_1_br_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "br");
} }
function LayerControlComponent_div_2_div_1_i_8_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 22);
    i0.ɵɵlistener("click", function LayerControlComponent_div_2_div_1_i_8_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r33); const l_r6 = i0.ɵɵnextContext().$implicit; const ctx_r31 = i0.ɵɵnextContext(2); return ctx_r31.layerLegend(l_r6, false); });
    i0.ɵɵelementEnd();
} }
function LayerControlComponent_div_2_div_1_br_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "br");
} }
function LayerControlComponent_div_2_div_1_i_10_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 23);
    i0.ɵɵlistener("click", function LayerControlComponent_div_2_div_1_i_10_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r36); const l_r6 = i0.ɵɵnextContext().$implicit; const ctx_r34 = i0.ɵɵnextContext(2); return ctx_r34.layerLegend(l_r6, true); });
    i0.ɵɵelementEnd();
} }
function LayerControlComponent_div_2_div_1_br_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "br");
} }
function LayerControlComponent_div_2_div_1_i_12_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 24);
    i0.ɵɵlistener("click", function LayerControlComponent_div_2_div_1_i_12_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r39); const i_r7 = i0.ɵɵnextContext().index; const ctx_r37 = i0.ɵɵnextContext(2); return ctx_r37.moveToTop(i_r7); });
    i0.ɵɵelementEnd();
} }
function LayerControlComponent_div_2_div_1_br_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "br");
} }
function LayerControlComponent_div_2_div_1_i_14_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 25);
    i0.ɵɵlistener("click", function LayerControlComponent_div_2_div_1_i_14_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r42); const i_r7 = i0.ɵɵnextContext().index; const ctx_r40 = i0.ɵɵnextContext(2); return ctx_r40.moveUp(i_r7); });
    i0.ɵɵelementEnd();
} }
function LayerControlComponent_div_2_div_1_br_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "br");
} }
function LayerControlComponent_div_2_div_1_i_16_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 26);
    i0.ɵɵlistener("click", function LayerControlComponent_div_2_div_1_i_16_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r45); const i_r7 = i0.ɵɵnextContext().index; const ctx_r43 = i0.ɵɵnextContext(2); return ctx_r43.moveDown(i_r7); });
    i0.ɵɵelementEnd();
} }
function LayerControlComponent_div_2_div_1_br_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "br");
} }
function LayerControlComponent_div_2_div_1_i_18_Template(rf, ctx) { if (rf & 1) {
    const _r48 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 27);
    i0.ɵɵlistener("click", function LayerControlComponent_div_2_div_1_i_18_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r48); const i_r7 = i0.ɵɵnextContext().index; const ctx_r46 = i0.ɵɵnextContext(2); return ctx_r46.moveToBottom(i_r7); });
    i0.ɵɵelementEnd();
} }
function LayerControlComponent_div_2_div_1_br_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "br");
} }
function LayerControlComponent_div_2_div_1_i_20_Template(rf, ctx) { if (rf & 1) {
    const _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 28);
    i0.ɵɵlistener("click", function LayerControlComponent_div_2_div_1_i_20_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r51); const i_r7 = i0.ɵɵnextContext().index; const ctx_r49 = i0.ɵɵnextContext(2); return ctx_r49.removeLayer(i_r7); });
    i0.ɵɵelementEnd();
} }
function LayerControlComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵtemplate(2, LayerControlComponent_div_2_div_1_div_2_Template, 2, 1, "div", 2);
    i0.ɵɵtemplate(3, LayerControlComponent_div_2_div_1_div_3_Template, 2, 2, "div", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 10);
    i0.ɵɵelementStart(5, "div");
    i0.ɵɵtemplate(6, LayerControlComponent_div_2_div_1_i_6_Template, 1, 0, "i", 11);
    i0.ɵɵtemplate(7, LayerControlComponent_div_2_div_1_br_7_Template, 1, 0, "br", 2);
    i0.ɵɵtemplate(8, LayerControlComponent_div_2_div_1_i_8_Template, 1, 0, "i", 12);
    i0.ɵɵtemplate(9, LayerControlComponent_div_2_div_1_br_9_Template, 1, 0, "br", 2);
    i0.ɵɵtemplate(10, LayerControlComponent_div_2_div_1_i_10_Template, 1, 0, "i", 13);
    i0.ɵɵtemplate(11, LayerControlComponent_div_2_div_1_br_11_Template, 1, 0, "br", 2);
    i0.ɵɵtemplate(12, LayerControlComponent_div_2_div_1_i_12_Template, 1, 0, "i", 14);
    i0.ɵɵtemplate(13, LayerControlComponent_div_2_div_1_br_13_Template, 1, 0, "br", 2);
    i0.ɵɵtemplate(14, LayerControlComponent_div_2_div_1_i_14_Template, 1, 0, "i", 15);
    i0.ɵɵtemplate(15, LayerControlComponent_div_2_div_1_br_15_Template, 1, 0, "br", 2);
    i0.ɵɵtemplate(16, LayerControlComponent_div_2_div_1_i_16_Template, 1, 0, "i", 16);
    i0.ɵɵtemplate(17, LayerControlComponent_div_2_div_1_br_17_Template, 1, 0, "br", 2);
    i0.ɵɵtemplate(18, LayerControlComponent_div_2_div_1_i_18_Template, 1, 0, "i", 17);
    i0.ɵɵtemplate(19, LayerControlComponent_div_2_div_1_br_19_Template, 1, 0, "br", 2);
    i0.ɵɵtemplate(20, LayerControlComponent_div_2_div_1_i_20_Template, 1, 0, "i", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const l_r6 = ctx.$implicit;
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r5.showLegends && l_r6.options.legend);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r5.showLegends || !l_r6.options.legend);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r5.allowReorder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.allowReorder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.showLegends);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.showLegends);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.showLegends);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.showLegends);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.allowReorder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.allowReorder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.allowReorder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.allowReorder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.allowReorder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.allowReorder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.allowReorder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.allowReorder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.allowRemove);
} }
function LayerControlComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, LayerControlComponent_div_2_div_1_Template, 21, 17, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.layers);
} }
class LayerControlComponent {
    constructor(metadata) {
        this.metadata = metadata;
        this.allowRemove = true;
        this.showLegends = true;
        this.allowReorder = true;
        this.layersChange = new core_1.EventEmitter();
        this.foo = 'bar';
    }
    ngAfterViewInit() {
    }
    ngOnChanges(changes) {
        if (!changes.layers || !this.layers) {
            return;
        }
        this.applyViewMode();
        this.fetchMetadata();
    }
    applyViewMode() {
        if (this.uniformViewMode === undefined) {
            return;
        }
        this.layers.forEach(l => l.options.legend = this.uniformViewMode);
    }
    allLegends(showLegend) {
        this.uniformViewMode = showLegend;
        this.layers.forEach(l => l.options.legend = showLegend);
    }
    layerLegend(layer, showLegend) {
        this.uniformViewMode = undefined;
        layer.options.legend = showLegend;
    }
    moveToTop(idx) {
        this.layers = [this.layers[idx]].concat(this.layers.slice(0, idx)).concat(this.layers.slice(idx + 1));
        this._changed();
    }
    moveUp(idx) {
        if (idx === 0) {
            return;
        }
        var layers = this.layers;
        this.layers = layers.slice(0, idx - 1).concat([layers[idx], layers[idx - 1]]).concat(layers.slice(idx + 1));
        this._changed();
    }
    moveDown(idx) {
        if (idx === (this.layers.length - 1)) {
            return;
        }
        var layers = this.layers;
        this.layers = layers.slice(0, idx).concat([layers[idx + 1], layers[idx]]).concat(layers.slice(idx + 2));
        this._changed();
    }
    moveToBottom(idx) {
        this.layers = this.layers.slice(0, idx).concat(this.layers.slice(idx + 1)).concat([this.layers[idx]]);
        this._changed();
    }
    removeLayer(idx) {
        var layers = this.layers.slice();
        layers.splice(idx, 1);
        this.layers = layers;
        this._changed();
    }
    layerPropertyChanged(l) {
        this.layers = this.layers.slice();
        this._changed();
    }
    _changed() {
        this.fetchMetadata();
        this.layersChange.emit(this.layers);
    }
    fetchMetadata() {
        this.layers.forEach(ml => {
            this.metadata.populateMetadata(ml);
        });
    }
}
exports.LayerControlComponent = LayerControlComponent;
LayerControlComponent.ɵfac = function LayerControlComponent_Factory(t) { return new (t || LayerControlComponent)(i0.ɵɵdirectiveInject(i1.MetadataService)); };
LayerControlComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LayerControlComponent, selectors: [["layer-control"]], inputs: { layers: "layers", map: "map", allowRemove: "allowRemove", showLegends: "showLegends", allowReorder: "allowReorder" }, outputs: { layersChange: "layersChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 3, vars: 2, consts: [[1, "layers-control"], ["class", "layers-control-header", 4, "ngIf"], [4, "ngIf"], [1, "layers-control-header"], [1, "float-right"], [1, "fa", "fa-lg", "fa-cog", "discrete-icon", 3, "click"], [1, "fa", "fa-lg", "fa-th-list", "discrete-icon", 3, "click"], ["class", "layer-control d-flex justify-content-between", 4, "ngFor", "ngForOf"], [1, "layer-control", "d-flex", "justify-content-between"], [1, "p-2", 2, "width", "100%"], [1, "p-2"], ["class", "fa fa-bars discrete-icon", 4, "ngIf"], ["class", "fa fa-cog discrete-icon", "ngbTooltip", "Show layer controls", "placement", "right", "data-container", "body", 3, "click", 4, "ngIf"], ["class", "fa fa-th-list discrete-icon", "ngbTooltip", "Show layer data", "placement", "right", "data-container", "body", 3, "click", 4, "ngIf"], ["class", "fa fa-angle-double-up discrete-icon", "ngbTooltip", "Move to top", "placement", "right", "data-container", "body", 3, "click", 4, "ngIf"], ["class", "fa fa-angle-up discrete-icon", "ngbTooltip", "Move up", "placement", "right", "data-container", "body", 3, "click", 4, "ngIf"], ["class", "fa fa-angle-down discrete-icon", "ngbTooltip", "Move down", "placement", "right", "data-container", "body", 3, "click", 4, "ngIf"], ["class", "fa fa-angle-double-down discrete-icon", "ngbTooltip", "Move to bottom", "placement", "right", "data-container", "body", 3, "click", 4, "ngIf"], ["class", "fa fa-times discrete-icon", "ngbTooltip", "Remove layer", "placement", "right", "data-container", "body", "data-toggle", "tooltip", "title", "Remove layer", 3, "click", 4, "ngIf"], [3, "title", "imageURL", "helpText", "mapUnits", "cbPalette", "cbCount", "cbReverse", "cbRange"], [3, "layer", "map", "propertyChanged"], [1, "fa", "fa-bars", "discrete-icon"], ["ngbTooltip", "Show layer controls", "placement", "right", "data-container", "body", 1, "fa", "fa-cog", "discrete-icon", 3, "click"], ["ngbTooltip", "Show layer data", "placement", "right", "data-container", "body", 1, "fa", "fa-th-list", "discrete-icon", 3, "click"], ["ngbTooltip", "Move to top", "placement", "right", "data-container", "body", 1, "fa", "fa-angle-double-up", "discrete-icon", 3, "click"], ["ngbTooltip", "Move up", "placement", "right", "data-container", "body", 1, "fa", "fa-angle-up", "discrete-icon", 3, "click"], ["ngbTooltip", "Move down", "placement", "right", "data-container", "body", 1, "fa", "fa-angle-down", "discrete-icon", 3, "click"], ["ngbTooltip", "Move to bottom", "placement", "right", "data-container", "body", 1, "fa", "fa-angle-double-down", "discrete-icon", 3, "click"], ["ngbTooltip", "Remove layer", "placement", "right", "data-container", "body", "data-toggle", "tooltip", "title", "Remove layer", 1, "fa", "fa-times", "discrete-icon", 3, "click"]], template: function LayerControlComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, LayerControlComponent_div_1_Template, 5, 0, "div", 1);
        i0.ɵɵtemplate(2, LayerControlComponent_div_2_Template, 2, 1, "div", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showLegends);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.layers);
    } }, directives: [i2.NgIf, i2.NgForOf, i3.MapLegendComponent, i4.LayerPropertiesComponent, i5.NgbTooltip], styles: [".layers-control[_ngcontent-%COMP%]{\n  width:200px;\n}\n\n\n.layers-control-header[_ngcontent-%COMP%], .layer-control[_ngcontent-%COMP%]{\n  border-bottom: 1.5px solid #aaa;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LayerControlComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'layer-control',
                template: `<div class="layers-control">
  <div *ngIf="showLegends" class="layers-control-header"> <!-- header -->
    <div class="float-right">
      <!-- TODO Attach handlers and tooltips to each icon -->
      <i class="fa fa-lg fa-cog discrete-icon" (click)="allLegends(false)"></i>
      <i class="fa fa-lg fa-th-list discrete-icon" (click)="allLegends(true)"></i>
    </div>
    <br/>
  </div>

  <div *ngIf="layers">
    <div *ngFor="let l of layers; let i = index"
         class="layer-control d-flex justify-content-between">
      <div class="p-2" style="width:100%">
        <div *ngIf="showLegends&&l.options.legend">
          <div *ngIf="l.flattenedSettings?.palette || l.legendURL">
            <map-legend [title]="l.title"
              [imageURL]="l.legendURL"
              [helpText]="l.description()"
              [mapUnits]="l.flattenedSettings?.units"
              [cbPalette]="l.flattenedSettings?.palette?.name||l.flattenedSettings?.palette"
              [cbCount]="l.flattenedSettings?.numcolorbands||l.flattenedSettings?.palette?.count"
              [cbReverse]="l.flattenedSettings?.palette?.reverse"
              [cbRange]="l.flattenedSettings?.colorscalerange">
            </map-legend>
          </div>
        </div>

        <div *ngIf="!showLegends||!l.options.legend">
          <layer-properties [layer]="l"
                            [map]="map"
                            (propertyChanged)="layerPropertyChanged($event)">
          </layer-properties>
        </div>
      </div>
      <div class="p-2">
          <div>
            <!-- TODO Attach handlers and tooltips to each icon -->
            <i *ngIf="allowReorder" class="fa fa-bars discrete-icon"></i><br *ngIf="allowReorder"/>
            <i *ngIf="showLegends" class="fa fa-cog discrete-icon"
               ngbTooltip="Show layer controls" placement="right" data-container="body"
               (click)="layerLegend(l,false)"></i><br *ngIf="showLegends"/>
            <i *ngIf="showLegends" class="fa fa-th-list discrete-icon"
               ngbTooltip="Show layer data" placement="right" data-container="body"
               (click)="layerLegend(l,true)"></i><br *ngIf="showLegends"/>
            <i *ngIf="allowReorder" class="fa fa-angle-double-up discrete-icon"
               ngbTooltip="Move to top" placement="right" data-container="body"
              (click)="moveToTop(i)"></i><br *ngIf="allowReorder"/>
            <i *ngIf="allowReorder" class="fa fa-angle-up discrete-icon"
               ngbTooltip="Move up" placement="right" data-container="body"
              (click)="moveUp(i)"></i><br *ngIf="allowReorder"/>
            <i *ngIf="allowReorder" class="fa fa-angle-down discrete-icon"
               ngbTooltip="Move down" placement="right" data-container="body"
              (click)="moveDown(i)"></i><br *ngIf="allowReorder"/>
            <i *ngIf="allowReorder" class="fa fa-angle-double-down discrete-icon"
               ngbTooltip="Move to bottom" placement="right" data-container="body"
              (click)="moveToBottom(i)"></i><br *ngIf="allowReorder"/>
            <i *ngIf="allowRemove" class="fa fa-times discrete-icon"
               ngbTooltip="Remove layer" placement="right" data-container="body"
              data-toggle="tooltip" title="Remove layer"
              (click)="removeLayer(i)"></i>
          </div>
        </div>
      </div>
  </div>
</div>

<!-- Should this control be outside the map? eg to the left? -->
`, styles: [`.layers-control{
  width:200px;
}


.layers-control-header, .layer-control{
  border-bottom: 1.5px solid #aaa;
}`]
            }]
    }], function () { return [{ type: i1.MetadataService }]; }, { layers: [{
            type: core_1.Input
        }], map: [{
            type: core_1.Input
        }], allowRemove: [{
            type: core_1.Input
        }], showLegends: [{
            type: core_1.Input
        }], allowReorder: [{
            type: core_1.Input
        }], layersChange: [{
            type: core_1.Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJsYXllci1jb250cm9sL2xheWVyLWNvbnRyb2wuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUF1STtBQUN2SSx1Q0FBd0Q7QUFDeEQsZ0ZBQTJFOzs7Ozs7Ozs7SUFRekUsOEJBQXdEO0lBQ3RELDhCQUNFO0lBQ0EsNEJBQXFFO0lBQTVCLCtLQUFvQixLQUFLLEtBQUU7SUFBQyxpQkFBSTtJQUN6RSw0QkFBd0U7SUFBM0IsK0tBQW9CLElBQUksS0FBRTtJQUFDLGlCQUFJO0lBQzlFLGlCQUFNO0lBQ04scUJBQ0Y7SUFBQSxpQkFBTTs7O0lBT0UsMkJBQ0U7SUFBQSxpQ0FRYTtJQUNmLGlCQUFNOzs7SUFUUSxlQUFpQjtJQUFqQixrQ0FBaUIsNEJBQUEsZ0NBQUEsa0ZBQUEsd05BQUEsNk5BQUEsNklBQUEsMkZBQUE7OztJQUZqQywyQkFDRTtJQUFBLHdGQVVNO0lBQ1IsaUJBQU07OztJQVhFLGVBQWlEO0lBQWpELGlIQUFpRDs7OztJQWF6RCwyQkFDRTtJQUFBLDRDQUdBO0lBRGtCLDZQQUFnRDtJQUNsRSxpQkFBbUI7SUFDckIsaUJBQU07Ozs7SUFKYyxlQUFXO0lBQVgsNEJBQVcsbUJBQUE7OztJQVMzQix3QkFBNkQ7OztJQUFBLHFCQUM3RDs7OztJQUFBLDZCQUVrQztJQUEvQiwrT0FBdUIsS0FBSyxLQUFFO0lBQUMsaUJBQUk7OztJQUFBLHFCQUN0Qzs7OztJQUFBLDZCQUVpQztJQUE5QixnUEFBdUIsSUFBSSxLQUFFO0lBQUMsaUJBQUk7OztJQUFBLHFCQUNyQzs7OztJQUFBLDZCQUV5QjtJQUF2Qiw2T0FBc0I7SUFBQyxpQkFBSTs7O0lBQUEscUJBQzdCOzs7O0lBQUEsNkJBRXNCO0lBQXBCLDBPQUFtQjtJQUFDLGlCQUFJOzs7SUFBQSxxQkFDMUI7Ozs7SUFBQSw2QkFFd0I7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LENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDOztBQTVLSCxzREE2S0M7MEZBL0ZZLHFCQUFxQjswREFBckIscUJBQXFCO1FBNUVyQiw4QkFDWDtRQUFBLHNFQU9NO1FBRU4sc0VBc0RNO1FBQ1IsaUJBQU07O1FBaEVFLGVBQWlCO1FBQWpCLHNDQUFpQjtRQVNqQixlQUFZO1FBQVosaUNBQVk7O2tEQWtFUCxxQkFBcUI7Y0E5RWpDLGdCQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FvRVgsRUFBQyxNQUFNLEVBQUUsQ0FBQzs7Ozs7OztFQU9ULENBQUM7YUFBQztrRUFFTyxNQUFNO2tCQUFkLFlBQUs7WUFDRyxHQUFHO2tCQUFYLFlBQUs7WUFDRyxXQUFXO2tCQUFuQixZQUFLO1lBQ0csV0FBVztrQkFBbkIsWUFBSztZQUNHLFlBQVk7a0JBQXBCLFlBQUs7WUFDSSxZQUFZO2tCQUFyQixhQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXBwZWRMYXllciwgTWV0YWRhdGFTZXJ2aWNlIH0gZnJvbSBcIm1hcC13YWxkXCI7XG5pbXBvcnQgeyBMYXllcmVkTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJlZC1tYXAvbGF5ZXJlZC1tYXAuY29tcG9uZW50JztcblxuXG5kZWNsYXJlIHZhciBQbG90bHk6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGF5ZXItY29udHJvbCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImxheWVycy1jb250cm9sXCI+XG4gIDxkaXYgKm5nSWY9XCJzaG93TGVnZW5kc1wiIGNsYXNzPVwibGF5ZXJzLWNvbnRyb2wtaGVhZGVyXCI+IDwhLS0gaGVhZGVyIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJmbG9hdC1yaWdodFwiPlxuICAgICAgPCEtLSBUT0RPIEF0dGFjaCBoYW5kbGVycyBhbmQgdG9vbHRpcHMgdG8gZWFjaCBpY29uIC0tPlxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1sZyBmYS1jb2cgZGlzY3JldGUtaWNvblwiIChjbGljayk9XCJhbGxMZWdlbmRzKGZhbHNlKVwiPjwvaT5cbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbGcgZmEtdGgtbGlzdCBkaXNjcmV0ZS1pY29uXCIgKGNsaWNrKT1cImFsbExlZ2VuZHModHJ1ZSlcIj48L2k+XG4gICAgPC9kaXY+XG4gICAgPGJyLz5cbiAgPC9kaXY+XG5cbiAgPGRpdiAqbmdJZj1cImxheWVyc1wiPlxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGwgb2YgbGF5ZXJzOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgIGNsYXNzPVwibGF5ZXItY29udHJvbCBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwLTJcIiBzdHlsZT1cIndpZHRoOjEwMCVcIj5cbiAgICAgICAgPGRpdiAqbmdJZj1cInNob3dMZWdlbmRzJiZsLm9wdGlvbnMubGVnZW5kXCI+XG4gICAgICAgICAgPGRpdiAqbmdJZj1cImwuZmxhdHRlbmVkU2V0dGluZ3M/LnBhbGV0dGUgfHwgbC5sZWdlbmRVUkxcIj5cbiAgICAgICAgICAgIDxtYXAtbGVnZW5kIFt0aXRsZV09XCJsLnRpdGxlXCJcbiAgICAgICAgICAgICAgW2ltYWdlVVJMXT1cImwubGVnZW5kVVJMXCJcbiAgICAgICAgICAgICAgW2hlbHBUZXh0XT1cImwuZGVzY3JpcHRpb24oKVwiXG4gICAgICAgICAgICAgIFttYXBVbml0c109XCJsLmZsYXR0ZW5lZFNldHRpbmdzPy51bml0c1wiXG4gICAgICAgICAgICAgIFtjYlBhbGV0dGVdPVwibC5mbGF0dGVuZWRTZXR0aW5ncz8ucGFsZXR0ZT8ubmFtZXx8bC5mbGF0dGVuZWRTZXR0aW5ncz8ucGFsZXR0ZVwiXG4gICAgICAgICAgICAgIFtjYkNvdW50XT1cImwuZmxhdHRlbmVkU2V0dGluZ3M/Lm51bWNvbG9yYmFuZHN8fGwuZmxhdHRlbmVkU2V0dGluZ3M/LnBhbGV0dGU/LmNvdW50XCJcbiAgICAgICAgICAgICAgW2NiUmV2ZXJzZV09XCJsLmZsYXR0ZW5lZFNldHRpbmdzPy5wYWxldHRlPy5yZXZlcnNlXCJcbiAgICAgICAgICAgICAgW2NiUmFuZ2VdPVwibC5mbGF0dGVuZWRTZXR0aW5ncz8uY29sb3JzY2FsZXJhbmdlXCI+XG4gICAgICAgICAgICA8L21hcC1sZWdlbmQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgKm5nSWY9XCIhc2hvd0xlZ2VuZHN8fCFsLm9wdGlvbnMubGVnZW5kXCI+XG4gICAgICAgICAgPGxheWVyLXByb3BlcnRpZXMgW2xheWVyXT1cImxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttYXBdPVwibWFwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocHJvcGVydHlDaGFuZ2VkKT1cImxheWVyUHJvcGVydHlDaGFuZ2VkKCRldmVudClcIj5cbiAgICAgICAgICA8L2xheWVyLXByb3BlcnRpZXM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicC0yXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDwhLS0gVE9ETyBBdHRhY2ggaGFuZGxlcnMgYW5kIHRvb2x0aXBzIHRvIGVhY2ggaWNvbiAtLT5cbiAgICAgICAgICAgIDxpICpuZ0lmPVwiYWxsb3dSZW9yZGVyXCIgY2xhc3M9XCJmYSBmYS1iYXJzIGRpc2NyZXRlLWljb25cIj48L2k+PGJyICpuZ0lmPVwiYWxsb3dSZW9yZGVyXCIvPlxuICAgICAgICAgICAgPGkgKm5nSWY9XCJzaG93TGVnZW5kc1wiIGNsYXNzPVwiZmEgZmEtY29nIGRpc2NyZXRlLWljb25cIlxuICAgICAgICAgICAgICAgbmdiVG9vbHRpcD1cIlNob3cgbGF5ZXIgY29udHJvbHNcIiBwbGFjZW1lbnQ9XCJyaWdodFwiIGRhdGEtY29udGFpbmVyPVwiYm9keVwiXG4gICAgICAgICAgICAgICAoY2xpY2spPVwibGF5ZXJMZWdlbmQobCxmYWxzZSlcIj48L2k+PGJyICpuZ0lmPVwic2hvd0xlZ2VuZHNcIi8+XG4gICAgICAgICAgICA8aSAqbmdJZj1cInNob3dMZWdlbmRzXCIgY2xhc3M9XCJmYSBmYS10aC1saXN0IGRpc2NyZXRlLWljb25cIlxuICAgICAgICAgICAgICAgbmdiVG9vbHRpcD1cIlNob3cgbGF5ZXIgZGF0YVwiIHBsYWNlbWVudD1cInJpZ2h0XCIgZGF0YS1jb250YWluZXI9XCJib2R5XCJcbiAgICAgICAgICAgICAgIChjbGljayk9XCJsYXllckxlZ2VuZChsLHRydWUpXCI+PC9pPjxiciAqbmdJZj1cInNob3dMZWdlbmRzXCIvPlxuICAgICAgICAgICAgPGkgKm5nSWY9XCJhbGxvd1Jlb3JkZXJcIiBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvdWJsZS11cCBkaXNjcmV0ZS1pY29uXCJcbiAgICAgICAgICAgICAgIG5nYlRvb2x0aXA9XCJNb3ZlIHRvIHRvcFwiIHBsYWNlbWVudD1cInJpZ2h0XCIgZGF0YS1jb250YWluZXI9XCJib2R5XCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cIm1vdmVUb1RvcChpKVwiPjwvaT48YnIgKm5nSWY9XCJhbGxvd1Jlb3JkZXJcIi8+XG4gICAgICAgICAgICA8aSAqbmdJZj1cImFsbG93UmVvcmRlclwiIGNsYXNzPVwiZmEgZmEtYW5nbGUtdXAgZGlzY3JldGUtaWNvblwiXG4gICAgICAgICAgICAgICBuZ2JUb29sdGlwPVwiTW92ZSB1cFwiIHBsYWNlbWVudD1cInJpZ2h0XCIgZGF0YS1jb250YWluZXI9XCJib2R5XCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cIm1vdmVVcChpKVwiPjwvaT48YnIgKm5nSWY9XCJhbGxvd1Jlb3JkZXJcIi8+XG4gICAgICAgICAgICA8aSAqbmdJZj1cImFsbG93UmVvcmRlclwiIGNsYXNzPVwiZmEgZmEtYW5nbGUtZG93biBkaXNjcmV0ZS1pY29uXCJcbiAgICAgICAgICAgICAgIG5nYlRvb2x0aXA9XCJNb3ZlIGRvd25cIiBwbGFjZW1lbnQ9XCJyaWdodFwiIGRhdGEtY29udGFpbmVyPVwiYm9keVwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJtb3ZlRG93bihpKVwiPjwvaT48YnIgKm5nSWY9XCJhbGxvd1Jlb3JkZXJcIi8+XG4gICAgICAgICAgICA8aSAqbmdJZj1cImFsbG93UmVvcmRlclwiIGNsYXNzPVwiZmEgZmEtYW5nbGUtZG91YmxlLWRvd24gZGlzY3JldGUtaWNvblwiXG4gICAgICAgICAgICAgICBuZ2JUb29sdGlwPVwiTW92ZSB0byBib3R0b21cIiBwbGFjZW1lbnQ9XCJyaWdodFwiIGRhdGEtY29udGFpbmVyPVwiYm9keVwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJtb3ZlVG9Cb3R0b20oaSlcIj48L2k+PGJyICpuZ0lmPVwiYWxsb3dSZW9yZGVyXCIvPlxuICAgICAgICAgICAgPGkgKm5nSWY9XCJhbGxvd1JlbW92ZVwiIGNsYXNzPVwiZmEgZmEtdGltZXMgZGlzY3JldGUtaWNvblwiXG4gICAgICAgICAgICAgICBuZ2JUb29sdGlwPVwiUmVtb3ZlIGxheWVyXCIgcGxhY2VtZW50PVwicmlnaHRcIiBkYXRhLWNvbnRhaW5lcj1cImJvZHlcIlxuICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIlJlbW92ZSBsYXllclwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJyZW1vdmVMYXllcihpKVwiPjwvaT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPCEtLSBTaG91bGQgdGhpcyBjb250cm9sIGJlIG91dHNpZGUgdGhlIG1hcD8gZWcgdG8gdGhlIGxlZnQ/IC0tPlxuYCxzdHlsZXM6IFtgLmxheWVycy1jb250cm9se1xuICB3aWR0aDoyMDBweDtcbn1cblxuXG4ubGF5ZXJzLWNvbnRyb2wtaGVhZGVyLCAubGF5ZXItY29udHJvbHtcbiAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgI2FhYTtcbn1gXX0pXG5leHBvcnQgY2xhc3MgTGF5ZXJDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbGF5ZXJzOiBNYXBwZWRMYXllcltdO1xuICBASW5wdXQoKSBtYXA6IExheWVyZWRNYXBDb21wb25lbnQ7XG4gIEBJbnB1dCgpIGFsbG93UmVtb3ZlID0gdHJ1ZTtcbiAgQElucHV0KCkgc2hvd0xlZ2VuZHMgPSB0cnVlO1xuICBASW5wdXQoKSBhbGxvd1Jlb3JkZXIgPSB0cnVlO1xuICBAT3V0cHV0KCkgbGF5ZXJzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBwZWRMYXllcltdPigpO1xuICB1bmlmb3JtVmlld01vZGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gIGZvbzogc3RyaW5nID0gJ2Jhcic7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtZXRhZGF0YTpNZXRhZGF0YVNlcnZpY2UpIHtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICghY2hhbmdlcy5sYXllcnMgfHwgIXRoaXMubGF5ZXJzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYXBwbHlWaWV3TW9kZSgpO1xuICAgIHRoaXMuZmV0Y2hNZXRhZGF0YSgpO1xuICB9XG5cbiAgYXBwbHlWaWV3TW9kZSgpe1xuICAgIGlmICh0aGlzLnVuaWZvcm1WaWV3TW9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5sYXllcnMuZm9yRWFjaChsID0+IGwub3B0aW9ucy5sZWdlbmQgPSB0aGlzLnVuaWZvcm1WaWV3TW9kZSk7XG4gIH1cblxuICBhbGxMZWdlbmRzKHNob3dMZWdlbmQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnVuaWZvcm1WaWV3TW9kZSA9IHNob3dMZWdlbmQ7XG4gICAgdGhpcy5sYXllcnMuZm9yRWFjaChsID0+IGwub3B0aW9ucy5sZWdlbmQgPSBzaG93TGVnZW5kKTtcbiAgfVxuXG4gIGxheWVyTGVnZW5kKGxheWVyOiBNYXBwZWRMYXllciwgc2hvd0xlZ2VuZDogYm9vbGVhbikge1xuICAgIHRoaXMudW5pZm9ybVZpZXdNb2RlID0gdW5kZWZpbmVkO1xuICAgIGxheWVyLm9wdGlvbnMubGVnZW5kID0gc2hvd0xlZ2VuZDtcbiAgfVxuXG4gIG1vdmVUb1RvcChpZHg6IG51bWJlcikge1xuICAgIHRoaXMubGF5ZXJzID0gW3RoaXMubGF5ZXJzW2lkeF1dLmNvbmNhdCh0aGlzLmxheWVycy5zbGljZSgwLCBpZHgpKS5jb25jYXQodGhpcy5sYXllcnMuc2xpY2UoaWR4ICsgMSkpO1xuICAgIHRoaXMuX2NoYW5nZWQoKTtcbiAgfVxuXG4gIG1vdmVVcChpZHg6IG51bWJlcikge1xuICAgIGlmIChpZHggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbGF5ZXJzID0gdGhpcy5sYXllcnM7XG4gICAgdGhpcy5sYXllcnMgPSBsYXllcnMuc2xpY2UoMCwgaWR4IC0gMSkuY29uY2F0KFtsYXllcnNbaWR4XSwgbGF5ZXJzW2lkeCAtIDFdXSkuY29uY2F0KGxheWVycy5zbGljZShpZHggKyAxKSk7XG4gICAgdGhpcy5fY2hhbmdlZCgpO1xuICB9XG5cbiAgbW92ZURvd24oaWR4OiBudW1iZXIpIHtcbiAgICBpZiAoaWR4ID09PSAodGhpcy5sYXllcnMubGVuZ3RoIC0gMSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbGF5ZXJzID0gdGhpcy5sYXllcnM7XG4gICAgdGhpcy5sYXllcnMgPSBsYXllcnMuc2xpY2UoMCwgaWR4KS5jb25jYXQoW2xheWVyc1tpZHggKyAxXSwgbGF5ZXJzW2lkeF1dKS5jb25jYXQobGF5ZXJzLnNsaWNlKGlkeCArIDIpKTtcbiAgICB0aGlzLl9jaGFuZ2VkKCk7XG4gIH1cblxuICBtb3ZlVG9Cb3R0b20oaWR4OiBudW1iZXIpIHtcbiAgICB0aGlzLmxheWVycyA9IHRoaXMubGF5ZXJzLnNsaWNlKDAsIGlkeCkuY29uY2F0KHRoaXMubGF5ZXJzLnNsaWNlKGlkeCArIDEpKS5jb25jYXQoW3RoaXMubGF5ZXJzW2lkeF1dKTtcbiAgICB0aGlzLl9jaGFuZ2VkKCk7XG4gIH1cblxuICByZW1vdmVMYXllcihpZHg6IG51bWJlcikge1xuICAgIHZhciBsYXllcnMgPSB0aGlzLmxheWVycy5zbGljZSgpO1xuICAgIGxheWVycy5zcGxpY2UoaWR4LCAxKTtcbiAgICB0aGlzLmxheWVycyA9IGxheWVycztcbiAgICB0aGlzLl9jaGFuZ2VkKCk7XG4gIH1cblxuICBsYXllclByb3BlcnR5Q2hhbmdlZChsOiBNYXBwZWRMYXllcikge1xuICAgIHRoaXMubGF5ZXJzID0gdGhpcy5sYXllcnMuc2xpY2UoKTtcbiAgICB0aGlzLl9jaGFuZ2VkKCk7XG4gIH1cblxuICBwcml2YXRlIF9jaGFuZ2VkKCkge1xuICAgIHRoaXMuZmV0Y2hNZXRhZGF0YSgpO1xuICAgIHRoaXMubGF5ZXJzQ2hhbmdlLmVtaXQodGhpcy5sYXllcnMpO1xuICB9XG5cbiAgZmV0Y2hNZXRhZGF0YSgpe1xuICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobWw9PntcbiAgICAgIHRoaXMubWV0YWRhdGEucG9wdWxhdGVNZXRhZGF0YShtbCk7XG4gICAgfSlcbiAgfVxufVxuIl19