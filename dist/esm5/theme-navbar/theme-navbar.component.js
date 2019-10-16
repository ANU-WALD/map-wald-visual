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
var map_wald_1 = require("map-wald");
var ThemeNavbarComponent = /** @class */ (function () {
    function ThemeNavbarComponent() {
        this.layerSelected = new core_1.EventEmitter();
    }
    ThemeNavbarComponent.prototype.ngAfterViewInit = function () {
    };
    ThemeNavbarComponent.prototype.layerClick = function (event, layer, action) {
        this.stop(event);
        var selection = {
            layer: layer,
            action: action
        };
        this.layerSelected.emit(selection);
    };
    ThemeNavbarComponent.prototype.stop = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", map_wald_1.Catalog)
    ], ThemeNavbarComponent.prototype, "catalog", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ThemeNavbarComponent.prototype, "includeSearch", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ThemeNavbarComponent.prototype, "layerSelected", void 0);
    ThemeNavbarComponent = __decorate([
        core_1.Component({
            selector: 'theme-navbar',
            template: "<ul class=\"navbar-nav\">\n  <li class=\"nav-item\" ngbDropdown *ngFor=\"let theme of catalog?.themes\">\n    <a class=\"nav-link\" ngbDropdownToggle href=\"#\"><i class=\"fa\" [ngClass]=\"theme.icon\"></i></a>\n    <div ngbDropdownMenu class=\"dropdown-menu\">\n      <a class=\"dropdown-item\" href=\"#\" (click)=\"layerClick($event,layer,'replace')\" *ngFor=\"let layer of theme.layers\">\n        <div>\n          <span>{{layer.name}}</span>\n          <span class=\"float-right layer-select-icons\">\n            <i class=\"fa fa-map layer-select-icon discrete-icon\"\n               (click)=\"layerClick($event,layer,'replace')\"\n               placement=\"right\"\n               ngbTooltip=\"Map this layer. (Replace any existing layers)\"></i>\n            <br/>\n            <i class=\"fa fa-plus layer-select-icon discrete-icon\"\n               (click)=\"layerClick($event,layer,'add')\"\n               placement=\"right\"\n               ngbTooltip=\"Add this layer to the map.\"></i>\n          </span>\n        </div>\n      </a>\n    </div>\n  </li>\n</ul>\n\n<!--\n\n[ng-reflect-ngb-tooltip].yellow + .tooltip {\n    background-color: yellow;\n}\n-->",
            styles: ["\n.layer-select-icons{\n  font-size:0.75em;\n  margin-right:-20px;\n}\n\n/* Annoying... using /deep/ to access the child component\n * but /deep/ (and synonyms) are deprecated. Not clear what\n * we should be doing\n */\n/deep/ .tooltip-inner {\n  width: 400px;\n}\n\n.dropdown-item{\n  border-bottom: 1px solid #aaa;\n  height: 40px;\n}\n"]
        }),
        __metadata("design:paramtypes", [])
    ], ThemeNavbarComponent);
    return ThemeNavbarComponent;
}());
exports.ThemeNavbarComponent = ThemeNavbarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtbmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLXZpc3VhbC8iLCJzb3VyY2VzIjpbInRoZW1lLW5hdmJhci90aGVtZS1uYXZiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQzREO0FBQzVELHFDQUF1RTtBQXNEdkU7SUFNRTtRQUZVLGtCQUFhLEdBQWdDLElBQUksbUJBQVksRUFBa0IsQ0FBQztJQUkxRixDQUFDO0lBRUQsOENBQWUsR0FBZjtJQUVBLENBQUM7SUFFRCx5Q0FBVSxHQUFWLFVBQVcsS0FBUyxFQUFDLEtBQVcsRUFBQyxNQUFrQjtRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pCLElBQUksU0FBUyxHQUFHO1lBQ2QsS0FBSyxFQUFDLEtBQUs7WUFDWCxNQUFNLEVBQUMsTUFBTTtTQUNkLENBQUM7UUFFRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsbUNBQUksR0FBSixVQUFLLEtBQVM7UUFDWixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUExQlE7UUFBUixZQUFLLEVBQUU7a0NBQVMsa0JBQU87eURBQUM7SUFDaEI7UUFBUixZQUFLLEVBQUU7OytEQUF1QjtJQUVyQjtRQUFULGFBQU0sRUFBRTtrQ0FBZSxtQkFBWTsrREFBc0Q7SUFKL0Usb0JBQW9CO1FBbERoQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLG1wQ0E2QlI7cUJBQVUscVZBa0JiO1NBQUUsQ0FBQzs7T0FDUyxvQkFBb0IsQ0E0QmhDO0lBQUQsMkJBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsXG4gICAgICAgICBBZnRlclZpZXdJbml0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhdGFsb2csIExheWVyLCBMYXllclNlbGVjdGlvbiwgTGF5ZXJBY3Rpb24gfSBmcm9tIFwibWFwLXdhbGRcIjtcblxuZGVjbGFyZSB2YXIgUGxvdGx5OiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoZW1lLW5hdmJhcicsXG4gIHRlbXBsYXRlOiBgPHVsIGNsYXNzPVwibmF2YmFyLW5hdlwiPlxuICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiIG5nYkRyb3Bkb3duICpuZ0Zvcj1cImxldCB0aGVtZSBvZiBjYXRhbG9nPy50aGVtZXNcIj5cbiAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgbmdiRHJvcGRvd25Ub2dnbGUgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhXCIgW25nQ2xhc3NdPVwidGhlbWUuaWNvblwiPjwvaT48L2E+XG4gICAgPGRpdiBuZ2JEcm9wZG93bk1lbnUgY2xhc3M9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiIChjbGljayk9XCJsYXllckNsaWNrKCRldmVudCxsYXllciwncmVwbGFjZScpXCIgKm5nRm9yPVwibGV0IGxheWVyIG9mIHRoZW1lLmxheWVyc1wiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzcGFuPnt7bGF5ZXIubmFtZX19PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxvYXQtcmlnaHQgbGF5ZXItc2VsZWN0LWljb25zXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLW1hcCBsYXllci1zZWxlY3QtaWNvbiBkaXNjcmV0ZS1pY29uXCJcbiAgICAgICAgICAgICAgIChjbGljayk9XCJsYXllckNsaWNrKCRldmVudCxsYXllciwncmVwbGFjZScpXCJcbiAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgIG5nYlRvb2x0aXA9XCJNYXAgdGhpcyBsYXllci4gKFJlcGxhY2UgYW55IGV4aXN0aW5nIGxheWVycylcIj48L2k+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzIGxheWVyLXNlbGVjdC1pY29uIGRpc2NyZXRlLWljb25cIlxuICAgICAgICAgICAgICAgKGNsaWNrKT1cImxheWVyQ2xpY2soJGV2ZW50LGxheWVyLCdhZGQnKVwiXG4gICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgICBuZ2JUb29sdGlwPVwiQWRkIHRoaXMgbGF5ZXIgdG8gdGhlIG1hcC5cIj48L2k+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgPC9saT5cbjwvdWw+XG5cbjwhLS1cblxuW25nLXJlZmxlY3QtbmdiLXRvb2x0aXBdLnllbGxvdyArIC50b29sdGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG4tLT5gLHN0eWxlczogW2Bcbi5sYXllci1zZWxlY3QtaWNvbnN7XG4gIGZvbnQtc2l6ZTowLjc1ZW07XG4gIG1hcmdpbi1yaWdodDotMjBweDtcbn1cblxuLyogQW5ub3lpbmcuLi4gdXNpbmcgL2RlZXAvIHRvIGFjY2VzcyB0aGUgY2hpbGQgY29tcG9uZW50XG4gKiBidXQgL2RlZXAvIChhbmQgc3lub255bXMpIGFyZSBkZXByZWNhdGVkLiBOb3QgY2xlYXIgd2hhdFxuICogd2Ugc2hvdWxkIGJlIGRvaW5nXG4gKi9cbi9kZWVwLyAudG9vbHRpcC1pbm5lciB7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxuLmRyb3Bkb3duLWl0ZW17XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWFhO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5gXX0pXG5leHBvcnQgY2xhc3MgVGhlbWVOYXZiYXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0ICB7XG4gIEBJbnB1dCgpIGNhdGFsb2c6Q2F0YWxvZztcbiAgQElucHV0KCkgaW5jbHVkZVNlYXJjaDpib29sZWFuO1xuXG4gIEBPdXRwdXQoKSBsYXllclNlbGVjdGVkOkV2ZW50RW1pdHRlcjxMYXllclNlbGVjdGlvbj4gPSBuZXcgRXZlbnRFbWl0dGVyPExheWVyU2VsZWN0aW9uPigpO1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuXG4gIH1cblxuICBsYXllckNsaWNrKGV2ZW50OmFueSxsYXllcjpMYXllcixhY3Rpb246TGF5ZXJBY3Rpb24pe1xuICAgIHRoaXMuc3RvcChldmVudCk7XG4gICAgdmFyIHNlbGVjdGlvbiA9IHtcbiAgICAgIGxheWVyOmxheWVyLFxuICAgICAgYWN0aW9uOmFjdGlvblxuICAgIH07XG5cbiAgICB0aGlzLmxheWVyU2VsZWN0ZWQuZW1pdChzZWxlY3Rpb24pO1xuICB9XG5cbiAgc3RvcChldmVudDphbnkpe1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cbiJdfQ==