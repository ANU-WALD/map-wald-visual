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
let ButtonBarComponent = class ButtonBarComponent {
    constructor() {
    }
    ngAfterViewInit() {
    }
};
ButtonBarComponent = __decorate([
    core_1.Component({
        selector: 'button-bar',
        template: `<div class="button-bar bb-vertical">
  <ng-content></ng-content>
</div>

`,
        styles: [`
`]
    }),
    __metadata("design:paramtypes", [])
], ButtonBarComponent);
exports.ButtonBarComponent = ButtonBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJidXR0b24tYmFyL2J1dHRvbi1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQXVGO0FBYXZGLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBRTdCO0lBRUEsQ0FBQztJQUVELGVBQWU7SUFFZixDQUFDO0NBQ0YsQ0FBQTtBQVRZLGtCQUFrQjtJQVI5QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFlBQVk7UUFDdEIsUUFBUSxFQUFFOzs7O0NBSVg7aUJBQVU7Q0FDVjtLQUFFLENBQUM7O0dBQ1Msa0JBQWtCLENBUzlCO0FBVFksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuZGVjbGFyZSB2YXIgUGxvdGx5OiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2J1dHRvbi1iYXInLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJidXR0b24tYmFyIGJiLXZlcnRpY2FsXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuXG5gLHN0eWxlczogW2BcbmBdfSlcbmV4cG9ydCBjbGFzcyBCdXR0b25CYXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0ICB7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG5cbiAgfVxufSJdfQ==