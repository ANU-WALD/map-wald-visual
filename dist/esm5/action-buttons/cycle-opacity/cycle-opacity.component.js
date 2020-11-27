"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleOpacityComponent = void 0;
var core_1 = require("@angular/core");
var layered_map_component_1 = require("../../layered-map/layered-map.component");
var i0 = require("@angular/core");
var i1 = require("@ng-bootstrap/ng-bootstrap");
var i2 = require("@angular/common");
var CycleOpacityComponent = /** @class */ (function () {
    function CycleOpacityComponent() {
        this.maxZoom = 32;
        this.tooltip = 'Adjust transparency of grid layer';
        this.layerOpacity = 1.0;
        this.step = 0.4;
    }
    CycleOpacityComponent.prototype.ngAfterViewInit = function () {
    };
    CycleOpacityComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.map) {
            this.map.layersChange.subscribe(function () { return _this.updateLayers(); });
        }
    };
    CycleOpacityComponent.prototype.cycleTransparency = function () {
        this.layerOpacity -= this.step;
        if (this.layerOpacity < 0) {
            this.layerOpacity = 1.0;
        }
        this.updateLayers();
    };
    CycleOpacityComponent.prototype.updateLayers = function () {
        var _this = this;
        this.map.layers.forEach(function (l) { return l.opacity = _this.layerOpacity; });
    };
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
    return CycleOpacityComponent;
}());
exports.CycleOpacityComponent = CycleOpacityComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CycleOpacityComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'cycle-opacity',
                template: "<button class=\"btn btn-secondary btn-sm\"\n                     (click)=\"cycleTransparency()\"\n                     [ngbTooltip]=\"tooltip\"\n                     placement=\"right\">\n<i class=\"fa\" [ngClass]=\"(layerOpacity<0.5)?'fa-circle-o':((layerOpacity<0.9)?'fa-adjust':'fa-circle')\"></i>\n</button>",
                styles: []
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ljbGUtb3BhY2l0eS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJhY3Rpb24tYnV0dG9ucy9jeWNsZS1vcGFjaXR5L2N5Y2xlLW9wYWNpdHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUFpSDtBQUNqSCxpRkFBOEU7Ozs7QUFLOUU7SUFlRTtRQUxTLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixZQUFPLEdBQUcsbUNBQW1DLENBQUM7UUFDOUMsaUJBQVksR0FBRyxHQUFHLENBQUM7UUFDbkIsU0FBSSxHQUFHLEdBQUcsQ0FBQztJQUlwQixDQUFDO0lBRUQsK0NBQWUsR0FBZjtJQUVBLENBQUM7SUFFRCwyQ0FBVyxHQUFYLFVBQVksT0FBc0I7UUFBbEMsaUJBSUM7UUFIQyxJQUFHLElBQUksQ0FBQyxHQUFHLEVBQUM7WUFDVixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsY0FBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLEVBQUUsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO1NBQzFEO0lBQ0gsQ0FBQztJQUVELGlEQUFpQixHQUFqQjtRQUNFLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztRQUMvQixJQUFHLElBQUksQ0FBQyxZQUFZLEdBQUMsQ0FBQyxFQUFDO1lBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTyw0Q0FBWSxHQUFwQjtRQUFBLGlCQUVDO1FBREMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsWUFBWSxFQUE3QixDQUE2QixDQUFDLENBQUM7SUFDOUQsQ0FBQzs4RkEvQlUscUJBQXFCOzhEQUFyQixxQkFBcUI7WUFOckIsaUNBSWI7WUFIcUIsa0dBQVMsdUJBQW1CLElBQUM7WUFHbEQsdUJBQTRHO1lBQzVHLGlCQUFTOztZQUhZLHdDQUFzQjtZQUU3QixlQUF5RjtZQUF6RixxSEFBeUY7O2dDQVp2RztDQThDQyxBQXhDRCxJQXdDQztBQWhDWSxzREFBcUI7a0RBQXJCLHFCQUFxQjtjQVJqQyxnQkFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUseVRBS0Y7Z0JBQUMsTUFBTSxFQUFFLEVBQUU7YUFBQztzQ0FFWCxHQUFHO2tCQUFYLFlBQUs7WUFDRyxPQUFPO2tCQUFmLFlBQUs7WUFDRyxPQUFPO2tCQUFmLFlBQUs7WUFDRyxZQUFZO2tCQUFwQixZQUFLO1lBQ0csSUFBSTtrQkFBWixZQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExheWVyZWRNYXBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9sYXllcmVkLW1hcC9sYXllcmVkLW1hcC5jb21wb25lbnQnO1xuXG5cbmRlY2xhcmUgdmFyIFBsb3RseTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeWNsZS1vcGFjaXR5JyxcbiAgdGVtcGxhdGU6IGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCJcbiAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJjeWNsZVRyYW5zcGFyZW5jeSgpXCJcbiAgICAgICAgICAgICAgICAgICAgIFtuZ2JUb29sdGlwXT1cInRvb2x0aXBcIlxuICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIj5cbjxpIGNsYXNzPVwiZmFcIiBbbmdDbGFzc109XCIobGF5ZXJPcGFjaXR5PDAuNSk/J2ZhLWNpcmNsZS1vJzooKGxheWVyT3BhY2l0eTwwLjkpPydmYS1hZGp1c3QnOidmYS1jaXJjbGUnKVwiPjwvaT5cbjwvYnV0dG9uPmAsc3R5bGVzOiBbXX0pXG5leHBvcnQgY2xhc3MgQ3ljbGVPcGFjaXR5Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzICB7XG4gIEBJbnB1dCgpIG1hcDpMYXllcmVkTWFwQ29tcG9uZW50O1xuICBASW5wdXQoKSBtYXhab29tID0gMzI7XG4gIEBJbnB1dCgpIHRvb2x0aXAgPSAnQWRqdXN0IHRyYW5zcGFyZW5jeSBvZiBncmlkIGxheWVyJztcbiAgQElucHV0KCkgbGF5ZXJPcGFjaXR5ID0gMS4wO1xuICBASW5wdXQoKSBzdGVwID0gMC40O1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuXG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYodGhpcy5tYXApe1xuICAgICAgdGhpcy5tYXAubGF5ZXJzQ2hhbmdlLnN1YnNjcmliZSgoKT0+dGhpcy51cGRhdGVMYXllcnMoKSk7XG4gICAgfVxuICB9XG5cbiAgY3ljbGVUcmFuc3BhcmVuY3koKXtcbiAgICB0aGlzLmxheWVyT3BhY2l0eSAtPSB0aGlzLnN0ZXA7XG4gICAgaWYodGhpcy5sYXllck9wYWNpdHk8MCl7XG4gICAgICB0aGlzLmxheWVyT3BhY2l0eSA9IDEuMDtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVMYXllcnMoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlTGF5ZXJzKCkge1xuICAgIHRoaXMubWFwLmxheWVycy5mb3JFYWNoKGwgPT4gbC5vcGFjaXR5ID0gdGhpcy5sYXllck9wYWNpdHkpO1xuICB9XG59XG4iXX0=