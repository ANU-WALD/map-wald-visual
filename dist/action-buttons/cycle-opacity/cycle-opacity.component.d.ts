import { AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { LayeredMapComponent } from '../../layered-map/layered-map.component';
import * as i0 from "@angular/core";
export declare class CycleOpacityComponent implements AfterViewInit, OnChanges {
    map: LayeredMapComponent;
    maxZoom: number;
    tooltip: string;
    layerOpacity: number;
    step: number;
    constructor();
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    cycleTransparency(): void;
    private updateLayers;
    static ɵfac: i0.ɵɵFactoryDef<CycleOpacityComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CycleOpacityComponent, "cycle-opacity", never, { "map": "map"; "maxZoom": "maxZoom"; "tooltip": "tooltip"; "layerOpacity": "layerOpacity"; "step": "step"; }, {}, never, never>;
}
