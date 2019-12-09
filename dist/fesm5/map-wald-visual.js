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
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });



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
    WMSLayerComponent.ctorParameters = function () { return [
        { type: mapWald.WMSService },
        { type: core$1.GoogleMapsAPIWrapper }
    ]; };
    __decorate([
        core.Input(),
        __metadata("design:type", String)
    ], WMSLayerComponent.prototype, "url", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], WMSLayerComponent.prototype, "params", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Number)
    ], WMSLayerComponent.prototype, "opacity", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Number)
    ], WMSLayerComponent.prototype, "position", void 0);
    WMSLayerComponent = __decorate([
        core.Component({
            selector: 'wms-layer',
            template: ''
        }),
        __metadata("design:paramtypes", [mapWald.WMSService,
            core$1.GoogleMapsAPIWrapper])
    ], WMSLayerComponent);
    return WMSLayerComponent;
}());
exports.WMSLayerComponent = WMSLayerComponent;

});

var wmsLayer_component$1 = unwrapExports(wmsLayer_component);
var wmsLayer_component_1 = wmsLayer_component.WMSLayerComponent;

var mapLegend_component = createCommonjsModule(function (module, exports) {
"use strict";
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });


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
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapLegendComponent.prototype, "cbCount", {
        get: function () { return this._cbCount; },
        set: function (cbc) {
            this._cbCount = cbc;
            this.generatePalette();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapLegendComponent.prototype, "cbReverse", {
        get: function () { return this._cbReverse; },
        set: function (cbr) {
            this._cbReverse = cbr;
            this.generatePalette();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapLegendComponent.prototype, "cbRange", {
        get: function () { return this._cbRange; },
        set: function (cbr) {
            this._cbRange = cbr;
            this.generatePalette();
        },
        enumerable: true,
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
    MapLegendComponent.ctorParameters = function () { return [
        { type: mapWald.PaletteService }
    ]; };
    __decorate([
        core.Input(),
        __metadata("design:type", String)
    ], MapLegendComponent.prototype, "imageURL", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Array)
    ], MapLegendComponent.prototype, "colours", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Array)
    ], MapLegendComponent.prototype, "labels", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", String)
    ], MapLegendComponent.prototype, "title", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", String)
    ], MapLegendComponent.prototype, "mapUnits", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", String)
    ], MapLegendComponent.prototype, "helpText", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", String)
    ], MapLegendComponent.prototype, "tooltipPlacement", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", String)
    ], MapLegendComponent.prototype, "attribution", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", String)
    ], MapLegendComponent.prototype, "attributionLink", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], MapLegendComponent.prototype, "cbPalette", null);
    __decorate([
        core.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], MapLegendComponent.prototype, "cbCount", null);
    __decorate([
        core.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], MapLegendComponent.prototype, "cbReverse", null);
    __decorate([
        core.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], MapLegendComponent.prototype, "cbRange", null);
    MapLegendComponent = __decorate([
        core.Component({
            selector: 'map-legend',
            template: "<div class=\"map-legend panel panel-group\">\n<ng-template #tooltipContent>\n  <span [innerHtml]=helpText></span>\n</ng-template>\n<strong>{{title}} <span *ngIf=\"mapUnits\" [innerHTML]=\"'('+mapUnits+')'\"></span>\n        <span *ngIf=\"helpText\"\n              [ngbTooltip]=\"tooltipContent\"\n              [placement]=\"tooltipPlacement\"\n              container=\"body\">\n          <i class=\"fa fa-info-circle\"></i>\n        </span>\n</strong>\n\n  <div *ngIf=\"!imageURL\">\n    <div style=\"display:table;line-height:15px\">\n      <div style=\"display:table-row;padding:0;\"\n          *ngFor=\"let colour of colours; let i=index\">\n        <div class=\"legend-colour\">\n          <i class=\"legend-entry\" [ngStyle]=\"{background:colour}\"></i>\n        </div>\n        <div class=\"legend-label\">\n          <span [innerHTML]=\"generatedLabels[i]\"></span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"imageURL\">\n    <img [src]=\"imageURL\">\n  </div>\n  <p *ngIf=\"attributionLink\">Source: <a [href]=\"attributionLink\">{{attribution || 'details'}}</a></p>\n  <p *ngIf=\"attribution&&!attributionLink\">Source: {{attribution}}</p>\n</div>\n",
            styles: ["\n.map-legend{\n  display:block;\n  background: white;\n}\n\n.legend-colour{\n  display:table-cell;\n  padding:0px;\n}\n\n.legend-label{\n  display:table-cell;\n  padding:0px 4px 2px 2px;\n  font-size:10px;\n  vertical-align:middle;\n}\n\n.legend-entry {\n  float: left;\n  width: 15px !important;\n  height: 15px !important;\n}\n"]
        }),
        __metadata("design:paramtypes", [mapWald.PaletteService])
    ], MapLegendComponent);
    return MapLegendComponent;
}());
exports.MapLegendComponent = MapLegendComponent;

});

var mapLegend_component$1 = unwrapExports(mapLegend_component);
var mapLegend_component_1 = mapLegend_component.MapLegendComponent;

var mapControl_component = createCommonjsModule(function (module, exports) {
"use strict";
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });


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
    MapControlComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core$1.GoogleMapsAPIWrapper }
    ]; };
    __decorate([
        core.ViewChild('mapControl', { static: false }),
        __metadata("design:type", core.Component)
    ], MapControlComponent.prototype, "mapControl", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", String)
    ], MapControlComponent.prototype, "position", void 0);
    MapControlComponent = __decorate([
        core.Component({
            selector: 'map-control',
            template: "<div #mapControl class=\"map-control-content\">\n  <ng-content></ng-content>\n</div>\n",
            styles: [".map-control-content{\n  background: transparent;\n}\n"]
        }),
        __metadata("design:paramtypes", [core.ElementRef, core$1.GoogleMapsAPIWrapper])
    ], MapControlComponent);
    return MapControlComponent;
}());
exports.MapControlComponent = MapControlComponent;

});

var mapControl_component$1 = unwrapExports(mapControl_component);
var mapControl_component_1 = mapControl_component.MapControlComponent;

var dateShifter_component = createCommonjsModule(function (module, exports) {
"use strict";
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });

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
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], DateShifterComponent.prototype, "interval", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Array)
    ], DateShifterComponent.prototype, "limits", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], DateShifterComponent.prototype, "date", void 0);
    __decorate([
        core.Output(),
        __metadata("design:type", Object)
    ], DateShifterComponent.prototype, "dateChange", void 0);
    DateShifterComponent = __decorate([
        core.Component({
            selector: 'date-shifter',
            template: "<div>\n  <h3>{{dateText}}</h3>\n  <input type=\"range\"\n         class=\"form-control\"\n         min=\"-4\"\n         [max]=\"4\"\n         step=\"1\"\n         [(ngModel)]=\"value\"\n         (ngModelChange)=\"sliderMoved()\"\n         (mouseup)=\"reset()\">\n  <h4>{{label}}</h4>\n</div>\n\n  ",
            styles: [""]
        }),
        __metadata("design:paramtypes", [])
    ], DateShifterComponent);
    return DateShifterComponent;
}());
exports.DateShifterComponent = DateShifterComponent;

});

var dateShifter_component$1 = unwrapExports(dateShifter_component);
var dateShifter_component_1 = dateShifter_component.DateShifterComponent;

var oneTimeSplash_component = createCommonjsModule(function (module, exports) {
"use strict";
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });



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
    OneTimeSplashComponent.ctorParameters = function () { return [
        { type: ngBootstrap.NgbModal }
    ]; };
    __decorate([
        core.ViewChild('splashTemplate', { static: false }),
        __metadata("design:type", Object)
    ], OneTimeSplashComponent.prototype, "splashTemplate", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", String)
    ], OneTimeSplashComponent.prototype, "application", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], OneTimeSplashComponent.prototype, "label", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], OneTimeSplashComponent.prototype, "hideMessage", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", String)
    ], OneTimeSplashComponent.prototype, "klass", void 0);
    OneTimeSplashComponent = __decorate([
        core.Component({
            selector: 'one-time-splash',
            template: "<ng-template #splashTemplate let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">\n      {{label}}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <ng-content></ng-content>\n  </div>\n  <div class=\"modal-footer\">\n    <label *ngIf=\"application\">\n      <input type=\"checkbox\" [(ngModel)]=\"doNotShow\" (ngModelChange)=\"doNotShowClicked()\">\n      &nbsp; {{hideMessage}}\n    </label>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n  </div>\n  </ng-template>\n",
            styles: [""]
        }),
        __metadata("design:paramtypes", [ngBootstrap.NgbModal])
    ], OneTimeSplashComponent);
    return OneTimeSplashComponent;
}());
exports.OneTimeSplashComponent = OneTimeSplashComponent;

});

var oneTimeSplash_component$1 = unwrapExports(oneTimeSplash_component);
var oneTimeSplash_component_1 = oneTimeSplash_component.OneTimeSplashComponent;

var dateElement_component = createCommonjsModule(function (module, exports) {
"use strict";
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });

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
    __decorate([
        core.Input(),
        __metadata("design:type", String)
    ], DateElementComponent.prototype, "label", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", String)
    ], DateElementComponent.prototype, "property", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], DateElementComponent.prototype, "src", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], DateElementComponent.prototype, "step", void 0);
    __decorate([
        core.Output(),
        __metadata("design:type", Object)
    ], DateElementComponent.prototype, "changed", void 0);
    DateElementComponent = __decorate([
        core.Component({
            selector: 'date-element',
            template: "<div class=\"row no-gutters\">\n  <div class=\"col-4\">{{label}}</div>\n  <div class=\"col-2\">\n    <button class=\"btn btn-secondary btn-sm\" (click)=\"move(-step)\">\n      <i class=\"fa fa-angle-left\"></i>\n    </button>\n  </div>\n  <div class=\"col-4\"><button class=\"btn btn-link btn-sm\">{{src[property]}}</button></div>\n  <div class=\"col-2\">\n    <button class=\"btn btn-secondary btn-sm\" (click)=\"move(step)\">\n      <i class=\"fa fa-angle-right\"></i>\n    </button>\n  </div>\n</div>\n"
        }),
        __metadata("design:paramtypes", [])
    ], DateElementComponent);
    return DateElementComponent;
}());
exports.DateElementComponent = DateElementComponent;

});

var dateElement_component$1 = unwrapExports(dateElement_component);
var dateElement_component_1 = dateElement_component.DateElementComponent;

var shareView_component = createCommonjsModule(function (module, exports) {
"use strict";
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });

var ShareViewComponent = /** @class */ (function () {
    function ShareViewComponent() {
    }
    ShareViewComponent.prototype.ngAfterViewInit = function () {
    };
    ShareViewComponent = __decorate([
        core.Component({
            selector: 'share-view',
            template: "<button class=\"btn btn-secondary btn-sm\"\n        ngbTooltip=\"Share current view\"\n        placement=\"right\"\n        [disabled]=\"true\"\n><i class=\"fa fa-share-alt\"></i></button>\n"
        }),
        __metadata("design:paramtypes", [])
    ], ShareViewComponent);
    return ShareViewComponent;
}());
exports.ShareViewComponent = ShareViewComponent;

});

var shareView_component$1 = unwrapExports(shareView_component);
var shareView_component_1 = shareView_component.ShareViewComponent;

var locationSearch_component = createCommonjsModule(function (module, exports) {
"use strict";
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });

var LocationSearchComponent = /** @class */ (function () {
    function LocationSearchComponent() {
    }
    LocationSearchComponent.prototype.ngAfterViewInit = function () {
    };
    LocationSearchComponent = __decorate([
        core.Component({
            selector: 'location-search',
            template: "<button class=\"btn btn-secondary btn-sm\"\n        ngbTooltip=\"Location search\"\n        placement=\"right\"\n        [disabled]=\"true\"\n\n><i class=\"fa fa-search\"></i></button>\n"
        }),
        __metadata("design:paramtypes", [])
    ], LocationSearchComponent);
    return LocationSearchComponent;
}());
exports.LocationSearchComponent = LocationSearchComponent;

});

var locationSearch_component$1 = unwrapExports(locationSearch_component);
var locationSearch_component_1 = locationSearch_component.LocationSearchComponent;

var layeredMap_component = createCommonjsModule(function (module, exports) {
"use strict";
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });




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
    LayeredMapComponent.ctorParameters = function () { return [
        { type: core.NgZone },
        { type: mapWald.StaticDataService },
        { type: mapWald.MetadataService }
    ]; };
    __decorate([
        core.Input(),
        __metadata("design:type", Array)
    ], LayeredMapComponent.prototype, "layers", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Array)
    ], LayeredMapComponent.prototype, "markers", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", String)
    ], LayeredMapComponent.prototype, "mapTypeId", void 0);
    __decorate([
        core.Output(),
        __metadata("design:type", Object)
    ], LayeredMapComponent.prototype, "layersChange", void 0);
    __decorate([
        core.Output(),
        __metadata("design:type", Object)
    ], LayeredMapComponent.prototype, "featureSelected", void 0);
    __decorate([
        core.Output(),
        __metadata("design:type", Object)
    ], LayeredMapComponent.prototype, "pointSelected", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Number)
    ], LayeredMapComponent.prototype, "mapTypePosition", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], LayeredMapComponent.prototype, "streetViewControl", void 0);
    __decorate([
        core.ViewChild(core$1.AgmMap, { static: false }),
        __metadata("design:type", core$1.AgmMap)
    ], LayeredMapComponent.prototype, "theMap", void 0);
    __decorate([
        core.ViewChildren('infoWindows'),
        __metadata("design:type", core.QueryList)
    ], LayeredMapComponent.prototype, "infoWindows", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Number)
    ], LayeredMapComponent.prototype, "zoom", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], LayeredMapComponent.prototype, "showMapType", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Number)
    ], LayeredMapComponent.prototype, "lat", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Number)
    ], LayeredMapComponent.prototype, "lng", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], LayeredMapComponent.prototype, "bounds", void 0);
    LayeredMapComponent = __decorate([
        core.Component({
            selector: 'layered-map',
            template: "<agm-map #theMap\n[(latitude)]=\"lat\"\n[(longitude)]=\"lng\"\n[(zoom)]=\"zoom\"\n(zoomChange)=\"zoomChanged()\"\n[disableDefaultUI]=\"false\"\n[zoomControl]=\"false\"\n[mapTypeId]=\"mapTypeId\"\n[mapTypeControl]=\"showMapType\"\n[mapTypeControlOptions]=\"mapTypeOptions\"\n[streetViewControl]=\"streetViewControl\"\nscaleControl=\"true\"\n[fitBounds]=\"_bounds\"\n(mapClick)=\"mapClick($event)\">\n\n<agm-marker *ngFor=\"let marker of markers\"\n            [longitude]=\"marker.loc.lng\"\n            [latitude]=\"marker.loc.lat\"\n            [iconUrl]=\"marker.iconUrl\">\n  <agm-info-window #infoWindows [disableAutoPan]=\"true\">\n    <strong>{{marker.value}}</strong>\n  </agm-info-window>\n</agm-marker>\n\n<ng-container *ngFor=\"let mp of layers.slice()|reverse; let i = index\" [ngSwitch]=\"mp.layerType\">\n  <wms-layer *ngSwitchCase=\"'wms'\"\n    [url]=\"mp.url\"\n    [params]=\"mp.wmsParameters\"\n    [opacity]=\"mp.opacity\"\n    [position]=\"mp.options.position\">\n  </wms-layer>\n  <agm-data-layer *ngSwitchCase=\"'vector'\"\n                [geoJson]=\"mp.staticData\"\n                [style]=\"mp._styleFunc\"\n                (layerClick)=\"clicked($event)\"\n\n                >\n  </agm-data-layer>\n\n  <ng-container *ngSwitchCase=\"'circle'\">\n    <agm-circle *ngFor=\"let f of mp.staticData.features; let j=index\"\n                [latitude]=\"f.geometry.coordinates[1]\"\n                [longitude]=\"f.geometry.coordinates[0]\"\n                [radius]=\"10000000/(zoom*zoom*zoom*zoom)\"\n                [fillColor]=\"mp.flattenedSettings?.styles?.fillColor||'black'\"\n                [fillOpacity]=\"mp.flattenedSettings?.styles?.fillOpacity||1\"\n                [strokeColor]=\"mp.flattenedSettings?.styles?.strokeColor||'black'\"\n                [strokeOpacity]=\"mp.flattenedSettings?.styles?.strokeOpacity||1\"\n                [strokePosition]=\"0\"\n                [strokeWeight]=\"(f===selectedFeature)?3:(mp.flattenedSettings?.styles?.strokeWeight||0.5)\"\n                (circleClick)=\"circleClicked(mp,f)\"\n                >\n    </agm-circle>\n  </ng-container>\n\n  <!--\n  -->\n</ng-container>\n\n<!-- for map controls -->\n<map-control position=\"TOP_CENTER\">\n    <ng-content select=\".map-control.top-center\"></ng-content>\n</map-control>\n\n<map-control position=\"TOP_LEFT\">\n    <ng-content select=\".map-control.top-left\"></ng-content>\n</map-control>\n\n<map-control position=\"TOP_RIGHT\">\n    <ng-content select=\".map-control.top-right\"></ng-content>\n</map-control>\n\n<map-control position=\"LEFT_TOP\">\n    <ng-content select=\".map-control.left-top\"></ng-content>\n</map-control>\n\n<map-control position=\"RIGHT_TOP\">\n    <ng-content select=\".map-control.right-top\"></ng-content>\n</map-control>\n\n<map-control position=\"LEFT_CENTER\">\n    <ng-content select=\".map-control.left-center\"></ng-content>\n</map-control>\n\n<map-control position=\"RIGHT_CENTER\">\n    <ng-content select=\".map-control.right-center\"></ng-content>\n</map-control>\n\n<map-control position=\"LEFT_BOTTOM\">\n    <ng-content select=\".map-control.left-bottom\"></ng-content>\n</map-control>\n\n<map-control position=\"RIGHT_BOTTOM\">\n    <ng-content select=\".map-control.right-bottom\"></ng-content>\n</map-control>\n\n<map-control position=\"BOTTOM_CENTER\">\n    <ng-content select=\".map-control.bottom-center\"></ng-content>\n</map-control>\n\n<map-control position=\"BOTTOM_LEFT\">\n    <ng-content select=\".map-control.bottom-left\"></ng-content>\n</map-control>\n\n<map-control position=\"BOTTOM_RIGHT\">\n    <ng-content select=\".map-control.bottom-right\"></ng-content>\n</map-control>\n\n</agm-map>\n\n"
        }),
        __metadata("design:paramtypes", [core.NgZone,
            mapWald.StaticDataService,
            mapWald.MetadataService])
    ], LayeredMapComponent);
    return LayeredMapComponent;
}());
exports.LayeredMapComponent = LayeredMapComponent;

});

var layeredMap_component$1 = unwrapExports(layeredMap_component);
var layeredMap_component_1 = layeredMap_component.LayeredMapComponent;

var zoomLayer_component = createCommonjsModule(function (module, exports) {
"use strict";
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });



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
    __decorate([
        core.Input(),
        __metadata("design:type", layeredMap_component.LayeredMapComponent)
    ], ZoomLayerComponent.prototype, "map", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", mapWald.MappedLayer)
    ], ZoomLayerComponent.prototype, "layer", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], ZoomLayerComponent.prototype, "fullBounds", void 0);
    ZoomLayerComponent = __decorate([
        core.Component({
            selector: 'zoom-layer',
            template: "<button type=\"button\" [disabled]=\"!layer\" class=\"btn btn-secondary btn-sm\"\n        ngbTooltip=\"Zoom to selected layer\"\n        placement=\"right\"\n        (click)=\"zoomToLayer()\"\n><i class=\"fa fa-compress\"></i>\n</button>\n"
        }),
        __metadata("design:paramtypes", [])
    ], ZoomLayerComponent);
    return ZoomLayerComponent;
}());
exports.ZoomLayerComponent = ZoomLayerComponent;

});

var zoomLayer_component$1 = unwrapExports(zoomLayer_component);
var zoomLayer_component_1 = zoomLayer_component.ZoomLayerComponent;

var zoomFull_component = createCommonjsModule(function (module, exports) {
"use strict";
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });


var ZoomFullComponent = /** @class */ (function () {
    function ZoomFullComponent() {
    }
    ZoomFullComponent.prototype.ngAfterViewInit = function () {
    };
    ZoomFullComponent.prototype.zoomToBounds = function () {
        this.map.zoomToBounds(Object.assign({}, this.bounds));
    };
    __decorate([
        core.Input(),
        __metadata("design:type", layeredMap_component.LayeredMapComponent)
    ], ZoomFullComponent.prototype, "map", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], ZoomFullComponent.prototype, "bounds", void 0);
    ZoomFullComponent = __decorate([
        core.Component({
            selector: 'zoom-full',
            template: "<button class=\"btn btn-secondary btn-sm\"\n        ngbTooltip=\"Zoom to full extent\"\n        placement=\"right\"\n        (click)=\"zoomToBounds()\"\n><i class=\"fa fa-arrows-alt\"></i></button>\n"
        }),
        __metadata("design:paramtypes", [])
    ], ZoomFullComponent);
    return ZoomFullComponent;
}());
exports.ZoomFullComponent = ZoomFullComponent;

});

var zoomFull_component$1 = unwrapExports(zoomFull_component);
var zoomFull_component_1 = zoomFull_component.ZoomFullComponent;

var zoomOut_component = createCommonjsModule(function (module, exports) {
"use strict";
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });


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
    __decorate([
        core.Input(),
        __metadata("design:type", layeredMap_component.LayeredMapComponent)
    ], ZoomOutComponent.prototype, "map", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Number)
    ], ZoomOutComponent.prototype, "minZoom", void 0);
    ZoomOutComponent = __decorate([
        core.Component({
            selector: 'zoom-out',
            template: "<button class=\"btn btn-secondary btn-sm\"\n        ngbTooltip=\"Zoom out\"\n        placement=\"right\"\n        (click)=\"zoomOut()\"\n><i class=\"fa fa-minus\"></i></button>"
        }),
        __metadata("design:paramtypes", [])
    ], ZoomOutComponent);
    return ZoomOutComponent;
}());
exports.ZoomOutComponent = ZoomOutComponent;

});

var zoomOut_component$1 = unwrapExports(zoomOut_component);
var zoomOut_component_1 = zoomOut_component.ZoomOutComponent;

var zoomIn_component = createCommonjsModule(function (module, exports) {
"use strict";
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });


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
    __decorate([
        core.Input(),
        __metadata("design:type", layeredMap_component.LayeredMapComponent)
    ], ZoomInComponent.prototype, "map", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Number)
    ], ZoomInComponent.prototype, "maxZoom", void 0);
    ZoomInComponent = __decorate([
        core.Component({
            selector: 'zoom-in',
            template: "<button class=\"btn btn-secondary btn-sm\"\n        ngbTooltip=\"Zoom in\"\n        placement=\"right\"\n        (click)=\"zoomIn()\"\n><i class=\"fa fa-plus\"></i></button>"
        }),
        __metadata("design:paramtypes", [])
    ], ZoomInComponent);
    return ZoomInComponent;
}());
exports.ZoomInComponent = ZoomInComponent;

});

var zoomIn_component$1 = unwrapExports(zoomIn_component);
var zoomIn_component_1 = zoomIn_component.ZoomInComponent;

var cycleBaseMap_component = createCommonjsModule(function (module, exports) {
"use strict";
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });


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
    __decorate([
        core.Input(),
        __metadata("design:type", layeredMap_component.LayeredMapComponent)
    ], CycleBaseMapComponent.prototype, "map", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Number)
    ], CycleBaseMapComponent.prototype, "maxZoom", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Array)
    ], CycleBaseMapComponent.prototype, "baseLayers", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], CycleBaseMapComponent.prototype, "baseLayer", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], CycleBaseMapComponent.prototype, "tooltip", void 0);
    CycleBaseMapComponent = __decorate([
        core.Component({
            selector: 'cycle-base-map',
            template: "<button class=\"btn btn-secondary btn-sm\" (click)=\"toggleBaseLayer()\" [ngbTooltip]=\"tooltip\"\n                     placement=\"right\">\n  <i class=\"fa\" [ngClass]=\"baseLayer?.label==='Road Map'?'fa-road':'fa-globe'\"></i>\n</button>"
        }),
        __metadata("design:paramtypes", [])
    ], CycleBaseMapComponent);
    return CycleBaseMapComponent;
}());
exports.CycleBaseMapComponent = CycleBaseMapComponent;

});

var cycleBaseMap_component$1 = unwrapExports(cycleBaseMap_component);
var cycleBaseMap_component_1 = cycleBaseMap_component.CycleBaseMapComponent;

var cycleOpacity_component = createCommonjsModule(function (module, exports) {
"use strict";
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });


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
    __decorate([
        core.Input(),
        __metadata("design:type", layeredMap_component.LayeredMapComponent)
    ], CycleOpacityComponent.prototype, "map", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], CycleOpacityComponent.prototype, "maxZoom", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], CycleOpacityComponent.prototype, "tooltip", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], CycleOpacityComponent.prototype, "layerOpacity", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], CycleOpacityComponent.prototype, "step", void 0);
    CycleOpacityComponent = __decorate([
        core.Component({
            selector: 'cycle-opacity',
            template: "<button class=\"btn btn-secondary btn-sm\"\n                     (click)=\"cycleTransparency()\"\n                     [ngbTooltip]=\"tooltip\"\n                     placement=\"right\">\n<i class=\"fa\" [ngClass]=\"(layerOpacity<0.5)?'fa-circle-o':((layerOpacity<0.9)?'fa-adjust':'fa-circle')\"></i>\n</button>"
        }),
        __metadata("design:paramtypes", [])
    ], CycleOpacityComponent);
    return CycleOpacityComponent;
}());
exports.CycleOpacityComponent = CycleOpacityComponent;

});

var cycleOpacity_component$1 = unwrapExports(cycleOpacity_component);
var cycleOpacity_component_1 = cycleOpacity_component.CycleOpacityComponent;

var buttonBar_component = createCommonjsModule(function (module, exports) {
"use strict";
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });

var ButtonBarComponent = /** @class */ (function () {
    function ButtonBarComponent() {
    }
    ButtonBarComponent.prototype.ngAfterViewInit = function () {
    };
    ButtonBarComponent = __decorate([
        core.Component({
            selector: 'button-bar',
            template: "<div class=\"button-bar bb-vertical\">\n  <ng-content></ng-content>\n</div>\n\n",
            styles: ["\n"]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonBarComponent);
    return ButtonBarComponent;
}());
exports.ButtonBarComponent = ButtonBarComponent;

});

var buttonBar_component$1 = unwrapExports(buttonBar_component);
var buttonBar_component_1 = buttonBar_component.ButtonBarComponent;

var timeseriesChart_component = createCommonjsModule(function (module, exports) {
"use strict";
/// <reference path="../decs.d.ts" />
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });

//import * as Plotly from 'plotly.js/dist/plotly-basic';
//declare var Plotly: any;
//const Plotly = require('plotly.js/dist/plotly-basic');

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
    TimeseriesChartComponent.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    __decorate([
        core.Input(),
        __metadata("design:type", String)
    ], TimeseriesChartComponent.prototype, "title", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Array)
    ], TimeseriesChartComponent.prototype, "timeSeries", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Number)
    ], TimeseriesChartComponent.prototype, "marginLeft", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Number)
    ], TimeseriesChartComponent.prototype, "marginRight", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Number)
    ], TimeseriesChartComponent.prototype, "marginTop", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Number)
    ], TimeseriesChartComponent.prototype, "marginBottom", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], TimeseriesChartComponent.prototype, "titlefont", void 0);
    TimeseriesChartComponent = __decorate([
        core.Component({
            selector: 'timeseries-chart',
            template: "<div class=\"our-chart\">\n</div>\n"
        }),
        __metadata("design:paramtypes", [core.ElementRef])
    ], TimeseriesChartComponent);
    return TimeseriesChartComponent;
}());
exports.TimeseriesChartComponent = TimeseriesChartComponent;

});

var timeseriesChart_component$1 = unwrapExports(timeseriesChart_component);
var timeseriesChart_component_1 = timeseriesChart_component.TimeseriesChartComponent;

var featureTable_component = createCommonjsModule(function (module, exports) {
"use strict";
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });

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
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], FeatureTableComponent.prototype, "feature", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], FeatureTableComponent.prototype, "styles", void 0);
    FeatureTableComponent = __decorate([
        core.Component({
            selector: 'feature-table',
            template: "<table *ngIf=\"feature\" class=\"table table-striped table-sm feature-table\">\n  <thead>\n    <tr>\n      <td><strong>Property</strong></td>\n      <td><strong>Value</strong></td>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td><strong>Geometry</strong></td>\n      <td>{{feature.geometry.type}}</td>\n    </tr>\n    <tr *ngFor=\"let prop of _keys(feature.properties)\">\n      <td><strong>{{prop}}</strong></td>\n      <td *ngIf=\"!styles||!styles[prop]\">{{feature.properties[prop]}}</td>\n      <td *ngIf=\"styles&&styles[prop]\">\n        <a *ngIf=\"styles[prop].hyperlink\" target=\"_blank\" [href]=\"feature.properties[prop]\">\n          {{feature.properties[prop]}}\n        </a>\n      </td>\n    </tr>\n  </tbody>\n</table>",
            styles: [".feature-table{\n  max-width:300px;\n}"]
        }),
        __metadata("design:paramtypes", [])
    ], FeatureTableComponent);
    return FeatureTableComponent;
}());
exports.FeatureTableComponent = FeatureTableComponent;

});

var featureTable_component$1 = unwrapExports(featureTable_component);
var featureTable_component_1 = featureTable_component.FeatureTableComponent;

var collapsibleMapControl_component = createCommonjsModule(function (module, exports) {
"use strict";
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });

var CollapsibleMapControlComponent = /** @class */ (function () {
    function CollapsibleMapControlComponent() {
    }
    CollapsibleMapControlComponent.prototype.ngAfterViewInit = function () {
    };
    __decorate([
        core.Input(),
        __metadata("design:type", Boolean)
    ], CollapsibleMapControlComponent.prototype, "isCollapsed", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", String)
    ], CollapsibleMapControlComponent.prototype, "heading", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", String)
    ], CollapsibleMapControlComponent.prototype, "direction", void 0);
    CollapsibleMapControlComponent = __decorate([
        core.Component({
            selector: 'collapsible-map-control',
            template: "<div class=\"card map-control collapsible-control\">\n    <a (click)=\"isCollapsed = !isCollapsed\">\n      <div class=\"card-header\">\n        <h6 class=\"mb-0\">\n          {{heading}}\n          <span *ngIf=\"isCollapsed\" class=\"float-right fa fa-caret-up\n            collapse-arrow\" aria-hidden=\"true\"></span>\n          <span *ngIf=\"!isCollapsed\" class=\"float-right fa fa-caret-down\n            collapse-arrow\" aria-hidden=\"true\"></span>\n        </h6>\n      </div>\n    </a>\n\n    <div class=\"ngbCollapse\" [ngbCollapse]=\"isCollapsed\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n",
            styles: [".collapsible-control{\n  margin:3px;\n}"]
        }),
        __metadata("design:paramtypes", [])
    ], CollapsibleMapControlComponent);
    return CollapsibleMapControlComponent;
}());
exports.CollapsibleMapControlComponent = CollapsibleMapControlComponent;

});

var collapsibleMapControl_component$1 = unwrapExports(collapsibleMapControl_component);
var collapsibleMapControl_component_1 = collapsibleMapControl_component.CollapsibleMapControlComponent;

var baseMapSelection_component = createCommonjsModule(function (module, exports) {
"use strict";
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });

var BaseMapSelectionComponent = /** @class */ (function () {
    function BaseMapSelectionComponent() {
    }
    BaseMapSelectionComponent.prototype.ngAfterViewInit = function () {
    };
    BaseMapSelectionComponent = __decorate([
        core.Component({
            selector: 'base-map-selection',
            template: "<p>base-map-selection Component</p>"
        }),
        __metadata("design:paramtypes", [])
    ], BaseMapSelectionComponent);
    return BaseMapSelectionComponent;
}());
exports.BaseMapSelectionComponent = BaseMapSelectionComponent;

});

var baseMapSelection_component$1 = unwrapExports(baseMapSelection_component);
var baseMapSelection_component_1 = baseMapSelection_component.BaseMapSelectionComponent;

var simpleTreeNode_component = createCommonjsModule(function (module, exports) {
"use strict";
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });

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
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], SimpleTreeNodeComponent.prototype, "tree", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], SimpleTreeNodeComponent.prototype, "options", void 0);
    __decorate([
        core.Output(),
        __metadata("design:type", Object)
    ], SimpleTreeNodeComponent.prototype, "nodeSelected", void 0);
    SimpleTreeNodeComponent = __decorate([
        core.Component({
            selector: 'simple-tree-node',
            template: "<a href=\"#\"\n                (click)=\"treeClick($event)\"\n                [ngClass]=\"tree.klass\"><i [ngClass]=\"icon\"></i>\n  &nbsp;\n  <span ngbTooltip=\"{{tree.tooltip | async}}\"\n        placement=\"right\"\n        container=\"body\">{{tree.label}}</span>\n  <span *ngIf=\"tree.actions\"\n        class=\"float-right\">\n      &nbsp;\n      <i *ngFor=\"let a of tree.actions\"\n       [ngClass]=\"a.icon\"\n       ngbTooltip=\"{{a.tooltip | async}}\"\n       placement=\"right\"\n       container=\"body\"\n       (click)=\"a.action(tree)\">&nbsp;</i>\n  </span>\n</a>\n"
        })
    ], SimpleTreeNodeComponent);
    return SimpleTreeNodeComponent;
}());
exports.SimpleTreeNodeComponent = SimpleTreeNodeComponent;

});

var simpleTreeNode_component$1 = unwrapExports(simpleTreeNode_component);
var simpleTreeNode_component_1 = simpleTreeNode_component.SimpleTreeNodeComponent;

var simpleTree_component = createCommonjsModule(function (module, exports) {
"use strict";
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });

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
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], SimpleTreeComponent.prototype, "tree", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Boolean)
    ], SimpleTreeComponent.prototype, "showTop", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Boolean)
    ], SimpleTreeComponent.prototype, "inner", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], SimpleTreeComponent.prototype, "collapsedIcon", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], SimpleTreeComponent.prototype, "expandedIcon", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], SimpleTreeComponent.prototype, "leafIcon", void 0);
    __decorate([
        core.Output(),
        __metadata("design:type", Object)
    ], SimpleTreeComponent.prototype, "nodeSelected", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], SimpleTreeComponent.prototype, "options", void 0);
    SimpleTreeComponent = __decorate([
        core.Component({
            selector: 'simple-tree',
            template: "<div *ngIf=\"tree&&tree.visible\" class=\"simple-tree\">\n\n  <div *ngIf=\"inner\">\n    <li ><simple-tree-node [tree]=\"tree\"\n                           [options]=\"options\"\n                           (nodeSelected)=\"childSelected($event)\"></simple-tree-node>\n      <ul *ngIf=\"tree.children&&tree.expanded\" class=\"inner-list\">\n        <simple-tree *ngFor=\"let t of tree.children\" [tree]=\"t\" [inner]=\"true\"\n                    (nodeSelected)=\"childSelected($event)\"\n                    [options]=\"options\"></simple-tree>\n      </ul>\n    </li>\n  </div>\n\n  <div *ngIf=\"!inner&&showTop\">\n    <ul class=\"outer-list\">\n      <li><simple-tree-node [tree]=\"tree\" [options]=\"options\"\n        (nodeSelected)=\"childSelected($event)\"></simple-tree-node>\n        <ul *ngIf=\"tree.children&&tree.expanded\" class=\"inner-list\">\n            <simple-tree *ngFor=\"let t of tree.children\" [tree]=\"t\" [inner]=\"true\"\n            (nodeSelected)=\"childSelected($event)\"\n            [options]=\"options\"></simple-tree>\n        </ul>\n      </li>\n    </ul>\n  </div>\n\n  <div *ngIf=\"!inner&&!showTop\">\n      <ul *ngIf=\"tree.children&&tree.expanded\" class=\"outer-list\">\n          <simple-tree *ngFor=\"let t of tree.children\" [tree]=\"t\" [inner]=\"true\"\n          (nodeSelected)=\"childSelected($event)\"\n          [options]=\"options\"></simple-tree>\n      </ul>\n    </div>\n\n</div>\n",
            styles: ["\n.simple-tree ul{\n  list-style-type: none\n}\n\nul.outer-list{\n  padding-left:5px;\n}\n\nul.inner-list{\n  padding-left:15px;\n}"]
        }),
        __metadata("design:paramtypes", [])
    ], SimpleTreeComponent);
    return SimpleTreeComponent;
}());
exports.SimpleTreeComponent = SimpleTreeComponent;

});

var simpleTree_component$1 = unwrapExports(simpleTree_component);
var simpleTree_component_1 = simpleTree_component.SimpleTreeComponent;

var catalog_component = createCommonjsModule(function (module, exports) {
"use strict";
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __values = (commonjsGlobal && commonjsGlobal.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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
    CatalogComponent.ctorParameters = function () { return [
        { type: mapWald.TreeFilterService },
        { type: mapWald.MetadataService }
    ]; };
    __decorate([
        core.Input(),
        __metadata("design:type", mapWald.Catalog)
    ], CatalogComponent.prototype, "catalog", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], CatalogComponent.prototype, "showPlaceholders", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], CatalogComponent.prototype, "defaultAction", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Array)
    ], CatalogComponent.prototype, "layerActions", void 0);
    __decorate([
        core.Output(),
        __metadata("design:type", core.EventEmitter)
    ], CatalogComponent.prototype, "layerSelected", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], CatalogComponent.prototype, "collapsedIcon", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], CatalogComponent.prototype, "expandedIcon", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], CatalogComponent.prototype, "leafIcon", void 0);
    CatalogComponent = __decorate([
        core.Component({
            selector: 'catalog',
            template: "<div class=\"input-group\">\n  <span class=\"input-group-btn\">\n            <button class=\"btn\" type=\"button\" [disabled]=\"!filterText\"\n              (click)=\"filterText = ''\">\n            <i *ngIf=\"filterText\"class=\"fa fa-times\" aria-hidden=\"true\"></i>\n            <i *ngIf=\"!filterText\"class=\"fa fa-search\" aria-hidden=\"true\"></i>\n            </button>\n  </span>\n  <input #filterInput type=\"text\" class=\"form-control\" placeholder=\"Catalog search...\"\n  [(ngModel)]=\"filterText\"/>\n</div>\n\n<simple-tree\n  [tree]=\"this.filterService.filterTree(tree, filterText)\"\n  [showTop]=\"false\"\n  [leafIcon]=\"leafIcon\"\n  [collapsedIcon]=\"collapsedIcon\"\n  [expandedIcon]=\"expandedIcon\"\n  (nodeSelected)=\"nodeSelected($event)\">\n</simple-tree>\n",
            styles: ["\n.node-name{\n  font-size:1em;\n}\n"]
        }),
        __metadata("design:paramtypes", [mapWald.TreeFilterService, mapWald.MetadataService])
    ], CatalogComponent);
    return CatalogComponent;
}());
exports.CatalogComponent = CatalogComponent;

});

var catalog_component$1 = unwrapExports(catalog_component);
var catalog_component_1 = catalog_component.CatalogComponent;

var dateSelection_component = createCommonjsModule(function (module, exports) {
"use strict";
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });


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
    DateSelectionComponent.ctorParameters = function () { return [
        { type: mapWald.TimeUtilsService }
    ]; };
    __decorate([
        core.Input(),
        __metadata("design:type", Date)
    ], DateSelectionComponent.prototype, "date", void 0);
    __decorate([
        core.Output(),
        __metadata("design:type", Object)
    ], DateSelectionComponent.prototype, "dateChange", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", String)
    ], DateSelectionComponent.prototype, "timestep", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], DateSelectionComponent.prototype, "minDate", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], DateSelectionComponent.prototype, "maxDate", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", String)
    ], DateSelectionComponent.prototype, "style", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], DateSelectionComponent.prototype, "stepDays", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", String)
    ], DateSelectionComponent.prototype, "referenceDate", void 0);
    DateSelectionComponent = __decorate([
        core.Component({
            selector: 'date-selection',
            template: "<div class=\"date-control container-fluid\">\n  <div *ngIf=\"style!=='arrows'\" class=\"row no-gutters\">\n    <div class=\"col-8 form-group-inline\">\n        <div class=\"input-group input-group-sm\">\n          <input class=\"form-control form-control-sm\" placeholder=\"yyyy-mm-dd\"\n                 name=\"dp\" [(ngModel)]=\"dateStruct\" (ngModelChange)=\"dateStructChanged()\"\n                 ngbDatepicker #d=\"ngbDatepicker\"\n                 [maxDate]=\"maxDateStruct\" [minDate]=\"minDateStruct\">\n          <div class=\"input-group-addon\" (click)=\"d.toggle()\" >\n            <i class=\"fa fa-calendar\"></i>\n          </div>\n        </div>\n      </div>\n\n    <!--\n      <div class=\"col-2\" >\n        <button class=\"btn btn-secondary btn-sm\" [disabled]=\"atMax\"\n                (click)=\"move(1)\"><i class=\"fa fa-chevron-right\"></i></button>\n      </div>\n    -->\n  </div>\n\n  <div *ngIf=\"style==='arrows'\">\n    <date-element *ngIf=\"need.day\"   [src]=\"dateStruct\" [property]=\"'day'\" [label]=\"'Day'\"\n                  [step]=\"stepDays\"\n                  (changed)=\"dateStructChanged()\"></date-element>\n    <date-element *ngIf=\"need.month\" [src]=\"dateStruct\" [property]=\"'month'\" [label]=\"'Month'\"\n                  (changed)=\"dateStructChanged()\"></date-element>\n    <date-element *ngIf=\"need.year\"  [src]=\"dateStruct\" [property]=\"'year'\" [label]=\"'Year'\"\n                  (changed)=\"dateStructChanged()\"></date-element>\n  </div>\n</div>\n"
        }),
        __metadata("design:paramtypes", [mapWald.TimeUtilsService])
    ], DateSelectionComponent);
    return DateSelectionComponent;
}());
exports.DateSelectionComponent = DateSelectionComponent;

});

var dateSelection_component$1 = unwrapExports(dateSelection_component);
var dateSelection_component_1 = dateSelection_component.DateSelectionComponent;

var layerProperties_component = createCommonjsModule(function (module, exports) {
"use strict";
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });



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
        enumerable: true,
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
    LayerPropertiesComponent.ctorParameters = function () { return [
        { type: mapWald.PointSelectionService }
    ]; };
    __decorate([
        core.Input(),
        __metadata("design:type", mapWald.MappedLayer)
    ], LayerPropertiesComponent.prototype, "layer", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", layeredMap_component.LayeredMapComponent)
    ], LayerPropertiesComponent.prototype, "map", void 0);
    __decorate([
        core.Output(),
        __metadata("design:type", Object)
    ], LayerPropertiesComponent.prototype, "propertyChanged", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", String)
    ], LayerPropertiesComponent.prototype, "tooltipPlacement", void 0);
    LayerPropertiesComponent = __decorate([
        core.Component({
            selector: 'layer-properties',
            template: "<div class=\"container-fluid\">\n  <p><strong>{{layer?.title}}</strong>\n    <span *ngIf=\"layer.description()\"\n    [ngbTooltip]=\"layer.description()\"\n    [placement]=\"tooltipPlacement\"\n    class=\"layer-info-target\"\n    container=\"body\">\n  &nbsp;<i class=\"fa fa-info-circle\"></i>\n  </span>\n  &nbsp;<span *ngIf=\"layer.interpolatedDownloadURL\">\n    <small><a target=\"_blank\"\n              [href]=\"layer.interpolatedDownloadURL\"\n              [ngbTooltip]=\"'Download data'\"\n              container=\"body\">\n      <i class=\"fa fa-download\"></i>\n    </a></small>\n  </span>\n  </p>\n\n  <div *ngIf=\"layer?.layer.publications.length>1\">\n    <span *ngIf=\"layer.layer.publications[0].timestep\">Timestep </span>\n    <span *ngIf=\"!layer.layer.publications[0].timestep\">{{ layer.layer.options.publicationLabel || 'Variable' }} </span>\n    <select [(ngModel)]=\"layer.options.publication\" (ngModelChange)=\"publicationSelected($event)\">\n      <option *ngFor=\"let p of layer.layer.publications; let i=index\" [ngValue]=\"i\">{{p.label || p.timestep}}</option>\n    </select>\n  </div>\n  <div *ngIf=\"layer?.layer.publications.length===1\">\n    {{publication?.label}}\n  </div>\n\n  <div *ngIf=\"publication&&publication.timestep\">\n    <hr/>\n    <date-selection [(date)]=\"layer.options.date\"\n      (dateChange)=\"update($event)\"\n      [timestep]=\"publication.timestep\"\n      [stepDays]=\"publication.timestepMultiplier||1\"\n      [referenceDate]=\"publication.timestepReference\"\n      [minDate]=\"publication.options.start\"\n      [maxDate]=\"publication.options.end\"></date-selection>\n  </div>\n\n  <div *ngIf=\"layer.layer.options.smallExtent\">\n    <hr/>\n    <button class=\"btn btn-sm btn-primary\" (click)=\"zoomToExtent()\">Zoom to Extent</button>\n  </div>\n\n<!--\n  <div *ngIf=\"layer.layer.options.vectors\">\n    <p>Lets filter those {{layer.layer.options.vectors}}s, eh?</p>\n  </div>\n-->\n\n  <div *ngIf=\"availableTags\">\n    <div *ngFor=\"let tag of getKeys(availableTags)\">\n      {{tag}}\n      <select [(ngModel)]=\"tags[tag]\" (ngModelChange)=\"tagChanged(tag)\">\n        <option *ngFor=\"let val of availableTags[tag]\" [ngValue]=\"val.value\">{{val.label}}</option>\n      </select>\n    </div>\n  </div>\n\n  <div *ngIf=\"publication?.pointdata\">\n    Variable:\n    <select [(ngModel)]=\"selectedVariable\" (ngModelChange)=\"queryPointData()\">\n      <option *ngFor=\"let v of pointVariables\" [ngValue]=\"v.value\">{{v.label}}</option>\n    </select>\n  </div>\n  <!--\n  <div *ngIf=\"publication\">\n    <p>Start: {{publication.options.start}}</p>\n    <p>End: {{publication.options.end}}</p>\n    <p>{{publication|json}}</p>\n  </div>\n  <button (click)=\"update()\">Force update...</button>\n  -->\n</div>"
        }),
        __metadata("design:paramtypes", [mapWald.PointSelectionService])
    ], LayerPropertiesComponent);
    return LayerPropertiesComponent;
}());
exports.LayerPropertiesComponent = LayerPropertiesComponent;

});

var layerProperties_component$1 = unwrapExports(layerProperties_component);
var layerProperties_component_1 = layerProperties_component.LayerPropertiesComponent;

var layerControl_component = createCommonjsModule(function (module, exports) {
"use strict";
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });



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
    LayerControlComponent.ctorParameters = function () { return [
        { type: mapWald.MetadataService }
    ]; };
    __decorate([
        core.Input(),
        __metadata("design:type", Array)
    ], LayerControlComponent.prototype, "layers", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", layeredMap_component.LayeredMapComponent)
    ], LayerControlComponent.prototype, "map", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], LayerControlComponent.prototype, "allowRemove", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], LayerControlComponent.prototype, "showLegends", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], LayerControlComponent.prototype, "allowReorder", void 0);
    __decorate([
        core.Output(),
        __metadata("design:type", Object)
    ], LayerControlComponent.prototype, "layersChange", void 0);
    LayerControlComponent = __decorate([
        core.Component({
            selector: 'layer-control',
            template: "<div class=\"layers-control\">\n  <div *ngIf=\"showLegends\" class=\"layers-control-header\"> <!-- header -->\n    <div class=\"float-right\">\n      <!-- TODO Attach handlers and tooltips to each icon -->\n      <i class=\"fa fa-lg fa-cog discrete-icon\" (click)=\"allLegends(false)\"></i>\n      <i class=\"fa fa-lg fa-th-list discrete-icon\" (click)=\"allLegends(true)\"></i>\n    </div>\n    <br/>\n  </div>\n\n  <div *ngIf=\"layers\">\n    <div *ngFor=\"let l of layers; let i = index\"\n         class=\"layer-control d-flex justify-content-between\">\n      <div class=\"p-2\" style=\"width:100%\">\n        <div *ngIf=\"showLegends&&l.options.legend\">\n          <div *ngIf=\"l.flattenedSettings?.palette || l.legendURL\">\n            <map-legend [title]=\"l.title\"\n              [imageURL]=\"l.legendURL\"\n              [helpText]=\"l.description()\"\n              [mapUnits]=\"l.flattenedSettings?.units\"\n              [cbPalette]=\"l.flattenedSettings?.palette?.name||l.flattenedSettings?.palette\"\n              [cbCount]=\"l.flattenedSettings?.numcolorbands||l.flattenedSettings?.palette?.count\"\n              [cbReverse]=\"l.flattenedSettings?.palette?.reverse\"\n              [cbRange]=\"l.flattenedSettings?.colorscalerange\">\n            </map-legend>\n          </div>\n        </div>\n\n        <div *ngIf=\"!showLegends||!l.options.legend\">\n          <layer-properties [layer]=\"l\"\n                            [map]=\"map\"\n                            (propertyChanged)=\"layerPropertyChanged($event)\">\n          </layer-properties>\n        </div>\n      </div>\n      <div class=\"p-2\">\n          <div>\n            <!-- TODO Attach handlers and tooltips to each icon -->\n            <i *ngIf=\"allowReorder\" class=\"fa fa-bars discrete-icon\"></i><br *ngIf=\"allowReorder\"/>\n            <i *ngIf=\"showLegends\" class=\"fa fa-cog discrete-icon\"\n               ngbTooltip=\"Show layer controls\" placement=\"right\" data-container=\"body\"\n               (click)=\"layerLegend(l,false)\"></i><br *ngIf=\"showLegends\"/>\n            <i *ngIf=\"showLegends\" class=\"fa fa-th-list discrete-icon\"\n               ngbTooltip=\"Show layer data\" placement=\"right\" data-container=\"body\"\n               (click)=\"layerLegend(l,true)\"></i><br *ngIf=\"showLegends\"/>\n            <i *ngIf=\"allowReorder\" class=\"fa fa-angle-double-up discrete-icon\"\n               ngbTooltip=\"Move to top\" placement=\"right\" data-container=\"body\"\n              (click)=\"moveToTop(i)\"></i><br *ngIf=\"allowReorder\"/>\n            <i *ngIf=\"allowReorder\" class=\"fa fa-angle-up discrete-icon\"\n               ngbTooltip=\"Move up\" placement=\"right\" data-container=\"body\"\n              (click)=\"moveUp(i)\"></i><br *ngIf=\"allowReorder\"/>\n            <i *ngIf=\"allowReorder\" class=\"fa fa-angle-down discrete-icon\"\n               ngbTooltip=\"Move down\" placement=\"right\" data-container=\"body\"\n              (click)=\"moveDown(i)\"></i><br *ngIf=\"allowReorder\"/>\n            <i *ngIf=\"allowReorder\" class=\"fa fa-angle-double-down discrete-icon\"\n               ngbTooltip=\"Move to bottom\" placement=\"right\" data-container=\"body\"\n              (click)=\"moveToBottom(i)\"></i><br *ngIf=\"allowReorder\"/>\n            <i *ngIf=\"allowRemove\" class=\"fa fa-times discrete-icon\"\n               ngbTooltip=\"Remove layer\" placement=\"right\" data-container=\"body\"\n              data-toggle=\"tooltip\" title=\"Remove layer\"\n              (click)=\"removeLayer(i)\"></i>\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n\n<!-- Should this control be outside the map? eg to the left? -->\n",
            styles: [".layers-control{\n  width:200px;\n}\n\n\n.layers-control-header, .layer-control{\n  border-bottom: 1.5px solid #aaa;\n}"]
        }),
        __metadata("design:paramtypes", [mapWald.MetadataService])
    ], LayerControlComponent);
    return LayerControlComponent;
}());
exports.LayerControlComponent = LayerControlComponent;

});

var layerControl_component$1 = unwrapExports(layerControl_component);
var layerControl_component_1 = layerControl_component.LayerControlComponent;

var themeNavbar_component = createCommonjsModule(function (module, exports) {
"use strict";
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });


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
    __decorate([
        core.Input(),
        __metadata("design:type", mapWald.Catalog)
    ], ThemeNavbarComponent.prototype, "catalog", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Boolean)
    ], ThemeNavbarComponent.prototype, "includeSearch", void 0);
    __decorate([
        core.Output(),
        __metadata("design:type", core.EventEmitter)
    ], ThemeNavbarComponent.prototype, "layerSelected", void 0);
    ThemeNavbarComponent = __decorate([
        core.Component({
            selector: 'theme-navbar',
            template: "<ul class=\"navbar-nav\">\n  <li class=\"nav-item\" ngbDropdown *ngFor=\"let theme of catalog?.themes\">\n    <a class=\"nav-link\" ngbDropdownToggle href=\"#\"><i class=\"fa\" [ngClass]=\"theme.icon\"></i></a>\n    <div ngbDropdownMenu class=\"dropdown-menu\">\n      <a class=\"dropdown-item\" href=\"#\" (click)=\"layerClick($event,layer,'replace')\" *ngFor=\"let layer of theme.layers\">\n        <div>\n          <span>{{layer.name}}</span>\n          <span class=\"float-right layer-select-icons\">\n            <i class=\"fa fa-map layer-select-icon discrete-icon\"\n               (click)=\"layerClick($event,layer,'replace')\"\n               placement=\"right\"\n               ngbTooltip=\"Map this layer. (Replace any existing layers)\"></i>\n            <br/>\n            <i class=\"fa fa-plus layer-select-icon discrete-icon\"\n               (click)=\"layerClick($event,layer,'add')\"\n               placement=\"right\"\n               ngbTooltip=\"Add this layer to the map.\"></i>\n          </span>\n        </div>\n      </a>\n    </div>\n  </li>\n</ul>\n\n<!--\n\n[ng-reflect-ngb-tooltip].yellow + .tooltip {\n    background-color: yellow;\n}\n-->",
            styles: ["\n.layer-select-icons{\n  font-size:0.75em;\n  margin-right:-20px;\n}\n\n/* Annoying... using /deep/ to access the child component\n * but /deep/ (and synonyms) are deprecated. Not clear what\n * we should be doing\n */\n/deep/ .tooltip-inner {\n  width: 400px;\n}\n\n.dropdown-item{\n  border-bottom: 1px solid #aaa;\n  height: 40px;\n}\n"]
        }),
        __metadata("design:paramtypes", [])
    ], ThemeNavbarComponent);
    return ThemeNavbarComponent;
}());
exports.ThemeNavbarComponent = ThemeNavbarComponent;

});

var themeNavbar_component$1 = unwrapExports(themeNavbar_component);
var themeNavbar_component_1 = themeNavbar_component.ThemeNavbarComponent;

var geocoding_service = createCommonjsModule(function (module, exports) {
"use strict";
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });



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
    GeocodingService.ctorParameters = function () { return [
        { type: core$1.MapsAPILoader }
    ]; };
    GeocodingService = __decorate([
        core.Injectable(),
        __metadata("design:paramtypes", [core$1.MapsAPILoader])
    ], GeocodingService);
    return GeocodingService;
}());
exports.GeocodingService = GeocodingService;

});

var geocoding_service$1 = unwrapExports(geocoding_service);
var geocoding_service_1 = geocoding_service.GeocodingService;

var esm5 = createCommonjsModule(function (module, exports) {
"use strict";
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });




































__export(wmsLayer_component);
__export(mapLegend_component);
__export(dateShifter_component);
__export(oneTimeSplash_component);
__export(dateElement_component);
__export(shareView_component);
__export(locationSearch_component);
__export(zoomLayer_component);
__export(zoomFull_component);
__export(zoomOut_component);
__export(zoomIn_component);
__export(cycleBaseMap_component);
__export(cycleOpacity_component);
__export(buttonBar_component);
__export(timeseriesChart_component);
__export(featureTable_component);
__export(collapsibleMapControl_component);
__export(baseMapSelection_component);
__export(simpleTreeNode_component);
__export(simpleTree_component);
__export(catalog_component);
__export(dateSelection_component);
__export(layerProperties_component);
__export(layerControl_component);
__export(layeredMap_component);
__export(themeNavbar_component);
__export(mapControl_component);
__export(geocoding_service);
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
    MapWaldBootstrapModule_1 = MapWaldBootstrapModule;
    MapWaldBootstrapModule.forRoot = function (moduleInitialisation) {
        return {
            ngModule: MapWaldBootstrapModule_1,
            providers: services
        };
    };
    var MapWaldBootstrapModule_1;
    MapWaldBootstrapModule = MapWaldBootstrapModule_1 = __decorate([
        core.NgModule({
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
        })
    ], MapWaldBootstrapModule);
    return MapWaldBootstrapModule;
}());
exports.MapWaldBootstrapModule = MapWaldBootstrapModule;

});

var index = unwrapExports(esm5);
var esm5_1 = esm5.MapWaldBootstrapModule;

var mapWaldVisual = createCommonjsModule(function (module, exports) {
"use strict";
/**
 * Generated bundle index. Do not edit.
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(esm5);

});

var mapWaldVisual$1 = unwrapExports(mapWaldVisual);

export default mapWaldVisual$1;
//# sourceMappingURL=map-wald-visual.js.map
