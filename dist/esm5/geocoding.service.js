"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@agm/core");
var rxjs_1 = require("rxjs");
var GeocodingService = /** @class */ (function () {
    function GeocodingService(_api) {
        this._api = _api;
    }
    GeocodingService.prototype.geocode = function (address, bnds) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this._api.load().then(function () {
                var SUCCESS_STATUSES = [
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
                }, function (results, status) {
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
    };
    GeocodingService.ctorParameters = function () { return [
        { type: core_2.MapsAPILoader }
    ]; };
    GeocodingService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_2.MapsAPILoader])
    ], GeocodingService);
    return GeocodingService;
}());
exports.GeocodingService = GeocodingService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvY29kaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJnZW9jb2Rpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxrQ0FBd0M7QUFDeEMsNkJBQXNDO0FBVXRDO0lBQ0UsMEJBQW9CLElBQWtCO1FBQWxCLFNBQUksR0FBSixJQUFJLENBQWM7SUFFdEMsQ0FBQztJQUVELGtDQUFPLEdBQVAsVUFBUSxPQUFjLEVBQUMsSUFBUztRQUFoQyxpQkEyQkM7UUExQkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQW9CLFVBQUMsT0FBTyxFQUFDLE1BQU07WUFDMUQsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQU0sZ0JBQWdCLEdBQUc7b0JBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUU7b0JBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVk7aUJBQ3hDLENBQUM7Z0JBQ0YsSUFBSSxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN6QyxPQUFPLENBQUMsT0FBTyxDQUFDO29CQUNkLE9BQU8sRUFBQyxPQUFPO29CQUNmLHFCQUFxQixFQUFFO3dCQUNyQixPQUFPLEVBQUUsSUFBSTtxQkFDZDtvQkFDRCxNQUFNLEVBQUMsSUFBSTtpQkFDWixFQUFDLFVBQUMsT0FBeUIsRUFBQyxNQUFVO29CQUNyQyxJQUFHLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBQyxDQUFDLEVBQUM7d0JBQ3BDLE1BQU0sRUFBRSxDQUFDO3FCQUNWO3lCQUFNO3dCQUNMLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVMsQ0FBSzs0QkFDbkMsT0FBTyxDQUFDLENBQUMsaUJBQWlCLEtBQUcsV0FBVyxDQUFDO3dCQUMzQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNMO2dCQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sV0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7O2dCQS9Cd0Isb0JBQWE7O0lBRDNCLGdCQUFnQjtRQUQ1QixpQkFBVSxFQUFFO3lDQUVjLG9CQUFhO09BRDNCLGdCQUFnQixDQWlDNUI7SUFBRCx1QkFBQztDQUFBLEFBakNELElBaUNDO0FBakNZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWFwc0FQSUxvYWRlcn0gZnJvbSAnQGFnbS9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgZnJvbX0gZnJvbSAncnhqcyc7XG5cbmRlY2xhcmUgdmFyIGdvb2dsZTphbnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VvY29kaW5nUmVzdWx0IHtcbiAgZm9ybWF0dGVkX2FkZHJlc3M6c3RyaW5nO1xuICBjb29yZHM6IG51bWJlcltdXG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHZW9jb2RpbmdTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXBpOk1hcHNBUElMb2FkZXIpe1xuXG4gIH1cblxuICBnZW9jb2RlKGFkZHJlc3M6c3RyaW5nLGJuZHM/OmFueSk6T2JzZXJ2YWJsZTxHZW9jb2RpbmdSZXN1bHRbXT57XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZTxHZW9jb2RpbmdSZXN1bHRbXT4oKHJlc29sdmUscmVqZWN0KT0+e1xuICAgICAgdGhpcy5fYXBpLmxvYWQoKS50aGVuKCgpPT57XG4gICAgICAgIGNvbnN0IFNVQ0NFU1NfU1RBVFVTRVMgPSBbXG4gICAgICAgICAgZ29vZ2xlLm1hcHMuR2VvY29kZXJTdGF0dXMuT0ssXG4gICAgICAgICAgZ29vZ2xlLm1hcHMuR2VvY29kZXJTdGF0dXMuWkVST19SRVNVTFRTXG4gICAgICAgIF07XG4gICAgICAgIHZhciBzZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XG4gICAgICAgIHNlcnZpY2UuZ2VvY29kZSh7XG4gICAgICAgICAgYWRkcmVzczphZGRyZXNzLFxuICAgICAgICAgIGNvbXBvbmVudFJlc3RyaWN0aW9uczoge1xuICAgICAgICAgICAgY291bnRyeTogJ0FVJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVnaW9uOidBVSdcbiAgICAgICAgfSwocmVzdWx0czpHZW9jb2RpbmdSZXN1bHRbXSxzdGF0dXM6YW55KT0+e1xuICAgICAgICAgIGlmKFNVQ0NFU1NfU1RBVFVTRVMuaW5kZXhPZihzdGF0dXMpPDApe1xuICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0cy5maWx0ZXIoZnVuY3Rpb24ocjphbnkpe1xuICAgICAgICAgICAgICByZXR1cm4gci5mb3JtYXR0ZWRfYWRkcmVzcyE9PSdBdXN0cmFsaWEnO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmcm9tKHByb21pc2UpO1xuICB9XG59XG4iXX0=