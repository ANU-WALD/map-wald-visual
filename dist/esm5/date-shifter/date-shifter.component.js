"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateShifterComponent = void 0;
var core_1 = require("@angular/core");
var i0 = require("@angular/core");
var i1 = require("@angular/forms");
var DateShifterComponent = /** @class */ (function () {
    function DateShifterComponent() {
        this.interval = 2000;
        this.limits = null;
        this.date = new Date();
        this.dateChange = new core_1.EventEmitter();
        this.value = 0;
        this.label = '-';
        this.timer = 0;
        this.dateText = '-';
    }
    DateShifterComponent.prototype.ngOnChanges = function (changes) {
        if (changes.interval) {
            this.startTimer();
        }
    };
    DateShifterComponent.prototype.startTimer = function () {
        var _this = this;
        if (this.timer) {
            clearInterval(this.timer);
        }
        this.timer = window.setInterval(function () { return _this.tick(); }, this.interval);
    };
    DateShifterComponent.prototype.ngAfterViewInit = function () {
        this.startTimer();
    };
    DateShifterComponent.prototype.reset = function () {
        this.value = 0;
        this.sliderMoved();
    };
    DateShifterComponent.prototype.tick = function () {
        if (!this.value) {
            return;
        }
        var sign = this.value < 0 ? -1 : 1;
        this.date = new Date(this.date.getTime());
        switch (Math.abs(this.value)) {
            case 1:
                this.date.setDate(this.date.getDate() + sign);
                break;
            case 2:
                this.date.setDate(this.date.getDate() + 7 * sign);
                break;
            case 3:
                this.date.setMonth(this.date.getMonth() + sign);
                break;
            case 4:
                this.date.setFullYear(this.date.getFullYear() + sign);
                break;
        }
        if (this.limits && this.limits.length) {
            if (this.date.getTime() < this.limits[0].getTime()) {
                this.date = this.limits[0];
            }
            if (this.date.getTime() > this.limits[1].getTime()) {
                this.date = this.limits[1];
            }
        }
        this.setDateText();
        this.dateChange.emit(this.date);
    };
    DateShifterComponent.prototype.setDateText = function () {
        this.dateText = this.date.toLocaleDateString();
    };
    DateShifterComponent.prototype.sliderMoved = function () {
        this.setLabel();
    };
    DateShifterComponent.prototype.setLabel = function () {
        if (this.value < 0) {
            this.label = 'back 1';
        }
        else if (this.value > 0) {
            this.label = 'advance 1';
        }
        else {
            this.label = '-';
        }
        switch (Math.abs(this.value)) {
            case 1:
                this.label += 'day';
                break;
            case 2:
                this.label += 'week';
                break;
            case 3:
                this.label += 'month';
                break;
            case 4:
                this.label += 'year';
                break;
        }
    };
    DateShifterComponent.ɵfac = function DateShifterComponent_Factory(t) { return new (t || DateShifterComponent)(); };
    DateShifterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DateShifterComponent, selectors: [["date-shifter"]], inputs: { interval: "interval", limits: "limits", date: "date" }, outputs: { dateChange: "dateChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 6, vars: 4, consts: [["type", "range", "min", "-4", "step", "1", 1, "form-control", 3, "max", "ngModel", "ngModelChange", "mouseup"]], template: function DateShifterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "h3");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "input", 0);
            i0.ɵɵlistener("ngModelChange", function DateShifterComponent_Template_input_ngModelChange_3_listener($event) { return ctx.value = $event; })("ngModelChange", function DateShifterComponent_Template_input_ngModelChange_3_listener() { return ctx.sliderMoved(); })("mouseup", function DateShifterComponent_Template_input_mouseup_3_listener() { return ctx.reset(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "h4");
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.dateText);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("max", 4)("ngModel", ctx.value);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.label);
        } }, directives: [i1.RangeValueAccessor, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel], styles: [""] });
    return DateShifterComponent;
}());
exports.DateShifterComponent = DateShifterComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateShifterComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'date-shifter',
                template: "<div>\n  <h3>{{dateText}}</h3>\n  <input type=\"range\"\n         class=\"form-control\"\n         min=\"-4\"\n         [max]=\"4\"\n         step=\"1\"\n         [(ngModel)]=\"value\"\n         (ngModelChange)=\"sliderMoved()\"\n         (mouseup)=\"reset()\">\n  <h4>{{label}}</h4>\n</div>\n\n  ",
                styles: [""]
            }]
    }], function () { return []; }, { interval: [{
            type: core_1.Input
        }], limits: [{
            type: core_1.Input
        }], date: [{
            type: core_1.Input
        }], dateChange: [{
            type: core_1.Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1zaGlmdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLXZpc3VhbC8iLCJzb3VyY2VzIjpbImRhdGUtc2hpZnRlci9kYXRlLXNoaWZ0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF1STs7O0FBS3ZJO0lBNkJFO1FBVlMsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixXQUFNLEdBQVUsSUFBSSxDQUFDO1FBQ3JCLFNBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxJQUFJLG1CQUFZLEVBQVEsQ0FBQztRQUVoRCxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsVUFBSyxHQUFHLEdBQUcsQ0FBQztRQUNaLFVBQUssR0FBVSxDQUFDLENBQUM7UUFDakIsYUFBUSxHQUFHLEdBQUcsQ0FBQztJQUdmLENBQUM7SUFFRCwwQ0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBRyxPQUFPLENBQUMsUUFBUSxFQUFDO1lBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjtJQUNILENBQUM7SUFFRCx5Q0FBVSxHQUFWO1FBQUEsaUJBS0M7UUFKQyxJQUFHLElBQUksQ0FBQyxLQUFLLEVBQUM7WUFDWixhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLGNBQUksT0FBQSxLQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxFQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsOENBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsb0NBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lB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TUFBTSxDQUFDO2dCQUNyQixNQUFNO1lBQ1IsS0FBSyxDQUFDO2dCQUNKLElBQUksQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDO2dCQUN0QixNQUFNO1lBQ1IsS0FBSyxDQUFDO2dCQUNKLElBQUksQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDO2dCQUNyQixNQUFNO1NBQ1Q7SUFDSCxDQUFDOzRGQXBHVSxvQkFBb0I7NkRBQXBCLG9CQUFvQjtZQWhCcEIsMkJBQ1g7WUFBQSwwQkFBSTtZQUFBLFlBQVk7WUFBQSxpQkFBSztZQUNyQixnQ0FRQTtZQUhPLDRJQUFtQixtR0FDRixpQkFBYSxJQURYLHVGQUVSLFdBQU8sSUFGQztZQUwxQixpQkFRQTtZQUFBLDBCQUFJO1lBQUEsWUFBUztZQUFBLGlCQUFLO1lBQ3BCLGlCQUFNOztZQVZBLGVBQVk7WUFBWixrQ0FBWTtZQUlULGVBQVM7WUFBVCx1QkFBUyxzQkFBQTtZQUtaLGVBQVM7WUFBVCwrQkFBUzs7K0JBakJmO0NBNEhDLEFBdkhELElBdUhDO0FBckdZLG9EQUFvQjtrREFBcEIsb0JBQW9CO2NBbEJoQyxnQkFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUUsMlNBYVQ7Z0JBQ0QsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ2I7c0NBRVUsUUFBUTtrQkFBaEIsWUFBSztZQUNHLE1BQU07a0JBQWQsWUFBSztZQUNHLElBQUk7a0JBQVosWUFBSztZQUNJLFVBQVU7a0JBQW5CLGFBQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIE91dHB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5kZWNsYXJlIHZhciBQbG90bHk6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZS1zaGlmdGVyJyxcbiAgdGVtcGxhdGU6IGA8ZGl2PlxuICA8aDM+e3tkYXRlVGV4dH19PC9oMz5cbiAgPGlucHV0IHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICBtaW49XCItNFwiXG4gICAgICAgICBbbWF4XT1cIjRcIlxuICAgICAgICAgc3RlcD1cIjFcIlxuICAgICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXG4gICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJzbGlkZXJNb3ZlZCgpXCJcbiAgICAgICAgIChtb3VzZXVwKT1cInJlc2V0KClcIj5cbiAgPGg0Pnt7bGFiZWx9fTwvaDQ+XG48L2Rpdj5cblxuICBgLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVNoaWZ0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LE9uQ2hhbmdlcyAge1xuICBASW5wdXQoKSBpbnRlcnZhbCA9IDIwMDA7XG4gIEBJbnB1dCgpIGxpbWl0czpEYXRlW10gPSBudWxsO1xuICBASW5wdXQoKSBkYXRlID0gbmV3IERhdGUoKTtcbiAgQE91dHB1dCgpIGRhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cbiAgdmFsdWUgPSAwO1xuICBsYWJlbCA9ICctJztcbiAgdGltZXI6bnVtYmVyID0gMDtcbiAgZGF0ZVRleHQgPSAnLSc7XG5cbiAgY29uc3RydWN0b3IoKXtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZihjaGFuZ2VzLmludGVydmFsKXtcbiAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0VGltZXIoKTogYW55IHtcbiAgICBpZih0aGlzLnRpbWVyKXtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgfVxuICAgIHRoaXMudGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCk9PnRoaXMudGljaygpLHRoaXMuaW50ZXJ2YWwpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG4gICAgdGhpcy5zdGFydFRpbWVyKCk7XG4gIH1cblxuICByZXNldCgpe1xuICAgIHRoaXMudmFsdWUgPSAwO1xuICAgIHRoaXMuc2xpZGVyTW92ZWQoKTtcbiAgfVxuXG4gIHRpY2soKTogYW55IHtcbiAgICBpZighdGhpcy52YWx1ZSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHNpZ24gPSB0aGlzLnZhbHVlIDwgMCA/IC0xIDogMTtcbiAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZSh0aGlzLmRhdGUuZ2V0VGltZSgpKTtcbiAgICBzd2l0Y2goTWF0aC5hYnModGhpcy52YWx1ZSkpe1xuICAgICAgY2FzZSAxOlxuICAgICAgICB0aGlzLmRhdGUuc2V0RGF0ZSh0aGlzLmRhdGUuZ2V0RGF0ZSgpK3NpZ24pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgdGhpcy5kYXRlLnNldERhdGUodGhpcy5kYXRlLmdldERhdGUoKSs3KnNpZ24pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgdGhpcy5kYXRlLnNldE1vbnRoKHRoaXMuZGF0ZS5nZXRNb250aCgpK3NpZ24pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgdGhpcy5kYXRlLnNldEZ1bGxZZWFyKHRoaXMuZGF0ZS5nZXRGdWxsWWVhcigpK3NpZ24pO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZih0aGlzLmxpbWl0cyYmdGhpcy5saW1pdHMubGVuZ3RoKXtcbiAgICAgIGlmKHRoaXMuZGF0ZS5nZXRUaW1lKCk8dGhpcy5saW1pdHNbMF0uZ2V0VGltZSgpKXtcbiAgICAgICAgdGhpcy5kYXRlID0gdGhpcy5saW1pdHNbMF07XG4gICAgICB9XG4gICAgICBpZih0aGlzLmRhdGUuZ2V0VGltZSgpPnRoaXMubGltaXRzWzFdLmdldFRpbWUoKSl7XG4gICAgICAgIHRoaXMuZGF0ZSA9IHRoaXMubGltaXRzWzFdO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldERhdGVUZXh0KCk7XG4gICAgdGhpcy5kYXRlQ2hhbmdlLmVtaXQodGhpcy5kYXRlKTtcbiAgfVxuICBzZXREYXRlVGV4dCgpOiBhbnkge1xuICAgIHRoaXMuZGF0ZVRleHQgPSB0aGlzLmRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gIH1cblxuICBzbGlkZXJNb3ZlZCgpe1xuICAgIHRoaXMuc2V0TGFiZWwoKTtcbiAgfVxuXG4gIHNldExhYmVsKCkge1xuICAgIGlmKHRoaXMudmFsdWU8MCl7XG4gICAgICB0aGlzLmxhYmVsID0gJ2JhY2sgMSc7XG4gICAgfSBlbHNlIGlmKHRoaXMudmFsdWU+MCl7XG4gICAgICB0aGlzLmxhYmVsID0gJ2FkdmFuY2UgMSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGFiZWwgPSAnLSc7XG4gICAgfVxuXG4gICAgc3dpdGNoKE1hdGguYWJzKHRoaXMudmFsdWUpKXtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdGhpcy5sYWJlbCArPSAnZGF5JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHRoaXMubGFiZWwgKz0gJ3dlZWsnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgdGhpcy5sYWJlbCArPSAnbW9udGgnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgdGhpcy5sYWJlbCArPSAneWVhcic7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuIl19