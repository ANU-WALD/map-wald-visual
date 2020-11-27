"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeNavbarComponent = void 0;
var core_1 = require("@angular/core");
var map_wald_1 = require("map-wald");
var i0 = require("@angular/core");
var i1 = require("@angular/common");
var i2 = require("@ng-bootstrap/ng-bootstrap");
function ThemeNavbarComponent_li_1_a_4_Template(rf, ctx) { if (rf & 1) {
    var _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 7);
    i0.ɵɵlistener("click", function ThemeNavbarComponent_li_1_a_4_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r5); var layer_r3 = ctx.$implicit; var ctx_r4 = i0.ɵɵnextContext(2); return ctx_r4.layerClick($event, layer_r3, "replace"); });
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 8);
    i0.ɵɵelementStart(5, "i", 9);
    i0.ɵɵlistener("click", function ThemeNavbarComponent_li_1_a_4_Template_i_click_5_listener($event) { i0.ɵɵrestoreView(_r5); var layer_r3 = ctx.$implicit; var ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.layerClick($event, layer_r3, "replace"); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "br");
    i0.ɵɵelementStart(7, "i", 10);
    i0.ɵɵlistener("click", function ThemeNavbarComponent_li_1_a_4_Template_i_click_7_listener($event) { i0.ɵɵrestoreView(_r5); var layer_r3 = ctx.$implicit; var ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.layerClick($event, layer_r3, "add"); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var layer_r3 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(layer_r3.name);
} }
function ThemeNavbarComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 2);
    i0.ɵɵelementStart(1, "a", 3);
    i0.ɵɵelement(2, "i", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 5);
    i0.ɵɵtemplate(4, ThemeNavbarComponent_li_1_a_4_Template, 8, 1, "a", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var theme_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", theme_r1.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", theme_r1.layers);
} }
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
    ThemeNavbarComponent.ɵfac = function ThemeNavbarComponent_Factory(t) { return new (t || ThemeNavbarComponent)(); };
    ThemeNavbarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ThemeNavbarComponent, selectors: [["theme-navbar"]], inputs: { catalog: "catalog", includeSearch: "includeSearch" }, outputs: { layerSelected: "layerSelected" }, decls: 2, vars: 1, consts: [[1, "navbar-nav"], ["class", "nav-item", "ngbDropdown", "", 4, "ngFor", "ngForOf"], ["ngbDropdown", "", 1, "nav-item"], ["ngbDropdownToggle", "", "href", "#", 1, "nav-link"], [1, "fa", 3, "ngClass"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["class", "dropdown-item", "href", "#", 3, "click", 4, "ngFor", "ngForOf"], ["href", "#", 1, "dropdown-item", 3, "click"], [1, "float-right", "layer-select-icons"], ["placement", "right", "ngbTooltip", "Map this layer. (Replace any existing layers)", 1, "fa", "fa-map", "layer-select-icon", "discrete-icon", 3, "click"], ["placement", "right", "ngbTooltip", "Add this layer to the map.", 1, "fa", "fa-plus", "layer-select-icon", "discrete-icon", 3, "click"]], template: function ThemeNavbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "ul", 0);
            i0.ɵɵtemplate(1, ThemeNavbarComponent_li_1_Template, 5, 2, "li", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.catalog == null ? null : ctx.catalog.themes);
        } }, directives: [i1.NgForOf, i2.NgbDropdown, i2.NgbDropdownToggle, i1.NgClass, i2.NgbDropdownMenu, i2.NgbTooltip], styles: [".layer-select-icons[_ngcontent-%COMP%]{\n  font-size:0.75em;\n  margin-right:-20px;\n}\n\n\n  .tooltip-inner {\n  width: 400px;\n}\n\n.dropdown-item[_ngcontent-%COMP%]{\n  border-bottom: 1px solid #aaa;\n  height: 40px;\n}"] });
    return ThemeNavbarComponent;
}());
exports.ThemeNavbarComponent = ThemeNavbarComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ThemeNavbarComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'theme-navbar',
                template: "<ul class=\"navbar-nav\">\n  <li class=\"nav-item\" ngbDropdown *ngFor=\"let theme of catalog?.themes\">\n    <a class=\"nav-link\" ngbDropdownToggle href=\"#\"><i class=\"fa\" [ngClass]=\"theme.icon\"></i></a>\n    <div ngbDropdownMenu class=\"dropdown-menu\">\n      <a class=\"dropdown-item\" href=\"#\" (click)=\"layerClick($event,layer,'replace')\" *ngFor=\"let layer of theme.layers\">\n        <div>\n          <span>{{layer.name}}</span>\n          <span class=\"float-right layer-select-icons\">\n            <i class=\"fa fa-map layer-select-icon discrete-icon\"\n               (click)=\"layerClick($event,layer,'replace')\"\n               placement=\"right\"\n               ngbTooltip=\"Map this layer. (Replace any existing layers)\"></i>\n            <br/>\n            <i class=\"fa fa-plus layer-select-icon discrete-icon\"\n               (click)=\"layerClick($event,layer,'add')\"\n               placement=\"right\"\n               ngbTooltip=\"Add this layer to the map.\"></i>\n          </span>\n        </div>\n      </a>\n    </div>\n  </li>\n</ul>\n\n<!--\n\n[ng-reflect-ngb-tooltip].yellow + .tooltip {\n    background-color: yellow;\n}\n-->", styles: ["\n.layer-select-icons{\n  font-size:0.75em;\n  margin-right:-20px;\n}\n\n/* Annoying... using /deep/ to access the child component\n * but /deep/ (and synonyms) are deprecated. Not clear what\n * we should be doing\n */\n/deep/ .tooltip-inner {\n  width: 400px;\n}\n\n.dropdown-item{\n  border-bottom: 1px solid #aaa;\n  height: 40px;\n}\n"]
            }]
    }], function () { return []; }, { catalog: [{
            type: core_1.Input
        }], includeSearch: [{
            type: core_1.Input
        }], layerSelected: [{
            type: core_1.Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtbmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLXZpc3VhbC8iLCJzb3VyY2VzIjpbInRoZW1lLW5hdmJhci90aGVtZS1uYXZiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUM0RDtBQUM1RCxxQ0FBdUU7Ozs7OztJQVVqRSw0QkFDRTtJQURnQyxzT0FBaUMsU0FBUyxLQUFFO0lBQzVFLDJCQUNFO0lBQUEsNEJBQU07SUFBQSxZQUFjO0lBQUEsaUJBQU87SUFDM0IsK0JBQ0U7SUFBQSw0QkFHOEQ7SUFGM0Qsc09BQWlDLFNBQVMsS0FBRTtJQUVlLGlCQUFJO0lBQ2xFLHFCQUNBO0lBQUEsNkJBRzJDO0lBRnhDLHNPQUFpQyxLQUFLLEtBQUU7SUFFQSxpQkFBSTtJQUNqRCxpQkFBTztJQUNULGlCQUFNO0lBQ1IsaUJBQUk7OztJQWJNLGVBQWM7SUFBZCxtQ0FBYzs7O0lBTDVCLDZCQUNFO0lBQUEsNEJBQStDO0lBQUEsdUJBQXlDO0lBQUEsaUJBQUk7SUFDNUYsOEJBQ0U7SUFBQSxzRUFlSTtJQUNOLGlCQUFNO0lBQ1IsaUJBQUs7OztJQW5CMEQsZUFBc0I7SUFBdEIsdUNBQXNCO0lBRWdCLGVBQWU7SUFBZix5Q0FBZTs7QUFOdEg7SUF3REU7UUFGVSxrQkFBYSxHQUFnQyxJQUFJLG1CQUFZLEVBQWtCLENBQUM7SUFJMUYsQ0FBQztJQUVELDhDQUFlLEdBQWY7SUFFQSxDQUFDO0lBRUQseUNBQVUsR0FBVixVQUFXLEtBQVMsRUFBQyxLQUFXLEVBQUMsTUFBa0I7UUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQixJQUFJLFNBQVMsR0FBRztZQUNkLEtBQUssRUFBQyxLQUFLO1lBQ1gsTUFBTSxFQUFDLE1BQU07U0FDZCxDQUFDO1FBRUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELG1DQUFJLEdBQUosVUFBSyxLQUFTO1FBQ1osS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMxQixDQUFDOzRGQTNCVSxvQkFBb0I7NkRBQXBCLG9CQUFvQjtZQWhEcEIsNkJBQ1g7WUFBQSxtRUFvQks7WUFDUCxpQkFBSzs7WUFyQmdELGVBQWtCO1lBQWxCLHlFQUFrQjs7K0JBVHZFO0NBb0ZDLEFBOUVELElBOEVDO0FBNUJZLG9EQUFvQjtrREFBcEIsb0JBQW9CO2NBbERoQyxnQkFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUUsbXBDQTZCUixFQUFDLE1BQU0sRUFBRSxDQUFDLHFWQWtCYixDQUFDO2FBQUM7c0NBRVEsT0FBTztrQkFBZixZQUFLO1lBQ0csYUFBYTtrQkFBckIsWUFBSztZQUVJLGFBQWE7a0JBQXRCLGFBQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsXG4gICAgICAgICBBZnRlclZpZXdJbml0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhdGFsb2csIExheWVyLCBMYXllclNlbGVjdGlvbiwgTGF5ZXJBY3Rpb24gfSBmcm9tIFwibWFwLXdhbGRcIjtcblxuZGVjbGFyZSB2YXIgUGxvdGx5OiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoZW1lLW5hdmJhcicsXG4gIHRlbXBsYXRlOiBgPHVsIGNsYXNzPVwibmF2YmFyLW5hdlwiPlxuICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiIG5nYkRyb3Bkb3duICpuZ0Zvcj1cImxldCB0aGVtZSBvZiBjYXRhbG9nPy50aGVtZXNcIj5cbiAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgbmdiRHJvcGRvd25Ub2dnbGUgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhXCIgW25nQ2xhc3NdPVwidGhlbWUuaWNvblwiPjwvaT48L2E+XG4gICAgPGRpdiBuZ2JEcm9wZG93bk1lbnUgY2xhc3M9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiIChjbGljayk9XCJsYXllckNsaWNrKCRldmVudCxsYXllciwncmVwbGFjZScpXCIgKm5nRm9yPVwibGV0IGxheWVyIG9mIHRoZW1lLmxheWVyc1wiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzcGFuPnt7bGF5ZXIubmFtZX19PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxvYXQtcmlnaHQgbGF5ZXItc2VsZWN0LWljb25zXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLW1hcCBsYXllci1zZWxlY3QtaWNvbiBkaXNjcmV0ZS1pY29uXCJcbiAgICAgICAgICAgICAgIChjbGljayk9XCJsYXllckNsaWNrKCRldmVudCxsYXllciwncmVwbGFjZScpXCJcbiAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgIG5nYlRvb2x0aXA9XCJNYXAgdGhpcyBsYXllci4gKFJlcGxhY2UgYW55IGV4aXN0aW5nIGxheWVycylcIj48L2k+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzIGxheWVyLXNlbGVjdC1pY29uIGRpc2NyZXRlLWljb25cIlxuICAgICAgICAgICAgICAgKGNsaWNrKT1cImxheWVyQ2xpY2soJGV2ZW50LGxheWVyLCdhZGQnKVwiXG4gICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgICBuZ2JUb29sdGlwPVwiQWRkIHRoaXMgbGF5ZXIgdG8gdGhlIG1hcC5cIj48L2k+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgPC9saT5cbjwvdWw+XG5cbjwhLS1cblxuW25nLXJlZmxlY3QtbmdiLXRvb2x0aXBdLnllbGxvdyArIC50b29sdGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG4tLT5gLHN0eWxlczogW2Bcbi5sYXllci1zZWxlY3QtaWNvbnN7XG4gIGZvbnQtc2l6ZTowLjc1ZW07XG4gIG1hcmdpbi1yaWdodDotMjBweDtcbn1cblxuLyogQW5ub3lpbmcuLi4gdXNpbmcgL2RlZXAvIHRvIGFjY2VzcyB0aGUgY2hpbGQgY29tcG9uZW50XG4gKiBidXQgL2RlZXAvIChhbmQgc3lub255bXMpIGFyZSBkZXByZWNhdGVkLiBOb3QgY2xlYXIgd2hhdFxuICogd2Ugc2hvdWxkIGJlIGRvaW5nXG4gKi9cbi9kZWVwLyAudG9vbHRpcC1pbm5lciB7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxuLmRyb3Bkb3duLWl0ZW17XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWFhO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5gXX0pXG5leHBvcnQgY2xhc3MgVGhlbWVOYXZiYXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0ICB7XG4gIEBJbnB1dCgpIGNhdGFsb2c6Q2F0YWxvZztcbiAgQElucHV0KCkgaW5jbHVkZVNlYXJjaDpib29sZWFuO1xuXG4gIEBPdXRwdXQoKSBsYXllclNlbGVjdGVkOkV2ZW50RW1pdHRlcjxMYXllclNlbGVjdGlvbj4gPSBuZXcgRXZlbnRFbWl0dGVyPExheWVyU2VsZWN0aW9uPigpO1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuXG4gIH1cblxuICBsYXllckNsaWNrKGV2ZW50OmFueSxsYXllcjpMYXllcixhY3Rpb246TGF5ZXJBY3Rpb24pe1xuICAgIHRoaXMuc3RvcChldmVudCk7XG4gICAgdmFyIHNlbGVjdGlvbiA9IHtcbiAgICAgIGxheWVyOmxheWVyLFxuICAgICAgYWN0aW9uOmFjdGlvblxuICAgIH07XG5cbiAgICB0aGlzLmxheWVyU2VsZWN0ZWQuZW1pdChzZWxlY3Rpb24pO1xuICB9XG5cbiAgc3RvcChldmVudDphbnkpe1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cbiJdfQ==