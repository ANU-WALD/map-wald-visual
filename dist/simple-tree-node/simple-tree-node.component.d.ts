import { AfterViewInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { TreeModel } from 'map-wald';
import * as i0 from "@angular/core";
export declare class SimpleTreeNodeComponent implements AfterViewInit, OnChanges {
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    tree: TreeModel;
    options: any;
    nodeSelected: EventEmitter<any>;
    expanded: boolean;
    leaf: boolean;
    collapsed: boolean;
    icon: string;
    treeClick(event: any): void;
    private evalState;
    static ɵfac: i0.ɵɵFactoryDef<SimpleTreeNodeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SimpleTreeNodeComponent, "simple-tree-node", never, { "tree": "tree"; "options": "options"; }, { "nodeSelected": "nodeSelected"; }, never, never>;
}
