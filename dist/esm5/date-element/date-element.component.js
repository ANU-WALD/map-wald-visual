"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateElementComponent = void 0;
var core_1 = require("@angular/core");
var i0 = require("@angular/core");
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
    DateElementComponent.ɵfac = function DateElementComponent_Factory(t) { return new (t || DateElementComponent)(); };
    DateElementComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DateElementComponent, selectors: [["date-element"]], inputs: { label: "label", property: "property", src: "src", step: "step" }, outputs: { changed: "changed" }, decls: 12, vars: 2, consts: [[1, "row", "no-gutters"], [1, "col-4"], [1, "col-2"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "fa", "fa-angle-left"], [1, "btn", "btn-link", "btn-sm"], [1, "fa", "fa-angle-right"]], template: function DateElementComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵelementStart(4, "button", 3);
            i0.ɵɵlistener("click", function DateElementComponent_Template_button_click_4_listener() { return ctx.move(-ctx.step); });
            i0.ɵɵelement(5, "i", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 1);
            i0.ɵɵelementStart(7, "button", 5);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 2);
            i0.ɵɵelementStart(10, "button", 3);
            i0.ɵɵlistener("click", function DateElementComponent_Template_button_click_10_listener() { return ctx.move(ctx.step); });
            i0.ɵɵelement(11, "i", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.label);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.src[ctx.property]);
        } }, encapsulation: 2 });
    return DateElementComponent;
}());
exports.DateElementComponent = DateElementComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateElementComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'date-element',
                template: "<div class=\"row no-gutters\">\n  <div class=\"col-4\">{{label}}</div>\n  <div class=\"col-2\">\n    <button class=\"btn btn-secondary btn-sm\" (click)=\"move(-step)\">\n      <i class=\"fa fa-angle-left\"></i>\n    </button>\n  </div>\n  <div class=\"col-4\"><button class=\"btn btn-link btn-sm\">{{src[property]}}</button></div>\n  <div class=\"col-2\">\n    <button class=\"btn btn-secondary btn-sm\" (click)=\"move(step)\">\n      <i class=\"fa fa-angle-right\"></i>\n    </button>\n  </div>\n</div>\n",
                styles: []
            }]
    }], function () { return []; }, { label: [{
            type: core_1.Input
        }], property: [{
            type: core_1.Input
        }], src: [{
            type: core_1.Input
        }], step: [{
            type: core_1.Input
        }], changed: [{
            type: core_1.Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1lbGVtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLXZpc3VhbC8iLCJzb3VyY2VzIjpbImRhdGUtZWxlbWVudC9kYXRlLWVsZW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUE2Rzs7QUFLN0c7SUF3QkU7UUFIUyxTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsWUFBTyxHQUFHLElBQUksbUJBQVksRUFBTyxDQUFDO0lBSTVDLENBQUM7SUFFRCw4Q0FBZSxHQUFmO0lBRUEsQ0FBQztJQUVELG1DQUFJLEdBQUosVUFBSyxDQUFRO1FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDOzRGQWxCVSxvQkFBb0I7NkRBQXBCLG9CQUFvQjtZQWZwQiw4QkFDWDtZQUFBLDhCQUFtQjtZQUFBLFlBQVM7WUFBQSxpQkFBTTtZQUNsQyw4QkFDRTtZQUFBLGlDQUNFO1lBRHVDLGlHQUFTLG1CQUFXLElBQUM7WUFDNUQsdUJBQWdDO1lBQ2xDLGlCQUFTO1lBQ1gsaUJBQU07WUFDTiw4QkFBbUI7WUFBQSxpQ0FBb0M7WUFBQSxZQUFpQjtZQUFBLGlCQUFTO1lBQUEsaUJBQU07WUFDdkYsOEJBQ0U7WUFBQSxrQ0FDRTtZQUR1QyxrR0FBUyxrQkFBVSxJQUFDO1lBQzNELHdCQUFpQztZQUNuQyxpQkFBUztZQUNYLGlCQUFNO1lBQ1IsaUJBQU07O1lBWmUsZUFBUztZQUFULCtCQUFTO1lBTTJCLGVBQWlCO1lBQWpCLDJDQUFpQjs7K0JBZDFFO0NBeUNDLEFBcENELElBb0NDO0FBbkJZLG9EQUFvQjtrREFBcEIsb0JBQW9CO2NBakJoQyxnQkFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUUsMmZBY1g7Z0JBQUMsTUFBTSxFQUFFLEVBQUU7YUFBQztzQ0FFRixLQUFLO2tCQUFiLFlBQUs7WUFDRyxRQUFRO2tCQUFoQixZQUFLO1lBQ0csR0FBRztrQkFBWCxZQUFLO1lBQ0csSUFBSTtrQkFBWixZQUFLO1lBQ0ksT0FBTztrQkFBaEIsYUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5kZWNsYXJlIHZhciBQbG90bHk6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZS1lbGVtZW50JyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwicm93IG5vLWd1dHRlcnNcIj5cbiAgPGRpdiBjbGFzcz1cImNvbC00XCI+e3tsYWJlbH19PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjb2wtMlwiPlxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc21cIiAoY2xpY2spPVwibW92ZSgtc3RlcClcIj5cbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtbGVmdFwiPjwvaT5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjb2wtNFwiPjxidXR0b24gY2xhc3M9XCJidG4gYnRuLWxpbmsgYnRuLXNtXCI+e3tzcmNbcHJvcGVydHldfX08L2J1dHRvbj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNvbC0yXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiIChjbGljayk9XCJtb3ZlKHN0ZXApXCI+XG4gICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLXJpZ2h0XCI+PC9pPlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvZGl2PlxuYCxzdHlsZXM6IFtdfSlcbmV4cG9ydCBjbGFzcyBEYXRlRWxlbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQgIHtcbiAgQElucHV0KCkgbGFiZWw6c3RyaW5nO1xuICBASW5wdXQoKSBwcm9wZXJ0eTpzdHJpbmc7XG4gIEBJbnB1dCgpIHNyYzphbnk7XG4gIEBJbnB1dCgpIHN0ZXAgPSAxO1xuICBAT3V0cHV0KCkgY2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBcbiAgY29uc3RydWN0b3IoKXtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG5cbiAgfVxuXG4gIG1vdmUobjpudW1iZXIpe1xuICAgIHRoaXMuc3JjW3RoaXMucHJvcGVydHldICs9IG47XG4gICAgdGhpcy5jaGFuZ2VkLmVtaXQodGhpcy5zcmMpO1xuICB9XG59XG4iXX0=