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
const core_2 = require("@agm/core");
let MapControlComponent = class MapControlComponent {
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
};
MapControlComponent.ctorParameters = () => [
    { type: core_1.ElementRef },
    { type: core_2.GoogleMapsAPIWrapper }
];
__decorate([
    core_1.ViewChild('mapControl', { static: false }),
    __metadata("design:type", core_1.Component)
], MapControlComponent.prototype, "mapControl", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MapControlComponent.prototype, "position", void 0);
MapControlComponent = __decorate([
    core_1.Component({
        selector: 'map-control',
        template: `<div #mapControl class="map-control-content">
  <ng-content></ng-content>
</div>
`,
        styles: [`.map-control-content{
  background: transparent;
}
`]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_2.GoogleMapsAPIWrapper])
], MapControlComponent);
exports.MapControlComponent = MapControlComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtdmlzdWFsLyIsInNvdXJjZXMiOlsibWFwLWNvbnRyb2wvbWFwLWNvbnRyb2wuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQStGO0FBQy9GLG9DQUErQztBQVkvQyxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQUk5QixZQUFvQixHQUFjLEVBQVMsUUFBNkI7UUFBcEQsUUFBRyxHQUFILEdBQUcsQ0FBVztRQUFTLGFBQVEsR0FBUixRQUFRLENBQXFCO1FBRi9ELGFBQVEsR0FBVSxXQUFXLENBQUM7SUFFcUMsQ0FBQztJQUU3RSxRQUFRO0lBQ1IsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxFQUFFO1lBQ3JDLElBQUksT0FBTyxHQUFnQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUV4Rix1RUFBdUU7WUFDdkUsT0FBTztZQUNQLElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxLQUFLLEVBQUU7Z0JBQzlCLElBQUksVUFBVSxHQUFnQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1RCxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLEdBQUcsVUFBVSxDQUFDO2FBQ3RCO1lBRUssQ0FBRSxDQUFDLFFBQVEsQ0FBTyxNQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVGLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUVGLENBQUE7O1lBckJ5QixpQkFBVTtZQUFrQiwyQkFBb0I7O0FBSGhDO0lBQXZDLGdCQUFTLENBQUMsWUFBWSxFQUFDLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxDQUFDOzhCQUFhLGdCQUFTO3VEQUFDO0FBQ3JEO0lBQVIsWUFBSyxFQUFFOztxREFBK0I7QUFGNUIsbUJBQW1CO0lBVi9CLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsYUFBYTtRQUN2QixRQUFRLEVBQUU7OztDQUdYO2lCQUFVOzs7Q0FHVjtLQUNBLENBQUM7cUNBS3dCLGlCQUFVLEVBQWtCLDJCQUFvQjtHQUo3RCxtQkFBbUIsQ0F5Qi9CO0FBekJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0dvb2dsZU1hcHNBUElXcmFwcGVyfSBmcm9tICdAYWdtL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXAtY29udHJvbCcsXG4gIHRlbXBsYXRlOiBgPGRpdiAjbWFwQ29udHJvbCBjbGFzcz1cIm1hcC1jb250cm9sLWNvbnRlbnRcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5gLHN0eWxlczogW2AubWFwLWNvbnRyb2wtY29udGVudHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5gXSxcbn0pXG5leHBvcnQgY2xhc3MgTWFwQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgnbWFwQ29udHJvbCcse3N0YXRpYzpmYWxzZX0pIG1hcENvbnRyb2w6IENvbXBvbmVudDtcbiAgQElucHV0KCkgcG9zaXRpb246c3RyaW5nID0gJ1RPUF9SSUdIVCc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWw6RWxlbWVudFJlZiwgcHVibGljIF93cmFwcGVyOkdvb2dsZU1hcHNBUElXcmFwcGVyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgIHRoaXMuX3dyYXBwZXIuZ2V0TmF0aXZlTWFwKCkudGhlbigobSk9PntcbiAgICAgIGxldCBjb250ZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1hcC1jb250cm9sLWNvbnRlbnQnKTtcblxuICAgICAgLy8gSWYgY29udGVudCBvZiB0aGUgbWFwIGNvbnRyb2wgaXMgbm90IGFscmVhZHkgd3JhcHBlZCBpbiBhIGRpdiwgZG8gaXRcbiAgICAgIC8vIG5vdy5cbiAgICAgIGlmIChjb250ZW50Lm5vZGVOYW1lICE9PSBcIkRJVlwiKSB7XG4gICAgICAgIGxldCBjb250cm9sRGl2OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250cm9sRGl2LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICBjb250ZW50ID0gY29udHJvbERpdjtcbiAgICAgIH1cblxuICAgICAgKDxhbnk+bSkuY29udHJvbHNbKDxhbnk+d2luZG93KS5nb29nbGUubWFwcy5Db250cm9sUG9zaXRpb25bdGhpcy5wb3NpdGlvbl1dLnB1c2goY29udGVudCk7XG4gICAgfSk7XG4gIH1cblxufVxuIl19