"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeocodingService = void 0;
var core_1 = require("@angular/core");
var core_2 = require("@agm/core");
var rxjs_1 = require("rxjs");
var i0 = require("@angular/core");
var i1 = require("@agm/core");
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
    GeocodingService.ɵfac = function GeocodingService_Factory(t) { return new (t || GeocodingService)(i0.ɵɵinject(i1.MapsAPILoader)); };
    GeocodingService.ɵprov = i0.ɵɵdefineInjectable({ token: GeocodingService, factory: GeocodingService.ɵfac });
    return GeocodingService;
}());
exports.GeocodingService = GeocodingService;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GeocodingService, [{
        type: core_1.Injectable
    }], function () { return [{ type: i1.MapsAPILoader }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvY29kaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJnZW9jb2Rpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBMkM7QUFDM0Msa0NBQXdDO0FBQ3hDLDZCQUFzQzs7O0FBU3RDO0lBRUUsMEJBQW9CLElBQWtCO1FBQWxCLFNBQUksR0FBSixJQUFJLENBQWM7SUFFdEMsQ0FBQztJQUVELGtDQUFPLEdBQVAsVUFBUSxPQUFjLEVBQUMsSUFBUztRQUFoQyxpQkEyQkM7UUExQkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQW9CLFVBQUMsT0FBTyxFQUFDLE1BQU07WUFDMUQsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQU0sZ0JBQWdCLEdBQUc7b0JBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUU7b0JBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVk7aUJBQ3hDLENBQUM7Z0JBQ0YsSUFBSSxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN6QyxPQUFPLENBQUMsT0FBTyxDQUFDO29CQUNkLE9BQU8sRUFBQyxPQUFPO29CQUNmLHFCQUFxQixFQUFFO3dCQUNyQixPQUFPLEVBQUUsSUFBSTtxQkFDZDtvQkFDRCxNQUFNLEVBQUMsSUFBSTtpQkFDWixFQUFDLFVBQUMsT0FBeUIsRUFBQyxNQUFVO29CQUNyQyxJQUFHLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBQyxDQUFDLEVBQUM7d0JBQ3BDLE1BQU0sRUFBRSxDQUFDO3FCQUNWO3lCQUFNO3dCQUNMLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVMsQ0FBSzs0QkFDbkMsT0FBTyxDQUFDLENBQUMsaUJBQWlCLEtBQUcsV0FBVyxDQUFDO3dCQUMzQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNMO2dCQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sV0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7b0ZBaENVLGdCQUFnQjs0REFBaEIsZ0JBQWdCLFdBQWhCLGdCQUFnQjsyQkFaN0I7Q0E2Q0MsQUFsQ0QsSUFrQ0M7QUFqQ1ksNENBQWdCO2tEQUFoQixnQkFBZ0I7Y0FENUIsaUJBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hcHNBUElMb2FkZXJ9IGZyb20gJ0BhZ20vY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIGZyb219IGZyb20gJ3J4anMnO1xuXG5kZWNsYXJlIHZhciBnb29nbGU6YW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIEdlb2NvZGluZ1Jlc3VsdCB7XG4gIGZvcm1hdHRlZF9hZGRyZXNzOnN0cmluZztcbiAgY29vcmRzOiBudW1iZXJbXVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2VvY29kaW5nU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FwaTpNYXBzQVBJTG9hZGVyKXtcblxuICB9XG5cbiAgZ2VvY29kZShhZGRyZXNzOnN0cmluZyxibmRzPzphbnkpOk9ic2VydmFibGU8R2VvY29kaW5nUmVzdWx0W10+e1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2U8R2VvY29kaW5nUmVzdWx0W10+KChyZXNvbHZlLHJlamVjdCk9PntcbiAgICAgIHRoaXMuX2FwaS5sb2FkKCkudGhlbigoKT0+e1xuICAgICAgICBjb25zdCBTVUNDRVNTX1NUQVRVU0VTID0gW1xuICAgICAgICAgIGdvb2dsZS5tYXBzLkdlb2NvZGVyU3RhdHVzLk9LLFxuICAgICAgICAgIGdvb2dsZS5tYXBzLkdlb2NvZGVyU3RhdHVzLlpFUk9fUkVTVUxUU1xuICAgICAgICBdO1xuICAgICAgICB2YXIgc2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcigpO1xuICAgICAgICBzZXJ2aWNlLmdlb2NvZGUoe1xuICAgICAgICAgIGFkZHJlc3M6YWRkcmVzcyxcbiAgICAgICAgICBjb21wb25lbnRSZXN0cmljdGlvbnM6IHtcbiAgICAgICAgICAgIGNvdW50cnk6ICdBVSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlZ2lvbjonQVUnXG4gICAgICAgIH0sKHJlc3VsdHM6R2VvY29kaW5nUmVzdWx0W10sc3RhdHVzOmFueSk9PntcbiAgICAgICAgICBpZihTVUNDRVNTX1NUQVRVU0VTLmluZGV4T2Yoc3RhdHVzKTwwKXtcbiAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdHMuZmlsdGVyKGZ1bmN0aW9uKHI6YW55KXtcbiAgICAgICAgICAgICAgcmV0dXJuIHIuZm9ybWF0dGVkX2FkZHJlc3MhPT0nQXVzdHJhbGlhJztcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZnJvbShwcm9taXNlKTtcbiAgfVxufVxuIl19