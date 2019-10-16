import { AfterViewInit } from '@angular/core';
import { LayeredMapComponent } from '../../layered-map/layered-map.component';
import { Bounds } from 'map-wald';
export declare class ZoomFullComponent implements AfterViewInit {
    map: LayeredMapComponent;
    bounds: Bounds;
    constructor();
    ngAfterViewInit(): void;
    zoomToBounds(): void;
}
