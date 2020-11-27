"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayeredMapComponent = void 0;
var core_1 = require("@angular/core");
var map_wald_1 = require("map-wald");
var core_2 = require("@agm/core");
var google_maps_types_1 = require("@agm/core/services/google-maps-types");
var i0 = require("@angular/core");
var i1 = require("map-wald");
var i2 = require("@agm/core");
var i3 = require("@angular/common");
var i4 = require("../map-control/map-control.component");
var i5 = require("../wms-layer/wms-layer.component");
var i6 = require("ngx-pipes");
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
        var mapped = new map_wald_1.MappedLayer();
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
            i0.ɵɵviewQuery(core_2.AgmMap, true);
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
        } }, directives: [i2.AgmMap, i3.NgForOf, i4.MapControlComponent, i2.AgmMarker, i2.AgmInfoWindow, i3.NgIf, i3.NgSwitch, i3.NgSwitchCase, i5.WMSLayerComponent, i2.AgmDataLayer, i2.AgmCircle], pipes: [i6.ReversePipe], encapsulation: 2 });
    return LayeredMapComponent;
}());
exports.LayeredMapComponent = LayeredMapComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LayeredMapComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'layered-map',
                template: "<agm-map #theMap\n[(latitude)]=\"lat\"\n[(longitude)]=\"lng\"\n[(zoom)]=\"zoom\"\n(zoomChange)=\"zoomChanged()\"\n[disableDefaultUI]=\"false\"\n[zoomControl]=\"false\"\n[mapTypeId]=\"mapTypeId\"\n[mapTypeControl]=\"showMapType\"\n[mapTypeControlOptions]=\"mapTypeOptions\"\n[streetViewControl]=\"streetViewControl\"\nscaleControl=\"true\"\n[fitBounds]=\"_bounds\"\n(mapClick)=\"mapClick($event)\">\n\n<agm-marker *ngFor=\"let marker of markers\"\n            [longitude]=\"marker.loc.lng\"\n            [latitude]=\"marker.loc.lat\"\n            [iconUrl]=\"marker.iconUrl\">\n  <agm-info-window #infoWindows [disableAutoPan]=\"true\">\n    <strong>{{marker.value}}</strong>\n    <span *ngIf=\"marker.html\" [innerHTML]=\"marker.html\"></span>\n  </agm-info-window>\n</agm-marker>\n\n<ng-container *ngFor=\"let mp of layers.slice()|reverse; let i = index\" [ngSwitch]=\"mp.layerType\">\n  <wms-layer *ngSwitchCase=\"'wms'\"\n    [url]=\"mp.url\"\n    [params]=\"mp.wmsParameters\"\n    [opacity]=\"mp.opacity\"\n    [position]=\"mp.options.position\">\n  </wms-layer>\n  <agm-data-layer *ngSwitchCase=\"'vector'\"\n                [geoJson]=\"mp.staticData\"\n                [style]=\"mp._styleFunc\"\n                (layerClick)=\"clicked($event)\"\n                >\n  </agm-data-layer>\n\n  <ng-container *ngSwitchCase=\"'circle'\">\n    <agm-circle *ngFor=\"let f of mp.staticData.features; let j=index\"\n                [latitude]=\"f.geometry.coordinates[1]\"\n                [longitude]=\"f.geometry.coordinates[0]\"\n                [radius]=\"10000000/(zoom*zoom*zoom*zoom)\"\n                [fillColor]=\"mp.flattenedSettings?.styles?.fillColor||'black'\"\n                [fillOpacity]=\"mp.flattenedSettings?.styles?.fillOpacity||1\"\n                [strokeColor]=\"mp.flattenedSettings?.styles?.strokeColor||'black'\"\n                [strokeOpacity]=\"mp.flattenedSettings?.styles?.strokeOpacity||1\"\n                [strokePosition]=\"0\"\n                [strokeWeight]=\"(f===selectedFeature)?3:(mp.flattenedSettings?.styles?.strokeWeight||0.5)\"\n                (circleClick)=\"circleClicked(mp,f)\"\n                >\n    </agm-circle>\n  </ng-container>\n\n  <!--\n  -->\n</ng-container>\n\n<!-- for map controls -->\n<map-control position=\"TOP_CENTER\">\n    <ng-content select=\".map-control.top-center\"></ng-content>\n</map-control>\n\n<map-control position=\"TOP_LEFT\">\n    <ng-content select=\".map-control.top-left\"></ng-content>\n</map-control>\n\n<map-control position=\"TOP_RIGHT\">\n    <ng-content select=\".map-control.top-right\"></ng-content>\n</map-control>\n\n<map-control position=\"LEFT_TOP\">\n    <ng-content select=\".map-control.left-top\"></ng-content>\n</map-control>\n\n<map-control position=\"RIGHT_TOP\">\n    <ng-content select=\".map-control.right-top\"></ng-content>\n</map-control>\n\n<map-control position=\"LEFT_CENTER\">\n    <ng-content select=\".map-control.left-center\"></ng-content>\n</map-control>\n\n<map-control position=\"RIGHT_CENTER\">\n    <ng-content select=\".map-control.right-center\"></ng-content>\n</map-control>\n\n<map-control position=\"LEFT_BOTTOM\">\n    <ng-content select=\".map-control.left-bottom\"></ng-content>\n</map-control>\n\n<map-control position=\"RIGHT_BOTTOM\">\n    <ng-content select=\".map-control.right-bottom\"></ng-content>\n</map-control>\n\n<map-control position=\"BOTTOM_CENTER\">\n    <ng-content select=\".map-control.bottom-center\"></ng-content>\n</map-control>\n\n<map-control position=\"BOTTOM_LEFT\">\n    <ng-content select=\".map-control.bottom-left\"></ng-content>\n</map-control>\n\n<map-control position=\"BOTTOM_RIGHT\">\n    <ng-content select=\".map-control.bottom-right\"></ng-content>\n</map-control>\n\n</agm-map>\n\n",
                styles: []
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJlZC1tYXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtdmlzdWFsLyIsInNvdXJjZXMiOlsibGF5ZXJlZC1tYXAvbGF5ZXJlZC1tYXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUNzRjtBQUN0RixxQ0FBb0c7QUFDcEcsa0NBQXlFO0FBRXpFLDBFQUE4Rjs7Ozs7Ozs7OztJQWlDMUYsMkJBQTJEOzs7SUFBakMsNkRBQXlCOzs7SUFOdkQsc0NBSUU7SUFBQSwrQ0FDRTtJQUFBLDhCQUFRO0lBQUEsWUFBZ0I7SUFBQSxpQkFBUztJQUNqQyxvRkFBMkQ7SUFDN0QsaUJBQWtCO0lBQ3BCLGlCQUFhOzs7SUFQRCw2Q0FBNEIsK0JBQUEsOEJBQUE7SUFHUixlQUF1QjtJQUF2QixxQ0FBdUI7SUFDM0MsZUFBZ0I7SUFBaEIscUNBQWdCO0lBQ2pCLGVBQWlCO0lBQWpCLHFDQUFpQjs7O0lBSzFCLGdDQUtZOzs7SUFKViwrQkFBYywrQkFBQSwwQkFBQSxvQ0FBQTs7OztJQUtoQiwwQ0FLQTtJQUZjLDhPQUE4QjtJQUU1QyxpQkFBaUI7OztJQUhILCtCQUF1QjtJQUR2QiwwQ0FBeUI7Ozs7SUFPckMsc0NBWUE7SUFGWSxrVUFBbUM7SUFFL0MsaUJBQWE7Ozs7O0lBWEQsd0RBQXNDLDRDQUFBLGtGQUFBLDZKQUFBLDJKQUFBLGlLQUFBLCtKQUFBLHFCQUFBLHVNQUFBOzs7SUFGcEQsNkJBQ0U7SUFBQSxpSEFZYTtJQUNmLDBCQUFlOzs7SUFiYSxlQUEyQjtJQUEzQixtREFBMkI7OztJQWZ6RCxpQ0FDRTtJQUFBLGdHQUtZO0lBQ1osMEdBS2lCO0lBRWpCLHNHQWNlO0lBSWpCLDBCQUFlOzs7SUFoQ3dELDBDQUF5QjtJQUNsRixlQUFtQjtJQUFuQixvQ0FBbUI7SUFNZCxlQUFzQjtJQUF0Qix1Q0FBc0I7SUFPeEIsZUFBc0I7SUFBdEIsdUNBQXNCOzs7O0FBekN2QztJQTZJRSw2QkFBb0IsS0FB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QUFhO2tCQUF0QixhQUFNO1lBQ0UsZUFBZTtrQkFBdkIsWUFBSztZQUNHLGlCQUFpQjtrQkFBekIsWUFBSztZQUU0QixNQUFNO2tCQUF2QyxnQkFBUzttQkFBQyxhQUFNLEVBQUMsRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDO1lBQ0gsV0FBVztrQkFBdkMsbUJBQVk7bUJBQUMsYUFBYTtZQUlsQixJQUFJO2tCQUFaLFlBQUs7WUFDRyxXQUFXO2tCQUFuQixZQUFLO1lBTUcsR0FBRztrQkFBWCxZQUFLO1lBQ0csR0FBRztrQkFBWCxZQUFLO1lBQ0csTUFBTTtrQkFBZCxZQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsXG4gICAgICAgICBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFwcGVkTGF5ZXIsIEJvdW5kcywgTGF5ZXJTZWxlY3Rpb24sIFN0YXRpY0RhdGFTZXJ2aWNlLCBNZXRhZGF0YVNlcnZpY2UgIH0gZnJvbSAnbWFwLXdhbGQnO1xuaW1wb3J0IHsgRGF0YU1vdXNlRXZlbnQsIExhdExuZywgQWdtTWFwLCBBZ21JbmZvV2luZG93fSBmcm9tICdAYWdtL2NvcmUnO1xuaW1wb3J0IHsgRmVhdHVyZSwgUG9pbnQsIEdlb21ldHJ5T2JqZWN0IH0gZnJvbSAnZ2VvanNvbic7XG5pbXBvcnQgeyBNYXBUeXBlQ29udHJvbE9wdGlvbnMsIENvbnRyb2xQb3NpdGlvbiB9IGZyb20gJ0BhZ20vY29yZS9zZXJ2aWNlcy9nb29nbGUtbWFwcy10eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2ltcGxlTWFya2VyIHtcbiAgbG9jOkxhdExuZztcbiAgdmFsdWU6c3RyaW5nO1xuICBvcGVuOmJvb2xlYW47XG4gIGljb25Vcmw6c3RyaW5nO1xuICBodG1sPzpzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xheWVyZWQtbWFwJyxcbiAgdGVtcGxhdGU6IGA8YWdtLW1hcCAjdGhlTWFwXG5bKGxhdGl0dWRlKV09XCJsYXRcIlxuWyhsb25naXR1ZGUpXT1cImxuZ1wiXG5bKHpvb20pXT1cInpvb21cIlxuKHpvb21DaGFuZ2UpPVwiem9vbUNoYW5nZWQoKVwiXG5bZGlzYWJsZURlZmF1bHRVSV09XCJmYWxzZVwiXG5bem9vbUNvbnRyb2xdPVwiZmFsc2VcIlxuW21hcFR5cGVJZF09XCJtYXBUeXBlSWRcIlxuW21hcFR5cGVDb250cm9sXT1cInNob3dNYXBUeXBlXCJcblttYXBUeXBlQ29udHJvbE9wdGlvbnNdPVwibWFwVHlwZU9wdGlvbnNcIlxuW3N0cmVldFZpZXdDb250cm9sXT1cInN0cmVldFZpZXdDb250cm9sXCJcbnNjYWxlQ29udHJvbD1cInRydWVcIlxuW2ZpdEJvdW5kc109XCJfYm91bmRzXCJcbihtYXBDbGljayk9XCJtYXBDbGljaygkZXZlbnQpXCI+XG5cbjxhZ20tbWFya2VyICpuZ0Zvcj1cImxldCBtYXJrZXIgb2YgbWFya2Vyc1wiXG4gICAgICAgICAgICBbbG9uZ2l0dWRlXT1cIm1hcmtlci5sb2MubG5nXCJcbiAgICAgICAgICAgIFtsYXRpdHVkZV09XCJtYXJrZXIubG9jLmxhdFwiXG4gICAgICAgICAgICBbaWNvblVybF09XCJtYXJrZXIuaWNvblVybFwiPlxuICA8YWdtLWluZm8td2luZG93ICNpbmZvV2luZG93cyBbZGlzYWJsZUF1dG9QYW5dPVwidHJ1ZVwiPlxuICAgIDxzdHJvbmc+e3ttYXJrZXIudmFsdWV9fTwvc3Ryb25nPlxuICAgIDxzcGFuICpuZ0lmPVwibWFya2VyLmh0bWxcIiBbaW5uZXJIVE1MXT1cIm1hcmtlci5odG1sXCI+PC9zcGFuPlxuICA8L2FnbS1pbmZvLXdpbmRvdz5cbjwvYWdtLW1hcmtlcj5cblxuPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbXAgb2YgbGF5ZXJzLnNsaWNlKCl8cmV2ZXJzZTsgbGV0IGkgPSBpbmRleFwiIFtuZ1N3aXRjaF09XCJtcC5sYXllclR5cGVcIj5cbiAgPHdtcy1sYXllciAqbmdTd2l0Y2hDYXNlPVwiJ3dtcydcIlxuICAgIFt1cmxdPVwibXAudXJsXCJcbiAgICBbcGFyYW1zXT1cIm1wLndtc1BhcmFtZXRlcnNcIlxuICAgIFtvcGFjaXR5XT1cIm1wLm9wYWNpdHlcIlxuICAgIFtwb3NpdGlvbl09XCJtcC5vcHRpb25zLnBvc2l0aW9uXCI+XG4gIDwvd21zLWxheWVyPlxuICA8YWdtLWRhdGEtbGF5ZXIgKm5nU3dpdGNoQ2FzZT1cIid2ZWN0b3InXCJcbiAgICAgICAgICAgICAgICBbZ2VvSnNvbl09XCJtcC5zdGF0aWNEYXRhXCJcbiAgICAgICAgICAgICAgICBbc3R5bGVdPVwibXAuX3N0eWxlRnVuY1wiXG4gICAgICAgICAgICAgICAgKGxheWVyQ2xpY2spPVwiY2xpY2tlZCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICA+XG4gIDwvYWdtLWRhdGEtbGF5ZXI+XG5cbiAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2NpcmNsZSdcIj5cbiAgICA8YWdtLWNpcmNsZSAqbmdGb3I9XCJsZXQgZiBvZiBtcC5zdGF0aWNEYXRhLmZlYXR1cmVzOyBsZXQgaj1pbmRleFwiXG4gICAgICAgICAgICAgICAgW2xhdGl0dWRlXT1cImYuZ2VvbWV0cnkuY29vcmRpbmF0ZXNbMV1cIlxuICAgICAgICAgICAgICAgIFtsb25naXR1ZGVdPVwiZi5nZW9tZXRyeS5jb29yZGluYXRlc1swXVwiXG4gICAgICAgICAgICAgICAgW3JhZGl1c109XCIxMDAwMDAwMC8oem9vbSp6b29tKnpvb20qem9vbSlcIlxuICAgICAgICAgICAgICAgIFtmaWxsQ29sb3JdPVwibXAuZmxhdHRlbmVkU2V0dGluZ3M/LnN0eWxlcz8uZmlsbENvbG9yfHwnYmxhY2snXCJcbiAgICAgICAgICAgICAgICBbZmlsbE9wYWNpdHldPVwibXAuZmxhdHRlbmVkU2V0dGluZ3M/LnN0eWxlcz8uZmlsbE9wYWNpdHl8fDFcIlxuICAgICAgICAgICAgICAgIFtzdHJva2VDb2xvcl09XCJtcC5mbGF0dGVuZWRTZXR0aW5ncz8uc3R5bGVzPy5zdHJva2VDb2xvcnx8J2JsYWNrJ1wiXG4gICAgICAgICAgICAgICAgW3N0cm9rZU9wYWNpdHldPVwibXAuZmxhdHRlbmVkU2V0dGluZ3M/LnN0eWxlcz8uc3Ryb2tlT3BhY2l0eXx8MVwiXG4gICAgICAgICAgICAgICAgW3N0cm9rZVBvc2l0aW9uXT1cIjBcIlxuICAgICAgICAgICAgICAgIFtzdHJva2VXZWlnaHRdPVwiKGY9PT1zZWxlY3RlZEZlYXR1cmUpPzM6KG1wLmZsYXR0ZW5lZFNldHRpbmdzPy5zdHlsZXM/LnN0cm9rZVdlaWdodHx8MC41KVwiXG4gICAgICAgICAgICAgICAgKGNpcmNsZUNsaWNrKT1cImNpcmNsZUNsaWNrZWQobXAsZilcIlxuICAgICAgICAgICAgICAgID5cbiAgICA8L2FnbS1jaXJjbGU+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS1cbiAgLS0+XG48L25nLWNvbnRhaW5lcj5cblxuPCEtLSBmb3IgbWFwIGNvbnRyb2xzIC0tPlxuPG1hcC1jb250cm9sIHBvc2l0aW9uPVwiVE9QX0NFTlRFUlwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIi5tYXAtY29udHJvbC50b3AtY2VudGVyXCI+PC9uZy1jb250ZW50PlxuPC9tYXAtY29udHJvbD5cblxuPG1hcC1jb250cm9sIHBvc2l0aW9uPVwiVE9QX0xFRlRcIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCIubWFwLWNvbnRyb2wudG9wLWxlZnRcIj48L25nLWNvbnRlbnQ+XG48L21hcC1jb250cm9sPlxuXG48bWFwLWNvbnRyb2wgcG9zaXRpb249XCJUT1BfUklHSFRcIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCIubWFwLWNvbnRyb2wudG9wLXJpZ2h0XCI+PC9uZy1jb250ZW50PlxuPC9tYXAtY29udHJvbD5cblxuPG1hcC1jb250cm9sIHBvc2l0aW9uPVwiTEVGVF9UT1BcIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCIubWFwLWNvbnRyb2wubGVmdC10b3BcIj48L25nLWNvbnRlbnQ+XG48L21hcC1jb250cm9sPlxuXG48bWFwLWNvbnRyb2wgcG9zaXRpb249XCJSSUdIVF9UT1BcIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCIubWFwLWNvbnRyb2wucmlnaHQtdG9wXCI+PC9uZy1jb250ZW50PlxuPC9tYXAtY29udHJvbD5cblxuPG1hcC1jb250cm9sIHBvc2l0aW9uPVwiTEVGVF9DRU5URVJcIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCIubWFwLWNvbnRyb2wubGVmdC1jZW50ZXJcIj48L25nLWNvbnRlbnQ+XG48L21hcC1jb250cm9sPlxuXG48bWFwLWNvbnRyb2wgcG9zaXRpb249XCJSSUdIVF9DRU5URVJcIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCIubWFwLWNvbnRyb2wucmlnaHQtY2VudGVyXCI+PC9uZy1jb250ZW50PlxuPC9tYXAtY29udHJvbD5cblxuPG1hcC1jb250cm9sIHBvc2l0aW9uPVwiTEVGVF9CT1RUT01cIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCIubWFwLWNvbnRyb2wubGVmdC1ib3R0b21cIj48L25nLWNvbnRlbnQ+XG48L21hcC1jb250cm9sPlxuXG48bWFwLWNvbnRyb2wgcG9zaXRpb249XCJSSUdIVF9CT1RUT01cIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCIubWFwLWNvbnRyb2wucmlnaHQtYm90dG9tXCI+PC9uZy1jb250ZW50PlxuPC9tYXAtY29udHJvbD5cblxuPG1hcC1jb250cm9sIHBvc2l0aW9uPVwiQk9UVE9NX0NFTlRFUlwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIi5tYXAtY29udHJvbC5ib3R0b20tY2VudGVyXCI+PC9uZy1jb250ZW50PlxuPC9tYXAtY29udHJvbD5cblxuPG1hcC1jb250cm9sIHBvc2l0aW9uPVwiQk9UVE9NX0xFRlRcIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCIubWFwLWNvbnRyb2wuYm90dG9tLWxlZnRcIj48L25nLWNvbnRlbnQ+XG48L21hcC1jb250cm9sPlxuXG48bWFwLWNvbnRyb2wgcG9zaXRpb249XCJCT1RUT01fUklHSFRcIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCIubWFwLWNvbnRyb2wuYm90dG9tLXJpZ2h0XCI+PC9uZy1jb250ZW50PlxuPC9tYXAtY29udHJvbD5cblxuPC9hZ20tbWFwPlxuXG5gLHN0eWxlczogW119KVxuZXhwb3J0IGNsYXNzIExheWVyZWRNYXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBsYXllcnM6IEFycmF5PE1hcHBlZExheWVyPiA9IFtdO1xuICBASW5wdXQoKSBtYXJrZXJzOkFycmF5PFNpbXBsZU1hcmtlcj4gPSBbXTtcbiAgQElucHV0KCkgbWFwVHlwZUlkOnN0cmluZz0ncm9hZG1hcCc7XG5cbiAgQE91dHB1dCgpIGxheWVyc0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8QXJyYXk8TWFwcGVkTGF5ZXI+PigpO1xuICBAT3V0cHV0KCkgZmVhdHVyZVNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjx7ZmVhdHVyZTpGZWF0dXJlPEdlb21ldHJ5T2JqZWN0PixsYXllcj86TWFwcGVkTGF5ZXJ9PigpO1xuICBAT3V0cHV0KCkgcG9pbnRTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8TGF0TG5nPigpO1xuICBASW5wdXQoKSBtYXBUeXBlUG9zaXRpb246bnVtYmVyID0gQ29udHJvbFBvc2l0aW9uLkJPVFRPTV9MRUZUXG4gIEBJbnB1dCgpIHN0cmVldFZpZXdDb250cm9sID0gdHJ1ZTtcblxuICBAVmlld0NoaWxkKEFnbU1hcCx7c3RhdGljOmZhbHNlfSkgdGhlTWFwOkFnbU1hcDtcbiAgQFZpZXdDaGlsZHJlbignaW5mb1dpbmRvd3MnKSBpbmZvV2luZG93czpRdWVyeUxpc3Q8QWdtSW5mb1dpbmRvdz47XG5cbiAgc2VsZWN0ZWRGZWF0dXJlOmFueSA9IG51bGw7XG4gIC8vIGdvb2dsZSBtYXBzIHpvb20gbGV2ZWxcbiAgQElucHV0KCkgem9vbTogbnVtYmVyID0gNDtcbiAgQElucHV0KCkgc2hvd01hcFR5cGUgPSB0cnVlO1xuICBtYXBUeXBlT3B0aW9uczogTWFwVHlwZUNvbnRyb2xPcHRpb25zPXtcbiAgICBwb3NpdGlvbjpDb250cm9sUG9zaXRpb24uQk9UVE9NX0xFRlRcbiAgfTtcblxuICAvLyBpbml0aWFsIGNlbnRlciBwb3NpdGlvbiBmb3IgdGhlIG1hcFxuICBASW5wdXQoKSBsYXQ6IG51bWJlciA9IC0yMi42NzM4NTg7XG4gIEBJbnB1dCgpIGxuZzogbnVtYmVyID0gMTI5LjgxNTk4MjtcbiAgQElucHV0KCkgYm91bmRzOkJvdW5kcztcbiAgX2JvdW5kczpCb3VuZHM7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfem9uZTpOZ1pvbmUsXG4gICAgICAgICAgICAgIHByaXZhdGUgc3RhdGljRGF0YTpTdGF0aWNEYXRhU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBtZXRhZGF0YTpNZXRhZGF0YVNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAvLyBpZiB6b29tIGluIGNoYW5nZXMuLi5cbiAgICBpZihjaGFuZ2VzLm1hcFR5cGVQb3NpdGlvbil7XG4gICAgICBpZih0aGlzLm1hcFR5cGVQb3NpdGlvbj09PW51bGwpe1xuICAgICAgICB0aGlzLnNob3dNYXBUeXBlID0gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLm1hcFR5cGVPcHRpb25zID0ge1xuICAgICAgICBwb3NpdGlvbjp0aGlzLm1hcFR5cGVQb3NpdGlvblxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZihjaGFuZ2VzLmxheWVycyl7XG4gICAgICB0aGlzLnNldExheWVyUG9zaXRpb25zKCk7XG4gICAgfVxuXG4gICAgaWYoY2hhbmdlcy5tYXJrZXJzJiZ0aGlzLm1hcmtlcnMpe1xuICAgICAgLy8gZGVhbCB3aXRoIGV4aXN0aW5nIGluZm8gd2luZG93cz9cbiAgICAgIGlmKHRoaXMuaW5mb1dpbmRvd3Mpe1xuICAgICAgICAgIHRoaXMuaW5mb1dpbmRvd3MuZm9yRWFjaCgodyxpKT0+e1xuICAgICAgICAgIHRoaXMuX3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCk9PncuY2xvc2UoKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgIC8vIENoZWNrIGFuZCBvcGVuIHJlbGV2YW50IGluZm8gd2luZG93cy4uLlxuICAgICAgICB0aGlzLmluZm9XaW5kb3dzLmZvckVhY2goKHcsaSk9PntcbiAgICAgICAgICBsZXQgbSA9IHRoaXMubWFya2Vyc1tpXTtcbiAgICAgICAgICBpZihtLm9wZW4pe1xuICAgICAgICAgICAgdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKT0+dy5vcGVuKCkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpPT53LmNsb3NlKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZihjaGFuZ2VzLmJvdW5kcyl7XG4gICAgICBzZXRUaW1lb3V0KCgpPT50aGlzLl9ib3VuZHM9dGhpcy5ib3VuZHMpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgfVxuXG4gIGxheWVyc0NoYW5nZWQoY2hhbmdlczogQXJyYXk8TWFwcGVkTGF5ZXI+KSB7XG4gIH1cblxuICBsYXllckFkZGVkKHNlbGVjdGlvbjogTGF5ZXJTZWxlY3Rpb24pIHtcbiAgICB2YXIgZXggPSB0aGlzLmxheWVycy5maW5kKGwgPT4gbC5sYXllciA9PT0gc2VsZWN0aW9uLmxheWVyKTtcbiAgICBpZiAoZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbWFwcGVkID0gbmV3IE1hcHBlZExheWVyKCk7XG4gICAgbWFwcGVkLmxheWVyID0gc2VsZWN0aW9uLmxheWVyO1xuXG4gICAgbWFwcGVkLmxheWVyVHlwZSA9ICd3bXMnO1xuICAgIG1hcHBlZC5vcHRpb25zLmxlZ2VuZCA9IHRydWU7XG5cbiAgICBpZihzZWxlY3Rpb24ubGF5ZXIub3B0aW9ucy52ZWN0b3JzKXtcbiAgICAgIHRoaXMuc3RhdGljRGF0YS5nZXQoc2VsZWN0aW9uLmxheWVyLm9wdGlvbnMuaG9zdCxzZWxlY3Rpb24ubGF5ZXIub3B0aW9ucy5maWxlcGF0aCkuc3Vic2NyaWJlKFxuICAgICAgICAoZGF0YTphbnkpPT57XG4gICAgICAgICAgbWFwcGVkLnN0YXRpY0RhdGE9ZGF0YTtcbiAgICAgICAgICB0aGlzLmFjdGl2YXRlTGF5ZXIobWFwcGVkLHNlbGVjdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2YXRlTGF5ZXIobWFwcGVkLCBzZWxlY3Rpb24pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWN0aXZhdGVMYXllcihtYXBwZWQ6IE1hcHBlZExheWVyLCBzZWxlY3Rpb246IExheWVyU2VsZWN0aW9uKSB7XG4gICAgbWFwcGVkLnVwZGF0ZSgpO1xuICAgIGlmIChzZWxlY3Rpb24uYWN0aW9uID09PSAncmVwbGFjZScpIHtcbiAgICAgIGlmKHNlbGVjdGlvbi5maWx0ZXIpe1xuICAgICAgICB0aGlzLmxheWVycyA9IHRoaXMubGF5ZXJzLmZpbHRlcihtbD0+IXNlbGVjdGlvbi5maWx0ZXIobWwpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGF5ZXJzID0gW107XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubGF5ZXJzID0gW21hcHBlZF0uY29uY2F0KHRoaXMubGF5ZXJzKTtcbiAgICB0aGlzLnNldExheWVyUG9zaXRpb25zKCk7XG4gICAgdGhpcy5sYXllcnNDaGFuZ2UuZW1pdCh0aGlzLmxheWVycyk7XG4gIH1cblxuICBzZXRMYXllclBvc2l0aW9ucygpe1xuICAgIGxldCBpeD0wO1xuICAgIGZvcih2YXIgaT10aGlzLmxheWVycy5sZW5ndGgtMTtpPj0wO2ktLSl7XG4gICAgICBpZih0aGlzLmxheWVyc1tpXS5sYXllclR5cGU9PT0nd21zJyl7XG4gICAgICAgIHRoaXMubGF5ZXJzW2ldLm9wdGlvbnMucG9zaXRpb249aXg7XG4gICAgICAgIGl4Kys7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGV4dHJhY3RGZWF0dXJlKGY6YW55KSA6IEZlYXR1cmU8UG9pbnQ+e1xuICAgIHZhciBnZW8gPSBmLmdldEdlb21ldHJ5KCk7XG4gICAgZ2VvID0ge1xuICAgICAgdHlwZTonUG9pbnQnLFxuICAgICAgY29vcmRpbmF0ZXM6Z2VvLmdldCgwKVxuICAgIH1cblxuICAgIHZhciBwcm9wczp7W2tleTpzdHJpbmddOmFueX0gPSB7fTtcbiAgICBmLmZvckVhY2hQcm9wZXJ0eSgodmFsOmFueSxwcm9wOnN0cmluZyk9PnByb3BzW3Byb3BdPXZhbCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTonRmVhdHVyZScsXG4gICAgICBnZW9tZXRyeTpnZW8sXG4gICAgICBwcm9wZXJ0aWVzOnByb3BzXG4gICAgfTtcbiAgfVxuXG4gIGNsaWNrZWQoZXZlbnQ6RGF0YU1vdXNlRXZlbnQpe1xuICAgIHZhciBmZWF0dXJlID0gdGhpcy5leHRyYWN0RmVhdHVyZShldmVudC5mZWF0dXJlKTtcbiAgICB0aGlzLnNlbGVjdGVkRmVhdHVyZSA9IGZlYXR1cmU7XG4gICAgdGhpcy5mZWF0dXJlU2VsZWN0ZWQuZW1pdCh7ZmVhdHVyZTpmZWF0dXJlfSk7XG4gIH1cblxuICBjaXJjbGVDbGlja2VkKG1sOk1hcHBlZExheWVyLGZlYXR1cmU6YW55KXtcbiAgICB0aGlzLnNlbGVjdGVkRmVhdHVyZSA9IGZlYXR1cmU7XG4gICAgdGhpcy5mZWF0dXJlU2VsZWN0ZWQuZW1pdCh7ZmVhdHVyZTpmZWF0dXJlLGxheWVyOm1sfSk7XG4gIH1cblxuICBtYXBDbGljayhldmVudDphbnkpe1xuICAgIHZhciBjb29yZHM6TGF0TG5nID0gZXZlbnQuY29vcmRzO1xuICAgIHRoaXMucG9pbnRTZWxlY3RlZC5lbWl0KGNvb3Jkcyk7XG4gIH1cblxuICB6b29tVG9Cb3VuZHMoYm91bmRzOkJvdW5kcyl7XG4gICAgdGhpcy5fYm91bmRzID0gYm91bmRzO1xuICB9XG5cbiAgem9vbUNoYW5nZWQoKXtcbiAgICB0aGlzLmxheWVycyA9IHRoaXMubGF5ZXJzLnNsaWNlKCk7XG4gIH1cbn1cbiJdfQ==