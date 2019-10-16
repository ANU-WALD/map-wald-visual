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
var CollapsibleMapControlComponent = /** @class */ (function () {
    function CollapsibleMapControlComponent() {
    }
    CollapsibleMapControlComponent.prototype.ngAfterViewInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], CollapsibleMapControlComponent.prototype, "isCollapsed", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CollapsibleMapControlComponent.prototype, "heading", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CollapsibleMapControlComponent.prototype, "direction", void 0);
    CollapsibleMapControlComponent = __decorate([
        core_1.Component({
            selector: 'collapsible-map-control',
            template: "<div class=\"card map-control collapsible-control\">\n    <a (click)=\"isCollapsed = !isCollapsed\">\n      <div class=\"card-header\">\n        <h6 class=\"mb-0\">\n          {{heading}}\n          <span *ngIf=\"isCollapsed\" class=\"float-right fa fa-caret-up\n            collapse-arrow\" aria-hidden=\"true\"></span>\n          <span *ngIf=\"!isCollapsed\" class=\"float-right fa fa-caret-down\n            collapse-arrow\" aria-hidden=\"true\"></span>\n        </h6>\n      </div>\n    </a>\n\n    <div class=\"ngbCollapse\" [ngbCollapse]=\"isCollapsed\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n",
            styles: [".collapsible-control{\n  margin:3px;\n}"]
        }),
        __metadata("design:paramtypes", [])
    ], CollapsibleMapControlComponent);
    return CollapsibleMapControlComponent;
}());
exports.CollapsibleMapControlComponent = CollapsibleMapControlComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2libGUtbWFwLWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtdmlzdWFsLyIsInNvdXJjZXMiOlsiY29sbGFwc2libGUtbWFwLWNvbnRyb2wvY29sbGFwc2libGUtbWFwLWNvbnRyb2wuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXVGO0FBMkJ2RjtJQUtFO0lBRUEsQ0FBQztJQUVELHdEQUFlLEdBQWY7SUFFQSxDQUFDO0lBVlE7UUFBUixZQUFLLEVBQUU7O3VFQUFzQjtJQUNyQjtRQUFSLFlBQUssRUFBRTs7bUVBQWlCO0lBQ2hCO1FBQVIsWUFBSyxFQUFFOztxRUFBbUI7SUFIaEIsOEJBQThCO1FBdEIxQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxRQUFRLEVBQUUsMm1CQWlCWDtxQkFBVSx5Q0FFVDtTQUFFLENBQUM7O09BQ1EsOEJBQThCLENBWTFDO0lBQUQscUNBQUM7Q0FBQSxBQVpELElBWUM7QUFaWSx3RUFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5kZWNsYXJlIHZhciBQbG90bHk6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29sbGFwc2libGUtbWFwLWNvbnRyb2wnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJjYXJkIG1hcC1jb250cm9sIGNvbGxhcHNpYmxlLWNvbnRyb2xcIj5cbiAgICA8YSAoY2xpY2spPVwiaXNDb2xsYXBzZWQgPSAhaXNDb2xsYXBzZWRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICA8aDYgY2xhc3M9XCJtYi0wXCI+XG4gICAgICAgICAge3toZWFkaW5nfX1cbiAgICAgICAgICA8c3BhbiAqbmdJZj1cImlzQ29sbGFwc2VkXCIgY2xhc3M9XCJmbG9hdC1yaWdodCBmYSBmYS1jYXJldC11cFxuICAgICAgICAgICAgY29sbGFwc2UtYXJyb3dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCIhaXNDb2xsYXBzZWRcIiBjbGFzcz1cImZsb2F0LXJpZ2h0IGZhIGZhLWNhcmV0LWRvd25cbiAgICAgICAgICAgIGNvbGxhcHNlLWFycm93XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuICAgICAgICA8L2g2PlxuICAgICAgPC9kaXY+XG4gICAgPC9hPlxuXG4gICAgPGRpdiBjbGFzcz1cIm5nYkNvbGxhcHNlXCIgW25nYkNvbGxhcHNlXT1cImlzQ29sbGFwc2VkXCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuYCxzdHlsZXM6IFtgLmNvbGxhcHNpYmxlLWNvbnRyb2x7XG4gIG1hcmdpbjozcHg7XG59YF19KVxuZXhwb3J0IGNsYXNzIENvbGxhcHNpYmxlTWFwQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQgIHtcbiAgQElucHV0KCkgaXNDb2xsYXBzZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGhlYWRpbmc6IHN0cmluZztcbiAgQElucHV0KCkgZGlyZWN0aW9uOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG5cbiAgfVxufSJdfQ==