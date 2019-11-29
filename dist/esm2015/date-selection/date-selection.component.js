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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1zZWxlY3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtdmlzdWFsLyIsInNvdXJjZXMiOlsiZGF0ZS1zZWxlY3Rpb24vZGF0ZS1zZWxlY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQTZHO0FBRTdHLHVDQUFrRTtBQUVsRSxNQUFNLG9CQUFvQixHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLElBQUksQ0FBQztBQXVDekMsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUF1QmpDLFlBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBckJyQyxlQUFVLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFJakMsVUFBSyxHQUF1QixRQUFRLENBQUM7UUFDckMsYUFBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGtCQUFhLEdBQVUsSUFBSSxDQUFDO1FBRXJDLFNBQUksR0FBRztZQUNMLEdBQUcsRUFBQyxJQUFJO1lBQ1IsS0FBSyxFQUFDLElBQUk7WUFDVixJQUFJLEVBQUMsSUFBSTtTQUNWLENBQUM7UUFNRixVQUFLLEdBQVMsS0FBSyxDQUFDO1FBQ3BCLFVBQUssR0FBUyxLQUFLLENBQUM7SUFJcEIsQ0FBQztJQUVELGVBQWU7SUFFZixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQVc7UUFDckIsSUFBRyxPQUFPLENBQUMsT0FBTyxFQUFDO1lBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQy9EO1FBRUQsSUFBRyxPQUFPLENBQUMsT0FBTyxFQUFDO1lBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQy9EO1FBRUQsSUFBRyxP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Ozs2REFBNkI7QUFSMUIsc0JBQXNCO0lBbkNsQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBZ0NYO0tBQVksQ0FBQztxQ0F3Qm1CLDJCQUFnQjtHQXZCcEMsc0JBQXNCLENBOEdsQztBQTlHWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JEYXRlU3RydWN0IH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgVGltZVV0aWxzU2VydmljZSwgSW50ZXJwb2xhdGlvblNlcnZpY2UgfSBmcm9tICdtYXAtd2FsZCc7XG5cbmNvbnN0IE1JTExJU0VDT05EU19QRVJfREFZPTI0KjYwKjYwKjEwMDA7XG5cbmRlY2xhcmUgdmFyIFBsb3RseTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlLXNlbGVjdGlvbicsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImRhdGUtY29udHJvbCBjb250YWluZXItZmx1aWRcIj5cbiAgPGRpdiAqbmdJZj1cInN0eWxlIT09J2Fycm93cydcIiBjbGFzcz1cInJvdyBuby1ndXR0ZXJzXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC04IGZvcm0tZ3JvdXAtaW5saW5lXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1zbVwiPlxuICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIiBwbGFjZWhvbGRlcj1cInl5eXktbW0tZGRcIlxuICAgICAgICAgICAgICAgICBuYW1lPVwiZHBcIiBbKG5nTW9kZWwpXT1cImRhdGVTdHJ1Y3RcIiAobmdNb2RlbENoYW5nZSk9XCJkYXRlU3RydWN0Q2hhbmdlZCgpXCJcbiAgICAgICAgICAgICAgICAgbmdiRGF0ZXBpY2tlciAjZD1cIm5nYkRhdGVwaWNrZXJcIlxuICAgICAgICAgICAgICAgICBbbWF4RGF0ZV09XCJtYXhEYXRlU3RydWN0XCIgW21pbkRhdGVdPVwibWluRGF0ZVN0cnVjdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiIChjbGljayk9XCJkLnRvZ2dsZSgpXCIgPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jYWxlbmRhclwiPjwvaT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIDwhLS1cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMlwiID5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiIFtkaXNhYmxlZF09XCJhdE1heFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIm1vdmUoMSlcIj48aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAtLT5cbiAgPC9kaXY+XG5cbiAgPGRpdiAqbmdJZj1cInN0eWxlPT09J2Fycm93cydcIj5cbiAgICA8ZGF0ZS1lbGVtZW50ICpuZ0lmPVwibmVlZC5kYXlcIiAgIFtzcmNdPVwiZGF0ZVN0cnVjdFwiIFtwcm9wZXJ0eV09XCInZGF5J1wiIFtsYWJlbF09XCInRGF5J1wiXG4gICAgICAgICAgICAgICAgICBbc3RlcF09XCJzdGVwRGF5c1wiXG4gICAgICAgICAgICAgICAgICAoY2hhbmdlZCk9XCJkYXRlU3RydWN0Q2hhbmdlZCgpXCI+PC9kYXRlLWVsZW1lbnQ+XG4gICAgPGRhdGUtZWxlbWVudCAqbmdJZj1cIm5lZWQubW9udGhcIiBbc3JjXT1cImRhdGVTdHJ1Y3RcIiBbcHJvcGVydHldPVwiJ21vbnRoJ1wiIFtsYWJlbF09XCInTW9udGgnXCJcbiAgICAgICAgICAgICAgICAgIChjaGFuZ2VkKT1cImRhdGVTdHJ1Y3RDaGFuZ2VkKClcIj48L2RhdGUtZWxlbWVudD5cbiAgICA8ZGF0ZS1lbGVtZW50ICpuZ0lmPVwibmVlZC55ZWFyXCIgIFtzcmNdPVwiZGF0ZVN0cnVjdFwiIFtwcm9wZXJ0eV09XCIneWVhcidcIiBbbGFiZWxdPVwiJ1llYXInXCJcbiAgICAgICAgICAgICAgICAgIChjaGFuZ2VkKT1cImRhdGVTdHJ1Y3RDaGFuZ2VkKClcIj48L2RhdGUtZWxlbWVudD5cbiAgPC9kaXY+XG48L2Rpdj5cbmAsc3R5bGVzOiBbXX0pXG5leHBvcnQgY2xhc3MgRGF0ZVNlbGVjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQgIHtcbiAgQElucHV0KCkgZGF0ZTogRGF0ZTtcbiAgQE91dHB1dCgpIGRhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIHRpbWVzdGVwOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1pbkRhdGU6IERhdGV8c3RyaW5nO1xuICBASW5wdXQoKSBtYXhEYXRlOiBEYXRlfHN0cmluZztcbiAgQElucHV0KCkgc3R5bGU6ICgncG9wdXAnfCdhcnJvd3MnKSA9ICdhcnJvd3MnO1xuICBASW5wdXQoKSBzdGVwRGF5cyA9IDE7XG4gIEBJbnB1dCgpIHJlZmVyZW5jZURhdGU6c3RyaW5nID0gbnVsbDtcblxuICBuZWVkID0ge1xuICAgIGRheTp0cnVlLFxuICAgIG1vbnRoOnRydWUsXG4gICAgeWVhcjp0cnVlXG4gIH07XG5cbiAgbWluRGF0ZVN0cnVjdDpOZ2JEYXRlU3RydWN0O1xuICBtYXhEYXRlU3RydWN0Ok5nYkRhdGVTdHJ1Y3Q7XG4gIGRhdGVTdHJ1Y3Q6TmdiRGF0ZVN0cnVjdDtcblxuICBhdE1heDpib29sZWFuPWZhbHNlO1xuICBhdE1pbjpib29sZWFuPWZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGltZVV0aWxzOiBUaW1lVXRpbHNTZXJ2aWNlKXtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG5cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6YW55KXtcbiAgICBpZihjaGFuZ2VzLm1pbkRhdGUpe1xuICAgICAgdGhpcy5taW5EYXRlU3RydWN0ID0gdGhpcy50aW1lVXRpbHMuY29udmVydERhdGUodGhpcy5taW5EYXRlKTtcbiAgICB9XG5cbiAgICBpZihjaGFuZ2VzLm1heERhdGUpe1xuICAgICAgdGhpcy5tYXhEYXRlU3RydWN0ID0gdGhpcy50aW1lVXRpbHMuY29udmVydERhdGUodGhpcy5tYXhEYXRlKTtcbiAgICB9XG5cbiAgICBpZihjaGFuZ2VzLmRhdGUpe1xuICAgICAgdGhpcy5kYXRlU3RydWN0ID0gdGhpcy50aW1lVXRpbHMuY29udmVydERhdGUodGhpcy5kYXRlKTtcbiAgICB9XG5cbiAgICBpZihjaGFuZ2VzLnRpbWVzdGVwKXtcbiAgICAgIHRoaXMuYXNzZXNzRGF0ZUNvbXBvbmVudHMoKTtcbiAgICB9XG4gICAgdGhpcy5jaGVja0xpbWl0cygpO1xuICB9XG5cbiAgZGF0ZVN0cnVjdENoYW5nZWQoKXtcbiAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyh0aGlzLmRhdGVTdHJ1Y3QueWVhcix0aGlzLmRhdGVTdHJ1Y3QubW9udGgtMSx0aGlzLmRhdGVTdHJ1Y3QuZGF5KSk7XG4gICAgLy8gdGhpcy5kYXRlLnNldFVUQ0Z1bGxZZWFyKHRoaXMuZGF0ZVN0cnVjdC55ZWFyKVxuICAgIC8vIHRoaXMuZGF0ZS5zZXRVVENNb250aCh0aGlzLmRhdGVTdHJ1Y3QubW9udGgtMSlcbiAgICAvLyB0aGlzLmRhdGUuc2V0VVRDRGF0ZSh0aGlzLmRhdGVTdHJ1Y3QuZGF5KTtcbiAgICB0aGlzLmNoZWNrUmVmZXJlbmNlKCk7XG4gICAgdGhpcy5kYXRlQ2hhbmdlLmVtaXQodGhpcy5kYXRlKTtcbiAgfVxuXG4gIGFzc2Vzc0RhdGVDb21wb25lbnRzKCl7XG4gICAgdGhpcy5uZWVkLmRheSA9IHRoaXMubmVlZC5tb250aCA9IHRoaXMubmVlZC55ZWFyID0gdHJ1ZTtcbiAgICBpZih0aGlzLnRpbWVzdGVwPT09J2RhaWx5Jyl7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubmVlZC5kYXkgPSBmYWxzZTtcblxuICAgIGlmKHRoaXMudGltZXN0ZXA9PT0nYW5udWFsJykge1xuICAgICAgdGhpcy5uZWVkLm1vbnRoID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgbW92ZShuOm51bWJlcil7XG4gICAgdGhpcy5kYXRlID0gbmV3IERhdGUodGhpcy5kYXRlJiZ0aGlzLmRhdGUuZ2V0VGltZSgpKTtcbiAgICB0aGlzLmRhdGUuc2V0RGF0ZSh0aGlzLmRhdGUuZ2V0RGF0ZSgpK24pO1xuICAgIHRoaXMub25EYXRlQ2hhbmdlZCgpO1xuICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KHRoaXMuZGF0ZSk7XG4gIH1cblxuICBvbkRhdGVDaGFuZ2VkKCl7XG4gICAgdGhpcy5jaGVja0xpbWl0cygpO1xuICB9XG5cbiAgY2hlY2tMaW1pdHMoKXtcbiAgICB0aGlzLmF0TWF4ID0gdGhpcy50aW1lVXRpbHMuZGF0ZXNFcXVhbCh0aGlzLmRhdGVTdHJ1Y3QsdGhpcy5tYXhEYXRlU3RydWN0KTtcbiAgICB0aGlzLmF0TWluID0gdGhpcy50aW1lVXRpbHMuZGF0ZXNFcXVhbCh0aGlzLmRhdGVTdHJ1Y3QsdGhpcy5taW5EYXRlU3RydWN0KTtcbiAgfVxuICAvLyBUT0RPIG5vdCBlbmZvcmNpbmcgbGltaXRzIGV0Yy4uLlxuXG4gIGNoZWNrUmVmZXJlbmNlKCk6IGFueSB7XG4gICAgaWYoIXRoaXMucmVmZXJlbmNlRGF0ZSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHJlZkNvbXBvbmVudHMgPSBJbnRlcnBvbGF0aW9uU2VydmljZS5pbnRlcnBvbGF0ZSh0aGlzLnJlZmVyZW5jZURhdGUse1xuICAgICAgeWVhcjp0aGlzLmRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgIG1vbnRoOnRoaXMuZGF0ZS5nZXRNb250aCgpKzEsXG4gICAgICBkYXRlOnRoaXMuZGF0ZS5nZXREYXRlKClcbiAgICB9KS5zcGxpdCgnLScpLm1hcChzPT4rcyk7XG5cbiAgICBsZXQgY3VycmVudFJlZiA9IG5ldyBEYXRlKERhdGUuVVRDKHJlZkNvbXBvbmVudHNbMF0scmVmQ29tcG9uZW50c1sxXS0xLHJlZkNvbXBvbmVudHNbMl0pKTtcblxuICAgIGNvbnNvbGUubG9nKCdjdXJyZW50UmVmJyxjdXJyZW50UmVmKTtcbiAgICBjb25zb2xlLmxvZygnY3VycmVudERhdGUnLHRoaXMuZGF0ZSk7XG4gICAgbGV0IHRpbWVTcGFuID0gTUlMTElTRUNPTkRTX1BFUl9EQVkgKiB0aGlzLnN0ZXBEYXlzO1xuXG4gICAgbGV0IGRheXMgPSAodGhpcy5kYXRlLmdldFRpbWUoKSAtIGN1cnJlbnRSZWYuZ2V0VGltZSgpKS90aW1lU3BhbjtcbiAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZShjdXJyZW50UmVmLmdldFRpbWUoKSArIE1hdGgucm91bmQoZGF5cykqdGltZVNwYW4pO1xuICAgIHRoaXMuZGF0ZVN0cnVjdCA9IHRoaXMudGltZVV0aWxzLmNvbnZlcnREYXRlKHRoaXMuZGF0ZSk7XG4gIH1cblxufVxuIl19