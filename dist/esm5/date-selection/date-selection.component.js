"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateSelectionComponent = void 0;
var core_1 = require("@angular/core");
var map_wald_1 = require("map-wald");
var i0 = require("@angular/core");
var i1 = require("map-wald");
var i2 = require("@angular/common");
var i3 = require("@ng-bootstrap/ng-bootstrap");
var i4 = require("@angular/forms");
var i5 = require("../date-element/date-element.component");
function DateSelectionComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵelementStart(2, "div", 5);
    i0.ɵɵelementStart(3, "input", 6, 7);
    i0.ɵɵlistener("ngModelChange", function DateSelectionComponent_div_1_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r4); var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.dateStruct = $event; })("ngModelChange", function DateSelectionComponent_div_1_Template_input_ngModelChange_3_listener() { i0.ɵɵrestoreView(_r4); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.dateStructChanged(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 8);
    i0.ɵɵlistener("click", function DateSelectionComponent_div_1_Template_div_click_5_listener() { i0.ɵɵrestoreView(_r4); var _r2 = i0.ɵɵreference(4); return _r2.toggle(); });
    i0.ɵɵelement(6, "i", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r0.dateStruct)("maxDate", ctx_r0.maxDateStruct)("minDate", ctx_r0.minDateStruct);
} }
function DateSelectionComponent_div_2_date_element_1_Template(rf, ctx) { if (rf & 1) {
    var _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "date-element", 12);
    i0.ɵɵlistener("changed", function DateSelectionComponent_div_2_date_element_1_Template_date_element_changed_0_listener() { i0.ɵɵrestoreView(_r11); var ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.dateStructChanged(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r7.dateStruct)("property", "day")("label", "Day")("step", ctx_r7.stepDays);
} }
function DateSelectionComponent_div_2_date_element_2_Template(rf, ctx) { if (rf & 1) {
    var _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "date-element", 13);
    i0.ɵɵlistener("changed", function DateSelectionComponent_div_2_date_element_2_Template_date_element_changed_0_listener() { i0.ɵɵrestoreView(_r13); var ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.dateStructChanged(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r8.dateStruct)("property", "month")("label", "Month");
} }
function DateSelectionComponent_div_2_date_element_3_Template(rf, ctx) { if (rf & 1) {
    var _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "date-element", 13);
    i0.ɵɵlistener("changed", function DateSelectionComponent_div_2_date_element_3_Template_date_element_changed_0_listener() { i0.ɵɵrestoreView(_r15); var ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.dateStructChanged(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r9.dateStruct)("property", "year")("label", "Year");
} }
function DateSelectionComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, DateSelectionComponent_div_2_date_element_1_Template, 1, 4, "date-element", 10);
    i0.ɵɵtemplate(2, DateSelectionComponent_div_2_date_element_2_Template, 1, 3, "date-element", 11);
    i0.ɵɵtemplate(3, DateSelectionComponent_div_2_date_element_3_Template, 1, 3, "date-element", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.need.day);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.need.month);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.need.year);
} }
var MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;
var DateSelectionComponent = /** @class */ (function () {
    function DateSelectionComponent(timeUtils) {
        this.timeUtils = timeUtils;
        this.dateChange = new core_1.EventEmitter();
        this.style = 'arrows';
        this.stepDays = 1;
        this.referenceDate = null;
        this.need = {
            day: true,
            month: true,
            year: true
        };
        this.atMax = false;
        this.atMin = false;
    }
    DateSelectionComponent.prototype.ngAfterViewInit = function () {
    };
    DateSelectionComponent.prototype.ngOnChanges = function (changes) {
        if (changes.minDate) {
            this.minDateStruct = this.timeUtils.convertDate(this.minDate);
        }
        if (changes.maxDate) {
            this.maxDateStruct = this.timeUtils.convertDate(this.maxDate);
        }
        if (changes.date) {
            this.dateStruct = this.timeUtils.convertDate(this.date);
        }
        if (changes.timestep) {
            this.assessDateComponents();
        }
        this.checkLimits();
    };
    DateSelectionComponent.prototype.dateStructChanged = function () {
        this.date = new Date(Date.UTC(this.dateStruct.year, this.dateStruct.month - 1, this.dateStruct.day));
        // this.date.setUTCFullYear(this.dateStruct.year)
        // this.date.setUTCMonth(this.dateStruct.month-1)
        // this.date.setUTCDate(this.dateStruct.day);
        this.checkReference();
        this.dateChange.emit(this.date);
    };
    DateSelectionComponent.prototype.assessDateComponents = function () {
        this.need.day = this.need.month = this.need.year = true;
        if (this.timestep === 'daily') {
            return;
        }
        this.need.day = false;
        if (this.timestep === 'annual') {
            this.need.month = false;
        }
    };
    DateSelectionComponent.prototype.move = function (n) {
        this.date = new Date(this.date && this.date.getTime());
        this.date.setDate(this.date.getDate() + n);
        this.onDateChanged();
        this.dateChange.emit(this.date);
    };
    DateSelectionComponent.prototype.onDateChanged = function () {
        this.checkLimits();
    };
    DateSelectionComponent.prototype.checkLimits = function () {
        this.atMax = this.timeUtils.datesEqual(this.dateStruct, this.maxDateStruct);
        this.atMin = this.timeUtils.datesEqual(this.dateStruct, this.minDateStruct);
    };
    // TODO not enforcing limits etc...
    DateSelectionComponent.prototype.checkReference = function () {
        if (!this.referenceDate) {
            return;
        }
        var refComponents = map_wald_1.InterpolationService.interpolate(this.referenceDate, {
            year: this.date.getFullYear(),
            month: this.date.getMonth() + 1,
            date: this.date.getDate()
        }).split('-').map(function (s) { return +s; });
        var currentRef = new Date(Date.UTC(refComponents[0], refComponents[1] - 1, refComponents[2]));
        console.log('currentRef', currentRef);
        console.log('currentDate', this.date);
        var timeSpan = MILLISECONDS_PER_DAY * this.stepDays;
        var days = (this.date.getTime() - currentRef.getTime()) / timeSpan;
        this.date = new Date(currentRef.getTime() + Math.round(days) * timeSpan);
        this.dateStruct = this.timeUtils.convertDate(this.date);
    };
    DateSelectionComponent.ɵfac = function DateSelectionComponent_Factory(t) { return new (t || DateSelectionComponent)(i0.ɵɵdirectiveInject(i1.TimeUtilsService)); };
    DateSelectionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DateSelectionComponent, selectors: [["date-selection"]], inputs: { date: "date", timestep: "timestep", minDate: "minDate", maxDate: "maxDate", style: "style", stepDays: "stepDays", referenceDate: "referenceDate" }, outputs: { dateChange: "dateChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 3, vars: 2, consts: [[1, "date-control", "container-fluid"], ["class", "row no-gutters", 4, "ngIf"], [4, "ngIf"], [1, "row", "no-gutters"], [1, "col-8", "form-group-inline"], [1, "input-group", "input-group-sm"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", 1, "form-control", "form-control-sm", 3, "ngModel", "maxDate", "minDate", "ngModelChange"], ["d", "ngbDatepicker"], [1, "input-group-addon", 3, "click"], [1, "fa", "fa-calendar"], [3, "src", "property", "label", "step", "changed", 4, "ngIf"], [3, "src", "property", "label", "changed", 4, "ngIf"], [3, "src", "property", "label", "step", "changed"], [3, "src", "property", "label", "changed"]], template: function DateSelectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, DateSelectionComponent_div_1_Template, 7, 3, "div", 1);
            i0.ɵɵtemplate(2, DateSelectionComponent_div_2_Template, 4, 3, "div", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.style !== "arrows");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.style === "arrows");
        } }, directives: [i2.NgIf, i3.NgbInputDatepicker, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i5.DateElementComponent], encapsulation: 2 });
    return DateSelectionComponent;
}());
exports.DateSelectionComponent = DateSelectionComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateSelectionComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'date-selection',
                template: "<div class=\"date-control container-fluid\">\n  <div *ngIf=\"style!=='arrows'\" class=\"row no-gutters\">\n    <div class=\"col-8 form-group-inline\">\n        <div class=\"input-group input-group-sm\">\n          <input class=\"form-control form-control-sm\" placeholder=\"yyyy-mm-dd\"\n                 name=\"dp\" [(ngModel)]=\"dateStruct\" (ngModelChange)=\"dateStructChanged()\"\n                 ngbDatepicker #d=\"ngbDatepicker\"\n                 [maxDate]=\"maxDateStruct\" [minDate]=\"minDateStruct\">\n          <div class=\"input-group-addon\" (click)=\"d.toggle()\" >\n            <i class=\"fa fa-calendar\"></i>\n          </div>\n        </div>\n      </div>\n\n    <!--\n      <div class=\"col-2\" >\n        <button class=\"btn btn-secondary btn-sm\" [disabled]=\"atMax\"\n                (click)=\"move(1)\"><i class=\"fa fa-chevron-right\"></i></button>\n      </div>\n    -->\n  </div>\n\n  <div *ngIf=\"style==='arrows'\">\n    <date-element *ngIf=\"need.day\"   [src]=\"dateStruct\" [property]=\"'day'\" [label]=\"'Day'\"\n                  [step]=\"stepDays\"\n                  (changed)=\"dateStructChanged()\"></date-element>\n    <date-element *ngIf=\"need.month\" [src]=\"dateStruct\" [property]=\"'month'\" [label]=\"'Month'\"\n                  (changed)=\"dateStructChanged()\"></date-element>\n    <date-element *ngIf=\"need.year\"  [src]=\"dateStruct\" [property]=\"'year'\" [label]=\"'Year'\"\n                  (changed)=\"dateStructChanged()\"></date-element>\n  </div>\n</div>\n",
                styles: []
            }]
    }], function () { return [{ type: i1.TimeUtilsService }]; }, { date: [{
            type: core_1.Input
        }], dateChange: [{
            type: core_1.Output
        }], timestep: [{
            type: core_1.Input
        }], minDate: [{
            type: core_1.Input
        }], maxDate: [{
            type: core_1.Input
        }], style: [{
            type: core_1.Input
        }], stepDays: [{
            type: core_1.Input
        }], referenceDate: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1zZWxlY3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtdmlzdWFsLyIsInNvdXJjZXMiOlsiZGF0ZS1zZWxlY3Rpb24vZGF0ZS1zZWxlY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUE2RztBQUU3RyxxQ0FBa0U7Ozs7Ozs7OztJQVNoRSw4QkFDRTtJQUFBLDhCQUNJO0lBQUEsOEJBQ0U7SUFBQSxtQ0FJQTtJQUhpQixvTkFBd0IsaU1BQUE7SUFEekMsaUJBSUE7SUFBQSw4QkFDRTtJQUQ2QiwwSkFBUyxZQUFVLElBQUM7SUFDakQsdUJBQThCO0lBQ2hDLGlCQUFNO0lBQ1IsaUJBQU07SUFDUixpQkFBTTtJQVFWLGlCQUFNOzs7SUFmbUIsZUFBd0I7SUFBeEIsMkNBQXdCLGlDQUFBLGlDQUFBOzs7O0lBa0IvQyx3Q0FFOEM7SUFBaEMsNE5BQStCO0lBQUMsaUJBQWU7OztJQUY1Qix1Q0FBa0IsbUJBQUEsZ0JBQUEseUJBQUE7Ozs7SUFHbkQsd0NBQzhDO0lBQWhDLDROQUErQjtJQUFDLGlCQUFlOzs7SUFENUIsdUNBQWtCLHFCQUFBLGtCQUFBOzs7O0lBRW5ELHdDQUM4QztJQUFoQyw0TkFBK0I7SUFBQyxpQkFBZTs7O0lBRDVCLHVDQUFrQixvQkFBQSxpQkFBQTs7O0lBTnJELDJCQUNFO0lBQUEsZ0dBRTZEO0lBQzdELGdHQUM2RDtJQUM3RCxnR0FDNkQ7SUFDL0QsaUJBQU07OztJQVBXLGVBQWM7SUFBZCxzQ0FBYztJQUdkLGVBQWdCO0lBQWhCLHdDQUFnQjtJQUVoQixlQUFlO0lBQWYsdUNBQWU7O0FBbENsQyxJQUFNLG9CQUFvQixHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLElBQUksQ0FBQztBQUl6QztJQTBERSxnQ0FBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFyQnJDLGVBQVUsR0FBRyxJQUFJLG1CQUFZLEVBQUUs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UUFBUSxDQUFDO1FBRXBELElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBQyxRQUFRLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDO2dHQTVHVSxzQkFBc0I7K0RBQXRCLHNCQUFzQjtZQWpDdEIsOEJBQ1g7WUFBQSx1RUFtQk07WUFFTix1RUFRTTtZQUNSLGlCQUFNOztZQTlCRSxlQUFzQjtZQUF0Qiw2Q0FBc0I7WUFxQnRCLGVBQXNCO1lBQXRCLDZDQUFzQjs7aUNBaEM5QjtDQXlKQyxBQWpKRCxJQWlKQztBQTlHWSx3REFBc0I7a0RBQXRCLHNCQUFzQjtjQW5DbEMsZ0JBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsOCtDQWdDWDtnQkFBQyxNQUFNLEVBQUUsRUFBRTthQUFDO21FQUVGLElBQUk7a0JBQVosWUFBSztZQUNJLFVBQVU7a0JBQW5CLGFBQU07WUFDRSxRQUFRO2tCQUFoQixZQUFLO1lBQ0csT0FBTztrQkFBZixZQUFLO1lBQ0csT0FBTztrQkFBZixZQUFLO1lBQ0csS0FBSztrQkFBYixZQUFLO1lBQ0csUUFBUTtrQkFBaEIsWUFBSztZQUNHLGFBQWE7a0JBQXJCLFlBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JEYXRlU3RydWN0IH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgVGltZVV0aWxzU2VydmljZSwgSW50ZXJwb2xhdGlvblNlcnZpY2UgfSBmcm9tICdtYXAtd2FsZCc7XG5cbmNvbnN0IE1JTExJU0VDT05EU19QRVJfREFZPTI0KjYwKjYwKjEwMDA7XG5cbmRlY2xhcmUgdmFyIFBsb3RseTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlLXNlbGVjdGlvbicsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImRhdGUtY29udHJvbCBjb250YWluZXItZmx1aWRcIj5cbiAgPGRpdiAqbmdJZj1cInN0eWxlIT09J2Fycm93cydcIiBjbGFzcz1cInJvdyBuby1ndXR0ZXJzXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC04IGZvcm0tZ3JvdXAtaW5saW5lXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1zbVwiPlxuICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIiBwbGFjZWhvbGRlcj1cInl5eXktbW0tZGRcIlxuICAgICAgICAgICAgICAgICBuYW1lPVwiZHBcIiBbKG5nTW9kZWwpXT1cImRhdGVTdHJ1Y3RcIiAobmdNb2RlbENoYW5nZSk9XCJkYXRlU3RydWN0Q2hhbmdlZCgpXCJcbiAgICAgICAgICAgICAgICAgbmdiRGF0ZXBpY2tlciAjZD1cIm5nYkRhdGVwaWNrZXJcIlxuICAgICAgICAgICAgICAgICBbbWF4RGF0ZV09XCJtYXhEYXRlU3RydWN0XCIgW21pbkRhdGVdPVwibWluRGF0ZVN0cnVjdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiIChjbGljayk9XCJkLnRvZ2dsZSgpXCIgPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jYWxlbmRhclwiPjwvaT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIDwhLS1cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMlwiID5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiIFtkaXNhYmxlZF09XCJhdE1heFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIm1vdmUoMSlcIj48aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAtLT5cbiAgPC9kaXY+XG5cbiAgPGRpdiAqbmdJZj1cInN0eWxlPT09J2Fycm93cydcIj5cbiAgICA8ZGF0ZS1lbGVtZW50ICpuZ0lmPVwibmVlZC5kYXlcIiAgIFtzcmNdPVwiZGF0ZVN0cnVjdFwiIFtwcm9wZXJ0eV09XCInZGF5J1wiIFtsYWJlbF09XCInRGF5J1wiXG4gICAgICAgICAgICAgICAgICBbc3RlcF09XCJzdGVwRGF5c1wiXG4gICAgICAgICAgICAgICAgICAoY2hhbmdlZCk9XCJkYXRlU3RydWN0Q2hhbmdlZCgpXCI+PC9kYXRlLWVsZW1lbnQ+XG4gICAgPGRhdGUtZWxlbWVudCAqbmdJZj1cIm5lZWQubW9udGhcIiBbc3JjXT1cImRhdGVTdHJ1Y3RcIiBbcHJvcGVydHldPVwiJ21vbnRoJ1wiIFtsYWJlbF09XCInTW9udGgnXCJcbiAgICAgICAgICAgICAgICAgIChjaGFuZ2VkKT1cImRhdGVTdHJ1Y3RDaGFuZ2VkKClcIj48L2RhdGUtZWxlbWVudD5cbiAgICA8ZGF0ZS1lbGVtZW50ICpuZ0lmPVwibmVlZC55ZWFyXCIgIFtzcmNdPVwiZGF0ZVN0cnVjdFwiIFtwcm9wZXJ0eV09XCIneWVhcidcIiBbbGFiZWxdPVwiJ1llYXInXCJcbiAgICAgICAgICAgICAgICAgIChjaGFuZ2VkKT1cImRhdGVTdHJ1Y3RDaGFuZ2VkKClcIj48L2RhdGUtZWxlbWVudD5cbiAgPC9kaXY+XG48L2Rpdj5cbmAsc3R5bGVzOiBbXX0pXG5leHBvcnQgY2xhc3MgRGF0ZVNlbGVjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQgIHtcbiAgQElucHV0KCkgZGF0ZTogRGF0ZTtcbiAgQE91dHB1dCgpIGRhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIHRpbWVzdGVwOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1pbkRhdGU6IERhdGV8c3RyaW5nO1xuICBASW5wdXQoKSBtYXhEYXRlOiBEYXRlfHN0cmluZztcbiAgQElucHV0KCkgc3R5bGU6ICgncG9wdXAnfCdhcnJvd3MnKSA9ICdhcnJvd3MnO1xuICBASW5wdXQoKSBzdGVwRGF5cyA9IDE7XG4gIEBJbnB1dCgpIHJlZmVyZW5jZURhdGU6c3RyaW5nID0gbnVsbDtcblxuICBuZWVkID0ge1xuICAgIGRheTp0cnVlLFxuICAgIG1vbnRoOnRydWUsXG4gICAgeWVhcjp0cnVlXG4gIH07XG5cbiAgbWluRGF0ZVN0cnVjdDpOZ2JEYXRlU3RydWN0O1xuICBtYXhEYXRlU3RydWN0Ok5nYkRhdGVTdHJ1Y3Q7XG4gIGRhdGVTdHJ1Y3Q6TmdiRGF0ZVN0cnVjdDtcblxuICBhdE1heDpib29sZWFuPWZhbHNlO1xuICBhdE1pbjpib29sZWFuPWZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGltZVV0aWxzOiBUaW1lVXRpbHNTZXJ2aWNlKXtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG5cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6YW55KXtcbiAgICBpZihjaGFuZ2VzLm1pbkRhdGUpe1xuICAgICAgdGhpcy5taW5EYXRlU3RydWN0ID0gdGhpcy50aW1lVXRpbHMuY29udmVydERhdGUodGhpcy5taW5EYXRlKTtcbiAgICB9XG5cbiAgICBpZihjaGFuZ2VzLm1heERhdGUpe1xuICAgICAgdGhpcy5tYXhEYXRlU3RydWN0ID0gdGhpcy50aW1lVXRpbHMuY29udmVydERhdGUodGhpcy5tYXhEYXRlKTtcbiAgICB9XG5cbiAgICBpZihjaGFuZ2VzLmRhdGUpe1xuICAgICAgdGhpcy5kYXRlU3RydWN0ID0gdGhpcy50aW1lVXRpbHMuY29udmVydERhdGUodGhpcy5kYXRlKTtcbiAgICB9XG5cbiAgICBpZihjaGFuZ2VzLnRpbWVzdGVwKXtcbiAgICAgIHRoaXMuYXNzZXNzRGF0ZUNvbXBvbmVudHMoKTtcbiAgICB9XG4gICAgdGhpcy5jaGVja0xpbWl0cygpO1xuICB9XG5cbiAgZGF0ZVN0cnVjdENoYW5nZWQoKXtcbiAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyh0aGlzLmRhdGVTdHJ1Y3QueWVhcix0aGlzLmRhdGVTdHJ1Y3QubW9udGgtMSx0aGlzLmRhdGVTdHJ1Y3QuZGF5KSk7XG4gICAgLy8gdGhpcy5kYXRlLnNldFVUQ0Z1bGxZZWFyKHRoaXMuZGF0ZVN0cnVjdC55ZWFyKVxuICAgIC8vIHRoaXMuZGF0ZS5zZXRVVENNb250aCh0aGlzLmRhdGVTdHJ1Y3QubW9udGgtMSlcbiAgICAvLyB0aGlzLmRhdGUuc2V0VVRDRGF0ZSh0aGlzLmRhdGVTdHJ1Y3QuZGF5KTtcbiAgICB0aGlzLmNoZWNrUmVmZXJlbmNlKCk7XG4gICAgdGhpcy5kYXRlQ2hhbmdlLmVtaXQodGhpcy5kYXRlKTtcbiAgfVxuXG4gIGFzc2Vzc0RhdGVDb21wb25lbnRzKCl7XG4gICAgdGhpcy5uZWVkLmRheSA9IHRoaXMubmVlZC5tb250aCA9IHRoaXMubmVlZC55ZWFyID0gdHJ1ZTtcbiAgICBpZih0aGlzLnRpbWVzdGVwPT09J2RhaWx5Jyl7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubmVlZC5kYXkgPSBmYWxzZTtcblxuICAgIGlmKHRoaXMudGltZXN0ZXA9PT0nYW5udWFsJykge1xuICAgICAgdGhpcy5uZWVkLm1vbnRoID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgbW92ZShuOm51bWJlcil7XG4gICAgdGhpcy5kYXRlID0gbmV3IERhdGUodGhpcy5kYXRlJiZ0aGlzLmRhdGUuZ2V0VGltZSgpKTtcbiAgICB0aGlzLmRhdGUuc2V0RGF0ZSh0aGlzLmRhdGUuZ2V0RGF0ZSgpK24pO1xuICAgIHRoaXMub25EYXRlQ2hhbmdlZCgpO1xuICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KHRoaXMuZGF0ZSk7XG4gIH1cblxuICBvbkRhdGVDaGFuZ2VkKCl7XG4gICAgdGhpcy5jaGVja0xpbWl0cygpO1xuICB9XG5cbiAgY2hlY2tMaW1pdHMoKXtcbiAgICB0aGlzLmF0TWF4ID0gdGhpcy50aW1lVXRpbHMuZGF0ZXNFcXVhbCh0aGlzLmRhdGVTdHJ1Y3QsdGhpcy5tYXhEYXRlU3RydWN0KTtcbiAgICB0aGlzLmF0TWluID0gdGhpcy50aW1lVXRpbHMuZGF0ZXNFcXVhbCh0aGlzLmRhdGVTdHJ1Y3QsdGhpcy5taW5EYXRlU3RydWN0KTtcbiAgfVxuICAvLyBUT0RPIG5vdCBlbmZvcmNpbmcgbGltaXRzIGV0Yy4uLlxuXG4gIGNoZWNrUmVmZXJlbmNlKCk6IGFueSB7XG4gICAgaWYoIXRoaXMucmVmZXJlbmNlRGF0ZSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHJlZkNvbXBvbmVudHMgPSBJbnRlcnBvbGF0aW9uU2VydmljZS5pbnRlcnBvbGF0ZSh0aGlzLnJlZmVyZW5jZURhdGUse1xuICAgICAgeWVhcjp0aGlzLmRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgIG1vbnRoOnRoaXMuZGF0ZS5nZXRNb250aCgpKzEsXG4gICAgICBkYXRlOnRoaXMuZGF0ZS5nZXREYXRlKClcbiAgICB9KS5zcGxpdCgnLScpLm1hcChzPT4rcyk7XG5cbiAgICBsZXQgY3VycmVudFJlZiA9IG5ldyBEYXRlKERhdGUuVVRDKHJlZkNvbXBvbmVudHNbMF0scmVmQ29tcG9uZW50c1sxXS0xLHJlZkNvbXBvbmVudHNbMl0pKTtcblxuICAgIGNvbnNvbGUubG9nKCdjdXJyZW50UmVmJyxjdXJyZW50UmVmKTtcbiAgICBjb25zb2xlLmxvZygnY3VycmVudERhdGUnLHRoaXMuZGF0ZSk7XG4gICAgbGV0IHRpbWVTcGFuID0gTUlMTElTRUNPTkRTX1BFUl9EQVkgKiB0aGlzLnN0ZXBEYXlzO1xuXG4gICAgbGV0IGRheXMgPSAodGhpcy5kYXRlLmdldFRpbWUoKSAtIGN1cnJlbnRSZWYuZ2V0VGltZSgpKS90aW1lU3BhbjtcbiAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZShjdXJyZW50UmVmLmdldFRpbWUoKSArIE1hdGgucm91bmQoZGF5cykqdGltZVNwYW4pO1xuICAgIHRoaXMuZGF0ZVN0cnVjdCA9IHRoaXMudGltZVV0aWxzLmNvbnZlcnREYXRlKHRoaXMuZGF0ZSk7XG4gIH1cblxufVxuIl19