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
const core_1 = require("@angular/core");
const core_2 = require("@agm/core");
const rxjs_1 = require("rxjs");
let GeocodingService = class GeocodingService {
    constructor(_api) {
        this._api = _api;
    }
    geocode(address, bnds) {
        var promise = new Promise((resolve, reject) => {
            this._api.load().then(() => {
                var service = new google.maps.Geocoder();
                service.geocode({
                    address: address,
                    componentRestrictions: {
                        country: 'AU'
                    },
                    region: 'AU'
                }, (results, status) => {
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
    }
};
GeocodingService.ctorParameters = () => [
    { type: core_2.MapsAPILoader }
];
GeocodingService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_2.MapsAPILoader])
], GeocodingService);
exports.GeocodingService = GeocodingService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvY29kaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJnZW9jb2Rpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHdDQUEyQztBQUMzQyxvQ0FBd0M7QUFDeEMsK0JBQXNDO0FBS3RDLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBQzNCLFlBQW9CLElBQWtCO1FBQWxCLFNBQUksR0FBSixJQUFJLENBQWM7SUFFdEMsQ0FBQztJQUVELE9BQU8sQ0FBQyxPQUFjLEVBQUMsSUFBUztRQUM5QixJQUFJLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFFLEVBQUU7Z0JBQ3hCLElBQUksT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDekMsT0FBTyxDQUFDLE9BQU8sQ0FBQztvQkFDZCxPQUFPLEVBQUMsT0FBTztvQkFDZixxQkFBcUIsRUFBRTt3QkFDckIsT0FBTyxFQUFFLElBQUk7cUJBQ2Q7b0JBQ0QsTUFBTSxFQUFDLElBQUk7aUJBQ1osRUFBQyxDQUFDLE9BQVcsRUFBQyxNQUFVLEVBQUMsRUFBRTtvQkFDMUIsSUFBRyxNQUFNLEtBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFDO3dCQUN4QyxNQUFNLEVBQUUsQ0FBQztxQkFDVjt5QkFBTTt3QkFDTCxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFTLENBQUs7NEJBQ25DLE9BQU8sQ0FBQyxDQUFDLGlCQUFpQixLQUFHLFdBQVcsQ0FBQzt3QkFDM0MsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDTDtnQkFDSCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLFdBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDO0NBQ0YsQ0FBQTs7WUE1QjBCLG9CQUFhOztBQUQzQixnQkFBZ0I7SUFENUIsaUJBQVUsRUFBRTtxQ0FFYyxvQkFBYTtHQUQzQixnQkFBZ0IsQ0E2QjVCO0FBN0JZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWFwc0FQSUxvYWRlcn0gZnJvbSAnQGFnbS9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgZnJvbX0gZnJvbSAncnhqcyc7XG5cbmRlY2xhcmUgdmFyIGdvb2dsZTphbnk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHZW9jb2RpbmdTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXBpOk1hcHNBUElMb2FkZXIpe1xuXG4gIH1cblxuICBnZW9jb2RlKGFkZHJlc3M6c3RyaW5nLGJuZHM/OmFueSk6T2JzZXJ2YWJsZTxhbnk+e1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xuICAgICAgdGhpcy5fYXBpLmxvYWQoKS50aGVuKCgpPT57XG4gICAgICAgIHZhciBzZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XG4gICAgICAgIHNlcnZpY2UuZ2VvY29kZSh7XG4gICAgICAgICAgYWRkcmVzczphZGRyZXNzLFxuICAgICAgICAgIGNvbXBvbmVudFJlc3RyaWN0aW9uczoge1xuICAgICAgICAgICAgY291bnRyeTogJ0FVJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVnaW9uOidBVSdcbiAgICAgICAgfSwocmVzdWx0czphbnksc3RhdHVzOmFueSk9PntcbiAgICAgICAgICBpZihzdGF0dXMhPT1nb29nbGUubWFwcy5HZW9jb2RlclN0YXR1cy5PSyl7XG4gICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHRzLmZpbHRlcihmdW5jdGlvbihyOmFueSl7XG4gICAgICAgICAgICAgIHJldHVybiByLmZvcm1hdHRlZF9hZGRyZXNzIT09J0F1c3RyYWxpYSc7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZyb20ocHJvbWlzZSk7XG4gIH1cbn1cbiJdfQ==