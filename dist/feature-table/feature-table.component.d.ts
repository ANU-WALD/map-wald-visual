import { AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { LayerPropertyStyle } from 'map-wald';
import * as i0 from "@angular/core";
export declare class FeatureTableComponent implements AfterViewInit, OnChanges {
    feature: any;
    styles: {
        [key: string]: LayerPropertyStyle;
    };
    _keys: {
        (o: object): string[];
        (o: {}): string[];
    };
    constructor();
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDef<FeatureTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FeatureTableComponent, "feature-table", never, { "feature": "feature"; "styles": "styles"; }, {}, never, never>;
}
