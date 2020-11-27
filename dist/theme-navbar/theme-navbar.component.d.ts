import { AfterViewInit, EventEmitter } from '@angular/core';
import { Catalog, Layer, LayerSelection, LayerAction } from "map-wald";
import * as i0 from "@angular/core";
export declare class ThemeNavbarComponent implements AfterViewInit {
    catalog: Catalog;
    includeSearch: boolean;
    layerSelected: EventEmitter<LayerSelection>;
    constructor();
    ngAfterViewInit(): void;
    layerClick(event: any, layer: Layer, action: LayerAction): void;
    stop(event: any): void;
    static ɵfac: i0.ɵɵFactoryDef<ThemeNavbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ThemeNavbarComponent, "theme-navbar", never, { "catalog": "catalog"; "includeSearch": "includeSearch"; }, { "layerSelected": "layerSelected"; }, never, never>;
}
