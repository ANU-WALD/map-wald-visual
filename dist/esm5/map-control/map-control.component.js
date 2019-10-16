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
var core_2 = require("@agm/core");
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
    MapControlComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: core_2.GoogleMapsAPIWrapper }
    ]; };
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
            template: "<div #mapControl class=\"map-control-content\">\n  <ng-content></ng-content>\n</div>\n",
            styles: [".map-control-content{\n  background: transparent;\n}\n"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_2.GoogleMapsAPIWrapper])
    ], MapControlComponent);
    return MapControlComponent;
}());
exports.MapControlComponent = MapControlComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtdmlzdWFsLyIsInNvdXJjZXMiOlsibWFwLWNvbnRyb2wvbWFwLWNvbnRyb2wuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQStGO0FBQy9GLGtDQUErQztBQVkvQztJQUlFLDZCQUFvQixHQUFjLEVBQVMsUUFBNkI7UUFBcEQsUUFBRyxHQUFILEdBQUcsQ0FBVztRQUFTLGFBQVEsR0FBUixRQUFRLENBQXFCO1FBRi9ELGFBQVEsR0FBVSxXQUFXLENBQUM7SUFFcUMsQ0FBQztJQUU3RSxzQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELDZDQUFlLEdBQWY7UUFBQSxpQkFjQztRQWJDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQztZQUNsQyxJQUFJLE9BQU8sR0FBZ0IsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFFeEYsdUVBQXVFO1lBQ3ZFLE9BQU87WUFDUCxJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssS0FBSyxFQUFFO2dCQUM5QixJQUFJLFVBQVUsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDNUQsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEMsT0FBTyxHQUFHLFVBQVUsQ0FBQzthQUN0QjtZQUVLLENBQUUsQ0FBQyxRQUFRLENBQU8sTUFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1RixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQW5CdUIsaUJBQVU7Z0JBQWtCLDJCQUFvQjs7SUFIaEM7UUFBdkMsZ0JBQVMsQ0FBQyxZQUFZLEVBQUMsRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLENBQUM7a0NBQWEsZ0JBQVM7MkRBQUM7SUFDckQ7UUFBUixZQUFLLEVBQUU7O3lEQUErQjtJQUY1QixtQkFBbUI7UUFWL0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSx3RkFHWDtxQkFBVSx3REFHVjtTQUNBLENBQUM7eUNBS3dCLGlCQUFVLEVBQWtCLDJCQUFvQjtPQUo3RCxtQkFBbUIsQ0F5Qi9CO0lBQUQsMEJBQUM7Q0FBQSxBQXpCRCxJQXlCQztBQXpCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtHb29nbGVNYXBzQVBJV3JhcHBlcn0gZnJvbSAnQGFnbS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWFwLWNvbnRyb2wnLFxuICB0ZW1wbGF0ZTogYDxkaXYgI21hcENvbnRyb2wgY2xhc3M9XCJtYXAtY29udHJvbC1jb250ZW50XCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuYCxzdHlsZXM6IFtgLm1hcC1jb250cm9sLWNvbnRlbnR7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuYF0sXG59KVxuZXhwb3J0IGNsYXNzIE1hcENvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ21hcENvbnRyb2wnLHtzdGF0aWM6ZmFsc2V9KSBtYXBDb250cm9sOiBDb21wb25lbnQ7XG4gIEBJbnB1dCgpIHBvc2l0aW9uOnN0cmluZyA9ICdUT1BfUklHSFQnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsOkVsZW1lbnRSZWYsIHB1YmxpYyBfd3JhcHBlcjpHb29nbGVNYXBzQVBJV3JhcHBlcikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICB0aGlzLl93cmFwcGVyLmdldE5hdGl2ZU1hcCgpLnRoZW4oKG0pPT57XG4gICAgICBsZXQgY29udGVudDogSFRNTEVsZW1lbnQgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXAtY29udHJvbC1jb250ZW50Jyk7XG5cbiAgICAgIC8vIElmIGNvbnRlbnQgb2YgdGhlIG1hcCBjb250cm9sIGlzIG5vdCBhbHJlYWR5IHdyYXBwZWQgaW4gYSBkaXYsIGRvIGl0XG4gICAgICAvLyBub3cuXG4gICAgICBpZiAoY29udGVudC5ub2RlTmFtZSAhPT0gXCJESVZcIikge1xuICAgICAgICBsZXQgY29udHJvbERpdjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udHJvbERpdi5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgICAgY29udGVudCA9IGNvbnRyb2xEaXY7XG4gICAgICB9XG5cbiAgICAgICg8YW55Pm0pLmNvbnRyb2xzWyg8YW55PndpbmRvdykuZ29vZ2xlLm1hcHMuQ29udHJvbFBvc2l0aW9uW3RoaXMucG9zaXRpb25dXS5wdXNoKGNvbnRlbnQpO1xuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==