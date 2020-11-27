import { AfterViewInit } from '@angular/core';
import { LayeredMapComponent } from '../../layered-map/layered-map.component';
import * as i0 from "@angular/core";
export declare class ZoomInComponent implements AfterViewInit {
    map: LayeredMapComponent;
    maxZoom: number;
    constructor();
    ngAfterViewInit(): void;
    zoomIn(): void;
    static ɵfac: i0.ɵɵFactoryDef<ZoomInComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ZoomInComponent, "zoom-in", never, { "map": "map"; "maxZoom": "maxZoom"; }, {}, never, never>;
}
