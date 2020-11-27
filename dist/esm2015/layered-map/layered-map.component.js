"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayeredMapComponent = void 0;
const core_1 = require("@angular/core");
const map_wald_1 = require("map-wald");
const core_2 = require("@agm/core");
const google_maps_types_1 = require("@agm/core/services/google-maps-types");
const i0 = require("@angular/core");
const i1 = require("map-wald");
const i2 = require("@agm/core");
const i3 = require("@angular/common");
const i4 = require("../map-control/map-control.component");
const i5 = require("../wms-layer/wms-layer.component");
const i6 = require("ngx-pipes");
const _c0 = ["infoWindows"];
function LayeredMapComponent_agm_marker_2_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 20);
} if (rf & 2) {
    const marker_r3 = i0.ɵɵnextContext().$implicit;
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
    const marker_r3 = ctx.$implicit;
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
    const mp_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("url", mp_r7.url)("params", mp_r7.wmsParameters)("opacity", mp_r7.opacity)("position", mp_r7.options.position);
} }
function LayeredMapComponent_ng_container_3_agm_data_layer_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "agm-data-layer", 26);
    i0.ɵɵlistener("layerClick", function LayeredMapComponent_ng_container_3_agm_data_layer_2_Template_agm_data_layer_layerClick_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.clicked($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const mp_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵstyleMap(mp_r7._styleFunc);
    i0.ɵɵproperty("geoJson", mp_r7.staticData);
} }
function LayeredMapComponent_ng_container_3_ng_container_3_agm_circle_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "agm-circle", 28);
    i0.ɵɵlistener("circleClick", function LayeredMapComponent_ng_container_3_ng_container_3_agm_circle_1_Template_agm_circle_circleClick_0_listener() { i0.ɵɵrestoreView(_r21); const f_r17 = ctx.$implicit; const mp_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.circleClicked(mp_r7, f_r17); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r17 = ctx.$implicit;
    const mp_r7 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r16 = i0.ɵɵnextContext();
    i0.ɵɵproperty("latitude", f_r17.geometry.coordinates[1])("longitude", f_r17.geometry.coordinates[0])("radius", 10000000 / (ctx_r16.zoom * ctx_r16.zoom * ctx_r16.zoom * ctx_r16.zoom))("fillColor", (mp_r7.flattenedSettings == null ? null : mp_r7.flattenedSettings.styles == null ? null : mp_r7.flattenedSettings.styles.fillColor) || "black")("fillOpacity", (mp_r7.flattenedSettings == null ? null : mp_r7.flattenedSettings.styles == null ? null : mp_r7.flattenedSettings.styles.fillOpacity) || 1)("strokeColor", (mp_r7.flattenedSettings == null ? null : mp_r7.flattenedSettings.styles == null ? null : mp_r7.flattenedSettings.styles.strokeColor) || "black")("strokeOpacity", (mp_r7.flattenedSettings == null ? null : mp_r7.flattenedSettings.styles == null ? null : mp_r7.flattenedSettings.styles.strokeOpacity) || 1)("strokePosition", 0)("strokeWeight", f_r17 === ctx_r16.selectedFeature ? 3 : (mp_r7.flattenedSettings == null ? null : mp_r7.flattenedSettings.styles == null ? null : mp_r7.flattenedSettings.styles.strokeWeight) || 0.5);
} }
function LayeredMapComponent_ng_container_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, LayeredMapComponent_ng_container_3_ng_container_3_agm_circle_1_Template, 1, 9, "agm-circle", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const mp_r7 = i0.ɵɵnextContext().$implicit;
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
    const mp_r7 = ctx.$implicit;
    i0.ɵɵproperty("ngSwitch", mp_r7.layerType);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "wms");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "vector");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "circle");
} }
const _c1 = [[["", 8, "map-control", "top-center"]], [["", 8, "map-control", "top-left"]], [["", 8, "map-control", "top-right"]], [["", 8, "map-control", "left-top"]], [["", 8, "map-control", "right-top"]], [["", 8, "map-control", "left-center"]], [["", 8, "map-control", "right-center"]], [["", 8, "map-control", "left-bottom"]], [["", 8, "map-control", "right-bottom"]], [["", 8, "map-control", "bottom-center"]], [["", 8, "map-control", "bottom-left"]], [["", 8, "map-control", "bottom-right"]]];
const _c2 = [".map-control.top-center", ".map-control.top-left", ".map-control.top-right", ".map-control.left-top", ".map-control.right-top", ".map-control.left-center", ".map-control.right-center", ".map-control.left-bottom", ".map-control.right-bottom", ".map-control.bottom-center", ".map-control.bottom-left", ".map-control.bottom-right"];
class LayeredMapComponent {
    constructor(_zone, staticData, metadata) {
        this._zone = _zone;
        this.staticData = staticData;
        this.metadata = metadata;
        this.layers = [];
        this.markers = [];
        this.mapTypeId = 'roadmap';
        this.layersChange = new core_1.EventEmitter();
        this.featureSelected = new core_1.EventEmitter();
        this.pointSelected = new core_1.EventEmitter();
        this.mapTypePosition = google_maps_types_1.ControlPosition.BOTTOM_LEFT;
        this.streetViewControl = true;
        this.selectedFeature = null;
        // google maps zoom level
        this.zoom = 4;
        this.showMapType = true;
        this.mapTypeOptions = {
            position: google_maps_types_1.ControlPosition.BOTTOM_LEFT
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
        var mapped = new map_wald_1.MappedLayer();
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
}
exports.LayeredMapComponent = LayeredMapComponent;
LayeredMapComponent.ɵfac = function LayeredMapComponent_Factory(t) { return new (t || LayeredMapComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i1.StaticDataService), i0.ɵɵdirectiveInject(i1.MetadataService)); };
LayeredMapComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LayeredMapComponent, selectors: [["layered-map"]], viewQuery: function LayeredMapComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(core_2.AgmMap, true);
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
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
    } }, directives: [i2.AgmMap, i3.NgForOf, i4.MapControlComponent, i2.AgmMarker, i2.AgmInfoWindow, i3.NgIf, i3.NgSwitch, i3.NgSwitchCase, i5.WMSLayerComponent, i2.AgmDataLayer, i2.AgmCircle], pipes: [i6.ReversePipe], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LayeredMapComponent, [{
        type: core_1.Component,
        args: [{
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
    <span *ngIf="marker.html" [innerHTML]="marker.html"></span>
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

`, styles: []
            }]
    }], function () { return [{ type: i0.NgZone }, { type: i1.StaticDataService }, { type: i1.MetadataService }]; }, { layers: [{
            type: core_1.Input
        }], markers: [{
            type: core_1.Input
        }], mapTypeId: [{
            type: core_1.Input
        }], layersChange: [{
            type: core_1.Output
        }], featureSelected: [{
            type: core_1.Output
        }], pointSelected: [{
            type: core_1.Output
        }], mapTypePosition: [{
            type: core_1.Input
        }], streetViewControl: [{
            type: core_1.Input
        }], theMap: [{
            type: core_1.ViewChild,
            args: [core_2.AgmMap, { static: false }]
        }], infoWindows: [{
            type: core_1.ViewChildren,
            args: ['infoWindows']
        }], zoom: [{
            type: core_1.Input
        }], showMapType: [{
            type: core_1.Input
        }], lat: [{
            type: core_1.Input
        }], lng: [{
            type: core_1.Input
        }], bounds: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJlZC1tYXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtdmlzdWFsLyIsInNvdXJjZXMiOlsibGF5ZXJlZC1tYXAvbGF5ZXJlZC1tYXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUNzRjtBQUN0Rix1Q0FBb0c7QUFDcEcsb0NBQXlFO0FBRXpFLDRFQUE4Rjs7Ozs7Ozs7OztJQWlDMUYsMkJBQTJEOzs7SUFBakMsNkRBQXlCOzs7SUFOdkQsc0NBSUU7SUFBQSwrQ0FDRTtJQUFBLDhCQUFRO0lBQUEsWUFBZ0I7SUFBQSxpQkFBUztJQUNqQyxvRkFBMkQ7SUFDN0QsaUJBQWtCO0lBQ3BCLGlCQUFhOzs7SUFQRCw2Q0FBNEIsK0JBQUEsOEJBQUE7SUFHUixlQUF1QjtJQUF2QixxQ0FBdUI7SUFDM0MsZUFBZ0I7SUFBaEIscUNBQWdCO0lBQ2pCLGVBQWlCO0lBQWpCLHFDQUFpQjs7O0lBSzFCLGdDQUtZOzs7SUFKViwrQkFBYywrQkFBQSwwQkFBQSxvQ0FBQTs7OztJQUtoQiwwQ0FLQTtJQUZjLGdQQUE4QjtJQUU1QyxpQkFBaUI7OztJQUhILCtCQUF1QjtJQUR2QiwwQ0FBeUI7Ozs7SUFPckMsc0NBWUE7SUFGWSx3VUFBbUM7SUFFL0MsaUJBQWE7Ozs7O0lBWEQsd0RBQXNDLDRDQUFBLGtGQUFBLDZKQUFBLDJKQUFBLGlLQUFBLCtKQUFBLHFCQUFBLHVNQUFBOzs7SUFGcEQsNkJBQ0U7SUFBQSxpSEFZYTtJQUNmLDBCQUFlOzs7SUFiYSxlQUEyQjtJQUEzQixtREFBMkI7OztJQWZ6RCxpQ0FDRTtJQUFBLGdHQUtZO0lBQ1osMEdBS2lCO0lBRWpCLHNHQWNlO0lBSWpCLDBCQUFlOzs7SUFoQ3dELDBDQUF5QjtJQUNsRixlQUFtQjtJQUFuQixvQ0FBbUI7SUFNZCxlQUFzQjtJQUF0Qix1Q0FBc0I7SUFPeEIsZUFBc0I7SUFBdEIsdUNBQXNCOzs7O0FBekN2QyxNQWlIYSxtQkFBbUI7SUE0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WUFDRSxlQUFlO2tCQUF2QixZQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixZQUFLO1lBRTRCLE1BQU07a0JBQXZDLGdCQUFTO21CQUFDLGFBQU0sRUFBQyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUM7WUFDSCxXQUFXO2tCQUF2QyxtQkFBWTttQkFBQyxhQUFhO1lBSWxCLElBQUk7a0JBQVosWUFBSztZQUNHLFdBQVc7a0JBQW5CLFlBQUs7WUFNRyxHQUFHO2tCQUFYLFlBQUs7WUFDRyxHQUFHO2tCQUFYLFlBQUs7WUFDRyxNQUFNO2tCQUFkLFlBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyxcbiAgICAgICAgIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXBwZWRMYXllciwgQm91bmRzLCBMYXllclNlbGVjdGlvbiwgU3RhdGljRGF0YVNlcnZpY2UsIE1ldGFkYXRhU2VydmljZSAgfSBmcm9tICdtYXAtd2FsZCc7XG5pbXBvcnQgeyBEYXRhTW91c2VFdmVudCwgTGF0TG5nLCBBZ21NYXAsIEFnbUluZm9XaW5kb3d9IGZyb20gJ0BhZ20vY29yZSc7XG5pbXBvcnQgeyBGZWF0dXJlLCBQb2ludCwgR2VvbWV0cnlPYmplY3QgfSBmcm9tICdnZW9qc29uJztcbmltcG9ydCB7IE1hcFR5cGVDb250cm9sT3B0aW9ucywgQ29udHJvbFBvc2l0aW9uIH0gZnJvbSAnQGFnbS9jb3JlL3NlcnZpY2VzL2dvb2dsZS1tYXBzLXR5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBTaW1wbGVNYXJrZXIge1xuICBsb2M6TGF0TG5nO1xuICB2YWx1ZTpzdHJpbmc7XG4gIG9wZW46Ym9vbGVhbjtcbiAgaWNvblVybDpzdHJpbmc7XG4gIGh0bWw/OnN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGF5ZXJlZC1tYXAnLFxuICB0ZW1wbGF0ZTogYDxhZ20tbWFwICN0aGVNYXBcblsobGF0aXR1ZGUpXT1cImxhdFwiXG5bKGxvbmdpdHVkZSldPVwibG5nXCJcblsoem9vbSldPVwiem9vbVwiXG4oem9vbUNoYW5nZSk9XCJ6b29tQ2hhbmdlZCgpXCJcbltkaXNhYmxlRGVmYXVsdFVJXT1cImZhbHNlXCJcblt6b29tQ29udHJvbF09XCJmYWxzZVwiXG5bbWFwVHlwZUlkXT1cIm1hcFR5cGVJZFwiXG5bbWFwVHlwZUNvbnRyb2xdPVwic2hvd01hcFR5cGVcIlxuW21hcFR5cGVDb250cm9sT3B0aW9uc109XCJtYXBUeXBlT3B0aW9uc1wiXG5bc3RyZWV0Vmlld0NvbnRyb2xdPVwic3RyZWV0Vmlld0NvbnRyb2xcIlxuc2NhbGVDb250cm9sPVwidHJ1ZVwiXG5bZml0Qm91bmRzXT1cIl9ib3VuZHNcIlxuKG1hcENsaWNrKT1cIm1hcENsaWNrKCRldmVudClcIj5cblxuPGFnbS1tYXJrZXIgKm5nRm9yPVwibGV0IG1hcmtlciBvZiBtYXJrZXJzXCJcbiAgICAgICAgICAgIFtsb25naXR1ZGVdPVwibWFya2VyLmxvYy5sbmdcIlxuICAgICAgICAgICAgW2xhdGl0dWRlXT1cIm1hcmtlci5sb2MubGF0XCJcbiAgICAgICAgICAgIFtpY29uVXJsXT1cIm1hcmtlci5pY29uVXJsXCI+XG4gIDxhZ20taW5mby13aW5kb3cgI2luZm9XaW5kb3dzIFtkaXNhYmxlQXV0b1Bhbl09XCJ0cnVlXCI+XG4gICAgPHN0cm9uZz57e21hcmtlci52YWx1ZX19PC9zdHJvbmc+XG4gICAgPHNwYW4gKm5nSWY9XCJtYXJrZXIuaHRtbFwiIFtpbm5lckhUTUxdPVwibWFya2VyLmh0bWxcIj48L3NwYW4+XG4gIDwvYWdtLWluZm8td2luZG93PlxuPC9hZ20tbWFya2VyPlxuXG48bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBtcCBvZiBsYXllcnMuc2xpY2UoKXxyZXZlcnNlOyBsZXQgaSA9IGluZGV4XCIgW25nU3dpdGNoXT1cIm1wLmxheWVyVHlwZVwiPlxuICA8d21zLWxheWVyICpuZ1N3aXRjaENhc2U9XCInd21zJ1wiXG4gICAgW3VybF09XCJtcC51cmxcIlxuICAgIFtwYXJhbXNdPVwibXAud21zUGFyYW1ldGVyc1wiXG4gICAgW29wYWNpdHldPVwibXAub3BhY2l0eVwiXG4gICAgW3Bvc2l0aW9uXT1cIm1wLm9wdGlvbnMucG9zaXRpb25cIj5cbiAgPC93bXMtbGF5ZXI+XG4gIDxhZ20tZGF0YS1sYXllciAqbmdTd2l0Y2hDYXNlPVwiJ3ZlY3RvcidcIlxuICAgICAgICAgICAgICAgIFtnZW9Kc29uXT1cIm1wLnN0YXRpY0RhdGFcIlxuICAgICAgICAgICAgICAgIFtzdHlsZV09XCJtcC5fc3R5bGVGdW5jXCJcbiAgICAgICAgICAgICAgICAobGF5ZXJDbGljayk9XCJjbGlja2VkKCRldmVudClcIlxuICAgICAgICAgICAgICAgID5cbiAgPC9hZ20tZGF0YS1sYXllcj5cblxuICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInY2lyY2xlJ1wiPlxuICAgIDxhZ20tY2lyY2xlICpuZ0Zvcj1cImxldCBmIG9mIG1wLnN0YXRpY0RhdGEuZmVhdHVyZXM7IGxldCBqPWluZGV4XCJcbiAgICAgICAgICAgICAgICBbbGF0aXR1ZGVdPVwiZi5nZW9tZXRyeS5jb29yZGluYXRlc1sxXVwiXG4gICAgICAgICAgICAgICAgW2xvbmdpdHVkZV09XCJmLmdlb21ldHJ5LmNvb3JkaW5hdGVzWzBdXCJcbiAgICAgICAgICAgICAgICBbcmFkaXVzXT1cIjEwMDAwMDAwLyh6b29tKnpvb20qem9vbSp6b29tKVwiXG4gICAgICAgICAgICAgICAgW2ZpbGxDb2xvcl09XCJtcC5mbGF0dGVuZWRTZXR0aW5ncz8uc3R5bGVzPy5maWxsQ29sb3J8fCdibGFjaydcIlxuICAgICAgICAgICAgICAgIFtmaWxsT3BhY2l0eV09XCJtcC5mbGF0dGVuZWRTZXR0aW5ncz8uc3R5bGVzPy5maWxsT3BhY2l0eXx8MVwiXG4gICAgICAgICAgICAgICAgW3N0cm9rZUNvbG9yXT1cIm1wLmZsYXR0ZW5lZFNldHRpbmdzPy5zdHlsZXM/LnN0cm9rZUNvbG9yfHwnYmxhY2snXCJcbiAgICAgICAgICAgICAgICBbc3Ryb2tlT3BhY2l0eV09XCJtcC5mbGF0dGVuZWRTZXR0aW5ncz8uc3R5bGVzPy5zdHJva2VPcGFjaXR5fHwxXCJcbiAgICAgICAgICAgICAgICBbc3Ryb2tlUG9zaXRpb25dPVwiMFwiXG4gICAgICAgICAgICAgICAgW3N0cm9rZVdlaWdodF09XCIoZj09PXNlbGVjdGVkRmVhdHVyZSk/MzoobXAuZmxhdHRlbmVkU2V0dGluZ3M/LnN0eWxlcz8uc3Ryb2tlV2VpZ2h0fHwwLjUpXCJcbiAgICAgICAgICAgICAgICAoY2lyY2xlQ2xpY2spPVwiY2lyY2xlQ2xpY2tlZChtcCxmKVwiXG4gICAgICAgICAgICAgICAgPlxuICAgIDwvYWdtLWNpcmNsZT5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLVxuICAtLT5cbjwvbmctY29udGFpbmVyPlxuXG48IS0tIGZvciBtYXAgY29udHJvbHMgLS0+XG48bWFwLWNvbnRyb2wgcG9zaXRpb249XCJUT1BfQ0VOVEVSXCI+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiLm1hcC1jb250cm9sLnRvcC1jZW50ZXJcIj48L25nLWNvbnRlbnQ+XG48L21hcC1jb250cm9sPlxuXG48bWFwLWNvbnRyb2wgcG9zaXRpb249XCJUT1BfTEVGVFwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIi5tYXAtY29udHJvbC50b3AtbGVmdFwiPjwvbmctY29udGVudD5cbjwvbWFwLWNvbnRyb2w+XG5cbjxtYXAtY29udHJvbCBwb3NpdGlvbj1cIlRPUF9SSUdIVFwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIi5tYXAtY29udHJvbC50b3AtcmlnaHRcIj48L25nLWNvbnRlbnQ+XG48L21hcC1jb250cm9sPlxuXG48bWFwLWNvbnRyb2wgcG9zaXRpb249XCJMRUZUX1RPUFwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIi5tYXAtY29udHJvbC5sZWZ0LXRvcFwiPjwvbmctY29udGVudD5cbjwvbWFwLWNvbnRyb2w+XG5cbjxtYXAtY29udHJvbCBwb3NpdGlvbj1cIlJJR0hUX1RPUFwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIi5tYXAtY29udHJvbC5yaWdodC10b3BcIj48L25nLWNvbnRlbnQ+XG48L21hcC1jb250cm9sPlxuXG48bWFwLWNvbnRyb2wgcG9zaXRpb249XCJMRUZUX0NFTlRFUlwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIi5tYXAtY29udHJvbC5sZWZ0LWNlbnRlclwiPjwvbmctY29udGVudD5cbjwvbWFwLWNvbnRyb2w+XG5cbjxtYXAtY29udHJvbCBwb3NpdGlvbj1cIlJJR0hUX0NFTlRFUlwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIi5tYXAtY29udHJvbC5yaWdodC1jZW50ZXJcIj48L25nLWNvbnRlbnQ+XG48L21hcC1jb250cm9sPlxuXG48bWFwLWNvbnRyb2wgcG9zaXRpb249XCJMRUZUX0JPVFRPTVwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIi5tYXAtY29udHJvbC5sZWZ0LWJvdHRvbVwiPjwvbmctY29udGVudD5cbjwvbWFwLWNvbnRyb2w+XG5cbjxtYXAtY29udHJvbCBwb3NpdGlvbj1cIlJJR0hUX0JPVFRPTVwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIi5tYXAtY29udHJvbC5yaWdodC1ib3R0b21cIj48L25nLWNvbnRlbnQ+XG48L21hcC1jb250cm9sPlxuXG48bWFwLWNvbnRyb2wgcG9zaXRpb249XCJCT1RUT01fQ0VOVEVSXCI+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiLm1hcC1jb250cm9sLmJvdHRvbS1jZW50ZXJcIj48L25nLWNvbnRlbnQ+XG48L21hcC1jb250cm9sPlxuXG48bWFwLWNvbnRyb2wgcG9zaXRpb249XCJCT1RUT01fTEVGVFwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIi5tYXAtY29udHJvbC5ib3R0b20tbGVmdFwiPjwvbmctY29udGVudD5cbjwvbWFwLWNvbnRyb2w+XG5cbjxtYXAtY29udHJvbCBwb3NpdGlvbj1cIkJPVFRPTV9SSUdIVFwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIi5tYXAtY29udHJvbC5ib3R0b20tcmlnaHRcIj48L25nLWNvbnRlbnQ+XG48L21hcC1jb250cm9sPlxuXG48L2FnbS1tYXA+XG5cbmAsc3R5bGVzOiBbXX0pXG5leHBvcnQgY2xhc3MgTGF5ZXJlZE1hcENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGxheWVyczogQXJyYXk8TWFwcGVkTGF5ZXI+ID0gW107XG4gIEBJbnB1dCgpIG1hcmtlcnM6QXJyYXk8U2ltcGxlTWFya2VyPiA9IFtdO1xuICBASW5wdXQoKSBtYXBUeXBlSWQ6c3RyaW5nPSdyb2FkbWFwJztcblxuICBAT3V0cHV0KCkgbGF5ZXJzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxBcnJheTxNYXBwZWRMYXllcj4+KCk7XG4gIEBPdXRwdXQoKSBmZWF0dXJlU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHtmZWF0dXJlOkZlYXR1cmU8R2VvbWV0cnlPYmplY3Q+LGxheWVyPzpNYXBwZWRMYXllcn0+KCk7XG4gIEBPdXRwdXQoKSBwb2ludFNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxMYXRMbmc+KCk7XG4gIEBJbnB1dCgpIG1hcFR5cGVQb3NpdGlvbjpudW1iZXIgPSBDb250cm9sUG9zaXRpb24uQk9UVE9NX0xFRlRcbiAgQElucHV0KCkgc3RyZWV0Vmlld0NvbnRyb2wgPSB0cnVlO1xuXG4gIEBWaWV3Q2hpbGQoQWdtTWFwLHtzdGF0aWM6ZmFsc2V9KSB0aGVNYXA6QWdtTWFwO1xuICBAVmlld0NoaWxkcmVuKCdpbmZvV2luZG93cycpIGluZm9XaW5kb3dzOlF1ZXJ5TGlzdDxBZ21JbmZvV2luZG93PjtcblxuICBzZWxlY3RlZEZlYXR1cmU6YW55ID0gbnVsbDtcbiAgLy8gZ29vZ2xlIG1hcHMgem9vbSBsZXZlbFxuICBASW5wdXQoKSB6b29tOiBudW1iZXIgPSA0O1xuICBASW5wdXQoKSBzaG93TWFwVHlwZSA9IHRydWU7XG4gIG1hcFR5cGVPcHRpb25zOiBNYXBUeXBlQ29udHJvbE9wdGlvbnM9e1xuICAgIHBvc2l0aW9uOkNvbnRyb2xQb3NpdGlvbi5CT1RUT01fTEVGVFxuICB9O1xuXG4gIC8vIGluaXRpYWwgY2VudGVyIHBvc2l0aW9uIGZvciB0aGUgbWFwXG4gIEBJbnB1dCgpIGxhdDogbnVtYmVyID0gLTIyLjY3Mzg1ODtcbiAgQElucHV0KCkgbG5nOiBudW1iZXIgPSAxMjkuODE1OTgyO1xuICBASW5wdXQoKSBib3VuZHM6Qm91bmRzO1xuICBfYm91bmRzOkJvdW5kcztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF96b25lOk5nWm9uZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzdGF0aWNEYXRhOlN0YXRpY0RhdGFTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIG1ldGFkYXRhOk1ldGFkYXRhU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIC8vIGlmIHpvb20gaW4gY2hhbmdlcy4uLlxuICAgIGlmKGNoYW5nZXMubWFwVHlwZVBvc2l0aW9uKXtcbiAgICAgIGlmKHRoaXMubWFwVHlwZVBvc2l0aW9uPT09bnVsbCl7XG4gICAgICAgIHRoaXMuc2hvd01hcFR5cGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMubWFwVHlwZU9wdGlvbnMgPSB7XG4gICAgICAgIHBvc2l0aW9uOnRoaXMubWFwVHlwZVBvc2l0aW9uXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmKGNoYW5nZXMubGF5ZXJzKXtcbiAgICAgIHRoaXMuc2V0TGF5ZXJQb3NpdGlvbnMoKTtcbiAgICB9XG5cbiAgICBpZihjaGFuZ2VzLm1hcmtlcnMmJnRoaXMubWFya2Vycyl7XG4gICAgICAvLyBkZWFsIHdpdGggZXhpc3RpbmcgaW5mbyB3aW5kb3dzP1xuICAgICAgaWYodGhpcy5pbmZvV2luZG93cyl7XG4gICAgICAgICAgdGhpcy5pbmZvV2luZG93cy5mb3JFYWNoKCh3LGkpPT57XG4gICAgICAgICAgdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKT0+dy5jbG9zZSgpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgLy8gQ2hlY2sgYW5kIG9wZW4gcmVsZXZhbnQgaW5mbyB3aW5kb3dzLi4uXG4gICAgICAgIHRoaXMuaW5mb1dpbmRvd3MuZm9yRWFjaCgodyxpKT0+e1xuICAgICAgICAgIGxldCBtID0gdGhpcy5tYXJrZXJzW2ldO1xuICAgICAgICAgIGlmKG0ub3Blbil7XG4gICAgICAgICAgICB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpPT53Lm9wZW4oKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCk9PncuY2xvc2UoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmKGNoYW5nZXMuYm91bmRzKXtcbiAgICAgIHNldFRpbWVvdXQoKCk9PnRoaXMuX2JvdW5kcz10aGlzLmJvdW5kcyk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICB9XG5cbiAgbGF5ZXJzQ2hhbmdlZChjaGFuZ2VzOiBBcnJheTxNYXBwZWRMYXllcj4pIHtcbiAgfVxuXG4gIGxheWVyQWRkZWQoc2VsZWN0aW9uOiBMYXllclNlbGVjdGlvbikge1xuICAgIHZhciBleCA9IHRoaXMubGF5ZXJzLmZpbmQobCA9PiBsLmxheWVyID09PSBzZWxlY3Rpb24ubGF5ZXIpO1xuICAgIGlmIChleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBtYXBwZWQgPSBuZXcgTWFwcGVkTGF5ZXIoKTtcbiAgICBtYXBwZWQubGF5ZXIgPSBzZWxlY3Rpb24ubGF5ZXI7XG5cbiAgICBtYXBwZWQubGF5ZXJUeXBlID0gJ3dtcyc7XG4gICAgbWFwcGVkLm9wdGlvbnMubGVnZW5kID0gdHJ1ZTtcblxuICAgIGlmKHNlbGVjdGlvbi5sYXllci5vcHRpb25zLnZlY3RvcnMpe1xuICAgICAgdGhpcy5zdGF0aWNEYXRhLmdldChzZWxlY3Rpb24ubGF5ZXIub3B0aW9ucy5ob3N0LHNlbGVjdGlvbi5sYXllci5vcHRpb25zLmZpbGVwYXRoKS5zdWJzY3JpYmUoXG4gICAgICAgIChkYXRhOmFueSk9PntcbiAgICAgICAgICBtYXBwZWQuc3RhdGljRGF0YT1kYXRhO1xuICAgICAgICAgIHRoaXMuYWN0aXZhdGVMYXllcihtYXBwZWQsc2VsZWN0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZhdGVMYXllcihtYXBwZWQsIHNlbGVjdGlvbik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhY3RpdmF0ZUxheWVyKG1hcHBlZDogTWFwcGVkTGF5ZXIsIHNlbGVjdGlvbjogTGF5ZXJTZWxlY3Rpb24pIHtcbiAgICBtYXBwZWQudXBkYXRlKCk7XG4gICAgaWYgKHNlbGVjdGlvbi5hY3Rpb24gPT09ICdyZXBsYWNlJykge1xuICAgICAgaWYoc2VsZWN0aW9uLmZpbHRlcil7XG4gICAgICAgIHRoaXMubGF5ZXJzID0gdGhpcy5sYXllcnMuZmlsdGVyKG1sPT4hc2VsZWN0aW9uLmZpbHRlcihtbCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sYXllcnMgPSBbXTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5sYXllcnMgPSBbbWFwcGVkXS5jb25jYXQodGhpcy5sYXllcnMpO1xuICAgIHRoaXMuc2V0TGF5ZXJQb3NpdGlvbnMoKTtcbiAgICB0aGlzLmxheWVyc0NoYW5nZS5lbWl0KHRoaXMubGF5ZXJzKTtcbiAgfVxuXG4gIHNldExheWVyUG9zaXRpb25zKCl7XG4gICAgbGV0IGl4PTA7XG4gICAgZm9yKHZhciBpPXRoaXMubGF5ZXJzLmxlbmd0aC0xO2k+PTA7aS0tKXtcbiAgICAgIGlmKHRoaXMubGF5ZXJzW2ldLmxheWVyVHlwZT09PSd3bXMnKXtcbiAgICAgICAgdGhpcy5sYXllcnNbaV0ub3B0aW9ucy5wb3NpdGlvbj1peDtcbiAgICAgICAgaXgrKztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZXh0cmFjdEZlYXR1cmUoZjphbnkpIDogRmVhdHVyZTxQb2ludD57XG4gICAgdmFyIGdlbyA9IGYuZ2V0R2VvbWV0cnkoKTtcbiAgICBnZW8gPSB7XG4gICAgICB0eXBlOidQb2ludCcsXG4gICAgICBjb29yZGluYXRlczpnZW8uZ2V0KDApXG4gICAgfVxuXG4gICAgdmFyIHByb3BzOntba2V5OnN0cmluZ106YW55fSA9IHt9O1xuICAgIGYuZm9yRWFjaFByb3BlcnR5KCh2YWw6YW55LHByb3A6c3RyaW5nKT0+cHJvcHNbcHJvcF09dmFsKTtcblxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOidGZWF0dXJlJyxcbiAgICAgIGdlb21ldHJ5OmdlbyxcbiAgICAgIHByb3BlcnRpZXM6cHJvcHNcbiAgICB9O1xuICB9XG5cbiAgY2xpY2tlZChldmVudDpEYXRhTW91c2VFdmVudCl7XG4gICAgdmFyIGZlYXR1cmUgPSB0aGlzLmV4dHJhY3RGZWF0dXJlKGV2ZW50LmZlYXR1cmUpO1xuICAgIHRoaXMuc2VsZWN0ZWRGZWF0dXJlID0gZmVhdHVyZTtcbiAgICB0aGlzLmZlYXR1cmVTZWxlY3RlZC5lbWl0KHtmZWF0dXJlOmZlYXR1cmV9KTtcbiAgfVxuXG4gIGNpcmNsZUNsaWNrZWQobWw6TWFwcGVkTGF5ZXIsZmVhdHVyZTphbnkpe1xuICAgIHRoaXMuc2VsZWN0ZWRGZWF0dXJlID0gZmVhdHVyZTtcbiAgICB0aGlzLmZlYXR1cmVTZWxlY3RlZC5lbWl0KHtmZWF0dXJlOmZlYXR1cmUsbGF5ZXI6bWx9KTtcbiAgfVxuXG4gIG1hcENsaWNrKGV2ZW50OmFueSl7XG4gICAgdmFyIGNvb3JkczpMYXRMbmcgPSBldmVudC5jb29yZHM7XG4gICAgdGhpcy5wb2ludFNlbGVjdGVkLmVtaXQoY29vcmRzKTtcbiAgfVxuXG4gIHpvb21Ub0JvdW5kcyhib3VuZHM6Qm91bmRzKXtcbiAgICB0aGlzLl9ib3VuZHMgPSBib3VuZHM7XG4gIH1cblxuICB6b29tQ2hhbmdlZCgpe1xuICAgIHRoaXMubGF5ZXJzID0gdGhpcy5sYXllcnMuc2xpY2UoKTtcbiAgfVxufVxuIl19