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
var layered_map_component_1 = require("../../layered-map/layered-map.component");
var ZoomOutComponent = /** @class */ (function () {
    function ZoomOutComponent() {
        this.minZoom = 1;
    }
    ZoomOutComponent.prototype.ngAfterViewInit = function () {
    };
    ZoomOutComponent.prototype.zoomOut = function () {
        if (!this.map) {
            return;
        }
        this.map.zoom = Math.max(this.minZoom, this.map.zoom - 1);
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
            template: "<button class=\"btn btn-secondary btn-sm\"\n        ngbTooltip=\"Zoom out\"\n        placement=\"right\"\n        (click)=\"zoomOut()\"\n><i class=\"fa fa-minus\"></i></button>"
        }),
        __metadata("design:paramtypes", [])
    ], ZoomOutComponent);
    return ZoomOutComponent;
}());
exports.ZoomOutComponent = ZoomOutComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS1vdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtdmlzdWFsLyIsInNvdXJjZXMiOlsiYWN0aW9uLWJ1dHRvbnMvem9vbS1vdXQvem9vbS1vdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXVGO0FBQ3ZGLGlGQUE4RTtBQVk5RTtJQUdFO1FBRFMsWUFBTyxHQUFVLENBQUMsQ0FBQztJQUc1QixDQUFDO0lBRUQsMENBQWUsR0FBZjtJQUVBLENBQUM7SUFFRCxrQ0FBTyxHQUFQO1FBQ0UsSUFBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUM7WUFDWCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQWZRO1FBQVIsWUFBSyxFQUFFO2tDQUFLLDJDQUFtQjtpREFBQztJQUN4QjtRQUFSLFlBQUssRUFBRTs7cURBQW9CO0lBRmpCLGdCQUFnQjtRQVA1QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLGtMQUkwQjtTQUFZLENBQUM7O09BQ3RDLGdCQUFnQixDQWlCNUI7SUFBRCx1QkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF5ZXJlZE1hcENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2xheWVyZWQtbWFwL2xheWVyZWQtbWFwLmNvbXBvbmVudCc7XG5cblxuZGVjbGFyZSB2YXIgUGxvdGx5OiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3pvb20tb3V0JyxcbiAgdGVtcGxhdGU6IGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCJcbiAgICAgICAgbmdiVG9vbHRpcD1cIlpvb20gb3V0XCJcbiAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxuICAgICAgICAoY2xpY2spPVwiem9vbU91dCgpXCJcbj48aSBjbGFzcz1cImZhIGZhLW1pbnVzXCI+PC9pPjwvYnV0dG9uPmAsc3R5bGVzOiBbXX0pXG5leHBvcnQgY2xhc3MgWm9vbU91dENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQgIHtcbiAgQElucHV0KCkgbWFwOkxheWVyZWRNYXBDb21wb25lbnQ7XG4gIEBJbnB1dCgpIG1pblpvb206bnVtYmVyID0gMTtcbiAgY29uc3RydWN0b3IoKXtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG5cbiAgfVxuXG4gIHpvb21PdXQoKXtcbiAgICBpZighdGhpcy5tYXApe1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm1hcC56b29tID0gTWF0aC5tYXgodGhpcy5taW5ab29tLCB0aGlzLm1hcC56b29tIC0gMSk7XG4gIH1cbn1cbiJdfQ==