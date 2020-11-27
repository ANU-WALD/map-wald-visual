"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoomFullComponent = void 0;
var core_1 = require("@angular/core");
var layered_map_component_1 = require("../../layered-map/layered-map.component");
var i0 = require("@angular/core");
var i1 = require("@ng-bootstrap/ng-bootstrap");
var ZoomFullComponent = /** @class */ (function () {
    function ZoomFullComponent() {
    }
    ZoomFullComponent.prototype.ngAfterViewInit = function () {
    };
    ZoomFullComponent.prototype.zoomToBounds = function () {
        this.map.zoomToBounds(Object.assign({}, this.bounds));
    };
    ZoomFullComponent.ɵfac = function ZoomFullComponent_Factory(t) { return new (t || ZoomFullComponent)(); };
    ZoomFullComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ZoomFullComponent, selectors: [["zoom-full"]], inputs: { map: "map", bounds: "bounds" }, decls: 2, vars: 0, consts: [["ngbTooltip", "Zoom to full extent", "placement", "right", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "fa", "fa-arrows-alt"]], template: function ZoomFullComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function ZoomFullComponent_Template_button_click_0_listener() { return ctx.zoomToBounds(); });
            i0.ɵɵelement(1, "i", 1);
            i0.ɵɵelementEnd();
        } }, directives: [i1.NgbTooltip], encapsulation: 2 });
    return ZoomFullComponent;
}());
exports.ZoomFullComponent = ZoomFullComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ZoomFullComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'zoom-full',
                template: "<button class=\"btn btn-secondary btn-sm\"\n        ngbTooltip=\"Zoom to full extent\"\n        placement=\"right\"\n        (click)=\"zoomToBounds()\"\n><i class=\"fa fa-arrows-alt\"></i></button>\n",
                styles: []
            }]
    }], function () { return []; }, { map: [{
            type: core_1.Input
        }], bounds: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS1mdWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLXZpc3VhbC8iLCJzb3VyY2VzIjpbImFjdGlvbi1idXR0b25zL3pvb20tZnVsbC96b29tLWZ1bGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF1RjtBQUN2RixpRkFBOEU7OztBQU05RTtJQVlFO0lBRUEsQ0FBQztJQUVELDJDQUFlLEdBQWY7SUFFQSxDQUFDO0lBRUQsd0NBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7c0ZBZFUsaUJBQWlCOzBEQUFqQixpQkFBaUI7WUFOakIsaUNBSVo7WUFETyw4RkFBUyxrQkFBYyxJQUFDO1lBQy9CLHVCQUFnQztZQUFBLGlCQUFTOzs0QkFiMUM7Q0E4QkMsQUF2QkQsSUF1QkM7QUFmWSw4Q0FBaUI7a0RBQWpCLGlCQUFpQjtjQVI3QixnQkFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUseU1BS1g7Z0JBQUMsTUFBTSxFQUFFLEVBQUU7YUFBQztzQ0FFRixHQUFHO2tCQUFYLFlBQUs7WUFDRyxNQUFNO2tCQUFkLFlBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExheWVyZWRNYXBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9sYXllcmVkLW1hcC9sYXllcmVkLW1hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQm91bmRzIH0gZnJvbSAnbWFwLXdhbGQnO1xuXG5cbmRlY2xhcmUgdmFyIFBsb3RseTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd6b29tLWZ1bGwnLFxuICB0ZW1wbGF0ZTogYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc21cIlxuICAgICAgICBuZ2JUb29sdGlwPVwiWm9vbSB0byBmdWxsIGV4dGVudFwiXG4gICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcbiAgICAgICAgKGNsaWNrKT1cInpvb21Ub0JvdW5kcygpXCJcbj48aSBjbGFzcz1cImZhIGZhLWFycm93cy1hbHRcIj48L2k+PC9idXR0b24+XG5gLHN0eWxlczogW119KVxuZXhwb3J0IGNsYXNzIFpvb21GdWxsQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCAge1xuICBASW5wdXQoKSBtYXA6TGF5ZXJlZE1hcENvbXBvbmVudDtcbiAgQElucHV0KCkgYm91bmRzOkJvdW5kcztcblxuICBjb25zdHJ1Y3Rvcigpe1xuXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcblxuICB9XG5cbiAgem9vbVRvQm91bmRzKCl7XG4gICAgdGhpcy5tYXAuem9vbVRvQm91bmRzKE9iamVjdC5hc3NpZ24oe30sdGhpcy5ib3VuZHMpKTtcbiAgfVxufVxuIl19