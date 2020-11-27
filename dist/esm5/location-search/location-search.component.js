"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationSearchComponent = void 0;
var core_1 = require("@angular/core");
var i0 = require("@angular/core");
var i1 = require("@ng-bootstrap/ng-bootstrap");
var LocationSearchComponent = /** @class */ (function () {
    function LocationSearchComponent() {
    }
    LocationSearchComponent.prototype.ngAfterViewInit = function () {
    };
    LocationSearchComponent.ɵfac = function LocationSearchComponent_Factory(t) { return new (t || LocationSearchComponent)(); };
    LocationSearchComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LocationSearchComponent, selectors: [["location-search"]], decls: 2, vars: 1, consts: [["ngbTooltip", "Location search", "placement", "right", 1, "btn", "btn-secondary", "btn-sm", 3, "disabled"], [1, "fa", "fa-search"]], template: function LocationSearchComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵelement(1, "i", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("disabled", true);
        } }, directives: [i1.NgbTooltip], encapsulation: 2 });
    return LocationSearchComponent;
}());
exports.LocationSearchComponent = LocationSearchComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LocationSearchComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'location-search',
                template: "<button class=\"btn btn-secondary btn-sm\"\n        ngbTooltip=\"Location search\"\n        placement=\"right\"\n        [disabled]=\"true\"\n\n><i class=\"fa fa-search\"></i></button>\n",
                styles: []
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24tc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLXZpc3VhbC8iLCJzb3VyY2VzIjpbImxvY2F0aW9uLXNlYXJjaC9sb2NhdGlvbi1zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF1Rjs7O0FBS3ZGO0lBV0U7SUFFQSxDQUFDO0lBRUQsaURBQWUsR0FBZjtJQUVBLENBQUM7a0dBUlUsdUJBQXVCO2dFQUF2Qix1QkFBdUI7WUFQdkIsaUNBS1o7WUFBQSx1QkFBNEI7WUFBQSxpQkFBUzs7WUFGOUIsK0JBQWlCOztrQ0FWekI7Q0F1QkMsQUFsQkQsSUFrQkM7QUFUWSwwREFBdUI7a0RBQXZCLHVCQUF1QjtjQVRuQyxnQkFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSw0TEFNWDtnQkFBQyxNQUFNLEVBQUUsRUFBRTthQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuZGVjbGFyZSB2YXIgUGxvdGx5OiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xvY2F0aW9uLXNlYXJjaCcsXG4gIHRlbXBsYXRlOiBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiXG4gICAgICAgIG5nYlRvb2x0aXA9XCJMb2NhdGlvbiBzZWFyY2hcIlxuICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJ0cnVlXCJcblxuPjxpIGNsYXNzPVwiZmEgZmEtc2VhcmNoXCI+PC9pPjwvYnV0dG9uPlxuYCxzdHlsZXM6IFtdfSlcbmV4cG9ydCBjbGFzcyBMb2NhdGlvblNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQgIHtcblxuICBjb25zdHJ1Y3Rvcigpe1xuXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcblxuICB9XG59Il19