/// <reference path="../decs.d.ts" />
import { AfterViewInit, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { TimeSeries } from 'map-wald';
import * as i0 from "@angular/core";
export declare class TimeseriesChartComponent implements AfterViewInit, OnChanges {
    private _element;
    title: string;
    timeSeries: Array<TimeSeries>;
    marginLeft: number;
    marginRight: number;
    marginTop: number;
    marginBottom: number;
    titlefont: any;
    constructor(_element: ElementRef);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    draw(): void;
    static ɵfac: i0.ɵɵFactoryDef<TimeseriesChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TimeseriesChartComponent, "timeseries-chart", never, { "title": "title"; "timeSeries": "timeSeries"; "marginLeft": "marginLeft"; "marginRight": "marginRight"; "marginTop": "marginTop"; "marginBottom": "marginBottom"; "titlefont": "titlefont"; }, {}, never, never>;
}
