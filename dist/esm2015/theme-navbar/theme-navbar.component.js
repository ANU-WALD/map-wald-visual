"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeNavbarComponent = void 0;
const core_1 = require("@angular/core");
const map_wald_1 = require("map-wald");
const i0 = require("@angular/core");
const i1 = require("@angular/common");
const i2 = require("@ng-bootstrap/ng-bootstrap");
function ThemeNavbarComponent_li_1_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 7);
    i0.ɵɵlistener("click", function ThemeNavbarComponent_li_1_a_4_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r5); const layer_r3 = ctx.$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return ctx_r4.layerClick($event, layer_r3, "replace"); });
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 8);
    i0.ɵɵelementStart(5, "i", 9);
    i0.ɵɵlistener("click", function ThemeNavbarComponent_li_1_a_4_Template_i_click_5_listener($event) { i0.ɵɵrestoreView(_r5); const layer_r3 = ctx.$implicit; const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.layerClick($event, layer_r3, "replace"); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "br");
    i0.ɵɵelementStart(7, "i", 10);
    i0.ɵɵlistener("click", function ThemeNavbarComponent_li_1_a_4_Template_i_click_7_listener($event) { i0.ɵɵrestoreView(_r5); const layer_r3 = ctx.$implicit; const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.layerClick($event, layer_r3, "add"); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const layer_r3 = ctx.$implicit;
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
    const theme_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", theme_r1.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", theme_r1.layers);
} }
class ThemeNavbarComponent {
    constructor() {
        this.layerSelected = new core_1.EventEmitter();
    }
    ngAfterViewInit() {
    }
    layerClick(event, layer, action) {
        this.stop(event);
        var selection = {
            layer: layer,
            action: action
        };
        this.layerSelected.emit(selection);
    }
    stop(event) {
        event.preventDefault();
        event.stopPropagation();
    }
}
exports.ThemeNavbarComponent = ThemeNavbarComponent;
ThemeNavbarComponent.ɵfac = function ThemeNavbarComponent_Factory(t) { return new (t || ThemeNavbarComponent)(); };
ThemeNavbarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ThemeNavbarComponent, selectors: [["theme-navbar"]], inputs: { catalog: "catalog", includeSearch: "includeSearch" }, outputs: { layerSelected: "layerSelected" }, decls: 2, vars: 1, consts: [[1, "navbar-nav"], ["class", "nav-item", "ngbDropdown", "", 4, "ngFor", "ngForOf"], ["ngbDropdown", "", 1, "nav-item"], ["ngbDropdownToggle", "", "href", "#", 1, "nav-link"], [1, "fa", 3, "ngClass"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["class", "dropdown-item", "href", "#", 3, "click", 4, "ngFor", "ngForOf"], ["href", "#", 1, "dropdown-item", 3, "click"], [1, "float-right", "layer-select-icons"], ["placement", "right", "ngbTooltip", "Map this layer. (Replace any existing layers)", 1, "fa", "fa-map", "layer-select-icon", "discrete-icon", 3, "click"], ["placement", "right", "ngbTooltip", "Add this layer to the map.", 1, "fa", "fa-plus", "layer-select-icon", "discrete-icon", 3, "click"]], template: function ThemeNavbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ul", 0);
        i0.ɵɵtemplate(1, ThemeNavbarComponent_li_1_Template, 5, 2, "li", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.catalog == null ? null : ctx.catalog.themes);
    } }, directives: [i1.NgForOf, i2.NgbDropdown, i2.NgbDropdownToggle, i1.NgClass, i2.NgbDropdownMenu, i2.NgbTooltip], styles: [".layer-select-icons[_ngcontent-%COMP%]{\n  font-size:0.75em;\n  margin-right:-20px;\n}\n\n\n  .tooltip-inner {\n  width: 400px;\n}\n\n.dropdown-item[_ngcontent-%COMP%]{\n  border-bottom: 1px solid #aaa;\n  height: 40px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ThemeNavbarComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'theme-navbar',
                template: `<ul class="navbar-nav">
  <li class="nav-item" ngbDropdown *ngFor="let theme of catalog?.themes">
    <a class="nav-link" ngbDropdownToggle href="#"><i class="fa" [ngClass]="theme.icon"></i></a>
    <div ngbDropdownMenu class="dropdown-menu">
      <a class="dropdown-item" href="#" (click)="layerClick($event,layer,'replace')" *ngFor="let layer of theme.layers">
        <div>
          <span>{{layer.name}}</span>
          <span class="float-right layer-select-icons">
            <i class="fa fa-map layer-select-icon discrete-icon"
               (click)="layerClick($event,layer,'replace')"
               placement="right"
               ngbTooltip="Map this layer. (Replace any existing layers)"></i>
            <br/>
            <i class="fa fa-plus layer-select-icon discrete-icon"
               (click)="layerClick($event,layer,'add')"
               placement="right"
               ngbTooltip="Add this layer to the map."></i>
          </span>
        </div>
      </a>
    </div>
  </li>
</ul>

<!--

[ng-reflect-ngb-tooltip].yellow + .tooltip {
    background-color: yellow;
}
-->`, styles: [`
.layer-select-icons{
  font-size:0.75em;
  margin-right:-20px;
}

/* Annoying... using /deep/ to access the child component
 * but /deep/ (and synonyms) are deprecated. Not clear what
 * we should be doing
 */
/deep/ .tooltip-inner {
  width: 400px;
}

.dropdown-item{
  border-bottom: 1px solid #aaa;
  height: 40px;
}
`]
            }]
    }], function () { return []; }, { catalog: [{
            type: core_1.Input
        }], includeSearch: [{
            type: core_1.Input
        }], layerSelected: [{
            type: core_1.Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtbmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLXZpc3VhbC8iLCJzb3VyY2VzIjpbInRoZW1lLW5hdmJhci90aGVtZS1uYXZiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUM0RDtBQUM1RCx1Q0FBdUU7Ozs7OztJQVVqRSw0QkFDRTtJQURnQywwT0FBaUMsU0FBUyxLQUFFO0lBQzVFLDJCQUNFO0lBQUEsNEJBQU07SUFBQSxZQUFjO0lBQUEsaUJBQU87SUFDM0IsK0JBQ0U7SUFBQSw0QkFHOEQ7SUFGM0QsME9BQWlDLFNBQVMsS0FBRTtJQUVlLGlCQUFJO0lBQ2xFLHFCQUNBO0lBQUEsNkJBRzJDO0lBRnhDLDBPQUFpQyxLQUFLLEtBQUU7SUFFQSxpQkFBSTtJQUNqRCxpQkFBTztJQUNULGlCQUFNO0lBQ1IsaUJBQUk7OztJQWJNLGVBQWM7SUFBZCxtQ0FBYzs7O0lBTDVCLDZCQUNFO0lBQUEsNEJBQStDO0lBQUEsdUJBQXlDO0lBQUEsaUJBQUk7SUFDNUYsOEJBQ0U7SUFBQSxzRUFlSTtJQUNOLGlCQUFNO0lBQ1IsaUJBQUs7OztJQW5CMEQsZUFBc0I7SUFBdEIsdUNBQXNCO0lBRWdCLGVBQWU7SUFBZix5Q0FBZTs7QUFOdEgsTUFrRGEsb0JBQW9CO0lBTS9CO1FBRlUsa0JBQWEsR0FBZ0MsSUFBSSxtQkFBWSxFQUFrQixDQUFDO0lBSTFGLENBQUM7SUFFRCxlQUFlO0lBRWYsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFTLEVBQUMsS0FBVyxFQUFDLE1BQWtCO1FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakIsSUFBSSxTQUFTLEdBQUc7WUFDZCxLQUFLLEVBQUMsS0FBSztZQUNYLE1BQU0sRUFBQyxNQUFNO1NBQ2QsQ0FBQztRQUVGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxJQUFJLENBQUMsS0FBUztRQUNaLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7QUE3RUgsb0RBOEVDO3dGQTVCWSxvQkFBb0I7eURBQXBCLG9CQUFvQjtRQWhEcEIsNkJBQ1g7UUFBQSxtRUFvQks7UUFDUCxpQkFBSzs7UUFyQmdELGVBQWtCO1FBQWxCLHlFQUFrQjs7a0RBK0MxRCxvQkFBb0I7Y0FsRGhDLGdCQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE2QlIsRUFBQyxNQUFNLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBa0JiLENBQUM7YUFBQztzQ0FFUSxPQUFPO2tCQUFmLFlBQUs7WUFDRyxhQUFhO2tCQUFyQixZQUFLO1lBRUksYUFBYTtrQkFBdEIsYUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCxcbiAgICAgICAgIEFmdGVyVmlld0luaXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2F0YWxvZywgTGF5ZXIsIExheWVyU2VsZWN0aW9uLCBMYXllckFjdGlvbiB9IGZyb20gXCJtYXAtd2FsZFwiO1xuXG5kZWNsYXJlIHZhciBQbG90bHk6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGhlbWUtbmF2YmFyJyxcbiAgdGVtcGxhdGU6IGA8dWwgY2xhc3M9XCJuYXZiYXItbmF2XCI+XG4gIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCIgbmdiRHJvcGRvd24gKm5nRm9yPVwibGV0IHRoZW1lIG9mIGNhdGFsb2c/LnRoZW1lc1wiPlxuICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBuZ2JEcm9wZG93blRvZ2dsZSBocmVmPVwiI1wiPjxpIGNsYXNzPVwiZmFcIiBbbmdDbGFzc109XCJ0aGVtZS5pY29uXCI+PC9pPjwvYT5cbiAgICA8ZGl2IG5nYkRyb3Bkb3duTWVudSBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIj5cbiAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCIgKGNsaWNrKT1cImxheWVyQ2xpY2soJGV2ZW50LGxheWVyLCdyZXBsYWNlJylcIiAqbmdGb3I9XCJsZXQgbGF5ZXIgb2YgdGhlbWUubGF5ZXJzXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHNwYW4+e3tsYXllci5uYW1lfX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbG9hdC1yaWdodCBsYXllci1zZWxlY3QtaWNvbnNcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbWFwIGxheWVyLXNlbGVjdC1pY29uIGRpc2NyZXRlLWljb25cIlxuICAgICAgICAgICAgICAgKGNsaWNrKT1cImxheWVyQ2xpY2soJGV2ZW50LGxheWVyLCdyZXBsYWNlJylcIlxuICAgICAgICAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxuICAgICAgICAgICAgICAgbmdiVG9vbHRpcD1cIk1hcCB0aGlzIGxheWVyLiAoUmVwbGFjZSBhbnkgZXhpc3RpbmcgbGF5ZXJzKVwiPjwvaT5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXBsdXMgbGF5ZXItc2VsZWN0LWljb24gZGlzY3JldGUtaWNvblwiXG4gICAgICAgICAgICAgICAoY2xpY2spPVwibGF5ZXJDbGljaygkZXZlbnQsbGF5ZXIsJ2FkZCcpXCJcbiAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgIG5nYlRvb2x0aXA9XCJBZGQgdGhpcyBsYXllciB0byB0aGUgbWFwLlwiPjwvaT5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICA8L2xpPlxuPC91bD5cblxuPCEtLVxuXG5bbmctcmVmbGVjdC1uZ2ItdG9vbHRpcF0ueWVsbG93ICsgLnRvb2x0aXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1cbi0tPmAsc3R5bGVzOiBbYFxuLmxheWVyLXNlbGVjdC1pY29uc3tcbiAgZm9udC1zaXplOjAuNzVlbTtcbiAgbWFyZ2luLXJpZ2h0Oi0yMHB4O1xufVxuXG4vKiBBbm5veWluZy4uLiB1c2luZyAvZGVlcC8gdG8gYWNjZXNzIHRoZSBjaGlsZCBjb21wb25lbnRcbiAqIGJ1dCAvZGVlcC8gKGFuZCBzeW5vbnltcykgYXJlIGRlcHJlY2F0ZWQuIE5vdCBjbGVhciB3aGF0XG4gKiB3ZSBzaG91bGQgYmUgZG9pbmdcbiAqL1xuL2RlZXAvIC50b29sdGlwLWlubmVyIHtcbiAgd2lkdGg6IDQwMHB4O1xufVxuXG4uZHJvcGRvd24taXRlbXtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhYWE7XG4gIGhlaWdodDogNDBweDtcbn1cbmBdfSlcbmV4cG9ydCBjbGFzcyBUaGVtZU5hdmJhckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQgIHtcbiAgQElucHV0KCkgY2F0YWxvZzpDYXRhbG9nO1xuICBASW5wdXQoKSBpbmNsdWRlU2VhcmNoOmJvb2xlYW47XG5cbiAgQE91dHB1dCgpIGxheWVyU2VsZWN0ZWQ6RXZlbnRFbWl0dGVyPExheWVyU2VsZWN0aW9uPiA9IG5ldyBFdmVudEVtaXR0ZXI8TGF5ZXJTZWxlY3Rpb24+KCk7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG5cbiAgfVxuXG4gIGxheWVyQ2xpY2soZXZlbnQ6YW55LGxheWVyOkxheWVyLGFjdGlvbjpMYXllckFjdGlvbil7XG4gICAgdGhpcy5zdG9wKGV2ZW50KTtcbiAgICB2YXIgc2VsZWN0aW9uID0ge1xuICAgICAgbGF5ZXI6bGF5ZXIsXG4gICAgICBhY3Rpb246YWN0aW9uXG4gICAgfTtcblxuICAgIHRoaXMubGF5ZXJTZWxlY3RlZC5lbWl0KHNlbGVjdGlvbik7XG4gIH1cblxuICBzdG9wKGV2ZW50OmFueSl7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuIl19