"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoomInComponent = void 0;
const core_1 = require("@angular/core");
const layered_map_component_1 = require("../../layered-map/layered-map.component");
const i0 = require("@angular/core");
const i1 = require("@ng-bootstrap/ng-bootstrap");
class ZoomInComponent {
    constructor() {
        this.maxZoom = 32;
    }
    ngAfterViewInit() {
    }
    zoomIn() {
        if (!this.map) {
            return;
        }
        this.map.zoom = Math.min(this.maxZoom, this.map.zoom + 1);
    }
}
exports.ZoomInComponent = ZoomInComponent;
ZoomInComponent.ɵfac = function ZoomInComponent_Factory(t) { return new (t || ZoomInComponent)(); };
ZoomInComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ZoomInComponent, selectors: [["zoom-in"]], inputs: { map: "map", maxZoom: "maxZoom" }, decls: 2, vars: 0, consts: [["ngbTooltip", "Zoom in", "placement", "right", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "fa", "fa-plus"]], template: function ZoomInComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function ZoomInComponent_Template_button_click_0_listener() { return ctx.zoomIn(); });
        i0.ɵɵelement(1, "i", 1);
        i0.ɵɵelementEnd();
    } }, directives: [i1.NgbTooltip], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ZoomInComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'zoom-in',
                template: `<button class="btn btn-secondary btn-sm"
        ngbTooltip="Zoom in"
        placement="right"
        (click)="zoomIn()"
><i class="fa fa-plus"></i></button>`, styles: []
            }]
    }], function () { return []; }, { map: [{
            type: core_1.Input
        }], maxZoom: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS1pbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJhY3Rpb24tYnV0dG9ucy96b29tLWluL3pvb20taW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUF1RjtBQUN2RixtRkFBOEU7OztBQUs5RSxNQU9hLGVBQWU7SUFJMUI7UUFGUyxZQUFPLEdBQVUsRUFBRSxDQUFDO0lBSTdCLENBQUM7SUFFRCxlQUFlO0lBRWYsQ0FBQztJQUVELE1BQU07UUFDSixJQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQztZQUNYLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDOztBQXhCSCwwQ0F5QkM7OEVBbEJZLGVBQWU7b0RBQWYsZUFBZTtRQUxmLGlDQUlaO1FBRE8sNEZBQVMsWUFBUSxJQUFDO1FBQ3pCLHVCQUEwQjtRQUFBLGlCQUFTOztrREFDdkIsZUFBZTtjQVAzQixnQkFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUU7Ozs7cUNBSXlCLEVBQUMsTUFBTSxFQUFFLEVBQUU7YUFBQztzQ0FFdEMsR0FBRztrQkFBWCxZQUFLO1lBQ0csT0FBTztrQkFBZixZQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXllcmVkTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vbGF5ZXJlZC1tYXAvbGF5ZXJlZC1tYXAuY29tcG9uZW50JztcblxuXG5kZWNsYXJlIHZhciBQbG90bHk6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnem9vbS1pbicsXG4gIHRlbXBsYXRlOiBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiXG4gICAgICAgIG5nYlRvb2x0aXA9XCJab29tIGluXCJcbiAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxuICAgICAgICAoY2xpY2spPVwiem9vbUluKClcIlxuPjxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT48L2J1dHRvbj5gLHN0eWxlczogW119KVxuZXhwb3J0IGNsYXNzIFpvb21JbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQgIHtcbiAgQElucHV0KCkgbWFwOkxheWVyZWRNYXBDb21wb25lbnQ7XG4gIEBJbnB1dCgpIG1heFpvb206bnVtYmVyID0gMzI7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG5cbiAgfVxuXG4gIHpvb21Jbigpe1xuICAgIGlmKCF0aGlzLm1hcCl7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubWFwLnpvb20gPSBNYXRoLm1pbih0aGlzLm1heFpvb20sdGhpcy5tYXAuem9vbSsxKTtcbiAgfVxufVxuIl19