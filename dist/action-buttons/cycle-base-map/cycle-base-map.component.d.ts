import { AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { LayeredMapComponent } from '../../layered-map/layered-map.component';
import * as i0 from "@angular/core";
export interface BaseLayer {
    map_type_id: string;
    label: string;
    icon?: string;
}
export declare class CycleBaseMapComponent implements AfterViewInit, OnChanges {
    map: LayeredMapComponent;
    maxZoom: number;
    baseLayers: BaseLayer[];
    baseLayer: BaseLayer;
    tooltip: string;
    constructor();
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    toggleBaseLayer(): void;
    static ɵfac: i0.ɵɵFactoryDef<CycleBaseMapComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CycleBaseMapComponent, "cycle-base-map", never, { "map": "map"; "maxZoom": "maxZoom"; "baseLayers": "baseLayers"; "baseLayer": "baseLayer"; "tooltip": "tooltip"; }, {}, never, never>;
}
