import { AfterViewInit, OnChanges, SimpleChanges, EventEmitter, QueryList, NgZone } from '@angular/core';
import { MappedLayer, Bounds, LayerSelection, StaticDataService, MetadataService } from 'map-wald';
import { DataMouseEvent, LatLng, AgmMap, AgmInfoWindow } from '@agm/core';
import { Feature, Point, GeometryObject } from 'geojson';
import { MapTypeControlOptions } from '@agm/core/services/google-maps-types';
import * as i0 from "@angular/core";
export interface SimpleMarker {
    loc: LatLng;
    value: string;
    open: boolean;
    iconUrl: string;
    html?: string;
}
export declare class LayeredMapComponent implements AfterViewInit, OnChanges {
    private _zone;
    private staticData;
    private metadata;
    layers: Array<MappedLayer>;
    markers: Array<SimpleMarker>;
    mapTypeId: string;
    layersChange: EventEmitter<MappedLayer[]>;
    featureSelected: EventEmitter<{
        feature: Feature<GeometryObject>;
        layer?: MappedLayer;
    }>;
    pointSelected: EventEmitter<LatLng>;
    mapTypePosition: number;
    streetViewControl: boolean;
    theMap: AgmMap;
    infoWindows: QueryList<AgmInfoWindow>;
    selectedFeature: any;
    zoom: number;
    showMapType: boolean;
    mapTypeOptions: MapTypeControlOptions;
    lat: number;
    lng: number;
    bounds: Bounds;
    _bounds: Bounds;
    constructor(_zone: NgZone, staticData: StaticDataService, metadata: MetadataService);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    layersChanged(changes: Array<MappedLayer>): void;
    layerAdded(selection: LayerSelection): void;
    private activateLayer;
    setLayerPositions(): void;
    extractFeature(f: any): Feature<Point>;
    clicked(event: DataMouseEvent): void;
    circleClicked(ml: MappedLayer, feature: any): void;
    mapClick(event: any): void;
    zoomToBounds(bounds: Bounds): void;
    zoomChanged(): void;
    static ɵfac: i0.ɵɵFactoryDef<LayeredMapComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<LayeredMapComponent, "layered-map", never, { "layers": "layers"; "markers": "markers"; "mapTypeId": "mapTypeId"; "mapTypePosition": "mapTypePosition"; "streetViewControl": "streetViewControl"; "zoom": "zoom"; "showMapType": "showMapType"; "lat": "lat"; "lng": "lng"; "bounds": "bounds"; }, { "layersChange": "layersChange"; "featureSelected": "featureSelected"; "pointSelected": "pointSelected"; }, never, [".map-control.top-center", ".map-control.top-left", ".map-control.top-right", ".map-control.left-top", ".map-control.right-top", ".map-control.left-center", ".map-control.right-center", ".map-control.left-bottom", ".map-control.right-bottom", ".map-control.bottom-center", ".map-control.bottom-left", ".map-control.bottom-right"]>;
}
