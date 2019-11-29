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
var map_wald_1 = require("map-wald");
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
    DateSelectionComponent.ctorParameters = function () { return [
        { type: map_wald_1.TimeUtilsService }
    ]; };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Date)
    ], DateSelectionComponent.prototype, "date", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DateSelectionComponent.prototype, "dateChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DateSelectionComponent.prototype, "timestep", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DateSelectionComponent.prototype, "minDate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DateSelectionComponent.prototype, "maxDate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DateSelectionComponent.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DateSelectionComponent.prototype, "stepDays", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DateSelectionComponent.prototype, "referenceDate", void 0);
    DateSelectionComponent = __decorate([
        core_1.Component({
            selector: 'date-selection',
            template: "<div class=\"date-control container-fluid\">\n  <div *ngIf=\"style!=='arrows'\" class=\"row no-gutters\">\n    <div class=\"col-8 form-group-inline\">\n        <div class=\"input-group input-group-sm\">\n          <input class=\"form-control form-control-sm\" placeholder=\"yyyy-mm-dd\"\n                 name=\"dp\" [(ngModel)]=\"dateStruct\" (ngModelChange)=\"dateStructChanged()\"\n                 ngbDatepicker #d=\"ngbDatepicker\"\n                 [maxDate]=\"maxDateStruct\" [minDate]=\"minDateStruct\">\n          <div class=\"input-group-addon\" (click)=\"d.toggle()\" >\n            <i class=\"fa fa-calendar\"></i>\n          </div>\n        </div>\n      </div>\n\n    <!--\n      <div class=\"col-2\" >\n        <button class=\"btn btn-secondary btn-sm\" [disabled]=\"atMax\"\n                (click)=\"move(1)\"><i class=\"fa fa-chevron-right\"></i></button>\n      </div>\n    -->\n  </div>\n\n  <div *ngIf=\"style==='arrows'\">\n    <date-element *ngIf=\"need.day\"   [src]=\"dateStruct\" [property]=\"'day'\" [label]=\"'Day'\"\n                  [step]=\"stepDays\"\n                  (changed)=\"dateStructChanged()\"></date-element>\n    <date-element *ngIf=\"need.month\" [src]=\"dateStruct\" [property]=\"'month'\" [label]=\"'Month'\"\n                  (changed)=\"dateStructChanged()\"></date-element>\n    <date-element *ngIf=\"need.year\"  [src]=\"dateStruct\" [property]=\"'year'\" [label]=\"'Year'\"\n                  (changed)=\"dateStructChanged()\"></date-element>\n  </div>\n</div>\n"
        }),
        __metadata("design:paramtypes", [map_wald_1.TimeUtilsService])
    ], DateSelectionComponent);
    return DateSelectionComponent;
}());
exports.DateSelectionComponent = DateSelectionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1zZWxlY3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtdmlzdWFsLyIsInNvdXJjZXMiOlsiZGF0ZS1zZWxlY3Rpb24vZGF0ZS1zZWxlY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTZHO0FBRTdHLHFDQUFrRTtBQUVsRSxJQUFNLG9CQUFvQixHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLElBQUksQ0FBQztBQXVDekM7SUF1QkUsZ0NBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBckJyQyxlQUFVLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFJakMsVUFBSyxHQUF1QixRQUFRLENBQUM7UUFDckMsYUFBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGtCQUFhLEdBQVUsSUFBSSxDQUFDO1FBRXJDLFNBQUksR0FBRztZQUNMLEdBQUcsRUFBQyxJQUFJO1lBQ1IsS0FBSyxFQUFDLElBQUk7WUFDVixJQUFJLEVBQUMsSUFBSTtTQUNWLENBQUM7UUFNRixVQUFLLEdBQVMsS0FBSyxDQUFDO1FBQ3BCLFVBQUssR0FBUyxLQUFLLENBQUM7SUFJcEIsQ0FBQztJQUVELGdEQUFlLEdBQWY7SUFFQSxDQUFDO0lBRUQsNENBQVcsR0FBWCxVQUFZLE9BQVc7UUFDckIsSUFBRyxPQUFPLENBQUMsT0FBTyxFQUFDO1lBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQy9EO1FBRUQsSUFBRyxPQUFPLENBQUMsT0FBTyxFQUFDO1lBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQy9EO1FBRUQsSUFBRyxPQUFPLENBQUMsSUFBSSxFQUFD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QUNiO1FBQVIsWUFBSyxFQUFFOztpRUFBNkI7SUFSMUIsc0JBQXNCO1FBbkNsQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsOCtDQWdDWDtTQUFZLENBQUM7eUNBd0JtQiwyQkFBZ0I7T0F2QnBDLHNCQUFzQixDQThHbEM7SUFBRCw2QkFBQztDQUFBLEFBOUdELElBOEdDO0FBOUdZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYkRhdGVTdHJ1Y3QgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBUaW1lVXRpbHNTZXJ2aWNlLCBJbnRlcnBvbGF0aW9uU2VydmljZSB9IGZyb20gJ21hcC13YWxkJztcblxuY29uc3QgTUlMTElTRUNPTkRTX1BFUl9EQVk9MjQqNjAqNjAqMTAwMDtcblxuZGVjbGFyZSB2YXIgUGxvdGx5OiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGUtc2VsZWN0aW9uJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZGF0ZS1jb250cm9sIGNvbnRhaW5lci1mbHVpZFwiPlxuICA8ZGl2ICpuZ0lmPVwic3R5bGUhPT0nYXJyb3dzJ1wiIGNsYXNzPVwicm93IG5vLWd1dHRlcnNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLTggZm9ybS1ncm91cC1pbmxpbmVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIGlucHV0LWdyb3VwLXNtXCI+XG4gICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiIHBsYWNlaG9sZGVyPVwieXl5eS1tbS1kZFwiXG4gICAgICAgICAgICAgICAgIG5hbWU9XCJkcFwiIFsobmdNb2RlbCldPVwiZGF0ZVN0cnVjdFwiIChuZ01vZGVsQ2hhbmdlKT1cImRhdGVTdHJ1Y3RDaGFuZ2VkKClcIlxuICAgICAgICAgICAgICAgICBuZ2JEYXRlcGlja2VyICNkPVwibmdiRGF0ZXBpY2tlclwiXG4gICAgICAgICAgICAgICAgIFttYXhEYXRlXT1cIm1heERhdGVTdHJ1Y3RcIiBbbWluRGF0ZV09XCJtaW5EYXRlU3RydWN0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCIgKGNsaWNrKT1cImQudG9nZ2xlKClcIiA+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNhbGVuZGFyXCI+PC9pPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPCEtLVxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0yXCIgPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCIgW2Rpc2FibGVkXT1cImF0TWF4XCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwibW92ZSgxKVwiPjxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIC0tPlxuICA8L2Rpdj5cblxuICA8ZGl2ICpuZ0lmPVwic3R5bGU9PT0nYXJyb3dzJ1wiPlxuICAgIDxkYXRlLWVsZW1lbnQgKm5nSWY9XCJuZWVkLmRheVwiICAgW3NyY109XCJkYXRlU3RydWN0XCIgW3Byb3BlcnR5XT1cIidkYXknXCIgW2xhYmVsXT1cIidEYXknXCJcbiAgICAgICAgICAgICAgICAgIFtzdGVwXT1cInN0ZXBEYXlzXCJcbiAgICAgICAgICAgICAgICAgIChjaGFuZ2VkKT1cImRhdGVTdHJ1Y3RDaGFuZ2VkKClcIj48L2RhdGUtZWxlbWVudD5cbiAgICA8ZGF0ZS1lbGVtZW50ICpuZ0lmPVwibmVlZC5tb250aFwiIFtzcmNdPVwiZGF0ZVN0cnVjdFwiIFtwcm9wZXJ0eV09XCInbW9udGgnXCIgW2xhYmVsXT1cIidNb250aCdcIlxuICAgICAgICAgICAgICAgICAgKGNoYW5nZWQpPVwiZGF0ZVN0cnVjdENoYW5nZWQoKVwiPjwvZGF0ZS1lbGVtZW50PlxuICAgIDxkYXRlLWVsZW1lbnQgKm5nSWY9XCJuZWVkLnllYXJcIiAgW3NyY109XCJkYXRlU3RydWN0XCIgW3Byb3BlcnR5XT1cIid5ZWFyJ1wiIFtsYWJlbF09XCInWWVhcidcIlxuICAgICAgICAgICAgICAgICAgKGNoYW5nZWQpPVwiZGF0ZVN0cnVjdENoYW5nZWQoKVwiPjwvZGF0ZS1lbGVtZW50PlxuICA8L2Rpdj5cbjwvZGl2PlxuYCxzdHlsZXM6IFtdfSlcbmV4cG9ydCBjbGFzcyBEYXRlU2VsZWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCAge1xuICBASW5wdXQoKSBkYXRlOiBEYXRlO1xuICBAT3V0cHV0KCkgZGF0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgdGltZXN0ZXA6IHN0cmluZztcbiAgQElucHV0KCkgbWluRGF0ZTogRGF0ZXxzdHJpbmc7XG4gIEBJbnB1dCgpIG1heERhdGU6IERhdGV8c3RyaW5nO1xuICBASW5wdXQoKSBzdHlsZTogKCdwb3B1cCd8J2Fycm93cycpID0gJ2Fycm93cyc7XG4gIEBJbnB1dCgpIHN0ZXBEYXlzID0gMTtcbiAgQElucHV0KCkgcmVmZXJlbmNlRGF0ZTpzdHJpbmcgPSBudWxsO1xuXG4gIG5lZWQgPSB7XG4gICAgZGF5OnRydWUsXG4gICAgbW9udGg6dHJ1ZSxcbiAgICB5ZWFyOnRydWVcbiAgfTtcblxuICBtaW5EYXRlU3RydWN0Ok5nYkRhdGVTdHJ1Y3Q7XG4gIG1heERhdGVTdHJ1Y3Q6TmdiRGF0ZVN0cnVjdDtcbiAgZGF0ZVN0cnVjdDpOZ2JEYXRlU3RydWN0O1xuXG4gIGF0TWF4OmJvb2xlYW49ZmFsc2U7XG4gIGF0TWluOmJvb2xlYW49ZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0aW1lVXRpbHM6IFRpbWVVdGlsc1NlcnZpY2Upe1xuXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcblxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczphbnkpe1xuICAgIGlmKGNoYW5nZXMubWluRGF0ZSl7XG4gICAgICB0aGlzLm1pbkRhdGVTdHJ1Y3QgPSB0aGlzLnRpbWVVdGlscy5jb252ZXJ0RGF0ZSh0aGlzLm1pbkRhdGUpO1xuICAgIH1cblxuICAgIGlmKGNoYW5nZXMubWF4RGF0ZSl7XG4gICAgICB0aGlzLm1heERhdGVTdHJ1Y3QgPSB0aGlzLnRpbWVVdGlscy5jb252ZXJ0RGF0ZSh0aGlzLm1heERhdGUpO1xuICAgIH1cblxuICAgIGlmKGNoYW5nZXMuZGF0ZSl7XG4gICAgICB0aGlzLmRhdGVTdHJ1Y3QgPSB0aGlzLnRpbWVVdGlscy5jb252ZXJ0RGF0ZSh0aGlzLmRhdGUpO1xuICAgIH1cblxuICAgIGlmKGNoYW5nZXMudGltZXN0ZXApe1xuICAgICAgdGhpcy5hc3Nlc3NEYXRlQ29tcG9uZW50cygpO1xuICAgIH1cbiAgICB0aGlzLmNoZWNrTGltaXRzKCk7XG4gIH1cblxuICBkYXRlU3RydWN0Q2hhbmdlZCgpe1xuICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKHRoaXMuZGF0ZVN0cnVjdC55ZWFyLHRoaXMuZGF0ZVN0cnVjdC5tb250aC0xLHRoaXMuZGF0ZVN0cnVjdC5kYXkpKTtcbiAgICAvLyB0aGlzLmRhdGUuc2V0VVRDRnVsbFllYXIodGhpcy5kYXRlU3RydWN0LnllYXIpXG4gICAgLy8gdGhpcy5kYXRlLnNldFVUQ01vbnRoKHRoaXMuZGF0ZVN0cnVjdC5tb250aC0xKVxuICAgIC8vIHRoaXMuZGF0ZS5zZXRVVENEYXRlKHRoaXMuZGF0ZVN0cnVjdC5kYXkpO1xuICAgIHRoaXMuY2hlY2tSZWZlcmVuY2UoKTtcbiAgICB0aGlzLmRhdGVDaGFuZ2UuZW1pdCh0aGlzLmRhdGUpO1xuICB9XG5cbiAgYXNzZXNzRGF0ZUNvbXBvbmVudHMoKXtcbiAgICB0aGlzLm5lZWQuZGF5ID0gdGhpcy5uZWVkLm1vbnRoID0gdGhpcy5uZWVkLnllYXIgPSB0cnVlO1xuICAgIGlmKHRoaXMudGltZXN0ZXA9PT0nZGFpbHknKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5uZWVkLmRheSA9IGZhbHNlO1xuXG4gICAgaWYodGhpcy50aW1lc3RlcD09PSdhbm51YWwnKSB7XG4gICAgICB0aGlzLm5lZWQubW9udGggPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBtb3ZlKG46bnVtYmVyKXtcbiAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZSh0aGlzLmRhdGUmJnRoaXMuZGF0ZS5nZXRUaW1lKCkpO1xuICAgIHRoaXMuZGF0ZS5zZXREYXRlKHRoaXMuZGF0ZS5nZXREYXRlKCkrbik7XG4gICAgdGhpcy5vbkRhdGVDaGFuZ2VkKCk7XG4gICAgdGhpcy5kYXRlQ2hhbmdlLmVtaXQodGhpcy5kYXRlKTtcbiAgfVxuXG4gIG9uRGF0ZUNoYW5nZWQoKXtcbiAgICB0aGlzLmNoZWNrTGltaXRzKCk7XG4gIH1cblxuICBjaGVja0xpbWl0cygpe1xuICAgIHRoaXMuYXRNYXggPSB0aGlzLnRpbWVVdGlscy5kYXRlc0VxdWFsKHRoaXMuZGF0ZVN0cnVjdCx0aGlzLm1heERhdGVTdHJ1Y3QpO1xuICAgIHRoaXMuYXRNaW4gPSB0aGlzLnRpbWVVdGlscy5kYXRlc0VxdWFsKHRoaXMuZGF0ZVN0cnVjdCx0aGlzLm1pbkRhdGVTdHJ1Y3QpO1xuICB9XG4gIC8vIFRPRE8gbm90IGVuZm9yY2luZyBsaW1pdHMgZXRjLi4uXG5cbiAgY2hlY2tSZWZlcmVuY2UoKTogYW55IHtcbiAgICBpZighdGhpcy5yZWZlcmVuY2VEYXRlKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcmVmQ29tcG9uZW50cyA9IEludGVycG9sYXRpb25TZXJ2aWNlLmludGVycG9sYXRlKHRoaXMucmVmZXJlbmNlRGF0ZSx7XG4gICAgICB5ZWFyOnRoaXMuZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgbW9udGg6dGhpcy5kYXRlLmdldE1vbnRoKCkrMSxcbiAgICAgIGRhdGU6dGhpcy5kYXRlLmdldERhdGUoKVxuICAgIH0pLnNwbGl0KCctJykubWFwKHM9PitzKTtcblxuICAgIGxldCBjdXJyZW50UmVmID0gbmV3IERhdGUoRGF0ZS5VVEMocmVmQ29tcG9uZW50c1swXSxyZWZDb21wb25lbnRzWzFdLTEscmVmQ29tcG9uZW50c1syXSkpO1xuXG4gICAgY29uc29sZS5sb2coJ2N1cnJlbnRSZWYnLGN1cnJlbnRSZWYpO1xuICAgIGNvbnNvbGUubG9nKCdjdXJyZW50RGF0ZScsdGhpcy5kYXRlKTtcbiAgICBsZXQgdGltZVNwYW4gPSBNSUxMSVNFQ09ORFNfUEVSX0RBWSAqIHRoaXMuc3RlcERheXM7XG5cbiAgICBsZXQgZGF5cyA9ICh0aGlzLmRhdGUuZ2V0VGltZSgpIC0gY3VycmVudFJlZi5nZXRUaW1lKCkpL3RpbWVTcGFuO1xuICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnRSZWYuZ2V0VGltZSgpICsgTWF0aC5yb3VuZChkYXlzKSp0aW1lU3Bhbik7XG4gICAgdGhpcy5kYXRlU3RydWN0ID0gdGhpcy50aW1lVXRpbHMuY29udmVydERhdGUodGhpcy5kYXRlKTtcbiAgfVxuXG59XG4iXX0=