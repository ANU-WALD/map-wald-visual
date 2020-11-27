"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoomOutComponent = void 0;
var core_1 = require("@angular/core");
var layered_map_component_1 = require("../../layered-map/layered-map.component");
var i0 = require("@angular/core");
var i1 = require("@ng-bootstrap/ng-bootstrap");
var ZoomOutComponent = /** @class */ (function () {
    function ZoomOutComponent() {
        this.minZoom = 1;
    }
    ZoomOutComponent.prototype.ngAfterViewInit = function () {
    };
    ZoomOutComponent.prototype.zoomOut = function () {
        if (!this.map) {
            return;
        }
        this.map.zoom = Math.max(this.minZoom, this.map.zoom - 1);
    };
    ZoomOutComponent.ɵfac = function ZoomOutComponent_Factory(t) { return new (t || ZoomOutComponent)(); };
    ZoomOutComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ZoomOutComponent, selectors: [["zoom-out"]], inputs: { map: "map", minZoom: "minZoom" }, decls: 2, vars: 0, consts: [["ngbTooltip", "Zoom out", "placement", "right", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "fa", "fa-minus"]], template: function ZoomOutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function ZoomOutComponent_Template_button_click_0_listener() { return ctx.zoomOut(); });
            i0.ɵɵelement(1, "i", 1);
            i0.ɵɵelementEnd();
        } }, directives: [i1.NgbTooltip], encapsulation: 2 });
    return ZoomOutComponent;
}());
exports.ZoomOutComponent = ZoomOutComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ZoomOutComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'zoom-out',
                template: "<button class=\"btn btn-secondary btn-sm\"\n        ngbTooltip=\"Zoom out\"\n        placement=\"right\"\n        (click)=\"zoomOut()\"\n><i class=\"fa fa-minus\"></i></button>",
                styles: []
            }]
    }], function () { return []; }, { map: [{
            type: core_1.Input
        }], minZoom: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS1vdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtdmlzdWFsLyIsInNvdXJjZXMiOlsiYWN0aW9uLWJ1dHRvbnMvem9vbS1vdXQvem9vbS1vdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF1RjtBQUN2RixpRkFBOEU7OztBQUs5RTtJQVVFO1FBRFMsWUFBTyxHQUFVLENBQUMsQ0FBQztJQUc1QixDQUFDO0lBRUQsMENBQWUsR0FBZjtJQUVBLENBQUM7SUFFRCxrQ0FBTyxHQUFQO1FBQ0UsSUFBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUM7WUFDWCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztvRkFoQlUsZ0JBQWdCO3lEQUFoQixnQkFBZ0I7WUFMaEIsaUNBSVo7WUFETyw2RkFBUyxhQUFTLElBQUM7WUFDMUIsdUJBQTJCO1lBQUEsaUJBQVM7OzJCQVpyQztDQThCQyxBQXhCRCxJQXdCQztBQWpCWSw0Q0FBZ0I7a0RBQWhCLGdCQUFnQjtjQVA1QixnQkFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUUsa0xBSTBCO2dCQUFDLE1BQU0sRUFBRSxFQUFFO2FBQUM7c0NBRXZDLEdBQUc7a0JBQVgsWUFBSztZQUNHLE9BQU87a0JBQWYsWUFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF5ZXJlZE1hcENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2xheWVyZWQtbWFwL2xheWVyZWQtbWFwLmNvbXBvbmVudCc7XG5cblxuZGVjbGFyZSB2YXIgUGxvdGx5OiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3pvb20tb3V0JyxcbiAgdGVtcGxhdGU6IGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCJcbiAgICAgICAgbmdiVG9vbHRpcD1cIlpvb20gb3V0XCJcbiAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxuICAgICAgICAoY2xpY2spPVwiem9vbU91dCgpXCJcbj48aSBjbGFzcz1cImZhIGZhLW1pbnVzXCI+PC9pPjwvYnV0dG9uPmAsc3R5bGVzOiBbXX0pXG5leHBvcnQgY2xhc3MgWm9vbU91dENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQgIHtcbiAgQElucHV0KCkgbWFwOkxheWVyZWRNYXBDb21wb25lbnQ7XG4gIEBJbnB1dCgpIG1pblpvb206bnVtYmVyID0gMTtcbiAgY29uc3RydWN0b3IoKXtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG5cbiAgfVxuXG4gIHpvb21PdXQoKXtcbiAgICBpZighdGhpcy5tYXApe1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm1hcC56b29tID0gTWF0aC5tYXgodGhpcy5taW5ab29tLCB0aGlzLm1hcC56b29tIC0gMSk7XG4gIH1cbn1cbiJdfQ==