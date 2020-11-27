"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoomFullComponent = void 0;
const core_1 = require("@angular/core");
const layered_map_component_1 = require("../../layered-map/layered-map.component");
const i0 = require("@angular/core");
const i1 = require("@ng-bootstrap/ng-bootstrap");
class ZoomFullComponent {
    constructor() {
    }
    ngAfterViewInit() {
    }
    zoomToBounds() {
        this.map.zoomToBounds(Object.assign({}, this.bounds));
    }
}
exports.ZoomFullComponent = ZoomFullComponent;
ZoomFullComponent.ɵfac = function ZoomFullComponent_Factory(t) { return new (t || ZoomFullComponent)(); };
ZoomFullComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ZoomFullComponent, selectors: [["zoom-full"]], inputs: { map: "map", bounds: "bounds" }, decls: 2, vars: 0, consts: [["ngbTooltip", "Zoom to full extent", "placement", "right", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "fa", "fa-arrows-alt"]], template: function ZoomFullComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function ZoomFullComponent_Template_button_click_0_listener() { return ctx.zoomToBounds(); });
        i0.ɵɵelement(1, "i", 1);
        i0.ɵɵelementEnd();
    } }, directives: [i1.NgbTooltip], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ZoomFullComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'zoom-full',
                template: `<button class="btn btn-secondary btn-sm"
        ngbTooltip="Zoom to full extent"
        placement="right"
        (click)="zoomToBounds()"
><i class="fa fa-arrows-alt"></i></button>
`, styles: []
            }]
    }], function () { return []; }, { map: [{
            type: core_1.Input
        }], bounds: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS1mdWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLXZpc3VhbC8iLCJzb3VyY2VzIjpbImFjdGlvbi1idXR0b25zL3pvb20tZnVsbC96b29tLWZ1bGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUF1RjtBQUN2RixtRkFBOEU7OztBQU05RSxNQVFhLGlCQUFpQjtJQUk1QjtJQUVBLENBQUM7SUFFRCxlQUFlO0lBRWYsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDOztBQXRCSCw4Q0F1QkM7a0ZBZlksaUJBQWlCO3NEQUFqQixpQkFBaUI7UUFOakIsaUNBSVo7UUFETyw4RkFBUyxrQkFBYyxJQUFDO1FBQy9CLHVCQUFnQztRQUFBLGlCQUFTOztrREFFN0IsaUJBQWlCO2NBUjdCLGdCQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRTs7Ozs7Q0FLWCxFQUFDLE1BQU0sRUFBRSxFQUFFO2FBQUM7c0NBRUYsR0FBRztrQkFBWCxZQUFLO1lBQ0csTUFBTTtrQkFBZCxZQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXllcmVkTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vbGF5ZXJlZC1tYXAvbGF5ZXJlZC1tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IEJvdW5kcyB9IGZyb20gJ21hcC13YWxkJztcblxuXG5kZWNsYXJlIHZhciBQbG90bHk6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnem9vbS1mdWxsJyxcbiAgdGVtcGxhdGU6IGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCJcbiAgICAgICAgbmdiVG9vbHRpcD1cIlpvb20gdG8gZnVsbCBleHRlbnRcIlxuICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgIChjbGljayk9XCJ6b29tVG9Cb3VuZHMoKVwiXG4+PGkgY2xhc3M9XCJmYSBmYS1hcnJvd3MtYWx0XCI+PC9pPjwvYnV0dG9uPlxuYCxzdHlsZXM6IFtdfSlcbmV4cG9ydCBjbGFzcyBab29tRnVsbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQgIHtcbiAgQElucHV0KCkgbWFwOkxheWVyZWRNYXBDb21wb25lbnQ7XG4gIEBJbnB1dCgpIGJvdW5kczpCb3VuZHM7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG5cbiAgfVxuXG4gIHpvb21Ub0JvdW5kcygpe1xuICAgIHRoaXMubWFwLnpvb21Ub0JvdW5kcyhPYmplY3QuYXNzaWduKHt9LHRoaXMuYm91bmRzKSk7XG4gIH1cbn1cbiJdfQ==