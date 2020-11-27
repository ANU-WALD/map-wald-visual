import { AfterViewInit, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import { Catalog, Layer, LayerSelection, TreeModel, TreeFilterService, MetadataService } from 'map-wald';
import * as i0 from "@angular/core";
export interface CatalogNodeAction {
    action: string;
    icon: string;
    tooltip: string;
}
export declare class CatalogComponent implements AfterViewInit, OnChanges {
    private metadata;
    catalog: Catalog;
    showPlaceholders: boolean;
    defaultAction: string;
    layerActions: CatalogNodeAction[];
    layerSelected: EventEmitter<LayerSelection>;
    collapsedIcon: string;
    expandedIcon: string;
    leafIcon: string;
    layers: Array<Layer>;
    tree: TreeModel;
    filterText: string;
    filterService: TreeFilterService;
    constructor(filterService: TreeFilterService, metadata: MetadataService);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    buildTree(): void;
    layerClick(l: Layer, action: string): void;
    nodeSelected(e: TreeModel): void;
    activeLayers(layers: Layer[]): void;
    highlightLayers(layers: Layer[], tree: TreeModel): boolean;
    static ɵfac: i0.ɵɵFactoryDef<CatalogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CatalogComponent, "catalog", never, { "catalog": "catalog"; "showPlaceholders": "showPlaceholders"; "defaultAction": "defaultAction"; "layerActions": "layerActions"; "collapsedIcon": "collapsedIcon"; "expandedIcon": "expandedIcon"; "leafIcon": "leafIcon"; }, { "layerSelected": "layerSelected"; }, never, never>;
}
