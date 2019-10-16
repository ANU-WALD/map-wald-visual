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
const map_wald_1 = require("map-wald");
const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;
let DateSelectionComponent = class DateSelectionComponent {
    constructor(timeUtils) {
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
    ngAfterViewInit() {
    }
    ngOnChanges(changes) {
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
    }
    dateStructChanged() {
        this.date = new Date(Date.UTC(this.dateStruct.year, this.dateStruct.month - 1, this.dateStruct.day));
        // this.date.setUTCFullYear(this.dateStruct.year)
        // this.date.setUTCMonth(this.dateStruct.month-1)
        // this.date.setUTCDate(this.dateStruct.day);
        this.checkReference();
        this.dateChange.emit(this.date);
    }
    assessDateComponents() {
        this.need.day = this.need.month = this.need.year = true;
        if (this.timestep === 'daily') {
            return;
        }
        this.need.day = false;
        if (this.timestep === 'annual') {
            this.need.month = false;
        }
    }
    move(n) {
        this.date = new Date(this.date && this.date.getTime());
        this.date.setDate(this.date.getDate() + n);
        this.onDateChanged();
        this.dateChange.emit(this.date);
    }
    onDateChanged() {
        this.checkLimits();
    }
    checkLimits() {
        this.atMax = this.timeUtils.datesEqual(this.dateStruct, this.maxDateStruct);
        this.atMin = this.timeUtils.datesEqual(this.dateStruct, this.minDateStruct);
    }
    // TODO not enforcing limits etc...
    checkReference() {
        if (!this.referenceDate) {
            return;
        }
        let refComponents = map_wald_1.InterpolationService.interpolate(this.referenceDate, {
            year: this.date.getFullYear(),
            month: this.date.getMonth() + 1,
            date: this.date.getDate()
        }).split('-').map(s => +s);
        let currentRef = new Date(Date.UTC(refComponents[0], refComponents[1] - 1, refComponents[2]));
        console.log('currentRef', currentRef);
        console.log('currentDate', this.date);
        let timeSpan = MILLISECONDS_PER_DAY * this.stepDays;
        let days = (this.date.getTime() - currentRef.getTime()) / timeSpan;
        this.date = new Date(currentRef.getTime() + Math.round(days) * timeSpan);
        this.dateStruct = this.timeUtils.convertDate(this.date);
    }
};
DateSelectionComponent.ctorParameters = () => [
    { type: map_wald_1.TimeUtilsService }
];
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
        template: `<div class="date-control container-fluid">
  <div *ngIf="style!=='arrows'" class="row no-gutters">
    <div class="col-8 form-group-inline">
        <div class="input-group input-group-sm">
          <input class="form-control form-control-sm" placeholder="yyyy-mm-dd"
                 name="dp" [(ngModel)]="dateStruct" (ngModelChange)="dateStructChanged()"
                 ngbDatepicker #d="ngbDatepicker"
                 [maxDate]="maxDateStruct" [minDate]="minDateStruct">
          <div class="input-group-addon" (click)="d.toggle()" >
            <i class="fa fa-calendar"></i>
          </div>
        </div>
      </div>

    <!--
      <div class="col-2" >
        <button class="btn btn-secondary btn-sm" [disabled]="atMax"
                (click)="move(1)"><i class="fa fa-chevron-right"></i></button>
      </div>
    -->
  </div>

  <div *ngIf="style==='arrows'">
    <date-element *ngIf="need.day"   [src]="dateStruct" [property]="'day'" [label]="'Day'"
                  [step]="stepDays"
                  (changed)="dateStructChanged()"></date-element>
    <date-element *ngIf="need.month" [src]="dateStruct" [property]="'month'" [label]="'Month'"
                  (changed)="dateStructChanged()"></date-element>
    <date-element *ngIf="need.year"  [src]="dateStruct" [property]="'year'" [label]="'Year'"
                  (changed)="dateStructChanged()"></date-element>
  </div>
</div>
`
    }),
    __metadata("design:paramtypes", [map_wald_1.TimeUtilsService])
], DateSelectionComponent);
exports.DateSelectionComponent = DateSelectionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1zZWxlY3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtdmlzdWFsLyIsInNvdXJjZXMiOlsiZGF0ZS1zZWxlY3Rpb24vZGF0ZS1zZWxlY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQTZHO0FBRTdHLHVDQUFrRTtBQUVsRSxNQUFNLG9CQUFvQixHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLElBQUksQ0FBQztBQXVDekMsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUF1QmpDLFlBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBckJyQyxlQUFVLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFJakMsVUFBSyxHQUF1QixRQUFRLENBQUM7UUFDckMsYUFBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGtCQUFhLEdBQVUsSUFBSSxDQUFDO1FBRXJDLFNBQUksR0FBRztZQUNMLEdBQUcsRUFBQyxJQUFJO1lBQ1IsS0FBSyxFQUFDLElBQUk7WUFDVixJQUFJLEVBQUMsSUFBSTtTQUNWLENBQUM7UUFNRixVQUFLLEdBQVMsS0FBSyxDQUFDO1FBQ3BCLFVBQUssR0FBUyxLQUFLLENBQUM7SUFJcEIsQ0FBQztJQUVELGVBQWU7SUFFZixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQVc7UUFDckIsSUFBRyxPQUFPLENBQUMsT0FBTyxFQUFDO1lBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQy9EO1FBRUQsSUFBRyxPQUFPLENBQUMsT0FBTyxFQUFDO1lBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQy9EO1FBRUQsSUFBRyxP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Ozs2REFBNkI7QUFSMUIsc0JBQXNCO0lBbkNsQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBZ0NYO0tBQVksQ0FBQztxQ0F3Qm1CLDJCQUFnQjtHQXZCcEMsc0JBQXNCLENBOEdsQztBQTlHWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JEYXRlU3RydWN0IH0gZnJvbSBcIkBuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwXCI7XG5pbXBvcnQgeyBUaW1lVXRpbHNTZXJ2aWNlLCBJbnRlcnBvbGF0aW9uU2VydmljZSB9IGZyb20gXCJtYXAtd2FsZFwiO1xuXG5jb25zdCBNSUxMSVNFQ09ORFNfUEVSX0RBWT0yNCo2MCo2MCoxMDAwO1xuXG5kZWNsYXJlIHZhciBQbG90bHk6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZS1zZWxlY3Rpb24nLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJkYXRlLWNvbnRyb2wgY29udGFpbmVyLWZsdWlkXCI+XG4gIDxkaXYgKm5nSWY9XCJzdHlsZSE9PSdhcnJvd3MnXCIgY2xhc3M9XCJyb3cgbm8tZ3V0dGVyc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtOCBmb3JtLWdyb3VwLWlubGluZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc21cIj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCIgcGxhY2Vob2xkZXI9XCJ5eXl5LW1tLWRkXCJcbiAgICAgICAgICAgICAgICAgbmFtZT1cImRwXCIgWyhuZ01vZGVsKV09XCJkYXRlU3RydWN0XCIgKG5nTW9kZWxDaGFuZ2UpPVwiZGF0ZVN0cnVjdENoYW5nZWQoKVwiXG4gICAgICAgICAgICAgICAgIG5nYkRhdGVwaWNrZXIgI2Q9XCJuZ2JEYXRlcGlja2VyXCJcbiAgICAgICAgICAgICAgICAgW21heERhdGVdPVwibWF4RGF0ZVN0cnVjdFwiIFttaW5EYXRlXT1cIm1pbkRhdGVTdHJ1Y3RcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIiAoY2xpY2spPVwiZC50b2dnbGUoKVwiID5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2FsZW5kYXJcIj48L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICA8IS0tXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTJcIiA+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc21cIiBbZGlzYWJsZWRdPVwiYXRNYXhcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJtb3ZlKDEpXCI+PGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgLS0+XG4gIDwvZGl2PlxuXG4gIDxkaXYgKm5nSWY9XCJzdHlsZT09PSdhcnJvd3MnXCI+XG4gICAgPGRhdGUtZWxlbWVudCAqbmdJZj1cIm5lZWQuZGF5XCIgICBbc3JjXT1cImRhdGVTdHJ1Y3RcIiBbcHJvcGVydHldPVwiJ2RheSdcIiBbbGFiZWxdPVwiJ0RheSdcIlxuICAgICAgICAgICAgICAgICAgW3N0ZXBdPVwic3RlcERheXNcIlxuICAgICAgICAgICAgICAgICAgKGNoYW5nZWQpPVwiZGF0ZVN0cnVjdENoYW5nZWQoKVwiPjwvZGF0ZS1lbGVtZW50PlxuICAgIDxkYXRlLWVsZW1lbnQgKm5nSWY9XCJuZWVkLm1vbnRoXCIgW3NyY109XCJkYXRlU3RydWN0XCIgW3Byb3BlcnR5XT1cIidtb250aCdcIiBbbGFiZWxdPVwiJ01vbnRoJ1wiXG4gICAgICAgICAgICAgICAgICAoY2hhbmdlZCk9XCJkYXRlU3RydWN0Q2hhbmdlZCgpXCI+PC9kYXRlLWVsZW1lbnQ+XG4gICAgPGRhdGUtZWxlbWVudCAqbmdJZj1cIm5lZWQueWVhclwiICBbc3JjXT1cImRhdGVTdHJ1Y3RcIiBbcHJvcGVydHldPVwiJ3llYXInXCIgW2xhYmVsXT1cIidZZWFyJ1wiXG4gICAgICAgICAgICAgICAgICAoY2hhbmdlZCk9XCJkYXRlU3RydWN0Q2hhbmdlZCgpXCI+PC9kYXRlLWVsZW1lbnQ+XG4gIDwvZGl2PlxuPC9kaXY+XG5gLHN0eWxlczogW119KVxuZXhwb3J0IGNsYXNzIERhdGVTZWxlY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0ICB7XG4gIEBJbnB1dCgpIGRhdGU6IERhdGU7XG4gIEBPdXRwdXQoKSBkYXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSB0aW1lc3RlcDogc3RyaW5nO1xuICBASW5wdXQoKSBtaW5EYXRlOiBEYXRlfHN0cmluZztcbiAgQElucHV0KCkgbWF4RGF0ZTogRGF0ZXxzdHJpbmc7XG4gIEBJbnB1dCgpIHN0eWxlOiAoJ3BvcHVwJ3wnYXJyb3dzJykgPSAnYXJyb3dzJztcbiAgQElucHV0KCkgc3RlcERheXMgPSAxO1xuICBASW5wdXQoKSByZWZlcmVuY2VEYXRlOnN0cmluZyA9IG51bGw7XG5cbiAgbmVlZCA9IHtcbiAgICBkYXk6dHJ1ZSxcbiAgICBtb250aDp0cnVlLFxuICAgIHllYXI6dHJ1ZVxuICB9O1xuXG4gIG1pbkRhdGVTdHJ1Y3Q6TmdiRGF0ZVN0cnVjdDtcbiAgbWF4RGF0ZVN0cnVjdDpOZ2JEYXRlU3RydWN0O1xuICBkYXRlU3RydWN0Ok5nYkRhdGVTdHJ1Y3Q7XG5cbiAgYXRNYXg6Ym9vbGVhbj1mYWxzZTtcbiAgYXRNaW46Ym9vbGVhbj1mYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRpbWVVdGlsczogVGltZVV0aWxzU2VydmljZSl7XG5cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuXG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOmFueSl7XG4gICAgaWYoY2hhbmdlcy5taW5EYXRlKXtcbiAgICAgIHRoaXMubWluRGF0ZVN0cnVjdCA9IHRoaXMudGltZVV0aWxzLmNvbnZlcnREYXRlKHRoaXMubWluRGF0ZSk7XG4gICAgfVxuXG4gICAgaWYoY2hhbmdlcy5tYXhEYXRlKXtcbiAgICAgIHRoaXMubWF4RGF0ZVN0cnVjdCA9IHRoaXMudGltZVV0aWxzLmNvbnZlcnREYXRlKHRoaXMubWF4RGF0ZSk7XG4gICAgfVxuXG4gICAgaWYoY2hhbmdlcy5kYXRlKXtcbiAgICAgIHRoaXMuZGF0ZVN0cnVjdCA9IHRoaXMudGltZVV0aWxzLmNvbnZlcnREYXRlKHRoaXMuZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYoY2hhbmdlcy50aW1lc3RlcCl7XG4gICAgICB0aGlzLmFzc2Vzc0RhdGVDb21wb25lbnRzKCk7XG4gICAgfVxuICAgIHRoaXMuY2hlY2tMaW1pdHMoKTtcbiAgfVxuXG4gIGRhdGVTdHJ1Y3RDaGFuZ2VkKCl7XG4gICAgdGhpcy5kYXRlID0gbmV3IERhdGUoRGF0ZS5VVEModGhpcy5kYXRlU3RydWN0LnllYXIsdGhpcy5kYXRlU3RydWN0Lm1vbnRoLTEsdGhpcy5kYXRlU3RydWN0LmRheSkpO1xuICAgIC8vIHRoaXMuZGF0ZS5zZXRVVENGdWxsWWVhcih0aGlzLmRhdGVTdHJ1Y3QueWVhcilcbiAgICAvLyB0aGlzLmRhdGUuc2V0VVRDTW9udGgodGhpcy5kYXRlU3RydWN0Lm1vbnRoLTEpXG4gICAgLy8gdGhpcy5kYXRlLnNldFVUQ0RhdGUodGhpcy5kYXRlU3RydWN0LmRheSk7XG4gICAgdGhpcy5jaGVja1JlZmVyZW5jZSgpO1xuICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KHRoaXMuZGF0ZSk7XG4gIH1cblxuICBhc3Nlc3NEYXRlQ29tcG9uZW50cygpe1xuICAgIHRoaXMubmVlZC5kYXkgPSB0aGlzLm5lZWQubW9udGggPSB0aGlzLm5lZWQueWVhciA9IHRydWU7XG4gICAgaWYodGhpcy50aW1lc3RlcD09PSdkYWlseScpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm5lZWQuZGF5ID0gZmFsc2U7XG5cbiAgICBpZih0aGlzLnRpbWVzdGVwPT09J2FubnVhbCcpIHtcbiAgICAgIHRoaXMubmVlZC5tb250aCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG1vdmUobjpudW1iZXIpe1xuICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKHRoaXMuZGF0ZSYmdGhpcy5kYXRlLmdldFRpbWUoKSk7XG4gICAgdGhpcy5kYXRlLnNldERhdGUodGhpcy5kYXRlLmdldERhdGUoKStuKTtcbiAgICB0aGlzLm9uRGF0ZUNoYW5nZWQoKTtcbiAgICB0aGlzLmRhdGVDaGFuZ2UuZW1pdCh0aGlzLmRhdGUpO1xuICB9XG5cbiAgb25EYXRlQ2hhbmdlZCgpe1xuICAgIHRoaXMuY2hlY2tMaW1pdHMoKTtcbiAgfVxuXG4gIGNoZWNrTGltaXRzKCl7XG4gICAgdGhpcy5hdE1heCA9IHRoaXMudGltZVV0aWxzLmRhdGVzRXF1YWwodGhpcy5kYXRlU3RydWN0LHRoaXMubWF4RGF0ZVN0cnVjdCk7XG4gICAgdGhpcy5hdE1pbiA9IHRoaXMudGltZVV0aWxzLmRhdGVzRXF1YWwodGhpcy5kYXRlU3RydWN0LHRoaXMubWluRGF0ZVN0cnVjdCk7XG4gIH1cbiAgLy8gVE9ETyBub3QgZW5mb3JjaW5nIGxpbWl0cyBldGMuLi5cblxuICBjaGVja1JlZmVyZW5jZSgpOiBhbnkge1xuICAgIGlmKCF0aGlzLnJlZmVyZW5jZURhdGUpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCByZWZDb21wb25lbnRzID0gSW50ZXJwb2xhdGlvblNlcnZpY2UuaW50ZXJwb2xhdGUodGhpcy5yZWZlcmVuY2VEYXRlLHtcbiAgICAgIHllYXI6dGhpcy5kYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICBtb250aDp0aGlzLmRhdGUuZ2V0TW9udGgoKSsxLFxuICAgICAgZGF0ZTp0aGlzLmRhdGUuZ2V0RGF0ZSgpXG4gICAgfSkuc3BsaXQoJy0nKS5tYXAocz0+K3MpO1xuXG4gICAgbGV0IGN1cnJlbnRSZWYgPSBuZXcgRGF0ZShEYXRlLlVUQyhyZWZDb21wb25lbnRzWzBdLHJlZkNvbXBvbmVudHNbMV0tMSxyZWZDb21wb25lbnRzWzJdKSk7XG5cbiAgICBjb25zb2xlLmxvZygnY3VycmVudFJlZicsY3VycmVudFJlZik7XG4gICAgY29uc29sZS5sb2coJ2N1cnJlbnREYXRlJyx0aGlzLmRhdGUpO1xuICAgIGxldCB0aW1lU3BhbiA9IE1JTExJU0VDT05EU19QRVJfREFZICogdGhpcy5zdGVwRGF5cztcblxuICAgIGxldCBkYXlzID0gKHRoaXMuZGF0ZS5nZXRUaW1lKCkgLSBjdXJyZW50UmVmLmdldFRpbWUoKSkvdGltZVNwYW47XG4gICAgdGhpcy5kYXRlID0gbmV3IERhdGUoY3VycmVudFJlZi5nZXRUaW1lKCkgKyBNYXRoLnJvdW5kKGRheXMpKnRpbWVTcGFuKTtcbiAgICB0aGlzLmRhdGVTdHJ1Y3QgPSB0aGlzLnRpbWVVdGlscy5jb252ZXJ0RGF0ZSh0aGlzLmRhdGUpO1xuICB9XG5cbn1cbiJdfQ==