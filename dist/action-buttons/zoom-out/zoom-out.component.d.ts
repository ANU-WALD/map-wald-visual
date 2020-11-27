import { AfterViewInit } from '@angular/core';
import { LayeredMapComponent } from '../../layered-map/layered-map.component';
import * as i0 from "@angular/core";
export declare class ZoomOutComponent implements AfterViewInit {
    map: LayeredMapComponent;
    minZoom: number;
    constructor();
    ngAfterViewInit(): void;
    zoomOut(): void;
    static ɵfac: i0.ɵɵFactoryDef<ZoomOutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ZoomOutComponent, "zoom-out", never, { "map": "map"; "minZoom": "minZoom"; }, {}, never, never>;
}
