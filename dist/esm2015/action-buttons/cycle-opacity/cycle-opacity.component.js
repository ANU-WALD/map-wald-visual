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
const layered_map_component_1 = require("../../layered-map/layered-map.component");
let CycleOpacityComponent = class CycleOpacityComponent {
    constructor() {
        this.maxZoom = 32;
        this.tooltip = 'Adjust transparency of grid layer';
        this.layerOpacity = 1.0;
        this.step = 0.4;
    }
    ngAfterViewInit() {
    }
    ngOnChanges(changes) {
        if (this.map) {
            this.map.layersChange.subscribe(() => this.updateLayers());
        }
    }
    cycleTransparency() {
        this.layerOpacity -= this.step;
        if (this.layerOpacity < 0) {
            this.layerOpacity = 1.0;
        }
        this.updateLayers();
    }
    updateLayers() {
        this.map.layers.forEach(l => l.opacity = this.layerOpacity);
    }
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
        template: `<button class="btn btn-secondary btn-sm"
                     (click)="cycleTransparency()"
                     [ngbTooltip]="tooltip"
                     placement="right">
<i class="fa" [ngClass]="(layerOpacity<0.5)?'fa-circle-o':((layerOpacity<0.9)?'fa-adjust':'fa-circle')"></i>
</button>`
    }),
    __metadata("design:paramtypes", [])
], CycleOpacityComponent);
exports.CycleOpacityComponent = CycleOpacityComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ljbGUtb3BhY2l0eS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJhY3Rpb24tYnV0dG9ucy9jeWNsZS1vcGFjaXR5L2N5Y2xlLW9wYWNpdHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQWlIO0FBQ2pILG1GQUE4RTtBQWE5RSxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQU9oQztRQUxTLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixZQUFPLEdBQUcsbUNBQW1DLENBQUM7UUFDOUMsaUJBQVksR0FBRyxHQUFHLENBQUM7UUFDbkIsU0FBSSxHQUFHLEdBQUcsQ0FBQztJQUlwQixDQUFDO0lBRUQsZUFBZTtJQUVmLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBRyxJQUFJLENBQUMsR0FBRyxFQUFDO1lBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUUsRUFBRSxDQUFBLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1NBQzFEO0lBQ0gsQ0FBQztJQUVELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztRQUMvQixJQUFHLElBQUksQ0FBQyxZQUFZLEdBQUMsQ0FBQyxFQUFDO1lBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTyxZQUFZO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlELENBQUM7Q0FDRixDQUFBO0FBL0JVO0lBQVIsWUFBSyxFQUFFOzhCQUFLLDJDQUFtQjtrREFBQztBQUN4QjtJQUFSLFlBQUssRUFBRTs7c0RBQWM7QUFDYjtJQUFSLFlBQUssRUFBRTs7c0RBQStDO0FBQzlDO0lBQVIsWUFBSyxFQUFFOzsyREFBb0I7QUFDbkI7SUFBUixZQUFLLEVBQUU7O21EQUFZO0FBTFQscUJBQXFCO0lBUmpDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZUFBZTtRQUN6QixRQUFRLEVBQUU7Ozs7O1VBS0Y7S0FBWSxDQUFDOztHQUNWLHFCQUFxQixDQWdDakM7QUFoQ1ksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExheWVyZWRNYXBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9sYXllcmVkLW1hcC9sYXllcmVkLW1hcC5jb21wb25lbnQnO1xuXG5cbmRlY2xhcmUgdmFyIFBsb3RseTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeWNsZS1vcGFjaXR5JyxcbiAgdGVtcGxhdGU6IGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCJcbiAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJjeWNsZVRyYW5zcGFyZW5jeSgpXCJcbiAgICAgICAgICAgICAgICAgICAgIFtuZ2JUb29sdGlwXT1cInRvb2x0aXBcIlxuICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIj5cbjxpIGNsYXNzPVwiZmFcIiBbbmdDbGFzc109XCIobGF5ZXJPcGFjaXR5PDAuNSk/J2ZhLWNpcmNsZS1vJzooKGxheWVyT3BhY2l0eTwwLjkpPydmYS1hZGp1c3QnOidmYS1jaXJjbGUnKVwiPjwvaT5cbjwvYnV0dG9uPmAsc3R5bGVzOiBbXX0pXG5leHBvcnQgY2xhc3MgQ3ljbGVPcGFjaXR5Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzICB7XG4gIEBJbnB1dCgpIG1hcDpMYXllcmVkTWFwQ29tcG9uZW50O1xuICBASW5wdXQoKSBtYXhab29tID0gMzI7XG4gIEBJbnB1dCgpIHRvb2x0aXAgPSAnQWRqdXN0IHRyYW5zcGFyZW5jeSBvZiBncmlkIGxheWVyJztcbiAgQElucHV0KCkgbGF5ZXJPcGFjaXR5ID0gMS4wO1xuICBASW5wdXQoKSBzdGVwID0gMC40O1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuXG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYodGhpcy5tYXApe1xuICAgICAgdGhpcy5tYXAubGF5ZXJzQ2hhbmdlLnN1YnNjcmliZSgoKT0+dGhpcy51cGRhdGVMYXllcnMoKSk7XG4gICAgfVxuICB9XG5cbiAgY3ljbGVUcmFuc3BhcmVuY3koKXtcbiAgICB0aGlzLmxheWVyT3BhY2l0eSAtPSB0aGlzLnN0ZXA7XG4gICAgaWYodGhpcy5sYXllck9wYWNpdHk8MCl7XG4gICAgICB0aGlzLmxheWVyT3BhY2l0eSA9IDEuMDtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVMYXllcnMoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlTGF5ZXJzKCkge1xuICAgIHRoaXMubWFwLmxheWVycy5mb3JFYWNoKGwgPT4gbC5vcGFjaXR5ID0gdGhpcy5sYXllck9wYWNpdHkpO1xuICB9XG59XG4iXX0=