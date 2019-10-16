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
var ButtonBarComponent = /** @class */ (function () {
    function ButtonBarComponent() {
    }
    ButtonBarComponent.prototype.ngAfterViewInit = function () {
    };
    ButtonBarComponent = __decorate([
        core_1.Component({
            selector: 'button-bar',
            template: "<div class=\"button-bar bb-vertical\">\n  <ng-content></ng-content>\n</div>\n\n",
            styles: ["\n"]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonBarComponent);
    return ButtonBarComponent;
}());
exports.ButtonBarComponent = ButtonBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJidXR0b24tYmFyL2J1dHRvbi1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXVGO0FBYXZGO0lBRUU7SUFFQSxDQUFDO0lBRUQsNENBQWUsR0FBZjtJQUVBLENBQUM7SUFSVSxrQkFBa0I7UUFSOUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxpRkFJWDtxQkFBVSxJQUNWO1NBQUUsQ0FBQzs7T0FDUyxrQkFBa0IsQ0FTOUI7SUFBRCx5QkFBQztDQUFBLEFBVEQsSUFTQztBQVRZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbmRlY2xhcmUgdmFyIFBsb3RseTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdidXR0b24tYmFyJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYnV0dG9uLWJhciBiYi12ZXJ0aWNhbFwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cblxuYCxzdHlsZXM6IFtgXG5gXX0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQmFyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCAge1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuXG4gIH1cbn0iXX0=