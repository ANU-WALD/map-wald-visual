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
const map_wald_1 = require("map-wald");
let ZoomLayerComponent = class ZoomLayerComponent {
    constructor() {
    }
    ngAfterViewInit() {
    }
    zoomToLayer() {
        if (this.layer.layer.spatialExtent) {
            console.log('Zoom to layer');
            this.layer.layer.spatialExtent.subscribe(b => {
                this.map.zoomToBounds(Object.assign({}, b));
            });
        }
        else {
            console.log('Zoom full');
            this.map.zoomToBounds(Object.assign({}, this.fullBounds));
        }
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
        template: `<button type="button" [disabled]="!layer" class="btn btn-secondary btn-sm"
        ngbTooltip="Zoom to selected layer"
        placement="right"
        (click)="zoomToLayer()"
><i class="fa fa-compress"></i>
</button>
`
    }),
    __metadata("design:paramtypes", [])
], ZoomLayerComponent);
exports.ZoomLayerComponent = ZoomLayerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS1sYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJhY3Rpb24tYnV0dG9ucy96b29tLWxheWVyL3pvb20tbGF5ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQXVGO0FBQ3ZGLG1GQUE4RTtBQUM5RSx1Q0FBK0M7QUFjL0MsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFLN0I7SUFFQSxDQUFDO0lBRUQsZUFBZTtJQUVmLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUM7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQSxFQUFFO2dCQUMxQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7U0FDM0Q7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQXZCVTtJQUFSLFlBQUssRUFBRTs4QkFBTSwyQ0FBbUI7K0NBQUM7QUFDekI7SUFBUixZQUFLLEVBQUU7OEJBQVEsc0JBQVc7aURBQUM7QUFDbkI7SUFBUixZQUFLLEVBQUU7O3NEQUFvQjtBQUhqQixrQkFBa0I7SUFUOUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRTs7Ozs7O0NBTVg7S0FBWSxDQUFDOztHQUNELGtCQUFrQixDQXdCOUI7QUF4QlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXllcmVkTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vbGF5ZXJlZC1tYXAvbGF5ZXJlZC1tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IE1hcHBlZExheWVyLCBCb3VuZHMgfSBmcm9tICdtYXAtd2FsZCc7XG5cblxuZGVjbGFyZSB2YXIgUGxvdGx5OiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3pvb20tbGF5ZXInLFxuICB0ZW1wbGF0ZTogYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIFtkaXNhYmxlZF09XCIhbGF5ZXJcIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiXG4gICAgICAgIG5nYlRvb2x0aXA9XCJab29tIHRvIHNlbGVjdGVkIGxheWVyXCJcbiAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxuICAgICAgICAoY2xpY2spPVwiem9vbVRvTGF5ZXIoKVwiXG4+PGkgY2xhc3M9XCJmYSBmYS1jb21wcmVzc1wiPjwvaT5cbjwvYnV0dG9uPlxuYCxzdHlsZXM6IFtdfSlcbmV4cG9ydCBjbGFzcyBab29tTGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgbWFwOiBMYXllcmVkTWFwQ29tcG9uZW50O1xuICBASW5wdXQoKSBsYXllcjogTWFwcGVkTGF5ZXI7XG4gIEBJbnB1dCgpIGZ1bGxCb3VuZHM6IEJvdW5kcztcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuXG4gIH1cblxuICB6b29tVG9MYXllcigpIHtcbiAgICBpZih0aGlzLmxheWVyLmxheWVyLnNwYXRpYWxFeHRlbnQpe1xuICAgICAgY29uc29sZS5sb2coJ1pvb20gdG8gbGF5ZXInKTtcbiAgICAgIHRoaXMubGF5ZXIubGF5ZXIuc3BhdGlhbEV4dGVudC5zdWJzY3JpYmUoYj0+e1xuICAgICAgICB0aGlzLm1hcC56b29tVG9Cb3VuZHMoT2JqZWN0LmFzc2lnbih7fSxiKSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ1pvb20gZnVsbCcpO1xuICAgICAgdGhpcy5tYXAuem9vbVRvQm91bmRzKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZnVsbEJvdW5kcykpO1xuICAgIH1cbiAgfVxufVxuIl19