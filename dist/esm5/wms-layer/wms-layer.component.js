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
var map_wald_1 = require("map-wald");
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
    WMSLayerComponent.ctorParameters = function () { return [
        { type: map_wald_1.WMSService },
        { type: core_2.GoogleMapsAPIWrapper }
    ]; };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], WMSLayerComponent.prototype, "url", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], WMSLayerComponent.prototype, "params", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], WMSLayerComponent.prototype, "opacity", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], WMSLayerComponent.prototype, "position", void 0);
    WMSLayerComponent = __decorate([
        core_1.Component({
            selector: 'wms-layer',
            template: ''
        }),
        __metadata("design:paramtypes", [map_wald_1.WMSService,
            core_2.GoogleMapsAPIWrapper])
    ], WMSLayerComponent);
    return WMSLayerComponent;
}());
exports.WMSLayerComponent = WMSLayerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid21zLWxheWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLXZpc3VhbC8iLCJzb3VyY2VzIjpbIndtcy1sYXllci93bXMtbGF5ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQ29FO0FBQ3BFLGtDQUErQztBQUMvQyxxQ0FBb0M7QUFNcEM7SUFNRSwyQkFBb0IsV0FBc0IsRUFDdkIsUUFBNkI7UUFENUIsZ0JBQVcsR0FBWCxXQUFXLENBQVc7UUFDdkIsYUFBUSxHQUFSLFFBQVEsQ0FBcUI7UUFKdkMsWUFBTyxHQUFRLEdBQUcsQ0FBQztRQUNuQixhQUFRLEdBQVEsQ0FBQyxDQUFDO1FBTTNCLFNBQUksR0FBVyxDQUFDLENBQUM7UUFFVCxhQUFRLEdBQVMsS0FBSyxDQUFDO0lBTG9CLENBQUM7SUFNcEQsb0NBQVEsR0FBUjtRQUFBLGlCQTBCQztRQXpCQyxJQUFHLElBQUksQ0FBQyxRQUFRO1lBQ2QsT0FBTztRQUNULElBQUksQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDO1FBRW5CLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUN2QyxLQUFJLENBQUMsUUFBUSxHQUFDLEtBQUssQ0FBQztZQUNwQixLQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztZQUNsQixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUN6QyxjQUFJLE9BQUEsS0FBSSxDQUFDLEdBQUcsRUFBUixDQUFRLEVBQ1osVUFBQyxDQUFDLElBQUcsT0FBQSxLQUFJLENBQUMsR0FBRyxHQUFDLEdBQUcsRUFBWixDQUFZLEVBQ2pCLFVBQUMsQ0FBQyxJQUFHLE9BQUEsS0FBSSxDQUFDLE1BQU0sRUFBWCxDQUFXLEVBQ2hCLGNBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxFQUFaLENBQVksQ0FDakIsQ0FBQztZQUVKLElBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFDLEtBQUksQ0FBQyxRQUFRLEVBQUM7Z0JBQy9DLEtBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2pELEtBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMvRDtpQkFBTTtnQkFDTCxPQUFNLEtBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLE1BQU0sSUFBRSxLQUFJLENBQUMsUUFBUSxFQUFDO29CQUNuRCxvQ0FBb0M7b0JBQ3BDLHlEQUF5RDtvQkFDekQsS0FBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDN0M7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLENBQUMsSUFBRyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQWQsQ0FBYyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDRSxJQUFHLElBQUksQ0FBQyxHQUFHLEVBQUM7WUFDVixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakI7SUFDSCxDQUFDO0lBRUQsdUNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUcsSUFBSSxDQUFDLEdBQUcsRUFBQztZQUNWLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNqQjtRQUNELDZEQUE2RDtRQUM3RCwrREFBK0Q7UUFFL0QsNENBQTRDO1FBQzVDLGtEQUFrRDtRQUNsRCxxQkFBcUI7UUFDckIsSUFBSTtJQUNOLENBQUM7SUFFRCx1Q0FBVyxHQUFYO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDdkMsSUFBRyxLQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUMsS0FBSSxDQUFDLFFBQVEsRUFBQztnQkFDL0MsS0FBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNsRDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBNUQrQixxQkFBVTtnQkFDZCwyQkFBb0I7O0lBTnZDO1FBQVIsWUFBSyxFQUFFOztrREFBYTtJQUNaO1FBQVIsWUFBSyxFQUFFOztxREFBWTtJQUNYO1FBQVIsWUFBSyxFQUFFOztzREFBb0I7SUFDbkI7UUFBUixZQUFLLEVBQUU7O3VEQUFtQjtJQUpoQixpQkFBaUI7UUFKN0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBQyxFQUFFO1NBQ1osQ0FBQzt5Q0FPZ0MscUJBQVU7WUFDZCwyQkFBb0I7T0FQckMsaUJBQWlCLENBbUU3QjtJQUFELHdCQUFDO0NBQUEsQUFuRUQsSUFtRUM7QUFuRVksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIElucHV0LFxuICAgICAgICAgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7R29vZ2xlTWFwc0FQSVdyYXBwZXJ9IGZyb20gJ0BhZ20vY29yZSc7XG5pbXBvcnQge1dNU1NlcnZpY2V9IGZyb20gJ21hcC13YWxkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd21zLWxheWVyJyxcbiAgdGVtcGxhdGU6JycsXG59KVxuZXhwb3J0IGNsYXNzIFdNU0xheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3l7XG4gIEBJbnB1dCgpIHVybDogc3RyaW5nO1xuICBASW5wdXQoKSBwYXJhbXM6YW55O1xuICBASW5wdXQoKSBvcGFjaXR5Om51bWJlcj0xLjA7XG4gIEBJbnB1dCgpIHBvc2l0aW9uOm51bWJlcj0wO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3dtc1NlcnZpY2U6V01TU2VydmljZSxcbiAgICAgICAgICAgICAgcHVibGljIF93cmFwcGVyOkdvb2dsZU1hcHNBUElXcmFwcGVyKSB7fVxuICBtYXA6IGFueTtcbiAgb3ZlcmxheTphbnk7XG4gIHpvb206IG51bWJlciA9IDQ7XG5cbiAgcHJpdmF0ZSBidWlsZGluZzpib29sZWFuPWZhbHNlO1xuICBidWlsZE1hcCgpe1xuICAgIGlmKHRoaXMuYnVpbGRpbmcpXG4gICAgICByZXR1cm47XG4gICAgdGhpcy5idWlsZGluZz10cnVlO1xuXG4gICAgdGhpcy5fd3JhcHBlci5nZXROYXRpdmVNYXAoKS50aGVuKCh0aGVNYXApPT57XG4gICAgICB0aGlzLmJ1aWxkaW5nPWZhbHNlO1xuICAgICAgdGhpcy5tYXAgPSB0aGVNYXA7XG4gICAgICB0aGlzLm92ZXJsYXkgPSB0aGlzLl93bXNTZXJ2aWNlLmJ1aWxkSW1hZ2VNYXAoXG4gICAgICAgICAgKCk9PnRoaXMubWFwLFxuICAgICAgICAgICh6KT0+dGhpcy51cmwrJz8nLFxuICAgICAgICAgICh6KT0+dGhpcy5wYXJhbXMsXG4gICAgICAgICAgKCk9PnRoaXMub3BhY2l0eVxuICAgICAgICApO1xuXG4gICAgICBpZih0aGlzLm1hcC5vdmVybGF5TWFwVHlwZXMubGVuZ3RoPnRoaXMucG9zaXRpb24pe1xuICAgICAgICB0aGlzLm1hcC5vdmVybGF5TWFwVHlwZXMucmVtb3ZlQXQodGhpcy5wb3NpdGlvbik7XG4gICAgICAgIHRoaXMubWFwLm92ZXJsYXlNYXBUeXBlcy5pbnNlcnRBdCh0aGlzLnBvc2l0aW9uLHRoaXMub3ZlcmxheSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aGlsZSh0aGlzLm1hcC5vdmVybGF5TWFwVHlwZXMubGVuZ3RoPD10aGlzLnBvc2l0aW9uKXtcbiAgICAgICAgICAvLyBUZW1wb3JhcmlseSBhZGQgcmVwbGljYXRlIGxheWVycy5cbiAgICAgICAgICAvLyBUaGVzZcKgc2hvdWxkIGJlIHJlcGxhY2VkIGJ5IG90aGVyIHdtcy1sYXllciBjb21wb25lbnRzXG4gICAgICAgICAgdGhpcy5tYXAub3ZlcmxheU1hcFR5cGVzLnB1c2godGhpcy5vdmVybGF5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLmNhdGNoKChlKT0+Y29uc29sZS5sb2coZSkpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYodGhpcy51cmwpe1xuICAgICAgdGhpcy5idWlsZE1hcCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZih0aGlzLnVybCl7XG4gICAgICB0aGlzLmJ1aWxkTWFwKCk7XG4gICAgfVxuICAgIC8vIGxldCBjdXJyZW50T3BhY2l0eTogbnVtYmVyID0gY2hhbmdlcy5vcGFjaXR5LmN1cnJlbnRWYWx1ZTtcbiAgICAvLyBsZXQgcHJldmlvdXNPcGFjaXR5OiBudW1iZXIgPSBjaGFuZ2VzLm9wYWNpdHkucHJldmlvdXNWYWx1ZTtcblxuICAgIC8vIGlmIChjdXJyZW50T3BhY2l0eSAhPT0gcHJldmlvdXNPcGFjaXR5KSB7XG4gICAgLy8gICBjb25zb2xlLmxvZygnYnVpbGRpbmcgYSBtYXAgb2ZmIG15IG93biBiYXQnKTtcbiAgICAvLyAgIHRoaXMuYnVpbGRNYXAoKTtcbiAgICAvLyB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl93cmFwcGVyLmdldE5hdGl2ZU1hcCgpLnRoZW4oKHRoZU1hcCk9PntcbiAgICAgIGlmKHRoaXMubWFwLm92ZXJsYXlNYXBUeXBlcy5sZW5ndGg+dGhpcy5wb3NpdGlvbil7XG4gICAgICAgIHRoaXMubWFwLm92ZXJsYXlNYXBUeXBlcy5yZW1vdmVBdCh0aGlzLnBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19