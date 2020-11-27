"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareViewComponent = void 0;
var core_1 = require("@angular/core");
var i0 = require("@angular/core");
var i1 = require("@ng-bootstrap/ng-bootstrap");
var ShareViewComponent = /** @class */ (function () {
    function ShareViewComponent() {
    }
    ShareViewComponent.prototype.ngAfterViewInit = function () {
    };
    ShareViewComponent.ɵfac = function ShareViewComponent_Factory(t) { return new (t || ShareViewComponent)(); };
    ShareViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ShareViewComponent, selectors: [["share-view"]], decls: 2, vars: 1, consts: [["ngbTooltip", "Share current view", "placement", "right", 1, "btn", "btn-secondary", "btn-sm", 3, "disabled"], [1, "fa", "fa-share-alt"]], template: function ShareViewComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵelement(1, "i", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("disabled", true);
        } }, directives: [i1.NgbTooltip], encapsulation: 2 });
    return ShareViewComponent;
}());
exports.ShareViewComponent = ShareViewComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ShareViewComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'share-view',
                template: "<button class=\"btn btn-secondary btn-sm\"\n        ngbTooltip=\"Share current view\"\n        placement=\"right\"\n        [disabled]=\"true\"\n><i class=\"fa fa-share-alt\"></i></button>\n",
                styles: []
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJzaGFyZS12aWV3L3NoYXJlLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF1Rjs7O0FBS3ZGO0lBVUU7SUFFQSxDQUFDO0lBRUQsNENBQWUsR0FBZjtJQUVBLENBQUM7d0ZBUlUsa0JBQWtCOzJEQUFsQixrQkFBa0I7WUFObEIsaUNBSVo7WUFBQSx1QkFBK0I7WUFBQSxpQkFBUzs7WUFEakMsK0JBQWlCOzs2QkFWekI7Q0FzQkMsQUFqQkQsSUFpQkM7QUFUWSxnREFBa0I7a0RBQWxCLGtCQUFrQjtjQVI5QixnQkFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsZ01BS1g7Z0JBQUMsTUFBTSxFQUFFLEVBQUU7YUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbmRlY2xhcmUgdmFyIFBsb3RseTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaGFyZS12aWV3JyxcbiAgdGVtcGxhdGU6IGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCJcbiAgICAgICAgbmdiVG9vbHRpcD1cIlNoYXJlIGN1cnJlbnQgdmlld1wiXG4gICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcbiAgICAgICAgW2Rpc2FibGVkXT1cInRydWVcIlxuPjxpIGNsYXNzPVwiZmEgZmEtc2hhcmUtYWx0XCI+PC9pPjwvYnV0dG9uPlxuYCxzdHlsZXM6IFtdfSlcbmV4cG9ydCBjbGFzcyBTaGFyZVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0ICB7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG5cbiAgfVxufSJdfQ==