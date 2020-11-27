"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollapsibleMapControlComponent = void 0;
var core_1 = require("@angular/core");
var i0 = require("@angular/core");
var i1 = require("@angular/common");
var i2 = require("@ng-bootstrap/ng-bootstrap");
function CollapsibleMapControlComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 7);
} }
function CollapsibleMapControlComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 8);
} }
var _c0 = ["*"];
var CollapsibleMapControlComponent = /** @class */ (function () {
    function CollapsibleMapControlComponent() {
    }
    CollapsibleMapControlComponent.prototype.ngAfterViewInit = function () {
    };
    CollapsibleMapControlComponent.ɵfac = function CollapsibleMapControlComponent_Factory(t) { return new (t || CollapsibleMapControlComponent)(); };
    CollapsibleMapControlComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CollapsibleMapControlComponent, selectors: [["collapsible-map-control"]], inputs: { isCollapsed: "isCollapsed", heading: "heading", direction: "direction" }, ngContentSelectors: _c0, decls: 9, vars: 4, consts: [[1, "card", "map-control", "collapsible-control"], [3, "click"], [1, "card-header"], [1, "mb-0"], ["class", "float-right fa fa-caret-up\n            collapse-arrow", "aria-hidden", "true", 4, "ngIf"], ["class", "float-right fa fa-caret-down\n            collapse-arrow", "aria-hidden", "true", 4, "ngIf"], [1, "ngbCollapse", 3, "ngbCollapse"], ["aria-hidden", "true", 1, "float-right", "fa", "fa-caret-up", "collapse-arrow"], ["aria-hidden", "true", 1, "float-right", "fa", "fa-caret-down", "collapse-arrow"]], template: function CollapsibleMapControlComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "a", 1);
            i0.ɵɵlistener("click", function CollapsibleMapControlComponent_Template_a_click_1_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelementStart(3, "h6", 3);
            i0.ɵɵtext(4);
            i0.ɵɵtemplate(5, CollapsibleMapControlComponent_span_5_Template, 1, 0, "span", 4);
            i0.ɵɵtemplate(6, CollapsibleMapControlComponent_span_6_Template, 1, 0, "span", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 6);
            i0.ɵɵprojection(8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", ctx.heading, " ");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isCollapsed);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.isCollapsed);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngbCollapse", ctx.isCollapsed);
        } }, directives: [i1.NgIf, i2.NgbCollapse], styles: [".collapsible-control[_ngcontent-%COMP%]{\n  margin:3px;\n}"] });
    return CollapsibleMapControlComponent;
}());
exports.CollapsibleMapControlComponent = CollapsibleMapControlComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CollapsibleMapControlComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'collapsible-map-control',
                template: "<div class=\"card map-control collapsible-control\">\n    <a (click)=\"isCollapsed = !isCollapsed\">\n      <div class=\"card-header\">\n        <h6 class=\"mb-0\">\n          {{heading}}\n          <span *ngIf=\"isCollapsed\" class=\"float-right fa fa-caret-up\n            collapse-arrow\" aria-hidden=\"true\"></span>\n          <span *ngIf=\"!isCollapsed\" class=\"float-right fa fa-caret-down\n            collapse-arrow\" aria-hidden=\"true\"></span>\n        </h6>\n      </div>\n    </a>\n\n    <div class=\"ngbCollapse\" [ngbCollapse]=\"isCollapsed\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n", styles: [".collapsible-control{\n  margin:3px;\n}"]
            }]
    }], function () { return []; }, { isCollapsed: [{
            type: core_1.Input
        }], heading: [{
            type: core_1.Input
        }], direction: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2libGUtbWFwLWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtdmlzdWFsLyIsInNvdXJjZXMiOlsiY29sbGFwc2libGUtbWFwLWNvbnRyb2wvY29sbGFwc2libGUtbWFwLWNvbnRyb2wuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF1Rjs7Ozs7SUFZN0UsMEJBQzRDOzs7SUFDNUMsMEJBQzRDOzs7QUFWdEQ7SUEyQkU7SUFFQSxDQUFDO0lBRUQsd0RBQWUsR0FBZjtJQUVBLENBQUM7Z0hBWFUsOEJBQThCO3VFQUE5Qiw4QkFBOEI7O1lBcEI5Qiw4QkFDVDtZQUFBLDRCQUNFO1lBREMsNElBQW9DO1lBQ3JDLDhCQUNFO1lBQUEsNkJBQ0U7WUFBQSxZQUNBO1lBQUEsaUZBQzRDO1lBQzVDLGlGQUM0QztZQUM5QyxpQkFBSztZQUNQLGlCQUFNO1lBQ1IsaUJBQUk7WUFFSiw4QkFDRTtZQUFBLGtCQUF5QjtZQUMzQixpQkFBTTtZQUNSLGlCQUFNOztZQVpFLGVBQ0E7WUFEQSw0Q0FDQTtZQUFPLGVBQWlCO1lBQWpCLHNDQUFpQjtZQUVqQixlQUFrQjtZQUFsQix1Q0FBa0I7WUFNTixlQUEyQjtZQUEzQiw2Q0FBMkI7O3lDQXBCeEQ7Q0F1Q0MsQUFsQ0QsSUFrQ0M7QUFaWSx3RUFBOEI7a0RBQTlCLDhCQUE4QjtjQXRCMUMsZ0JBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxRQUFRLEVBQUUsMm1CQWlCWCxFQUFDLE1BQU0sRUFBRSxDQUFDLHlDQUVULENBQUM7YUFBQztzQ0FFTyxXQUFXO2tCQUFuQixZQUFLO1lBQ0csT0FBTztrQkFBZixZQUFLO1lBQ0csU0FBUztrQkFBakIsWUFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbmRlY2xhcmUgdmFyIFBsb3RseTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb2xsYXBzaWJsZS1tYXAtY29udHJvbCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImNhcmQgbWFwLWNvbnRyb2wgY29sbGFwc2libGUtY29udHJvbFwiPlxuICAgIDxhIChjbGljayk9XCJpc0NvbGxhcHNlZCA9ICFpc0NvbGxhcHNlZFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgIDxoNiBjbGFzcz1cIm1iLTBcIj5cbiAgICAgICAgICB7e2hlYWRpbmd9fVxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaXNDb2xsYXBzZWRcIiBjbGFzcz1cImZsb2F0LXJpZ2h0IGZhIGZhLWNhcmV0LXVwXG4gICAgICAgICAgICBjb2xsYXBzZS1hcnJvd1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFpc0NvbGxhcHNlZFwiIGNsYXNzPVwiZmxvYXQtcmlnaHQgZmEgZmEtY2FyZXQtZG93blxuICAgICAgICAgICAgY29sbGFwc2UtYXJyb3dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgIDwvaDY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2E+XG5cbiAgICA8ZGl2IGNsYXNzPVwibmdiQ29sbGFwc2VcIiBbbmdiQ29sbGFwc2VdPVwiaXNDb2xsYXBzZWRcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5gLHN0eWxlczogW2AuY29sbGFwc2libGUtY29udHJvbHtcbiAgbWFyZ2luOjNweDtcbn1gXX0pXG5leHBvcnQgY2xhc3MgQ29sbGFwc2libGVNYXBDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCAge1xuICBASW5wdXQoKSBpc0NvbGxhcHNlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgaGVhZGluZzogc3RyaW5nO1xuICBASW5wdXQoKSBkaXJlY3Rpb246IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcigpe1xuXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcblxuICB9XG59Il19