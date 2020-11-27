"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoomLayerComponent = void 0;
var core_1 = require("@angular/core");
var layered_map_component_1 = require("../../layered-map/layered-map.component");
var map_wald_1 = require("map-wald");
var i0 = require("@angular/core");
var i1 = require("@ng-bootstrap/ng-bootstrap");
var ZoomLayerComponent = /** @class */ (function () {
    function ZoomLayerComponent() {
    }
    ZoomLayerComponent.prototype.ngAfterViewInit = function () {
    };
    ZoomLayerComponent.prototype.zoomToLayer = function () {
        var _this = this;
        if (this.layer.layer.spatialExtent) {
            console.log('Zoom to layer');
            this.layer.layer.spatialExtent.subscribe(function (b) {
                _this.map.zoomToBounds(Object.assign({}, b));
            });
        }
        else {
            console.log('Zoom full');
            this.map.zoomToBounds(Object.assign({}, this.fullBounds));
        }
    };
    ZoomLayerComponent.ɵfac = function ZoomLayerComponent_Factory(t) { return new (t || ZoomLayerComponent)(); };
    ZoomLayerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ZoomLayerComponent, selectors: [["zoom-layer"]], inputs: { map: "map", layer: "layer", fullBounds: "fullBounds" }, decls: 2, vars: 1, consts: [["type", "button", "ngbTooltip", "Zoom to selected layer", "placement", "right", 1, "btn", "btn-secondary", "btn-sm", 3, "disabled", "click"], [1, "fa", "fa-compress"]], template: function ZoomLayerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function ZoomLayerComponent_Template_button_click_0_listener() { return ctx.zoomToLayer(); });
            i0.ɵɵelement(1, "i", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("disabled", !ctx.layer);
        } }, directives: [i1.NgbTooltip], encapsulation: 2 });
    return ZoomLayerComponent;
}());
exports.ZoomLayerComponent = ZoomLayerComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ZoomLayerComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'zoom-layer',
                template: "<button type=\"button\" [disabled]=\"!layer\" class=\"btn btn-secondary btn-sm\"\n        ngbTooltip=\"Zoom to selected layer\"\n        placement=\"right\"\n        (click)=\"zoomToLayer()\"\n><i class=\"fa fa-compress\"></i>\n</button>\n",
                styles: []
            }]
    }], function () { return []; }, { map: [{
            type: core_1.Input
        }], layer: [{
            type: core_1.Input
        }], fullBounds: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS1sYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJhY3Rpb24tYnV0dG9ucy96b29tLWxheWVyL3pvb20tbGF5ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF1RjtBQUN2RixpRkFBOEU7QUFDOUUscUNBQStDOzs7QUFLL0M7SUFjRTtJQUVBLENBQUM7SUFFRCw0Q0FBZSxHQUFmO0lBRUEsQ0FBQztJQUVELHdDQUFXLEdBQVg7UUFBQSxpQkFVQztRQVRDLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFDO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7Z0JBQ3hDLEtBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0MsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztTQUMzRDtJQUNILENBQUM7d0ZBdkJVLGtCQUFrQjsyREFBbEIsa0JBQWtCO1lBUGxCLGlDQUlaO1lBRE8sK0ZBQVMsaUJBQWEsSUFBQztZQUM5Qix1QkFBOEI7WUFDL0IsaUJBQVM7O1lBTDBCLHFDQUFtQjs7NkJBVHREO0NBd0NDLEFBakNELElBaUNDO0FBeEJZLGdEQUFrQjtrREFBbEIsa0JBQWtCO2NBVDlCLGdCQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRSxpUEFNWDtnQkFBQyxNQUFNLEVBQUUsRUFBRTthQUFDO3NDQUVGLEdBQUc7a0JBQVgsWUFBSztZQUNHLEtBQUs7a0JBQWIsWUFBSztZQUNHLFVBQVU7a0JBQWxCLFlBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExheWVyZWRNYXBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9sYXllcmVkLW1hcC9sYXllcmVkLW1hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFwcGVkTGF5ZXIsIEJvdW5kcyB9IGZyb20gJ21hcC13YWxkJztcblxuXG5kZWNsYXJlIHZhciBQbG90bHk6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnem9vbS1sYXllcicsXG4gIHRlbXBsYXRlOiBgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgW2Rpc2FibGVkXT1cIiFsYXllclwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCJcbiAgICAgICAgbmdiVG9vbHRpcD1cIlpvb20gdG8gc2VsZWN0ZWQgbGF5ZXJcIlxuICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgIChjbGljayk9XCJ6b29tVG9MYXllcigpXCJcbj48aSBjbGFzcz1cImZhIGZhLWNvbXByZXNzXCI+PC9pPlxuPC9idXR0b24+XG5gLHN0eWxlczogW119KVxuZXhwb3J0IGNsYXNzIFpvb21MYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBtYXA6IExheWVyZWRNYXBDb21wb25lbnQ7XG4gIEBJbnB1dCgpIGxheWVyOiBNYXBwZWRMYXllcjtcbiAgQElucHV0KCkgZnVsbEJvdW5kczogQm91bmRzO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG5cbiAgfVxuXG4gIHpvb21Ub0xheWVyKCkge1xuICAgIGlmKHRoaXMubGF5ZXIubGF5ZXIuc3BhdGlhbEV4dGVudCl7XG4gICAgICBjb25zb2xlLmxvZygnWm9vbSB0byBsYXllcicpO1xuICAgICAgdGhpcy5sYXllci5sYXllci5zcGF0aWFsRXh0ZW50LnN1YnNjcmliZShiPT57XG4gICAgICAgIHRoaXMubWFwLnpvb21Ub0JvdW5kcyhPYmplY3QuYXNzaWduKHt9LGIpKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnWm9vbSBmdWxsJyk7XG4gICAgICB0aGlzLm1hcC56b29tVG9Cb3VuZHMoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5mdWxsQm91bmRzKSk7XG4gICAgfVxuICB9XG59XG4iXX0=