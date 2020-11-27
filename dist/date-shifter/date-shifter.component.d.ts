import { AfterViewInit, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DateShifterComponent implements AfterViewInit, OnChanges {
    interval: number;
    limits: Date[];
    date: Date;
    dateChange: EventEmitter<Date>;
    value: number;
    label: string;
    timer: number;
    dateText: string;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    startTimer(): any;
    ngAfterViewInit(): void;
    reset(): void;
    tick(): any;
    setDateText(): any;
    sliderMoved(): void;
    setLabel(): void;
    static ɵfac: i0.ɵɵFactoryDef<DateShifterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DateShifterComponent, "date-shifter", never, { "interval": "interval"; "limits": "limits"; "date": "date"; }, { "dateChange": "dateChange"; }, never, never>;
}
