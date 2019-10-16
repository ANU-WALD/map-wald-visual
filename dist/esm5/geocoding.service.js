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
                var service = new google.maps.Geocoder();
                service.geocode({
                    address: address,
                    componentRestrictions: {
                        country: 'AU'
                    },
                    region: 'AU'
                }, function (results, status) {
                    if (status !== google.maps.GeocoderStatus.OK) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvY29kaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJnZW9jb2Rpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxrQ0FBd0M7QUFDeEMsNkJBQXNDO0FBS3RDO0lBQ0UsMEJBQW9CLElBQWtCO1FBQWxCLFNBQUksR0FBSixJQUFJLENBQWM7SUFFdEMsQ0FBQztJQUVELGtDQUFPLEdBQVAsVUFBUSxPQUFjLEVBQUMsSUFBUztRQUFoQyxpQkF1QkM7UUF0QkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUMsTUFBTTtZQUN2QyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQztnQkFDcEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN6QyxPQUFPLENBQUMsT0FBTyxDQUFDO29CQUNkLE9BQU8sRUFBQyxPQUFPO29CQUNmLHFCQUFxQixFQUFFO3dCQUNyQixPQUFPLEVBQUUsSUFBSTtxQkFDZDtvQkFDRCxNQUFNLEVBQUMsSUFBSTtpQkFDWixFQUFDLFVBQUMsT0FBVyxFQUFDLE1BQVU7b0JBQ3ZCLElBQUcsTUFBTSxLQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBQzt3QkFDeEMsTUFBTSxFQUFFLENBQUM7cUJBQ1Y7eUJBQU07d0JBQ0wsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBUyxDQUFLOzRCQUNuQyxPQUFPLENBQUMsQ0FBQyxpQkFBaUIsS0FBRyxXQUFXLENBQUM7d0JBQzNDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ0w7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxXQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7Z0JBM0J3QixvQkFBYTs7SUFEM0IsZ0JBQWdCO1FBRDVCLGlCQUFVLEVBQUU7eUNBRWMsb0JBQWE7T0FEM0IsZ0JBQWdCLENBNkI1QjtJQUFELHVCQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3QlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXBzQVBJTG9hZGVyfSBmcm9tICdAYWdtL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBmcm9tfSBmcm9tICdyeGpzJztcblxuZGVjbGFyZSB2YXIgZ29vZ2xlOmFueTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdlb2NvZGluZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hcGk6TWFwc0FQSUxvYWRlcil7XG5cbiAgfVxuXG4gIGdlb2NvZGUoYWRkcmVzczpzdHJpbmcsYm5kcz86YW55KTpPYnNlcnZhYmxlPGFueT57XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XG4gICAgICB0aGlzLl9hcGkubG9hZCgpLnRoZW4oKCk9PntcbiAgICAgICAgdmFyIHNlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuR2VvY29kZXIoKTtcbiAgICAgICAgc2VydmljZS5nZW9jb2RlKHtcbiAgICAgICAgICBhZGRyZXNzOmFkZHJlc3MsXG4gICAgICAgICAgY29tcG9uZW50UmVzdHJpY3Rpb25zOiB7XG4gICAgICAgICAgICBjb3VudHJ5OiAnQVUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZWdpb246J0FVJ1xuICAgICAgICB9LChyZXN1bHRzOmFueSxzdGF0dXM6YW55KT0+e1xuICAgICAgICAgIGlmKHN0YXR1cyE9PWdvb2dsZS5tYXBzLkdlb2NvZGVyU3RhdHVzLk9LKXtcbiAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdHMuZmlsdGVyKGZ1bmN0aW9uKHI6YW55KXtcbiAgICAgICAgICAgICAgcmV0dXJuIHIuZm9ybWF0dGVkX2FkZHJlc3MhPT0nQXVzdHJhbGlhJztcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZnJvbShwcm9taXNlKTtcbiAgfVxufVxuIl19