"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneTimeSplashComponent = void 0;
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var store = require("store");
var i0 = require("@angular/core");
var i1 = require("@ng-bootstrap/ng-bootstrap");
var i2 = require("@angular/common");
var i3 = require("@angular/forms");
var _c0 = ["splashTemplate"];
function OneTimeSplashComponent_ng_template_0_label_9_Template(rf, ctx) { if (rf & 1) {
    var _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵelementStart(1, "input", 9);
    i0.ɵɵlistener("ngModelChange", function OneTimeSplashComponent_ng_template_0_label_9_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r6); var ctx_r5 = i0.ɵɵnextContext(2); return ctx_r5.doNotShow = $event; })("ngModelChange", function OneTimeSplashComponent_ng_template_0_label_9_Template_input_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r6); var ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.doNotShowClicked(); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r4.doNotShow);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" \u00A0 ", ctx_r4.hideMessage, " ");
} }
function OneTimeSplashComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "h4", 2);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 3);
    i0.ɵɵlistener("click", function OneTimeSplashComponent_ng_template_0_Template_button_click_3_listener() { var d_r3 = ctx.dismiss; return d_r3("Cross click"); });
    i0.ɵɵelementStart(4, "span", 4);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 5);
    i0.ɵɵprojection(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 6);
    i0.ɵɵtemplate(9, OneTimeSplashComponent_ng_template_0_label_9_Template, 3, 2, "label", 7);
    i0.ɵɵelementStart(10, "button", 8);
    i0.ɵɵlistener("click", function OneTimeSplashComponent_ng_template_0_Template_button_click_10_listener() { var c_r2 = ctx.close; return c_r2("Close click"); });
    i0.ɵɵtext(11, "Close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.label, "");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r1.application);
} }
var _c1 = ["*"];
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
    OneTimeSplashComponent.ɵfac = function OneTimeSplashComponent_Factory(t) { return new (t || OneTimeSplashComponent)(i0.ɵɵdirectiveInject(i1.NgbModal)); };
    OneTimeSplashComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OneTimeSplashComponent, selectors: [["one-time-splash"]], viewQuery: function OneTimeSplashComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t = void 0;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.splashTemplate = _t.first);
        } }, inputs: { application: "application", label: "label", hideMessage: "hideMessage", klass: "klass" }, ngContentSelectors: _c1, decls: 2, vars: 0, consts: [["splashTemplate", ""], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "checkbox", 3, "ngModel", "ngModelChange"]], template: function OneTimeSplashComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, OneTimeSplashComponent_ng_template_0_Template, 12, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } }, directives: [i2.NgIf, i3.CheckboxControlValueAccessor, i3.NgControlStatus, i3.NgModel], styles: [""] });
    return OneTimeSplashComponent;
}());
exports.OneTimeSplashComponent = OneTimeSplashComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OneTimeSplashComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'one-time-splash',
                template: "<ng-template #splashTemplate let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">\n      {{label}}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <ng-content></ng-content>\n  </div>\n  <div class=\"modal-footer\">\n    <label *ngIf=\"application\">\n      <input type=\"checkbox\" [(ngModel)]=\"doNotShow\" (ngModelChange)=\"doNotShowClicked()\">\n      &nbsp; {{hideMessage}}\n    </label>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n  </div>\n  </ng-template>\n",
                styles: [""]
            }]
    }], function () { return [{ type: i1.NgbModal }]; }, { splashTemplate: [{
            type: core_1.ViewChild,
            args: ['splashTemplate', { static: false }]
        }], application: [{
            type: core_1.Input
        }], label: [{
            type: core_1.Input
        }], hideMessage: [{
            type: core_1.Input
        }], klass: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lLXRpbWUtc3BsYXNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLXZpc3VhbC8iLCJzb3VyY2VzIjpbIm9uZS10aW1lLXNwbGFzaC9vbmUtdGltZS1zcGxhc2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF1RjtBQUN2RiwyREFBbUU7QUFDbkUsNkJBQStCOzs7Ozs7OztJQW1CM0IsNkJBQ0U7SUFBQSxnQ0FDQTtJQUR1QixvT0FBdUIsaU5BQUE7SUFBOUMsaUJBQ0E7SUFBQSxZQUNGO0lBQUEsaUJBQVE7OztJQUZpQixlQUF1QjtJQUF2QiwwQ0FBdUI7SUFDOUMsZUFDRjtJQURFLDBEQUNGOzs7SUFkRiw4QkFDRTtJQUFBLDZCQUNFO0lBQUEsWUFBUztJQUFBLGlCQUFLO0lBQ2hCLGlDQUNFO0lBRHFELDhJQUFXLGFBQWEsS0FBRTtJQUMvRSwrQkFBeUI7SUFBQSxzQkFBTztJQUFBLGlCQUFPO0lBQ3pDLGlCQUFTO0lBQ1gsaUJBQU07SUFDTiw4QkFDRTtJQUFBLGtCQUF5QjtJQUMzQixpQkFBTTtJQUNOLDhCQUNFO0lBQUEseUZBR1E7SUFDUixrQ0FBMkU7SUFBM0IsNklBQVcsYUFBYSxLQUFFO0lBQUMsc0JBQUs7SUFBQSxpQkFBUztJQUMzRixpQkFBTTs7O0lBZEYsZUFBUztJQUFULDRDQUFTO0lBU0gsZUFBaUI7SUFBakIseUNBQWlCOzs7QUFkN0I7SUFpQ0UsZ0NBQW9CLFlBQXNCO1FBQXRCLGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBTmpDLFVBQUssR0FBRyxPQUFPLENBQUM7UUFDaEIsZ0JBQVcsR0FBRyw0Q0FBNEMsQ0FBQztJQU9wRSxDQUFDO0lBRUQsMkNBQVUsR0FBVjtRQUNFLElBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFDO1lBQ25CLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPLElBQUksQ0FBQyxXQUFXLEdBQUksY0FBYyxDQUFDO0lBQzVDLENBQUM7SUFFRCxnREFBZSxHQUFmO1FBQUEsaUJBV0M7UUFWQyxVQUFVLENBQUM7WUFDVCxJQUFNLEdBQUcsR0FBRyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDOUIsSUFBRyxHQUFHLEVBQUM7Z0JBQ0wsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxLQUFLLENBQUMsQ0FBQzthQUN2QztZQUVELElBQUcsQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFDO2dCQUNqQixLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDYjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHFDQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUM7WUFDeEQsSUFBSSxFQUFDLElBQUk7WUFDVCxXQUFXLEVBQUMsSUFBSSxDQUFDLEtBQUs7U0FDdkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHNDQUFLLEdBQUw7UUFDRSxJQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQztZQUNmLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBQyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUVELGlEQUFnQixHQUFoQjtRQUNFLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM5QixJQUFHLENBQUMsR0FBRyxFQUFDO1lBQ04sT0FBTztTQUNSO1FBRUQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Z0dBekRVLHNCQUFzQjsrREFBdEIsc0JBQXNCOzs7Ozs7O1lBdEJ0Qix5SEFrQkc7O2lDQTNCaEI7Q0F5RkMsQUFsRkQsSUFrRkM7QUExRFksd0RBQXNCO2tEQUF0QixzQkFBc0I7Y0F4QmxDLGdCQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLDR0QkFtQlg7Z0JBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ2I7MkRBRTZDLGNBQWM7a0JBQXpELGdCQUFTO21CQUFDLGdCQUFnQixFQUFDLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQztZQUNqQyxXQUFXO2tCQUFuQixZQUFLO1lBQ0csS0FBSztrQkFBYixZQUFLO1lBQ0csV0FBVztrQkFBbkIsWUFBSztZQUNHLEtBQUs7a0JBQWIsWUFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiTW9kYWwsIE5nYk1vZGFsUmVmIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0ICogYXMgc3RvcmUgZnJvbSAnc3RvcmUnO1xuXG5cbmRlY2xhcmUgdmFyIFBsb3RseTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvbmUtdGltZS1zcGxhc2gnLFxuICB0ZW1wbGF0ZTogYDxuZy10ZW1wbGF0ZSAjc3BsYXNoVGVtcGxhdGUgbGV0LWM9XCJjbG9zZVwiIGxldC1kPVwiZGlzbWlzc1wiPlxuICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5cbiAgICAgIHt7bGFiZWx9fTwvaDQ+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIChjbGljayk9XCJkKCdDcm9zcyBjbGljaycpXCI+XG4gICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgPGxhYmVsICpuZ0lmPVwiYXBwbGljYXRpb25cIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cImRvTm90U2hvd1wiIChuZ01vZGVsQ2hhbmdlKT1cImRvTm90U2hvd0NsaWNrZWQoKVwiPlxuICAgICAgJm5ic3A7IHt7aGlkZU1lc3NhZ2V9fVxuICAgIDwvbGFiZWw+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIChjbGljayk9XCJjKCdDbG9zZSBjbGljaycpXCI+Q2xvc2U8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgT25lVGltZVNwbGFzaENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQgIHtcbiAgQFZpZXdDaGlsZCgnc3BsYXNoVGVtcGxhdGUnLHtzdGF0aWM6ZmFsc2V9KSBzcGxhc2hUZW1wbGF0ZTphbnk7XG4gIEBJbnB1dCgpIGFwcGxpY2F0aW9uOnN0cmluZztcbiAgQElucHV0KCkgbGFiZWwgPSAnQWJvdXQnO1xuICBASW5wdXQoKSBoaWRlTWVzc2FnZSA9ICdVbmRlcnN0b29kLCBJIGRvbuKAmXQgbmVlZCB0byBzZWUgdGhpcyBhZ2Fpbic7XG4gIEBJbnB1dCgpIGtsYXNzOiBzdHJpbmc7XG4gIGRvTm90U2hvdzogYm9vbGVhbjtcbiAgY3VycmVudDpOZ2JNb2RhbFJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWwpe1xuXG4gIH1cblxuICBzdG9yYWdlS2V5KCl7XG4gICAgaWYoIXRoaXMuYXBwbGljYXRpb24pe1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuYXBwbGljYXRpb24gICsgJy1zcGxhc2gtc2tpcCc7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLnN0b3JhZ2VLZXkoKTtcbiAgICAgIGlmKGtleSl7XG4gICAgICAgIHRoaXMuZG9Ob3RTaG93ID0gc3RvcmUuZ2V0KGtleSxmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIGlmKCF0aGlzLmRvTm90U2hvdyl7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2hvdygpe1xuICAgIHRoaXMuY3VycmVudCA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4odGhpcy5zcGxhc2hUZW1wbGF0ZSx7XG4gICAgICBzaXplOidsZycsXG4gICAgICB3aW5kb3dDbGFzczp0aGlzLmtsYXNzXG4gICAgfSk7XG4gIH1cblxuICBjbG9zZSgpe1xuICAgIGlmKCF0aGlzLmN1cnJlbnQpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudC5jbG9zZSgpO1xuICAgIHRoaXMuY3VycmVudD1udWxsO1xuICB9XG5cbiAgZG9Ob3RTaG93Q2xpY2tlZCgpe1xuICAgIGNvbnN0IGtleSA9IHRoaXMuc3RvcmFnZUtleSgpO1xuICAgIGlmKCFrZXkpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN0b3JlLnNldChrZXksdGhpcy5kb05vdFNob3cpO1xuICB9XG59XG4iXX0=