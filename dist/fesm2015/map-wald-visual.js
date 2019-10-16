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



let WMSLayerComponent = class WMSLayerComponent {
    constructor(_wmsService, _wrapper) {
        this._wmsService = _wmsService;
        this._wrapper = _wrapper;
        this.opacity = 1.0;
        this.position = 0;
        this.zoom = 4;
        this.building = false;
    }
    buildMap() {
        if (this.building)
            return;
        this.building = true;
        this._wrapper.getNativeMap().then((theMap) => {
            this.building = false;
            this.map = theMap;
            this.overlay = this._wmsService.buildImageMap(() => this.map, (z) => this.url + '?', (z) => this.params, () => this.opacity);
            if (this.map.overlayMapTypes.length > this.position) {
                this.map.overlayMapTypes.removeAt(this.position);
                this.map.overlayMapTypes.insertAt(this.position, this.overlay);
            }
            else {
                while (this.map.overlayMapTypes.length <= this.position) {
                    // Temporarily add replicate layers.
                    // These should be replaced by other wms-layer components
                    this.map.overlayMapTypes.push(this.overlay);
                }
            }
        }).catch((e) => console.log(e));
    }
    ngOnInit() {
        if (this.url) {
            this.buildMap();
        }
    }
    ngOnChanges(changes) {
        if (this.url) {
            this.buildMap();
        }
        // let currentOpacity: number = changes.opacity.currentValue;
        // let previousOpacity: number = changes.opacity.previousValue;
        // if (currentOpacity !== previousOpacity) {
        //   console.log('building a map off my own bat');
        //   this.buildMap();
        // }
    }
    ngOnDestroy() {
        this._wrapper.getNativeMap().then((theMap) => {
            if (this.map.overlayMapTypes.length > this.position) {
                this.map.overlayMapTypes.removeAt(this.position);
            }
        });
    }
};
WMSLayerComponent.ctorParameters = () => [
    { type: mapWald.WMSService },
    { type: core$1.GoogleMapsAPIWrapper }
];
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


let MapLegendComponent = class MapLegendComponent {
    constructor(_palettes) {
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
    set cbPalette(cbp) {
        this._cbPalette = cbp;
        this.generatePalette();
    }
    get cbPalette() { return this._cbPalette; }
    set cbCount(cbc) {
        this._cbCount = cbc;
        this.generatePalette();
    }
    get cbCount() { return this._cbCount; }
    set cbReverse(cbr) {
        this._cbReverse = cbr;
        this.generatePalette();
    }
    get cbReverse() { return this._cbReverse; }
    set cbRange(cbr) {
        this._cbRange = cbr;
        this.generatePalette();
    }
    get cbRange() { return this._cbRange; }
    generateLabels(count) {
        if (!this._cbRange || !count) {
            return null;
        }
        var delta = (this._cbRange[1] - this._cbRange[0]) / (count - 1);
        var result = [];
        var lower = this._cbRange[0];
        let decimalPlaces = Math.max(0, 2 - (+Math.log10(this._cbRange[1] - this._cbRange[0]).toFixed()));
        decimalPlaces = Math.min(decimalPlaces, 10);
        var upper;
        for (let i = 1; i < count; i++) {
            upper = this._cbRange[0] + i * delta;
            result.push(`${this.formatValue(lower, decimalPlaces)}-${this.formatValue(upper, decimalPlaces)}`);
            lower = upper;
        }
        result.push('&ge;' + this._cbRange[1]);
        result.reverse();
        return result;
    }
    generatePalette() {
        if (!this._cbPalette || !this._cbCount) {
            return;
        }
        this._palettes.getPalette(this._cbPalette, this._cbReverse, this._cbCount)
            .subscribe(palette => {
            this.colours = palette.slice().reverse();
            this.generatedLabels = this.labels || this.generateLabels(this.colours.length) || palette;
        });
    }
    ngOnInit() { }
};
MapLegendComponent.ctorParameters = () => [
    { type: mapWald.PaletteService }
];
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
        template: `<div class="map-legend panel panel-group">

<strong>{{title}} <span *ngIf="mapUnits" [innerHTML]="'('+mapUnits+')'"></span>
        <span *ngIf="helpText"
              [ngbTooltip]="helpText"
              [placement]="tooltipPlacement"
              container="body">
          <i class="fa fa-info-circle"></i>
        </span>
</strong>

  <div *ngIf="!imageURL">
    <div style="display:table;line-height:15px">
      <div style="display:table-row;padding:0;"
          *ngFor="let colour of colours; let i=index">
        <div class="legend-colour">
          <i class="legend-entry" [ngStyle]="{background:colour}"></i>
        </div>
        <div class="legend-label">
          <span [innerHTML]="generatedLabels[i]"></span>
        </div>
      </div>
    </div>
  </div>

  <div *ngIf="imageURL">
    <img [src]="imageURL">
  </div>
  <p *ngIf="attributionLink">Source: <a [href]="attributionLink">{{attribution || 'details'}}</a></p>
  <p *ngIf="attribution&&!attributionLink">Source: {{attribution}}</p>
</div>
`,
        styles: [`
.map-legend{
  display:block;
  background: white;
}

.legend-colour{
  display:table-cell;
  padding:0px;
}

.legend-label{
  display:table-cell;
  padding:0px 4px 2px 2px;
  font-size:10px;
  vertical-align:middle;
}

.legend-entry {
  float: left;
  width: 15px !important;
  height: 15px !important;
}
`]
    }),
    __metadata("design:paramtypes", [mapWald.PaletteService])
], MapLegendComponent);
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


let MapControlComponent = class MapControlComponent {
    constructor(_el, _wrapper) {
        this._el = _el;
        this._wrapper = _wrapper;
        this.position = 'TOP_RIGHT';
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this._wrapper.getNativeMap().then((m) => {
            let content = this._el.nativeElement.querySelector('.map-control-content');
            // If content of the map control is not already wrapped in a div, do it
            // now.
            if (content.nodeName !== "DIV") {
                let controlDiv = document.createElement('div');
                controlDiv.appendChild(content);
                content = controlDiv;
            }
            m.controls[window.google.maps.ControlPosition[this.position]].push(content);
        });
    }
};
MapControlComponent.ctorParameters = () => [
    { type: core.ElementRef },
    { type: core$1.GoogleMapsAPIWrapper }
];
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
        template: `<div #mapControl class="map-control-content">
  <ng-content></ng-content>
</div>
`,
        styles: [`.map-control-content{
  background: transparent;
}
`]
    }),
    __metadata("design:paramtypes", [core.ElementRef, core$1.GoogleMapsAPIWrapper])
], MapControlComponent);
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

let DateShifterComponent = class DateShifterComponent {
    constructor() {
        this.interval = 2000;
        this.limits = null;
        this.date = new Date();
        this.dateChange = new core.EventEmitter();
        this.value = 0;
        this.label = '-';
        this.timer = 0;
        this.dateText = '-';
    }
    ngOnChanges(changes) {
        if (changes.interval) {
            this.startTimer();
        }
    }
    startTimer() {
        if (this.timer) {
            clearInterval(this.timer);
        }
        this.timer = window.setInterval(() => this.tick(), this.interval);
    }
    ngAfterViewInit() {
        this.startTimer();
    }
    reset() {
        this.value = 0;
        this.sliderMoved();
    }
    tick() {
        if (!this.value) {
            return;
        }
        let sign = this.value < 0 ? -1 : 1;
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
    }
    setDateText() {
        this.dateText = this.date.toLocaleDateString();
    }
    sliderMoved() {
        this.setLabel();
    }
    setLabel() {
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
        template: `<div>
  <h3>{{dateText}}</h3>
  <input type="range"
         class="form-control"
         min="-4"
         [max]="4"
         step="1"
         [(ngModel)]="value"
         (ngModelChange)="sliderMoved()"
         (mouseup)="reset()">
  <h4>{{label}}</h4>
</div>

  `,
        styles: [``]
    }),
    __metadata("design:paramtypes", [])
], DateShifterComponent);
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



let OneTimeSplashComponent = class OneTimeSplashComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.label = 'About';
        this.hideMessage = 'Understood, I don’t need to see this again';
    }
    storageKey() {
        if (!this.application) {
            return null;
        }
        return this.application + '-splash-skip';
    }
    ngAfterViewInit() {
        setTimeout(() => {
            const key = this.storageKey();
            if (key) {
                this.doNotShow = store.get(key, false);
            }
            if (!this.doNotShow) {
                this.show();
            }
        });
    }
    show() {
        this.current = this.modalService.open(this.splashTemplate, {
            size: 'lg',
            windowClass: this.klass
        });
    }
    close() {
        if (!this.current) {
            return;
        }
        this.current.close();
        this.current = null;
    }
    doNotShowClicked() {
        const key = this.storageKey();
        if (!key) {
            return;
        }
        store.set(key, this.doNotShow);
    }
};
OneTimeSplashComponent.ctorParameters = () => [
    { type: ngBootstrap.NgbModal }
];
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
        template: `<ng-template #splashTemplate let-c="close" let-d="dismiss">
  <div class="modal-header">
    <h4 class="modal-title">
      {{label}}</h4>
    <button type="button" class="close" aria-label="Close" (click)="d('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <ng-content></ng-content>
  </div>
  <div class="modal-footer">
    <label *ngIf="application">
      <input type="checkbox" [(ngModel)]="doNotShow" (ngModelChange)="doNotShowClicked()">
      &nbsp; {{hideMessage}}
    </label>
    <button type="button" class="btn btn-secondary" (click)="c('Close click')">Close</button>
  </div>
  </ng-template>
`,
        styles: [``]
    }),
    __metadata("design:paramtypes", [ngBootstrap.NgbModal])
], OneTimeSplashComponent);
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

let DateElementComponent = class DateElementComponent {
    constructor() {
        this.step = 1;
        this.changed = new core.EventEmitter();
    }
    ngAfterViewInit() {
    }
    move(n) {
        this.src[this.property] += n;
        this.changed.emit(this.src);
    }
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
        template: `<div class="row no-gutters">
  <div class="col-4">{{label}}</div>
  <div class="col-2">
    <button class="btn btn-secondary btn-sm" (click)="move(-step)">
      <i class="fa fa-angle-left"></i>
    </button>
  </div>
  <div class="col-4"><button class="btn btn-link btn-sm">{{src[property]}}</button></div>
  <div class="col-2">
    <button class="btn btn-secondary btn-sm" (click)="move(step)">
      <i class="fa fa-angle-right"></i>
    </button>
  </div>
</div>
`
    }),
    __metadata("design:paramtypes", [])
], DateElementComponent);
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

let ShareViewComponent = class ShareViewComponent {
    constructor() {
    }
    ngAfterViewInit() {
    }
};
ShareViewComponent = __decorate([
    core.Component({
        selector: 'share-view',
        template: `<button class="btn btn-secondary btn-sm"
        ngbTooltip="Share current view"
        placement="right"
        [disabled]="true"
><i class="fa fa-share-alt"></i></button>
`
    }),
    __metadata("design:paramtypes", [])
], ShareViewComponent);
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

let LocationSearchComponent = class LocationSearchComponent {
    constructor() {
    }
    ngAfterViewInit() {
    }
};
LocationSearchComponent = __decorate([
    core.Component({
        selector: 'location-search',
        template: `<button class="btn btn-secondary btn-sm"
        ngbTooltip="Location search"
        placement="right"
        [disabled]="true"

><i class="fa fa-search"></i></button>
`
    }),
    __metadata("design:paramtypes", [])
], LocationSearchComponent);
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




let LayeredMapComponent = class LayeredMapComponent {
    constructor(_zone, staticData, metadata) {
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
    ngOnChanges(changes) {
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
                this.infoWindows.forEach((w, i) => {
                    this._zone.runOutsideAngular(() => w.close());
                });
            }
            setTimeout(() => {
                // Check and open relevant info windows...
                this.infoWindows.forEach((w, i) => {
                    let m = this.markers[i];
                    if (m.open) {
                        this._zone.runOutsideAngular(() => w.open());
                    }
                    else {
                        this._zone.runOutsideAngular(() => w.close());
                    }
                });
            });
        }
        if (changes.bounds) {
            setTimeout(() => this._bounds = this.bounds);
        }
    }
    ngAfterViewInit() {
    }
    layersChanged(changes) {
    }
    layerAdded(selection) {
        var ex = this.layers.find(l => l.layer === selection.layer);
        if (ex) {
            return;
        }
        var mapped = new mapWald.MappedLayer();
        mapped.layer = selection.layer;
        mapped.layerType = 'wms';
        mapped.options.legend = true;
        if (selection.layer.options.vectors) {
            this.staticData.get(selection.layer.options.host, selection.layer.options.filepath).subscribe((data) => {
                mapped.staticData = data;
                this.activateLayer(mapped, selection);
            });
        }
        else {
            this.activateLayer(mapped, selection);
        }
    }
    activateLayer(mapped, selection) {
        mapped.update();
        if (selection.action === 'replace') {
            if (selection.filter) {
                this.layers = this.layers.filter(ml => !selection.filter(ml));
            }
            else {
                this.layers = [];
            }
        }
        this.layers = [mapped].concat(this.layers);
        this.setLayerPositions();
        this.layersChange.emit(this.layers);
    }
    setLayerPositions() {
        let ix = 0;
        for (var i = this.layers.length - 1; i >= 0; i--) {
            if (this.layers[i].layerType === 'wms') {
                this.layers[i].options.position = ix;
                ix++;
            }
        }
    }
    extractFeature(f) {
        var geo = f.getGeometry();
        geo = {
            type: 'Point',
            coordinates: geo.get(0)
        };
        var props = {};
        f.forEachProperty((val, prop) => props[prop] = val);
        return {
            type: 'Feature',
            geometry: geo,
            properties: props
        };
    }
    clicked(event) {
        var feature = this.extractFeature(event.feature);
        this.selectedFeature = feature;
        this.featureSelected.emit({ feature: feature });
    }
    circleClicked(ml, feature) {
        this.selectedFeature = feature;
        this.featureSelected.emit({ feature: feature, layer: ml });
    }
    mapClick(event) {
        var coords = event.coords;
        this.pointSelected.emit(coords);
    }
    zoomToBounds(bounds) {
        this._bounds = bounds;
    }
    zoomChanged() {
        this.layers = this.layers.slice();
    }
};
LayeredMapComponent.ctorParameters = () => [
    { type: core.NgZone },
    { type: mapWald.StaticDataService },
    { type: mapWald.MetadataService }
];
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
        template: `<agm-map #theMap
[(latitude)]="lat"
[(longitude)]="lng"
[(zoom)]="zoom"
(zoomChange)="zoomChanged()"
[disableDefaultUI]="false"
[zoomControl]="false"
[mapTypeId]="mapTypeId"
[mapTypeControl]="showMapType"
[mapTypeControlOptions]="mapTypeOptions"
[streetViewControl]="streetViewControl"
scaleControl="true"
[fitBounds]="_bounds"
(mapClick)="mapClick($event)">

<agm-marker *ngFor="let marker of markers"
            [longitude]="marker.loc.lng"
            [latitude]="marker.loc.lat"
            [iconUrl]="marker.iconUrl">
  <agm-info-window #infoWindows [disableAutoPan]="true">
    <strong>{{marker.value}}</strong>
  </agm-info-window>
</agm-marker>

<ng-container *ngFor="let mp of layers.slice()|reverse; let i = index" [ngSwitch]="mp.layerType">
  <wms-layer *ngSwitchCase="'wms'"
    [url]="mp.url"
    [params]="mp.wmsParameters"
    [opacity]="mp.opacity"
    [position]="mp.options.position">
  </wms-layer>
  <agm-data-layer *ngSwitchCase="'vector'"
                [geoJson]="mp.staticData"
                [style]="mp._styleFunc"
                (layerClick)="clicked($event)"

                >
  </agm-data-layer>

  <ng-container *ngSwitchCase="'circle'">
    <agm-circle *ngFor="let f of mp.staticData.features; let j=index"
                [latitude]="f.geometry.coordinates[1]"
                [longitude]="f.geometry.coordinates[0]"
                [radius]="10000000/(zoom*zoom*zoom*zoom)"
                [fillColor]="mp.flattenedSettings?.styles?.fillColor||'black'"
                [fillOpacity]="mp.flattenedSettings?.styles?.fillOpacity||1"
                [strokeColor]="mp.flattenedSettings?.styles?.strokeColor||'black'"
                [strokeOpacity]="mp.flattenedSettings?.styles?.strokeOpacity||1"
                [strokePosition]="0"
                [strokeWeight]="(f===selectedFeature)?3:(mp.flattenedSettings?.styles?.strokeWeight||0.5)"
                (circleClick)="circleClicked(mp,f)"
                >
    </agm-circle>
  </ng-container>

  <!--
  -->
</ng-container>

<!-- for map controls -->
<map-control position="TOP_CENTER">
    <ng-content select=".map-control.top-center"></ng-content>
</map-control>

<map-control position="TOP_LEFT">
    <ng-content select=".map-control.top-left"></ng-content>
</map-control>

<map-control position="TOP_RIGHT">
    <ng-content select=".map-control.top-right"></ng-content>
</map-control>

<map-control position="LEFT_TOP">
    <ng-content select=".map-control.left-top"></ng-content>
</map-control>

<map-control position="RIGHT_TOP">
    <ng-content select=".map-control.right-top"></ng-content>
</map-control>

<map-control position="LEFT_CENTER">
    <ng-content select=".map-control.left-center"></ng-content>
</map-control>

<map-control position="RIGHT_CENTER">
    <ng-content select=".map-control.right-center"></ng-content>
</map-control>

<map-control position="LEFT_BOTTOM">
    <ng-content select=".map-control.left-bottom"></ng-content>
</map-control>

<map-control position="RIGHT_BOTTOM">
    <ng-content select=".map-control.right-bottom"></ng-content>
</map-control>

<map-control position="BOTTOM_CENTER">
    <ng-content select=".map-control.bottom-center"></ng-content>
</map-control>

<map-control position="BOTTOM_LEFT">
    <ng-content select=".map-control.bottom-left"></ng-content>
</map-control>

<map-control position="BOTTOM_RIGHT">
    <ng-content select=".map-control.bottom-right"></ng-content>
</map-control>

</agm-map>

`
    }),
    __metadata("design:paramtypes", [core.NgZone,
        mapWald.StaticDataService,
        mapWald.MetadataService])
], LayeredMapComponent);
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



let ZoomLayerComponent = class ZoomLayerComponent {
    constructor() {
    }
    ngAfterViewInit() {
    }
    zoomToLayer() {
        if (this.layer.layer.spatialExtent) {
            console.log('Zoom to layer');
            this.layer.layer.spatialExtent.subscribe(b => {
                this.map.zoomToBounds(Object.assign({}, b));
            });
        }
        else {
            console.log('Zoom full');
            this.map.zoomToBounds(Object.assign({}, this.fullBounds));
        }
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
        template: `<button type="button" [disabled]="!layer" class="btn btn-secondary btn-sm"
        ngbTooltip="Zoom to selected layer"
        placement="right"
        (click)="zoomToLayer()"
><i class="fa fa-compress"></i>
</button>
`
    }),
    __metadata("design:paramtypes", [])
], ZoomLayerComponent);
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


let ZoomFullComponent = class ZoomFullComponent {
    constructor() {
    }
    ngAfterViewInit() {
    }
    zoomToBounds() {
        this.map.zoomToBounds(Object.assign({}, this.bounds));
    }
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
        template: `<button class="btn btn-secondary btn-sm"
        ngbTooltip="Zoom to full extent"
        placement="right"
        (click)="zoomToBounds()"
><i class="fa fa-arrows-alt"></i></button>
`
    }),
    __metadata("design:paramtypes", [])
], ZoomFullComponent);
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


let ZoomOutComponent = class ZoomOutComponent {
    constructor() {
        this.minZoom = 1;
    }
    ngAfterViewInit() {
    }
    zoomOut() {
        if (!this.map) {
            return;
        }
        this.map.zoom = Math.max(this.minZoom, this.map.zoom - 1);
    }
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
        template: `<button class="btn btn-secondary btn-sm"
        ngbTooltip="Zoom out"
        placement="right"
        (click)="zoomOut()"
><i class="fa fa-minus"></i></button>`
    }),
    __metadata("design:paramtypes", [])
], ZoomOutComponent);
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


let ZoomInComponent = class ZoomInComponent {
    constructor() {
        this.maxZoom = 32;
    }
    ngAfterViewInit() {
    }
    zoomIn() {
        if (!this.map) {
            return;
        }
        this.map.zoom = Math.min(this.maxZoom, this.map.zoom + 1);
    }
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
        template: `<button class="btn btn-secondary btn-sm"
        ngbTooltip="Zoom in"
        placement="right"
        (click)="zoomIn()"
><i class="fa fa-plus"></i></button>`
    }),
    __metadata("design:paramtypes", [])
], ZoomInComponent);
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


let CycleBaseMapComponent = class CycleBaseMapComponent {
    constructor() {
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
    ngAfterViewInit() {
    }
    ngOnChanges(changes) {
        if (this.baseLayers && !this.baseLayer) {
            this.baseLayer = this.baseLayers[0];
        }
    }
    toggleBaseLayer() {
        if (!this.map) {
            return;
        }
        let current = this.baseLayers.findIndex(l => l.map_type_id === this.baseLayer.map_type_id);
        let next = (current + 1) % this.baseLayers.length;
        this.baseLayer = this.baseLayers[next];
        this.map.mapTypeId = this.baseLayer ?
            this.baseLayer.map_type_id :
            null;
    }
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
        template: `<button class="btn btn-secondary btn-sm" (click)="toggleBaseLayer()" [ngbTooltip]="tooltip"
                     placement="right">
  <i class="fa" [ngClass]="baseLayer?.label==='Road Map'?'fa-road':'fa-globe'"></i>
</button>`
    }),
    __metadata("design:paramtypes", [])
], CycleBaseMapComponent);
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


let CycleOpacityComponent = class CycleOpacityComponent {
    constructor() {
        this.maxZoom = 32;
        this.tooltip = 'Adjust transparency of grid layer';
        this.layerOpacity = 1.0;
        this.step = 0.4;
    }
    ngAfterViewInit() {
    }
    ngOnChanges(changes) {
        if (this.map) {
            this.map.layersChange.subscribe(() => this.updateLayers());
        }
    }
    cycleTransparency() {
        this.layerOpacity -= this.step;
        if (this.layerOpacity < 0) {
            this.layerOpacity = 1.0;
        }
        this.updateLayers();
    }
    updateLayers() {
        this.map.layers.forEach(l => l.opacity = this.layerOpacity);
    }
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
        template: `<button class="btn btn-secondary btn-sm"
                     (click)="cycleTransparency()"
                     [ngbTooltip]="tooltip"
                     placement="right">
<i class="fa" [ngClass]="(layerOpacity<0.5)?'fa-circle-o':((layerOpacity<0.9)?'fa-adjust':'fa-circle')"></i>
</button>`
    }),
    __metadata("design:paramtypes", [])
], CycleOpacityComponent);
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

let ButtonBarComponent = class ButtonBarComponent {
    constructor() {
    }
    ngAfterViewInit() {
    }
};
ButtonBarComponent = __decorate([
    core.Component({
        selector: 'button-bar',
        template: `<div class="button-bar bb-vertical">
  <ng-content></ng-content>
</div>

`,
        styles: [`
`]
    }),
    __metadata("design:paramtypes", [])
], ButtonBarComponent);
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
let TimeseriesChartComponent = class TimeseriesChartComponent {
    constructor(_element) {
        this._element = _element;
        this.timeSeries = [];
        this.marginLeft = 40;
        this.marginRight = 10;
        this.marginTop = 0;
        this.marginBottom = 20;
        this.titlefont = undefined;
    }
    ngAfterViewInit() {
        this.draw();
    }
    ngOnChanges(changes) {
        this.draw();
    }
    draw() {
        var node = this._element.nativeElement.querySelector('.our-chart');
        plotlyBasic.purge(node);
        if (!this.timeSeries || !this.timeSeries.length) {
            return;
        }
        const seriesUnits = this.timeSeries.map(ts => ts.units);
        let commonUnits;
        if (seriesUnits.every(u => u === seriesUnits[0])) {
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
        plotlyBasic.plot(node, this.timeSeries.map(ts => {
            const nonNullCount = ts.values.filter(v => !isNaN(v)).length;
            const mode = ((ts.style !== 'bar') && (nonNullCount < 365)) ?
                'lines+markers' :
                undefined;
            const suffix = commonUnits ? '' : ` (${ts.units})`;
            return {
                type: (ts.style === 'bar') ? 'bar' : undefined,
                mode: mode,
                x: ts.dates,
                y: ts.values,
                name: ts.label + suffix
            };
        }), layout);
    }
};
TimeseriesChartComponent.ctorParameters = () => [
    { type: core.ElementRef }
];
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
        template: `<div class="our-chart">
</div>
`
    }),
    __metadata("design:paramtypes", [core.ElementRef])
], TimeseriesChartComponent);
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

let FeatureTableComponent = class FeatureTableComponent {
    constructor() {
        this.styles = {};
        this._keys = Object.keys;
    }
    ngAfterViewInit() {
    }
    ngOnChanges(changes) {
        if (!this.styles) {
            this.styles = {};
        }
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
        template: `<table *ngIf="feature" class="table table-striped table-sm feature-table">
  <thead>
    <tr>
      <td><strong>Property</strong></td>
      <td><strong>Value</strong></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Geometry</strong></td>
      <td>{{feature.geometry.type}}</td>
    </tr>
    <tr *ngFor="let prop of _keys(feature.properties)">
      <td><strong>{{prop}}</strong></td>
      <td *ngIf="!styles||!styles[prop]">{{feature.properties[prop]}}</td>
      <td *ngIf="styles&&styles[prop]">
        <a *ngIf="styles[prop].hyperlink" target="_blank" [href]="feature.properties[prop]">
          {{feature.properties[prop]}}
        </a>
      </td>
    </tr>
  </tbody>
</table>`,
        styles: [`.feature-table{
  max-width:300px;
}`]
    }),
    __metadata("design:paramtypes", [])
], FeatureTableComponent);
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

let CollapsibleMapControlComponent = class CollapsibleMapControlComponent {
    constructor() {
    }
    ngAfterViewInit() {
    }
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
        template: `<div class="card map-control collapsible-control">
    <a (click)="isCollapsed = !isCollapsed">
      <div class="card-header">
        <h6 class="mb-0">
          {{heading}}
          <span *ngIf="isCollapsed" class="float-right fa fa-caret-up
            collapse-arrow" aria-hidden="true"></span>
          <span *ngIf="!isCollapsed" class="float-right fa fa-caret-down
            collapse-arrow" aria-hidden="true"></span>
        </h6>
      </div>
    </a>

    <div class="ngbCollapse" [ngbCollapse]="isCollapsed">
      <ng-content></ng-content>
    </div>
  </div>
`,
        styles: [`.collapsible-control{
  margin:3px;
}`]
    }),
    __metadata("design:paramtypes", [])
], CollapsibleMapControlComponent);
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

let BaseMapSelectionComponent = class BaseMapSelectionComponent {
    constructor() {
    }
    ngAfterViewInit() {
    }
};
BaseMapSelectionComponent = __decorate([
    core.Component({
        selector: 'base-map-selection',
        template: `<p>base-map-selection Component</p>`
    }),
    __metadata("design:paramtypes", [])
], BaseMapSelectionComponent);
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

let SimpleTreeNodeComponent = class SimpleTreeNodeComponent {
    constructor() {
        this.options = {};
        this.nodeSelected = new core.EventEmitter();
    }
    ngOnChanges(changes) {
        this.evalState();
    }
    ngAfterViewInit() {
    }
    treeClick(event) {
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
    }
    evalState() {
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
        template: `<a href="#"
                (click)="treeClick($event)"
                [ngClass]="tree.klass"><i [ngClass]="icon"></i>
  &nbsp;
  <span ngbTooltip="{{tree.tooltip | async}}"
        placement="right"
        container="body">{{tree.label}}</span>
  <span *ngIf="tree.actions"
        class="float-right">
      &nbsp;
      <i *ngFor="let a of tree.actions"
       [ngClass]="a.icon"
       ngbTooltip="{{a.tooltip | async}}"
       placement="right"
       container="body"
       (click)="a.action(tree)">&nbsp;</i>
  </span>
</a>
`
    })
], SimpleTreeNodeComponent);
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

let SimpleTreeComponent = class SimpleTreeComponent {
    constructor() {
        this.showTop = true;
        this.collapsedIcon = 'fa fa-caret-right';
        this.expandedIcon = 'fa fa-caret-down';
        this.leafIcon = 'fa fa-minus';
        this.nodeSelected = new core.EventEmitter();
        this.options = {};
    }
    ngAfterViewInit() {
    }
    ngOnChanges(changes) {
        if (changes.options) {
            return;
        }
        this.options = {
            collapsedIcon: this.collapsedIcon,
            expandedIcon: this.expandedIcon,
            leafIcon: this.leafIcon
        };
    }
    childSelected(node) {
        this.nodeSelected.emit(node);
    }
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
        template: `<div *ngIf="tree&&tree.visible" class="simple-tree">

  <div *ngIf="inner">
    <li ><simple-tree-node [tree]="tree"
                           [options]="options"
                           (nodeSelected)="childSelected($event)"></simple-tree-node>
      <ul *ngIf="tree.children&&tree.expanded" class="inner-list">
        <simple-tree *ngFor="let t of tree.children" [tree]="t" [inner]="true"
                    (nodeSelected)="childSelected($event)"
                    [options]="options"></simple-tree>
      </ul>
    </li>
  </div>

  <div *ngIf="!inner&&showTop">
    <ul class="outer-list">
      <li><simple-tree-node [tree]="tree" [options]="options"
        (nodeSelected)="childSelected($event)"></simple-tree-node>
        <ul *ngIf="tree.children&&tree.expanded" class="inner-list">
            <simple-tree *ngFor="let t of tree.children" [tree]="t" [inner]="true"
            (nodeSelected)="childSelected($event)"
            [options]="options"></simple-tree>
        </ul>
      </li>
    </ul>
  </div>

  <div *ngIf="!inner&&!showTop">
      <ul *ngIf="tree.children&&tree.expanded" class="outer-list">
          <simple-tree *ngFor="let t of tree.children" [tree]="t" [inner]="true"
          (nodeSelected)="childSelected($event)"
          [options]="options"></simple-tree>
      </ul>
    </div>

</div>
`,
        styles: [`
.simple-tree ul{
  list-style-type: none
}

ul.outer-list{
  padding-left:5px;
}

ul.inner-list{
  padding-left:15px;
}`]
    }),
    __metadata("design:paramtypes", [])
], SimpleTreeComponent);
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
Object.defineProperty(exports, "__esModule", { value: true });




let CatalogComponent = class CatalogComponent {
    constructor(filterService, metadata) {
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
    ngAfterViewInit() {
        if (this.catalog) {
            this.buildTree();
        }
    }
    ngOnChanges(changes) {
        if (changes.catalog && this.catalog) {
            this.filterText = '';
            this.buildTree();
            this.highlightLayers([], this.tree);
        }
    }
    buildTree() {
        let self = this;
        this.layers = [];
        var cat = this.catalog;
        var tree = {
            label: cat.name,
            expanded: true,
            visible: true,
        };
        var deferredLayers = cat.themes.map(t => t.layers.filter(l => l.path && !l.skip)).reduce((l, r) => l.concat(r), []);
        var deferredThemes = cat.themes.filter(t => t.path && !t.skip);
        const treeActions = this.layerActions.map(la => {
            return {
                icon: la.icon,
                tooltip: la.tooltip,
                action: (node) => this.layerClick(node.data, la.action)
            };
        });
        const layerToTree = (l) => {
            let result = {
                label: l.name,
                data: l,
                visible: true,
                actions: treeActions
            };
            const tmp = new mapWald.MappedLayer();
            tmp.layer = l;
            tmp.update();
            if (l.description) {
                result.tooltip = rxjs.of(l.description);
            }
            else {
                result.tooltip = this.metadata.getMetadata(tmp).pipe(operators.map(meta => meta[l.descriptionField || 'long_name']));
            }
            return result;
        };
        function themeToTree(t) {
            return {
                label: t.name,
                expanded: false,
                visible: true,
                children: t.layers.filter(l => !l.path && !l.skip)
                    .filter(l => self.showPlaceholders || !l.placeholder)
                    .map(layerToTree)
            };
        }
        tree.children = cat.themes.filter(t => !t.path && !t.skip).map(themeToTree);
        function findParent(path) {
            var components = path.split('/');
            var parent = tree;
            var index = -1;
            for (var component of components) {
                var split = component.split('@');
                component = split[0];
                index = -1;
                if (split.length > 1) {
                    index = +split[1];
                }
                var found = false;
                for (var n of parent.children) {
                    if (n.label === component) {
                        parent = n;
                        found = true;
                        break;
                    }
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
        deferredThemes.forEach(t => {
            var [parent, index] = findParent(t.path);
            addChild(parent, themeToTree(t), index);
        });
        deferredLayers.forEach(l => {
            var [parent, index] = findParent(l.path);
            addChild(parent, layerToTree(l), index);
        });
        this.tree = tree;
    }
    layerClick(l, action) {
        var selection = {
            layer: l,
            action: action
        };
        this.layerSelected.emit(selection);
    }
    nodeSelected(e) {
        if (!e.data) {
            return;
        }
        var layer = e.data;
        this.layerClick(layer, this.defaultAction);
    }
    activeLayers(layers) {
        this.highlightLayers(layers, this.tree);
    }
    highlightLayers(layers, tree) {
        tree.klass = null;
        if (tree.data && (layers.indexOf(tree.data) >= 0)) {
            tree.klass = 'active-layer';
            return true;
        }
        if (tree.children) {
            let activeChild = false;
            for (let i = 0; i < tree.children.length; i++) {
                activeChild = this.highlightLayers(layers, tree.children[i]) || activeChild;
            }
            if (activeChild) {
                tree.klass = 'active-child';
            }
            tree.klass = (tree.klass || '') + ' theme';
            return activeChild;
        }
        return false;
    }
};
CatalogComponent.ctorParameters = () => [
    { type: mapWald.TreeFilterService },
    { type: mapWald.MetadataService }
];
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
        template: `<div class="input-group">
  <span class="input-group-btn">
            <button class="btn" type="button" [disabled]="!filterText"
              (click)="filterText = ''">
            <i *ngIf="filterText"class="fa fa-times" aria-hidden="true"></i>
            <i *ngIf="!filterText"class="fa fa-search" aria-hidden="true"></i>
            </button>
  </span>
  <input #filterInput type="text" class="form-control" placeholder="Catalog search..."
  [(ngModel)]="filterText"/>
</div>

<simple-tree
  [tree]="this.filterService.filterTree(tree, filterText)"
  [showTop]="false"
  [leafIcon]="leafIcon"
  [collapsedIcon]="collapsedIcon"
  [expandedIcon]="expandedIcon"
  (nodeSelected)="nodeSelected($event)">
</simple-tree>
`,
        styles: [`
.node-name{
  font-size:1em;
}
`]
    }),
    __metadata("design:paramtypes", [mapWald.TreeFilterService, mapWald.MetadataService])
], CatalogComponent);
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


const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;
let DateSelectionComponent = class DateSelectionComponent {
    constructor(timeUtils) {
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
    ngAfterViewInit() {
    }
    ngOnChanges(changes) {
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
    }
    dateStructChanged() {
        this.date = new Date(Date.UTC(this.dateStruct.year, this.dateStruct.month - 1, this.dateStruct.day));
        // this.date.setUTCFullYear(this.dateStruct.year)
        // this.date.setUTCMonth(this.dateStruct.month-1)
        // this.date.setUTCDate(this.dateStruct.day);
        this.checkReference();
        this.dateChange.emit(this.date);
    }
    assessDateComponents() {
        this.need.day = this.need.month = this.need.year = true;
        if (this.timestep === 'daily') {
            return;
        }
        this.need.day = false;
        if (this.timestep === 'annual') {
            this.need.month = false;
        }
    }
    move(n) {
        this.date = new Date(this.date && this.date.getTime());
        this.date.setDate(this.date.getDate() + n);
        this.onDateChanged();
        this.dateChange.emit(this.date);
    }
    onDateChanged() {
        this.checkLimits();
    }
    checkLimits() {
        this.atMax = this.timeUtils.datesEqual(this.dateStruct, this.maxDateStruct);
        this.atMin = this.timeUtils.datesEqual(this.dateStruct, this.minDateStruct);
    }
    // TODO not enforcing limits etc...
    checkReference() {
        if (!this.referenceDate) {
            return;
        }
        let refComponents = mapWald.InterpolationService.interpolate(this.referenceDate, {
            year: this.date.getFullYear(),
            month: this.date.getMonth() + 1,
            date: this.date.getDate()
        }).split('-').map(s => +s);
        let currentRef = new Date(Date.UTC(refComponents[0], refComponents[1] - 1, refComponents[2]));
        console.log('currentRef', currentRef);
        console.log('currentDate', this.date);
        let timeSpan = MILLISECONDS_PER_DAY * this.stepDays;
        let days = (this.date.getTime() - currentRef.getTime()) / timeSpan;
        this.date = new Date(currentRef.getTime() + Math.round(days) * timeSpan);
        this.dateStruct = this.timeUtils.convertDate(this.date);
    }
};
DateSelectionComponent.ctorParameters = () => [
    { type: mapWald.TimeUtilsService }
];
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
        template: `<div class="date-control container-fluid">
  <div *ngIf="style!=='arrows'" class="row no-gutters">
    <div class="col-8 form-group-inline">
        <div class="input-group input-group-sm">
          <input class="form-control form-control-sm" placeholder="yyyy-mm-dd"
                 name="dp" [(ngModel)]="dateStruct" (ngModelChange)="dateStructChanged()"
                 ngbDatepicker #d="ngbDatepicker"
                 [maxDate]="maxDateStruct" [minDate]="minDateStruct">
          <div class="input-group-addon" (click)="d.toggle()" >
            <i class="fa fa-calendar"></i>
          </div>
        </div>
      </div>

    <!--
      <div class="col-2" >
        <button class="btn btn-secondary btn-sm" [disabled]="atMax"
                (click)="move(1)"><i class="fa fa-chevron-right"></i></button>
      </div>
    -->
  </div>

  <div *ngIf="style==='arrows'">
    <date-element *ngIf="need.day"   [src]="dateStruct" [property]="'day'" [label]="'Day'"
                  [step]="stepDays"
                  (changed)="dateStructChanged()"></date-element>
    <date-element *ngIf="need.month" [src]="dateStruct" [property]="'month'" [label]="'Month'"
                  (changed)="dateStructChanged()"></date-element>
    <date-element *ngIf="need.year"  [src]="dateStruct" [property]="'year'" [label]="'Year'"
                  (changed)="dateStructChanged()"></date-element>
  </div>
</div>
`
    }),
    __metadata("design:paramtypes", [mapWald.TimeUtilsService])
], DateSelectionComponent);
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



let LayerPropertiesComponent = class LayerPropertiesComponent {
    constructor(pointSelectionService) {
        this.pointSelectionService = pointSelectionService;
        this.getKeys = Object.keys;
        this.propertyChanged = new core.EventEmitter();
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
    { type: mapWald.PointSelectionService }
];
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
    __metadata("design:paramtypes", [mapWald.PointSelectionService])
], LayerPropertiesComponent);
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



let LayerControlComponent = class LayerControlComponent {
    constructor(metadata) {
        this.metadata = metadata;
        this.allowRemove = true;
        this.showLegends = true;
        this.allowReorder = true;
        this.layersChange = new core.EventEmitter();
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
};
LayerControlComponent.ctorParameters = () => [
    { type: mapWald.MetadataService }
];
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
`,
        styles: [`.layers-control{
  width:200px;
}


.layers-control-header, .layer-control{
  border-bottom: 1.5px solid #aaa;
}`]
    }),
    __metadata("design:paramtypes", [mapWald.MetadataService])
], LayerControlComponent);
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


let ThemeNavbarComponent = class ThemeNavbarComponent {
    constructor() {
        this.layerSelected = new core.EventEmitter();
    }
    ngAfterViewInit() {
    }
    layerClick(event, layer, action) {
        this.stop(event);
        var selection = {
            layer: layer,
            action: action
        };
        this.layerSelected.emit(selection);
    }
    stop(event) {
        event.preventDefault();
        event.stopPropagation();
    }
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
        template: `<ul class="navbar-nav">
  <li class="nav-item" ngbDropdown *ngFor="let theme of catalog?.themes">
    <a class="nav-link" ngbDropdownToggle href="#"><i class="fa" [ngClass]="theme.icon"></i></a>
    <div ngbDropdownMenu class="dropdown-menu">
      <a class="dropdown-item" href="#" (click)="layerClick($event,layer,'replace')" *ngFor="let layer of theme.layers">
        <div>
          <span>{{layer.name}}</span>
          <span class="float-right layer-select-icons">
            <i class="fa fa-map layer-select-icon discrete-icon"
               (click)="layerClick($event,layer,'replace')"
               placement="right"
               ngbTooltip="Map this layer. (Replace any existing layers)"></i>
            <br/>
            <i class="fa fa-plus layer-select-icon discrete-icon"
               (click)="layerClick($event,layer,'add')"
               placement="right"
               ngbTooltip="Add this layer to the map."></i>
          </span>
        </div>
      </a>
    </div>
  </li>
</ul>

<!--

[ng-reflect-ngb-tooltip].yellow + .tooltip {
    background-color: yellow;
}
-->`,
        styles: [`
.layer-select-icons{
  font-size:0.75em;
  margin-right:-20px;
}

/* Annoying... using /deep/ to access the child component
 * but /deep/ (and synonyms) are deprecated. Not clear what
 * we should be doing
 */
/deep/ .tooltip-inner {
  width: 400px;
}

.dropdown-item{
  border-bottom: 1px solid #aaa;
  height: 40px;
}
`]
    }),
    __metadata("design:paramtypes", [])
], ThemeNavbarComponent);
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



let GeocodingService = class GeocodingService {
    constructor(_api) {
        this._api = _api;
    }
    geocode(address, bnds) {
        var promise = new Promise((resolve, reject) => {
            this._api.load().then(() => {
                var service = new google.maps.Geocoder();
                service.geocode({
                    address: address,
                    componentRestrictions: {
                        country: 'AU'
                    },
                    region: 'AU'
                }, (results, status) => {
                    if (status !== google.maps.GeocoderStatus.OK) {
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
    }
};
GeocodingService.ctorParameters = () => [
    { type: core$1.MapsAPILoader }
];
GeocodingService = __decorate([
    core.Injectable(),
    __metadata("design:paramtypes", [core$1.MapsAPILoader])
], GeocodingService);
exports.GeocodingService = GeocodingService;

});

var geocoding_service$1 = unwrapExports(geocoding_service);
var geocoding_service_1 = geocoding_service.GeocodingService;

var esm2015 = createCommonjsModule(function (module, exports) {
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
var MapWaldBootstrapModule_1;
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
const components = [
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
const services = [
    //$serviceList
    geocoding_service.GeocodingService
];
let MapWaldBootstrapModule = MapWaldBootstrapModule_1 = class MapWaldBootstrapModule {
    static forRoot(moduleInitialisation) {
        return {
            ngModule: MapWaldBootstrapModule_1,
            providers: services
        };
    }
};
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
exports.MapWaldBootstrapModule = MapWaldBootstrapModule;

});

var index = unwrapExports(esm2015);
var esm2015_1 = esm2015.MapWaldBootstrapModule;

var mapWaldVisual = createCommonjsModule(function (module, exports) {
"use strict";
/**
 * Generated bundle index. Do not edit.
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(esm2015);

});

var mapWaldVisual$1 = unwrapExports(mapWaldVisual);

export default mapWaldVisual$1;
//# sourceMappingURL=map-wald-visual.js.map
