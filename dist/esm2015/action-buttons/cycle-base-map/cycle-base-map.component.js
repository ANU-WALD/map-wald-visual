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
const layered_map_component_1 = require("../../layered-map/layered-map.component");
let CycleBaseMapComponent = class CycleBaseMapComponent {
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
};
__decorate([
    core_1.Input(),
    __metadata("design:type", layered_map_component_1.LayeredMapComponent)
], CycleBaseMapComponent.prototype, "map", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CycleBaseMapComponent.prototype, "maxZoom", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], CycleBaseMapComponent.prototype, "baseLayers", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CycleBaseMapComponent.prototype, "baseLayer", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CycleBaseMapComponent.prototype, "tooltip", void 0);
CycleBaseMapComponent = __decorate([
    core_1.Component({
        selector: 'cycle-base-map',
        template: `<button class="btn btn-secondary btn-sm" (click)="toggleBaseLayer()" [ngbTooltip]="tooltip"
                     placement="right">
  <i class="fa" [ngClass]="baseLayer?.label==='Road Map'?'fa-road':'fa-globe'"></i>
</button>`
    }),
    __metadata("design:paramtypes", [])
], CycleBaseMapComponent);
exports.CycleBaseMapComponent = CycleBaseMapComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ljbGUtYmFzZS1tYXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtdmlzdWFsLyIsInNvdXJjZXMiOlsiYWN0aW9uLWJ1dHRvbnMvY3ljbGUtYmFzZS1tYXAvY3ljbGUtYmFzZS1tYXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQWlIO0FBQ2pILG1GQUE4RTtBQWdCOUUsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUFnQmhDO1FBZFMsWUFBTyxHQUFVLEVBQUUsQ0FBQztRQUNwQixlQUFVLEdBQWU7WUFDaEM7Z0JBQ0UsV0FBVyxFQUFHLFNBQVM7Z0JBQ3ZCLEtBQUssRUFBRyxVQUFVO2FBQ25CO1lBQ0Q7Z0JBQ0UsV0FBVyxFQUFHLFdBQVc7Z0JBQ3pCLEtBQUssRUFBRyxXQUFXO2FBQ3BCO1NBQ0YsQ0FBQTtRQUVRLFlBQU8sR0FBRyxtQkFBbUIsQ0FBQztJQUl2QyxDQUFDO0lBRUQsZUFBZTtJQUVmLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBRyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQztZQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFDO1lBQ1gsT0FBTztTQUNSO1FBRUQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBLEVBQUUsQ0FBQSxDQUFDLENBQUMsV0FBVyxLQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkYsSUFBSSxJQUFJLEdBQUcsQ0FBQyxPQUFPLEdBQUMsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNULElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFBLENBQUM7WUFDM0IsSUFBSSxDQUFDO0lBQ25DLENBQUM7Q0FDRixDQUFBO0FBMUNVO0lBQVIsWUFBSyxFQUFFOzhCQUFLLDJDQUFtQjtrREFBQztBQUN4QjtJQUFSLFlBQUssRUFBRTs7c0RBQXFCO0FBQ3BCO0lBQVIsWUFBSyxFQUFFOzt5REFTUDtBQUNRO0lBQVIsWUFBSyxFQUFFOzt3REFBcUI7QUFDcEI7SUFBUixZQUFLLEVBQUU7O3NEQUErQjtBQWQ1QixxQkFBcUI7SUFOakMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsUUFBUSxFQUFFOzs7VUFHRjtLQUFZLENBQUM7O0dBQ1YscUJBQXFCLENBMkNqQztBQTNDWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF5ZXJlZE1hcENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2xheWVyZWQtbWFwL2xheWVyZWQtbWFwLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFzZUxheWVyIHtcbiAgbWFwX3R5cGVfaWQ6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbn1cblxuZGVjbGFyZSB2YXIgUGxvdGx5OiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N5Y2xlLWJhc2UtbWFwJyxcbiAgdGVtcGxhdGU6IGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCIgKGNsaWNrKT1cInRvZ2dsZUJhc2VMYXllcigpXCIgW25nYlRvb2x0aXBdPVwidG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiPlxuICA8aSBjbGFzcz1cImZhXCIgW25nQ2xhc3NdPVwiYmFzZUxheWVyPy5sYWJlbD09PSdSb2FkIE1hcCc/J2ZhLXJvYWQnOidmYS1nbG9iZSdcIj48L2k+XG48L2J1dHRvbj5gLHN0eWxlczogW119KVxuZXhwb3J0IGNsYXNzIEN5Y2xlQmFzZU1hcENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyAge1xuICBASW5wdXQoKSBtYXA6TGF5ZXJlZE1hcENvbXBvbmVudDtcbiAgQElucHV0KCkgbWF4Wm9vbTpudW1iZXIgPSAzMjtcbiAgQElucHV0KCkgYmFzZUxheWVyczpCYXNlTGF5ZXJbXSA9IFtcbiAgICB7XG4gICAgICBtYXBfdHlwZV9pZCA6ICdyb2FkbWFwJyxcbiAgICAgIGxhYmVsIDogJ1JvYWQgTWFwJ1xuICAgIH0sXG4gICAge1xuICAgICAgbWFwX3R5cGVfaWQgOiAnc2F0ZWxsaXRlJyxcbiAgICAgIGxhYmVsIDogJ1NhdGVsbGl0ZSdcbiAgICB9XG4gIF1cbiAgQElucHV0KCkgYmFzZUxheWVyOkJhc2VMYXllcjtcbiAgQElucHV0KCkgdG9vbHRpcCA9ICdUb2dnbGUgYmFzZSBsYXllcic7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG5cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZih0aGlzLmJhc2VMYXllcnMgJiYgIXRoaXMuYmFzZUxheWVyKXtcbiAgICAgIHRoaXMuYmFzZUxheWVyID0gdGhpcy5iYXNlTGF5ZXJzWzBdO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUJhc2VMYXllcigpe1xuICAgIGlmKCF0aGlzLm1hcCl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmJhc2VMYXllcnMuZmluZEluZGV4KGw9PmwubWFwX3R5cGVfaWQ9PT10aGlzLmJhc2VMYXllci5tYXBfdHlwZV9pZCk7XG4gICAgbGV0IG5leHQgPSAoY3VycmVudCsxKSV0aGlzLmJhc2VMYXllcnMubGVuZ3RoO1xuICAgIHRoaXMuYmFzZUxheWVyID0gdGhpcy5iYXNlTGF5ZXJzW25leHRdO1xuXG4gICAgdGhpcy5tYXAubWFwVHlwZUlkID0gdGhpcy5iYXNlTGF5ZXIgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2VMYXllci5tYXBfdHlwZV9pZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgfVxufVxuIl19