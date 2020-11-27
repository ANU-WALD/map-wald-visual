import { AfterViewInit } from '@angular/core';
import { LayeredMapComponent } from '../../layered-map/layered-map.component';
import { Bounds } from 'map-wald';
import * as i0 from "@angular/core";
export declare class ZoomFullComponent implements AfterViewInit {
    map: LayeredMapComponent;
    bounds: Bounds;
    constructor();
    ngAfterViewInit(): void;
    zoomToBounds(): void;
    static ɵfac: i0.ɵɵFactoryDef<ZoomFullComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ZoomFullComponent, "zoom-full", never, { "map": "map"; "bounds": "bounds"; }, {}, never, never>;
}
