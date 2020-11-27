"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeocodingService = void 0;
const core_1 = require("@angular/core");
const core_2 = require("@agm/core");
const rxjs_1 = require("rxjs");
const i0 = require("@angular/core");
const i1 = require("@agm/core");
class GeocodingService {
    constructor(_api) {
        this._api = _api;
    }
    geocode(address, bnds) {
        var promise = new Promise((resolve, reject) => {
            this._api.load().then(() => {
                const SUCCESS_STATUSES = [
                    google.maps.GeocoderStatus.OK,
                    google.maps.GeocoderStatus.ZERO_RESULTS
                ];
                var service = new google.maps.Geocoder();
                service.geocode({
                    address: address,
                    componentRestrictions: {
                        country: 'AU'
                    },
                    region: 'AU'
                }, (results, status) => {
                    if (SUCCESS_STATUSES.indexOf(status) < 0) {
                        reject();
                    }
                    else {
                        resolve(results.filter(function (r) {
                            return r.formatted_address !== 'Australia';
                        }));
                    }
                });
            });
        });
        return rxjs_1.from(promise);
    }
}
exports.GeocodingService = GeocodingService;
GeocodingService.ɵfac = function GeocodingService_Factory(t) { return new (t || GeocodingService)(i0.ɵɵinject(i1.MapsAPILoader)); };
GeocodingService.ɵprov = i0.ɵɵdefineInjectable({ token: GeocodingService, factory: GeocodingService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GeocodingService, [{
        type: core_1.Injectable
    }], function () { return [{ type: i1.MapsAPILoader }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvY29kaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJnZW9jb2Rpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBMkM7QUFDM0Msb0NBQXdDO0FBQ3hDLCtCQUFzQzs7O0FBU3RDLE1BQ2EsZ0JBQWdCO0lBQzNCLFlBQW9CLElBQWtCO1FBQWxCLFNBQUksR0FBSixJQUFJLENBQWM7SUFFdEMsQ0FBQztJQUVELE9BQU8sQ0FBQyxPQUFjLEVBQUMsSUFBUztRQUM5QixJQUFJLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBb0IsQ0FBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLEVBQUU7WUFDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRSxFQUFFO2dCQUN4QixNQUFNLGdCQUFnQixHQUFHO29CQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFO29CQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZO2lCQUN4QyxDQUFDO2dCQUNGLElBQUksT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDekMsT0FBTyxDQUFDLE9BQU8sQ0FBQztvQkFDZCxPQUFPLEVBQUMsT0FBTztvQkFDZixxQkFBcUIsRUFBRTt3QkFDckIsT0FBTyxFQUFFLElBQUk7cUJBQ2Q7b0JBQ0QsTUFBTSxFQUFDLElBQUk7aUJBQ1osRUFBQyxDQUFDLE9BQXlCLEVBQUMsTUFBVSxFQUFDLEVBQUU7b0JBQ3hDLElBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFDLENBQUMsRUFBQzt3QkFDcEMsTUFBTSxFQUFFLENBQUM7cUJBQ1Y7eUJBQU07d0JBQ0wsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBUyxDQUFLOzRCQUNuQyxPQUFPLENBQUMsQ0FBQyxpQkFBaUIsS0FBRyxXQUFXLENBQUM7d0JBQzNDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ0w7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxXQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7QUFqQ0gsNENBa0NDO2dGQWpDWSxnQkFBZ0I7d0RBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0I7a0RBQWhCLGdCQUFnQjtjQUQ1QixpQkFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWFwc0FQSUxvYWRlcn0gZnJvbSAnQGFnbS9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgZnJvbX0gZnJvbSAncnhqcyc7XG5cbmRlY2xhcmUgdmFyIGdvb2dsZTphbnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VvY29kaW5nUmVzdWx0IHtcbiAgZm9ybWF0dGVkX2FkZHJlc3M6c3RyaW5nO1xuICBjb29yZHM6IG51bWJlcltdXG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHZW9jb2RpbmdTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXBpOk1hcHNBUElMb2FkZXIpe1xuXG4gIH1cblxuICBnZW9jb2RlKGFkZHJlc3M6c3RyaW5nLGJuZHM/OmFueSk6T2JzZXJ2YWJsZTxHZW9jb2RpbmdSZXN1bHRbXT57XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZTxHZW9jb2RpbmdSZXN1bHRbXT4oKHJlc29sdmUscmVqZWN0KT0+e1xuICAgICAgdGhpcy5fYXBpLmxvYWQoKS50aGVuKCgpPT57XG4gICAgICAgIGNvbnN0IFNVQ0NFU1NfU1RBVFVTRVMgPSBbXG4gICAgICAgICAgZ29vZ2xlLm1hcHMuR2VvY29kZXJTdGF0dXMuT0ssXG4gICAgICAgICAgZ29vZ2xlLm1hcHMuR2VvY29kZXJTdGF0dXMuWkVST19SRVNVTFRTXG4gICAgICAgIF07XG4gICAgICAgIHZhciBzZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XG4gICAgICAgIHNlcnZpY2UuZ2VvY29kZSh7XG4gICAgICAgICAgYWRkcmVzczphZGRyZXNzLFxuICAgICAgICAgIGNvbXBvbmVudFJlc3RyaWN0aW9uczoge1xuICAgICAgICAgICAgY291bnRyeTogJ0FVJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVnaW9uOidBVSdcbiAgICAgICAgfSwocmVzdWx0czpHZW9jb2RpbmdSZXN1bHRbXSxzdGF0dXM6YW55KT0+e1xuICAgICAgICAgIGlmKFNVQ0NFU1NfU1RBVFVTRVMuaW5kZXhPZihzdGF0dXMpPDApe1xuICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0cy5maWx0ZXIoZnVuY3Rpb24ocjphbnkpe1xuICAgICAgICAgICAgICByZXR1cm4gci5mb3JtYXR0ZWRfYWRkcmVzcyE9PSdBdXN0cmFsaWEnO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmcm9tKHByb21pc2UpO1xuICB9XG59XG4iXX0=