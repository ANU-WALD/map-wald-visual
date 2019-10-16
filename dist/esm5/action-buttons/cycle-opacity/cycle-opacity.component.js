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
var CycleOpacityComponent = /** @class */ (function () {
    function CycleOpacityComponent() {
        this.maxZoom = 32;
        this.tooltip = 'Adjust transparency of grid layer';
        this.layerOpacity = 1.0;
        this.step = 0.4;
    }
    CycleOpacityComponent.prototype.ngAfterViewInit = function () {
    };
    CycleOpacityComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.map) {
            this.map.layersChange.subscribe(function () { return _this.updateLayers(); });
        }
    };
    CycleOpacityComponent.prototype.cycleTransparency = function () {
        this.layerOpacity -= this.step;
        if (this.layerOpacity < 0) {
            this.layerOpacity = 1.0;
        }
        this.updateLayers();
    };
    CycleOpacityComponent.prototype.updateLayers = function () {
        var _this = this;
        this.map.layers.forEach(function (l) { return l.opacity = _this.layerOpacity; });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", layered_map_component_1.LayeredMapComponent)
    ], CycleOpacityComponent.prototype, "map", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CycleOpacityComponent.prototype, "maxZoom", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CycleOpacityComponent.prototype, "tooltip", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CycleOpacityComponent.prototype, "layerOpacity", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CycleOpacityComponent.prototype, "step", void 0);
    CycleOpacityComponent = __decorate([
        core_1.Component({
            selector: 'cycle-opacity',
            template: "<button class=\"btn btn-secondary btn-sm\"\n                     (click)=\"cycleTransparency()\"\n                     [ngbTooltip]=\"tooltip\"\n                     placement=\"right\">\n<i class=\"fa\" [ngClass]=\"(layerOpacity<0.5)?'fa-circle-o':((layerOpacity<0.9)?'fa-adjust':'fa-circle')\"></i>\n</button>"
        }),
        __metadata("design:paramtypes", [])
    ], CycleOpacityComponent);
    return CycleOpacityComponent;
}());
exports.CycleOpacityComponent = CycleOpacityComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ljbGUtb3BhY2l0eS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJhY3Rpb24tYnV0dG9ucy9jeWNsZS1vcGFjaXR5L2N5Y2xlLW9wYWNpdHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWlIO0FBQ2pILGlGQUE4RTtBQWE5RTtJQU9FO1FBTFMsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLFlBQU8sR0FBRyxtQ0FBbUMsQ0FBQztRQUM5QyxpQkFBWSxHQUFHLEdBQUcsQ0FBQztRQUNuQixTQUFJLEdBQUcsR0FBRyxDQUFDO0lBSXBCLENBQUM7SUFFRCwrQ0FBZSxHQUFmO0lBRUEsQ0FBQztJQUVELDJDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUFsQyxpQkFJQztRQUhDLElBQUcsSUFBSSxDQUFDLEdBQUcsRUFBQztZQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxjQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksRUFBRSxFQUFuQixDQUFtQixDQUFDLENBQUM7U0FDMUQ7SUFDSCxDQUFDO0lBRUQsaURBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQy9CLElBQUcsSUFBSSxDQUFDLFlBQVksR0FBQyxDQUFDLEVBQUM7WUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7U0FDekI7UUFDRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVPLDRDQUFZLEdBQXBCO1FBQUEsaUJBRUM7UUFEQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxZQUFZLEVBQTdCLENBQTZCLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBOUJRO1FBQVIsWUFBSyxFQUFFO2tDQUFLLDJDQUFtQjtzREFBQztJQUN4QjtRQUFSLFlBQUssRUFBRTs7MERBQWM7SUFDYjtRQUFSLFlBQUssRUFBRTs7MERBQStDO0lBQzlDO1FBQVIsWUFBSyxFQUFFOzsrREFBb0I7SUFDbkI7UUFBUixZQUFLLEVBQUU7O3VEQUFZO0lBTFQscUJBQXFCO1FBUmpDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUseVRBS0Y7U0FBWSxDQUFDOztPQUNWLHFCQUFxQixDQWdDakM7SUFBRCw0QkFBQztDQUFBLEFBaENELElBZ0NDO0FBaENZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXllcmVkTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vbGF5ZXJlZC1tYXAvbGF5ZXJlZC1tYXAuY29tcG9uZW50JztcblxuXG5kZWNsYXJlIHZhciBQbG90bHk6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3ljbGUtb3BhY2l0eScsXG4gIHRlbXBsYXRlOiBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiXG4gICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiY3ljbGVUcmFuc3BhcmVuY3koKVwiXG4gICAgICAgICAgICAgICAgICAgICBbbmdiVG9vbHRpcF09XCJ0b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCI+XG48aSBjbGFzcz1cImZhXCIgW25nQ2xhc3NdPVwiKGxheWVyT3BhY2l0eTwwLjUpPydmYS1jaXJjbGUtbyc6KChsYXllck9wYWNpdHk8MC45KT8nZmEtYWRqdXN0JzonZmEtY2lyY2xlJylcIj48L2k+XG48L2J1dHRvbj5gLHN0eWxlczogW119KVxuZXhwb3J0IGNsYXNzIEN5Y2xlT3BhY2l0eUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyAge1xuICBASW5wdXQoKSBtYXA6TGF5ZXJlZE1hcENvbXBvbmVudDtcbiAgQElucHV0KCkgbWF4Wm9vbSA9IDMyO1xuICBASW5wdXQoKSB0b29sdGlwID0gJ0FkanVzdCB0cmFuc3BhcmVuY3kgb2YgZ3JpZCBsYXllcic7XG4gIEBJbnB1dCgpIGxheWVyT3BhY2l0eSA9IDEuMDtcbiAgQElucHV0KCkgc3RlcCA9IDAuNDtcblxuICBjb25zdHJ1Y3Rvcigpe1xuXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcblxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmKHRoaXMubWFwKXtcbiAgICAgIHRoaXMubWFwLmxheWVyc0NoYW5nZS5zdWJzY3JpYmUoKCk9PnRoaXMudXBkYXRlTGF5ZXJzKCkpO1xuICAgIH1cbiAgfVxuXG4gIGN5Y2xlVHJhbnNwYXJlbmN5KCl7XG4gICAgdGhpcy5sYXllck9wYWNpdHkgLT0gdGhpcy5zdGVwO1xuICAgIGlmKHRoaXMubGF5ZXJPcGFjaXR5PDApe1xuICAgICAgdGhpcy5sYXllck9wYWNpdHkgPSAxLjA7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlTGF5ZXJzKCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUxheWVycygpIHtcbiAgICB0aGlzLm1hcC5sYXllcnMuZm9yRWFjaChsID0+IGwub3BhY2l0eSA9IHRoaXMubGF5ZXJPcGFjaXR5KTtcbiAgfVxufVxuIl19