"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleBaseMapComponent = void 0;
const core_1 = require("@angular/core");
const layered_map_component_1 = require("../../layered-map/layered-map.component");
const i0 = require("@angular/core");
const i1 = require("@ng-bootstrap/ng-bootstrap");
const i2 = require("@angular/common");
class CycleBaseMapComponent {
    constructor() {
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
    ngAfterViewInit() {
    }
    ngOnChanges(changes) {
        if (this.baseLayers && !this.baseLayer) {
            this.baseLayer = this.baseLayers[0];
        }
    }
    toggleBaseLayer() {
        if (!this.map) {
            return;
        }
        let current = this.baseLayers.findIndex(l => l.map_type_id === this.baseLayer.map_type_id);
        let next = (current + 1) % this.baseLayers.length;
        this.baseLayer = this.baseLayers[next];
        this.map.mapTypeId = this.baseLayer ?
            this.baseLayer.map_type_id :
            null;
    }
}
exports.CycleBaseMapComponent = CycleBaseMapComponent;
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CycleBaseMapComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'cycle-base-map',
                template: `<button class="btn btn-secondary btn-sm" (click)="toggleBaseLayer()" [ngbTooltip]="tooltip"
                     placement="right">
  <i class="fa" [ngClass]="baseLayer?.label==='Road Map'?'fa-road':'fa-globe'"></i>
</button>`, styles: []
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ljbGUtYmFzZS1tYXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtdmlzdWFsLyIsInNvdXJjZXMiOlsiYWN0aW9uLWJ1dHRvbnMvY3ljbGUtYmFzZS1tYXAvY3ljbGUtYmFzZS1tYXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUFpSDtBQUNqSCxtRkFBOEU7Ozs7QUFVOUUsTUFNYSxxQkFBcUI7SUFnQmhDO1FBZFMsWUFBTyxHQUFVLEVBQUUsQ0FBQztRQUNwQixlQUFVLEdBQWU7WUFDaEM7Z0JBQ0UsV0FBVyxFQUFHLFNBQVM7Z0JBQ3ZCLEtBQUssRUFBRyxVQUFVO2FBQ25CO1lBQ0Q7Z0JBQ0UsV0FBVyxFQUFHLFdBQVc7Z0JBQ3pCLEtBQUssRUFBRyxXQUFXO2FBQ3BCO1NBQ0YsQ0FBQTtRQUVRLFlBQU8sR0FBRyxtQkFBbUIsQ0FBQztJQUl2QyxDQUFDO0lBRUQsZUFBZTtJQUVmLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBRyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQztZQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFDO1lBQ1gsT0FBTztTQUNSO1FBRUQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBLEVBQUUsQ0FBQSxDQUFDLENBQUMsV0FBVyxLQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkYsSUFBSSxJQUFJLEdBQUcsQ0FBQyxPQUFPLEdBQUMsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNULElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFBLENBQUM7WUFDM0IsSUFBSSxDQUFDO0lBQ25DLENBQUM7O0FBaERILHNEQWlEQzswRkEzQ1kscUJBQXFCOzBEQUFyQixxQkFBcUI7UUFKckIsaUNBRVg7UUFGb0Qsa0dBQVMscUJBQWlCLElBQUM7UUFFL0UsdUJBQWlGO1FBQ25GLGlCQUFTOztRQUh5RSx3Q0FBc0I7UUFFeEYsZUFBOEQ7UUFBOUQsc0hBQThEOztrREFFakUscUJBQXFCO2NBTmpDLGdCQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7VUFHRixFQUFDLE1BQU0sRUFBRSxFQUFFO2FBQUM7c0NBRVgsR0FBRztrQkFBWCxZQUFLO1lBQ0csT0FBTztrQkFBZixZQUFLO1lBQ0csVUFBVTtrQkFBbEIsWUFBSztZQVVHLFNBQVM7a0JBQWpCLFlBQUs7WUFDRyxPQUFPO2tCQUFmLFlBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF5ZXJlZE1hcENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2xheWVyZWQtbWFwL2xheWVyZWQtbWFwLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFzZUxheWVyIHtcbiAgbWFwX3R5cGVfaWQ6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbn1cblxuZGVjbGFyZSB2YXIgUGxvdGx5OiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N5Y2xlLWJhc2UtbWFwJyxcbiAgdGVtcGxhdGU6IGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCIgKGNsaWNrKT1cInRvZ2dsZUJhc2VMYXllcigpXCIgW25nYlRvb2x0aXBdPVwidG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiPlxuICA8aSBjbGFzcz1cImZhXCIgW25nQ2xhc3NdPVwiYmFzZUxheWVyPy5sYWJlbD09PSdSb2FkIE1hcCc/J2ZhLXJvYWQnOidmYS1nbG9iZSdcIj48L2k+XG48L2J1dHRvbj5gLHN0eWxlczogW119KVxuZXhwb3J0IGNsYXNzIEN5Y2xlQmFzZU1hcENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyAge1xuICBASW5wdXQoKSBtYXA6TGF5ZXJlZE1hcENvbXBvbmVudDtcbiAgQElucHV0KCkgbWF4Wm9vbTpudW1iZXIgPSAzMjtcbiAgQElucHV0KCkgYmFzZUxheWVyczpCYXNlTGF5ZXJbXSA9IFtcbiAgICB7XG4gICAgICBtYXBfdHlwZV9pZCA6ICdyb2FkbWFwJyxcbiAgICAgIGxhYmVsIDogJ1JvYWQgTWFwJ1xuICAgIH0sXG4gICAge1xuICAgICAgbWFwX3R5cGVfaWQgOiAnc2F0ZWxsaXRlJyxcbiAgICAgIGxhYmVsIDogJ1NhdGVsbGl0ZSdcbiAgICB9XG4gIF1cbiAgQElucHV0KCkgYmFzZUxheWVyOkJhc2VMYXllcjtcbiAgQElucHV0KCkgdG9vbHRpcCA9ICdUb2dnbGUgYmFzZSBsYXllcic7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG5cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZih0aGlzLmJhc2VMYXllcnMgJiYgIXRoaXMuYmFzZUxheWVyKXtcbiAgICAgIHRoaXMuYmFzZUxheWVyID0gdGhpcy5iYXNlTGF5ZXJzWzBdO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUJhc2VMYXllcigpe1xuICAgIGlmKCF0aGlzLm1hcCl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmJhc2VMYXllcnMuZmluZEluZGV4KGw9PmwubWFwX3R5cGVfaWQ9PT10aGlzLmJhc2VMYXllci5tYXBfdHlwZV9pZCk7XG4gICAgbGV0IG5leHQgPSAoY3VycmVudCsxKSV0aGlzLmJhc2VMYXllcnMubGVuZ3RoO1xuICAgIHRoaXMuYmFzZUxheWVyID0gdGhpcy5iYXNlTGF5ZXJzW25leHRdO1xuXG4gICAgdGhpcy5tYXAubWFwVHlwZUlkID0gdGhpcy5iYXNlTGF5ZXIgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2VMYXllci5tYXBfdHlwZV9pZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgfVxufVxuIl19