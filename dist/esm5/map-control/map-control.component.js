"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapControlComponent = void 0;
var core_1 = require("@angular/core");
var core_2 = require("@agm/core");
var i0 = require("@angular/core");
var i1 = require("@agm/core");
var _c0 = ["mapControl"];
var _c1 = ["*"];
var MapControlComponent = /** @class */ (function () {
    function MapControlComponent(_el, _wrapper) {
        this._el = _el;
        this._wrapper = _wrapper;
        this.position = 'TOP_RIGHT';
    }
    MapControlComponent.prototype.ngOnInit = function () {
    };
    MapControlComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._wrapper.getNativeMap().then(function (m) {
            var content = _this._el.nativeElement.querySelector('.map-control-content');
            // If content of the map control is not already wrapped in a div, do it
            // now.
            if (content.nodeName !== "DIV") {
                var controlDiv = document.createElement('div');
                controlDiv.appendChild(content);
                content = controlDiv;
            }
            m.controls[window.google.maps.ControlPosition[_this.position]].push(content);
        });
    };
    MapControlComponent.ɵfac = function MapControlComponent_Factory(t) { return new (t || MapControlComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.GoogleMapsAPIWrapper)); };
    MapControlComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MapControlComponent, selectors: [["map-control"]], viewQuery: function MapControlComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t = void 0;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mapControl = _t.first);
        } }, inputs: { position: "position" }, ngContentSelectors: _c1, decls: 3, vars: 0, consts: [[1, "map-control-content"], ["mapControl", ""]], template: function MapControlComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0, 1);
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd();
        } }, styles: [".map-control-content[_ngcontent-%COMP%]{\n  background: transparent;\n}"] });
    return MapControlComponent;
}());
exports.MapControlComponent = MapControlComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MapControlComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'map-control',
                template: "<div #mapControl class=\"map-control-content\">\n  <ng-content></ng-content>\n</div>\n", styles: [".map-control-content{\n  background: transparent;\n}\n"],
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.GoogleMapsAPIWrapper }]; }, { mapControl: [{
            type: core_1.ViewChild,
            args: ['mapControl', { static: false }]
        }], position: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtdmlzdWFsLyIsInNvdXJjZXMiOlsibWFwLWNvbnRyb2wvbWFwLWNvbnRyb2wuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUErRjtBQUMvRixrQ0FBK0M7Ozs7O0FBRS9DO0lBY0UsNkJBQW9CLEdBQWMsRUFBUyxRQUE2QjtRQUFwRCxRQUFHLEdBQUgsR0FBRyxDQUFXO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBcUI7UUFGL0QsYUFBUSxHQUFVLFdBQVcsQ0FBQztJQUVxQyxDQUFDO0lBRTdFLHNDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsNkNBQWUsR0FBZjtRQUFBLGlCQWNDO1FBYkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDO1lBQ2xDLElBQUksT0FBTyxHQUFnQixLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUV4Rix1RUFBdUU7WUFDdkUsT0FBTztZQUNQLElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxLQUFLLEVBQUU7Z0JBQzlCLElBQUksVUFBVSxHQUFnQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1RCxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLEdBQUcsVUFBVSxDQUFDO2FBQ3RCO1lBRUssQ0FBRSxDQUFDLFFBQVEsQ0FBTyxNQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVGLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzswRkF2QlUsbUJBQW1COzREQUFuQixtQkFBbUI7Ozs7Ozs7WUFSbkIsaUNBQ1g7WUFBQSxrQkFBeUI7WUFDM0IsaUJBQU07OzhCQVBOO0NBc0NDLEFBbkNELElBbUNDO0FBekJZLGtEQUFtQjtrREFBbkIsbUJBQW1CO2NBVi9CLGdCQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRSx3RkFHWCxFQUFDLE1BQU0sRUFBRSxDQUFDLHdEQUdWLENBQUM7YUFDRDtnR0FFeUMsVUFBVTtrQkFBakQsZ0JBQVM7bUJBQUMsWUFBWSxFQUFDLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQztZQUM3QixRQUFRO2tCQUFoQixZQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7R29vZ2xlTWFwc0FQSVdyYXBwZXJ9IGZyb20gJ0BhZ20vY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hcC1jb250cm9sJyxcbiAgdGVtcGxhdGU6IGA8ZGl2ICNtYXBDb250cm9sIGNsYXNzPVwibWFwLWNvbnRyb2wtY29udGVudFwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbmAsc3R5bGVzOiBbYC5tYXAtY29udHJvbC1jb250ZW50e1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmBdLFxufSlcbmV4cG9ydCBjbGFzcyBNYXBDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKCdtYXBDb250cm9sJyx7c3RhdGljOmZhbHNlfSkgbWFwQ29udHJvbDogQ29tcG9uZW50O1xuICBASW5wdXQoKSBwb3NpdGlvbjpzdHJpbmcgPSAnVE9QX1JJR0hUJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbDpFbGVtZW50UmVmLCBwdWJsaWMgX3dyYXBwZXI6R29vZ2xlTWFwc0FQSVdyYXBwZXIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG4gICAgdGhpcy5fd3JhcHBlci5nZXROYXRpdmVNYXAoKS50aGVuKChtKT0+e1xuICAgICAgbGV0IGNvbnRlbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubWFwLWNvbnRyb2wtY29udGVudCcpO1xuXG4gICAgICAvLyBJZiBjb250ZW50IG9mIHRoZSBtYXAgY29udHJvbCBpcyBub3QgYWxyZWFkeSB3cmFwcGVkIGluIGEgZGl2LCBkbyBpdFxuICAgICAgLy8gbm93LlxuICAgICAgaWYgKGNvbnRlbnQubm9kZU5hbWUgIT09IFwiRElWXCIpIHtcbiAgICAgICAgbGV0IGNvbnRyb2xEaXY6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRyb2xEaXYuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgIGNvbnRlbnQgPSBjb250cm9sRGl2O1xuICAgICAgfVxuXG4gICAgICAoPGFueT5tKS5jb250cm9sc1soPGFueT53aW5kb3cpLmdvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvblt0aGlzLnBvc2l0aW9uXV0ucHVzaChjb250ZW50KTtcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=