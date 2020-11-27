"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoomLayerComponent = void 0;
const core_1 = require("@angular/core");
const layered_map_component_1 = require("../../layered-map/layered-map.component");
const map_wald_1 = require("map-wald");
const i0 = require("@angular/core");
const i1 = require("@ng-bootstrap/ng-bootstrap");
class ZoomLayerComponent {
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
}
exports.ZoomLayerComponent = ZoomLayerComponent;
ZoomLayerComponent.ɵfac = function ZoomLayerComponent_Factory(t) { return new (t || ZoomLayerComponent)(); };
ZoomLayerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ZoomLayerComponent, selectors: [["zoom-layer"]], inputs: { map: "map", layer: "layer", fullBounds: "fullBounds" }, decls: 2, vars: 1, consts: [["type", "button", "ngbTooltip", "Zoom to selected layer", "placement", "right", 1, "btn", "btn-secondary", "btn-sm", 3, "disabled", "click"], [1, "fa", "fa-compress"]], template: function ZoomLayerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function ZoomLayerComponent_Template_button_click_0_listener() { return ctx.zoomToLayer(); });
        i0.ɵɵelement(1, "i", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("disabled", !ctx.layer);
    } }, directives: [i1.NgbTooltip], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ZoomLayerComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'zoom-layer',
                template: `<button type="button" [disabled]="!layer" class="btn btn-secondary btn-sm"
        ngbTooltip="Zoom to selected layer"
        placement="right"
        (click)="zoomToLayer()"
><i class="fa fa-compress"></i>
</button>
`, styles: []
            }]
    }], function () { return []; }, { map: [{
            type: core_1.Input
        }], layer: [{
            type: core_1.Input
        }], fullBounds: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS1sYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJhY3Rpb24tYnV0dG9ucy96b29tLWxheWVyL3pvb20tbGF5ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUF1RjtBQUN2RixtRkFBOEU7QUFDOUUsdUNBQStDOzs7QUFLL0MsTUFTYSxrQkFBa0I7SUFLN0I7SUFFQSxDQUFDO0lBRUQsZUFBZTtJQUVmLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUM7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQSxFQUFFO2dCQUMxQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7U0FDM0Q7SUFDSCxDQUFDOztBQWhDSCxnREFpQ0M7b0ZBeEJZLGtCQUFrQjt1REFBbEIsa0JBQWtCO1FBUGxCLGlDQUlaO1FBRE8sK0ZBQVMsaUJBQWEsSUFBQztRQUM5Qix1QkFBOEI7UUFDL0IsaUJBQVM7O1FBTDBCLHFDQUFtQjs7a0RBT3pDLGtCQUFrQjtjQVQ5QixnQkFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7Ozs7OztDQU1YLEVBQUMsTUFBTSxFQUFFLEVBQUU7YUFBQztzQ0FFRixHQUFHO2tCQUFYLFlBQUs7WUFDRyxLQUFLO2tCQUFiLFlBQUs7WUFDRyxVQUFVO2tCQUFsQixZQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXllcmVkTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vbGF5ZXJlZC1tYXAvbGF5ZXJlZC1tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IE1hcHBlZExheWVyLCBCb3VuZHMgfSBmcm9tICdtYXAtd2FsZCc7XG5cblxuZGVjbGFyZSB2YXIgUGxvdGx5OiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3pvb20tbGF5ZXInLFxuICB0ZW1wbGF0ZTogYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIFtkaXNhYmxlZF09XCIhbGF5ZXJcIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiXG4gICAgICAgIG5nYlRvb2x0aXA9XCJab29tIHRvIHNlbGVjdGVkIGxheWVyXCJcbiAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxuICAgICAgICAoY2xpY2spPVwiem9vbVRvTGF5ZXIoKVwiXG4+PGkgY2xhc3M9XCJmYSBmYS1jb21wcmVzc1wiPjwvaT5cbjwvYnV0dG9uPlxuYCxzdHlsZXM6IFtdfSlcbmV4cG9ydCBjbGFzcyBab29tTGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgbWFwOiBMYXllcmVkTWFwQ29tcG9uZW50O1xuICBASW5wdXQoKSBsYXllcjogTWFwcGVkTGF5ZXI7XG4gIEBJbnB1dCgpIGZ1bGxCb3VuZHM6IEJvdW5kcztcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuXG4gIH1cblxuICB6b29tVG9MYXllcigpIHtcbiAgICBpZih0aGlzLmxheWVyLmxheWVyLnNwYXRpYWxFeHRlbnQpe1xuICAgICAgY29uc29sZS5sb2coJ1pvb20gdG8gbGF5ZXInKTtcbiAgICAgIHRoaXMubGF5ZXIubGF5ZXIuc3BhdGlhbEV4dGVudC5zdWJzY3JpYmUoYj0+e1xuICAgICAgICB0aGlzLm1hcC56b29tVG9Cb3VuZHMoT2JqZWN0LmFzc2lnbih7fSxiKSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ1pvb20gZnVsbCcpO1xuICAgICAgdGhpcy5tYXAuem9vbVRvQm91bmRzKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZnVsbEJvdW5kcykpO1xuICAgIH1cbiAgfVxufVxuIl19