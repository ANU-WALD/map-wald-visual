import { AfterViewInit } from '@angular/core';
import { LayeredMapComponent } from '../../layered-map/layered-map.component';
import { MappedLayer, Bounds } from 'map-wald';
export declare class ZoomLayerComponent implements AfterViewInit {
    map: LayeredMapComponent;
    layer: MappedLayer;
    fullBounds: Bounds;
    constructor();
    ngAfterViewInit(): void;
    zoomToLayer(): void;
}
