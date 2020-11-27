"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateShifterComponent = void 0;
const core_1 = require("@angular/core");
const i0 = require("@angular/core");
const i1 = require("@angular/forms");
class DateShifterComponent {
    constructor() {
        this.interval = 2000;
        this.limits = null;
        this.date = new Date();
        this.dateChange = new core_1.EventEmitter();
        this.value = 0;
        this.label = '-';
        this.timer = 0;
        this.dateText = '-';
    }
    ngOnChanges(changes) {
        if (changes.interval) {
            this.startTimer();
        }
    }
    startTimer() {
        if (this.timer) {
            clearInterval(this.timer);
        }
        this.timer = window.setInterval(() => this.tick(), this.interval);
    }
    ngAfterViewInit() {
        this.startTimer();
    }
    reset() {
        this.value = 0;
        this.sliderMoved();
    }
    tick() {
        if (!this.value) {
            return;
        }
        let sign = this.value < 0 ? -1 : 1;
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
    }
    setDateText() {
        this.dateText = this.date.toLocaleDateString();
    }
    sliderMoved() {
        this.setLabel();
    }
    setLabel() {
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
    }
}
exports.DateShifterComponent = DateShifterComponent;
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateShifterComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'date-shifter',
                template: `<div>
  <h3>{{dateText}}</h3>
  <input type="range"
         class="form-control"
         min="-4"
         [max]="4"
         step="1"
         [(ngModel)]="value"
         (ngModelChange)="sliderMoved()"
         (mouseup)="reset()">
  <h4>{{label}}</h4>
</div>

  `,
                styles: [``]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1zaGlmdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLXZpc3VhbC8iLCJzb3VyY2VzIjpbImRhdGUtc2hpZnRlci9kYXRlLXNoaWZ0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUF1STs7O0FBS3ZJLE1Ba0JhLG9CQUFvQjtJQVcvQjtRQVZTLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsV0FBTSxHQUFVLElBQUksQ0FBQztRQUNyQixTQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNqQixlQUFVLEdBQUcsSUFBSSxtQkFBWSxFQUFRLENBQUM7UUFFaEQsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLFVBQUssR0FBRyxHQUFHLENBQUM7UUFDWixVQUFLLEdBQVUsQ0FBQyxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxHQUFHLENBQUM7SUFHZixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUcsT0FBTyxDQUFDLFFBQVEsRUFBQztZQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7SUFDSCxDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUcsSUFBSSxDQUFDLEtBQUssRUFBQztZQUNaLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRSxFQUFFLENBQUEsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFB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QyxLQUFLLElBQUksT0FBTyxDQUFDO2dCQUN0QixNQUFNO1lBQ1IsS0FBSyxDQUFDO2dCQUNKLElBQUksQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDO2dCQUNyQixNQUFNO1NBQ1Q7SUFDSCxDQUFDOztBQXRISCxvREF1SEM7d0ZBckdZLG9CQUFvQjt5REFBcEIsb0JBQW9CO1FBaEJwQiwyQkFDWDtRQUFBLDBCQUFJO1FBQUEsWUFBWTtRQUFBLGlCQUFLO1FBQ3JCLGdDQVFBO1FBSE8sNElBQW1CLG1HQUNGLGlCQUFhLElBRFgsdUZBRVIsV0FBTyxJQUZDO1FBTDFCLGlCQVFBO1FBQUEsMEJBQUk7UUFBQSxZQUFTO1FBQUEsaUJBQUs7UUFDcEIsaUJBQU07O1FBVkEsZUFBWTtRQUFaLGtDQUFZO1FBSVQsZUFBUztRQUFULHVCQUFTLHNCQUFBO1FBS1osZUFBUztRQUFULCtCQUFTOztrREFNRixvQkFBb0I7Y0FsQmhDLGdCQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7OztHQWFUO2dCQUNELE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNiO3NDQUVVLFFBQVE7a0JBQWhCLFlBQUs7WUFDRyxNQUFNO2tCQUFkLFlBQUs7WUFDRyxJQUFJO2tCQUFaLFlBQUs7WUFDSSxVQUFVO2tCQUFuQixhQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBPdXRwdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuZGVjbGFyZSB2YXIgUGxvdGx5OiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGUtc2hpZnRlcicsXG4gIHRlbXBsYXRlOiBgPGRpdj5cbiAgPGgzPnt7ZGF0ZVRleHR9fTwvaDM+XG4gIDxpbnB1dCB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgbWluPVwiLTRcIlxuICAgICAgICAgW21heF09XCI0XCJcbiAgICAgICAgIHN0ZXA9XCIxXCJcbiAgICAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIlxuICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2xpZGVyTW92ZWQoKVwiXG4gICAgICAgICAobW91c2V1cCk9XCJyZXNldCgpXCI+XG4gIDxoND57e2xhYmVsfX08L2g0PlxuPC9kaXY+XG5cbiAgYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIERhdGVTaGlmdGVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCxPbkNoYW5nZXMgIHtcbiAgQElucHV0KCkgaW50ZXJ2YWwgPSAyMDAwO1xuICBASW5wdXQoKSBsaW1pdHM6RGF0ZVtdID0gbnVsbDtcbiAgQElucHV0KCkgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIEBPdXRwdXQoKSBkYXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xuXG4gIHZhbHVlID0gMDtcbiAgbGFiZWwgPSAnLSc7XG4gIHRpbWVyOm51bWJlciA9IDA7XG4gIGRhdGVUZXh0ID0gJy0nO1xuXG4gIGNvbnN0cnVjdG9yKCl7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYoY2hhbmdlcy5pbnRlcnZhbCl7XG4gICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcbiAgICB9XG4gIH1cblxuICBzdGFydFRpbWVyKCk6IGFueSB7XG4gICAgaWYodGhpcy50aW1lcil7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgIH1cbiAgICB0aGlzLnRpbWVyID0gd2luZG93LnNldEludGVydmFsKCgpPT50aGlzLnRpY2soKSx0aGlzLmludGVydmFsKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgIHRoaXMuc3RhcnRUaW1lcigpO1xuICB9XG5cbiAgcmVzZXQoKXtcbiAgICB0aGlzLnZhbHVlID0gMDtcbiAgICB0aGlzLnNsaWRlck1vdmVkKCk7XG4gIH1cblxuICB0aWNrKCk6IGFueSB7XG4gICAgaWYoIXRoaXMudmFsdWUpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBzaWduID0gdGhpcy52YWx1ZSA8IDAgPyAtMSA6IDE7XG4gICAgdGhpcy5kYXRlID0gbmV3IERhdGUodGhpcy5kYXRlLmdldFRpbWUoKSk7XG4gICAgc3dpdGNoKE1hdGguYWJzKHRoaXMudmFsdWUpKXtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdGhpcy5kYXRlLnNldERhdGUodGhpcy5kYXRlLmdldERhdGUoKStzaWduKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHRoaXMuZGF0ZS5zZXREYXRlKHRoaXMuZGF0ZS5nZXREYXRlKCkrNypzaWduKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHRoaXMuZGF0ZS5zZXRNb250aCh0aGlzLmRhdGUuZ2V0TW9udGgoKStzaWduKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIHRoaXMuZGF0ZS5zZXRGdWxsWWVhcih0aGlzLmRhdGUuZ2V0RnVsbFllYXIoKStzaWduKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYodGhpcy5saW1pdHMmJnRoaXMubGltaXRzLmxlbmd0aCl7XG4gICAgICBpZih0aGlzLmRhdGUuZ2V0VGltZSgpPHRoaXMubGltaXRzWzBdLmdldFRpbWUoKSl7XG4gICAgICAgIHRoaXMuZGF0ZSA9IHRoaXMubGltaXRzWzBdO1xuICAgICAgfVxuICAgICAgaWYodGhpcy5kYXRlLmdldFRpbWUoKT50aGlzLmxpbWl0c1sxXS5nZXRUaW1lKCkpe1xuICAgICAgICB0aGlzLmRhdGUgPSB0aGlzLmxpbWl0c1sxXTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXREYXRlVGV4dCgpO1xuICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KHRoaXMuZGF0ZSk7XG4gIH1cbiAgc2V0RGF0ZVRleHQoKTogYW55IHtcbiAgICB0aGlzLmRhdGVUZXh0ID0gdGhpcy5kYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICB9XG5cbiAgc2xpZGVyTW92ZWQoKXtcbiAgICB0aGlzLnNldExhYmVsKCk7XG4gIH1cblxuICBzZXRMYWJlbCgpIHtcbiAgICBpZih0aGlzLnZhbHVlPDApe1xuICAgICAgdGhpcy5sYWJlbCA9ICdiYWNrIDEnO1xuICAgIH0gZWxzZSBpZih0aGlzLnZhbHVlPjApe1xuICAgICAgdGhpcy5sYWJlbCA9ICdhZHZhbmNlIDEnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxhYmVsID0gJy0nO1xuICAgIH1cblxuICAgIHN3aXRjaChNYXRoLmFicyh0aGlzLnZhbHVlKSl7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHRoaXMubGFiZWwgKz0gJ2RheSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICB0aGlzLmxhYmVsICs9ICd3ZWVrJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHRoaXMubGFiZWwgKz0gJ21vbnRoJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIHRoaXMubGFiZWwgKz0gJ3llYXInO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiJdfQ==