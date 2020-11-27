import { AfterViewInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DateElementComponent implements AfterViewInit {
    label: string;
    property: string;
    src: any;
    step: number;
    changed: EventEmitter<any>;
    constructor();
    ngAfterViewInit(): void;
    move(n: number): void;
    static ɵfac: i0.ɵɵFactoryDef<DateElementComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DateElementComponent, "date-element", never, { "label": "label"; "property": "property"; "src": "src"; "step": "step"; }, { "changed": "changed"; }, never, never>;
}
