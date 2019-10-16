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
const core_1 = require("@angular/core");
const map_wald_1 = require("map-wald");
let ThemeNavbarComponent = class ThemeNavbarComponent {
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
-->`,
        styles: [`
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
    }),
    __metadata("design:paramtypes", [])
], ThemeNavbarComponent);
exports.ThemeNavbarComponent = ThemeNavbarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtbmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLXZpc3VhbC8iLCJzb3VyY2VzIjpbInRoZW1lLW5hdmJhci90aGVtZS1uYXZiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQzREO0FBQzVELHVDQUF1RTtBQXNEdkUsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFNL0I7UUFGVSxrQkFBYSxHQUFnQyxJQUFJLG1CQUFZLEVBQWtCLENBQUM7SUFJMUYsQ0FBQztJQUVELGVBQWU7SUFFZixDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQVMsRUFBQyxLQUFXLEVBQUMsTUFBa0I7UUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQixJQUFJLFNBQVMsR0FBRztZQUNkLEtBQUssRUFBQyxLQUFLO1lBQ1gsTUFBTSxFQUFDLE1BQU07U0FDZCxDQUFDO1FBRUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELElBQUksQ0FBQyxLQUFTO1FBQ1osS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMxQixDQUFDO0NBQ0YsQ0FBQTtBQTNCVTtJQUFSLFlBQUssRUFBRTs4QkFBUyxrQkFBTztxREFBQztBQUNoQjtJQUFSLFlBQUssRUFBRTs7MkRBQXVCO0FBRXJCO0lBQVQsYUFBTSxFQUFFOzhCQUFlLG1CQUFZOzJEQUFzRDtBQUovRSxvQkFBb0I7SUFsRGhDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUN4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBNkJSO2lCQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FrQmI7S0FBRSxDQUFDOztHQUNTLG9CQUFvQixDQTRCaEM7QUE1Qlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LFxuICAgICAgICAgQWZ0ZXJWaWV3SW5pdCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYXRhbG9nLCBMYXllciwgTGF5ZXJTZWxlY3Rpb24sIExheWVyQWN0aW9uIH0gZnJvbSBcIm1hcC13YWxkXCI7XG5cbmRlY2xhcmUgdmFyIFBsb3RseTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aGVtZS1uYXZiYXInLFxuICB0ZW1wbGF0ZTogYDx1bCBjbGFzcz1cIm5hdmJhci1uYXZcIj5cbiAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIiBuZ2JEcm9wZG93biAqbmdGb3I9XCJsZXQgdGhlbWUgb2YgY2F0YWxvZz8udGhlbWVzXCI+XG4gICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIG5nYkRyb3Bkb3duVG9nZ2xlIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJmYVwiIFtuZ0NsYXNzXT1cInRoZW1lLmljb25cIj48L2k+PC9hPlxuICAgIDxkaXYgbmdiRHJvcGRvd25NZW51IGNsYXNzPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIiAoY2xpY2spPVwibGF5ZXJDbGljaygkZXZlbnQsbGF5ZXIsJ3JlcGxhY2UnKVwiICpuZ0Zvcj1cImxldCBsYXllciBvZiB0aGVtZS5sYXllcnNcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3Bhbj57e2xheWVyLm5hbWV9fTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImZsb2F0LXJpZ2h0IGxheWVyLXNlbGVjdC1pY29uc1wiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1tYXAgbGF5ZXItc2VsZWN0LWljb24gZGlzY3JldGUtaWNvblwiXG4gICAgICAgICAgICAgICAoY2xpY2spPVwibGF5ZXJDbGljaygkZXZlbnQsbGF5ZXIsJ3JlcGxhY2UnKVwiXG4gICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgICBuZ2JUb29sdGlwPVwiTWFwIHRoaXMgbGF5ZXIuIChSZXBsYWNlIGFueSBleGlzdGluZyBsYXllcnMpXCI+PC9pPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcGx1cyBsYXllci1zZWxlY3QtaWNvbiBkaXNjcmV0ZS1pY29uXCJcbiAgICAgICAgICAgICAgIChjbGljayk9XCJsYXllckNsaWNrKCRldmVudCxsYXllciwnYWRkJylcIlxuICAgICAgICAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxuICAgICAgICAgICAgICAgbmdiVG9vbHRpcD1cIkFkZCB0aGlzIGxheWVyIHRvIHRoZSBtYXAuXCI+PC9pPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gIDwvbGk+XG48L3VsPlxuXG48IS0tXG5cbltuZy1yZWZsZWN0LW5nYi10b29sdGlwXS55ZWxsb3cgKyAudG9vbHRpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufVxuLS0+YCxzdHlsZXM6IFtgXG4ubGF5ZXItc2VsZWN0LWljb25ze1xuICBmb250LXNpemU6MC43NWVtO1xuICBtYXJnaW4tcmlnaHQ6LTIwcHg7XG59XG5cbi8qIEFubm95aW5nLi4uIHVzaW5nIC9kZWVwLyB0byBhY2Nlc3MgdGhlIGNoaWxkIGNvbXBvbmVudFxuICogYnV0IC9kZWVwLyAoYW5kIHN5bm9ueW1zKSBhcmUgZGVwcmVjYXRlZC4gTm90IGNsZWFyIHdoYXRcbiAqIHdlIHNob3VsZCBiZSBkb2luZ1xuICovXG4vZGVlcC8gLnRvb2x0aXAtaW5uZXIge1xuICB3aWR0aDogNDAwcHg7XG59XG5cbi5kcm9wZG93bi1pdGVte1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FhYTtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuYF19KVxuZXhwb3J0IGNsYXNzIFRoZW1lTmF2YmFyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCAge1xuICBASW5wdXQoKSBjYXRhbG9nOkNhdGFsb2c7XG4gIEBJbnB1dCgpIGluY2x1ZGVTZWFyY2g6Ym9vbGVhbjtcblxuICBAT3V0cHV0KCkgbGF5ZXJTZWxlY3RlZDpFdmVudEVtaXR0ZXI8TGF5ZXJTZWxlY3Rpb24+ID0gbmV3IEV2ZW50RW1pdHRlcjxMYXllclNlbGVjdGlvbj4oKTtcblxuICBjb25zdHJ1Y3Rvcigpe1xuXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcblxuICB9XG5cbiAgbGF5ZXJDbGljayhldmVudDphbnksbGF5ZXI6TGF5ZXIsYWN0aW9uOkxheWVyQWN0aW9uKXtcbiAgICB0aGlzLnN0b3AoZXZlbnQpO1xuICAgIHZhciBzZWxlY3Rpb24gPSB7XG4gICAgICBsYXllcjpsYXllcixcbiAgICAgIGFjdGlvbjphY3Rpb25cbiAgICB9O1xuXG4gICAgdGhpcy5sYXllclNlbGVjdGVkLmVtaXQoc2VsZWN0aW9uKTtcbiAgfVxuXG4gIHN0b3AoZXZlbnQ6YW55KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG4iXX0=