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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var store = require("store");
var OneTimeSplashComponent = /** @class */ (function () {
    function OneTimeSplashComponent(modalService) {
        this.modalService = modalService;
        this.label = 'About';
        this.hideMessage = 'Understood, I don’t need to see this again';
    }
    OneTimeSplashComponent.prototype.storageKey = function () {
        if (!this.application) {
            return null;
        }
        return this.application + '-splash-skip';
    };
    OneTimeSplashComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            var key = _this.storageKey();
            if (key) {
                _this.doNotShow = store.get(key, false);
            }
            if (!_this.doNotShow) {
                _this.show();
            }
        });
    };
    OneTimeSplashComponent.prototype.show = function () {
        this.current = this.modalService.open(this.splashTemplate, {
            size: 'lg',
            windowClass: this.klass
        });
    };
    OneTimeSplashComponent.prototype.close = function () {
        if (!this.current) {
            return;
        }
        this.current.close();
        this.current = null;
    };
    OneTimeSplashComponent.prototype.doNotShowClicked = function () {
        var key = this.storageKey();
        if (!key) {
            return;
        }
        store.set(key, this.doNotShow);
    };
    OneTimeSplashComponent.ctorParameters = function () { return [
        { type: ng_bootstrap_1.NgbModal }
    ]; };
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
            template: "<ng-template #splashTemplate let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">\n      {{label}}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <ng-content></ng-content>\n  </div>\n  <div class=\"modal-footer\">\n    <label *ngIf=\"application\">\n      <input type=\"checkbox\" [(ngModel)]=\"doNotShow\" (ngModelChange)=\"doNotShowClicked()\">\n      &nbsp; {{hideMessage}}\n    </label>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n  </div>\n  </ng-template>\n",
            styles: [""]
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal])
    ], OneTimeSplashComponent);
    return OneTimeSplashComponent;
}());
exports.OneTimeSplashComponent = OneTimeSplashComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lLXRpbWUtc3BsYXNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLXZpc3VhbC8iLCJzb3VyY2VzIjpbIm9uZS10aW1lLXNwbGFzaC9vbmUtdGltZS1zcGxhc2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXVGO0FBQ3ZGLDJEQUFtRTtBQUNuRSw2QkFBK0I7QUE2Qi9CO0lBU0UsZ0NBQW9CLFlBQXNCO1FBQXRCLGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBTmpDLFVBQUssR0FBRyxPQUFPLENBQUM7UUFDaEIsZ0JBQVcsR0FBRyw0Q0FBNEMsQ0FBQztJQU9wRSxDQUFDO0lBRUQsMkNBQVUsR0FBVjtRQUNFLElBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFDO1lBQ25CLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPLElBQUksQ0FBQyxXQUFXLEdBQUksY0FBYyxDQUFDO0lBQzVDLENBQUM7SUFFRCxnREFBZSxHQUFmO1FBQUEsaUJBV0M7UUFWQyxVQUFVLENBQUM7WUFDVCxJQUFNLEdBQUcsR0FBRyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDOUIsSUFBRyxHQUFHLEVBQUM7Z0JBQ0wsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxLQUFLLENBQUMsQ0FBQzthQUN2QztZQUVELElBQUcsQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFDO2dCQUNqQixLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDYjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHFDQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUM7WUFDeEQsSUFBSSxFQUFDLElBQUk7WUFDVCxXQUFXLEVBQUMsSUFBSSxDQUFDLEtBQUs7U0FDdkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHNDQUFLLEdBQUw7UUFDRSxJQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQztZQUNmLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBQyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUVELGlEQUFnQixHQUFoQjtRQUNFLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM5QixJQUFHLENBQUMsR0FBRyxFQUFDO1lBQ04sT0FBTztTQUNSO1FBRUQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7O2dCQWhEaUMsdUJBQVE7O0lBUkU7UUFBM0MsZ0JBQVMsQ0FBQyxnQkFBZ0IsRUFBQyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsQ0FBQzs7a0VBQW9CO0lBQ3REO1FBQVIsWUFBSyxFQUFFOzsrREFBb0I7SUFDbkI7UUFBUixZQUFLLEVBQUU7O3lEQUFpQjtJQUNoQjtRQUFSLFlBQUssRUFBRTs7K0RBQTREO0lBQzNEO1FBQVIsWUFBSyxFQUFFOzt5REFBZTtJQUxaLHNCQUFzQjtRQXhCbEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLDR0QkFtQlg7cUJBQ1UsRUFBRTtTQUNaLENBQUM7eUNBVWtDLHVCQUFRO09BVC9CLHNCQUFzQixDQTBEbEM7SUFBRCw2QkFBQztDQUFBLEFBMURELElBMERDO0FBMURZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiTW9kYWwsIE5nYk1vZGFsUmVmIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0ICogYXMgc3RvcmUgZnJvbSAnc3RvcmUnO1xuXG5cbmRlY2xhcmUgdmFyIFBsb3RseTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvbmUtdGltZS1zcGxhc2gnLFxuICB0ZW1wbGF0ZTogYDxuZy10ZW1wbGF0ZSAjc3BsYXNoVGVtcGxhdGUgbGV0LWM9XCJjbG9zZVwiIGxldC1kPVwiZGlzbWlzc1wiPlxuICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5cbiAgICAgIHt7bGFiZWx9fTwvaDQ+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIChjbGljayk9XCJkKCdDcm9zcyBjbGljaycpXCI+XG4gICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgPGxhYmVsICpuZ0lmPVwiYXBwbGljYXRpb25cIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cImRvTm90U2hvd1wiIChuZ01vZGVsQ2hhbmdlKT1cImRvTm90U2hvd0NsaWNrZWQoKVwiPlxuICAgICAgJm5ic3A7IHt7aGlkZU1lc3NhZ2V9fVxuICAgIDwvbGFiZWw+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIChjbGljayk9XCJjKCdDbG9zZSBjbGljaycpXCI+Q2xvc2U8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgT25lVGltZVNwbGFzaENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQgIHtcbiAgQFZpZXdDaGlsZCgnc3BsYXNoVGVtcGxhdGUnLHtzdGF0aWM6ZmFsc2V9KSBzcGxhc2hUZW1wbGF0ZTphbnk7XG4gIEBJbnB1dCgpIGFwcGxpY2F0aW9uOnN0cmluZztcbiAgQElucHV0KCkgbGFiZWwgPSAnQWJvdXQnO1xuICBASW5wdXQoKSBoaWRlTWVzc2FnZSA9ICdVbmRlcnN0b29kLCBJIGRvbuKAmXQgbmVlZCB0byBzZWUgdGhpcyBhZ2Fpbic7XG4gIEBJbnB1dCgpIGtsYXNzOiBzdHJpbmc7XG4gIGRvTm90U2hvdzogYm9vbGVhbjtcbiAgY3VycmVudDpOZ2JNb2RhbFJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWwpe1xuXG4gIH1cblxuICBzdG9yYWdlS2V5KCl7XG4gICAgaWYoIXRoaXMuYXBwbGljYXRpb24pe1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuYXBwbGljYXRpb24gICsgJy1zcGxhc2gtc2tpcCc7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLnN0b3JhZ2VLZXkoKTtcbiAgICAgIGlmKGtleSl7XG4gICAgICAgIHRoaXMuZG9Ob3RTaG93ID0gc3RvcmUuZ2V0KGtleSxmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIGlmKCF0aGlzLmRvTm90U2hvdyl7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2hvdygpe1xuICAgIHRoaXMuY3VycmVudCA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4odGhpcy5zcGxhc2hUZW1wbGF0ZSx7XG4gICAgICBzaXplOidsZycsXG4gICAgICB3aW5kb3dDbGFzczp0aGlzLmtsYXNzXG4gICAgfSk7XG4gIH1cblxuICBjbG9zZSgpe1xuICAgIGlmKCF0aGlzLmN1cnJlbnQpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudC5jbG9zZSgpO1xuICAgIHRoaXMuY3VycmVudD1udWxsO1xuICB9XG5cbiAgZG9Ob3RTaG93Q2xpY2tlZCgpe1xuICAgIGNvbnN0IGtleSA9IHRoaXMuc3RvcmFnZUtleSgpO1xuICAgIGlmKCFrZXkpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN0b3JlLnNldChrZXksdGhpcy5kb05vdFNob3cpO1xuICB9XG59XG4iXX0=