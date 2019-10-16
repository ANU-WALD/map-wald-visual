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
let ZoomInComponent = class ZoomInComponent {
    constructor() {
        this.maxZoom = 32;
    }
    ngAfterViewInit() {
    }
    zoomIn() {
        if (!this.map) {
            return;
        }
        this.map.zoom = Math.min(this.maxZoom, this.map.zoom + 1);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", layered_map_component_1.LayeredMapComponent)
], ZoomInComponent.prototype, "map", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ZoomInComponent.prototype, "maxZoom", void 0);
ZoomInComponent = __decorate([
    core_1.Component({
        selector: 'zoom-in',
        template: `<button class="btn btn-secondary btn-sm"
        ngbTooltip="Zoom in"
        placement="right"
        (click)="zoomIn()"
><i class="fa fa-plus"></i></button>`
    }),
    __metadata("design:paramtypes", [])
], ZoomInComponent);
exports.ZoomInComponent = ZoomInComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS1pbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJhY3Rpb24tYnV0dG9ucy96b29tLWluL3pvb20taW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQXVGO0FBQ3ZGLG1GQUE4RTtBQVk5RSxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBSTFCO1FBRlMsWUFBTyxHQUFVLEVBQUUsQ0FBQztJQUk3QixDQUFDO0lBRUQsZUFBZTtJQUVmLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUM7WUFDWCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztDQUNGLENBQUE7QUFqQlU7SUFBUixZQUFLLEVBQUU7OEJBQUssMkNBQW1COzRDQUFDO0FBQ3hCO0lBQVIsWUFBSyxFQUFFOztnREFBcUI7QUFGbEIsZUFBZTtJQVAzQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFNBQVM7UUFDbkIsUUFBUSxFQUFFOzs7O3FDQUl5QjtLQUFZLENBQUM7O0dBQ3JDLGVBQWUsQ0FrQjNCO0FBbEJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXllcmVkTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vbGF5ZXJlZC1tYXAvbGF5ZXJlZC1tYXAuY29tcG9uZW50JztcblxuXG5kZWNsYXJlIHZhciBQbG90bHk6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnem9vbS1pbicsXG4gIHRlbXBsYXRlOiBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiXG4gICAgICAgIG5nYlRvb2x0aXA9XCJab29tIGluXCJcbiAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxuICAgICAgICAoY2xpY2spPVwiem9vbUluKClcIlxuPjxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT48L2J1dHRvbj5gLHN0eWxlczogW119KVxuZXhwb3J0IGNsYXNzIFpvb21JbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQgIHtcbiAgQElucHV0KCkgbWFwOkxheWVyZWRNYXBDb21wb25lbnQ7XG4gIEBJbnB1dCgpIG1heFpvb206bnVtYmVyID0gMzI7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG5cbiAgfVxuXG4gIHpvb21Jbigpe1xuICAgIGlmKCF0aGlzLm1hcCl7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubWFwLnpvb20gPSBNYXRoLm1pbih0aGlzLm1heFpvb20sdGhpcy5tYXAuem9vbSsxKTtcbiAgfVxufVxuIl19