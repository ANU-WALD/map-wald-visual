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
const map_wald_1 = require("map-wald");
let WMSLayerComponent = class WMSLayerComponent {
    constructor(_wmsService, _wrapper) {
        this._wmsService = _wmsService;
        this._wrapper = _wrapper;
        this.opacity = 1.0;
        this.position = 0;
        this.zoom = 4;
        this.building = false;
    }
    buildMap() {
        if (this.building)
            return;
        this.building = true;
        this._wrapper.getNativeMap().then((theMap) => {
            this.building = false;
            this.map = theMap;
            this.overlay = this._wmsService.buildImageMap(() => this.map, (z) => this.url + '?', (z) => this.params, () => this.opacity);
            if (this.map.overlayMapTypes.length > this.position) {
                this.map.overlayMapTypes.removeAt(this.position);
                this.map.overlayMapTypes.insertAt(this.position, this.overlay);
            }
            else {
                while (this.map.overlayMapTypes.length <= this.position) {
                    // Temporarily add replicate layers.
                    // These should be replaced by other wms-layer components
                    this.map.overlayMapTypes.push(this.overlay);
                }
            }
        }).catch((e) => console.log(e));
    }
    ngOnInit() {
        if (this.url) {
            this.buildMap();
        }
    }
    ngOnChanges(changes) {
        if (this.url) {
            this.buildMap();
        }
        // let currentOpacity: number = changes.opacity.currentValue;
        // let previousOpacity: number = changes.opacity.previousValue;
        // if (currentOpacity !== previousOpacity) {
        //   console.log('building a map off my own bat');
        //   this.buildMap();
        // }
    }
    ngOnDestroy() {
        this._wrapper.getNativeMap().then((theMap) => {
            if (this.map.overlayMapTypes.length > this.position) {
                this.map.overlayMapTypes.removeAt(this.position);
            }
        });
    }
};
WMSLayerComponent.ctorParameters = () => [
    { type: map_wald_1.WMSService },
    { type: core_2.GoogleMapsAPIWrapper }
];
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WMSLayerComponent.prototype, "url", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], WMSLayerComponent.prototype, "params", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WMSLayerComponent.prototype, "opacity", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WMSLayerComponent.prototype, "position", void 0);
WMSLayerComponent = __decorate([
    core_1.Component({
        selector: 'wms-layer',
        template: ''
    }),
    __metadata("design:paramtypes", [map_wald_1.WMSService,
        core_2.GoogleMapsAPIWrapper])
], WMSLayerComponent);
exports.WMSLayerComponent = WMSLayerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid21zLWxheWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLXZpc3VhbC8iLCJzb3VyY2VzIjpbIndtcy1sYXllci93bXMtbGF5ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQ29FO0FBQ3BFLG9DQUErQztBQUMvQyx1Q0FBb0M7QUFNcEMsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFNNUIsWUFBb0IsV0FBc0IsRUFDdkIsUUFBNkI7UUFENUIsZ0JBQVcsR0FBWCxXQUFXLENBQVc7UUFDdkIsYUFBUSxHQUFSLFFBQVEsQ0FBcUI7UUFKdkMsWUFBTyxHQUFRLEdBQUcsQ0FBQztRQUNuQixhQUFRLEdBQVEsQ0FBQyxDQUFDO1FBTTNCLFNBQUksR0FBVyxDQUFDLENBQUM7UUFFVCxhQUFRLEdBQVMsS0FBSyxDQUFDO0lBTG9CLENBQUM7SUFNcEQsUUFBUTtRQUNOLElBQUcsSUFBSSxDQUFDLFFBQVE7WUFDZCxPQUFPO1FBQ1QsSUFBSSxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUM7UUFFbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFDLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztZQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUN6QyxHQUFFLEVBQUUsQ0FBQSxJQUFJLENBQUMsR0FBRyxFQUNaLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQSxJQUFJLENBQUMsR0FBRyxHQUFDLEdBQUcsRUFDakIsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFBLElBQUksQ0FBQyxNQUFNLEVBQ2hCLEdBQUUsRUFBRSxDQUFBLElBQUksQ0FBQyxPQUFPLENBQ2pCLENBQUM7WUFFSixJQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDO2dCQUMvQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNqRCxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDL0Q7aUJBQU07Z0JBQ0wsT0FBTSxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxNQUFNLElBQUUsSUFBSSxDQUFDLFFBQVEsRUFBQztvQkFDbkQsb0NBQW9DO29CQUNwQyx5REFBeUQ7b0JBQ3pELElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQzdDO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUcsSUFBSSxDQUFDLEdBQUcsRUFBQztZQUNWLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNqQjtJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBRyxJQUFJLENBQUMsR0FBRyxFQUFDO1lBQ1YsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2pCO1FBQ0QsNkRBQTZEO1FBQzdELCtEQUErRDtRQUUvRCw0Q0FBNEM7UUFDNUMsa0RBQWtEO1FBQ2xELHFCQUFxQjtRQUNyQixJQUFJO0lBQ04sQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBQyxFQUFFO1lBQzFDLElBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQyxRQUFRLEVBQUM7Z0JBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbEQ7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBOztZQTdEaUMscUJBQVU7WUFDZCwyQkFBb0I7O0FBTnZDO0lBQVIsWUFBSyxFQUFFOzs4Q0FBYTtBQUNaO0lBQVIsWUFBSyxFQUFFOztpREFBWTtBQUNYO0lBQVIsWUFBSyxFQUFFOztrREFBb0I7QUFDbkI7SUFBUixZQUFLLEVBQUU7O21EQUFtQjtBQUpoQixpQkFBaUI7SUFKN0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFFBQVEsRUFBQyxFQUFFO0tBQ1osQ0FBQztxQ0FPZ0MscUJBQVU7UUFDZCwyQkFBb0I7R0FQckMsaUJBQWlCLENBbUU3QjtBQW5FWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQsXG4gICAgICAgICBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtHb29nbGVNYXBzQVBJV3JhcHBlcn0gZnJvbSAnQGFnbS9jb3JlJztcbmltcG9ydCB7V01TU2VydmljZX0gZnJvbSAnbWFwLXdhbGQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3bXMtbGF5ZXInLFxuICB0ZW1wbGF0ZTonJyxcbn0pXG5leHBvcnQgY2xhc3MgV01TTGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveXtcbiAgQElucHV0KCkgdXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBhcmFtczphbnk7XG4gIEBJbnB1dCgpIG9wYWNpdHk6bnVtYmVyPTEuMDtcbiAgQElucHV0KCkgcG9zaXRpb246bnVtYmVyPTA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfd21zU2VydmljZTpXTVNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwdWJsaWMgX3dyYXBwZXI6R29vZ2xlTWFwc0FQSVdyYXBwZXIpIHt9XG4gIG1hcDogYW55O1xuICBvdmVybGF5OmFueTtcbiAgem9vbTogbnVtYmVyID0gNDtcblxuICBwcml2YXRlIGJ1aWxkaW5nOmJvb2xlYW49ZmFsc2U7XG4gIGJ1aWxkTWFwKCl7XG4gICAgaWYodGhpcy5idWlsZGluZylcbiAgICAgIHJldHVybjtcbiAgICB0aGlzLmJ1aWxkaW5nPXRydWU7XG5cbiAgICB0aGlzLl93cmFwcGVyLmdldE5hdGl2ZU1hcCgpLnRoZW4oKHRoZU1hcCk9PntcbiAgICAgIHRoaXMuYnVpbGRpbmc9ZmFsc2U7XG4gICAgICB0aGlzLm1hcCA9IHRoZU1hcDtcbiAgICAgIHRoaXMub3ZlcmxheSA9IHRoaXMuX3dtc1NlcnZpY2UuYnVpbGRJbWFnZU1hcChcbiAgICAgICAgICAoKT0+dGhpcy5tYXAsXG4gICAgICAgICAgKHopPT50aGlzLnVybCsnPycsXG4gICAgICAgICAgKHopPT50aGlzLnBhcmFtcyxcbiAgICAgICAgICAoKT0+dGhpcy5vcGFjaXR5XG4gICAgICAgICk7XG5cbiAgICAgIGlmKHRoaXMubWFwLm92ZXJsYXlNYXBUeXBlcy5sZW5ndGg+dGhpcy5wb3NpdGlvbil7XG4gICAgICAgIHRoaXMubWFwLm92ZXJsYXlNYXBUeXBlcy5yZW1vdmVBdCh0aGlzLnBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5tYXAub3ZlcmxheU1hcFR5cGVzLmluc2VydEF0KHRoaXMucG9zaXRpb24sdGhpcy5vdmVybGF5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdoaWxlKHRoaXMubWFwLm92ZXJsYXlNYXBUeXBlcy5sZW5ndGg8PXRoaXMucG9zaXRpb24pe1xuICAgICAgICAgIC8vIFRlbXBvcmFyaWx5IGFkZCByZXBsaWNhdGUgbGF5ZXJzLlxuICAgICAgICAgIC8vIFRoZXNlwqBzaG91bGQgYmUgcmVwbGFjZWQgYnkgb3RoZXIgd21zLWxheWVyIGNvbXBvbmVudHNcbiAgICAgICAgICB0aGlzLm1hcC5vdmVybGF5TWFwVHlwZXMucHVzaCh0aGlzLm92ZXJsYXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkuY2F0Y2goKGUpPT5jb25zb2xlLmxvZyhlKSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZih0aGlzLnVybCl7XG4gICAgICB0aGlzLmJ1aWxkTWFwKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmKHRoaXMudXJsKXtcbiAgICAgIHRoaXMuYnVpbGRNYXAoKTtcbiAgICB9XG4gICAgLy8gbGV0IGN1cnJlbnRPcGFjaXR5OiBudW1iZXIgPSBjaGFuZ2VzLm9wYWNpdHkuY3VycmVudFZhbHVlO1xuICAgIC8vIGxldCBwcmV2aW91c09wYWNpdHk6IG51bWJlciA9IGNoYW5nZXMub3BhY2l0eS5wcmV2aW91c1ZhbHVlO1xuXG4gICAgLy8gaWYgKGN1cnJlbnRPcGFjaXR5ICE9PSBwcmV2aW91c09wYWNpdHkpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdidWlsZGluZyBhIG1hcCBvZmYgbXkgb3duIGJhdCcpO1xuICAgIC8vICAgdGhpcy5idWlsZE1hcCgpO1xuICAgIC8vIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3dyYXBwZXIuZ2V0TmF0aXZlTWFwKCkudGhlbigodGhlTWFwKT0+e1xuICAgICAgaWYodGhpcy5tYXAub3ZlcmxheU1hcFR5cGVzLmxlbmd0aD50aGlzLnBvc2l0aW9uKXtcbiAgICAgICAgdGhpcy5tYXAub3ZlcmxheU1hcFR5cGVzLnJlbW92ZUF0KHRoaXMucG9zaXRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=