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
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const store = require("store");
let OneTimeSplashComponent = class OneTimeSplashComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.label = 'About';
        this.hideMessage = 'Understood, I don’t need to see this again';
    }
    storageKey() {
        if (!this.application) {
            return null;
        }
        return this.application + '-splash-skip';
    }
    ngAfterViewInit() {
        setTimeout(() => {
            const key = this.storageKey();
            if (key) {
                this.doNotShow = store.get(key, false);
            }
            if (!this.doNotShow) {
                this.show();
            }
        });
    }
    show() {
        this.current = this.modalService.open(this.splashTemplate, {
            size: 'lg',
            windowClass: this.klass
        });
    }
    close() {
        if (!this.current) {
            return;
        }
        this.current.close();
        this.current = null;
    }
    doNotShowClicked() {
        const key = this.storageKey();
        if (!key) {
            return;
        }
        store.set(key, this.doNotShow);
    }
};
OneTimeSplashComponent.ctorParameters = () => [
    { type: ng_bootstrap_1.NgbModal }
];
__decorate([
    core_1.ViewChild('splashTemplate', { static: false }),
    __metadata("design:type", Object)
], OneTimeSplashComponent.prototype, "splashTemplate", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], OneTimeSplashComponent.prototype, "application", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], OneTimeSplashComponent.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], OneTimeSplashComponent.prototype, "hideMessage", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], OneTimeSplashComponent.prototype, "klass", void 0);
OneTimeSplashComponent = __decorate([
    core_1.Component({
        selector: 'one-time-splash',
        template: `<ng-template #splashTemplate let-c="close" let-d="dismiss">
  <div class="modal-header">
    <h4 class="modal-title">
      {{label}}</h4>
    <button type="button" class="close" aria-label="Close" (click)="d('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <ng-content></ng-content>
  </div>
  <div class="modal-footer">
    <label *ngIf="application">
      <input type="checkbox" [(ngModel)]="doNotShow" (ngModelChange)="doNotShowClicked()">
      &nbsp; {{hideMessage}}
    </label>
    <button type="button" class="btn btn-secondary" (click)="c('Close click')">Close</button>
  </div>
  </ng-template>
`,
        styles: [``]
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal])
], OneTimeSplashComponent);
exports.OneTimeSplashComponent = OneTimeSplashComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lLXRpbWUtc3BsYXNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLXZpc3VhbC8iLCJzb3VyY2VzIjpbIm9uZS10aW1lLXNwbGFzaC9vbmUtdGltZS1zcGxhc2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQXVGO0FBQ3ZGLDZEQUFtRTtBQUNuRSwrQkFBK0I7QUE2Qi9CLElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBU2pDLFlBQW9CLFlBQXNCO1FBQXRCLGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBTmpDLFVBQUssR0FBRyxPQUFPLENBQUM7UUFDaEIsZ0JBQVcsR0FBRyw0Q0FBNEMsQ0FBQztJQU9wRSxDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFDO1lBQ25CLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPLElBQUksQ0FBQyxXQUFXLEdBQUksY0FBYyxDQUFDO0lBQzVDLENBQUM7SUFFRCxlQUFlO1FBQ2IsVUFBVSxDQUFDLEdBQUUsRUFBRTtZQUNiLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUM5QixJQUFHLEdBQUcsRUFBQztnQkFDTCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3ZDO1lBRUQsSUFBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUM7Z0JBQ2pCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNiO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBQztZQUN4RCxJQUFJLEVBQUMsSUFBSTtZQUNULFdBQVcsRUFBQyxJQUFJLENBQUMsS0FBSztTQUN2QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsS0FBSztRQUNILElBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDO1lBQ2YsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQztJQUNwQixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzlCLElBQUcsQ0FBQyxHQUFHLEVBQUM7WUFDTixPQUFPO1NBQ1I7UUFFRCxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEMsQ0FBQztDQUNGLENBQUE7O1lBakRtQyx1QkFBUTs7QUFSRTtJQUEzQyxnQkFBUyxDQUFDLGdCQUFnQixFQUFDLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxDQUFDOzs4REFBb0I7QUFDdEQ7SUFBUixZQUFLLEVBQUU7OzJEQUFvQjtBQUNuQjtJQUFSLFlBQUssRUFBRTs7cURBQWlCO0FBQ2hCO0lBQVIsWUFBSyxFQUFFOzsyREFBNEQ7QUFDM0Q7SUFBUixZQUFLLEVBQUU7O3FEQUFlO0FBTFosc0JBQXNCO0lBeEJsQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FtQlg7aUJBQ1UsRUFBRTtLQUNaLENBQUM7cUNBVWtDLHVCQUFRO0dBVC9CLHNCQUFzQixDQTBEbEM7QUExRFksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JNb2RhbCwgTmdiTW9kYWxSZWYgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgKiBhcyBzdG9yZSBmcm9tICdzdG9yZSc7XG5cblxuZGVjbGFyZSB2YXIgUGxvdGx5OiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29uZS10aW1lLXNwbGFzaCcsXG4gIHRlbXBsYXRlOiBgPG5nLXRlbXBsYXRlICNzcGxhc2hUZW1wbGF0ZSBsZXQtYz1cImNsb3NlXCIgbGV0LWQ9XCJkaXNtaXNzXCI+XG4gIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPlxuICAgICAge3tsYWJlbH19PC9oND5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgKGNsaWNrKT1cImQoJ0Nyb3NzIGNsaWNrJylcIj5cbiAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cbiAgICA8bGFiZWwgKm5nSWY9XCJhcHBsaWNhdGlvblwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFsobmdNb2RlbCldPVwiZG9Ob3RTaG93XCIgKG5nTW9kZWxDaGFuZ2UpPVwiZG9Ob3RTaG93Q2xpY2tlZCgpXCI+XG4gICAgICAmbmJzcDsge3toaWRlTWVzc2FnZX19XG4gICAgPC9sYWJlbD5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgKGNsaWNrKT1cImMoJ0Nsb3NlIGNsaWNrJylcIj5DbG9zZTwvYnV0dG9uPlxuICA8L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBPbmVUaW1lU3BsYXNoQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCAge1xuICBAVmlld0NoaWxkKCdzcGxhc2hUZW1wbGF0ZScse3N0YXRpYzpmYWxzZX0pIHNwbGFzaFRlbXBsYXRlOmFueTtcbiAgQElucHV0KCkgYXBwbGljYXRpb246c3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbCA9ICdBYm91dCc7XG4gIEBJbnB1dCgpIGhpZGVNZXNzYWdlID0gJ1VuZGVyc3Rvb2QsIEkgZG9u4oCZdCBuZWVkIHRvIHNlZSB0aGlzIGFnYWluJztcbiAgQElucHV0KCkga2xhc3M6IHN0cmluZztcbiAgZG9Ob3RTaG93OiBib29sZWFuO1xuICBjdXJyZW50Ok5nYk1vZGFsUmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCl7XG5cbiAgfVxuXG4gIHN0b3JhZ2VLZXkoKXtcbiAgICBpZighdGhpcy5hcHBsaWNhdGlvbil7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5hcHBsaWNhdGlvbiAgKyAnLXNwbGFzaC1za2lwJztcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMuc3RvcmFnZUtleSgpO1xuICAgICAgaWYoa2V5KXtcbiAgICAgICAgdGhpcy5kb05vdFNob3cgPSBzdG9yZS5nZXQoa2V5LGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgaWYoIXRoaXMuZG9Ob3RTaG93KXtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzaG93KCl7XG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5tb2RhbFNlcnZpY2Uub3Blbih0aGlzLnNwbGFzaFRlbXBsYXRlLHtcbiAgICAgIHNpemU6J2xnJyxcbiAgICAgIHdpbmRvd0NsYXNzOnRoaXMua2xhc3NcbiAgICB9KTtcbiAgfVxuXG4gIGNsb3NlKCl7XG4gICAgaWYoIXRoaXMuY3VycmVudCl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50LmNsb3NlKCk7XG4gICAgdGhpcy5jdXJyZW50PW51bGw7XG4gIH1cblxuICBkb05vdFNob3dDbGlja2VkKCl7XG4gICAgY29uc3Qga2V5ID0gdGhpcy5zdG9yYWdlS2V5KCk7XG4gICAgaWYoIWtleSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3RvcmUuc2V0KGtleSx0aGlzLmRvTm90U2hvdyk7XG4gIH1cbn1cbiJdfQ==