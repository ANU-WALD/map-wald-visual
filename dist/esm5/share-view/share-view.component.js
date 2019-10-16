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
var core_1 = require("@angular/core");
var ShareViewComponent = /** @class */ (function () {
    function ShareViewComponent() {
    }
    ShareViewComponent.prototype.ngAfterViewInit = function () {
    };
    ShareViewComponent = __decorate([
        core_1.Component({
            selector: 'share-view',
            template: "<button class=\"btn btn-secondary btn-sm\"\n        ngbTooltip=\"Share current view\"\n        placement=\"right\"\n        [disabled]=\"true\"\n><i class=\"fa fa-share-alt\"></i></button>\n"
        }),
        __metadata("design:paramtypes", [])
    ], ShareViewComponent);
    return ShareViewComponent;
}());
exports.ShareViewComponent = ShareViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJzaGFyZS12aWV3L3NoYXJlLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXVGO0FBYXZGO0lBRUU7SUFFQSxDQUFDO0lBRUQsNENBQWUsR0FBZjtJQUVBLENBQUM7SUFSVSxrQkFBa0I7UUFSOUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxnTUFLWDtTQUFZLENBQUM7O09BQ0Qsa0JBQWtCLENBUzlCO0lBQUQseUJBQUM7Q0FBQSxBQVRELElBU0M7QUFUWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5kZWNsYXJlIHZhciBQbG90bHk6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2hhcmUtdmlldycsXG4gIHRlbXBsYXRlOiBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiXG4gICAgICAgIG5nYlRvb2x0aXA9XCJTaGFyZSBjdXJyZW50IHZpZXdcIlxuICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJ0cnVlXCJcbj48aSBjbGFzcz1cImZhIGZhLXNoYXJlLWFsdFwiPjwvaT48L2J1dHRvbj5cbmAsc3R5bGVzOiBbXX0pXG5leHBvcnQgY2xhc3MgU2hhcmVWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCAge1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuXG4gIH1cbn0iXX0=