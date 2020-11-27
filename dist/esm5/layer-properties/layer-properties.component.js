"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerPropertiesComponent = void 0;
var core_1 = require("@angular/core");
var map_wald_1 = require("map-wald");
var layered_map_component_1 = require("../layered-map/layered-map.component");
var i0 = require("@angular/core");
var i1 = require("map-wald");
var i2 = require("@angular/common");
var i3 = require("@ng-bootstrap/ng-bootstrap");
var i4 = require("@angular/forms");
var i5 = require("../date-selection/date-selection.component");
function LayerPropertiesComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 3);
    i0.ɵɵtext(1, " \u00A0");
    i0.ɵɵelement(2, "i", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
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
    var ctx_r1 = i0.ɵɵnextContext();
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
    var ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r9.layer.layer.options.publicationLabel || "Variable", " ");
} }
function LayerPropertiesComponent_div_7_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var p_r11 = ctx.$implicit;
    var i_r12 = ctx.index;
    i0.ɵɵproperty("ngValue", i_r12);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(p_r11.label || p_r11.timestep);
} }
function LayerPropertiesComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, LayerPropertiesComponent_div_7_span_1_Template, 2, 0, "span", 2);
    i0.ɵɵtemplate(2, LayerPropertiesComponent_div_7_span_2_Template, 2, 1, "span", 2);
    i0.ɵɵelementStart(3, "select", 7);
    i0.ɵɵlistener("ngModelChange", function LayerPropertiesComponent_div_7_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r14); var ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.layer.options.publication = $event; })("ngModelChange", function LayerPropertiesComponent_div_7_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r14); var ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.publicationSelected($event); });
    i0.ɵɵtemplate(4, LayerPropertiesComponent_div_7_option_4_Template, 2, 2, "option", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext();
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
    var ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.publication == null ? null : ctx_r3.publication.label, " ");
} }
function LayerPropertiesComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    var _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "hr");
    i0.ɵɵelementStart(2, "date-selection", 10);
    i0.ɵɵlistener("dateChange", function LayerPropertiesComponent_div_9_Template_date_selection_dateChange_2_listener($event) { i0.ɵɵrestoreView(_r17); var ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.layer.options.date = $event; })("dateChange", function LayerPropertiesComponent_div_9_Template_date_selection_dateChange_2_listener($event) { i0.ɵɵrestoreView(_r17); var ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.update($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("date", ctx_r4.layer.options.date)("timestep", ctx_r4.publication.timestep)("stepDays", ctx_r4.publication.timestepMultiplier || 1)("referenceDate", ctx_r4.publication.timestepReference)("minDate", ctx_r4.publication.options.start)("maxDate", ctx_r4.publication.options.end);
} }
function LayerPropertiesComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    var _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "hr");
    i0.ɵɵelementStart(2, "button", 11);
    i0.ɵɵlistener("click", function LayerPropertiesComponent_div_10_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r20); var ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.zoomToExtent(); });
    i0.ɵɵtext(3, "Zoom to Extent");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function LayerPropertiesComponent_div_11_div_1_option_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var val_r24 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", val_r24.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(val_r24.label);
} }
function LayerPropertiesComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "select", 7);
    i0.ɵɵlistener("ngModelChange", function LayerPropertiesComponent_div_11_div_1_Template_select_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r26); var tag_r22 = ctx.$implicit; var ctx_r25 = i0.ɵɵnextContext(2); return (ctx_r25.tags[tag_r22] = $event); })("ngModelChange", function LayerPropertiesComponent_div_11_div_1_Template_select_ngModelChange_2_listener() { i0.ɵɵrestoreView(_r26); var tag_r22 = ctx.$implicit; var ctx_r27 = i0.ɵɵnextContext(2); return ctx_r27.tagChanged(tag_r22); });
    i0.ɵɵtemplate(3, LayerPropertiesComponent_div_11_div_1_option_3_Template, 2, 2, "option", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var tag_r22 = ctx.$implicit;
    var ctx_r21 = i0.ɵɵnextContext(2);
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
    var ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r6.getKeys(ctx_r6.availableTags));
} }
function LayerPropertiesComponent_div_12_option_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var v_r29 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", v_r29.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(v_r29.label);
} }
function LayerPropertiesComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    var _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Variable: ");
    i0.ɵɵelementStart(2, "select", 7);
    i0.ɵɵlistener("ngModelChange", function LayerPropertiesComponent_div_12_Template_select_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r31); var ctx_r30 = i0.ɵɵnextContext(); return ctx_r30.selectedVariable = $event; })("ngModelChange", function LayerPropertiesComponent_div_12_Template_select_ngModelChange_2_listener() { i0.ɵɵrestoreView(_r31); var ctx_r32 = i0.ɵɵnextContext(); return ctx_r32.queryPointData(); });
    i0.ɵɵtemplate(3, LayerPropertiesComponent_div_12_option_3_Template, 2, 2, "option", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r7.selectedVariable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r7.pointVariables);
} }
var LayerPropertiesComponent = /** @class */ (function () {
    function LayerPropertiesComponent(pointSelectionService) {
        this.pointSelectionService = pointSelectionService;
        this.getKeys = Object.keys;
        this.propertyChanged = new core_1.EventEmitter();
        this.tooltipPlacement = 'right';
        this.availableTags = null;
        this.tags = {};
        this.pointVariables = [];
    }
    Object.defineProperty(LayerPropertiesComponent.prototype, "publication", {
        get: function () {
            if (!this.layer || !this.layer.layer || !this.layer.layer.publications) {
                return null;
            }
            return this.layer.layer.publications[this.layer.options.publication || 0];
        },
        enumerable: false,
        configurable: true
    });
    LayerPropertiesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
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
                this.map.featureSelected.subscribe(function (evt) { return _this.featureSelected(evt); });
        }
        if (this.layer) {
            setTimeout(function () {
                _this.findTags();
            });
        }
    };
    LayerPropertiesComponent.prototype.ngOnDestroy = function () {
        if (this.selectedFeatureSubscription) {
            this.selectedFeatureSubscription.unsubscribe();
        }
    };
    LayerPropertiesComponent.prototype.featureSelected = function (evt) {
        if (!this.publication || !this.publication.pointdata) {
            return;
        }
        this.selectedFeature = evt.feature;
        // No guarantee that this is from the same layer!!!!
        this.queryPointData();
    };
    LayerPropertiesComponent.prototype.publicationSelected = function (idx) {
        this.layer.options.publication = idx;
        // this.publication=this.layer.layer.publications[idx];
        if (this.publication.pointdata) {
            this.pointSelectionChanged();
            this.updateVariables();
        }
        this.update(idx);
    };
    LayerPropertiesComponent.prototype.updateLayer = function () {
        this.layer.options.tags = this.tags;
        this.layer.update();
        this.propertyChanged.emit(this.layer);
    };
    LayerPropertiesComponent.prototype.update = function (event) {
        var _this = this;
        this.updateLayer();
        setTimeout(function () {
            _this.findTags();
        });
    };
    LayerPropertiesComponent.prototype.processTags = function (tags) {
        if (!tags) {
            return null;
        }
        var result = {};
        Object.keys(tags).forEach(function (k) {
            var values = tags[k];
            result[k] = values.map(function (v) {
                var vAsTag = v;
                if (vAsTag.value && vAsTag.label) {
                    return vAsTag;
                }
                var vAsString = v;
                return {
                    value: vAsString,
                    label: vAsString
                };
            });
        });
        return result;
    };
    LayerPropertiesComponent.prototype.findTags = function () {
        if (this.publication.pointdata) {
            this.availableTags = this.processTags(this.publication.pointdata.tags);
        }
        else {
            this.availableTags = this.processTags(this.layer.flattenedSettings.options.tags);
        }
        this.setDefaultTags();
    };
    LayerPropertiesComponent.prototype.tagChanged = function (t) {
        this.queryPointData();
        this.update(null);
    };
    LayerPropertiesComponent.prototype.setDefaultTags = function () {
        var _this = this;
        if (!this.availableTags) {
            return;
        }
        Object.keys(this.availableTags).forEach(function (tag) {
            if (_this.tags[tag] === undefined) {
                _this.tags[tag] = _this.availableTags[tag][0].value;
            }
        });
        this.updateLayer();
    };
    LayerPropertiesComponent.prototype.zoomToExtent = function () {
        if (!this.map) {
            console.log('NO MAP!');
            return;
        }
        this.map.lat = this.layer.layer.lat;
        this.map.lng = this.layer.layer.lon;
        this.map.zoom = this.layer.layer.zoom || 13;
    };
    LayerPropertiesComponent.prototype.pointSelection = function () {
        return {
            catalog: this.publication.pointdata,
            variable: this.selectedVariable,
            feature: this.selectedFeature,
            tags: this.tags
        };
    };
    LayerPropertiesComponent.prototype.queryPointData = function () {
        var pointdata = this.publication && this.publication.pointdata;
        if (!this.publication || !this.publication.pointdata) {
            return;
        }
        this.pointSelectionChanged();
        this.updateVariables();
    };
    LayerPropertiesComponent.prototype.updateVariables = function () {
        var _this = this;
        var sel = this.pointSelection();
        this.pointSelectionService.timeseriesVariables(sel).subscribe(function (variables) {
            _this.pointVariables = variables.slice();
            if (_this.publication.pointdata.exclude) {
                _this.pointVariables = _this.pointVariables.filter(function (v) {
                    return !_this.publication.pointdata.exclude.some(function (pattern) {
                        return !!v.value.match(pattern);
                    });
                });
            }
            if (!_this.pointVariables.length) {
                _this.selectedVariable = null;
            }
            else if (_this.pointVariables.findIndex(function (t) { return t.value === _this.selectedVariable; }) < 0) {
                if (_this.pointVariables.findIndex(function (t) { return t.value === _this.publication.pointdata.defaultVariable; }) >= 0) {
                    _this.selectedVariable = _this.publication.pointdata.defaultVariable;
                }
                else {
                    _this.selectedVariable = _this.pointVariables[0].value;
                }
            }
            _this.pointSelectionChanged();
        });
    };
    LayerPropertiesComponent.prototype.pointSelectionChanged = function () {
        this.pointSelectionService.pointSelection(this.pointSelection());
    };
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
    return LayerPropertiesComponent;
}());
exports.LayerPropertiesComponent = LayerPropertiesComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LayerPropertiesComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'layer-properties',
                template: "<div class=\"container-fluid\">\n  <p><strong>{{layer?.title}}</strong>\n    <span *ngIf=\"layer.description()\"\n    [ngbTooltip]=\"layer.description()\"\n    [placement]=\"tooltipPlacement\"\n    class=\"layer-info-target\"\n    container=\"body\">\n  &nbsp;<i class=\"fa fa-info-circle\"></i>\n  </span>\n  &nbsp;<span *ngIf=\"layer.interpolatedDownloadURL\">\n    <small><a target=\"_blank\"\n              [href]=\"layer.interpolatedDownloadURL\"\n              [ngbTooltip]=\"'Download data'\"\n              container=\"body\">\n      <i class=\"fa fa-download\"></i>\n    </a></small>\n  </span>\n  </p>\n\n  <div *ngIf=\"layer?.layer.publications.length>1\">\n    <span *ngIf=\"layer.layer.publications[0].timestep\">Timestep </span>\n    <span *ngIf=\"!layer.layer.publications[0].timestep\">{{ layer.layer.options.publicationLabel || 'Variable' }} </span>\n    <select [(ngModel)]=\"layer.options.publication\" (ngModelChange)=\"publicationSelected($event)\">\n      <option *ngFor=\"let p of layer.layer.publications; let i=index\" [ngValue]=\"i\">{{p.label || p.timestep}}</option>\n    </select>\n  </div>\n  <div *ngIf=\"layer?.layer.publications.length===1\">\n    {{publication?.label}}\n  </div>\n\n  <div *ngIf=\"publication&&publication.timestep\">\n    <hr/>\n    <date-selection [(date)]=\"layer.options.date\"\n      (dateChange)=\"update($event)\"\n      [timestep]=\"publication.timestep\"\n      [stepDays]=\"publication.timestepMultiplier||1\"\n      [referenceDate]=\"publication.timestepReference\"\n      [minDate]=\"publication.options.start\"\n      [maxDate]=\"publication.options.end\"></date-selection>\n  </div>\n\n  <div *ngIf=\"layer.layer.options.smallExtent\">\n    <hr/>\n    <button class=\"btn btn-sm btn-primary\" (click)=\"zoomToExtent()\">Zoom to Extent</button>\n  </div>\n\n<!--\n  <div *ngIf=\"layer.layer.options.vectors\">\n    <p>Lets filter those {{layer.layer.options.vectors}}s, eh?</p>\n  </div>\n-->\n\n  <div *ngIf=\"availableTags\">\n    <div *ngFor=\"let tag of getKeys(availableTags)\">\n      {{tag}}\n      <select [(ngModel)]=\"tags[tag]\" (ngModelChange)=\"tagChanged(tag)\">\n        <option *ngFor=\"let val of availableTags[tag]\" [ngValue]=\"val.value\">{{val.label}}</option>\n      </select>\n    </div>\n  </div>\n\n  <div *ngIf=\"publication?.pointdata\">\n    Variable:\n    <select [(ngModel)]=\"selectedVariable\" (ngModelChange)=\"queryPointData()\">\n      <option *ngFor=\"let v of pointVariables\" [ngValue]=\"v.value\">{{v.label}}</option>\n    </select>\n  </div>\n  <!--\n  <div *ngIf=\"publication\">\n    <p>Start: {{publication.options.start}}</p>\n    <p>End: {{publication.options.end}}</p>\n    <p>{{publication|json}}</p>\n  </div>\n  <button (click)=\"update()\">Force update...</button>\n  -->\n</div>",
                styles: []
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItcHJvcGVydGllcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJsYXllci1wcm9wZXJ0aWVzL2xheWVyLXByb3BlcnRpZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF3SDtBQUN4SCxxQ0FDMEQ7QUFDMUQsOEVBQTJFOzs7Ozs7OztJQVN2RSwrQkFLRjtJQUFBLHVCQUFNO0lBQUEsdUJBQWlDO0lBQ3ZDLGlCQUFPOzs7SUFMTCx1REFBa0Msc0NBQUE7OztJQU05Qiw0QkFDSjtJQUFBLDZCQUFPO0lBQUEsNEJBSUw7SUFBQSx1QkFBOEI7SUFDaEMsaUJBQUk7SUFBQSxpQkFBUTtJQUNkLGlCQUFPOzs7SUFMSyxlQUFzQztJQUF0Qyw2RUFBc0MsK0JBQUE7OztJQVNoRCw0QkFBbUQ7SUFBQSx5QkFBUztJQUFBLGlCQUFPOzs7SUFDbkUsNEJBQW9EO0lBQUEsWUFBeUQ7SUFBQSxpQkFBTzs7O0lBQWhFLGVBQXlEO0lBQXpELHlGQUF5RDs7O0lBRTNHLGlDQUE4RTtJQUFBLFlBQXlCO0lBQUEsaUJBQVM7Ozs7SUFBaEQsK0JBQWE7SUFBQyxlQUF5QjtJQUF6QixtREFBeUI7Ozs7SUFKM0csMkJBQ0U7SUFBQSxpRkFBbUU7SUFDbkUsaUZBQW9IO0lBQ3BILGlDQUNFO0lBRE0seU9BQXVDLHFOQUFBO0lBQzdDLHFGQUFnSDtJQUNsSCxpQkFBUztJQUNYLGlCQUFNOzs7SUFMRyxlQUEwQztJQUExQyxrRUFBMEM7SUFDMUMsZUFBMkM7SUFBM0MsbUVBQTJDO0lBQzFDLGVBQXVDO0lBQXZDLDBEQUF1QztJQUN2QixlQUE2QjtJQUE3Qix5REFBNkI7OztJQUd2RCwyQkFDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBTTs7O0lBREosZUFDRjtJQURFLDZGQUNGOzs7O0lBRUEsMkJBQ0U7SUFBQSxxQkFDQTtJQUFBLDBDQU1zQztJQU50QixvT0FBNkIsME1BQUE7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O1lBU25CLGVBQTRCO1lBQTVCLGlGQUE0Qjs7bUNBdkVwQztDQTJSQyxBQW5SRCxJQW1SQztBQXBNWSw0REFBd0I7a0RBQXhCLHdCQUF3QjtjQS9FcEMsZ0JBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUUsMnVGQTJFTDtnQkFBRSxNQUFNLEVBQUUsRUFBRTthQUNsQjt3RUFHVSxLQUFLO2tCQUFiLFlBQUs7WUFDRyxHQUFHO2tCQUFYLFlBQUs7WUFDSSxlQUFlO2tCQUF4QixhQUFNO1lBQ0UsZ0JBQWdCO2tCQUF4QixZQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXBwZWRMYXllciwgUHVibGljYXRpb24sIExheWVyVGFnVmFsdWUsIExheWVyVGFnTWFwLFxuICBQb2ludFNlbGVjdGlvblNlcnZpY2UsIFBvaW50U2VsZWN0aW9uIH0gZnJvbSAnbWFwLXdhbGQnO1xuaW1wb3J0IHsgTGF5ZXJlZE1hcENvbXBvbmVudCB9IGZyb20gJy4uL2xheWVyZWQtbWFwL2xheWVyZWQtbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHZW9tZXRyeU9iamVjdCwgRmVhdHVyZSB9IGZyb20gJ2dlb2pzb24nO1xuXG5kZWNsYXJlIHZhciBQbG90bHk6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGF5ZXItcHJvcGVydGllcycsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxuICA8cD48c3Ryb25nPnt7bGF5ZXI/LnRpdGxlfX08L3N0cm9uZz5cbiAgICA8c3BhbiAqbmdJZj1cImxheWVyLmRlc2NyaXB0aW9uKClcIlxuICAgIFtuZ2JUb29sdGlwXT1cImxheWVyLmRlc2NyaXB0aW9uKClcIlxuICAgIFtwbGFjZW1lbnRdPVwidG9vbHRpcFBsYWNlbWVudFwiXG4gICAgY2xhc3M9XCJsYXllci1pbmZvLXRhcmdldFwiXG4gICAgY29udGFpbmVyPVwiYm9keVwiPlxuICAmbmJzcDs8aSBjbGFzcz1cImZhIGZhLWluZm8tY2lyY2xlXCI+PC9pPlxuICA8L3NwYW4+XG4gICZuYnNwOzxzcGFuICpuZ0lmPVwibGF5ZXIuaW50ZXJwb2xhdGVkRG93bmxvYWRVUkxcIj5cbiAgICA8c21hbGw+PGEgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgW2hyZWZdPVwibGF5ZXIuaW50ZXJwb2xhdGVkRG93bmxvYWRVUkxcIlxuICAgICAgICAgICAgICBbbmdiVG9vbHRpcF09XCInRG93bmxvYWQgZGF0YSdcIlxuICAgICAgICAgICAgICBjb250YWluZXI9XCJib2R5XCI+XG4gICAgICA8aSBjbGFzcz1cImZhIGZhLWRvd25sb2FkXCI+PC9pPlxuICAgIDwvYT48L3NtYWxsPlxuICA8L3NwYW4+XG4gIDwvcD5cblxuICA8ZGl2ICpuZ0lmPVwibGF5ZXI/LmxheWVyLnB1YmxpY2F0aW9ucy5sZW5ndGg+MVwiPlxuICAgIDxzcGFuICpuZ0lmPVwibGF5ZXIubGF5ZXIucHVibGljYXRpb25zWzBdLnRpbWVzdGVwXCI+VGltZXN0ZXAgPC9zcGFuPlxuICAgIDxzcGFuICpuZ0lmPVwiIWxheWVyLmxheWVyLnB1YmxpY2F0aW9uc1swXS50aW1lc3RlcFwiPnt7IGxheWVyLmxheWVyLm9wdGlvbnMucHVibGljYXRpb25MYWJlbCB8fCAnVmFyaWFibGUnIH19IDwvc3Bhbj5cbiAgICA8c2VsZWN0IFsobmdNb2RlbCldPVwibGF5ZXIub3B0aW9ucy5wdWJsaWNhdGlvblwiIChuZ01vZGVsQ2hhbmdlKT1cInB1YmxpY2F0aW9uU2VsZWN0ZWQoJGV2ZW50KVwiPlxuICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgcCBvZiBsYXllci5sYXllci5wdWJsaWNhdGlvbnM7IGxldCBpPWluZGV4XCIgW25nVmFsdWVdPVwiaVwiPnt7cC5sYWJlbCB8fCBwLnRpbWVzdGVwfX08L29wdGlvbj5cbiAgICA8L3NlbGVjdD5cbiAgPC9kaXY+XG4gIDxkaXYgKm5nSWY9XCJsYXllcj8ubGF5ZXIucHVibGljYXRpb25zLmxlbmd0aD09PTFcIj5cbiAgICB7e3B1YmxpY2F0aW9uPy5sYWJlbH19XG4gIDwvZGl2PlxuXG4gIDxkaXYgKm5nSWY9XCJwdWJsaWNhdGlvbiYmcHVibGljYXRpb24udGltZXN0ZXBcIj5cbiAgICA8aHIvPlxuICAgIDxkYXRlLXNlbGVjdGlvbiBbKGRhdGUpXT1cImxheWVyLm9wdGlvbnMuZGF0ZVwiXG4gICAgICAoZGF0ZUNoYW5nZSk9XCJ1cGRhdGUoJGV2ZW50KVwiXG4gICAgICBbdGltZXN0ZXBdPVwicHVibGljYXRpb24udGltZXN0ZXBcIlxuICAgICAgW3N0ZXBEYXlzXT1cInB1YmxpY2F0aW9uLnRpbWVzdGVwTXVsdGlwbGllcnx8MVwiXG4gICAgICBbcmVmZXJlbmNlRGF0ZV09XCJwdWJsaWNhdGlvbi50aW1lc3RlcFJlZmVyZW5jZVwiXG4gICAgICBbbWluRGF0ZV09XCJwdWJsaWNhdGlvbi5vcHRpb25zLnN0YXJ0XCJcbiAgICAgIFttYXhEYXRlXT1cInB1YmxpY2F0aW9uLm9wdGlvbnMuZW5kXCI+PC9kYXRlLXNlbGVjdGlvbj5cbiAgPC9kaXY+XG5cbiAgPGRpdiAqbmdJZj1cImxheWVyLmxheWVyLm9wdGlvbnMuc21hbGxFeHRlbnRcIj5cbiAgICA8aHIvPlxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cInpvb21Ub0V4dGVudCgpXCI+Wm9vbSB0byBFeHRlbnQ8L2J1dHRvbj5cbiAgPC9kaXY+XG5cbjwhLS1cbiAgPGRpdiAqbmdJZj1cImxheWVyLmxheWVyLm9wdGlvbnMudmVjdG9yc1wiPlxuICAgIDxwPkxldHMgZmlsdGVyIHRob3NlIHt7bGF5ZXIubGF5ZXIub3B0aW9ucy52ZWN0b3JzfX1zLCBlaD88L3A+XG4gIDwvZGl2PlxuLS0+XG5cbiAgPGRpdiAqbmdJZj1cImF2YWlsYWJsZVRhZ3NcIj5cbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCB0YWcgb2YgZ2V0S2V5cyhhdmFpbGFibGVUYWdzKVwiPlxuICAgICAge3t0YWd9fVxuICAgICAgPHNlbGVjdCBbKG5nTW9kZWwpXT1cInRhZ3NbdGFnXVwiIChuZ01vZGVsQ2hhbmdlKT1cInRhZ0NoYW5nZWQodGFnKVwiPlxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCB2YWwgb2YgYXZhaWxhYmxlVGFnc1t0YWddXCIgW25nVmFsdWVdPVwidmFsLnZhbHVlXCI+e3t2YWwubGFiZWx9fTwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgKm5nSWY9XCJwdWJsaWNhdGlvbj8ucG9pbnRkYXRhXCI+XG4gICAgVmFyaWFibGU6XG4gICAgPHNlbGVjdCBbKG5nTW9kZWwpXT1cInNlbGVjdGVkVmFyaWFibGVcIiAobmdNb2RlbENoYW5nZSk9XCJxdWVyeVBvaW50RGF0YSgpXCI+XG4gICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCB2IG9mIHBvaW50VmFyaWFibGVzXCIgW25nVmFsdWVdPVwidi52YWx1ZVwiPnt7di5sYWJlbH19PC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+XG4gIDwvZGl2PlxuICA8IS0tXG4gIDxkaXYgKm5nSWY9XCJwdWJsaWNhdGlvblwiPlxuICAgIDxwPlN0YXJ0OiB7e3B1YmxpY2F0aW9uLm9wdGlvbnMuc3RhcnR9fTwvcD5cbiAgICA8cD5FbmQ6IHt7cHVibGljYXRpb24ub3B0aW9ucy5lbmR9fTwvcD5cbiAgICA8cD57e3B1YmxpY2F0aW9ufGpzb259fTwvcD5cbiAgPC9kaXY+XG4gIDxidXR0b24gKGNsaWNrKT1cInVwZGF0ZSgpXCI+Rm9yY2UgdXBkYXRlLi4uPC9idXR0b24+XG4gIC0tPlxuPC9kaXY+YCwgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBMYXllclByb3BlcnRpZXNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBnZXRLZXlzID0gT2JqZWN0LmtleXM7XG4gIEBJbnB1dCgpIGxheWVyOiBNYXBwZWRMYXllcjtcbiAgQElucHV0KCkgbWFwOiBMYXllcmVkTWFwQ29tcG9uZW50O1xuICBAT3V0cHV0KCkgcHJvcGVydHlDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSB0b29sdGlwUGxhY2VtZW50OiBzdHJpbmcgPSAncmlnaHQnO1xuICBhdmFpbGFibGVUYWdzOiBMYXllclRhZ01hcCA9IG51bGw7XG4gIHRhZ3M6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuICBwb2ludFZhcmlhYmxlczogTGF5ZXJUYWdWYWx1ZVtdID0gW107XG4gIHNlbGVjdGVkVmFyaWFibGU6IHN0cmluZztcbiAgc2VsZWN0ZWRGZWF0dXJlOiBGZWF0dXJlPEdlb21ldHJ5T2JqZWN0PjtcbiAgc2VsZWN0ZWRGZWF0dXJlU3Vic2NyaXB0aW9uOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwb2ludFNlbGVjdGlvblNlcnZpY2U6IFBvaW50U2VsZWN0aW9uU2VydmljZSkge1xuXG4gIH1cblxuICBnZXQgcHVibGljYXRpb24oKTogKFB1YmxpY2F0aW9uIHwgbnVsbCkge1xuICAgIGlmICghdGhpcy5sYXllciB8fCAhdGhpcy5sYXllci5sYXllciB8fCAhdGhpcy5sYXllci5sYXllci5wdWJsaWNhdGlvbnMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5sYXllci5sYXllci5wdWJsaWNhdGlvbnNbdGhpcy5sYXllci5vcHRpb25zLnB1YmxpY2F0aW9uIHx8IDBdO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8vIGlmKHRoaXMubGF5ZXIpe1xuICAgIC8vICAgdGhpcy5wdWJsaWNhdGlvbj10aGlzLmxheWVyLmxheWVyLnB1YmxpY2F0aW9uc1t0aGlzLmxheWVyLm9wdGlvbnMucHVibGljYXRpb258fDBdO1xuICAgIC8vIH1cbiAgICAvLyBpZiAodGhpcy5sYXllciAmJlxuICAgIC8vICAgdGhpcy5sYXllci5sYXllci5vcHRpb25zLnNtYWxsRXh0ZW50ICYmXG4gICAgLy8gICAhdGhpcy5sYXllci5zcGF0aWFsRXh0ZW50KSB7XG4gICAgLy8gICB0aGlzLmxvYWRFeHRlbnQoKTtcbiAgICAvLyB9XG4gICAgaWYgKHRoaXMubWFwKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkRmVhdHVyZVN1YnNjcmlwdGlvbiA9XG4gICAgICAgIHRoaXMubWFwLmZlYXR1cmVTZWxlY3RlZC5zdWJzY3JpYmUoKGV2dDogeyBmZWF0dXJlOiBGZWF0dXJlPEdlb21ldHJ5T2JqZWN0PiwgbGF5ZXI/OiBNYXBwZWRMYXllciB9KSA9PiB0aGlzLmZlYXR1cmVTZWxlY3RlZChldnQpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sYXllcikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZmluZFRhZ3MoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkRmVhdHVyZVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zZWxlY3RlZEZlYXR1cmVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBmZWF0dXJlU2VsZWN0ZWQoZXZ0OiB7IGZlYXR1cmU6IEZlYXR1cmU8R2VvbWV0cnlPYmplY3Q+LCBsYXllcj86IE1hcHBlZExheWVyIH0pIHtcbiAgICBpZiAoIXRoaXMucHVibGljYXRpb24gfHwgIXRoaXMucHVibGljYXRpb24ucG9pbnRkYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWRGZWF0dXJlID0gZXZ0LmZlYXR1cmU7XG4gICAgLy8gTm8gZ3VhcmFudGVlIHRoYXQgdGhpcyBpcyBmcm9tIHRoZSBzYW1lIGxheWVyISEhIVxuICAgIHRoaXMucXVlcnlQb2ludERhdGEoKTtcbiAgfVxuXG4gIHB1YmxpY2F0aW9uU2VsZWN0ZWQoaWR4OiBudW1iZXIpIHtcbiAgICB0aGlzLmxheWVyLm9wdGlvbnMucHVibGljYXRpb24gPSBpZHg7XG4gICAgLy8gdGhpcy5wdWJsaWNhdGlvbj10aGlzLmxheWVyLmxheWVyLnB1YmxpY2F0aW9uc1tpZHhdO1xuICAgIGlmICh0aGlzLnB1YmxpY2F0aW9uLnBvaW50ZGF0YSkge1xuICAgICAgdGhpcy5wb2ludFNlbGVjdGlvbkNoYW5nZWQoKTtcbiAgICAgIHRoaXMudXBkYXRlVmFyaWFibGVzKCk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGUoaWR4KTtcbiAgfVxuXG4gIHVwZGF0ZUxheWVyKCkge1xuICAgIHRoaXMubGF5ZXIub3B0aW9ucy50YWdzID0gdGhpcy50YWdzO1xuICAgIHRoaXMubGF5ZXIudXBkYXRlKCk7XG4gICAgdGhpcy5wcm9wZXJ0eUNoYW5nZWQuZW1pdCh0aGlzLmxheWVyKTtcbiAgfVxuXG4gIHVwZGF0ZShldmVudDogYW55KSB7XG4gICAgdGhpcy51cGRhdGVMYXllcigpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmZpbmRUYWdzKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcm9jZXNzVGFncyh0YWdzOiB7IFtrZXk6IHN0cmluZ106IEFycmF5PHN0cmluZyB8IExheWVyVGFnVmFsdWU+IH0pOiBMYXllclRhZ01hcCB7XG4gICAgaWYgKCF0YWdzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0OiBMYXllclRhZ01hcCA9IHt9O1xuXG4gICAgT2JqZWN0LmtleXModGFncykuZm9yRWFjaChrID0+IHtcbiAgICAgIGxldCB2YWx1ZXM6IEFycmF5PHN0cmluZyB8IExheWVyVGFnVmFsdWU+ID0gdGFnc1trXTtcbiAgICAgIHJlc3VsdFtrXSA9IHZhbHVlcy5tYXAodiA9PiB7XG4gICAgICAgIGxldCB2QXNUYWcgPSA8TGF5ZXJUYWdWYWx1ZT52O1xuICAgICAgICBpZiAodkFzVGFnLnZhbHVlICYmIHZBc1RhZy5sYWJlbCkge1xuICAgICAgICAgIHJldHVybiB2QXNUYWc7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHZBc1N0cmluZyA9IDxzdHJpbmc+djtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogdkFzU3RyaW5nLFxuICAgICAgICAgIGxhYmVsOiB2QXNTdHJpbmdcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZmluZFRhZ3MoKSB7XG4gICAgaWYgKHRoaXMucHVibGljYXRpb24ucG9pbnRkYXRhKSB7XG4gICAgICB0aGlzLmF2YWlsYWJsZVRhZ3MgPSB0aGlzLnByb2Nlc3NUYWdzKHRoaXMucHVibGljYXRpb24ucG9pbnRkYXRhLnRhZ3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF2YWlsYWJsZVRhZ3MgPSB0aGlzLnByb2Nlc3NUYWdzKHRoaXMubGF5ZXIuZmxhdHRlbmVkU2V0dGluZ3Mub3B0aW9ucy50YWdzKTtcbiAgICB9XG4gICAgdGhpcy5zZXREZWZhdWx0VGFncygpO1xuICB9XG5cbiAgdGFnQ2hhbmdlZCh0OiBzdHJpbmcpIHtcbiAgICB0aGlzLnF1ZXJ5UG9pbnREYXRhKCk7XG4gICAgdGhpcy51cGRhdGUobnVsbCk7XG4gIH1cblxuICBzZXREZWZhdWx0VGFncygpIHtcbiAgICBpZiAoIXRoaXMuYXZhaWxhYmxlVGFncykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMuYXZhaWxhYmxlVGFncykuZm9yRWFjaCh0YWcgPT4ge1xuICAgICAgaWYgKHRoaXMudGFnc1t0YWddID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy50YWdzW3RhZ10gPSB0aGlzLmF2YWlsYWJsZVRhZ3NbdGFnXVswXS52YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMudXBkYXRlTGF5ZXIoKTtcbiAgfVxuXG4gIHpvb21Ub0V4dGVudCgpIHtcbiAgICBpZiAoIXRoaXMubWFwKSB7XG4gICAgICBjb25zb2xlLmxvZygnTk8gTUFQIScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubWFwLmxhdCA9IHRoaXMubGF5ZXIubGF5ZXIubGF0O1xuICAgIHRoaXMubWFwLmxuZyA9IHRoaXMubGF5ZXIubGF5ZXIubG9uO1xuICAgIHRoaXMubWFwLnpvb20gPSB0aGlzLmxheWVyLmxheWVyLnpvb20gfHwgMTM7XG4gIH1cblxuICBwb2ludFNlbGVjdGlvbigpOiBQb2ludFNlbGVjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhdGFsb2c6IHRoaXMucHVibGljYXRpb24ucG9pbnRkYXRhLFxuICAgICAgdmFyaWFibGU6IHRoaXMuc2VsZWN0ZWRWYXJpYWJsZSxcbiAgICAgIGZlYXR1cmU6IHRoaXMuc2VsZWN0ZWRGZWF0dXJlLFxuICAgICAgdGFnczogdGhpcy50YWdzXG4gICAgfTtcbiAgfVxuXG4gIHF1ZXJ5UG9pbnREYXRhKCkge1xuICAgIGxldCBwb2ludGRhdGEgPSB0aGlzLnB1YmxpY2F0aW9uICYmIHRoaXMucHVibGljYXRpb24ucG9pbnRkYXRhO1xuXG4gICAgaWYgKCF0aGlzLnB1YmxpY2F0aW9uIHx8ICF0aGlzLnB1YmxpY2F0aW9uLnBvaW50ZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucG9pbnRTZWxlY3Rpb25DaGFuZ2VkKCk7XG4gICAgdGhpcy51cGRhdGVWYXJpYWJsZXMoKTtcbiAgfVxuXG4gIHVwZGF0ZVZhcmlhYmxlcygpe1xuICAgIGxldCBzZWwgPSB0aGlzLnBvaW50U2VsZWN0aW9uKCk7XG4gICAgdGhpcy5wb2ludFNlbGVjdGlvblNlcnZpY2UudGltZXNlcmllc1ZhcmlhYmxlcyhcbiAgICAgIHNlbCkuc3Vic2NyaWJlKHZhcmlhYmxlcyA9PiB7XG4gICAgICAgIHRoaXMucG9pbnRWYXJpYWJsZXMgPSB2YXJpYWJsZXMuc2xpY2UoKTtcbiAgICAgICAgaWYodGhpcy5wdWJsaWNhdGlvbi5wb2ludGRhdGEuZXhjbHVkZSl7XG4gICAgICAgICAgdGhpcy5wb2ludFZhcmlhYmxlcyA9IHRoaXMucG9pbnRWYXJpYWJsZXMuZmlsdGVyKHY9PntcbiAgICAgICAgICAgIHJldHVybiAhdGhpcy5wdWJsaWNhdGlvbi5wb2ludGRhdGEuZXhjbHVkZS5zb21lKHBhdHRlcm49PntcbiAgICAgICAgICAgICAgcmV0dXJuICEhdi52YWx1ZS5tYXRjaChwYXR0ZXJuKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmKCF0aGlzLnBvaW50VmFyaWFibGVzLmxlbmd0aCl7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFZhcmlhYmxlID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBvaW50VmFyaWFibGVzLmZpbmRJbmRleCh0PT50LnZhbHVlPT09dGhpcy5zZWxlY3RlZFZhcmlhYmxlKSA8IDApIHtcbiAgICAgICAgICBpZiAodGhpcy5wb2ludFZhcmlhYmxlcy5maW5kSW5kZXgodD0+dC52YWx1ZT09PXRoaXMucHVibGljYXRpb24ucG9pbnRkYXRhLmRlZmF1bHRWYXJpYWJsZSkgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZhcmlhYmxlID0gdGhpcy5wdWJsaWNhdGlvbi5wb2ludGRhdGEuZGVmYXVsdFZhcmlhYmxlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmFyaWFibGUgPSB0aGlzLnBvaW50VmFyaWFibGVzWzBdLnZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvaW50U2VsZWN0aW9uQ2hhbmdlZCgpO1xuICAgICAgfSk7XG4gIH1cblxuICBwb2ludFNlbGVjdGlvbkNoYW5nZWQoKSB7XG4gICAgdGhpcy5wb2ludFNlbGVjdGlvblNlcnZpY2UucG9pbnRTZWxlY3Rpb24odGhpcy5wb2ludFNlbGVjdGlvbigpKTtcbiAgfVxufVxuIl19