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
const core_2 = require("@agm/core");
const google_maps_types_1 = require("@agm/core/services/google-maps-types");
let LayeredMapComponent = class LayeredMapComponent {
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
};
LayeredMapComponent.ctorParameters = () => [
    { type: core_1.NgZone },
    { type: map_wald_1.StaticDataService },
    { type: map_wald_1.MetadataService }
];
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], LayeredMapComponent.prototype, "layers", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], LayeredMapComponent.prototype, "markers", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LayeredMapComponent.prototype, "mapTypeId", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LayeredMapComponent.prototype, "layersChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LayeredMapComponent.prototype, "featureSelected", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LayeredMapComponent.prototype, "pointSelected", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], LayeredMapComponent.prototype, "mapTypePosition", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LayeredMapComponent.prototype, "streetViewControl", void 0);
__decorate([
    core_1.ViewChild(core_2.AgmMap, { static: false }),
    __metadata("design:type", core_2.AgmMap)
], LayeredMapComponent.prototype, "theMap", void 0);
__decorate([
    core_1.ViewChildren('infoWindows'),
    __metadata("design:type", core_1.QueryList)
], LayeredMapComponent.prototype, "infoWindows", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], LayeredMapComponent.prototype, "zoom", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LayeredMapComponent.prototype, "showMapType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], LayeredMapComponent.prototype, "lat", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], LayeredMapComponent.prototype, "lng", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LayeredMapComponent.prototype, "bounds", void 0);
LayeredMapComponent = __decorate([
    core_1.Component({
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
    __metadata("design:paramtypes", [core_1.NgZone,
        map_wald_1.StaticDataService,
        map_wald_1.MetadataService])
], LayeredMapComponent);
exports.LayeredMapComponent = LayeredMapComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJlZC1tYXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtdmlzdWFsLyIsInNvdXJjZXMiOlsibGF5ZXJlZC1tYXAvbGF5ZXJlZC1tYXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQ3NGO0FBQ3RGLHVDQUFvRztBQUNwRyxvQ0FBeUU7QUFFekUsNEVBQThGO0FBMEg5RixJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQTRCOUIsWUFBb0IsS0FBWSxFQUNaLFVBQTRCLEVBQzVCLFFBQXdCO1FBRnhCLFVBQUssR0FBTCxLQUFLLENBQU87UUFDWixlQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUM1QixhQUFRLEdBQVIsUUFBUSxDQUFnQjtRQTdCbkMsV0FBTSxHQUF1QixFQUFFLENBQUM7UUFDaEMsWUFBTyxHQUF1QixFQUFFLENBQUM7UUFDakMsY0FBUyxHQUFRLFNBQVMsQ0FBQztRQUUxQixpQkFBWSxHQUFHLElBQUksbUJBQVksRUFBc0IsQ0FBQztRQUN0RCxvQkFBZSxHQUFHLElBQUksbUJBQVksRUFBd0QsQ0FBQztRQUMzRixrQkFBYSxHQUFHLElBQUksbUJBQVksRUFBVSxDQUFDO1FBQzVDLG9CQUFlLEdBQVUsbUNBQWUsQ0FBQyxXQUFXLENBQUE7UUFDcEQsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBS2xDLG9CQUFlLEdBQU8sSUFBSSxDQUFDO1FBQzNCLHlCQUF5QjtRQUNoQixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQzVCLG1CQUFjLEdBQXdCO1lBQ3BDLFFBQVEsRUFBQyxtQ0FBZSxDQUFDLFdBQVc7U0FDckMsQ0FBQztRQUVGLHNDQUFzQztRQUM3QixRQUFHLEdBQVcsQ0FBQyxTQUFTLENBQUM7UUFDekIsUUFBRyxHQUFXLFVBQVUsQ0FBQztJQU9sQyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hD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LDRCQUFpQjtRQUNuQiwwQkFBZTtHQTlCakMsbUJBQW1CLENBc0svQjtBQXRLWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyxcbiAgICAgICAgIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXBwZWRMYXllciwgQm91bmRzLCBMYXllclNlbGVjdGlvbiwgU3RhdGljRGF0YVNlcnZpY2UsIE1ldGFkYXRhU2VydmljZSAgfSBmcm9tICdtYXAtd2FsZCc7XG5pbXBvcnQgeyBEYXRhTW91c2VFdmVudCwgTGF0TG5nLCBBZ21NYXAsIEFnbUluZm9XaW5kb3d9IGZyb20gJ0BhZ20vY29yZSc7XG5pbXBvcnQgeyBGZWF0dXJlLCBQb2ludCwgR2VvbWV0cnlPYmplY3QgfSBmcm9tICdnZW9qc29uJztcbmltcG9ydCB7IE1hcFR5cGVDb250cm9sT3B0aW9ucywgQ29udHJvbFBvc2l0aW9uIH0gZnJvbSAnQGFnbS9jb3JlL3NlcnZpY2VzL2dvb2dsZS1tYXBzLXR5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBTaW1wbGVNYXJrZXIge1xuICBsb2M6TGF0TG5nO1xuICB2YWx1ZTpzdHJpbmc7XG4gIG9wZW46Ym9vbGVhbjtcbiAgaWNvblVybDpzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xheWVyZWQtbWFwJyxcbiAgdGVtcGxhdGU6IGA8YWdtLW1hcCAjdGhlTWFwXG5bKGxhdGl0dWRlKV09XCJsYXRcIlxuWyhsb25naXR1ZGUpXT1cImxuZ1wiXG5bKHpvb20pXT1cInpvb21cIlxuKHpvb21DaGFuZ2UpPVwiem9vbUNoYW5nZWQoKVwiXG5bZGlzYWJsZURlZmF1bHRVSV09XCJmYWxzZVwiXG5bem9vbUNvbnRyb2xdPVwiZmFsc2VcIlxuW21hcFR5cGVJZF09XCJtYXBUeXBlSWRcIlxuW21hcFR5cGVDb250cm9sXT1cInNob3dNYXBUeXBlXCJcblttYXBUeXBlQ29udHJvbE9wdGlvbnNdPVwibWFwVHlwZU9wdGlvbnNcIlxuW3N0cmVldFZpZXdDb250cm9sXT1cInN0cmVldFZpZXdDb250cm9sXCJcbnNjYWxlQ29udHJvbD1cInRydWVcIlxuW2ZpdEJvdW5kc109XCJfYm91bmRzXCJcbihtYXBDbGljayk9XCJtYXBDbGljaygkZXZlbnQpXCI+XG5cbjxhZ20tbWFya2VyICpuZ0Zvcj1cImxldCBtYXJrZXIgb2YgbWFya2Vyc1wiXG4gICAgICAgICAgICBbbG9uZ2l0dWRlXT1cIm1hcmtlci5sb2MubG5nXCJcbiAgICAgICAgICAgIFtsYXRpdHVkZV09XCJtYXJrZXIubG9jLmxhdFwiXG4gICAgICAgICAgICBbaWNvblVybF09XCJtYXJrZXIuaWNvblVybFwiPlxuICA8YWdtLWluZm8td2luZG93ICNpbmZvV2luZG93cyBbZGlzYWJsZUF1dG9QYW5dPVwidHJ1ZVwiPlxuICAgIDxzdHJvbmc+e3ttYXJrZXIudmFsdWV9fTwvc3Ryb25nPlxuICA8L2FnbS1pbmZvLXdpbmRvdz5cbjwvYWdtLW1hcmtlcj5cblxuPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbXAgb2YgbGF5ZXJzLnNsaWNlKCl8cmV2ZXJzZTsgbGV0IGkgPSBpbmRleFwiIFtuZ1N3aXRjaF09XCJtcC5sYXllclR5cGVcIj5cbiAgPHdtcy1sYXllciAqbmdTd2l0Y2hDYXNlPVwiJ3dtcydcIlxuICAgIFt1cmxdPVwibXAudXJsXCJcbiAgICBbcGFyYW1zXT1cIm1wLndtc1BhcmFtZXRlcnNcIlxuICAgIFtvcGFjaXR5XT1cIm1wLm9wYWNpdHlcIlxuICAgIFtwb3NpdGlvbl09XCJtcC5vcHRpb25zLnBvc2l0aW9uXCI+XG4gIDwvd21zLWxheWVyPlxuICA8YWdtLWRhdGEtbGF5ZXIgKm5nU3dpdGNoQ2FzZT1cIid2ZWN0b3InXCJcbiAgICAgICAgICAgICAgICBbZ2VvSnNvbl09XCJtcC5zdGF0aWNEYXRhXCJcbiAgICAgICAgICAgICAgICBbc3R5bGVdPVwibXAuX3N0eWxlRnVuY1wiXG4gICAgICAgICAgICAgICAgKGxheWVyQ2xpY2spPVwiY2xpY2tlZCgkZXZlbnQpXCJcblxuICAgICAgICAgICAgICAgID5cbiAgPC9hZ20tZGF0YS1sYXllcj5cblxuICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInY2lyY2xlJ1wiPlxuICAgIDxhZ20tY2lyY2xlICpuZ0Zvcj1cImxldCBmIG9mIG1wLnN0YXRpY0RhdGEuZmVhdHVyZXM7IGxldCBqPWluZGV4XCJcbiAgICAgICAgICAgICAgICBbbGF0aXR1ZGVdPVwiZi5nZW9tZXRyeS5jb29yZGluYXRlc1sxXVwiXG4gICAgICAgICAgICAgICAgW2xvbmdpdHVkZV09XCJmLmdlb21ldHJ5LmNvb3JkaW5hdGVzWzBdXCJcbiAgICAgICAgICAgICAgICBbcmFkaXVzXT1cIjEwMDAwMDAwLyh6b29tKnpvb20qem9vbSp6b29tKVwiXG4gICAgICAgICAgICAgICAgW2ZpbGxDb2xvcl09XCJtcC5mbGF0dGVuZWRTZXR0aW5ncz8uc3R5bGVzPy5maWxsQ29sb3J8fCdibGFjaydcIlxuICAgICAgICAgICAgICAgIFtmaWxsT3BhY2l0eV09XCJtcC5mbGF0dGVuZWRTZXR0aW5ncz8uc3R5bGVzPy5maWxsT3BhY2l0eXx8MVwiXG4gICAgICAgICAgICAgICAgW3N0cm9rZUNvbG9yXT1cIm1wLmZsYXR0ZW5lZFNldHRpbmdzPy5zdHlsZXM/LnN0cm9rZUNvbG9yfHwnYmxhY2snXCJcbiAgICAgICAgICAgICAgICBbc3Ryb2tlT3BhY2l0eV09XCJtcC5mbGF0dGVuZWRTZXR0aW5ncz8uc3R5bGVzPy5zdHJva2VPcGFjaXR5fHwxXCJcbiAgICAgICAgICAgICAgICBbc3Ryb2tlUG9zaXRpb25dPVwiMFwiXG4gICAgICAgICAgICAgICAgW3N0cm9rZVdlaWdodF09XCIoZj09PXNlbGVjdGVkRmVhdHVyZSk/MzoobXAuZmxhdHRlbmVkU2V0dGluZ3M/LnN0eWxlcz8uc3Ryb2tlV2VpZ2h0fHwwLjUpXCJcbiAgICAgICAgICAgICAgICAoY2lyY2xlQ2xpY2spPVwiY2lyY2xlQ2xpY2tlZChtcCxmKVwiXG4gICAgICAgICAgICAgICAgPlxuICAgIDwvYWdtLWNpcmNsZT5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLVxuICAtLT5cbjwvbmctY29udGFpbmVyPlxuXG48IS0tIGZvciBtYXAgY29udHJvbHMgLS0+XG48bWFwLWNvbnRyb2wgcG9zaXRpb249XCJUT1BfQ0VOVEVSXCI+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiLm1hcC1jb250cm9sLnRvcC1jZW50ZXJcIj48L25nLWNvbnRlbnQ+XG48L21hcC1jb250cm9sPlxuXG48bWFwLWNvbnRyb2wgcG9zaXRpb249XCJUT1BfTEVGVFwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIi5tYXAtY29udHJvbC50b3AtbGVmdFwiPjwvbmctY29udGVudD5cbjwvbWFwLWNvbnRyb2w+XG5cbjxtYXAtY29udHJvbCBwb3NpdGlvbj1cIlRPUF9SSUdIVFwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIi5tYXAtY29udHJvbC50b3AtcmlnaHRcIj48L25nLWNvbnRlbnQ+XG48L21hcC1jb250cm9sPlxuXG48bWFwLWNvbnRyb2wgcG9zaXRpb249XCJMRUZUX1RPUFwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIi5tYXAtY29udHJvbC5sZWZ0LXRvcFwiPjwvbmctY29udGVudD5cbjwvbWFwLWNvbnRyb2w+XG5cbjxtYXAtY29udHJvbCBwb3NpdGlvbj1cIlJJR0hUX1RPUFwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIi5tYXAtY29udHJvbC5yaWdodC10b3BcIj48L25nLWNvbnRlbnQ+XG48L21hcC1jb250cm9sPlxuXG48bWFwLWNvbnRyb2wgcG9zaXRpb249XCJMRUZUX0NFTlRFUlwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIi5tYXAtY29udHJvbC5sZWZ0LWNlbnRlclwiPjwvbmctY29udGVudD5cbjwvbWFwLWNvbnRyb2w+XG5cbjxtYXAtY29udHJvbCBwb3NpdGlvbj1cIlJJR0hUX0NFTlRFUlwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIi5tYXAtY29udHJvbC5yaWdodC1jZW50ZXJcIj48L25nLWNvbnRlbnQ+XG48L21hcC1jb250cm9sPlxuXG48bWFwLWNvbnRyb2wgcG9zaXRpb249XCJMRUZUX0JPVFRPTVwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIi5tYXAtY29udHJvbC5sZWZ0LWJvdHRvbVwiPjwvbmctY29udGVudD5cbjwvbWFwLWNvbnRyb2w+XG5cbjxtYXAtY29udHJvbCBwb3NpdGlvbj1cIlJJR0hUX0JPVFRPTVwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIi5tYXAtY29udHJvbC5yaWdodC1ib3R0b21cIj48L25nLWNvbnRlbnQ+XG48L21hcC1jb250cm9sPlxuXG48bWFwLWNvbnRyb2wgcG9zaXRpb249XCJCT1RUT01fQ0VOVEVSXCI+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiLm1hcC1jb250cm9sLmJvdHRvbS1jZW50ZXJcIj48L25nLWNvbnRlbnQ+XG48L21hcC1jb250cm9sPlxuXG48bWFwLWNvbnRyb2wgcG9zaXRpb249XCJCT1RUT01fTEVGVFwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIi5tYXAtY29udHJvbC5ib3R0b20tbGVmdFwiPjwvbmctY29udGVudD5cbjwvbWFwLWNvbnRyb2w+XG5cbjxtYXAtY29udHJvbCBwb3NpdGlvbj1cIkJPVFRPTV9SSUdIVFwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIi5tYXAtY29udHJvbC5ib3R0b20tcmlnaHRcIj48L25nLWNvbnRlbnQ+XG48L21hcC1jb250cm9sPlxuXG48L2FnbS1tYXA+XG5cbmAsc3R5bGVzOiBbXX0pXG5leHBvcnQgY2xhc3MgTGF5ZXJlZE1hcENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGxheWVyczogQXJyYXk8TWFwcGVkTGF5ZXI+ID0gW107XG4gIEBJbnB1dCgpIG1hcmtlcnM6QXJyYXk8U2ltcGxlTWFya2VyPiA9IFtdO1xuICBASW5wdXQoKSBtYXBUeXBlSWQ6c3RyaW5nPSdyb2FkbWFwJztcblxuICBAT3V0cHV0KCkgbGF5ZXJzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxBcnJheTxNYXBwZWRMYXllcj4+KCk7XG4gIEBPdXRwdXQoKSBmZWF0dXJlU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHtmZWF0dXJlOkZlYXR1cmU8R2VvbWV0cnlPYmplY3Q+LGxheWVyPzpNYXBwZWRMYXllcn0+KCk7XG4gIEBPdXRwdXQoKSBwb2ludFNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxMYXRMbmc+KCk7XG4gIEBJbnB1dCgpIG1hcFR5cGVQb3NpdGlvbjpudW1iZXIgPSBDb250cm9sUG9zaXRpb24uQk9UVE9NX0xFRlRcbiAgQElucHV0KCkgc3RyZWV0Vmlld0NvbnRyb2wgPSB0cnVlO1xuXG4gIEBWaWV3Q2hpbGQoQWdtTWFwLHtzdGF0aWM6ZmFsc2V9KSB0aGVNYXA6QWdtTWFwO1xuICBAVmlld0NoaWxkcmVuKCdpbmZvV2luZG93cycpIGluZm9XaW5kb3dzOlF1ZXJ5TGlzdDxBZ21JbmZvV2luZG93PjtcblxuICBzZWxlY3RlZEZlYXR1cmU6YW55ID0gbnVsbDtcbiAgLy8gZ29vZ2xlIG1hcHMgem9vbSBsZXZlbFxuICBASW5wdXQoKSB6b29tOiBudW1iZXIgPSA0O1xuICBASW5wdXQoKSBzaG93TWFwVHlwZSA9IHRydWU7XG4gIG1hcFR5cGVPcHRpb25zOiBNYXBUeXBlQ29udHJvbE9wdGlvbnM9e1xuICAgIHBvc2l0aW9uOkNvbnRyb2xQb3NpdGlvbi5CT1RUT01fTEVGVFxuICB9O1xuXG4gIC8vIGluaXRpYWwgY2VudGVyIHBvc2l0aW9uIGZvciB0aGUgbWFwXG4gIEBJbnB1dCgpIGxhdDogbnVtYmVyID0gLTIyLjY3Mzg1ODtcbiAgQElucHV0KCkgbG5nOiBudW1iZXIgPSAxMjkuODE1OTgyO1xuICBASW5wdXQoKSBib3VuZHM6Qm91bmRzO1xuICBfYm91bmRzOkJvdW5kcztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF96b25lOk5nWm9uZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzdGF0aWNEYXRhOlN0YXRpY0RhdGFTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIG1ldGFkYXRhOk1ldGFkYXRhU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIC8vIGlmIHpvb20gaW4gY2hhbmdlcy4uLlxuICAgIGlmKGNoYW5nZXMubWFwVHlwZVBvc2l0aW9uKXtcbiAgICAgIGlmKHRoaXMubWFwVHlwZVBvc2l0aW9uPT09bnVsbCl7XG4gICAgICAgIHRoaXMuc2hvd01hcFR5cGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMubWFwVHlwZU9wdGlvbnMgPSB7XG4gICAgICAgIHBvc2l0aW9uOnRoaXMubWFwVHlwZVBvc2l0aW9uXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmKGNoYW5nZXMubGF5ZXJzKXtcbiAgICAgIHRoaXMuc2V0TGF5ZXJQb3NpdGlvbnMoKTtcbiAgICB9XG5cbiAgICBpZihjaGFuZ2VzLm1hcmtlcnMmJnRoaXMubWFya2Vycyl7XG4gICAgICAvLyBkZWFsIHdpdGggZXhpc3RpbmcgaW5mbyB3aW5kb3dzP1xuICAgICAgaWYodGhpcy5pbmZvV2luZG93cyl7XG4gICAgICAgICAgdGhpcy5pbmZvV2luZG93cy5mb3JFYWNoKCh3LGkpPT57XG4gICAgICAgICAgdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKT0+dy5jbG9zZSgpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgLy8gQ2hlY2sgYW5kIG9wZW4gcmVsZXZhbnQgaW5mbyB3aW5kb3dzLi4uXG4gICAgICAgIHRoaXMuaW5mb1dpbmRvd3MuZm9yRWFjaCgodyxpKT0+e1xuICAgICAgICAgIGxldCBtID0gdGhpcy5tYXJrZXJzW2ldO1xuICAgICAgICAgIGlmKG0ub3Blbil7XG4gICAgICAgICAgICB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpPT53Lm9wZW4oKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCk9PncuY2xvc2UoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmKGNoYW5nZXMuYm91bmRzKXtcbiAgICAgIHNldFRpbWVvdXQoKCk9PnRoaXMuX2JvdW5kcz10aGlzLmJvdW5kcyk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICB9XG5cbiAgbGF5ZXJzQ2hhbmdlZChjaGFuZ2VzOiBBcnJheTxNYXBwZWRMYXllcj4pIHtcbiAgfVxuXG4gIGxheWVyQWRkZWQoc2VsZWN0aW9uOiBMYXllclNlbGVjdGlvbikge1xuICAgIHZhciBleCA9IHRoaXMubGF5ZXJzLmZpbmQobCA9PiBsLmxheWVyID09PSBzZWxlY3Rpb24ubGF5ZXIpO1xuICAgIGlmIChleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBtYXBwZWQgPSBuZXcgTWFwcGVkTGF5ZXIoKTtcbiAgICBtYXBwZWQubGF5ZXIgPSBzZWxlY3Rpb24ubGF5ZXI7XG5cbiAgICBtYXBwZWQubGF5ZXJUeXBlID0gJ3dtcyc7XG4gICAgbWFwcGVkLm9wdGlvbnMubGVnZW5kID0gdHJ1ZTtcblxuICAgIGlmKHNlbGVjdGlvbi5sYXllci5vcHRpb25zLnZlY3RvcnMpe1xuICAgICAgdGhpcy5zdGF0aWNEYXRhLmdldChzZWxlY3Rpb24ubGF5ZXIub3B0aW9ucy5ob3N0LHNlbGVjdGlvbi5sYXllci5vcHRpb25zLmZpbGVwYXRoKS5zdWJzY3JpYmUoXG4gICAgICAgIChkYXRhOmFueSk9PntcbiAgICAgICAgICBtYXBwZWQuc3RhdGljRGF0YT1kYXRhO1xuICAgICAgICAgIHRoaXMuYWN0aXZhdGVMYXllcihtYXBwZWQsc2VsZWN0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZhdGVMYXllcihtYXBwZWQsIHNlbGVjdGlvbik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhY3RpdmF0ZUxheWVyKG1hcHBlZDogTWFwcGVkTGF5ZXIsIHNlbGVjdGlvbjogTGF5ZXJTZWxlY3Rpb24pIHtcbiAgICBtYXBwZWQudXBkYXRlKCk7XG4gICAgaWYgKHNlbGVjdGlvbi5hY3Rpb24gPT09ICdyZXBsYWNlJykge1xuICAgICAgaWYoc2VsZWN0aW9uLmZpbHRlcil7XG4gICAgICAgIHRoaXMubGF5ZXJzID0gdGhpcy5sYXllcnMuZmlsdGVyKG1sPT4hc2VsZWN0aW9uLmZpbHRlcihtbCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sYXllcnMgPSBbXTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5sYXllcnMgPSBbbWFwcGVkXS5jb25jYXQodGhpcy5sYXllcnMpO1xuICAgIHRoaXMuc2V0TGF5ZXJQb3NpdGlvbnMoKTtcbiAgICB0aGlzLmxheWVyc0NoYW5nZS5lbWl0KHRoaXMubGF5ZXJzKTtcbiAgfVxuXG4gIHNldExheWVyUG9zaXRpb25zKCl7XG4gICAgbGV0IGl4PTA7XG4gICAgZm9yKHZhciBpPXRoaXMubGF5ZXJzLmxlbmd0aC0xO2k+PTA7aS0tKXtcbiAgICAgIGlmKHRoaXMubGF5ZXJzW2ldLmxheWVyVHlwZT09PSd3bXMnKXtcbiAgICAgICAgdGhpcy5sYXllcnNbaV0ub3B0aW9ucy5wb3NpdGlvbj1peDtcbiAgICAgICAgaXgrKztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZXh0cmFjdEZlYXR1cmUoZjphbnkpIDogRmVhdHVyZTxQb2ludD57XG4gICAgdmFyIGdlbyA9IGYuZ2V0R2VvbWV0cnkoKTtcbiAgICBnZW8gPSB7XG4gICAgICB0eXBlOidQb2ludCcsXG4gICAgICBjb29yZGluYXRlczpnZW8uZ2V0KDApXG4gICAgfVxuXG4gICAgdmFyIHByb3BzOntba2V5OnN0cmluZ106YW55fSA9IHt9O1xuICAgIGYuZm9yRWFjaFByb3BlcnR5KCh2YWw6YW55LHByb3A6c3RyaW5nKT0+cHJvcHNbcHJvcF09dmFsKTtcblxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOidGZWF0dXJlJyxcbiAgICAgIGdlb21ldHJ5OmdlbyxcbiAgICAgIHByb3BlcnRpZXM6cHJvcHNcbiAgICB9O1xuICB9XG5cbiAgY2xpY2tlZChldmVudDpEYXRhTW91c2VFdmVudCl7XG4gICAgdmFyIGZlYXR1cmUgPSB0aGlzLmV4dHJhY3RGZWF0dXJlKGV2ZW50LmZlYXR1cmUpO1xuICAgIHRoaXMuc2VsZWN0ZWRGZWF0dXJlID0gZmVhdHVyZTtcbiAgICB0aGlzLmZlYXR1cmVTZWxlY3RlZC5lbWl0KHtmZWF0dXJlOmZlYXR1cmV9KTtcbiAgfVxuXG4gIGNpcmNsZUNsaWNrZWQobWw6TWFwcGVkTGF5ZXIsZmVhdHVyZTphbnkpe1xuICAgIHRoaXMuc2VsZWN0ZWRGZWF0dXJlID0gZmVhdHVyZTtcbiAgICB0aGlzLmZlYXR1cmVTZWxlY3RlZC5lbWl0KHtmZWF0dXJlOmZlYXR1cmUsbGF5ZXI6bWx9KTtcbiAgfVxuXG4gIG1hcENsaWNrKGV2ZW50OmFueSl7XG4gICAgdmFyIGNvb3JkczpMYXRMbmcgPSBldmVudC5jb29yZHM7XG4gICAgdGhpcy5wb2ludFNlbGVjdGVkLmVtaXQoY29vcmRzKTtcbiAgfVxuXG4gIHpvb21Ub0JvdW5kcyhib3VuZHM6Qm91bmRzKXtcbiAgICB0aGlzLl9ib3VuZHMgPSBib3VuZHM7XG4gIH1cblxuICB6b29tQ2hhbmdlZCgpe1xuICAgIHRoaXMubGF5ZXJzID0gdGhpcy5sYXllcnMuc2xpY2UoKTtcbiAgfVxufVxuIl19