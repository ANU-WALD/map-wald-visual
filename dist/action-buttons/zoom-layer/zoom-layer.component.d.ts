import { AfterViewInit } from '@angular/core';
import { LayeredMapComponent } from '../../layered-map/layered-map.component';
import { MappedLayer, Bounds } from 'map-wald';
import * as i0 from "@angular/core";
export declare class ZoomLayerComponent implements AfterViewInit {
    map: LayeredMapComponent;
    layer: MappedLayer;
    fullBounds: Bounds;
    constructor();
    ngAfterViewInit(): void;
    zoomToLayer(): void;
    static ɵfac: i0.ɵɵFactoryDef<ZoomLayerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ZoomLayerComponent, "zoom-layer", never, { "map": "map"; "layer": "layer"; "fullBounds": "fullBounds"; }, {}, never, never>;
}
