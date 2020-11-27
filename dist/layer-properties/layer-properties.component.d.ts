import { AfterViewInit, EventEmitter, OnDestroy } from '@angular/core';
import { MappedLayer, Publication, LayerTagValue, LayerTagMap, PointSelectionService, PointSelection } from 'map-wald';
import { LayeredMapComponent } from '../layered-map/layered-map.component';
import { GeometryObject, Feature } from 'geojson';
import * as i0 from "@angular/core";
export declare class LayerPropertiesComponent implements AfterViewInit, OnDestroy {
    private pointSelectionService;
    getKeys: {
        (o: object): string[];
        (o: {}): string[];
    };
    layer: MappedLayer;
    map: LayeredMapComponent;
    propertyChanged: EventEmitter<any>;
    tooltipPlacement: string;
    availableTags: LayerTagMap;
    tags: {
        [key: string]: string;
    };
    pointVariables: LayerTagValue[];
    selectedVariable: string;
    selectedFeature: Feature<GeometryObject>;
    selectedFeatureSubscription: any;
    constructor(pointSelectionService: PointSelectionService);
    get publication(): (Publication | null);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    featureSelected(evt: {
        feature: Feature<GeometryObject>;
        layer?: MappedLayer;
    }): void;
    publicationSelected(idx: number): void;
    updateLayer(): void;
    update(event: any): void;
    processTags(tags: {
        [key: string]: Array<string | LayerTagValue>;
    }): LayerTagMap;
    findTags(): void;
    tagChanged(t: string): void;
    setDefaultTags(): void;
    zoomToExtent(): void;
    pointSelection(): PointSelection;
    queryPointData(): void;
    updateVariables(): void;
    pointSelectionChanged(): void;
    static ɵfac: i0.ɵɵFactoryDef<LayerPropertiesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<LayerPropertiesComponent, "layer-properties", never, { "layer": "layer"; "map": "map"; "tooltipPlacement": "tooltipPlacement"; }, { "propertyChanged": "propertyChanged"; }, never, never>;
}
