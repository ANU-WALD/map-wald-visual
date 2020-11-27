import core from '@angular/core';
import forms from '@angular/forms';
import ngBootstrap from '@ng-bootstrap/ng-bootstrap';
import http from '@angular/common/http';
import ngxPipes from 'ngx-pipes';
import core$1 from '@agm/core';
import common from '@angular/common';
import mapWald from 'map-wald';
import store from 'store';
import googleMapsTypes from '@agm/core/services/google-maps-types';
import plotlyBasic from 'plotly.js/dist/plotly-basic';
import operators from 'rxjs/operators';
import rxjs from 'rxjs';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace (n) {
	return n && n['default'] || n;
}

var wmsLayer_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WMSLayerComponent = void 0;



var i0 = core;
var i1 = mapWald;
var i2 = core$1;
var WMSLayerComponent = /** @class */ (function () {
    function WMSLayerComponent(_wmsService, _wrapper) {
        this._wmsService = _wmsService;
        this._wrapper = _wrapper;
        this.opacity = 1.0;
        this.position = 0;
        this.zoom = 4;
        this.building = false;
    }
    WMSLayerComponent.prototype.buildMap = function () {
        var _this = this;
        if (this.building)
            return;
        this.building = true;
        this._wrapper.getNativeMap().then(function (theMap) {
            _this.building = false;
            _this.map = theMap;
            _this.overlay = _this._wmsService.buildImageMap(function () { return _this.map; }, function (z) { return _this.url + '?'; }, function (z) { return _this.params; }, function () { return _this.opacity; });
            if (_this.map.overlayMapTypes.length > _this.position) {
                _this.map.overlayMapTypes.removeAt(_this.position);
                _this.map.overlayMapTypes.insertAt(_this.position, _this.overlay);
            }
            else {
                while (_this.map.overlayMapTypes.length <= _this.position) {
                    // Temporarily add replicate layers.
                    // These should be replaced by other wms-layer components
                    _this.map.overlayMapTypes.push(_this.overlay);
                }
            }
        }).catch(function (e) { return console.log(e); });
    };
    WMSLayerComponent.prototype.ngOnInit = function () {
        if (this.url) {
            this.buildMap();
        }
    };
    WMSLayerComponent.prototype.ngOnChanges = function (changes) {
        if (this.url) {
            this.buildMap();
        }
        // let currentOpacity: number = changes.opacity.currentValue;
        // let previousOpacity: number = changes.opacity.previousValue;
        // if (currentOpacity !== previousOpacity) {
        //   console.log('building a map off my own bat');
        //   this.buildMap();
        // }
    };
    WMSLayerComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this._wrapper.getNativeMap().then(function (theMap) {
            if (_this.map.overlayMapTypes.length > _this.position) {
                _this.map.overlayMapTypes.removeAt(_this.position);
            }
        });
    };
    WMSLayerComponent.ɵfac = function WMSLayerComponent_Factory(t) { return new (t || WMSLayerComponent)(i0.ɵɵdirectiveInject(i1.WMSService), i0.ɵɵdirectiveInject(i2.GoogleMapsAPIWrapper)); };
    WMSLayerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: WMSLayerComponent, selectors: [["wms-layer"]], inputs: { url: "url", params: "params", opacity: "opacity", position: "position" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function WMSLayerComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return WMSLayerComponent;
}());
exports.WMSLayerComponent = WMSLayerComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(WMSLayerComponent, [{
        type: core.Component,
        args: [{
                selector: 'wms-layer',
                template: '',
            }]
    }], function () { return [{ type: i1.WMSService }, { type: i2.GoogleMapsAPIWrapper }]; }, { url: [{
            type: core.Input
        }], params: [{
            type: core.Input
        }], opacity: [{
            type: core.Input
        }], position: [{
            type: core.Input
        }] }); })();

});

var wmsLayer_component$1 = unwrapExports(wmsLayer_component);
var wmsLayer_component_1 = wmsLayer_component.WMSLayerComponent;

var mapLegend_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapLegendComponent = void 0;


var i0 = core;
var i1 = mapWald;


function MapLegendComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 5);
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHtml", ctx_r1.helpText, i0.ɵɵsanitizeHtml);
} }
function MapLegendComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 6);
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", "(" + ctx_r2.mapUnits + ")", i0.ɵɵsanitizeHtml);
} }
function MapLegendComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵelement(1, "i", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext();
    var _r0 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngbTooltip", _r0)("placement", ctx_r3.tooltipPlacement);
} }
var _c0 = function (a0) { return { background: a0 }; };
function MapLegendComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵelement(2, "i", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 14);
    i0.ɵɵelement(4, "span", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var colour_r9 = ctx.$implicit;
    var i_r10 = ctx.index;
    var ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c0, colour_r9));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", ctx_r8.generatedLabels[i_r10], i0.ɵɵsanitizeHtml);
} }
function MapLegendComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵtemplate(2, MapLegendComponent_div_7_div_2_Template, 5, 4, "div", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.colours);
} }
function MapLegendComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "img", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", ctx_r5.imageURL, i0.ɵɵsanitizeUrl);
} }
function MapLegendComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Source: ");
    i0.ɵɵelementStart(2, "a", 16);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("href", ctx_r6.attributionLink, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r6.attribution || "details");
} }
function MapLegendComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("Source: ", ctx_r7.attribution, "");
} }
var MapLegendComponent = /** @class */ (function () {
    function MapLegendComponent(_palettes) {
        this._palettes = _palettes;
        this.colours = ['red', 'white', 'blue'];
        this.labels = []; //['-','-','-'];
        this.title = 'the title';
        this.mapUnits = '';
        this.helpText = 'No comment';
        this.tooltipPlacement = 'right';
        this.generatedLabels = [];
        this.formatValue = function (val, decimalPlaces) {
            if (!val) {
                if (val === 0) {
                    return '0';
                }
                return '-';
            }
            // Add thousand's separator. Source: http://stackoverflow.com/a/2901298
            var parts = val.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            if (decimalPlaces === 0) {
                return parts[0];
            }
            if ((decimalPlaces !== null) && (decimalPlaces !== undefined) && (parts.length === 2)) {
                parts[1] = parts[1].substr(0, decimalPlaces);
                parts[1] = parts[1].replace(/0+$/, '');
            }
            return parts.join('.');
        };
    }
    Object.defineProperty(MapLegendComponent.prototype, "cbPalette", {
        get: function () { return this._cbPalette; },
        set: function (cbp) {
            this._cbPalette = cbp;
            this.generatePalette();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MapLegendComponent.prototype, "cbCount", {
        get: function () { return this._cbCount; },
        set: function (cbc) {
            this._cbCount = cbc;
            this.generatePalette();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MapLegendComponent.prototype, "cbReverse", {
        get: function () { return this._cbReverse; },
        set: function (cbr) {
            this._cbReverse = cbr;
            this.generatePalette();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MapLegendComponent.prototype, "cbRange", {
        get: function () { return this._cbRange; },
        set: function (cbr) {
            this._cbRange = cbr;
            this.generatePalette();
        },
        enumerable: false,
        configurable: true
    });
    MapLegendComponent.prototype.generateLabels = function (count) {
        if (!this._cbRange || !count) {
            return null;
        }
        var delta = (this._cbRange[1] - this._cbRange[0]) / (count);
        var result = [];
        var lower = this._cbRange[0];
        var decimalPlaces = Math.max(0, 2 - (+Math.log10(this._cbRange[1] - this._cbRange[0]).toFixed()));
        decimalPlaces = Math.min(decimalPlaces, 10);
        var upper;
        for (var i = 1; i < (count); i++) {
            upper = this._cbRange[0] + i * delta;
            result.push(this.formatValue(lower, decimalPlaces) + "-" + this.formatValue(upper, decimalPlaces));
            lower = upper;
        }
        result.push('&ge;' + this.formatValue(upper, decimalPlaces));
        result.reverse();
        return result;
    };
    MapLegendComponent.prototype.generatePalette = function () {
        var _this = this;
        if (!this._cbPalette || !this._cbCount) {
            return;
        }
        this._palettes.getPalette(this._cbPalette, this._cbReverse, this._cbCount)
            .subscribe(function (palette) {
            _this.colours = palette.slice().reverse();
            _this.generatedLabels = _this.labels || _this.generateLabels(_this.colours.length) || palette;
        });
    };
    MapLegendComponent.prototype.ngOnInit = function () { };
    MapLegendComponent.ɵfac = function MapLegendComponent_Factory(t) { return new (t || MapLegendComponent)(i0.ɵɵdirectiveInject(i1.PaletteService)); };
    MapLegendComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MapLegendComponent, selectors: [["map-legend"]], inputs: { imageURL: "imageURL", colours: "colours", labels: "labels", title: "title", mapUnits: "mapUnits", helpText: "helpText", tooltipPlacement: "tooltipPlacement", attribution: "attribution", attributionLink: "attributionLink", cbPalette: "cbPalette", cbCount: "cbCount", cbReverse: "cbReverse", cbRange: "cbRange" }, decls: 11, vars: 7, consts: [[1, "map-legend", "panel", "panel-group"], ["tooltipContent", ""], [3, "innerHTML", 4, "ngIf"], ["container", "body", 3, "ngbTooltip", "placement", 4, "ngIf"], [4, "ngIf"], [3, "innerHtml"], [3, "innerHTML"], ["container", "body", 3, "ngbTooltip", "placement"], [1, "fa", "fa-info-circle"], [2, "display", "table", "line-height", "15px"], ["style", "display:table-row;padding:0;", 4, "ngFor", "ngForOf"], [2, "display", "table-row", "padding", "0"], [1, "legend-colour"], [1, "legend-entry", 3, "ngStyle"], [1, "legend-label"], [3, "src"], [3, "href"]], template: function MapLegendComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, MapLegendComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(3, "strong");
            i0.ɵɵtext(4);
            i0.ɵɵtemplate(5, MapLegendComponent_span_5_Template, 1, 1, "span", 2);
            i0.ɵɵtemplate(6, MapLegendComponent_span_6_Template, 2, 2, "span", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, MapLegendComponent_div_7_Template, 3, 1, "div", 4);
            i0.ɵɵtemplate(8, MapLegendComponent_div_8_Template, 2, 1, "div", 4);
            i0.ɵɵtemplate(9, MapLegendComponent_p_9_Template, 4, 2, "p", 4);
            i0.ɵɵtemplate(10, MapLegendComponent_p_10_Template, 2, 1, "p", 4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1("", ctx.title, " ");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.mapUnits);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.helpText);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.imageURL);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.imageURL);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.attributionLink);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.attribution && !ctx.attributionLink);
        } }, directives: [common.NgIf, ngBootstrap.NgbTooltip, common.NgForOf, common.NgStyle], styles: [".map-legend[_ngcontent-%COMP%]{\n  display:block;\n  background: white;\n}\n\n.legend-colour[_ngcontent-%COMP%]{\n  display:table-cell;\n  padding:0px;\n}\n\n.legend-label[_ngcontent-%COMP%]{\n  display:table-cell;\n  padding:0px 4px 2px 2px;\n  font-size:10px;\n  vertical-align:middle;\n}\n\n.legend-entry[_ngcontent-%COMP%] {\n  float: left;\n  width: 15px !important;\n  height: 15px !important;\n}"] });
    return MapLegendComponent;
}());
exports.MapLegendComponent = MapLegendComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MapLegendComponent, [{
        type: core.Component,
        args: [{
                selector: 'map-legend',
                template: "<div class=\"map-legend panel panel-group\">\n<ng-template #tooltipContent>\n  <span [innerHtml]=helpText></span>\n</ng-template>\n<strong>{{title}} <span *ngIf=\"mapUnits\" [innerHTML]=\"'('+mapUnits+')'\"></span>\n        <span *ngIf=\"helpText\"\n              [ngbTooltip]=\"tooltipContent\"\n              [placement]=\"tooltipPlacement\"\n              container=\"body\">\n          <i class=\"fa fa-info-circle\"></i>\n        </span>\n</strong>\n\n  <div *ngIf=\"!imageURL\">\n    <div style=\"display:table;line-height:15px\">\n      <div style=\"display:table-row;padding:0;\"\n          *ngFor=\"let colour of colours; let i=index\">\n        <div class=\"legend-colour\">\n          <i class=\"legend-entry\" [ngStyle]=\"{background:colour}\"></i>\n        </div>\n        <div class=\"legend-label\">\n          <span [innerHTML]=\"generatedLabels[i]\"></span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"imageURL\">\n    <img [src]=\"imageURL\">\n  </div>\n  <p *ngIf=\"attributionLink\">Source: <a [href]=\"attributionLink\">{{attribution || 'details'}}</a></p>\n  <p *ngIf=\"attribution&&!attributionLink\">Source: {{attribution}}</p>\n</div>\n", styles: ["\n.map-legend{\n  display:block;\n  background: white;\n}\n\n.legend-colour{\n  display:table-cell;\n  padding:0px;\n}\n\n.legend-label{\n  display:table-cell;\n  padding:0px 4px 2px 2px;\n  font-size:10px;\n  vertical-align:middle;\n}\n\n.legend-entry {\n  float: left;\n  width: 15px !important;\n  height: 15px !important;\n}\n"]
            }]
    }], function () { return [{ type: i1.PaletteService }]; }, { imageURL: [{
            type: core.Input
        }], colours: [{
            type: core.Input
        }], labels: [{
            type: core.Input
        }], title: [{
            type: core.Input
        }], mapUnits: [{
            type: core.Input
        }], helpText: [{
            type: core.Input
        }], tooltipPlacement: [{
            type: core.Input
        }], attribution: [{
            type: core.Input
        }], attributionLink: [{
            type: core.Input
        }], cbPalette: [{
            type: core.Input
        }], cbCount: [{
            type: core.Input
        }], cbReverse: [{
            type: core.Input
        }], cbRange: [{
            type: core.Input
        }] }); })();

});

var mapLegend_component$1 = unwrapExports(mapLegend_component);
var mapLegend_component_1 = mapLegend_component.MapLegendComponent;

var mapControl_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapControlComponent = void 0;


var i0 = core;
var i1 = core$1;
var _c0 = ["mapControl"];
var _c1 = ["*"];
var MapControlComponent = /** @class */ (function () {
    function MapControlComponent(_el, _wrapper) {
        this._el = _el;
        this._wrapper = _wrapper;
        this.position = 'TOP_RIGHT';
    }
    MapControlComponent.prototype.ngOnInit = function () {
    };
    MapControlComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._wrapper.getNativeMap().then(function (m) {
            var content = _this._el.nativeElement.querySelector('.map-control-content');
            // If content of the map control is not already wrapped in a div, do it
            // now.
            if (content.nodeName !== "DIV") {
                var controlDiv = document.createElement('div');
                controlDiv.appendChild(content);
                content = controlDiv;
            }
            m.controls[window.google.maps.ControlPosition[_this.position]].push(content);
        });
    };
    MapControlComponent.ɵfac = function MapControlComponent_Factory(t) { return new (t || MapControlComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.GoogleMapsAPIWrapper)); };
    MapControlComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MapControlComponent, selectors: [["map-control"]], viewQuery: function MapControlComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t = void 0;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mapControl = _t.first);
        } }, inputs: { position: "position" }, ngContentSelectors: _c1, decls: 3, vars: 0, consts: [[1, "map-control-content"], ["mapControl", ""]], template: function MapControlComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0, 1);
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd();
        } }, styles: [".map-control-content[_ngcontent-%COMP%]{\n  background: transparent;\n}"] });
    return MapControlComponent;
}());
exports.MapControlComponent = MapControlComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MapControlComponent, [{
        type: core.Component,
        args: [{
                selector: 'map-control',
                template: "<div #mapControl class=\"map-control-content\">\n  <ng-content></ng-content>\n</div>\n", styles: [".map-control-content{\n  background: transparent;\n}\n"],
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.GoogleMapsAPIWrapper }]; }, { mapControl: [{
            type: core.ViewChild,
            args: ['mapControl', { static: false }]
        }], position: [{
            type: core.Input
        }] }); })();

});

var mapControl_component$1 = unwrapExports(mapControl_component);
var mapControl_component_1 = mapControl_component.MapControlComponent;

var dateShifter_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateShifterComponent = void 0;

var i0 = core;

var DateShifterComponent = /** @class */ (function () {
    function DateShifterComponent() {
        this.interval = 2000;
        this.limits = null;
        this.date = new Date();
        this.dateChange = new core.EventEmitter();
        this.value = 0;
        this.label = '-';
        this.timer = 0;
        this.dateText = '-';
    }
    DateShifterComponent.prototype.ngOnChanges = function (changes) {
        if (changes.interval) {
            this.startTimer();
        }
    };
    DateShifterComponent.prototype.startTimer = function () {
        var _this = this;
        if (this.timer) {
            clearInterval(this.timer);
        }
        this.timer = window.setInterval(function () { return _this.tick(); }, this.interval);
    };
    DateShifterComponent.prototype.ngAfterViewInit = function () {
        this.startTimer();
    };
    DateShifterComponent.prototype.reset = function () {
        this.value = 0;
        this.sliderMoved();
    };
    DateShifterComponent.prototype.tick = function () {
        if (!this.value) {
            return;
        }
        var sign = this.value < 0 ? -1 : 1;
        this.date = new Date(this.date.getTime());
        switch (Math.abs(this.value)) {
            case 1:
                this.date.setDate(this.date.getDate() + sign);
                break;
            case 2:
                this.date.setDate(this.date.getDate() + 7 * sign);
                break;
            case 3:
                this.date.setMonth(this.date.getMonth() + sign);
                break;
            case 4:
                this.date.setFullYear(this.date.getFullYear() + sign);
                break;
        }
        if (this.limits && this.limits.length) {
            if (this.date.getTime() < this.limits[0].getTime()) {
                this.date = this.limits[0];
            }
            if (this.date.getTime() > this.limits[1].getTime()) {
                this.date = this.limits[1];
            }
        }
        this.setDateText();
        this.dateChange.emit(this.date);
    };
    DateShifterComponent.prototype.setDateText = function () {
        this.dateText = this.date.toLocaleDateString();
    };
    DateShifterComponent.prototype.sliderMoved = function () {
        this.setLabel();
    };
    DateShifterComponent.prototype.setLabel = function () {
        if (this.value < 0) {
            this.label = 'back 1';
        }
        else if (this.value > 0) {
            this.label = 'advance 1';
        }
        else {
            this.label = '-';
        }
        switch (Math.abs(this.value)) {
            case 1:
                this.label += 'day';
                break;
            case 2:
                this.label += 'week';
                break;
            case 3:
                this.label += 'month';
                break;
            case 4:
                this.label += 'year';
                break;
        }
    };
    DateShifterComponent.ɵfac = function DateShifterComponent_Factory(t) { return new (t || DateShifterComponent)(); };
    DateShifterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DateShifterComponent, selectors: [["date-shifter"]], inputs: { interval: "interval", limits: "limits", date: "date" }, outputs: { dateChange: "dateChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 6, vars: 4, consts: [["type", "range", "min", "-4", "step", "1", 1, "form-control", 3, "max", "ngModel", "ngModelChange", "mouseup"]], template: function DateShifterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "h3");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "input", 0);
            i0.ɵɵlistener("ngModelChange", function DateShifterComponent_Template_input_ngModelChange_3_listener($event) { return ctx.value = $event; })("ngModelChange", function DateShifterComponent_Template_input_ngModelChange_3_listener() { return ctx.sliderMoved(); })("mouseup", function DateShifterComponent_Template_input_mouseup_3_listener() { return ctx.reset(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "h4");
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.dateText);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("max", 4)("ngModel", ctx.value);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.label);
        } }, directives: [forms.RangeValueAccessor, forms.DefaultValueAccessor, forms.NgControlStatus, forms.NgModel], styles: [""] });
    return DateShifterComponent;
}());
exports.DateShifterComponent = DateShifterComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateShifterComponent, [{
        type: core.Component,
        args: [{
                selector: 'date-shifter',
                template: "<div>\n  <h3>{{dateText}}</h3>\n  <input type=\"range\"\n         class=\"form-control\"\n         min=\"-4\"\n         [max]=\"4\"\n         step=\"1\"\n         [(ngModel)]=\"value\"\n         (ngModelChange)=\"sliderMoved()\"\n         (mouseup)=\"reset()\">\n  <h4>{{label}}</h4>\n</div>\n\n  ",
                styles: [""]
            }]
    }], function () { return []; }, { interval: [{
            type: core.Input
        }], limits: [{
            type: core.Input
        }], date: [{
            type: core.Input
        }], dateChange: [{
            type: core.Output
        }] }); })();

});

var dateShifter_component$1 = unwrapExports(dateShifter_component);
var dateShifter_component_1 = dateShifter_component.DateShifterComponent;

var oneTimeSplash_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneTimeSplashComponent = void 0;



var i0 = core;
var i1 = ngBootstrap;


var _c0 = ["splashTemplate"];
function OneTimeSplashComponent_ng_template_0_label_9_Template(rf, ctx) { if (rf & 1) {
    var _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵelementStart(1, "input", 9);
    i0.ɵɵlistener("ngModelChange", function OneTimeSplashComponent_ng_template_0_label_9_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r6); var ctx_r5 = i0.ɵɵnextContext(2); return ctx_r5.doNotShow = $event; })("ngModelChange", function OneTimeSplashComponent_ng_template_0_label_9_Template_input_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r6); var ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.doNotShowClicked(); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r4.doNotShow);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" \u00A0 ", ctx_r4.hideMessage, " ");
} }
function OneTimeSplashComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "h4", 2);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 3);
    i0.ɵɵlistener("click", function OneTimeSplashComponent_ng_template_0_Template_button_click_3_listener() { var d_r3 = ctx.dismiss; return d_r3("Cross click"); });
    i0.ɵɵelementStart(4, "span", 4);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 5);
    i0.ɵɵprojection(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 6);
    i0.ɵɵtemplate(9, OneTimeSplashComponent_ng_template_0_label_9_Template, 3, 2, "label", 7);
    i0.ɵɵelementStart(10, "button", 8);
    i0.ɵɵlistener("click", function OneTimeSplashComponent_ng_template_0_Template_button_click_10_listener() { var c_r2 = ctx.close; return c_r2("Close click"); });
    i0.ɵɵtext(11, "Close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.label, "");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r1.application);
} }
var _c1 = ["*"];
var OneTimeSplashComponent = /** @class */ (function () {
    function OneTimeSplashComponent(modalService) {
        this.modalService = modalService;
        this.label = 'About';
        this.hideMessage = 'Understood, I don’t need to see this again';
    }
    OneTimeSplashComponent.prototype.storageKey = function () {
        if (!this.application) {
            return null;
        }
        return this.application + '-splash-skip';
    };
    OneTimeSplashComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            var key = _this.storageKey();
            if (key) {
                _this.doNotShow = store.get(key, false);
            }
            if (!_this.doNotShow) {
                _this.show();
            }
        });
    };
    OneTimeSplashComponent.prototype.show = function () {
        this.current = this.modalService.open(this.splashTemplate, {
            size: 'lg',
            windowClass: this.klass
        });
    };
    OneTimeSplashComponent.prototype.close = function () {
        if (!this.current) {
            return;
        }
        this.current.close();
        this.current = null;
    };
    OneTimeSplashComponent.prototype.doNotShowClicked = function () {
        var key = this.storageKey();
        if (!key) {
            return;
        }
        store.set(key, this.doNotShow);
    };
    OneTimeSplashComponent.ɵfac = function OneTimeSplashComponent_Factory(t) { return new (t || OneTimeSplashComponent)(i0.ɵɵdirectiveInject(i1.NgbModal)); };
    OneTimeSplashComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OneTimeSplashComponent, selectors: [["one-time-splash"]], viewQuery: function OneTimeSplashComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t = void 0;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.splashTemplate = _t.first);
        } }, inputs: { application: "application", label: "label", hideMessage: "hideMessage", klass: "klass" }, ngContentSelectors: _c1, decls: 2, vars: 0, consts: [["splashTemplate", ""], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "checkbox", 3, "ngModel", "ngModelChange"]], template: function OneTimeSplashComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, OneTimeSplashComponent_ng_template_0_Template, 12, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } }, directives: [common.NgIf, forms.CheckboxControlValueAccessor, forms.NgControlStatus, forms.NgModel], styles: [""] });
    return OneTimeSplashComponent;
}());
exports.OneTimeSplashComponent = OneTimeSplashComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OneTimeSplashComponent, [{
        type: core.Component,
        args: [{
                selector: 'one-time-splash',
                template: "<ng-template #splashTemplate let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">\n      {{label}}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <ng-content></ng-content>\n  </div>\n  <div class=\"modal-footer\">\n    <label *ngIf=\"application\">\n      <input type=\"checkbox\" [(ngModel)]=\"doNotShow\" (ngModelChange)=\"doNotShowClicked()\">\n      &nbsp; {{hideMessage}}\n    </label>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n  </div>\n  </ng-template>\n",
                styles: [""]
            }]
    }], function () { return [{ type: i1.NgbModal }]; }, { splashTemplate: [{
            type: core.ViewChild,
            args: ['splashTemplate', { static: false }]
        }], application: [{
            type: core.Input
        }], label: [{
            type: core.Input
        }], hideMessage: [{
            type: core.Input
        }], klass: [{
            type: core.Input
        }] }); })();

});

var oneTimeSplash_component$1 = unwrapExports(oneTimeSplash_component);
var oneTimeSplash_component_1 = oneTimeSplash_component.OneTimeSplashComponent;

var dateElement_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateElementComponent = void 0;

var i0 = core;
var DateElementComponent = /** @class */ (function () {
    function DateElementComponent() {
        this.step = 1;
        this.changed = new core.EventEmitter();
    }
    DateElementComponent.prototype.ngAfterViewInit = function () {
    };
    DateElementComponent.prototype.move = function (n) {
        this.src[this.property] += n;
        this.changed.emit(this.src);
    };
    DateElementComponent.ɵfac = function DateElementComponent_Factory(t) { return new (t || DateElementComponent)(); };
    DateElementComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DateElementComponent, selectors: [["date-element"]], inputs: { label: "label", property: "property", src: "src", step: "step" }, outputs: { changed: "changed" }, decls: 12, vars: 2, consts: [[1, "row", "no-gutters"], [1, "col-4"], [1, "col-2"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "fa", "fa-angle-left"], [1, "btn", "btn-link", "btn-sm"], [1, "fa", "fa-angle-right"]], template: function DateElementComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵelementStart(4, "button", 3);
            i0.ɵɵlistener("click", function DateElementComponent_Template_button_click_4_listener() { return ctx.move(-ctx.step); });
            i0.ɵɵelement(5, "i", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 1);
            i0.ɵɵelementStart(7, "button", 5);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 2);
            i0.ɵɵelementStart(10, "button", 3);
            i0.ɵɵlistener("click", function DateElementComponent_Template_button_click_10_listener() { return ctx.move(ctx.step); });
            i0.ɵɵelement(11, "i", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.label);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.src[ctx.property]);
        } }, encapsulation: 2 });
    return DateElementComponent;
}());
exports.DateElementComponent = DateElementComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateElementComponent, [{
        type: core.Component,
        args: [{
                selector: 'date-element',
                template: "<div class=\"row no-gutters\">\n  <div class=\"col-4\">{{label}}</div>\n  <div class=\"col-2\">\n    <button class=\"btn btn-secondary btn-sm\" (click)=\"move(-step)\">\n      <i class=\"fa fa-angle-left\"></i>\n    </button>\n  </div>\n  <div class=\"col-4\"><button class=\"btn btn-link btn-sm\">{{src[property]}}</button></div>\n  <div class=\"col-2\">\n    <button class=\"btn btn-secondary btn-sm\" (click)=\"move(step)\">\n      <i class=\"fa fa-angle-right\"></i>\n    </button>\n  </div>\n</div>\n",
                styles: []
            }]
    }], function () { return []; }, { label: [{
            type: core.Input
        }], property: [{
            type: core.Input
        }], src: [{
            type: core.Input
        }], step: [{
            type: core.Input
        }], changed: [{
            type: core.Output
        }] }); })();

});

var dateElement_component$1 = unwrapExports(dateElement_component);
var dateElement_component_1 = dateElement_component.DateElementComponent;

var shareView_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareViewComponent = void 0;

var i0 = core;

var ShareViewComponent = /** @class */ (function () {
    function ShareViewComponent() {
    }
    ShareViewComponent.prototype.ngAfterViewInit = function () {
    };
    ShareViewComponent.ɵfac = function ShareViewComponent_Factory(t) { return new (t || ShareViewComponent)(); };
    ShareViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ShareViewComponent, selectors: [["share-view"]], decls: 2, vars: 1, consts: [["ngbTooltip", "Share current view", "placement", "right", 1, "btn", "btn-secondary", "btn-sm", 3, "disabled"], [1, "fa", "fa-share-alt"]], template: function ShareViewComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵelement(1, "i", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("disabled", true);
        } }, directives: [ngBootstrap.NgbTooltip], encapsulation: 2 });
    return ShareViewComponent;
}());
exports.ShareViewComponent = ShareViewComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ShareViewComponent, [{
        type: core.Component,
        args: [{
                selector: 'share-view',
                template: "<button class=\"btn btn-secondary btn-sm\"\n        ngbTooltip=\"Share current view\"\n        placement=\"right\"\n        [disabled]=\"true\"\n><i class=\"fa fa-share-alt\"></i></button>\n",
                styles: []
            }]
    }], function () { return []; }, null); })();

});

var shareView_component$1 = unwrapExports(shareView_component);
var shareView_component_1 = shareView_component.ShareViewComponent;

var locationSearch_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationSearchComponent = void 0;

var i0 = core;

var LocationSearchComponent = /** @class */ (function () {
    function LocationSearchComponent() {
    }
    LocationSearchComponent.prototype.ngAfterViewInit = function () {
    };
    LocationSearchComponent.ɵfac = function LocationSearchComponent_Factory(t) { return new (t || LocationSearchComponent)(); };
    LocationSearchComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LocationSearchComponent, selectors: [["location-search"]], decls: 2, vars: 1, consts: [["ngbTooltip", "Location search", "placement", "right", 1, "btn", "btn-secondary", "btn-sm", 3, "disabled"], [1, "fa", "fa-search"]], template: function LocationSearchComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵelement(1, "i", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("disabled", true);
        } }, directives: [ngBootstrap.NgbTooltip], encapsulation: 2 });
    return LocationSearchComponent;
}());
exports.LocationSearchComponent = LocationSearchComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LocationSearchComponent, [{
        type: core.Component,
        args: [{
                selector: 'location-search',
                template: "<button class=\"btn btn-secondary btn-sm\"\n        ngbTooltip=\"Location search\"\n        placement=\"right\"\n        [disabled]=\"true\"\n\n><i class=\"fa fa-search\"></i></button>\n",
                styles: []
            }]
    }], function () { return []; }, null); })();

});

var locationSearch_component$1 = unwrapExports(locationSearch_component);
var locationSearch_component_1 = locationSearch_component.LocationSearchComponent;

var layeredMap_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayeredMapComponent = void 0;




var i0 = core;
var i1 = mapWald;
var i2 = core$1;




var _c0 = ["infoWindows"];
function LayeredMapComponent_agm_marker_2_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 20);
} if (rf & 2) {
    var marker_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", marker_r3.html, i0.ɵɵsanitizeHtml);
} }
function LayeredMapComponent_agm_marker_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "agm-marker", 16);
    i0.ɵɵelementStart(1, "agm-info-window", 17, 18);
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, LayeredMapComponent_agm_marker_2_span_5_Template, 1, 1, "span", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var marker_r3 = ctx.$implicit;
    i0.ɵɵproperty("longitude", marker_r3.loc.lng)("latitude", marker_r3.loc.lat)("iconUrl", marker_r3.iconUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disableAutoPan", true);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(marker_r3.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", marker_r3.html);
} }
function LayeredMapComponent_ng_container_3_wms_layer_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "wms-layer", 25);
} if (rf & 2) {
    var mp_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("url", mp_r7.url)("params", mp_r7.wmsParameters)("opacity", mp_r7.opacity)("position", mp_r7.options.position);
} }
function LayeredMapComponent_ng_container_3_agm_data_layer_2_Template(rf, ctx) { if (rf & 1) {
    var _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "agm-data-layer", 26);
    i0.ɵɵlistener("layerClick", function LayeredMapComponent_ng_container_3_agm_data_layer_2_Template_agm_data_layer_layerClick_0_listener($event) { i0.ɵɵrestoreView(_r14); var ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.clicked($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var mp_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵstyleMap(mp_r7._styleFunc);
    i0.ɵɵproperty("geoJson", mp_r7.staticData);
} }
function LayeredMapComponent_ng_container_3_ng_container_3_agm_circle_1_Template(rf, ctx) { if (rf & 1) {
    var _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "agm-circle", 28);
    i0.ɵɵlistener("circleClick", function LayeredMapComponent_ng_container_3_ng_container_3_agm_circle_1_Template_agm_circle_circleClick_0_listener() { i0.ɵɵrestoreView(_r21); var f_r17 = ctx.$implicit; var mp_r7 = i0.ɵɵnextContext(2).$implicit; var ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.circleClicked(mp_r7, f_r17); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var f_r17 = ctx.$implicit;
    var mp_r7 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r16 = i0.ɵɵnextContext();
    i0.ɵɵproperty("latitude", f_r17.geometry.coordinates[1])("longitude", f_r17.geometry.coordinates[0])("radius", 10000000 / (ctx_r16.zoom * ctx_r16.zoom * ctx_r16.zoom * ctx_r16.zoom))("fillColor", (mp_r7.flattenedSettings == null ? null : mp_r7.flattenedSettings.styles == null ? null : mp_r7.flattenedSettings.styles.fillColor) || "black")("fillOpacity", (mp_r7.flattenedSettings == null ? null : mp_r7.flattenedSettings.styles == null ? null : mp_r7.flattenedSettings.styles.fillOpacity) || 1)("strokeColor", (mp_r7.flattenedSettings == null ? null : mp_r7.flattenedSettings.styles == null ? null : mp_r7.flattenedSettings.styles.strokeColor) || "black")("strokeOpacity", (mp_r7.flattenedSettings == null ? null : mp_r7.flattenedSettings.styles == null ? null : mp_r7.flattenedSettings.styles.strokeOpacity) || 1)("strokePosition", 0)("strokeWeight", f_r17 === ctx_r16.selectedFeature ? 3 : (mp_r7.flattenedSettings == null ? null : mp_r7.flattenedSettings.styles == null ? null : mp_r7.flattenedSettings.styles.strokeWeight) || 0.5);
} }
function LayeredMapComponent_ng_container_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, LayeredMapComponent_ng_container_3_ng_container_3_agm_circle_1_Template, 1, 9, "agm-circle", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var mp_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", mp_r7.staticData.features);
} }
function LayeredMapComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 21);
    i0.ɵɵtemplate(1, LayeredMapComponent_ng_container_3_wms_layer_1_Template, 1, 4, "wms-layer", 22);
    i0.ɵɵtemplate(2, LayeredMapComponent_ng_container_3_agm_data_layer_2_Template, 1, 3, "agm-data-layer", 23);
    i0.ɵɵtemplate(3, LayeredMapComponent_ng_container_3_ng_container_3_Template, 2, 1, "ng-container", 24);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var mp_r7 = ctx.$implicit;
    i0.ɵɵproperty("ngSwitch", mp_r7.layerType);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "wms");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "vector");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "circle");
} }
var _c1 = [[["", 8, "map-control", "top-center"]], [["", 8, "map-control", "top-left"]], [["", 8, "map-control", "top-right"]], [["", 8, "map-control", "left-top"]], [["", 8, "map-control", "right-top"]], [["", 8, "map-control", "left-center"]], [["", 8, "map-control", "right-center"]], [["", 8, "map-control", "left-bottom"]], [["", 8, "map-control", "right-bottom"]], [["", 8, "map-control", "bottom-center"]], [["", 8, "map-control", "bottom-left"]], [["", 8, "map-control", "bottom-right"]]];
var _c2 = [".map-control.top-center", ".map-control.top-left", ".map-control.top-right", ".map-control.left-top", ".map-control.right-top", ".map-control.left-center", ".map-control.right-center", ".map-control.left-bottom", ".map-control.right-bottom", ".map-control.bottom-center", ".map-control.bottom-left", ".map-control.bottom-right"];
var LayeredMapComponent = /** @class */ (function () {
    function LayeredMapComponent(_zone, staticData, metadata) {
        this._zone = _zone;
        this.staticData = staticData;
        this.metadata = metadata;
        this.layers = [];
        this.markers = [];
        this.mapTypeId = 'roadmap';
        this.layersChange = new core.EventEmitter();
        this.featureSelected = new core.EventEmitter();
        this.pointSelected = new core.EventEmitter();
        this.mapTypePosition = googleMapsTypes.ControlPosition.BOTTOM_LEFT;
        this.streetViewControl = true;
        this.selectedFeature = null;
        // google maps zoom level
        this.zoom = 4;
        this.showMapType = true;
        this.mapTypeOptions = {
            position: googleMapsTypes.ControlPosition.BOTTOM_LEFT
        };
        // initial center position for the map
        this.lat = -22.673858;
        this.lng = 129.815982;
    }
    LayeredMapComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        // if zoom in changes...
        if (changes.mapTypePosition) {
            if (this.mapTypePosition === null) {
                this.showMapType = false;
            }
            this.mapTypeOptions = {
                position: this.mapTypePosition
            };
        }
        if (changes.layers) {
            this.setLayerPositions();
        }
        if (changes.markers && this.markers) {
            // deal with existing info windows?
            if (this.infoWindows) {
                this.infoWindows.forEach(function (w, i) {
                    _this._zone.runOutsideAngular(function () { return w.close(); });
                });
            }
            setTimeout(function () {
                // Check and open relevant info windows...
                _this.infoWindows.forEach(function (w, i) {
                    var m = _this.markers[i];
                    if (m.open) {
                        _this._zone.runOutsideAngular(function () { return w.open(); });
                    }
                    else {
                        _this._zone.runOutsideAngular(function () { return w.close(); });
                    }
                });
            });
        }
        if (changes.bounds) {
            setTimeout(function () { return _this._bounds = _this.bounds; });
        }
    };
    LayeredMapComponent.prototype.ngAfterViewInit = function () {
    };
    LayeredMapComponent.prototype.layersChanged = function (changes) {
    };
    LayeredMapComponent.prototype.layerAdded = function (selection) {
        var _this = this;
        var ex = this.layers.find(function (l) { return l.layer === selection.layer; });
        if (ex) {
            return;
        }
        var mapped = new mapWald.MappedLayer();
        mapped.layer = selection.layer;
        mapped.layerType = 'wms';
        mapped.options.legend = true;
        if (selection.layer.options.vectors) {
            this.staticData.get(selection.layer.options.host, selection.layer.options.filepath).subscribe(function (data) {
                mapped.staticData = data;
                _this.activateLayer(mapped, selection);
            });
        }
        else {
            this.activateLayer(mapped, selection);
        }
    };
    LayeredMapComponent.prototype.activateLayer = function (mapped, selection) {
        mapped.update();
        if (selection.action === 'replace') {
            if (selection.filter) {
                this.layers = this.layers.filter(function (ml) { return !selection.filter(ml); });
            }
            else {
                this.layers = [];
            }
        }
        this.layers = [mapped].concat(this.layers);
        this.setLayerPositions();
        this.layersChange.emit(this.layers);
    };
    LayeredMapComponent.prototype.setLayerPositions = function () {
        var ix = 0;
        for (var i = this.layers.length - 1; i >= 0; i--) {
            if (this.layers[i].layerType === 'wms') {
                this.layers[i].options.position = ix;
                ix++;
            }
        }
    };
    LayeredMapComponent.prototype.extractFeature = function (f) {
        var geo = f.getGeometry();
        geo = {
            type: 'Point',
            coordinates: geo.get(0)
        };
        var props = {};
        f.forEachProperty(function (val, prop) { return props[prop] = val; });
        return {
            type: 'Feature',
            geometry: geo,
            properties: props
        };
    };
    LayeredMapComponent.prototype.clicked = function (event) {
        var feature = this.extractFeature(event.feature);
        this.selectedFeature = feature;
        this.featureSelected.emit({ feature: feature });
    };
    LayeredMapComponent.prototype.circleClicked = function (ml, feature) {
        this.selectedFeature = feature;
        this.featureSelected.emit({ feature: feature, layer: ml });
    };
    LayeredMapComponent.prototype.mapClick = function (event) {
        var coords = event.coords;
        this.pointSelected.emit(coords);
    };
    LayeredMapComponent.prototype.zoomToBounds = function (bounds) {
        this._bounds = bounds;
    };
    LayeredMapComponent.prototype.zoomChanged = function () {
        this.layers = this.layers.slice();
    };
    LayeredMapComponent.ɵfac = function LayeredMapComponent_Factory(t) { return new (t || LayeredMapComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i1.StaticDataService), i0.ɵɵdirectiveInject(i1.MetadataService)); };
    LayeredMapComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LayeredMapComponent, selectors: [["layered-map"]], viewQuery: function LayeredMapComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(core$1.AgmMap, true);
            i0.ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t = void 0;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.theMap = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.infoWindows = _t);
        } }, inputs: { layers: "layers", markers: "markers", mapTypeId: "mapTypeId", mapTypePosition: "mapTypePosition", streetViewControl: "streetViewControl", zoom: "zoom", showMapType: "showMapType", lat: "lat", lng: "lng", bounds: "bounds" }, outputs: { layersChange: "layersChange", featureSelected: "featureSelected", pointSelected: "pointSelected" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c2, decls: 29, vars: 14, consts: [["scaleControl", "true", 3, "latitude", "longitude", "zoom", "disableDefaultUI", "zoomControl", "mapTypeId", "mapTypeControl", "mapTypeControlOptions", "streetViewControl", "fitBounds", "latitudeChange", "longitudeChange", "zoomChange", "mapClick"], ["theMap", ""], [3, "longitude", "latitude", "iconUrl", 4, "ngFor", "ngForOf"], [3, "ngSwitch", 4, "ngFor", "ngForOf"], ["position", "TOP_CENTER"], ["position", "TOP_LEFT"], ["position", "TOP_RIGHT"], ["position", "LEFT_TOP"], ["position", "RIGHT_TOP"], ["position", "LEFT_CENTER"], ["position", "RIGHT_CENTER"], ["position", "LEFT_BOTTOM"], ["position", "RIGHT_BOTTOM"], ["position", "BOTTOM_CENTER"], ["position", "BOTTOM_LEFT"], ["position", "BOTTOM_RIGHT"], [3, "longitude", "latitude", "iconUrl"], [3, "disableAutoPan"], ["infoWindows", ""], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML"], [3, "ngSwitch"], [3, "url", "params", "opacity", "position", 4, "ngSwitchCase"], [3, "geoJson", "style", "layerClick", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "url", "params", "opacity", "position"], [3, "geoJson", "layerClick"], [3, "latitude", "longitude", "radius", "fillColor", "fillOpacity", "strokeColor", "strokeOpacity", "strokePosition", "strokeWeight", "circleClick", 4, "ngFor", "ngForOf"], [3, "latitude", "longitude", "radius", "fillColor", "fillOpacity", "strokeColor", "strokeOpacity", "strokePosition", "strokeWeight", "circleClick"]], template: function LayeredMapComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1);
            i0.ɵɵelementStart(0, "agm-map", 0, 1);
            i0.ɵɵlistener("latitudeChange", function LayeredMapComponent_Template_agm_map_latitudeChange_0_listener($event) { return ctx.lat = $event; })("longitudeChange", function LayeredMapComponent_Template_agm_map_longitudeChange_0_listener($event) { return ctx.lng = $event; })("zoomChange", function LayeredMapComponent_Template_agm_map_zoomChange_0_listener($event) { return ctx.zoom = $event; })("zoomChange", function LayeredMapComponent_Template_agm_map_zoomChange_0_listener() { return ctx.zoomChanged(); })("mapClick", function LayeredMapComponent_Template_agm_map_mapClick_0_listener($event) { return ctx.mapClick($event); });
            i0.ɵɵtemplate(2, LayeredMapComponent_agm_marker_2_Template, 6, 6, "agm-marker", 2);
            i0.ɵɵtemplate(3, LayeredMapComponent_ng_container_3_Template, 4, 4, "ng-container", 3);
            i0.ɵɵpipe(4, "reverse");
            i0.ɵɵelementStart(5, "map-control", 4);
            i0.ɵɵprojection(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "map-control", 5);
            i0.ɵɵprojection(8, 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "map-control", 6);
            i0.ɵɵprojection(10, 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "map-control", 7);
            i0.ɵɵprojection(12, 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "map-control", 8);
            i0.ɵɵprojection(14, 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "map-control", 9);
            i0.ɵɵprojection(16, 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "map-control", 10);
            i0.ɵɵprojection(18, 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "map-control", 11);
            i0.ɵɵprojection(20, 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "map-control", 12);
            i0.ɵɵprojection(22, 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "map-control", 13);
            i0.ɵɵprojection(24, 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "map-control", 14);
            i0.ɵɵprojection(26, 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "map-control", 15);
            i0.ɵɵprojection(28, 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("latitude", ctx.lat)("longitude", ctx.lng)("zoom", ctx.zoom)("disableDefaultUI", false)("zoomControl", false)("mapTypeId", ctx.mapTypeId)("mapTypeControl", ctx.showMapType)("mapTypeControlOptions", ctx.mapTypeOptions)("streetViewControl", ctx.streetViewControl)("fitBounds", ctx._bounds);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.markers);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(4, 12, ctx.layers.slice()));
        } }, directives: [i2.AgmMap, common.NgForOf, mapControl_component.MapControlComponent, i2.AgmMarker, i2.AgmInfoWindow, common.NgIf, common.NgSwitch, common.NgSwitchCase, wmsLayer_component.WMSLayerComponent, i2.AgmDataLayer, i2.AgmCircle], pipes: [ngxPipes.ReversePipe], encapsulation: 2 });
    return LayeredMapComponent;
}());
exports.LayeredMapComponent = LayeredMapComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LayeredMapComponent, [{
        type: core.Component,
        args: [{
                selector: 'layered-map',
                template: "<agm-map #theMap\n[(latitude)]=\"lat\"\n[(longitude)]=\"lng\"\n[(zoom)]=\"zoom\"\n(zoomChange)=\"zoomChanged()\"\n[disableDefaultUI]=\"false\"\n[zoomControl]=\"false\"\n[mapTypeId]=\"mapTypeId\"\n[mapTypeControl]=\"showMapType\"\n[mapTypeControlOptions]=\"mapTypeOptions\"\n[streetViewControl]=\"streetViewControl\"\nscaleControl=\"true\"\n[fitBounds]=\"_bounds\"\n(mapClick)=\"mapClick($event)\">\n\n<agm-marker *ngFor=\"let marker of markers\"\n            [longitude]=\"marker.loc.lng\"\n            [latitude]=\"marker.loc.lat\"\n            [iconUrl]=\"marker.iconUrl\">\n  <agm-info-window #infoWindows [disableAutoPan]=\"true\">\n    <strong>{{marker.value}}</strong>\n    <span *ngIf=\"marker.html\" [innerHTML]=\"marker.html\"></span>\n  </agm-info-window>\n</agm-marker>\n\n<ng-container *ngFor=\"let mp of layers.slice()|reverse; let i = index\" [ngSwitch]=\"mp.layerType\">\n  <wms-layer *ngSwitchCase=\"'wms'\"\n    [url]=\"mp.url\"\n    [params]=\"mp.wmsParameters\"\n    [opacity]=\"mp.opacity\"\n    [position]=\"mp.options.position\">\n  </wms-layer>\n  <agm-data-layer *ngSwitchCase=\"'vector'\"\n                [geoJson]=\"mp.staticData\"\n                [style]=\"mp._styleFunc\"\n                (layerClick)=\"clicked($event)\"\n                >\n  </agm-data-layer>\n\n  <ng-container *ngSwitchCase=\"'circle'\">\n    <agm-circle *ngFor=\"let f of mp.staticData.features; let j=index\"\n                [latitude]=\"f.geometry.coordinates[1]\"\n                [longitude]=\"f.geometry.coordinates[0]\"\n                [radius]=\"10000000/(zoom*zoom*zoom*zoom)\"\n                [fillColor]=\"mp.flattenedSettings?.styles?.fillColor||'black'\"\n                [fillOpacity]=\"mp.flattenedSettings?.styles?.fillOpacity||1\"\n                [strokeColor]=\"mp.flattenedSettings?.styles?.strokeColor||'black'\"\n                [strokeOpacity]=\"mp.flattenedSettings?.styles?.strokeOpacity||1\"\n                [strokePosition]=\"0\"\n                [strokeWeight]=\"(f===selectedFeature)?3:(mp.flattenedSettings?.styles?.strokeWeight||0.5)\"\n                (circleClick)=\"circleClicked(mp,f)\"\n                >\n    </agm-circle>\n  </ng-container>\n\n  <!--\n  -->\n</ng-container>\n\n<!-- for map controls -->\n<map-control position=\"TOP_CENTER\">\n    <ng-content select=\".map-control.top-center\"></ng-content>\n</map-control>\n\n<map-control position=\"TOP_LEFT\">\n    <ng-content select=\".map-control.top-left\"></ng-content>\n</map-control>\n\n<map-control position=\"TOP_RIGHT\">\n    <ng-content select=\".map-control.top-right\"></ng-content>\n</map-control>\n\n<map-control position=\"LEFT_TOP\">\n    <ng-content select=\".map-control.left-top\"></ng-content>\n</map-control>\n\n<map-control position=\"RIGHT_TOP\">\n    <ng-content select=\".map-control.right-top\"></ng-content>\n</map-control>\n\n<map-control position=\"LEFT_CENTER\">\n    <ng-content select=\".map-control.left-center\"></ng-content>\n</map-control>\n\n<map-control position=\"RIGHT_CENTER\">\n    <ng-content select=\".map-control.right-center\"></ng-content>\n</map-control>\n\n<map-control position=\"LEFT_BOTTOM\">\n    <ng-content select=\".map-control.left-bottom\"></ng-content>\n</map-control>\n\n<map-control position=\"RIGHT_BOTTOM\">\n    <ng-content select=\".map-control.right-bottom\"></ng-content>\n</map-control>\n\n<map-control position=\"BOTTOM_CENTER\">\n    <ng-content select=\".map-control.bottom-center\"></ng-content>\n</map-control>\n\n<map-control position=\"BOTTOM_LEFT\">\n    <ng-content select=\".map-control.bottom-left\"></ng-content>\n</map-control>\n\n<map-control position=\"BOTTOM_RIGHT\">\n    <ng-content select=\".map-control.bottom-right\"></ng-content>\n</map-control>\n\n</agm-map>\n\n",
                styles: []
            }]
    }], function () { return [{ type: i0.NgZone }, { type: i1.StaticDataService }, { type: i1.MetadataService }]; }, { layers: [{
            type: core.Input
        }], markers: [{
            type: core.Input
        }], mapTypeId: [{
            type: core.Input
        }], layersChange: [{
            type: core.Output
        }], featureSelected: [{
            type: core.Output
        }], pointSelected: [{
            type: core.Output
        }], mapTypePosition: [{
            type: core.Input
        }], streetViewControl: [{
            type: core.Input
        }], theMap: [{
            type: core.ViewChild,
            args: [core$1.AgmMap, { static: false }]
        }], infoWindows: [{
            type: core.ViewChildren,
            args: ['infoWindows']
        }], zoom: [{
            type: core.Input
        }], showMapType: [{
            type: core.Input
        }], lat: [{
            type: core.Input
        }], lng: [{
            type: core.Input
        }], bounds: [{
            type: core.Input
        }] }); })();

});

var layeredMap_component$1 = unwrapExports(layeredMap_component);
var layeredMap_component_1 = layeredMap_component.LayeredMapComponent;

var zoomLayer_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoomLayerComponent = void 0;



var i0 = core;

var ZoomLayerComponent = /** @class */ (function () {
    function ZoomLayerComponent() {
    }
    ZoomLayerComponent.prototype.ngAfterViewInit = function () {
    };
    ZoomLayerComponent.prototype.zoomToLayer = function () {
        var _this = this;
        if (this.layer.layer.spatialExtent) {
            console.log('Zoom to layer');
            this.layer.layer.spatialExtent.subscribe(function (b) {
                _this.map.zoomToBounds(Object.assign({}, b));
            });
        }
        else {
            console.log('Zoom full');
            this.map.zoomToBounds(Object.assign({}, this.fullBounds));
        }
    };
    ZoomLayerComponent.ɵfac = function ZoomLayerComponent_Factory(t) { return new (t || ZoomLayerComponent)(); };
    ZoomLayerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ZoomLayerComponent, selectors: [["zoom-layer"]], inputs: { map: "map", layer: "layer", fullBounds: "fullBounds" }, decls: 2, vars: 1, consts: [["type", "button", "ngbTooltip", "Zoom to selected layer", "placement", "right", 1, "btn", "btn-secondary", "btn-sm", 3, "disabled", "click"], [1, "fa", "fa-compress"]], template: function ZoomLayerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function ZoomLayerComponent_Template_button_click_0_listener() { return ctx.zoomToLayer(); });
            i0.ɵɵelement(1, "i", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("disabled", !ctx.layer);
        } }, directives: [ngBootstrap.NgbTooltip], encapsulation: 2 });
    return ZoomLayerComponent;
}());
exports.ZoomLayerComponent = ZoomLayerComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ZoomLayerComponent, [{
        type: core.Component,
        args: [{
                selector: 'zoom-layer',
                template: "<button type=\"button\" [disabled]=\"!layer\" class=\"btn btn-secondary btn-sm\"\n        ngbTooltip=\"Zoom to selected layer\"\n        placement=\"right\"\n        (click)=\"zoomToLayer()\"\n><i class=\"fa fa-compress\"></i>\n</button>\n",
                styles: []
            }]
    }], function () { return []; }, { map: [{
            type: core.Input
        }], layer: [{
            type: core.Input
        }], fullBounds: [{
            type: core.Input
        }] }); })();

});

var zoomLayer_component$1 = unwrapExports(zoomLayer_component);
var zoomLayer_component_1 = zoomLayer_component.ZoomLayerComponent;

var zoomFull_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoomFullComponent = void 0;


var i0 = core;

var ZoomFullComponent = /** @class */ (function () {
    function ZoomFullComponent() {
    }
    ZoomFullComponent.prototype.ngAfterViewInit = function () {
    };
    ZoomFullComponent.prototype.zoomToBounds = function () {
        this.map.zoomToBounds(Object.assign({}, this.bounds));
    };
    ZoomFullComponent.ɵfac = function ZoomFullComponent_Factory(t) { return new (t || ZoomFullComponent)(); };
    ZoomFullComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ZoomFullComponent, selectors: [["zoom-full"]], inputs: { map: "map", bounds: "bounds" }, decls: 2, vars: 0, consts: [["ngbTooltip", "Zoom to full extent", "placement", "right", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "fa", "fa-arrows-alt"]], template: function ZoomFullComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function ZoomFullComponent_Template_button_click_0_listener() { return ctx.zoomToBounds(); });
            i0.ɵɵelement(1, "i", 1);
            i0.ɵɵelementEnd();
        } }, directives: [ngBootstrap.NgbTooltip], encapsulation: 2 });
    return ZoomFullComponent;
}());
exports.ZoomFullComponent = ZoomFullComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ZoomFullComponent, [{
        type: core.Component,
        args: [{
                selector: 'zoom-full',
                template: "<button class=\"btn btn-secondary btn-sm\"\n        ngbTooltip=\"Zoom to full extent\"\n        placement=\"right\"\n        (click)=\"zoomToBounds()\"\n><i class=\"fa fa-arrows-alt\"></i></button>\n",
                styles: []
            }]
    }], function () { return []; }, { map: [{
            type: core.Input
        }], bounds: [{
            type: core.Input
        }] }); })();

});

var zoomFull_component$1 = unwrapExports(zoomFull_component);
var zoomFull_component_1 = zoomFull_component.ZoomFullComponent;

var zoomOut_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoomOutComponent = void 0;


var i0 = core;

var ZoomOutComponent = /** @class */ (function () {
    function ZoomOutComponent() {
        this.minZoom = 1;
    }
    ZoomOutComponent.prototype.ngAfterViewInit = function () {
    };
    ZoomOutComponent.prototype.zoomOut = function () {
        if (!this.map) {
            return;
        }
        this.map.zoom = Math.max(this.minZoom, this.map.zoom - 1);
    };
    ZoomOutComponent.ɵfac = function ZoomOutComponent_Factory(t) { return new (t || ZoomOutComponent)(); };
    ZoomOutComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ZoomOutComponent, selectors: [["zoom-out"]], inputs: { map: "map", minZoom: "minZoom" }, decls: 2, vars: 0, consts: [["ngbTooltip", "Zoom out", "placement", "right", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "fa", "fa-minus"]], template: function ZoomOutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function ZoomOutComponent_Template_button_click_0_listener() { return ctx.zoomOut(); });
            i0.ɵɵelement(1, "i", 1);
            i0.ɵɵelementEnd();
        } }, directives: [ngBootstrap.NgbTooltip], encapsulation: 2 });
    return ZoomOutComponent;
}());
exports.ZoomOutComponent = ZoomOutComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ZoomOutComponent, [{
        type: core.Component,
        args: [{
                selector: 'zoom-out',
                template: "<button class=\"btn btn-secondary btn-sm\"\n        ngbTooltip=\"Zoom out\"\n        placement=\"right\"\n        (click)=\"zoomOut()\"\n><i class=\"fa fa-minus\"></i></button>",
                styles: []
            }]
    }], function () { return []; }, { map: [{
            type: core.Input
        }], minZoom: [{
            type: core.Input
        }] }); })();

});

var zoomOut_component$1 = unwrapExports(zoomOut_component);
var zoomOut_component_1 = zoomOut_component.ZoomOutComponent;

var zoomIn_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoomInComponent = void 0;


var i0 = core;

var ZoomInComponent = /** @class */ (function () {
    function ZoomInComponent() {
        this.maxZoom = 32;
    }
    ZoomInComponent.prototype.ngAfterViewInit = function () {
    };
    ZoomInComponent.prototype.zoomIn = function () {
        if (!this.map) {
            return;
        }
        this.map.zoom = Math.min(this.maxZoom, this.map.zoom + 1);
    };
    ZoomInComponent.ɵfac = function ZoomInComponent_Factory(t) { return new (t || ZoomInComponent)(); };
    ZoomInComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ZoomInComponent, selectors: [["zoom-in"]], inputs: { map: "map", maxZoom: "maxZoom" }, decls: 2, vars: 0, consts: [["ngbTooltip", "Zoom in", "placement", "right", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "fa", "fa-plus"]], template: function ZoomInComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function ZoomInComponent_Template_button_click_0_listener() { return ctx.zoomIn(); });
            i0.ɵɵelement(1, "i", 1);
            i0.ɵɵelementEnd();
        } }, directives: [ngBootstrap.NgbTooltip], encapsulation: 2 });
    return ZoomInComponent;
}());
exports.ZoomInComponent = ZoomInComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ZoomInComponent, [{
        type: core.Component,
        args: [{
                selector: 'zoom-in',
                template: "<button class=\"btn btn-secondary btn-sm\"\n        ngbTooltip=\"Zoom in\"\n        placement=\"right\"\n        (click)=\"zoomIn()\"\n><i class=\"fa fa-plus\"></i></button>",
                styles: []
            }]
    }], function () { return []; }, { map: [{
            type: core.Input
        }], maxZoom: [{
            type: core.Input
        }] }); })();

});

var zoomIn_component$1 = unwrapExports(zoomIn_component);
var zoomIn_component_1 = zoomIn_component.ZoomInComponent;

var cycleBaseMap_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleBaseMapComponent = void 0;


var i0 = core;


var CycleBaseMapComponent = /** @class */ (function () {
    function CycleBaseMapComponent() {
        this.maxZoom = 32;
        this.baseLayers = [
            {
                map_type_id: 'roadmap',
                label: 'Road Map'
            },
            {
                map_type_id: 'satellite',
                label: 'Satellite'
            }
        ];
        this.tooltip = 'Toggle base layer';
    }
    CycleBaseMapComponent.prototype.ngAfterViewInit = function () {
    };
    CycleBaseMapComponent.prototype.ngOnChanges = function (changes) {
        if (this.baseLayers && !this.baseLayer) {
            this.baseLayer = this.baseLayers[0];
        }
    };
    CycleBaseMapComponent.prototype.toggleBaseLayer = function () {
        var _this = this;
        if (!this.map) {
            return;
        }
        var current = this.baseLayers.findIndex(function (l) { return l.map_type_id === _this.baseLayer.map_type_id; });
        var next = (current + 1) % this.baseLayers.length;
        this.baseLayer = this.baseLayers[next];
        this.map.mapTypeId = this.baseLayer ?
            this.baseLayer.map_type_id :
            null;
    };
    CycleBaseMapComponent.ɵfac = function CycleBaseMapComponent_Factory(t) { return new (t || CycleBaseMapComponent)(); };
    CycleBaseMapComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CycleBaseMapComponent, selectors: [["cycle-base-map"]], inputs: { map: "map", maxZoom: "maxZoom", baseLayers: "baseLayers", baseLayer: "baseLayer", tooltip: "tooltip" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [["placement", "right", 1, "btn", "btn-secondary", "btn-sm", 3, "ngbTooltip", "click"], [1, "fa", 3, "ngClass"]], template: function CycleBaseMapComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function CycleBaseMapComponent_Template_button_click_0_listener() { return ctx.toggleBaseLayer(); });
            i0.ɵɵelement(1, "i", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngbTooltip", ctx.tooltip);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", (ctx.baseLayer == null ? null : ctx.baseLayer.label) === "Road Map" ? "fa-road" : "fa-globe");
        } }, directives: [ngBootstrap.NgbTooltip, common.NgClass], encapsulation: 2 });
    return CycleBaseMapComponent;
}());
exports.CycleBaseMapComponent = CycleBaseMapComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CycleBaseMapComponent, [{
        type: core.Component,
        args: [{
                selector: 'cycle-base-map',
                template: "<button class=\"btn btn-secondary btn-sm\" (click)=\"toggleBaseLayer()\" [ngbTooltip]=\"tooltip\"\n                     placement=\"right\">\n  <i class=\"fa\" [ngClass]=\"baseLayer?.label==='Road Map'?'fa-road':'fa-globe'\"></i>\n</button>",
                styles: []
            }]
    }], function () { return []; }, { map: [{
            type: core.Input
        }], maxZoom: [{
            type: core.Input
        }], baseLayers: [{
            type: core.Input
        }], baseLayer: [{
            type: core.Input
        }], tooltip: [{
            type: core.Input
        }] }); })();

});

var cycleBaseMap_component$1 = unwrapExports(cycleBaseMap_component);
var cycleBaseMap_component_1 = cycleBaseMap_component.CycleBaseMapComponent;

var cycleOpacity_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleOpacityComponent = void 0;


var i0 = core;


var CycleOpacityComponent = /** @class */ (function () {
    function CycleOpacityComponent() {
        this.maxZoom = 32;
        this.tooltip = 'Adjust transparency of grid layer';
        this.layerOpacity = 1.0;
        this.step = 0.4;
    }
    CycleOpacityComponent.prototype.ngAfterViewInit = function () {
    };
    CycleOpacityComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.map) {
            this.map.layersChange.subscribe(function () { return _this.updateLayers(); });
        }
    };
    CycleOpacityComponent.prototype.cycleTransparency = function () {
        this.layerOpacity -= this.step;
        if (this.layerOpacity < 0) {
            this.layerOpacity = 1.0;
        }
        this.updateLayers();
    };
    CycleOpacityComponent.prototype.updateLayers = function () {
        var _this = this;
        this.map.layers.forEach(function (l) { return l.opacity = _this.layerOpacity; });
    };
    CycleOpacityComponent.ɵfac = function CycleOpacityComponent_Factory(t) { return new (t || CycleOpacityComponent)(); };
    CycleOpacityComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CycleOpacityComponent, selectors: [["cycle-opacity"]], inputs: { map: "map", maxZoom: "maxZoom", tooltip: "tooltip", layerOpacity: "layerOpacity", step: "step" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [["placement", "right", 1, "btn", "btn-secondary", "btn-sm", 3, "ngbTooltip", "click"], [1, "fa", 3, "ngClass"]], template: function CycleOpacityComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function CycleOpacityComponent_Template_button_click_0_listener() { return ctx.cycleTransparency(); });
            i0.ɵɵelement(1, "i", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngbTooltip", ctx.tooltip);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", ctx.layerOpacity < 0.5 ? "fa-circle-o" : ctx.layerOpacity < 0.9 ? "fa-adjust" : "fa-circle");
        } }, directives: [ngBootstrap.NgbTooltip, common.NgClass], encapsulation: 2 });
    return CycleOpacityComponent;
}());
exports.CycleOpacityComponent = CycleOpacityComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CycleOpacityComponent, [{
        type: core.Component,
        args: [{
                selector: 'cycle-opacity',
                template: "<button class=\"btn btn-secondary btn-sm\"\n                     (click)=\"cycleTransparency()\"\n                     [ngbTooltip]=\"tooltip\"\n                     placement=\"right\">\n<i class=\"fa\" [ngClass]=\"(layerOpacity<0.5)?'fa-circle-o':((layerOpacity<0.9)?'fa-adjust':'fa-circle')\"></i>\n</button>",
                styles: []
            }]
    }], function () { return []; }, { map: [{
            type: core.Input
        }], maxZoom: [{
            type: core.Input
        }], tooltip: [{
            type: core.Input
        }], layerOpacity: [{
            type: core.Input
        }], step: [{
            type: core.Input
        }] }); })();

});

var cycleOpacity_component$1 = unwrapExports(cycleOpacity_component);
var cycleOpacity_component_1 = cycleOpacity_component.CycleOpacityComponent;

var buttonBar_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonBarComponent = void 0;

var i0 = core;
var _c0 = ["*"];
var ButtonBarComponent = /** @class */ (function () {
    function ButtonBarComponent() {
    }
    ButtonBarComponent.prototype.ngAfterViewInit = function () {
    };
    ButtonBarComponent.ɵfac = function ButtonBarComponent_Factory(t) { return new (t || ButtonBarComponent)(); };
    ButtonBarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ButtonBarComponent, selectors: [["button-bar"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "button-bar", "bb-vertical"]], template: function ButtonBarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } }, styles: [""] });
    return ButtonBarComponent;
}());
exports.ButtonBarComponent = ButtonBarComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ButtonBarComponent, [{
        type: core.Component,
        args: [{
                selector: 'button-bar',
                template: "<div class=\"button-bar bb-vertical\">\n  <ng-content></ng-content>\n</div>\n\n", styles: ["\n"]
            }]
    }], function () { return []; }, null); })();

});

var buttonBar_component$1 = unwrapExports(buttonBar_component);
var buttonBar_component_1 = buttonBar_component.ButtonBarComponent;

var timeseriesChart_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeseriesChartComponent = void 0;
/// <reference path="../decs.d.ts" />
/// <reference path="../decs.d.ts" />

//import * as Plotly from 'plotly.js/dist/plotly-basic';
//declare var Plotly: any;
//const Plotly = require('plotly.js/dist/plotly-basic');

var i0 = core;
// import * as Plotly from 'plotly.js';
var TimeseriesChartComponent = /** @class */ (function () {
    function TimeseriesChartComponent(_element) {
        this._element = _element;
        this.timeSeries = [];
        this.marginLeft = 40;
        this.marginRight = 10;
        this.marginTop = 0;
        this.marginBottom = 20;
        this.titlefont = undefined;
    }
    TimeseriesChartComponent.prototype.ngAfterViewInit = function () {
        this.draw();
    };
    TimeseriesChartComponent.prototype.ngOnChanges = function (changes) {
        this.draw();
    };
    TimeseriesChartComponent.prototype.draw = function () {
        var node = this._element.nativeElement.querySelector('.our-chart');
        plotlyBasic.purge(node);
        if (!this.timeSeries || !this.timeSeries.length) {
            return;
        }
        var seriesUnits = this.timeSeries.map(function (ts) { return ts.units; });
        var commonUnits;
        if (seriesUnits.every(function (u) { return u === seriesUnits[0]; })) {
            commonUnits = seriesUnits[0];
        }
        var layout = {
            margin: {
                t: this.marginTop + (this.title ? 30 : 0),
                l: this.marginLeft,
                r: this.marginRight,
                b: this.marginBottom
            },
            yaxis: {
                fixedrange: true,
                title: commonUnits
            },
            width: 320,
            height: 200,
            title: this.title || undefined,
            titlefont: this.titlefont
        };
        plotlyBasic.plot(node, this.timeSeries.map(function (ts) {
            var nonNullCount = ts.values.filter(function (v) { return !isNaN(v); }).length;
            var mode = ((ts.style !== 'bar') && (nonNullCount < 365)) ?
                'lines+markers' :
                undefined;
            var suffix = commonUnits ? '' : " (" + ts.units + ")";
            return {
                type: (ts.style === 'bar') ? 'bar' : undefined,
                mode: mode,
                x: ts.dates,
                y: ts.values,
                name: ts.label + suffix
            };
        }), layout);
    };
    TimeseriesChartComponent.ɵfac = function TimeseriesChartComponent_Factory(t) { return new (t || TimeseriesChartComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    TimeseriesChartComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TimeseriesChartComponent, selectors: [["timeseries-chart"]], inputs: { title: "title", timeSeries: "timeSeries", marginLeft: "marginLeft", marginRight: "marginRight", marginTop: "marginTop", marginBottom: "marginBottom", titlefont: "titlefont" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "our-chart"]], template: function TimeseriesChartComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 0);
        } }, encapsulation: 2 });
    return TimeseriesChartComponent;
}());
exports.TimeseriesChartComponent = TimeseriesChartComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TimeseriesChartComponent, [{
        type: core.Component,
        args: [{
                selector: 'timeseries-chart',
                template: "<div class=\"our-chart\">\n</div>\n",
                styles: []
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { title: [{
            type: core.Input
        }], timeSeries: [{
            type: core.Input
        }], marginLeft: [{
            type: core.Input
        }], marginRight: [{
            type: core.Input
        }], marginTop: [{
            type: core.Input
        }], marginBottom: [{
            type: core.Input
        }], titlefont: [{
            type: core.Input
        }] }); })();

});

var timeseriesChart_component$1 = unwrapExports(timeseriesChart_component);
var timeseriesChart_component_1 = timeseriesChart_component.TimeseriesChartComponent;

var featureTable_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureTableComponent = void 0;

var i0 = core;

function FeatureTableComponent_table_0_tr_16_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var prop_r2 = i0.ɵɵnextContext().$implicit;
    var ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.feature.properties[prop_r2]);
} }
function FeatureTableComponent_table_0_tr_16_td_5_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var prop_r2 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("href", ctx_r6.feature.properties[prop_r2], i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r6.feature.properties[prop_r2], " ");
} }
function FeatureTableComponent_table_0_tr_16_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, FeatureTableComponent_table_0_tr_16_td_5_a_1_Template, 2, 2, "a", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var prop_r2 = i0.ɵɵnextContext().$implicit;
    var ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.styles[prop_r2].hyperlink);
} }
function FeatureTableComponent_table_0_tr_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "td");
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, FeatureTableComponent_table_0_tr_16_td_4_Template, 2, 1, "td", 3);
    i0.ɵɵtemplate(5, FeatureTableComponent_table_0_tr_16_td_5_Template, 2, 1, "td", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var prop_r2 = ctx.$implicit;
    var ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(prop_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.styles || !ctx_r1.styles[prop_r2]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.styles && ctx_r1.styles[prop_r2]);
} }
function FeatureTableComponent_table_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 1);
    i0.ɵɵelementStart(1, "thead");
    i0.ɵɵelementStart(2, "tr");
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5, "Property");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵelementStart(7, "strong");
    i0.ɵɵtext(8, "Value");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "tbody");
    i0.ɵɵelementStart(10, "tr");
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵelementStart(12, "strong");
    i0.ɵɵtext(13, "Geometry");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(16, FeatureTableComponent_table_0_tr_16_Template, 6, 3, "tr", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(15);
    i0.ɵɵtextInterpolate(ctx_r0.feature.geometry.type);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0._keys(ctx_r0.feature.properties));
} }
var FeatureTableComponent = /** @class */ (function () {
    function FeatureTableComponent() {
        this.styles = {};
        this._keys = Object.keys;
    }
    FeatureTableComponent.prototype.ngAfterViewInit = function () {
    };
    FeatureTableComponent.prototype.ngOnChanges = function (changes) {
        if (!this.styles) {
            this.styles = {};
        }
    };
    FeatureTableComponent.ɵfac = function FeatureTableComponent_Factory(t) { return new (t || FeatureTableComponent)(); };
    FeatureTableComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FeatureTableComponent, selectors: [["feature-table"]], inputs: { feature: "feature", styles: "styles" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "table table-striped table-sm feature-table", 4, "ngIf"], [1, "table", "table-striped", "table-sm", "feature-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 3, "href"]], template: function FeatureTableComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, FeatureTableComponent_table_0_Template, 17, 2, "table", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.feature);
        } }, directives: [common.NgIf, common.NgForOf], styles: [".feature-table[_ngcontent-%COMP%]{\n  max-width:300px;\n}"] });
    return FeatureTableComponent;
}());
exports.FeatureTableComponent = FeatureTableComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FeatureTableComponent, [{
        type: core.Component,
        args: [{
                selector: 'feature-table',
                template: "<table *ngIf=\"feature\" class=\"table table-striped table-sm feature-table\">\n  <thead>\n    <tr>\n      <td><strong>Property</strong></td>\n      <td><strong>Value</strong></td>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td><strong>Geometry</strong></td>\n      <td>{{feature.geometry.type}}</td>\n    </tr>\n    <tr *ngFor=\"let prop of _keys(feature.properties)\">\n      <td><strong>{{prop}}</strong></td>\n      <td *ngIf=\"!styles||!styles[prop]\">{{feature.properties[prop]}}</td>\n      <td *ngIf=\"styles&&styles[prop]\">\n        <a *ngIf=\"styles[prop].hyperlink\" target=\"_blank\" [href]=\"feature.properties[prop]\">\n          {{feature.properties[prop]}}\n        </a>\n      </td>\n    </tr>\n  </tbody>\n</table>", styles: [".feature-table{\n  max-width:300px;\n}"]
            }]
    }], function () { return []; }, { feature: [{
            type: core.Input
        }], styles: [{
            type: core.Input
        }] }); })();

});

var featureTable_component$1 = unwrapExports(featureTable_component);
var featureTable_component_1 = featureTable_component.FeatureTableComponent;

var collapsibleMapControl_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollapsibleMapControlComponent = void 0;

var i0 = core;


function CollapsibleMapControlComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 7);
} }
function CollapsibleMapControlComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 8);
} }
var _c0 = ["*"];
var CollapsibleMapControlComponent = /** @class */ (function () {
    function CollapsibleMapControlComponent() {
    }
    CollapsibleMapControlComponent.prototype.ngAfterViewInit = function () {
    };
    CollapsibleMapControlComponent.ɵfac = function CollapsibleMapControlComponent_Factory(t) { return new (t || CollapsibleMapControlComponent)(); };
    CollapsibleMapControlComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CollapsibleMapControlComponent, selectors: [["collapsible-map-control"]], inputs: { isCollapsed: "isCollapsed", heading: "heading", direction: "direction" }, ngContentSelectors: _c0, decls: 9, vars: 4, consts: [[1, "card", "map-control", "collapsible-control"], [3, "click"], [1, "card-header"], [1, "mb-0"], ["class", "float-right fa fa-caret-up\n            collapse-arrow", "aria-hidden", "true", 4, "ngIf"], ["class", "float-right fa fa-caret-down\n            collapse-arrow", "aria-hidden", "true", 4, "ngIf"], [1, "ngbCollapse", 3, "ngbCollapse"], ["aria-hidden", "true", 1, "float-right", "fa", "fa-caret-up", "collapse-arrow"], ["aria-hidden", "true", 1, "float-right", "fa", "fa-caret-down", "collapse-arrow"]], template: function CollapsibleMapControlComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "a", 1);
            i0.ɵɵlistener("click", function CollapsibleMapControlComponent_Template_a_click_1_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelementStart(3, "h6", 3);
            i0.ɵɵtext(4);
            i0.ɵɵtemplate(5, CollapsibleMapControlComponent_span_5_Template, 1, 0, "span", 4);
            i0.ɵɵtemplate(6, CollapsibleMapControlComponent_span_6_Template, 1, 0, "span", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 6);
            i0.ɵɵprojection(8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", ctx.heading, " ");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isCollapsed);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.isCollapsed);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngbCollapse", ctx.isCollapsed);
        } }, directives: [common.NgIf, ngBootstrap.NgbCollapse], styles: [".collapsible-control[_ngcontent-%COMP%]{\n  margin:3px;\n}"] });
    return CollapsibleMapControlComponent;
}());
exports.CollapsibleMapControlComponent = CollapsibleMapControlComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CollapsibleMapControlComponent, [{
        type: core.Component,
        args: [{
                selector: 'collapsible-map-control',
                template: "<div class=\"card map-control collapsible-control\">\n    <a (click)=\"isCollapsed = !isCollapsed\">\n      <div class=\"card-header\">\n        <h6 class=\"mb-0\">\n          {{heading}}\n          <span *ngIf=\"isCollapsed\" class=\"float-right fa fa-caret-up\n            collapse-arrow\" aria-hidden=\"true\"></span>\n          <span *ngIf=\"!isCollapsed\" class=\"float-right fa fa-caret-down\n            collapse-arrow\" aria-hidden=\"true\"></span>\n        </h6>\n      </div>\n    </a>\n\n    <div class=\"ngbCollapse\" [ngbCollapse]=\"isCollapsed\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n", styles: [".collapsible-control{\n  margin:3px;\n}"]
            }]
    }], function () { return []; }, { isCollapsed: [{
            type: core.Input
        }], heading: [{
            type: core.Input
        }], direction: [{
            type: core.Input
        }] }); })();

});

var collapsibleMapControl_component$1 = unwrapExports(collapsibleMapControl_component);
var collapsibleMapControl_component_1 = collapsibleMapControl_component.CollapsibleMapControlComponent;

var baseMapSelection_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseMapSelectionComponent = void 0;

var i0 = core;
var BaseMapSelectionComponent = /** @class */ (function () {
    function BaseMapSelectionComponent() {
    }
    BaseMapSelectionComponent.prototype.ngAfterViewInit = function () {
    };
    BaseMapSelectionComponent.ɵfac = function BaseMapSelectionComponent_Factory(t) { return new (t || BaseMapSelectionComponent)(); };
    BaseMapSelectionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BaseMapSelectionComponent, selectors: [["base-map-selection"]], decls: 2, vars: 0, template: function BaseMapSelectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "base-map-selection Component");
            i0.ɵɵelementEnd();
        } }, encapsulation: 2 });
    return BaseMapSelectionComponent;
}());
exports.BaseMapSelectionComponent = BaseMapSelectionComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BaseMapSelectionComponent, [{
        type: core.Component,
        args: [{
                selector: 'base-map-selection',
                template: "<p>base-map-selection Component</p>",
                styles: []
            }]
    }], function () { return []; }, null); })();

});

var baseMapSelection_component$1 = unwrapExports(baseMapSelection_component);
var baseMapSelection_component_1 = baseMapSelection_component.BaseMapSelectionComponent;

var simpleTreeNode_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleTreeNodeComponent = void 0;

var i0 = core;


function SimpleTreeNodeComponent_span_6_i_2_Template(rf, ctx) { if (rf & 1) {
    var _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 6);
    i0.ɵɵlistener("click", function SimpleTreeNodeComponent_span_6_i_2_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r4); var a_r2 = ctx.$implicit; var ctx_r3 = i0.ɵɵnextContext(2); return a_r2.action(ctx_r3.tree); });
    i0.ɵɵpipe(1, "async");
    i0.ɵɵtext(2, "\u00A0");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var a_r2 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("ngbTooltip", i0.ɵɵpipeBind1(1, 2, a_r2.tooltip));
    i0.ɵɵproperty("ngClass", a_r2.icon);
} }
function SimpleTreeNodeComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 4);
    i0.ɵɵtext(1, " \u00A0 ");
    i0.ɵɵtemplate(2, SimpleTreeNodeComponent_span_6_i_2_Template, 3, 4, "i", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.tree.actions);
} }
var SimpleTreeNodeComponent = /** @class */ (function () {
    function SimpleTreeNodeComponent() {
        this.options = {};
        this.nodeSelected = new core.EventEmitter();
    }
    SimpleTreeNodeComponent.prototype.ngOnChanges = function (changes) {
        this.evalState();
    };
    SimpleTreeNodeComponent.prototype.ngAfterViewInit = function () {
    };
    SimpleTreeNodeComponent.prototype.treeClick = function (event) {
        event.stopPropagation();
        event.preventDefault();
        if (!this.tree) {
            return;
        }
        this.tree.expanded = !this.tree.expanded;
        this.evalState();
        if (this.tree.actions && this.tree.actions.length) {
            this.tree.actions[0].action(this.tree);
        }
        else {
            this.nodeSelected.emit(this.tree);
        }
    };
    SimpleTreeNodeComponent.prototype.evalState = function () {
        this.expanded = this.tree &&
            this.tree.expanded &&
            this.tree.children &&
            this.tree.children.length > 0;
        this.leaf = this.tree && (!this.tree.children || this.tree.children.length === 0);
        this.collapsed = this.tree &&
            !this.tree.expanded &&
            this.tree.children &&
            this.tree.children.length > 0;
        if (this.expanded) {
            this.icon = this.options.expandedIcon;
        }
        else if (this.collapsed) {
            this.icon = this.options.collapsedIcon;
        }
        else {
            this.icon = this.options.leafIcon;
        }
    };
    SimpleTreeNodeComponent.ɵfac = function SimpleTreeNodeComponent_Factory(t) { return new (t || SimpleTreeNodeComponent)(); };
    SimpleTreeNodeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SimpleTreeNodeComponent, selectors: [["simple-tree-node"]], inputs: { tree: "tree", options: "options" }, outputs: { nodeSelected: "nodeSelected" }, features: [i0.ɵɵNgOnChangesFeature], decls: 7, vars: 7, consts: [["href", "#", 3, "ngClass", "click"], [3, "ngClass"], ["placement", "right", "container", "body", 3, "ngbTooltip"], ["class", "float-right", 4, "ngIf"], [1, "float-right"], ["placement", "right", "container", "body", 3, "ngClass", "ngbTooltip", "click", 4, "ngFor", "ngForOf"], ["placement", "right", "container", "body", 3, "ngClass", "ngbTooltip", "click"]], template: function SimpleTreeNodeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 0);
            i0.ɵɵlistener("click", function SimpleTreeNodeComponent_Template_a_click_0_listener($event) { return ctx.treeClick($event); });
            i0.ɵɵelement(1, "i", 1);
            i0.ɵɵtext(2, " \u00A0 ");
            i0.ɵɵelementStart(3, "span", 2);
            i0.ɵɵpipe(4, "async");
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, SimpleTreeNodeComponent_span_6_Template, 3, 1, "span", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.tree.klass);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", ctx.icon);
            i0.ɵɵadvance(2);
            i0.ɵɵpropertyInterpolate("ngbTooltip", i0.ɵɵpipeBind1(4, 5, ctx.tree.tooltip));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.tree.label);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.tree.actions);
        } }, directives: [common.NgClass, ngBootstrap.NgbTooltip, common.NgIf, common.NgForOf], pipes: [common.AsyncPipe], encapsulation: 2 });
    return SimpleTreeNodeComponent;
}());
exports.SimpleTreeNodeComponent = SimpleTreeNodeComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SimpleTreeNodeComponent, [{
        type: core.Component,
        args: [{
                selector: 'simple-tree-node',
                template: "<a href=\"#\"\n                (click)=\"treeClick($event)\"\n                [ngClass]=\"tree.klass\"><i [ngClass]=\"icon\"></i>\n  &nbsp;\n  <span ngbTooltip=\"{{tree.tooltip | async}}\"\n        placement=\"right\"\n        container=\"body\">{{tree.label}}</span>\n  <span *ngIf=\"tree.actions\"\n        class=\"float-right\">\n      &nbsp;\n      <i *ngFor=\"let a of tree.actions\"\n       [ngClass]=\"a.icon\"\n       ngbTooltip=\"{{a.tooltip | async}}\"\n       placement=\"right\"\n       container=\"body\"\n       (click)=\"a.action(tree)\">&nbsp;</i>\n  </span>\n</a>\n",
                styles: []
            }]
    }], null, { tree: [{
            type: core.Input
        }], options: [{
            type: core.Input
        }], nodeSelected: [{
            type: core.Output
        }] }); })();

});

var simpleTreeNode_component$1 = unwrapExports(simpleTreeNode_component);
var simpleTreeNode_component_1 = simpleTreeNode_component.SimpleTreeNodeComponent;

var simpleTree_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleTreeComponent = void 0;

var i0 = core;


function SimpleTreeComponent_div_0_div_1_ul_3_simple_tree_1_Template(rf, ctx) { if (rf & 1) {
    var _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "simple-tree", 7);
    i0.ɵɵlistener("nodeSelected", function SimpleTreeComponent_div_0_div_1_ul_3_simple_tree_1_Template_simple_tree_nodeSelected_0_listener($event) { i0.ɵɵrestoreView(_r8); var ctx_r7 = i0.ɵɵnextContext(4); return ctx_r7.childSelected($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var t_r6 = ctx.$implicit;
    var ctx_r5 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("tree", t_r6)("inner", true)("options", ctx_r5.options);
} }
function SimpleTreeComponent_div_0_div_1_ul_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 5);
    i0.ɵɵtemplate(1, SimpleTreeComponent_div_0_div_1_ul_3_simple_tree_1_Template, 1, 3, "simple-tree", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r4.tree.children);
} }
function SimpleTreeComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "li");
    i0.ɵɵelementStart(2, "simple-tree-node", 3);
    i0.ɵɵlistener("nodeSelected", function SimpleTreeComponent_div_0_div_1_Template_simple_tree_node_nodeSelected_2_listener($event) { i0.ɵɵrestoreView(_r10); var ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.childSelected($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, SimpleTreeComponent_div_0_div_1_ul_3_Template, 2, 1, "ul", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("tree", ctx_r1.tree)("options", ctx_r1.options);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.tree.children && ctx_r1.tree.expanded);
} }
function SimpleTreeComponent_div_0_div_2_ul_4_simple_tree_1_Template(rf, ctx) { if (rf & 1) {
    var _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "simple-tree", 7);
    i0.ɵɵlistener("nodeSelected", function SimpleTreeComponent_div_0_div_2_ul_4_simple_tree_1_Template_simple_tree_nodeSelected_0_listener($event) { i0.ɵɵrestoreView(_r15); var ctx_r14 = i0.ɵɵnextContext(4); return ctx_r14.childSelected($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var t_r13 = ctx.$implicit;
    var ctx_r12 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("tree", t_r13)("inner", true)("options", ctx_r12.options);
} }
function SimpleTreeComponent_div_0_div_2_ul_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 5);
    i0.ɵɵtemplate(1, SimpleTreeComponent_div_0_div_2_ul_4_simple_tree_1_Template, 1, 3, "simple-tree", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r11 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r11.tree.children);
} }
function SimpleTreeComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "ul", 8);
    i0.ɵɵelementStart(2, "li");
    i0.ɵɵelementStart(3, "simple-tree-node", 3);
    i0.ɵɵlistener("nodeSelected", function SimpleTreeComponent_div_0_div_2_Template_simple_tree_node_nodeSelected_3_listener($event) { i0.ɵɵrestoreView(_r17); var ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.childSelected($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, SimpleTreeComponent_div_0_div_2_ul_4_Template, 2, 1, "ul", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("tree", ctx_r2.tree)("options", ctx_r2.options);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.tree.children && ctx_r2.tree.expanded);
} }
function SimpleTreeComponent_div_0_div_3_ul_1_simple_tree_1_Template(rf, ctx) { if (rf & 1) {
    var _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "simple-tree", 7);
    i0.ɵɵlistener("nodeSelected", function SimpleTreeComponent_div_0_div_3_ul_1_simple_tree_1_Template_simple_tree_nodeSelected_0_listener($event) { i0.ɵɵrestoreView(_r22); var ctx_r21 = i0.ɵɵnextContext(4); return ctx_r21.childSelected($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var t_r20 = ctx.$implicit;
    var ctx_r19 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("tree", t_r20)("inner", true)("options", ctx_r19.options);
} }
function SimpleTreeComponent_div_0_div_3_ul_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 8);
    i0.ɵɵtemplate(1, SimpleTreeComponent_div_0_div_3_ul_1_simple_tree_1_Template, 1, 3, "simple-tree", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r18 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r18.tree.children);
} }
function SimpleTreeComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, SimpleTreeComponent_div_0_div_3_ul_1_Template, 2, 1, "ul", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.tree.children && ctx_r3.tree.expanded);
} }
function SimpleTreeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, SimpleTreeComponent_div_0_div_1_Template, 4, 3, "div", 2);
    i0.ɵɵtemplate(2, SimpleTreeComponent_div_0_div_2_Template, 5, 3, "div", 2);
    i0.ɵɵtemplate(3, SimpleTreeComponent_div_0_div_3_Template, 2, 1, "div", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.inner);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.inner && ctx_r0.showTop);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.inner && !ctx_r0.showTop);
} }
var SimpleTreeComponent = /** @class */ (function () {
    function SimpleTreeComponent() {
        this.showTop = true;
        this.collapsedIcon = 'fa fa-caret-right';
        this.expandedIcon = 'fa fa-caret-down';
        this.leafIcon = 'fa fa-minus';
        this.nodeSelected = new core.EventEmitter();
        this.options = {};
    }
    SimpleTreeComponent.prototype.ngAfterViewInit = function () {
    };
    SimpleTreeComponent.prototype.ngOnChanges = function (changes) {
        if (changes.options) {
            return;
        }
        this.options = {
            collapsedIcon: this.collapsedIcon,
            expandedIcon: this.expandedIcon,
            leafIcon: this.leafIcon
        };
    };
    SimpleTreeComponent.prototype.childSelected = function (node) {
        this.nodeSelected.emit(node);
    };
    SimpleTreeComponent.ɵfac = function SimpleTreeComponent_Factory(t) { return new (t || SimpleTreeComponent)(); };
    SimpleTreeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SimpleTreeComponent, selectors: [["simple-tree"]], inputs: { tree: "tree", showTop: "showTop", inner: "inner", collapsedIcon: "collapsedIcon", expandedIcon: "expandedIcon", leafIcon: "leafIcon", options: "options" }, outputs: { nodeSelected: "nodeSelected" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "simple-tree", 4, "ngIf"], [1, "simple-tree"], [4, "ngIf"], [3, "tree", "options", "nodeSelected"], ["class", "inner-list", 4, "ngIf"], [1, "inner-list"], [3, "tree", "inner", "options", "nodeSelected", 4, "ngFor", "ngForOf"], [3, "tree", "inner", "options", "nodeSelected"], [1, "outer-list"], ["class", "outer-list", 4, "ngIf"]], template: function SimpleTreeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SimpleTreeComponent_div_0_Template, 4, 3, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.tree && ctx.tree.visible);
        } }, directives: [common.NgIf, simpleTreeNode_component.SimpleTreeNodeComponent, common.NgForOf, SimpleTreeComponent], styles: [".simple-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\n  list-style-type: none\n}\n\nul.outer-list[_ngcontent-%COMP%]{\n  padding-left:5px;\n}\n\nul.inner-list[_ngcontent-%COMP%]{\n  padding-left:15px;\n}"] });
    return SimpleTreeComponent;
}());
exports.SimpleTreeComponent = SimpleTreeComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SimpleTreeComponent, [{
        type: core.Component,
        args: [{
                selector: 'simple-tree',
                template: "<div *ngIf=\"tree&&tree.visible\" class=\"simple-tree\">\n\n  <div *ngIf=\"inner\">\n    <li ><simple-tree-node [tree]=\"tree\"\n                           [options]=\"options\"\n                           (nodeSelected)=\"childSelected($event)\"></simple-tree-node>\n      <ul *ngIf=\"tree.children&&tree.expanded\" class=\"inner-list\">\n        <simple-tree *ngFor=\"let t of tree.children\" [tree]=\"t\" [inner]=\"true\"\n                    (nodeSelected)=\"childSelected($event)\"\n                    [options]=\"options\"></simple-tree>\n      </ul>\n    </li>\n  </div>\n\n  <div *ngIf=\"!inner&&showTop\">\n    <ul class=\"outer-list\">\n      <li><simple-tree-node [tree]=\"tree\" [options]=\"options\"\n        (nodeSelected)=\"childSelected($event)\"></simple-tree-node>\n        <ul *ngIf=\"tree.children&&tree.expanded\" class=\"inner-list\">\n            <simple-tree *ngFor=\"let t of tree.children\" [tree]=\"t\" [inner]=\"true\"\n            (nodeSelected)=\"childSelected($event)\"\n            [options]=\"options\"></simple-tree>\n        </ul>\n      </li>\n    </ul>\n  </div>\n\n  <div *ngIf=\"!inner&&!showTop\">\n      <ul *ngIf=\"tree.children&&tree.expanded\" class=\"outer-list\">\n          <simple-tree *ngFor=\"let t of tree.children\" [tree]=\"t\" [inner]=\"true\"\n          (nodeSelected)=\"childSelected($event)\"\n          [options]=\"options\"></simple-tree>\n      </ul>\n    </div>\n\n</div>\n", styles: ["\n.simple-tree ul{\n  list-style-type: none\n}\n\nul.outer-list{\n  padding-left:5px;\n}\n\nul.inner-list{\n  padding-left:15px;\n}"]
            }]
    }], function () { return []; }, { tree: [{
            type: core.Input
        }], showTop: [{
            type: core.Input
        }], inner: [{
            type: core.Input
        }], collapsedIcon: [{
            type: core.Input
        }], expandedIcon: [{
            type: core.Input
        }], leafIcon: [{
            type: core.Input
        }], nodeSelected: [{
            type: core.Output
        }], options: [{
            type: core.Input
        }] }); })();

});

var simpleTree_component$1 = unwrapExports(simpleTree_component);
var simpleTree_component_1 = simpleTree_component.SimpleTreeComponent;

var catalog_component = createCommonjsModule(function (module, exports) {
"use strict";
var __values = (commonjsGlobal && commonjsGlobal.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (commonjsGlobal && commonjsGlobal.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogComponent = void 0;




var i0 = core;
var i1 = mapWald;



function CatalogComponent_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 8);
} }
function CatalogComponent_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 9);
} }
var CatalogComponent = /** @class */ (function () {
    function CatalogComponent(filterService, metadata) {
        this.metadata = metadata;
        this.showPlaceholders = true;
        this.defaultAction = 'add';
        this.layerActions = [];
        this.layerSelected = new core.EventEmitter();
        this.collapsedIcon = 'fa fa-caret-right';
        this.expandedIcon = 'fa fa-caret-down';
        this.leafIcon = 'fa fa-minus';
        this.layers = [];
        this.tree = { label: 'no catalog loaded' };
        this.filterText = '';
        this.filterService = filterService;
    }
    CatalogComponent.prototype.ngAfterViewInit = function () {
        if (this.catalog) {
            this.buildTree();
        }
    };
    CatalogComponent.prototype.ngOnChanges = function (changes) {
        if (changes.catalog && this.catalog) {
            this.filterText = '';
            this.buildTree();
            this.highlightLayers([], this.tree);
        }
    };
    CatalogComponent.prototype.buildTree = function () {
        var _this = this;
        var self = this;
        this.layers = [];
        var cat = this.catalog;
        var tree = {
            label: cat.name,
            expanded: true,
            visible: true,
        };
        var deferredLayers = cat.themes.map(function (t) { return t.layers.filter(function (l) { return l.path && !l.skip; }); }).reduce(function (l, r) { return l.concat(r); }, []);
        var deferredThemes = cat.themes.filter(function (t) { return t.path && !t.skip; });
        var treeActions = this.layerActions.map(function (la) {
            return {
                icon: la.icon,
                tooltip: la.tooltip,
                action: function (node) { return _this.layerClick(node.data, la.action); }
            };
        });
        var layerToTree = function (l) {
            var result = {
                label: l.name,
                data: l,
                visible: true,
                actions: treeActions
            };
            var tmp = new mapWald.MappedLayer();
            tmp.layer = l;
            tmp.update();
            if (l.description) {
                result.tooltip = rxjs.of(l.description);
            }
            else {
                result.tooltip = _this.metadata.getMetadata(tmp).pipe(operators.map(function (meta) { return meta[l.descriptionField || 'long_name']; }));
            }
            return result;
        };
        function themeToTree(t) {
            return {
                label: t.name,
                expanded: false,
                visible: true,
                children: t.layers.filter(function (l) { return !l.path && !l.skip; })
                    .filter(function (l) { return self.showPlaceholders || !l.placeholder; })
                    .map(layerToTree)
            };
        }
        tree.children = cat.themes.filter(function (t) { return !t.path && !t.skip; }).map(themeToTree);
        function findParent(path) {
            var e_1, _a, e_2, _b;
            var components = path.split('/');
            var parent = tree;
            var index = -1;
            try {
                for (var components_1 = __values(components), components_1_1 = components_1.next(); !components_1_1.done; components_1_1 = components_1.next()) {
                    var component = components_1_1.value;
                    var split = component.split('@');
                    component = split[0];
                    index = -1;
                    if (split.length > 1) {
                        index = +split[1];
                    }
                    var found = false;
                    try {
                        for (var _c = (e_2 = void 0, __values(parent.children)), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var n = _d.value;
                            if (n.label === component) {
                                parent = n;
                                found = true;
                                break;
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    if (!found) {
                        var newNode = {
                            label: component,
                            expanded: false,
                            visible: true,
                            children: []
                        };
                        addChild(parent, newNode, index);
                        parent = newNode;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (components_1_1 && !components_1_1.done && (_a = components_1.return)) _a.call(components_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return [parent, index];
        }
        function addChild(parent, child, i) {
            if (i < 0) {
                parent.children.push(child);
            }
            else {
                parent.children.splice(i, 0, child);
            }
        }
        deferredThemes.forEach(function (t) {
            var _a = __read(findParent(t.path), 2), parent = _a[0], index = _a[1];
            addChild(parent, themeToTree(t), index);
        });
        deferredLayers.forEach(function (l) {
            var _a = __read(findParent(l.path), 2), parent = _a[0], index = _a[1];
            addChild(parent, layerToTree(l), index);
        });
        this.tree = tree;
    };
    CatalogComponent.prototype.layerClick = function (l, action) {
        var selection = {
            layer: l,
            action: action
        };
        this.layerSelected.emit(selection);
    };
    CatalogComponent.prototype.nodeSelected = function (e) {
        if (!e.data) {
            return;
        }
        var layer = e.data;
        this.layerClick(layer, this.defaultAction);
    };
    CatalogComponent.prototype.activeLayers = function (layers) {
        this.highlightLayers(layers, this.tree);
    };
    CatalogComponent.prototype.highlightLayers = function (layers, tree) {
        tree.klass = null;
        if (tree.data && (layers.indexOf(tree.data) >= 0)) {
            tree.klass = 'active-layer';
            return true;
        }
        if (tree.children) {
            var activeChild = false;
            for (var i = 0; i < tree.children.length; i++) {
                activeChild = this.highlightLayers(layers, tree.children[i]) || activeChild;
            }
            if (activeChild) {
                tree.klass = 'active-child';
            }
            tree.klass = (tree.klass || '') + ' theme';
            return activeChild;
        }
        return false;
    };
    CatalogComponent.ɵfac = function CatalogComponent_Factory(t) { return new (t || CatalogComponent)(i0.ɵɵdirectiveInject(i1.TreeFilterService), i0.ɵɵdirectiveInject(i1.MetadataService)); };
    CatalogComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CatalogComponent, selectors: [["catalog"]], inputs: { catalog: "catalog", showPlaceholders: "showPlaceholders", defaultAction: "defaultAction", layerActions: "layerActions", collapsedIcon: "collapsedIcon", expandedIcon: "expandedIcon", leafIcon: "leafIcon" }, outputs: { layerSelected: "layerSelected" }, features: [i0.ɵɵNgOnChangesFeature], decls: 8, vars: 9, consts: [[1, "input-group"], [1, "input-group-btn"], ["type", "button", 1, "btn", 3, "disabled", "click"], ["class", "fa fa-times", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-search", "aria-hidden", "true", 4, "ngIf"], ["type", "text", "placeholder", "Catalog search...", 1, "form-control", 3, "ngModel", "ngModelChange"], ["filterInput", ""], [3, "tree", "showTop", "leafIcon", "collapsedIcon", "expandedIcon", "nodeSelected"], ["aria-hidden", "true", 1, "fa", "fa-times"], ["aria-hidden", "true", 1, "fa", "fa-search"]], template: function CatalogComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "span", 1);
            i0.ɵɵelementStart(2, "button", 2);
            i0.ɵɵlistener("click", function CatalogComponent_Template_button_click_2_listener() { return ctx.filterText = ""; });
            i0.ɵɵtemplate(3, CatalogComponent_i_3_Template, 1, 0, "i", 3);
            i0.ɵɵtemplate(4, CatalogComponent_i_4_Template, 1, 0, "i", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "input", 5, 6);
            i0.ɵɵlistener("ngModelChange", function CatalogComponent_Template_input_ngModelChange_5_listener($event) { return ctx.filterText = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "simple-tree", 7);
            i0.ɵɵlistener("nodeSelected", function CatalogComponent_Template_simple_tree_nodeSelected_7_listener($event) { return ctx.nodeSelected($event); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", !ctx.filterText);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.filterText);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.filterText);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", ctx.filterText);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("tree", ctx.filterService.filterTree(ctx.tree, ctx.filterText))("showTop", false)("leafIcon", ctx.leafIcon)("collapsedIcon", ctx.collapsedIcon)("expandedIcon", ctx.expandedIcon);
        } }, directives: [common.NgIf, forms.DefaultValueAccessor, forms.NgControlStatus, forms.NgModel, simpleTree_component.SimpleTreeComponent], styles: [".node-name[_ngcontent-%COMP%]{\n  font-size:1em;\n}"] });
    return CatalogComponent;
}());
exports.CatalogComponent = CatalogComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CatalogComponent, [{
        type: core.Component,
        args: [{
                selector: 'catalog',
                template: "<div class=\"input-group\">\n  <span class=\"input-group-btn\">\n            <button class=\"btn\" type=\"button\" [disabled]=\"!filterText\"\n              (click)=\"filterText = ''\">\n            <i *ngIf=\"filterText\"class=\"fa fa-times\" aria-hidden=\"true\"></i>\n            <i *ngIf=\"!filterText\"class=\"fa fa-search\" aria-hidden=\"true\"></i>\n            </button>\n  </span>\n  <input #filterInput type=\"text\" class=\"form-control\" placeholder=\"Catalog search...\"\n  [(ngModel)]=\"filterText\"/>\n</div>\n\n<simple-tree\n  [tree]=\"this.filterService.filterTree(tree, filterText)\"\n  [showTop]=\"false\"\n  [leafIcon]=\"leafIcon\"\n  [collapsedIcon]=\"collapsedIcon\"\n  [expandedIcon]=\"expandedIcon\"\n  (nodeSelected)=\"nodeSelected($event)\">\n</simple-tree>\n", styles: ["\n.node-name{\n  font-size:1em;\n}\n"],
            }]
    }], function () { return [{ type: i1.TreeFilterService }, { type: i1.MetadataService }]; }, { catalog: [{
            type: core.Input
        }], showPlaceholders: [{
            type: core.Input
        }], defaultAction: [{
            type: core.Input
        }], layerActions: [{
            type: core.Input
        }], layerSelected: [{
            type: core.Output
        }], collapsedIcon: [{
            type: core.Input
        }], expandedIcon: [{
            type: core.Input
        }], leafIcon: [{
            type: core.Input
        }] }); })();

});

var catalog_component$1 = unwrapExports(catalog_component);
var catalog_component_1 = catalog_component.CatalogComponent;

var dateSelection_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateSelectionComponent = void 0;


var i0 = core;
var i1 = mapWald;




function DateSelectionComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵelementStart(2, "div", 5);
    i0.ɵɵelementStart(3, "input", 6, 7);
    i0.ɵɵlistener("ngModelChange", function DateSelectionComponent_div_1_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r4); var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.dateStruct = $event; })("ngModelChange", function DateSelectionComponent_div_1_Template_input_ngModelChange_3_listener() { i0.ɵɵrestoreView(_r4); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.dateStructChanged(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 8);
    i0.ɵɵlistener("click", function DateSelectionComponent_div_1_Template_div_click_5_listener() { i0.ɵɵrestoreView(_r4); var _r2 = i0.ɵɵreference(4); return _r2.toggle(); });
    i0.ɵɵelement(6, "i", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r0.dateStruct)("maxDate", ctx_r0.maxDateStruct)("minDate", ctx_r0.minDateStruct);
} }
function DateSelectionComponent_div_2_date_element_1_Template(rf, ctx) { if (rf & 1) {
    var _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "date-element", 12);
    i0.ɵɵlistener("changed", function DateSelectionComponent_div_2_date_element_1_Template_date_element_changed_0_listener() { i0.ɵɵrestoreView(_r11); var ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.dateStructChanged(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r7.dateStruct)("property", "day")("label", "Day")("step", ctx_r7.stepDays);
} }
function DateSelectionComponent_div_2_date_element_2_Template(rf, ctx) { if (rf & 1) {
    var _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "date-element", 13);
    i0.ɵɵlistener("changed", function DateSelectionComponent_div_2_date_element_2_Template_date_element_changed_0_listener() { i0.ɵɵrestoreView(_r13); var ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.dateStructChanged(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r8.dateStruct)("property", "month")("label", "Month");
} }
function DateSelectionComponent_div_2_date_element_3_Template(rf, ctx) { if (rf & 1) {
    var _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "date-element", 13);
    i0.ɵɵlistener("changed", function DateSelectionComponent_div_2_date_element_3_Template_date_element_changed_0_listener() { i0.ɵɵrestoreView(_r15); var ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.dateStructChanged(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r9.dateStruct)("property", "year")("label", "Year");
} }
function DateSelectionComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, DateSelectionComponent_div_2_date_element_1_Template, 1, 4, "date-element", 10);
    i0.ɵɵtemplate(2, DateSelectionComponent_div_2_date_element_2_Template, 1, 3, "date-element", 11);
    i0.ɵɵtemplate(3, DateSelectionComponent_div_2_date_element_3_Template, 1, 3, "date-element", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.need.day);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.need.month);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.need.year);
} }
var MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;
var DateSelectionComponent = /** @class */ (function () {
    function DateSelectionComponent(timeUtils) {
        this.timeUtils = timeUtils;
        this.dateChange = new core.EventEmitter();
        this.style = 'arrows';
        this.stepDays = 1;
        this.referenceDate = null;
        this.need = {
            day: true,
            month: true,
            year: true
        };
        this.atMax = false;
        this.atMin = false;
    }
    DateSelectionComponent.prototype.ngAfterViewInit = function () {
    };
    DateSelectionComponent.prototype.ngOnChanges = function (changes) {
        if (changes.minDate) {
            this.minDateStruct = this.timeUtils.convertDate(this.minDate);
        }
        if (changes.maxDate) {
            this.maxDateStruct = this.timeUtils.convertDate(this.maxDate);
        }
        if (changes.date) {
            this.dateStruct = this.timeUtils.convertDate(this.date);
        }
        if (changes.timestep) {
            this.assessDateComponents();
        }
        this.checkLimits();
    };
    DateSelectionComponent.prototype.dateStructChanged = function () {
        this.date = new Date(Date.UTC(this.dateStruct.year, this.dateStruct.month - 1, this.dateStruct.day));
        // this.date.setUTCFullYear(this.dateStruct.year)
        // this.date.setUTCMonth(this.dateStruct.month-1)
        // this.date.setUTCDate(this.dateStruct.day);
        this.checkReference();
        this.dateChange.emit(this.date);
    };
    DateSelectionComponent.prototype.assessDateComponents = function () {
        this.need.day = this.need.month = this.need.year = true;
        if (this.timestep === 'daily') {
            return;
        }
        this.need.day = false;
        if (this.timestep === 'annual') {
            this.need.month = false;
        }
    };
    DateSelectionComponent.prototype.move = function (n) {
        this.date = new Date(this.date && this.date.getTime());
        this.date.setDate(this.date.getDate() + n);
        this.onDateChanged();
        this.dateChange.emit(this.date);
    };
    DateSelectionComponent.prototype.onDateChanged = function () {
        this.checkLimits();
    };
    DateSelectionComponent.prototype.checkLimits = function () {
        this.atMax = this.timeUtils.datesEqual(this.dateStruct, this.maxDateStruct);
        this.atMin = this.timeUtils.datesEqual(this.dateStruct, this.minDateStruct);
    };
    // TODO not enforcing limits etc...
    DateSelectionComponent.prototype.checkReference = function () {
        if (!this.referenceDate) {
            return;
        }
        var refComponents = mapWald.InterpolationService.interpolate(this.referenceDate, {
            year: this.date.getFullYear(),
            month: this.date.getMonth() + 1,
            date: this.date.getDate()
        }).split('-').map(function (s) { return +s; });
        var currentRef = new Date(Date.UTC(refComponents[0], refComponents[1] - 1, refComponents[2]));
        console.log('currentRef', currentRef);
        console.log('currentDate', this.date);
        var timeSpan = MILLISECONDS_PER_DAY * this.stepDays;
        var days = (this.date.getTime() - currentRef.getTime()) / timeSpan;
        this.date = new Date(currentRef.getTime() + Math.round(days) * timeSpan);
        this.dateStruct = this.timeUtils.convertDate(this.date);
    };
    DateSelectionComponent.ɵfac = function DateSelectionComponent_Factory(t) { return new (t || DateSelectionComponent)(i0.ɵɵdirectiveInject(i1.TimeUtilsService)); };
    DateSelectionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DateSelectionComponent, selectors: [["date-selection"]], inputs: { date: "date", timestep: "timestep", minDate: "minDate", maxDate: "maxDate", style: "style", stepDays: "stepDays", referenceDate: "referenceDate" }, outputs: { dateChange: "dateChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 3, vars: 2, consts: [[1, "date-control", "container-fluid"], ["class", "row no-gutters", 4, "ngIf"], [4, "ngIf"], [1, "row", "no-gutters"], [1, "col-8", "form-group-inline"], [1, "input-group", "input-group-sm"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", 1, "form-control", "form-control-sm", 3, "ngModel", "maxDate", "minDate", "ngModelChange"], ["d", "ngbDatepicker"], [1, "input-group-addon", 3, "click"], [1, "fa", "fa-calendar"], [3, "src", "property", "label", "step", "changed", 4, "ngIf"], [3, "src", "property", "label", "changed", 4, "ngIf"], [3, "src", "property", "label", "step", "changed"], [3, "src", "property", "label", "changed"]], template: function DateSelectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, DateSelectionComponent_div_1_Template, 7, 3, "div", 1);
            i0.ɵɵtemplate(2, DateSelectionComponent_div_2_Template, 4, 3, "div", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.style !== "arrows");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.style === "arrows");
        } }, directives: [common.NgIf, ngBootstrap.NgbInputDatepicker, forms.DefaultValueAccessor, forms.NgControlStatus, forms.NgModel, dateElement_component.DateElementComponent], encapsulation: 2 });
    return DateSelectionComponent;
}());
exports.DateSelectionComponent = DateSelectionComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateSelectionComponent, [{
        type: core.Component,
        args: [{
                selector: 'date-selection',
                template: "<div class=\"date-control container-fluid\">\n  <div *ngIf=\"style!=='arrows'\" class=\"row no-gutters\">\n    <div class=\"col-8 form-group-inline\">\n        <div class=\"input-group input-group-sm\">\n          <input class=\"form-control form-control-sm\" placeholder=\"yyyy-mm-dd\"\n                 name=\"dp\" [(ngModel)]=\"dateStruct\" (ngModelChange)=\"dateStructChanged()\"\n                 ngbDatepicker #d=\"ngbDatepicker\"\n                 [maxDate]=\"maxDateStruct\" [minDate]=\"minDateStruct\">\n          <div class=\"input-group-addon\" (click)=\"d.toggle()\" >\n            <i class=\"fa fa-calendar\"></i>\n          </div>\n        </div>\n      </div>\n\n    <!--\n      <div class=\"col-2\" >\n        <button class=\"btn btn-secondary btn-sm\" [disabled]=\"atMax\"\n                (click)=\"move(1)\"><i class=\"fa fa-chevron-right\"></i></button>\n      </div>\n    -->\n  </div>\n\n  <div *ngIf=\"style==='arrows'\">\n    <date-element *ngIf=\"need.day\"   [src]=\"dateStruct\" [property]=\"'day'\" [label]=\"'Day'\"\n                  [step]=\"stepDays\"\n                  (changed)=\"dateStructChanged()\"></date-element>\n    <date-element *ngIf=\"need.month\" [src]=\"dateStruct\" [property]=\"'month'\" [label]=\"'Month'\"\n                  (changed)=\"dateStructChanged()\"></date-element>\n    <date-element *ngIf=\"need.year\"  [src]=\"dateStruct\" [property]=\"'year'\" [label]=\"'Year'\"\n                  (changed)=\"dateStructChanged()\"></date-element>\n  </div>\n</div>\n",
                styles: []
            }]
    }], function () { return [{ type: i1.TimeUtilsService }]; }, { date: [{
            type: core.Input
        }], dateChange: [{
            type: core.Output
        }], timestep: [{
            type: core.Input
        }], minDate: [{
            type: core.Input
        }], maxDate: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], stepDays: [{
            type: core.Input
        }], referenceDate: [{
            type: core.Input
        }] }); })();

});

var dateSelection_component$1 = unwrapExports(dateSelection_component);
var dateSelection_component_1 = dateSelection_component.DateSelectionComponent;

var layerProperties_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerPropertiesComponent = void 0;



var i0 = core;
var i1 = mapWald;




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
        this.propertyChanged = new core.EventEmitter();
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
        } }, directives: [common.NgIf, ngBootstrap.NgbTooltip, forms.SelectControlValueAccessor, forms.NgControlStatus, forms.NgModel, common.NgForOf, forms.NgSelectOption, forms.ɵangular_packages_forms_forms_x, dateSelection_component.DateSelectionComponent], encapsulation: 2 });
    return LayerPropertiesComponent;
}());
exports.LayerPropertiesComponent = LayerPropertiesComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LayerPropertiesComponent, [{
        type: core.Component,
        args: [{
                selector: 'layer-properties',
                template: "<div class=\"container-fluid\">\n  <p><strong>{{layer?.title}}</strong>\n    <span *ngIf=\"layer.description()\"\n    [ngbTooltip]=\"layer.description()\"\n    [placement]=\"tooltipPlacement\"\n    class=\"layer-info-target\"\n    container=\"body\">\n  &nbsp;<i class=\"fa fa-info-circle\"></i>\n  </span>\n  &nbsp;<span *ngIf=\"layer.interpolatedDownloadURL\">\n    <small><a target=\"_blank\"\n              [href]=\"layer.interpolatedDownloadURL\"\n              [ngbTooltip]=\"'Download data'\"\n              container=\"body\">\n      <i class=\"fa fa-download\"></i>\n    </a></small>\n  </span>\n  </p>\n\n  <div *ngIf=\"layer?.layer.publications.length>1\">\n    <span *ngIf=\"layer.layer.publications[0].timestep\">Timestep </span>\n    <span *ngIf=\"!layer.layer.publications[0].timestep\">{{ layer.layer.options.publicationLabel || 'Variable' }} </span>\n    <select [(ngModel)]=\"layer.options.publication\" (ngModelChange)=\"publicationSelected($event)\">\n      <option *ngFor=\"let p of layer.layer.publications; let i=index\" [ngValue]=\"i\">{{p.label || p.timestep}}</option>\n    </select>\n  </div>\n  <div *ngIf=\"layer?.layer.publications.length===1\">\n    {{publication?.label}}\n  </div>\n\n  <div *ngIf=\"publication&&publication.timestep\">\n    <hr/>\n    <date-selection [(date)]=\"layer.options.date\"\n      (dateChange)=\"update($event)\"\n      [timestep]=\"publication.timestep\"\n      [stepDays]=\"publication.timestepMultiplier||1\"\n      [referenceDate]=\"publication.timestepReference\"\n      [minDate]=\"publication.options.start\"\n      [maxDate]=\"publication.options.end\"></date-selection>\n  </div>\n\n  <div *ngIf=\"layer.layer.options.smallExtent\">\n    <hr/>\n    <button class=\"btn btn-sm btn-primary\" (click)=\"zoomToExtent()\">Zoom to Extent</button>\n  </div>\n\n<!--\n  <div *ngIf=\"layer.layer.options.vectors\">\n    <p>Lets filter those {{layer.layer.options.vectors}}s, eh?</p>\n  </div>\n-->\n\n  <div *ngIf=\"availableTags\">\n    <div *ngFor=\"let tag of getKeys(availableTags)\">\n      {{tag}}\n      <select [(ngModel)]=\"tags[tag]\" (ngModelChange)=\"tagChanged(tag)\">\n        <option *ngFor=\"let val of availableTags[tag]\" [ngValue]=\"val.value\">{{val.label}}</option>\n      </select>\n    </div>\n  </div>\n\n  <div *ngIf=\"publication?.pointdata\">\n    Variable:\n    <select [(ngModel)]=\"selectedVariable\" (ngModelChange)=\"queryPointData()\">\n      <option *ngFor=\"let v of pointVariables\" [ngValue]=\"v.value\">{{v.label}}</option>\n    </select>\n  </div>\n  <!--\n  <div *ngIf=\"publication\">\n    <p>Start: {{publication.options.start}}</p>\n    <p>End: {{publication.options.end}}</p>\n    <p>{{publication|json}}</p>\n  </div>\n  <button (click)=\"update()\">Force update...</button>\n  -->\n</div>",
                styles: []
            }]
    }], function () { return [{ type: i1.PointSelectionService }]; }, { layer: [{
            type: core.Input
        }], map: [{
            type: core.Input
        }], propertyChanged: [{
            type: core.Output
        }], tooltipPlacement: [{
            type: core.Input
        }] }); })();

});

var layerProperties_component$1 = unwrapExports(layerProperties_component);
var layerProperties_component_1 = layerProperties_component.LayerPropertiesComponent;

var layerControl_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerControlComponent = void 0;



var i0 = core;
var i1 = mapWald;




function LayerControlComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵelementStart(2, "i", 5);
    i0.ɵɵlistener("click", function LayerControlComponent_div_1_Template_i_click_2_listener() { i0.ɵɵrestoreView(_r3); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.allLegends(false); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 6);
    i0.ɵɵlistener("click", function LayerControlComponent_div_1_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r3); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.allLegends(true); });
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
    var l_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("title", l_r6.title)("imageURL", l_r6.legendURL)("helpText", l_r6.description())("mapUnits", l_r6.flattenedSettings == null ? null : l_r6.flattenedSettings.units)("cbPalette", (l_r6.flattenedSettings == null ? null : l_r6.flattenedSettings.palette == null ? null : l_r6.flattenedSettings.palette.name) || (l_r6.flattenedSettings == null ? null : l_r6.flattenedSettings.palette))("cbCount", (l_r6.flattenedSettings == null ? null : l_r6.flattenedSettings.numcolorbands) || (l_r6.flattenedSettings == null ? null : l_r6.flattenedSettings.palette == null ? null : l_r6.flattenedSettings.palette.count))("cbReverse", l_r6.flattenedSettings == null ? null : l_r6.flattenedSettings.palette == null ? null : l_r6.flattenedSettings.palette.reverse)("cbRange", l_r6.flattenedSettings == null ? null : l_r6.flattenedSettings.colorscalerange);
} }
function LayerControlComponent_div_2_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, LayerControlComponent_div_2_div_1_div_2_div_1_Template, 2, 8, "div", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var l_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (l_r6.flattenedSettings == null ? null : l_r6.flattenedSettings.palette) || l_r6.legendURL);
} }
function LayerControlComponent_div_2_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "layer-properties", 20);
    i0.ɵɵlistener("propertyChanged", function LayerControlComponent_div_2_div_1_div_3_Template_layer_properties_propertyChanged_1_listener($event) { i0.ɵɵrestoreView(_r29); var ctx_r28 = i0.ɵɵnextContext(3); return ctx_r28.layerPropertyChanged($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var l_r6 = i0.ɵɵnextContext().$implicit;
    var ctx_r9 = i0.ɵɵnextContext(2);
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
    var _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 22);
    i0.ɵɵlistener("click", function LayerControlComponent_div_2_div_1_i_8_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r33); var l_r6 = i0.ɵɵnextContext().$implicit; var ctx_r31 = i0.ɵɵnextContext(2); return ctx_r31.layerLegend(l_r6, false); });
    i0.ɵɵelementEnd();
} }
function LayerControlComponent_div_2_div_1_br_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "br");
} }
function LayerControlComponent_div_2_div_1_i_10_Template(rf, ctx) { if (rf & 1) {
    var _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 23);
    i0.ɵɵlistener("click", function LayerControlComponent_div_2_div_1_i_10_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r36); var l_r6 = i0.ɵɵnextContext().$implicit; var ctx_r34 = i0.ɵɵnextContext(2); return ctx_r34.layerLegend(l_r6, true); });
    i0.ɵɵelementEnd();
} }
function LayerControlComponent_div_2_div_1_br_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "br");
} }
function LayerControlComponent_div_2_div_1_i_12_Template(rf, ctx) { if (rf & 1) {
    var _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 24);
    i0.ɵɵlistener("click", function LayerControlComponent_div_2_div_1_i_12_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r39); var i_r7 = i0.ɵɵnextContext().index; var ctx_r37 = i0.ɵɵnextContext(2); return ctx_r37.moveToTop(i_r7); });
    i0.ɵɵelementEnd();
} }
function LayerControlComponent_div_2_div_1_br_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "br");
} }
function LayerControlComponent_div_2_div_1_i_14_Template(rf, ctx) { if (rf & 1) {
    var _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 25);
    i0.ɵɵlistener("click", function LayerControlComponent_div_2_div_1_i_14_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r42); var i_r7 = i0.ɵɵnextContext().index; var ctx_r40 = i0.ɵɵnextContext(2); return ctx_r40.moveUp(i_r7); });
    i0.ɵɵelementEnd();
} }
function LayerControlComponent_div_2_div_1_br_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "br");
} }
function LayerControlComponent_div_2_div_1_i_16_Template(rf, ctx) { if (rf & 1) {
    var _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 26);
    i0.ɵɵlistener("click", function LayerControlComponent_div_2_div_1_i_16_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r45); var i_r7 = i0.ɵɵnextContext().index; var ctx_r43 = i0.ɵɵnextContext(2); return ctx_r43.moveDown(i_r7); });
    i0.ɵɵelementEnd();
} }
function LayerControlComponent_div_2_div_1_br_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "br");
} }
function LayerControlComponent_div_2_div_1_i_18_Template(rf, ctx) { if (rf & 1) {
    var _r48 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 27);
    i0.ɵɵlistener("click", function LayerControlComponent_div_2_div_1_i_18_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r48); var i_r7 = i0.ɵɵnextContext().index; var ctx_r46 = i0.ɵɵnextContext(2); return ctx_r46.moveToBottom(i_r7); });
    i0.ɵɵelementEnd();
} }
function LayerControlComponent_div_2_div_1_br_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "br");
} }
function LayerControlComponent_div_2_div_1_i_20_Template(rf, ctx) { if (rf & 1) {
    var _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 28);
    i0.ɵɵlistener("click", function LayerControlComponent_div_2_div_1_i_20_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r51); var i_r7 = i0.ɵɵnextContext().index; var ctx_r49 = i0.ɵɵnextContext(2); return ctx_r49.removeLayer(i_r7); });
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
    var l_r6 = ctx.$implicit;
    var ctx_r5 = i0.ɵɵnextContext(2);
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
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.layers);
} }
var LayerControlComponent = /** @class */ (function () {
    function LayerControlComponent(metadata) {
        this.metadata = metadata;
        this.allowRemove = true;
        this.showLegends = true;
        this.allowReorder = true;
        this.layersChange = new core.EventEmitter();
        this.foo = 'bar';
    }
    LayerControlComponent.prototype.ngAfterViewInit = function () {
    };
    LayerControlComponent.prototype.ngOnChanges = function (changes) {
        if (!changes.layers || !this.layers) {
            return;
        }
        this.applyViewMode();
        this.fetchMetadata();
    };
    LayerControlComponent.prototype.applyViewMode = function () {
        var _this = this;
        if (this.uniformViewMode === undefined) {
            return;
        }
        this.layers.forEach(function (l) { return l.options.legend = _this.uniformViewMode; });
    };
    LayerControlComponent.prototype.allLegends = function (showLegend) {
        this.uniformViewMode = showLegend;
        this.layers.forEach(function (l) { return l.options.legend = showLegend; });
    };
    LayerControlComponent.prototype.layerLegend = function (layer, showLegend) {
        this.uniformViewMode = undefined;
        layer.options.legend = showLegend;
    };
    LayerControlComponent.prototype.moveToTop = function (idx) {
        this.layers = [this.layers[idx]].concat(this.layers.slice(0, idx)).concat(this.layers.slice(idx + 1));
        this._changed();
    };
    LayerControlComponent.prototype.moveUp = function (idx) {
        if (idx === 0) {
            return;
        }
        var layers = this.layers;
        this.layers = layers.slice(0, idx - 1).concat([layers[idx], layers[idx - 1]]).concat(layers.slice(idx + 1));
        this._changed();
    };
    LayerControlComponent.prototype.moveDown = function (idx) {
        if (idx === (this.layers.length - 1)) {
            return;
        }
        var layers = this.layers;
        this.layers = layers.slice(0, idx).concat([layers[idx + 1], layers[idx]]).concat(layers.slice(idx + 2));
        this._changed();
    };
    LayerControlComponent.prototype.moveToBottom = function (idx) {
        this.layers = this.layers.slice(0, idx).concat(this.layers.slice(idx + 1)).concat([this.layers[idx]]);
        this._changed();
    };
    LayerControlComponent.prototype.removeLayer = function (idx) {
        var layers = this.layers.slice();
        layers.splice(idx, 1);
        this.layers = layers;
        this._changed();
    };
    LayerControlComponent.prototype.layerPropertyChanged = function (l) {
        this.layers = this.layers.slice();
        this._changed();
    };
    LayerControlComponent.prototype._changed = function () {
        this.fetchMetadata();
        this.layersChange.emit(this.layers);
    };
    LayerControlComponent.prototype.fetchMetadata = function () {
        var _this = this;
        this.layers.forEach(function (ml) {
            _this.metadata.populateMetadata(ml);
        });
    };
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
        } }, directives: [common.NgIf, common.NgForOf, mapLegend_component.MapLegendComponent, layerProperties_component.LayerPropertiesComponent, ngBootstrap.NgbTooltip], styles: [".layers-control[_ngcontent-%COMP%]{\n  width:200px;\n}\n\n\n.layers-control-header[_ngcontent-%COMP%], .layer-control[_ngcontent-%COMP%]{\n  border-bottom: 1.5px solid #aaa;\n}"] });
    return LayerControlComponent;
}());
exports.LayerControlComponent = LayerControlComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LayerControlComponent, [{
        type: core.Component,
        args: [{
                selector: 'layer-control',
                template: "<div class=\"layers-control\">\n  <div *ngIf=\"showLegends\" class=\"layers-control-header\"> <!-- header -->\n    <div class=\"float-right\">\n      <!-- TODO Attach handlers and tooltips to each icon -->\n      <i class=\"fa fa-lg fa-cog discrete-icon\" (click)=\"allLegends(false)\"></i>\n      <i class=\"fa fa-lg fa-th-list discrete-icon\" (click)=\"allLegends(true)\"></i>\n    </div>\n    <br/>\n  </div>\n\n  <div *ngIf=\"layers\">\n    <div *ngFor=\"let l of layers; let i = index\"\n         class=\"layer-control d-flex justify-content-between\">\n      <div class=\"p-2\" style=\"width:100%\">\n        <div *ngIf=\"showLegends&&l.options.legend\">\n          <div *ngIf=\"l.flattenedSettings?.palette || l.legendURL\">\n            <map-legend [title]=\"l.title\"\n              [imageURL]=\"l.legendURL\"\n              [helpText]=\"l.description()\"\n              [mapUnits]=\"l.flattenedSettings?.units\"\n              [cbPalette]=\"l.flattenedSettings?.palette?.name||l.flattenedSettings?.palette\"\n              [cbCount]=\"l.flattenedSettings?.numcolorbands||l.flattenedSettings?.palette?.count\"\n              [cbReverse]=\"l.flattenedSettings?.palette?.reverse\"\n              [cbRange]=\"l.flattenedSettings?.colorscalerange\">\n            </map-legend>\n          </div>\n        </div>\n\n        <div *ngIf=\"!showLegends||!l.options.legend\">\n          <layer-properties [layer]=\"l\"\n                            [map]=\"map\"\n                            (propertyChanged)=\"layerPropertyChanged($event)\">\n          </layer-properties>\n        </div>\n      </div>\n      <div class=\"p-2\">\n          <div>\n            <!-- TODO Attach handlers and tooltips to each icon -->\n            <i *ngIf=\"allowReorder\" class=\"fa fa-bars discrete-icon\"></i><br *ngIf=\"allowReorder\"/>\n            <i *ngIf=\"showLegends\" class=\"fa fa-cog discrete-icon\"\n               ngbTooltip=\"Show layer controls\" placement=\"right\" data-container=\"body\"\n               (click)=\"layerLegend(l,false)\"></i><br *ngIf=\"showLegends\"/>\n            <i *ngIf=\"showLegends\" class=\"fa fa-th-list discrete-icon\"\n               ngbTooltip=\"Show layer data\" placement=\"right\" data-container=\"body\"\n               (click)=\"layerLegend(l,true)\"></i><br *ngIf=\"showLegends\"/>\n            <i *ngIf=\"allowReorder\" class=\"fa fa-angle-double-up discrete-icon\"\n               ngbTooltip=\"Move to top\" placement=\"right\" data-container=\"body\"\n              (click)=\"moveToTop(i)\"></i><br *ngIf=\"allowReorder\"/>\n            <i *ngIf=\"allowReorder\" class=\"fa fa-angle-up discrete-icon\"\n               ngbTooltip=\"Move up\" placement=\"right\" data-container=\"body\"\n              (click)=\"moveUp(i)\"></i><br *ngIf=\"allowReorder\"/>\n            <i *ngIf=\"allowReorder\" class=\"fa fa-angle-down discrete-icon\"\n               ngbTooltip=\"Move down\" placement=\"right\" data-container=\"body\"\n              (click)=\"moveDown(i)\"></i><br *ngIf=\"allowReorder\"/>\n            <i *ngIf=\"allowReorder\" class=\"fa fa-angle-double-down discrete-icon\"\n               ngbTooltip=\"Move to bottom\" placement=\"right\" data-container=\"body\"\n              (click)=\"moveToBottom(i)\"></i><br *ngIf=\"allowReorder\"/>\n            <i *ngIf=\"allowRemove\" class=\"fa fa-times discrete-icon\"\n               ngbTooltip=\"Remove layer\" placement=\"right\" data-container=\"body\"\n              data-toggle=\"tooltip\" title=\"Remove layer\"\n              (click)=\"removeLayer(i)\"></i>\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n\n<!-- Should this control be outside the map? eg to the left? -->\n", styles: [".layers-control{\n  width:200px;\n}\n\n\n.layers-control-header, .layer-control{\n  border-bottom: 1.5px solid #aaa;\n}"]
            }]
    }], function () { return [{ type: i1.MetadataService }]; }, { layers: [{
            type: core.Input
        }], map: [{
            type: core.Input
        }], allowRemove: [{
            type: core.Input
        }], showLegends: [{
            type: core.Input
        }], allowReorder: [{
            type: core.Input
        }], layersChange: [{
            type: core.Output
        }] }); })();

});

var layerControl_component$1 = unwrapExports(layerControl_component);
var layerControl_component_1 = layerControl_component.LayerControlComponent;

var themeNavbar_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeNavbarComponent = void 0;


var i0 = core;


function ThemeNavbarComponent_li_1_a_4_Template(rf, ctx) { if (rf & 1) {
    var _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 7);
    i0.ɵɵlistener("click", function ThemeNavbarComponent_li_1_a_4_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r5); var layer_r3 = ctx.$implicit; var ctx_r4 = i0.ɵɵnextContext(2); return ctx_r4.layerClick($event, layer_r3, "replace"); });
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 8);
    i0.ɵɵelementStart(5, "i", 9);
    i0.ɵɵlistener("click", function ThemeNavbarComponent_li_1_a_4_Template_i_click_5_listener($event) { i0.ɵɵrestoreView(_r5); var layer_r3 = ctx.$implicit; var ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.layerClick($event, layer_r3, "replace"); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "br");
    i0.ɵɵelementStart(7, "i", 10);
    i0.ɵɵlistener("click", function ThemeNavbarComponent_li_1_a_4_Template_i_click_7_listener($event) { i0.ɵɵrestoreView(_r5); var layer_r3 = ctx.$implicit; var ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.layerClick($event, layer_r3, "add"); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var layer_r3 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(layer_r3.name);
} }
function ThemeNavbarComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 2);
    i0.ɵɵelementStart(1, "a", 3);
    i0.ɵɵelement(2, "i", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 5);
    i0.ɵɵtemplate(4, ThemeNavbarComponent_li_1_a_4_Template, 8, 1, "a", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var theme_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", theme_r1.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", theme_r1.layers);
} }
var ThemeNavbarComponent = /** @class */ (function () {
    function ThemeNavbarComponent() {
        this.layerSelected = new core.EventEmitter();
    }
    ThemeNavbarComponent.prototype.ngAfterViewInit = function () {
    };
    ThemeNavbarComponent.prototype.layerClick = function (event, layer, action) {
        this.stop(event);
        var selection = {
            layer: layer,
            action: action
        };
        this.layerSelected.emit(selection);
    };
    ThemeNavbarComponent.prototype.stop = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    ThemeNavbarComponent.ɵfac = function ThemeNavbarComponent_Factory(t) { return new (t || ThemeNavbarComponent)(); };
    ThemeNavbarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ThemeNavbarComponent, selectors: [["theme-navbar"]], inputs: { catalog: "catalog", includeSearch: "includeSearch" }, outputs: { layerSelected: "layerSelected" }, decls: 2, vars: 1, consts: [[1, "navbar-nav"], ["class", "nav-item", "ngbDropdown", "", 4, "ngFor", "ngForOf"], ["ngbDropdown", "", 1, "nav-item"], ["ngbDropdownToggle", "", "href", "#", 1, "nav-link"], [1, "fa", 3, "ngClass"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["class", "dropdown-item", "href", "#", 3, "click", 4, "ngFor", "ngForOf"], ["href", "#", 1, "dropdown-item", 3, "click"], [1, "float-right", "layer-select-icons"], ["placement", "right", "ngbTooltip", "Map this layer. (Replace any existing layers)", 1, "fa", "fa-map", "layer-select-icon", "discrete-icon", 3, "click"], ["placement", "right", "ngbTooltip", "Add this layer to the map.", 1, "fa", "fa-plus", "layer-select-icon", "discrete-icon", 3, "click"]], template: function ThemeNavbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "ul", 0);
            i0.ɵɵtemplate(1, ThemeNavbarComponent_li_1_Template, 5, 2, "li", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.catalog == null ? null : ctx.catalog.themes);
        } }, directives: [common.NgForOf, ngBootstrap.NgbDropdown, ngBootstrap.NgbDropdownToggle, common.NgClass, ngBootstrap.NgbDropdownMenu, ngBootstrap.NgbTooltip], styles: [".layer-select-icons[_ngcontent-%COMP%]{\n  font-size:0.75em;\n  margin-right:-20px;\n}\n\n\n  .tooltip-inner {\n  width: 400px;\n}\n\n.dropdown-item[_ngcontent-%COMP%]{\n  border-bottom: 1px solid #aaa;\n  height: 40px;\n}"] });
    return ThemeNavbarComponent;
}());
exports.ThemeNavbarComponent = ThemeNavbarComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ThemeNavbarComponent, [{
        type: core.Component,
        args: [{
                selector: 'theme-navbar',
                template: "<ul class=\"navbar-nav\">\n  <li class=\"nav-item\" ngbDropdown *ngFor=\"let theme of catalog?.themes\">\n    <a class=\"nav-link\" ngbDropdownToggle href=\"#\"><i class=\"fa\" [ngClass]=\"theme.icon\"></i></a>\n    <div ngbDropdownMenu class=\"dropdown-menu\">\n      <a class=\"dropdown-item\" href=\"#\" (click)=\"layerClick($event,layer,'replace')\" *ngFor=\"let layer of theme.layers\">\n        <div>\n          <span>{{layer.name}}</span>\n          <span class=\"float-right layer-select-icons\">\n            <i class=\"fa fa-map layer-select-icon discrete-icon\"\n               (click)=\"layerClick($event,layer,'replace')\"\n               placement=\"right\"\n               ngbTooltip=\"Map this layer. (Replace any existing layers)\"></i>\n            <br/>\n            <i class=\"fa fa-plus layer-select-icon discrete-icon\"\n               (click)=\"layerClick($event,layer,'add')\"\n               placement=\"right\"\n               ngbTooltip=\"Add this layer to the map.\"></i>\n          </span>\n        </div>\n      </a>\n    </div>\n  </li>\n</ul>\n\n<!--\n\n[ng-reflect-ngb-tooltip].yellow + .tooltip {\n    background-color: yellow;\n}\n-->", styles: ["\n.layer-select-icons{\n  font-size:0.75em;\n  margin-right:-20px;\n}\n\n/* Annoying... using /deep/ to access the child component\n * but /deep/ (and synonyms) are deprecated. Not clear what\n * we should be doing\n */\n/deep/ .tooltip-inner {\n  width: 400px;\n}\n\n.dropdown-item{\n  border-bottom: 1px solid #aaa;\n  height: 40px;\n}\n"]
            }]
    }], function () { return []; }, { catalog: [{
            type: core.Input
        }], includeSearch: [{
            type: core.Input
        }], layerSelected: [{
            type: core.Output
        }] }); })();

});

var themeNavbar_component$1 = unwrapExports(themeNavbar_component);
var themeNavbar_component_1 = themeNavbar_component.ThemeNavbarComponent;

var geocoding_service = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeocodingService = void 0;



var i0 = core;
var i1 = core$1;
var GeocodingService = /** @class */ (function () {
    function GeocodingService(_api) {
        this._api = _api;
    }
    GeocodingService.prototype.geocode = function (address, bnds) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this._api.load().then(function () {
                var SUCCESS_STATUSES = [
                    google.maps.GeocoderStatus.OK,
                    google.maps.GeocoderStatus.ZERO_RESULTS
                ];
                var service = new google.maps.Geocoder();
                service.geocode({
                    address: address,
                    componentRestrictions: {
                        country: 'AU'
                    },
                    region: 'AU'
                }, function (results, status) {
                    if (SUCCESS_STATUSES.indexOf(status) < 0) {
                        reject();
                    }
                    else {
                        resolve(results.filter(function (r) {
                            return r.formatted_address !== 'Australia';
                        }));
                    }
                });
            });
        });
        return rxjs.from(promise);
    };
    GeocodingService.ɵfac = function GeocodingService_Factory(t) { return new (t || GeocodingService)(i0.ɵɵinject(i1.MapsAPILoader)); };
    GeocodingService.ɵprov = i0.ɵɵdefineInjectable({ token: GeocodingService, factory: GeocodingService.ɵfac });
    return GeocodingService;
}());
exports.GeocodingService = GeocodingService;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GeocodingService, [{
        type: core.Injectable
    }], function () { return [{ type: i1.MapsAPILoader }]; }, null); })();

});

var geocoding_service$1 = unwrapExports(geocoding_service);
var geocoding_service_1 = geocoding_service.GeocodingService;

var esm5 = createCommonjsModule(function (module, exports) {
"use strict";
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapWaldBootstrapModule = void 0;




































var i0 = core;
__exportStar(wmsLayer_component, exports);
__exportStar(mapLegend_component, exports);
__exportStar(dateShifter_component, exports);
__exportStar(oneTimeSplash_component, exports);
__exportStar(dateElement_component, exports);
__exportStar(shareView_component, exports);
__exportStar(locationSearch_component, exports);
__exportStar(zoomLayer_component, exports);
__exportStar(zoomFull_component, exports);
__exportStar(zoomOut_component, exports);
__exportStar(zoomIn_component, exports);
__exportStar(cycleBaseMap_component, exports);
__exportStar(cycleOpacity_component, exports);
__exportStar(buttonBar_component, exports);
__exportStar(timeseriesChart_component, exports);
__exportStar(featureTable_component, exports);
__exportStar(collapsibleMapControl_component, exports);
__exportStar(baseMapSelection_component, exports);
__exportStar(simpleTreeNode_component, exports);
__exportStar(simpleTree_component, exports);
__exportStar(catalog_component, exports);
__exportStar(dateSelection_component, exports);
__exportStar(layerProperties_component, exports);
__exportStar(layerControl_component, exports);
__exportStar(layeredMap_component, exports);
__exportStar(themeNavbar_component, exports);
__exportStar(mapControl_component, exports);
__exportStar(geocoding_service, exports);
var components = [
    //$componentList
    dateShifter_component.DateShifterComponent,
    oneTimeSplash_component.OneTimeSplashComponent,
    dateElement_component.DateElementComponent,
    shareView_component.ShareViewComponent,
    locationSearch_component.LocationSearchComponent,
    zoomLayer_component.ZoomLayerComponent,
    zoomFull_component.ZoomFullComponent,
    zoomOut_component.ZoomOutComponent,
    zoomIn_component.ZoomInComponent,
    cycleBaseMap_component.CycleBaseMapComponent,
    cycleOpacity_component.CycleOpacityComponent,
    buttonBar_component.ButtonBarComponent,
    timeseriesChart_component.TimeseriesChartComponent,
    featureTable_component.FeatureTableComponent,
    collapsibleMapControl_component.CollapsibleMapControlComponent,
    baseMapSelection_component.BaseMapSelectionComponent,
    simpleTreeNode_component.SimpleTreeNodeComponent,
    simpleTree_component.SimpleTreeComponent,
    catalog_component.CatalogComponent,
    dateSelection_component.DateSelectionComponent,
    layerProperties_component.LayerPropertiesComponent,
    layerControl_component.LayerControlComponent,
    layeredMap_component.LayeredMapComponent,
    themeNavbar_component.ThemeNavbarComponent,
    wmsLayer_component.WMSLayerComponent,
    mapLegend_component.MapLegendComponent,
    mapControl_component.MapControlComponent
];
var services = [
    //$serviceList
    geocoding_service.GeocodingService
];
var MapWaldBootstrapModule = /** @class */ (function () {
    function MapWaldBootstrapModule() {
    }
    MapWaldBootstrapModule.forRoot = function (moduleInitialisation) {
        return {
            ngModule: MapWaldBootstrapModule,
            providers: services
        };
    };
    MapWaldBootstrapModule.ɵmod = i0.ɵɵdefineNgModule({ type: MapWaldBootstrapModule });
    MapWaldBootstrapModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MapWaldBootstrapModule_Factory(t) { return new (t || MapWaldBootstrapModule)(); }, providers: services, imports: [[
                common.CommonModule,
                forms.FormsModule,
                core$1.AgmCoreModule,
                http.HttpClientModule,
                ngxPipes.NgPipesModule,
                ngBootstrap.NgbModule,
                mapWald.MapWaldCoreModule
            ]] });
    return MapWaldBootstrapModule;
}());
exports.MapWaldBootstrapModule = MapWaldBootstrapModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MapWaldBootstrapModule, { declarations: [
        //$componentList
        dateShifter_component.DateShifterComponent,
        oneTimeSplash_component.OneTimeSplashComponent,
        dateElement_component.DateElementComponent,
        shareView_component.ShareViewComponent,
        locationSearch_component.LocationSearchComponent,
        zoomLayer_component.ZoomLayerComponent,
        zoomFull_component.ZoomFullComponent,
        zoomOut_component.ZoomOutComponent,
        zoomIn_component.ZoomInComponent,
        cycleBaseMap_component.CycleBaseMapComponent,
        cycleOpacity_component.CycleOpacityComponent,
        buttonBar_component.ButtonBarComponent,
        timeseriesChart_component.TimeseriesChartComponent,
        featureTable_component.FeatureTableComponent,
        collapsibleMapControl_component.CollapsibleMapControlComponent,
        baseMapSelection_component.BaseMapSelectionComponent,
        simpleTreeNode_component.SimpleTreeNodeComponent,
        simpleTree_component.SimpleTreeComponent,
        catalog_component.CatalogComponent,
        dateSelection_component.DateSelectionComponent,
        layerProperties_component.LayerPropertiesComponent,
        layerControl_component.LayerControlComponent,
        layeredMap_component.LayeredMapComponent,
        themeNavbar_component.ThemeNavbarComponent,
        wmsLayer_component.WMSLayerComponent,
        mapLegend_component.MapLegendComponent,
        mapControl_component.MapControlComponent], imports: [common.CommonModule,
        forms.FormsModule,
        core$1.AgmCoreModule,
        http.HttpClientModule,
        ngxPipes.NgPipesModule,
        ngBootstrap.NgbModule,
        mapWald.MapWaldCoreModule], exports: [
        //$componentList
        dateShifter_component.DateShifterComponent,
        oneTimeSplash_component.OneTimeSplashComponent,
        dateElement_component.DateElementComponent,
        shareView_component.ShareViewComponent,
        locationSearch_component.LocationSearchComponent,
        zoomLayer_component.ZoomLayerComponent,
        zoomFull_component.ZoomFullComponent,
        zoomOut_component.ZoomOutComponent,
        zoomIn_component.ZoomInComponent,
        cycleBaseMap_component.CycleBaseMapComponent,
        cycleOpacity_component.CycleOpacityComponent,
        buttonBar_component.ButtonBarComponent,
        timeseriesChart_component.TimeseriesChartComponent,
        featureTable_component.FeatureTableComponent,
        collapsibleMapControl_component.CollapsibleMapControlComponent,
        baseMapSelection_component.BaseMapSelectionComponent,
        simpleTreeNode_component.SimpleTreeNodeComponent,
        simpleTree_component.SimpleTreeComponent,
        catalog_component.CatalogComponent,
        dateSelection_component.DateSelectionComponent,
        layerProperties_component.LayerPropertiesComponent,
        layerControl_component.LayerControlComponent,
        layeredMap_component.LayeredMapComponent,
        themeNavbar_component.ThemeNavbarComponent,
        wmsLayer_component.WMSLayerComponent,
        mapLegend_component.MapLegendComponent,
        mapControl_component.MapControlComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MapWaldBootstrapModule, [{
        type: core.NgModule,
        args: [{
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    core$1.AgmCoreModule,
                    http.HttpClientModule,
                    ngxPipes.NgPipesModule,
                    ngBootstrap.NgbModule,
                    mapWald.MapWaldCoreModule
                ],
                declarations: components,
                exports: components,
                providers: services
            }]
    }], null, null); })();

});

var index = unwrapExports(esm5);
var esm5_1 = esm5.MapWaldBootstrapModule;

var mapWaldVisual = createCommonjsModule(function (module, exports) {
"use strict";
/**
 * Generated bundle index. Do not edit.
 */
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(esm5, exports);

});

var mapWaldVisual$1 = unwrapExports(mapWaldVisual);

export default mapWaldVisual$1;
//# sourceMappingURL=map-wald-visual.js.map
