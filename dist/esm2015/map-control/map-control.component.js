"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapControlComponent = void 0;
const core_1 = require("@angular/core");
const core_2 = require("@agm/core");
const i0 = require("@angular/core");
const i1 = require("@agm/core");
const _c0 = ["mapControl"];
const _c1 = ["*"];
class MapControlComponent {
    constructor(_el, _wrapper) {
        this._el = _el;
        this._wrapper = _wrapper;
        this.position = 'TOP_RIGHT';
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this._wrapper.getNativeMap().then((m) => {
            let content = this._el.nativeElement.querySelector('.map-control-content');
            // If content of the map control is not already wrapped in a div, do it
            // now.
            if (content.nodeName !== "DIV") {
                let controlDiv = document.createElement('div');
                controlDiv.appendChild(content);
                content = controlDiv;
            }
            m.controls[window.google.maps.ControlPosition[this.position]].push(content);
        });
    }
}
exports.MapControlComponent = MapControlComponent;
MapControlComponent.ɵfac = function MapControlComponent_Factory(t) { return new (t || MapControlComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.GoogleMapsAPIWrapper)); };
MapControlComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MapControlComponent, selectors: [["map-control"]], viewQuery: function MapControlComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mapControl = _t.first);
    } }, inputs: { position: "position" }, ngContentSelectors: _c1, decls: 3, vars: 0, consts: [[1, "map-control-content"], ["mapControl", ""]], template: function MapControlComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
    } }, styles: [".map-control-content[_ngcontent-%COMP%]{\n  background: transparent;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MapControlComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'map-control',
                template: `<div #mapControl class="map-control-content">
  <ng-content></ng-content>
</div>
`, styles: [`.map-control-content{
  background: transparent;
}
`],
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.GoogleMapsAPIWrapper }]; }, { mapControl: [{
            type: core_1.ViewChild,
            args: ['mapControl', { static: false }]
        }], position: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtdmlzdWFsLyIsInNvdXJjZXMiOlsibWFwLWNvbnRyb2wvbWFwLWNvbnRyb2wuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUErRjtBQUMvRixvQ0FBK0M7Ozs7O0FBRS9DLE1BVWEsbUJBQW1CO0lBSTlCLFlBQW9CLEdBQWMsRUFBUyxRQUE2QjtRQUFwRCxRQUFHLEdBQUgsR0FBRyxDQUFXO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBcUI7UUFGL0QsYUFBUSxHQUFVLFdBQVcsQ0FBQztJQUVxQyxDQUFDO0lBRTdFLFFBQVE7SUFDUixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7WUFDckMsSUFBSSxPQUFPLEdBQWdCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBRXhGLHVFQUF1RTtZQUN2RSxPQUFPO1lBQ1AsSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLEtBQUssRUFBRTtnQkFDOUIsSUFBSSxVQUFVLEdBQWdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVELFVBQVUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLE9BQU8sR0FBRyxVQUFVLENBQUM7YUFDdEI7WUFFSyxDQUFFLENBQUMsUUFBUSxDQUFPLE1BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUYsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztBQWpDSCxrREFtQ0M7c0ZBekJZLG1CQUFtQjt3REFBbkIsbUJBQW1COzs7Ozs7O1FBUm5CLGlDQUNYO1FBQUEsa0JBQXlCO1FBQzNCLGlCQUFNOztrREFNTyxtQkFBbUI7Y0FWL0IsZ0JBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFOzs7Q0FHWCxFQUFDLE1BQU0sRUFBRSxDQUFDOzs7Q0FHVixDQUFDO2FBQ0Q7Z0dBRXlDLFVBQVU7a0JBQWpELGdCQUFTO21CQUFDLFlBQVksRUFBQyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUM7WUFDN0IsUUFBUTtrQkFBaEIsWUFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0dvb2dsZU1hcHNBUElXcmFwcGVyfSBmcm9tICdAYWdtL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXAtY29udHJvbCcsXG4gIHRlbXBsYXRlOiBgPGRpdiAjbWFwQ29udHJvbCBjbGFzcz1cIm1hcC1jb250cm9sLWNvbnRlbnRcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5gLHN0eWxlczogW2AubWFwLWNvbnRyb2wtY29udGVudHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5gXSxcbn0pXG5leHBvcnQgY2xhc3MgTWFwQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgnbWFwQ29udHJvbCcse3N0YXRpYzpmYWxzZX0pIG1hcENvbnRyb2w6IENvbXBvbmVudDtcbiAgQElucHV0KCkgcG9zaXRpb246c3RyaW5nID0gJ1RPUF9SSUdIVCc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWw6RWxlbWVudFJlZiwgcHVibGljIF93cmFwcGVyOkdvb2dsZU1hcHNBUElXcmFwcGVyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgIHRoaXMuX3dyYXBwZXIuZ2V0TmF0aXZlTWFwKCkudGhlbigobSk9PntcbiAgICAgIGxldCBjb250ZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1hcC1jb250cm9sLWNvbnRlbnQnKTtcblxuICAgICAgLy8gSWYgY29udGVudCBvZiB0aGUgbWFwIGNvbnRyb2wgaXMgbm90IGFscmVhZHkgd3JhcHBlZCBpbiBhIGRpdiwgZG8gaXRcbiAgICAgIC8vIG5vdy5cbiAgICAgIGlmIChjb250ZW50Lm5vZGVOYW1lICE9PSBcIkRJVlwiKSB7XG4gICAgICAgIGxldCBjb250cm9sRGl2OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250cm9sRGl2LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICBjb250ZW50ID0gY29udHJvbERpdjtcbiAgICAgIH1cblxuICAgICAgKDxhbnk+bSkuY29udHJvbHNbKDxhbnk+d2luZG93KS5nb29nbGUubWFwcy5Db250cm9sUG9zaXRpb25bdGhpcy5wb3NpdGlvbl1dLnB1c2goY29udGVudCk7XG4gICAgfSk7XG4gIH1cblxufVxuIl19