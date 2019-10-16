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
let CollapsibleMapControlComponent = class CollapsibleMapControlComponent {
    constructor() {
    }
    ngAfterViewInit() {
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CollapsibleMapControlComponent.prototype, "isCollapsed", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CollapsibleMapControlComponent.prototype, "heading", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CollapsibleMapControlComponent.prototype, "direction", void 0);
CollapsibleMapControlComponent = __decorate([
    core_1.Component({
        selector: 'collapsible-map-control',
        template: `<div class="card map-control collapsible-control">
    <a (click)="isCollapsed = !isCollapsed">
      <div class="card-header">
        <h6 class="mb-0">
          {{heading}}
          <span *ngIf="isCollapsed" class="float-right fa fa-caret-up
            collapse-arrow" aria-hidden="true"></span>
          <span *ngIf="!isCollapsed" class="float-right fa fa-caret-down
            collapse-arrow" aria-hidden="true"></span>
        </h6>
      </div>
    </a>

    <div class="ngbCollapse" [ngbCollapse]="isCollapsed">
      <ng-content></ng-content>
    </div>
  </div>
`,
        styles: [`.collapsible-control{
  margin:3px;
}`]
    }),
    __metadata("design:paramtypes", [])
], CollapsibleMapControlComponent);
exports.CollapsibleMapControlComponent = CollapsibleMapControlComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2libGUtbWFwLWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtdmlzdWFsLyIsInNvdXJjZXMiOlsiY29sbGFwc2libGUtbWFwLWNvbnRyb2wvY29sbGFwc2libGUtbWFwLWNvbnRyb2wuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQXVGO0FBMkJ2RixJQUFhLDhCQUE4QixHQUEzQyxNQUFhLDhCQUE4QjtJQUt6QztJQUVBLENBQUM7SUFFRCxlQUFlO0lBRWYsQ0FBQztDQUNGLENBQUE7QUFYVTtJQUFSLFlBQUssRUFBRTs7bUVBQXNCO0FBQ3JCO0lBQVIsWUFBSyxFQUFFOzsrREFBaUI7QUFDaEI7SUFBUixZQUFLLEVBQUU7O2lFQUFtQjtBQUhoQiw4QkFBOEI7SUF0QjFDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUseUJBQXlCO1FBQ25DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FpQlg7aUJBQVU7O0VBRVQ7S0FBRSxDQUFDOztHQUNRLDhCQUE4QixDQVkxQztBQVpZLHdFQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbmRlY2xhcmUgdmFyIFBsb3RseTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb2xsYXBzaWJsZS1tYXAtY29udHJvbCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImNhcmQgbWFwLWNvbnRyb2wgY29sbGFwc2libGUtY29udHJvbFwiPlxuICAgIDxhIChjbGljayk9XCJpc0NvbGxhcHNlZCA9ICFpc0NvbGxhcHNlZFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgIDxoNiBjbGFzcz1cIm1iLTBcIj5cbiAgICAgICAgICB7e2hlYWRpbmd9fVxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaXNDb2xsYXBzZWRcIiBjbGFzcz1cImZsb2F0LXJpZ2h0IGZhIGZhLWNhcmV0LXVwXG4gICAgICAgICAgICBjb2xsYXBzZS1hcnJvd1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFpc0NvbGxhcHNlZFwiIGNsYXNzPVwiZmxvYXQtcmlnaHQgZmEgZmEtY2FyZXQtZG93blxuICAgICAgICAgICAgY29sbGFwc2UtYXJyb3dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgIDwvaDY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2E+XG5cbiAgICA8ZGl2IGNsYXNzPVwibmdiQ29sbGFwc2VcIiBbbmdiQ29sbGFwc2VdPVwiaXNDb2xsYXBzZWRcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5gLHN0eWxlczogW2AuY29sbGFwc2libGUtY29udHJvbHtcbiAgbWFyZ2luOjNweDtcbn1gXX0pXG5leHBvcnQgY2xhc3MgQ29sbGFwc2libGVNYXBDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCAge1xuICBASW5wdXQoKSBpc0NvbGxhcHNlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgaGVhZGluZzogc3RyaW5nO1xuICBASW5wdXQoKSBkaXJlY3Rpb246IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcigpe1xuXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcblxuICB9XG59Il19