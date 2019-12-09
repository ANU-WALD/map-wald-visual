import { MapsAPILoader } from '@agm/core';
import { Observable } from 'rxjs';
export interface GeocodingResult {
    formatted_address: string;
    coords: number[];
}
export declare class GeocodingService {
    private _api;
    constructor(_api: MapsAPILoader);
    geocode(address: string, bnds?: any): Observable<GeocodingResult[]>;
}
