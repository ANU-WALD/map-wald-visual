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
let DateElementComponent = class DateElementComponent {
    constructor() {
        this.step = 1;
        this.changed = new core_1.EventEmitter();
    }
    ngAfterViewInit() {
    }
    move(n) {
        this.src[this.property] += n;
        this.changed.emit(this.src);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DateElementComponent.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DateElementComponent.prototype, "property", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DateElementComponent.prototype, "src", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DateElementComponent.prototype, "step", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DateElementComponent.prototype, "changed", void 0);
DateElementComponent = __decorate([
    core_1.Component({
        selector: 'date-element',
        template: `<div class="row no-gutters">
  <div class="col-4">{{label}}</div>
  <div class="col-2">
    <button class="btn btn-secondary btn-sm" (click)="move(-step)">
      <i class="fa fa-angle-left"></i>
    </button>
  </div>
  <div class="col-4"><button class="btn btn-link btn-sm">{{src[property]}}</button></div>
  <div class="col-2">
    <button class="btn btn-secondary btn-sm" (click)="move(step)">
      <i class="fa fa-angle-right"></i>
    </button>
  </div>
</div>
`
    }),
    __metadata("design:paramtypes", [])
], DateElementComponent);
exports.DateElementComponent = DateElementComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1lbGVtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLXZpc3VhbC8iLCJzb3VyY2VzIjpbImRhdGUtZWxlbWVudC9kYXRlLWVsZW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQTZHO0FBc0I3RyxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQU8vQjtRQUhTLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDUixZQUFPLEdBQUcsSUFBSSxtQkFBWSxFQUFPLENBQUM7SUFJNUMsQ0FBQztJQUVELGVBQWU7SUFFZixDQUFDO0lBRUQsSUFBSSxDQUFDLENBQVE7UUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDRixDQUFBO0FBbEJVO0lBQVIsWUFBSyxFQUFFOzttREFBYztBQUNiO0lBQVIsWUFBSyxFQUFFOztzREFBaUI7QUFDaEI7SUFBUixZQUFLLEVBQUU7O2lEQUFTO0FBQ1I7SUFBUixZQUFLLEVBQUU7O2tEQUFVO0FBQ1I7SUFBVCxhQUFNLEVBQUU7O3FEQUFtQztBQUxqQyxvQkFBb0I7SUFqQmhDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUN4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7O0NBY1g7S0FBWSxDQUFDOztHQUNELG9CQUFvQixDQW1CaEM7QUFuQlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbmRlY2xhcmUgdmFyIFBsb3RseTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlLWVsZW1lbnQnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJyb3cgbm8tZ3V0dGVyc1wiPlxuICA8ZGl2IGNsYXNzPVwiY29sLTRcIj57e2xhYmVsfX08L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNvbC0yXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiIChjbGljayk9XCJtb3ZlKC1zdGVwKVwiPlxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1sZWZ0XCI+PC9pPlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNvbC00XCI+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tbGluayBidG4tc21cIj57e3NyY1twcm9wZXJ0eV19fTwvYnV0dG9uPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29sLTJcIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCIgKGNsaWNrKT1cIm1vdmUoc3RlcClcIj5cbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIj48L2k+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuPC9kaXY+XG5gLHN0eWxlczogW119KVxuZXhwb3J0IGNsYXNzIERhdGVFbGVtZW50Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCAge1xuICBASW5wdXQoKSBsYWJlbDpzdHJpbmc7XG4gIEBJbnB1dCgpIHByb3BlcnR5OnN0cmluZztcbiAgQElucHV0KCkgc3JjOmFueTtcbiAgQElucHV0KCkgc3RlcCA9IDE7XG4gIEBPdXRwdXQoKSBjaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIFxuICBjb25zdHJ1Y3Rvcigpe1xuXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcblxuICB9XG5cbiAgbW92ZShuOm51bWJlcil7XG4gICAgdGhpcy5zcmNbdGhpcy5wcm9wZXJ0eV0gKz0gbjtcbiAgICB0aGlzLmNoYW5nZWQuZW1pdCh0aGlzLnNyYyk7XG4gIH1cbn1cbiJdfQ==