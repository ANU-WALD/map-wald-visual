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
let ZoomOutComponent = class ZoomOutComponent {
    constructor() {
        this.minZoom = 1;
    }
    ngAfterViewInit() {
    }
    zoomOut() {
        if (!this.map) {
            return;
        }
        this.map.zoom = Math.max(this.minZoom, this.map.zoom - 1);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", layered_map_component_1.LayeredMapComponent)
], ZoomOutComponent.prototype, "map", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ZoomOutComponent.prototype, "minZoom", void 0);
ZoomOutComponent = __decorate([
    core_1.Component({
        selector: 'zoom-out',
        template: `<button class="btn btn-secondary btn-sm"
        ngbTooltip="Zoom out"
        placement="right"
        (click)="zoomOut()"
><i class="fa fa-minus"></i></button>`
    }),
    __metadata("design:paramtypes", [])
], ZoomOutComponent);
exports.ZoomOutComponent = ZoomOutComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS1vdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtdmlzdWFsLyIsInNvdXJjZXMiOlsiYWN0aW9uLWJ1dHRvbnMvem9vbS1vdXQvem9vbS1vdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQXVGO0FBQ3ZGLG1GQUE4RTtBQVk5RSxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQUczQjtRQURTLFlBQU8sR0FBVSxDQUFDLENBQUM7SUFHNUIsQ0FBQztJQUVELGVBQWU7SUFFZixDQUFDO0lBRUQsT0FBTztRQUNMLElBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFDO1lBQ1gsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7Q0FDRixDQUFBO0FBaEJVO0lBQVIsWUFBSyxFQUFFOzhCQUFLLDJDQUFtQjs2Q0FBQztBQUN4QjtJQUFSLFlBQUssRUFBRTs7aURBQW9CO0FBRmpCLGdCQUFnQjtJQVA1QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFOzs7O3NDQUkwQjtLQUFZLENBQUM7O0dBQ3RDLGdCQUFnQixDQWlCNUI7QUFqQlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXllcmVkTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vbGF5ZXJlZC1tYXAvbGF5ZXJlZC1tYXAuY29tcG9uZW50JztcblxuXG5kZWNsYXJlIHZhciBQbG90bHk6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnem9vbS1vdXQnLFxuICB0ZW1wbGF0ZTogYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc21cIlxuICAgICAgICBuZ2JUb29sdGlwPVwiWm9vbSBvdXRcIlxuICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgIChjbGljayk9XCJ6b29tT3V0KClcIlxuPjxpIGNsYXNzPVwiZmEgZmEtbWludXNcIj48L2k+PC9idXR0b24+YCxzdHlsZXM6IFtdfSlcbmV4cG9ydCBjbGFzcyBab29tT3V0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCAge1xuICBASW5wdXQoKSBtYXA6TGF5ZXJlZE1hcENvbXBvbmVudDtcbiAgQElucHV0KCkgbWluWm9vbTpudW1iZXIgPSAxO1xuICBjb25zdHJ1Y3Rvcigpe1xuXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcblxuICB9XG5cbiAgem9vbU91dCgpe1xuICAgIGlmKCF0aGlzLm1hcCl7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubWFwLnpvb20gPSBNYXRoLm1heCh0aGlzLm1pblpvb20sIHRoaXMubWFwLnpvb20gLSAxKTtcbiAgfVxufVxuIl19