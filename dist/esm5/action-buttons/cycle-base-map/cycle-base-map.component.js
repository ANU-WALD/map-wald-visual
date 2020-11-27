"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleBaseMapComponent = void 0;
var core_1 = require("@angular/core");
var layered_map_component_1 = require("../../layered-map/layered-map.component");
var i0 = require("@angular/core");
var i1 = require("@ng-bootstrap/ng-bootstrap");
var i2 = require("@angular/common");
var CycleBaseMapComponent = /** @class */ (function () {
    function CycleBaseMapComponent() {
        this.maxZoom = 32;
        this.baseLayers = [
            {
                map_type_id: 'roadmap',
                label: 'Road Map'
            },
            {
                map_type_id: 'satellite',
                label: 'Satellite'
            }
        ];
        this.tooltip = 'Toggle base layer';
    }
    CycleBaseMapComponent.prototype.ngAfterViewInit = function () {
    };
    CycleBaseMapComponent.prototype.ngOnChanges = function (changes) {
        if (this.baseLayers && !this.baseLayer) {
            this.baseLayer = this.baseLayers[0];
        }
    };
    CycleBaseMapComponent.prototype.toggleBaseLayer = function () {
        var _this = this;
        if (!this.map) {
            return;
        }
        var current = this.baseLayers.findIndex(function (l) { return l.map_type_id === _this.baseLayer.map_type_id; });
        var next = (current + 1) % this.baseLayers.length;
        this.baseLayer = this.baseLayers[next];
        this.map.mapTypeId = this.baseLayer ?
            this.baseLayer.map_type_id :
            null;
    };
    CycleBaseMapComponent.ɵfac = function CycleBaseMapComponent_Factory(t) { return new (t || CycleBaseMapComponent)(); };
    CycleBaseMapComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CycleBaseMapComponent, selectors: [["cycle-base-map"]], inputs: { map: "map", maxZoom: "maxZoom", baseLayers: "baseLayers", baseLayer: "baseLayer", tooltip: "tooltip" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [["placement", "right", 1, "btn", "btn-secondary", "btn-sm", 3, "ngbTooltip", "click"], [1, "fa", 3, "ngClass"]], template: function CycleBaseMapComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function CycleBaseMapComponent_Template_button_click_0_listener() { return ctx.toggleBaseLayer(); });
            i0.ɵɵelement(1, "i", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngbTooltip", ctx.tooltip);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", (ctx.baseLayer == null ? null : ctx.baseLayer.label) === "Road Map" ? "fa-road" : "fa-globe");
        } }, directives: [i1.NgbTooltip, i2.NgClass], encapsulation: 2 });
    return CycleBaseMapComponent;
}());
exports.CycleBaseMapComponent = CycleBaseMapComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CycleBaseMapComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'cycle-base-map',
                template: "<button class=\"btn btn-secondary btn-sm\" (click)=\"toggleBaseLayer()\" [ngbTooltip]=\"tooltip\"\n                     placement=\"right\">\n  <i class=\"fa\" [ngClass]=\"baseLayer?.label==='Road Map'?'fa-road':'fa-globe'\"></i>\n</button>",
                styles: []
            }]
    }], function () { return []; }, { map: [{
            type: core_1.Input
        }], maxZoom: [{
            type: core_1.Input
        }], baseLayers: [{
            type: core_1.Input
        }], baseLayer: [{
            type: core_1.Input
        }], tooltip: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ljbGUtYmFzZS1tYXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtdmlzdWFsLyIsInNvdXJjZXMiOlsiYWN0aW9uLWJ1dHRvbnMvY3ljbGUtYmFzZS1tYXAvY3ljbGUtYmFzZS1tYXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUFpSDtBQUNqSCxpRkFBOEU7Ozs7QUFVOUU7SUFzQkU7UUFkUyxZQUFPLEdBQVUsRUFBRSxDQUFDO1FBQ3BCLGVBQVUsR0FBZTtZQUNoQztnQkFDRSxXQUFXLEVBQUcsU0FBUztnQkFDdkIsS0FBSyxFQUFHLFVBQVU7YUFDbkI7WUFDRDtnQkFDRSxXQUFXLEVBQUcsV0FBVztnQkFDekIsS0FBSyxFQUFHLFdBQVc7YUFDcEI7U0FDRixDQUFBO1FBRVEsWUFBTyxHQUFHLG1CQUFtQixDQUFDO0lBSXZDLENBQUM7SUFFRCwrQ0FBZSxHQUFmO0lBRUEsQ0FBQztJQUVELDJDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFHLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDO1lBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7SUFFRCwrQ0FBZSxHQUFmO1FBQUEsaUJBWUM7UUFYQyxJQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQztZQUNYLE9BQU87U0FDUjtRQUVELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFFLE9BQUEsQ0FBQyxDQUFDLFdBQVcsS0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBMUMsQ0FBMEMsQ0FBQyxDQUFDO1FBQ3ZGLElBQUksSUFBSSxHQUFHLENBQUMsT0FBTyxHQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV2QyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQSxDQUFDO1lBQzNCLElBQUksQ0FBQztJQUNuQyxDQUFDOzhGQTFDVSxxQkFBcUI7OERBQXJCLHFCQUFxQjtZQUpyQixpQ0FFWDtZQUZvRCxrR0FBUyxxQkFBaUIsSUFBQztZQUUvRSx1QkFBaUY7WUFDbkYsaUJBQVM7O1lBSHlFLHdDQUFzQjtZQUV4RixlQUE4RDtZQUE5RCxzSEFBOEQ7O2dDQWY5RTtDQTREQyxBQWpERCxJQWlEQztBQTNDWSxzREFBcUI7a0RBQXJCLHFCQUFxQjtjQU5qQyxnQkFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSxrUEFHRjtnQkFBQyxNQUFNLEVBQUUsRUFBRTthQUFDO3NDQUVYLEdBQUc7a0JBQVgsWUFBSztZQUNHLE9BQU87a0JBQWYsWUFBSztZQUNHLFVBQVU7a0JBQWxCLFlBQUs7WUFVRyxTQUFTO2tCQUFqQixZQUFLO1lBQ0csT0FBTztrQkFBZixZQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExheWVyZWRNYXBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9sYXllcmVkLW1hcC9sYXllcmVkLW1hcC5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VMYXllciB7XG4gIG1hcF90eXBlX2lkOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG59XG5cbmRlY2xhcmUgdmFyIFBsb3RseTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeWNsZS1iYXNlLW1hcCcsXG4gIHRlbXBsYXRlOiBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiIChjbGljayk9XCJ0b2dnbGVCYXNlTGF5ZXIoKVwiIFtuZ2JUb29sdGlwXT1cInRvb2x0aXBcIlxuICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIj5cbiAgPGkgY2xhc3M9XCJmYVwiIFtuZ0NsYXNzXT1cImJhc2VMYXllcj8ubGFiZWw9PT0nUm9hZCBNYXAnPydmYS1yb2FkJzonZmEtZ2xvYmUnXCI+PC9pPlxuPC9idXR0b24+YCxzdHlsZXM6IFtdfSlcbmV4cG9ydCBjbGFzcyBDeWNsZUJhc2VNYXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMgIHtcbiAgQElucHV0KCkgbWFwOkxheWVyZWRNYXBDb21wb25lbnQ7XG4gIEBJbnB1dCgpIG1heFpvb206bnVtYmVyID0gMzI7XG4gIEBJbnB1dCgpIGJhc2VMYXllcnM6QmFzZUxheWVyW10gPSBbXG4gICAge1xuICAgICAgbWFwX3R5cGVfaWQgOiAncm9hZG1hcCcsXG4gICAgICBsYWJlbCA6ICdSb2FkIE1hcCdcbiAgICB9LFxuICAgIHtcbiAgICAgIG1hcF90eXBlX2lkIDogJ3NhdGVsbGl0ZScsXG4gICAgICBsYWJlbCA6ICdTYXRlbGxpdGUnXG4gICAgfVxuICBdXG4gIEBJbnB1dCgpIGJhc2VMYXllcjpCYXNlTGF5ZXI7XG4gIEBJbnB1dCgpIHRvb2x0aXAgPSAnVG9nZ2xlIGJhc2UgbGF5ZXInO1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuXG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYodGhpcy5iYXNlTGF5ZXJzICYmICF0aGlzLmJhc2VMYXllcil7XG4gICAgICB0aGlzLmJhc2VMYXllciA9IHRoaXMuYmFzZUxheWVyc1swXTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVCYXNlTGF5ZXIoKXtcbiAgICBpZighdGhpcy5tYXApe1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBjdXJyZW50ID0gdGhpcy5iYXNlTGF5ZXJzLmZpbmRJbmRleChsPT5sLm1hcF90eXBlX2lkPT09dGhpcy5iYXNlTGF5ZXIubWFwX3R5cGVfaWQpO1xuICAgIGxldCBuZXh0ID0gKGN1cnJlbnQrMSkldGhpcy5iYXNlTGF5ZXJzLmxlbmd0aDtcbiAgICB0aGlzLmJhc2VMYXllciA9IHRoaXMuYmFzZUxheWVyc1tuZXh0XTtcblxuICAgIHRoaXMubWFwLm1hcFR5cGVJZCA9IHRoaXMuYmFzZUxheWVyID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlTGF5ZXIubWFwX3R5cGVfaWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG4gIH1cbn1cbiJdfQ==