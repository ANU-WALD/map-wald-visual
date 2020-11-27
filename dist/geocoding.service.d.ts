import { MapsAPILoader } from '@agm/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export interface GeocodingResult {
    formatted_address: string;
    coords: number[];
}
export declare class GeocodingService {
    private _api;
    constructor(_api: MapsAPILoader);
    geocode(address: string, bnds?: any): Observable<GeocodingResult[]>;
    static ɵfac: i0.ɵɵFactoryDef<GeocodingService, never>;
    static ɵprov: i0.ɵɵInjectableDef<GeocodingService>;
}
