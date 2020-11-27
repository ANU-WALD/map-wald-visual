"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WMSLayerComponent = void 0;
var core_1 = require("@angular/core");
var core_2 = require("@agm/core");
var map_wald_1 = require("map-wald");
var i0 = require("@angular/core");
var i1 = require("map-wald");
var i2 = require("@agm/core");
var WMSLayerComponent = /** @class */ (function () {
    function WMSLayerComponent(_wmsService, _wrapper) {
        this._wmsService = _wmsService;
        this._wrapper = _wrapper;
        this.opacity = 1.0;
        this.position = 0;
        this.zoom = 4;
        this.building = false;
    }
    WMSLayerComponent.prototype.buildMap = function () {
        var _this = this;
        if (this.building)
            return;
        this.building = true;
        this._wrapper.getNativeMap().then(function (theMap) {
            _this.building = false;
            _this.map = theMap;
            _this.overlay = _this._wmsService.buildImageMap(function () { return _this.map; }, function (z) { return _this.url + '?'; }, function (z) { return _this.params; }, function () { return _this.opacity; });
            if (_this.map.overlayMapTypes.length > _this.position) {
                _this.map.overlayMapTypes.removeAt(_this.position);
                _this.map.overlayMapTypes.insertAt(_this.position, _this.overlay);
            }
            else {
                while (_this.map.overlayMapTypes.length <= _this.position) {
                    // Temporarily add replicate layers.
                    // These should be replaced by other wms-layer components
                    _this.map.overlayMapTypes.push(_this.overlay);
                }
            }
        }).catch(function (e) { return console.log(e); });
    };
    WMSLayerComponent.prototype.ngOnInit = function () {
        if (this.url) {
            this.buildMap();
        }
    };
    WMSLayerComponent.prototype.ngOnChanges = function (changes) {
        if (this.url) {
            this.buildMap();
        }
        // let currentOpacity: number = changes.opacity.currentValue;
        // let previousOpacity: number = changes.opacity.previousValue;
        // if (currentOpacity !== previousOpacity) {
        //   console.log('building a map off my own bat');
        //   this.buildMap();
        // }
    };
    WMSLayerComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this._wrapper.getNativeMap().then(function (theMap) {
            if (_this.map.overlayMapTypes.length > _this.position) {
                _this.map.overlayMapTypes.removeAt(_this.position);
            }
        });
    };
    WMSLayerComponent.ɵfac = function WMSLayerComponent_Factory(t) { return new (t || WMSLayerComponent)(i0.ɵɵdirectiveInject(i1.WMSService), i0.ɵɵdirectiveInject(i2.GoogleMapsAPIWrapper)); };
    WMSLayerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: WMSLayerComponent, selectors: [["wms-layer"]], inputs: { url: "url", params: "params", opacity: "opacity", position: "position" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function WMSLayerComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return WMSLayerComponent;
}());
exports.WMSLayerComponent = WMSLayerComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(WMSLayerComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'wms-layer',
                template: '',
            }]
    }], function () { return [{ type: i1.WMSService }, { type: i2.GoogleMapsAPIWrapper }]; }, { url: [{
            type: core_1.Input
        }], params: [{
            type: core_1.Input
        }], opacity: [{
            type: core_1.Input
        }], position: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid21zLWxheWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLXZpc3VhbC8iLCJzb3VyY2VzIjpbIndtcy1sYXllci93bXMtbGF5ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUNvRTtBQUNwRSxrQ0FBK0M7QUFDL0MscUNBQW9DOzs7O0FBRXBDO0lBVUUsMkJBQW9CLFdBQXNCLEVBQ3ZCLFFBQTZCO1FBRDVCLGdCQUFXLEdBQVgsV0FBVyxDQUFXO1FBQ3ZCLGFBQVEsR0FBUixRQUFRLENBQXFCO1FBSnZDLFlBQU8sR0FBUSxHQUFHLENBQUM7UUFDbkIsYUFBUSxHQUFRLENBQUMsQ0FBQztRQU0zQixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBRVQsYUFBUSxHQUFTLEtBQUssQ0FBQztJQUxvQixDQUFDO0lBTXBELG9DQUFRLEdBQVI7UUFBQSxpQkEwQkM7UUF6QkMsSUFBRyxJQUFJLENBQUMsUUFBUTtZQUNkLE9BQU87UUFDVCxJQUFJLENBQUMsUUFBUSxHQUFDLElBQUksQ0FBQztRQUVuQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDdkMsS0FBSSxDQUFDLFFBQVEsR0FBQyxLQUFLLENBQUM7WUFDcEIsS0FBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7WUFDbEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FDekMsY0FBSSxPQUFBLEtBQUksQ0FBQyxHQUFHLEVBQVIsQ0FBUSxFQUNaLFVBQUMsQ0FBQyxJQUFHLE9BQUEsS0FBSSxDQUFDLEdBQUcsR0FBQyxHQUFHLEVBQVosQ0FBWSxFQUNqQixVQUFDLENBQUMsSUFBRyxPQUFBLEtBQUksQ0FBQyxNQUFNLEVBQVgsQ0FBVyxFQUNoQixjQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sRUFBWixDQUFZLENBQ2pCLENBQUM7WUFFSixJQUFHLEtBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBQyxLQUFJLENBQUMsUUFBUSxFQUFDO2dCQUMvQyxLQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNqRCxLQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDL0Q7aUJBQU07Z0JBQ0wsT0FBTSxLQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxNQUFNLElBQUUsS0FBSSxDQUFDLFFBQVEsRUFBQztvQkFDbkQsb0NBQW9DO29CQUNwQyx5REFBeUQ7b0JBQ3pELEtBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQzdDO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxDQUFDLElBQUcsT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFkLENBQWMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0UsSUFBRyxJQUFJLENBQUMsR0FBRyxFQUFDO1lBQ1YsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQztJQUVELHVDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFHLElBQUksQ0FBQyxHQUFHLEVBQUM7WUFDVixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakI7UUFDRCw2REFBNkQ7UUFDN0QsK0RBQStEO1FBRS9ELDRDQUE0QztRQUM1QyxrREFBa0Q7UUFDbEQscUJBQXFCO1FBQ3JCLElBQUk7SUFDTixDQUFDO0lBRUQsdUNBQVcsR0FBWDtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ3ZDLElBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFDLEtBQUksQ0FBQyxRQUFRLEVBQUM7Z0JBQy9DLEtBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbEQ7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7c0ZBbEVVLGlCQUFpQjswREFBakIsaUJBQWlCOzRCQVQ5QjtDQTRFQyxBQXZFRCxJQXVFQztBQW5FWSw4Q0FBaUI7a0RBQWpCLGlCQUFpQjtjQUo3QixnQkFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUMsRUFBRTthQUNaO2dHQUVVLEdBQUc7a0JBQVgsWUFBSztZQUNHLE1BQU07a0JBQWQsWUFBSztZQUNHLE9BQU87a0JBQWYsWUFBSztZQUNHLFFBQVE7a0JBQWhCLFlBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQsXG4gICAgICAgICBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtHb29nbGVNYXBzQVBJV3JhcHBlcn0gZnJvbSAnQGFnbS9jb3JlJztcbmltcG9ydCB7V01TU2VydmljZX0gZnJvbSAnbWFwLXdhbGQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3bXMtbGF5ZXInLFxuICB0ZW1wbGF0ZTonJyxcbn0pXG5leHBvcnQgY2xhc3MgV01TTGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveXtcbiAgQElucHV0KCkgdXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBhcmFtczphbnk7XG4gIEBJbnB1dCgpIG9wYWNpdHk6bnVtYmVyPTEuMDtcbiAgQElucHV0KCkgcG9zaXRpb246bnVtYmVyPTA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfd21zU2VydmljZTpXTVNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwdWJsaWMgX3dyYXBwZXI6R29vZ2xlTWFwc0FQSVdyYXBwZXIpIHt9XG4gIG1hcDogYW55O1xuICBvdmVybGF5OmFueTtcbiAgem9vbTogbnVtYmVyID0gNDtcblxuICBwcml2YXRlIGJ1aWxkaW5nOmJvb2xlYW49ZmFsc2U7XG4gIGJ1aWxkTWFwKCl7XG4gICAgaWYodGhpcy5idWlsZGluZylcbiAgICAgIHJldHVybjtcbiAgICB0aGlzLmJ1aWxkaW5nPXRydWU7XG5cbiAgICB0aGlzLl93cmFwcGVyLmdldE5hdGl2ZU1hcCgpLnRoZW4oKHRoZU1hcCk9PntcbiAgICAgIHRoaXMuYnVpbGRpbmc9ZmFsc2U7XG4gICAgICB0aGlzLm1hcCA9IHRoZU1hcDtcbiAgICAgIHRoaXMub3ZlcmxheSA9IHRoaXMuX3dtc1NlcnZpY2UuYnVpbGRJbWFnZU1hcChcbiAgICAgICAgICAoKT0+dGhpcy5tYXAsXG4gICAgICAgICAgKHopPT50aGlzLnVybCsnPycsXG4gICAgICAgICAgKHopPT50aGlzLnBhcmFtcyxcbiAgICAgICAgICAoKT0+dGhpcy5vcGFjaXR5XG4gICAgICAgICk7XG5cbiAgICAgIGlmKHRoaXMubWFwLm92ZXJsYXlNYXBUeXBlcy5sZW5ndGg+dGhpcy5wb3NpdGlvbil7XG4gICAgICAgIHRoaXMubWFwLm92ZXJsYXlNYXBUeXBlcy5yZW1vdmVBdCh0aGlzLnBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5tYXAub3ZlcmxheU1hcFR5cGVzLmluc2VydEF0KHRoaXMucG9zaXRpb24sdGhpcy5vdmVybGF5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdoaWxlKHRoaXMubWFwLm92ZXJsYXlNYXBUeXBlcy5sZW5ndGg8PXRoaXMucG9zaXRpb24pe1xuICAgICAgICAgIC8vIFRlbXBvcmFyaWx5IGFkZCByZXBsaWNhdGUgbGF5ZXJzLlxuICAgICAgICAgIC8vIFRoZXNlwqBzaG91bGQgYmUgcmVwbGFjZWQgYnkgb3RoZXIgd21zLWxheWVyIGNvbXBvbmVudHNcbiAgICAgICAgICB0aGlzLm1hcC5vdmVybGF5TWFwVHlwZXMucHVzaCh0aGlzLm92ZXJsYXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkuY2F0Y2goKGUpPT5jb25zb2xlLmxvZyhlKSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZih0aGlzLnVybCl7XG4gICAgICB0aGlzLmJ1aWxkTWFwKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmKHRoaXMudXJsKXtcbiAgICAgIHRoaXMuYnVpbGRNYXAoKTtcbiAgICB9XG4gICAgLy8gbGV0IGN1cnJlbnRPcGFjaXR5OiBudW1iZXIgPSBjaGFuZ2VzLm9wYWNpdHkuY3VycmVudFZhbHVlO1xuICAgIC8vIGxldCBwcmV2aW91c09wYWNpdHk6IG51bWJlciA9IGNoYW5nZXMub3BhY2l0eS5wcmV2aW91c1ZhbHVlO1xuXG4gICAgLy8gaWYgKGN1cnJlbnRPcGFjaXR5ICE9PSBwcmV2aW91c09wYWNpdHkpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdidWlsZGluZyBhIG1hcCBvZmYgbXkgb3duIGJhdCcpO1xuICAgIC8vICAgdGhpcy5idWlsZE1hcCgpO1xuICAgIC8vIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3dyYXBwZXIuZ2V0TmF0aXZlTWFwKCkudGhlbigodGhlTWFwKT0+e1xuICAgICAgaWYodGhpcy5tYXAub3ZlcmxheU1hcFR5cGVzLmxlbmd0aD50aGlzLnBvc2l0aW9uKXtcbiAgICAgICAgdGhpcy5tYXAub3ZlcmxheU1hcFR5cGVzLnJlbW92ZUF0KHRoaXMucG9zaXRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=