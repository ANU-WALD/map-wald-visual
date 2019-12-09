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
};
GeocodingService.ctorParameters = () => [
    { type: core_2.MapsAPILoader }
];
GeocodingService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_2.MapsAPILoader])
], GeocodingService);
exports.GeocodingService = GeocodingService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvY29kaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJnZW9jb2Rpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHdDQUEyQztBQUMzQyxvQ0FBd0M7QUFDeEMsK0JBQXNDO0FBVXRDLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBQzNCLFlBQW9CLElBQWtCO1FBQWxCLFNBQUksR0FBSixJQUFJLENBQWM7SUFFdEMsQ0FBQztJQUVELE9BQU8sQ0FBQyxPQUFjLEVBQUMsSUFBUztRQUM5QixJQUFJLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBb0IsQ0FBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLEVBQUU7WUFDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRSxFQUFFO2dCQUN4QixNQUFNLGdCQUFnQixHQUFHO29CQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFO29CQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZO2lCQUN4QyxDQUFDO2dCQUNGLElBQUksT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDekMsT0FBTyxDQUFDLE9BQU8sQ0FBQztvQkFDZCxPQUFPLEVBQUMsT0FBTztvQkFDZixxQkFBcUIsRUFBRTt3QkFDckIsT0FBTyxFQUFFLElBQUk7cUJBQ2Q7b0JBQ0QsTUFBTSxFQUFDLElBQUk7aUJBQ1osRUFBQyxDQUFDLE9BQXlCLEVBQUMsTUFBVSxFQUFDLEVBQUU7b0JBQ3hDLElBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFDLENBQUMsRUFBQzt3QkFDcEMsTUFBTSxFQUFFLENBQUM7cUJBQ1Y7eUJBQU07d0JBQ0wsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBUyxDQUFLOzRCQUNuQyxPQUFPLENBQUMsQ0FBQyxpQkFBaUIsS0FBRyxXQUFXLENBQUM7d0JBQzNDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ0w7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxXQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkIsQ0FBQztDQUNGLENBQUE7O1lBaEMwQixvQkFBYTs7QUFEM0IsZ0JBQWdCO0lBRDVCLGlCQUFVLEVBQUU7cUNBRWMsb0JBQWE7R0FEM0IsZ0JBQWdCLENBaUM1QjtBQWpDWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hcHNBUElMb2FkZXJ9IGZyb20gJ0BhZ20vY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIGZyb219IGZyb20gJ3J4anMnO1xuXG5kZWNsYXJlIHZhciBnb29nbGU6YW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIEdlb2NvZGluZ1Jlc3VsdCB7XG4gIGZvcm1hdHRlZF9hZGRyZXNzOnN0cmluZztcbiAgY29vcmRzOiBudW1iZXJbXVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2VvY29kaW5nU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FwaTpNYXBzQVBJTG9hZGVyKXtcblxuICB9XG5cbiAgZ2VvY29kZShhZGRyZXNzOnN0cmluZyxibmRzPzphbnkpOk9ic2VydmFibGU8R2VvY29kaW5nUmVzdWx0W10+e1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2U8R2VvY29kaW5nUmVzdWx0W10+KChyZXNvbHZlLHJlamVjdCk9PntcbiAgICAgIHRoaXMuX2FwaS5sb2FkKCkudGhlbigoKT0+e1xuICAgICAgICBjb25zdCBTVUNDRVNTX1NUQVRVU0VTID0gW1xuICAgICAgICAgIGdvb2dsZS5tYXBzLkdlb2NvZGVyU3RhdHVzLk9LLFxuICAgICAgICAgIGdvb2dsZS5tYXBzLkdlb2NvZGVyU3RhdHVzLlpFUk9fUkVTVUxUU1xuICAgICAgICBdO1xuICAgICAgICB2YXIgc2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcigpO1xuICAgICAgICBzZXJ2aWNlLmdlb2NvZGUoe1xuICAgICAgICAgIGFkZHJlc3M6YWRkcmVzcyxcbiAgICAgICAgICBjb21wb25lbnRSZXN0cmljdGlvbnM6IHtcbiAgICAgICAgICAgIGNvdW50cnk6ICdBVSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlZ2lvbjonQVUnXG4gICAgICAgIH0sKHJlc3VsdHM6R2VvY29kaW5nUmVzdWx0W10sc3RhdHVzOmFueSk9PntcbiAgICAgICAgICBpZihTVUNDRVNTX1NUQVRVU0VTLmluZGV4T2Yoc3RhdHVzKTwwKXtcbiAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdHMuZmlsdGVyKGZ1bmN0aW9uKHI6YW55KXtcbiAgICAgICAgICAgICAgcmV0dXJuIHIuZm9ybWF0dGVkX2FkZHJlc3MhPT0nQXVzdHJhbGlhJztcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZnJvbShwcm9taXNlKTtcbiAgfVxufVxuIl19