import { AfterViewInit, EventEmitter } from '@angular/core';
import { Catalog, Layer, LayerSelection, LayerAction } from "map-wald";
export declare class ThemeNavbarComponent implements AfterViewInit {
    catalog: Catalog;
    includeSearch: boolean;
    layerSelected: EventEmitter<LayerSelection>;
    constructor();
    ngAfterViewInit(): void;
    layerClick(event: any, layer: Layer, action: LayerAction): void;
    stop(event: any): void;
}
