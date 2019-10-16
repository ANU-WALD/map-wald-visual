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
let ZoomFullComponent = class ZoomFullComponent {
    constructor() {
    }
    ngAfterViewInit() {
    }
    zoomToBounds() {
        this.map.zoomToBounds(Object.assign({}, this.bounds));
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", layered_map_component_1.LayeredMapComponent)
], ZoomFullComponent.prototype, "map", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ZoomFullComponent.prototype, "bounds", void 0);
ZoomFullComponent = __decorate([
    core_1.Component({
        selector: 'zoom-full',
        template: `<button class="btn btn-secondary btn-sm"
        ngbTooltip="Zoom to full extent"
        placement="right"
        (click)="zoomToBounds()"
><i class="fa fa-arrows-alt"></i></button>
`
    }),
    __metadata("design:paramtypes", [])
], ZoomFullComponent);
exports.ZoomFullComponent = ZoomFullComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS1mdWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLXZpc3VhbC8iLCJzb3VyY2VzIjpbImFjdGlvbi1idXR0b25zL3pvb20tZnVsbC96b29tLWZ1bGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQXVGO0FBQ3ZGLG1GQUE4RTtBQWM5RSxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQUk1QjtJQUVBLENBQUM7SUFFRCxlQUFlO0lBRWYsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0NBQ0YsQ0FBQTtBQWRVO0lBQVIsWUFBSyxFQUFFOzhCQUFLLDJDQUFtQjs4Q0FBQztBQUN4QjtJQUFSLFlBQUssRUFBRTs7aURBQWU7QUFGWixpQkFBaUI7SUFSN0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFFBQVEsRUFBRTs7Ozs7Q0FLWDtLQUFZLENBQUM7O0dBQ0QsaUJBQWlCLENBZTdCO0FBZlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXllcmVkTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vbGF5ZXJlZC1tYXAvbGF5ZXJlZC1tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IEJvdW5kcyB9IGZyb20gJ21hcC13YWxkJztcblxuXG5kZWNsYXJlIHZhciBQbG90bHk6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnem9vbS1mdWxsJyxcbiAgdGVtcGxhdGU6IGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCJcbiAgICAgICAgbmdiVG9vbHRpcD1cIlpvb20gdG8gZnVsbCBleHRlbnRcIlxuICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgIChjbGljayk9XCJ6b29tVG9Cb3VuZHMoKVwiXG4+PGkgY2xhc3M9XCJmYSBmYS1hcnJvd3MtYWx0XCI+PC9pPjwvYnV0dG9uPlxuYCxzdHlsZXM6IFtdfSlcbmV4cG9ydCBjbGFzcyBab29tRnVsbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQgIHtcbiAgQElucHV0KCkgbWFwOkxheWVyZWRNYXBDb21wb25lbnQ7XG4gIEBJbnB1dCgpIGJvdW5kczpCb3VuZHM7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG5cbiAgfVxuXG4gIHpvb21Ub0JvdW5kcygpe1xuICAgIHRoaXMubWFwLnpvb21Ub0JvdW5kcyhPYmplY3QuYXNzaWduKHt9LHRoaXMuYm91bmRzKSk7XG4gIH1cbn1cbiJdfQ==