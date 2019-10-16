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
var DateElementComponent = /** @class */ (function () {
    function DateElementComponent() {
        this.step = 1;
        this.changed = new core_1.EventEmitter();
    }
    DateElementComponent.prototype.ngAfterViewInit = function () {
    };
    DateElementComponent.prototype.move = function (n) {
        this.src[this.property] += n;
        this.changed.emit(this.src);
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
            template: "<div class=\"row no-gutters\">\n  <div class=\"col-4\">{{label}}</div>\n  <div class=\"col-2\">\n    <button class=\"btn btn-secondary btn-sm\" (click)=\"move(-step)\">\n      <i class=\"fa fa-angle-left\"></i>\n    </button>\n  </div>\n  <div class=\"col-4\"><button class=\"btn btn-link btn-sm\">{{src[property]}}</button></div>\n  <div class=\"col-2\">\n    <button class=\"btn btn-secondary btn-sm\" (click)=\"move(step)\">\n      <i class=\"fa fa-angle-right\"></i>\n    </button>\n  </div>\n</div>\n"
        }),
        __metadata("design:paramtypes", [])
    ], DateElementComponent);
    return DateElementComponent;
}());
exports.DateElementComponent = DateElementComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1lbGVtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLXZpc3VhbC8iLCJzb3VyY2VzIjpbImRhdGUtZWxlbWVudC9kYXRlLWVsZW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTZHO0FBc0I3RztJQU9FO1FBSFMsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNSLFlBQU8sR0FBRyxJQUFJLG1CQUFZLEVBQU8sQ0FBQztJQUk1QyxDQUFDO0lBRUQsOENBQWUsR0FBZjtJQUVBLENBQUM7SUFFRCxtQ0FBSSxHQUFKLFVBQUssQ0FBUTtRQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQWpCUTtRQUFSLFlBQUssRUFBRTs7dURBQWM7SUFDYjtRQUFSLFlBQUssRUFBRTs7MERBQWlCO0lBQ2hCO1FBQVIsWUFBSyxFQUFFOztxREFBUztJQUNSO1FBQVIsWUFBSyxFQUFFOztzREFBVTtJQUNSO1FBQVQsYUFBTSxFQUFFOzt5REFBbUM7SUFMakMsb0JBQW9CO1FBakJoQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLDJmQWNYO1NBQVksQ0FBQzs7T0FDRCxvQkFBb0IsQ0FtQmhDO0lBQUQsMkJBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuZGVjbGFyZSB2YXIgUGxvdGx5OiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGUtZWxlbWVudCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInJvdyBuby1ndXR0ZXJzXCI+XG4gIDxkaXYgY2xhc3M9XCJjb2wtNFwiPnt7bGFiZWx9fTwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29sLTJcIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCIgKGNsaWNrKT1cIm1vdmUoLXN0ZXApXCI+XG4gICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWxlZnRcIj48L2k+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29sLTRcIj48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1saW5rIGJ0bi1zbVwiPnt7c3JjW3Byb3BlcnR5XX19PC9idXR0b24+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjb2wtMlwiPlxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc21cIiAoY2xpY2spPVwibW92ZShzdGVwKVwiPlxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1yaWdodFwiPjwvaT5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG48L2Rpdj5cbmAsc3R5bGVzOiBbXX0pXG5leHBvcnQgY2xhc3MgRGF0ZUVsZW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0ICB7XG4gIEBJbnB1dCgpIGxhYmVsOnN0cmluZztcbiAgQElucHV0KCkgcHJvcGVydHk6c3RyaW5nO1xuICBASW5wdXQoKSBzcmM6YW55O1xuICBASW5wdXQoKSBzdGVwID0gMTtcbiAgQE91dHB1dCgpIGNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuXG4gIH1cblxuICBtb3ZlKG46bnVtYmVyKXtcbiAgICB0aGlzLnNyY1t0aGlzLnByb3BlcnR5XSArPSBuO1xuICAgIHRoaXMuY2hhbmdlZC5lbWl0KHRoaXMuc3JjKTtcbiAgfVxufVxuIl19