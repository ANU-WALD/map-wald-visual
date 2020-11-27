import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';
import * as i0 from "@angular/core";
export declare class MapControlComponent implements OnInit, AfterViewInit {
    private _el;
    _wrapper: GoogleMapsAPIWrapper;
    mapControl: Component;
    position: string;
    constructor(_el: ElementRef, _wrapper: GoogleMapsAPIWrapper);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<MapControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MapControlComponent, "map-control", never, { "position": "position"; }, {}, never, ["*"]>;
}
