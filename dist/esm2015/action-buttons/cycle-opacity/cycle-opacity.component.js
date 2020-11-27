"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleOpacityComponent = void 0;
const core_1 = require("@angular/core");
const layered_map_component_1 = require("../../layered-map/layered-map.component");
const i0 = require("@angular/core");
const i1 = require("@ng-bootstrap/ng-bootstrap");
const i2 = require("@angular/common");
class CycleOpacityComponent {
    constructor() {
        this.maxZoom = 32;
        this.tooltip = 'Adjust transparency of grid layer';
        this.layerOpacity = 1.0;
        this.step = 0.4;
    }
    ngAfterViewInit() {
    }
    ngOnChanges(changes) {
        if (this.map) {
            this.map.layersChange.subscribe(() => this.updateLayers());
        }
    }
    cycleTransparency() {
        this.layerOpacity -= this.step;
        if (this.layerOpacity < 0) {
            this.layerOpacity = 1.0;
        }
        this.updateLayers();
    }
    updateLayers() {
        this.map.layers.forEach(l => l.opacity = this.layerOpacity);
    }
}
exports.CycleOpacityComponent = CycleOpacityComponent;
CycleOpacityComponent.ɵfac = function CycleOpacityComponent_Factory(t) { return new (t || CycleOpacityComponent)(); };
CycleOpacityComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CycleOpacityComponent, selectors: [["cycle-opacity"]], inputs: { map: "map", maxZoom: "maxZoom", tooltip: "tooltip", layerOpacity: "layerOpacity", step: "step" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [["placement", "right", 1, "btn", "btn-secondary", "btn-sm", 3, "ngbTooltip", "click"], [1, "fa", 3, "ngClass"]], template: function CycleOpacityComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function CycleOpacityComponent_Template_button_click_0_listener() { return ctx.cycleTransparency(); });
        i0.ɵɵelement(1, "i", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngbTooltip", ctx.tooltip);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.layerOpacity < 0.5 ? "fa-circle-o" : ctx.layerOpacity < 0.9 ? "fa-adjust" : "fa-circle");
    } }, directives: [i1.NgbTooltip, i2.NgClass], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CycleOpacityComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'cycle-opacity',
                template: `<button class="btn btn-secondary btn-sm"
                     (click)="cycleTransparency()"
                     [ngbTooltip]="tooltip"
                     placement="right">
<i class="fa" [ngClass]="(layerOpacity<0.5)?'fa-circle-o':((layerOpacity<0.9)?'fa-adjust':'fa-circle')"></i>
</button>`, styles: []
            }]
    }], function () { return []; }, { map: [{
            type: core_1.Input
        }], maxZoom: [{
            type: core_1.Input
        }], tooltip: [{
            type: core_1.Input
        }], layerOpacity: [{
            type: core_1.Input
        }], step: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ljbGUtb3BhY2l0eS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJhY3Rpb24tYnV0dG9ucy9jeWNsZS1vcGFjaXR5L2N5Y2xlLW9wYWNpdHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUFpSDtBQUNqSCxtRkFBOEU7Ozs7QUFLOUUsTUFRYSxxQkFBcUI7SUFPaEM7UUFMUyxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsWUFBTyxHQUFHLG1DQUFtQyxDQUFDO1FBQzlDLGlCQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ25CLFNBQUksR0FBRyxHQUFHLENBQUM7SUFJcEIsQ0FBQztJQUVELGVBQWU7SUFFZixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUcsSUFBSSxDQUFDLEdBQUcsRUFBQztZQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFFLEVBQUUsQ0FBQSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztTQUMxRDtJQUNILENBQUM7SUFFRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDL0IsSUFBRyxJQUFJLENBQUMsWUFBWSxHQUFDLENBQUMsRUFBQztZQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztTQUN6QjtRQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU8sWUFBWTtRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5RCxDQUFDOztBQXZDSCxzREF3Q0M7MEZBaENZLHFCQUFxQjswREFBckIscUJBQXFCO1FBTnJCLGlDQUliO1FBSHFCLGtHQUFTLHVCQUFtQixJQUFDO1FBR2xELHVCQUE0RztRQUM1RyxpQkFBUzs7UUFIWSx3Q0FBc0I7UUFFN0IsZUFBeUY7UUFBekYscUhBQXlGOztrREFFMUYscUJBQXFCO2NBUmpDLGdCQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRTs7Ozs7VUFLRixFQUFDLE1BQU0sRUFBRSxFQUFFO2FBQUM7c0NBRVgsR0FBRztrQkFBWCxZQUFLO1lBQ0csT0FBTztrQkFBZixZQUFLO1lBQ0csT0FBTztrQkFBZixZQUFLO1lBQ0csWUFBWTtrQkFBcEIsWUFBSztZQUNHLElBQUk7a0JBQVosWUFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXllcmVkTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vbGF5ZXJlZC1tYXAvbGF5ZXJlZC1tYXAuY29tcG9uZW50JztcblxuXG5kZWNsYXJlIHZhciBQbG90bHk6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3ljbGUtb3BhY2l0eScsXG4gIHRlbXBsYXRlOiBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiXG4gICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiY3ljbGVUcmFuc3BhcmVuY3koKVwiXG4gICAgICAgICAgICAgICAgICAgICBbbmdiVG9vbHRpcF09XCJ0b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCI+XG48aSBjbGFzcz1cImZhXCIgW25nQ2xhc3NdPVwiKGxheWVyT3BhY2l0eTwwLjUpPydmYS1jaXJjbGUtbyc6KChsYXllck9wYWNpdHk8MC45KT8nZmEtYWRqdXN0JzonZmEtY2lyY2xlJylcIj48L2k+XG48L2J1dHRvbj5gLHN0eWxlczogW119KVxuZXhwb3J0IGNsYXNzIEN5Y2xlT3BhY2l0eUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyAge1xuICBASW5wdXQoKSBtYXA6TGF5ZXJlZE1hcENvbXBvbmVudDtcbiAgQElucHV0KCkgbWF4Wm9vbSA9IDMyO1xuICBASW5wdXQoKSB0b29sdGlwID0gJ0FkanVzdCB0cmFuc3BhcmVuY3kgb2YgZ3JpZCBsYXllcic7XG4gIEBJbnB1dCgpIGxheWVyT3BhY2l0eSA9IDEuMDtcbiAgQElucHV0KCkgc3RlcCA9IDAuNDtcblxuICBjb25zdHJ1Y3Rvcigpe1xuXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcblxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmKHRoaXMubWFwKXtcbiAgICAgIHRoaXMubWFwLmxheWVyc0NoYW5nZS5zdWJzY3JpYmUoKCk9PnRoaXMudXBkYXRlTGF5ZXJzKCkpO1xuICAgIH1cbiAgfVxuXG4gIGN5Y2xlVHJhbnNwYXJlbmN5KCl7XG4gICAgdGhpcy5sYXllck9wYWNpdHkgLT0gdGhpcy5zdGVwO1xuICAgIGlmKHRoaXMubGF5ZXJPcGFjaXR5PDApe1xuICAgICAgdGhpcy5sYXllck9wYWNpdHkgPSAxLjA7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlTGF5ZXJzKCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUxheWVycygpIHtcbiAgICB0aGlzLm1hcC5sYXllcnMuZm9yRWFjaChsID0+IGwub3BhY2l0eSA9IHRoaXMubGF5ZXJPcGFjaXR5KTtcbiAgfVxufVxuIl19