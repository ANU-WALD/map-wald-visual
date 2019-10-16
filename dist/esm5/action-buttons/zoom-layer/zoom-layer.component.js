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
var layered_map_component_1 = require("../../layered-map/layered-map.component");
var map_wald_1 = require("map-wald");
var ZoomLayerComponent = /** @class */ (function () {
    function ZoomLayerComponent() {
    }
    ZoomLayerComponent.prototype.ngAfterViewInit = function () {
    };
    ZoomLayerComponent.prototype.zoomToLayer = function () {
        var _this = this;
        if (this.layer.layer.spatialExtent) {
            console.log('Zoom to layer');
            this.layer.layer.spatialExtent.subscribe(function (b) {
                _this.map.zoomToBounds(Object.assign({}, b));
            });
        }
        else {
            console.log('Zoom full');
            this.map.zoomToBounds(Object.assign({}, this.fullBounds));
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", layered_map_component_1.LayeredMapComponent)
    ], ZoomLayerComponent.prototype, "map", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", map_wald_1.MappedLayer)
    ], ZoomLayerComponent.prototype, "layer", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ZoomLayerComponent.prototype, "fullBounds", void 0);
    ZoomLayerComponent = __decorate([
        core_1.Component({
            selector: 'zoom-layer',
            template: "<button type=\"button\" [disabled]=\"!layer\" class=\"btn btn-secondary btn-sm\"\n        ngbTooltip=\"Zoom to selected layer\"\n        placement=\"right\"\n        (click)=\"zoomToLayer()\"\n><i class=\"fa fa-compress\"></i>\n</button>\n"
        }),
        __metadata("design:paramtypes", [])
    ], ZoomLayerComponent);
    return ZoomLayerComponent;
}());
exports.ZoomLayerComponent = ZoomLayerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS1sYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJhY3Rpb24tYnV0dG9ucy96b29tLWxheWVyL3pvb20tbGF5ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXVGO0FBQ3ZGLGlGQUE4RTtBQUM5RSxxQ0FBK0M7QUFjL0M7SUFLRTtJQUVBLENBQUM7SUFFRCw0Q0FBZSxHQUFmO0lBRUEsQ0FBQztJQUVELHdDQUFXLEdBQVg7UUFBQSxpQkFVQztRQVRDLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFDO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7Z0JBQ3hDLEtBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0MsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztTQUMzRDtJQUNILENBQUM7SUF0QlE7UUFBUixZQUFLLEVBQUU7a0NBQU0sMkNBQW1CO21EQUFDO0lBQ3pCO1FBQVIsWUFBSyxFQUFFO2tDQUFRLHNCQUFXO3FEQUFDO0lBQ25CO1FBQVIsWUFBSyxFQUFFOzswREFBb0I7SUFIakIsa0JBQWtCO1FBVDlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsaVBBTVg7U0FBWSxDQUFDOztPQUNELGtCQUFrQixDQXdCOUI7SUFBRCx5QkFBQztDQUFBLEFBeEJELElBd0JDO0FBeEJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF5ZXJlZE1hcENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2xheWVyZWQtbWFwL2xheWVyZWQtbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXBwZWRMYXllciwgQm91bmRzIH0gZnJvbSAnbWFwLXdhbGQnO1xuXG5cbmRlY2xhcmUgdmFyIFBsb3RseTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd6b29tLWxheWVyJyxcbiAgdGVtcGxhdGU6IGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBbZGlzYWJsZWRdPVwiIWxheWVyXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc21cIlxuICAgICAgICBuZ2JUb29sdGlwPVwiWm9vbSB0byBzZWxlY3RlZCBsYXllclwiXG4gICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcbiAgICAgICAgKGNsaWNrKT1cInpvb21Ub0xheWVyKClcIlxuPjxpIGNsYXNzPVwiZmEgZmEtY29tcHJlc3NcIj48L2k+XG48L2J1dHRvbj5cbmAsc3R5bGVzOiBbXX0pXG5leHBvcnQgY2xhc3MgWm9vbUxheWVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIG1hcDogTGF5ZXJlZE1hcENvbXBvbmVudDtcbiAgQElucHV0KCkgbGF5ZXI6IE1hcHBlZExheWVyO1xuICBASW5wdXQoKSBmdWxsQm91bmRzOiBCb3VuZHM7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuICB9XG5cbiAgem9vbVRvTGF5ZXIoKSB7XG4gICAgaWYodGhpcy5sYXllci5sYXllci5zcGF0aWFsRXh0ZW50KXtcbiAgICAgIGNvbnNvbGUubG9nKCdab29tIHRvIGxheWVyJyk7XG4gICAgICB0aGlzLmxheWVyLmxheWVyLnNwYXRpYWxFeHRlbnQuc3Vic2NyaWJlKGI9PntcbiAgICAgICAgdGhpcy5tYXAuem9vbVRvQm91bmRzKE9iamVjdC5hc3NpZ24oe30sYikpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdab29tIGZ1bGwnKTtcbiAgICAgIHRoaXMubWFwLnpvb21Ub0JvdW5kcyhPYmplY3QuYXNzaWduKHt9LCB0aGlzLmZ1bGxCb3VuZHMpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==