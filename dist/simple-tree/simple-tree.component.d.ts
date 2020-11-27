import { AfterViewInit, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { TreeModel } from 'map-wald';
import * as i0 from "@angular/core";
export declare class SimpleTreeComponent implements AfterViewInit, OnChanges {
    tree: TreeModel;
    showTop: boolean;
    inner: boolean;
    collapsedIcon: string;
    expandedIcon: string;
    leafIcon: string;
    nodeSelected: EventEmitter<any>;
    options: any;
    constructor();
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    childSelected(node: TreeModel): void;
    static ɵfac: i0.ɵɵFactoryDef<SimpleTreeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SimpleTreeComponent, "simple-tree", never, { "tree": "tree"; "showTop": "showTop"; "inner": "inner"; "collapsedIcon": "collapsedIcon"; "expandedIcon": "expandedIcon"; "leafIcon": "leafIcon"; "options": "options"; }, { "nodeSelected": "nodeSelected"; }, never, never>;
}
