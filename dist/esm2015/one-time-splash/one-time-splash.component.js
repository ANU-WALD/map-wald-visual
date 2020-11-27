"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneTimeSplashComponent = void 0;
const core_1 = require("@angular/core");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const store = require("store");
const i0 = require("@angular/core");
const i1 = require("@ng-bootstrap/ng-bootstrap");
const i2 = require("@angular/common");
const i3 = require("@angular/forms");
const _c0 = ["splashTemplate"];
function OneTimeSplashComponent_ng_template_0_label_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵelementStart(1, "input", 9);
    i0.ɵɵlistener("ngModelChange", function OneTimeSplashComponent_ng_template_0_label_9_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(2); return ctx_r5.doNotShow = $event; })("ngModelChange", function OneTimeSplashComponent_ng_template_0_label_9_Template_input_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r6); const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.doNotShowClicked(); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
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
    i0.ɵɵlistener("click", function OneTimeSplashComponent_ng_template_0_Template_button_click_3_listener() { const d_r3 = ctx.dismiss; return d_r3("Cross click"); });
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
    i0.ɵɵlistener("click", function OneTimeSplashComponent_ng_template_0_Template_button_click_10_listener() { const c_r2 = ctx.close; return c_r2("Close click"); });
    i0.ɵɵtext(11, "Close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.label, "");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r1.application);
} }
const _c1 = ["*"];
class OneTimeSplashComponent {
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
}
exports.OneTimeSplashComponent = OneTimeSplashComponent;
OneTimeSplashComponent.ɵfac = function OneTimeSplashComponent_Factory(t) { return new (t || OneTimeSplashComponent)(i0.ɵɵdirectiveInject(i1.NgbModal)); };
OneTimeSplashComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OneTimeSplashComponent, selectors: [["one-time-splash"]], viewQuery: function OneTimeSplashComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.splashTemplate = _t.first);
    } }, inputs: { application: "application", label: "label", hideMessage: "hideMessage", klass: "klass" }, ngContentSelectors: _c1, decls: 2, vars: 0, consts: [["splashTemplate", ""], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "checkbox", 3, "ngModel", "ngModelChange"]], template: function OneTimeSplashComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, OneTimeSplashComponent_ng_template_0_Template, 12, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    } }, directives: [i2.NgIf, i3.CheckboxControlValueAccessor, i3.NgControlStatus, i3.NgModel], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OneTimeSplashComponent, [{
        type: core_1.Component,
        args: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lLXRpbWUtc3BsYXNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLXZpc3VhbC8iLCJzb3VyY2VzIjpbIm9uZS10aW1lLXNwbGFzaC9vbmUtdGltZS1zcGxhc2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUF1RjtBQUN2Riw2REFBbUU7QUFDbkUsK0JBQStCOzs7Ozs7OztJQW1CM0IsNkJBQ0U7SUFBQSxnQ0FDQTtJQUR1QixzT0FBdUIsbU5BQUE7SUFBOUMsaUJBQ0E7SUFBQSxZQUNGO0lBQUEsaUJBQVE7OztJQUZpQixlQUF1QjtJQUF2QiwwQ0FBdUI7SUFDOUMsZUFDRjtJQURFLDBEQUNGOzs7SUFkRiw4QkFDRTtJQUFBLDZCQUNFO0lBQUEsWUFBUztJQUFBLGlCQUFLO0lBQ2hCLGlDQUNFO0lBRHFELGdKQUFXLGFBQWEsS0FBRTtJQUMvRSwrQkFBeUI7SUFBQSxzQkFBTztJQUFBLGlCQUFPO0lBQ3pDLGlCQUFTO0lBQ1gsaUJBQU07SUFDTiw4QkFDRTtJQUFBLGtCQUF5QjtJQUMzQixpQkFBTTtJQUNOLDhCQUNFO0lBQUEseUZBR1E7SUFDUixrQ0FBMkU7SUFBM0IsK0lBQVcsYUFBYSxLQUFFO0lBQUMsc0JBQUs7SUFBQSxpQkFBUztJQUMzRixpQkFBTTs7O0lBZEYsZUFBUztJQUFULDRDQUFTO0lBU0gsZUFBaUI7SUFBakIseUNBQWlCOzs7QUFkN0IsTUF3QmEsc0JBQXNCO0lBU2pDLFlBQW9CLFlBQXNCO1FBQXRCLGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBTmpDLFVBQUssR0FBRyxPQUFPLENBQUM7UUFDaEIsZ0JBQVcsR0FBRyw0Q0FBNEMsQ0FBQztJQU9wRSxDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFDO1lBQ25CLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPLElBQUksQ0FBQyxXQUFXLEdBQUksY0FBYyxDQUFDO0lBQzVDLENBQUM7SUFFRCxlQUFlO1FBQ2IsVUFBVSxDQUFDLEdBQUUsRUFBRTtZQUNiLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUM5QixJQUFHLEdBQUcsRUFBQztnQkFDTCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3ZDO1lBRUQsSUFBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUM7Z0JBQ2pCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNiO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBQztZQUN4RCxJQUFJLEVBQUMsSUFBSTtZQUNULFdBQVcsRUFBQyxJQUFJLENBQUMsS0FBSztTQUN2QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsS0FBSztRQUNILElBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDO1lBQ2YsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQztJQUNwQixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzlCLElBQUcsQ0FBQyxHQUFHLEVBQUM7WUFDTixPQUFPO1NBQ1I7UUFFRCxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7QUFqRkgsd0RBa0ZDOzRGQTFEWSxzQkFBc0I7MkRBQXRCLHNCQUFzQjs7Ozs7OztRQXRCdEIseUhBa0JHOztrREFJSCxzQkFBc0I7Y0F4QmxDLGdCQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBbUJYO2dCQUNDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNiOzJEQUU2QyxjQUFjO2tCQUF6RCxnQkFBUzttQkFBQyxnQkFBZ0IsRUFBQyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUM7WUFDakMsV0FBVztrQkFBbkIsWUFBSztZQUNHLEtBQUs7a0JBQWIsWUFBSztZQUNHLFdBQVc7a0JBQW5CLFlBQUs7WUFDRyxLQUFLO2tCQUFiLFlBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYk1vZGFsLCBOZ2JNb2RhbFJlZiB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCAqIGFzIHN0b3JlIGZyb20gJ3N0b3JlJztcblxuXG5kZWNsYXJlIHZhciBQbG90bHk6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnb25lLXRpbWUtc3BsYXNoJyxcbiAgdGVtcGxhdGU6IGA8bmctdGVtcGxhdGUgI3NwbGFzaFRlbXBsYXRlIGxldC1jPVwiY2xvc2VcIiBsZXQtZD1cImRpc21pc3NcIj5cbiAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+XG4gICAgICB7e2xhYmVsfX08L2g0PlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiAoY2xpY2spPVwiZCgnQ3Jvc3MgY2xpY2snKVwiPlxuICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgIDxsYWJlbCAqbmdJZj1cImFwcGxpY2F0aW9uXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgWyhuZ01vZGVsKV09XCJkb05vdFNob3dcIiAobmdNb2RlbENoYW5nZSk9XCJkb05vdFNob3dDbGlja2VkKClcIj5cbiAgICAgICZuYnNwOyB7e2hpZGVNZXNzYWdlfX1cbiAgICA8L2xhYmVsPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiAoY2xpY2spPVwiYygnQ2xvc2UgY2xpY2snKVwiPkNsb3NlPC9idXR0b24+XG4gIDwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIE9uZVRpbWVTcGxhc2hDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0ICB7XG4gIEBWaWV3Q2hpbGQoJ3NwbGFzaFRlbXBsYXRlJyx7c3RhdGljOmZhbHNlfSkgc3BsYXNoVGVtcGxhdGU6YW55O1xuICBASW5wdXQoKSBhcHBsaWNhdGlvbjpzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsID0gJ0Fib3V0JztcbiAgQElucHV0KCkgaGlkZU1lc3NhZ2UgPSAnVW5kZXJzdG9vZCwgSSBkb27igJl0IG5lZWQgdG8gc2VlIHRoaXMgYWdhaW4nO1xuICBASW5wdXQoKSBrbGFzczogc3RyaW5nO1xuICBkb05vdFNob3c6IGJvb2xlYW47XG4gIGN1cnJlbnQ6TmdiTW9kYWxSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsKXtcblxuICB9XG5cbiAgc3RvcmFnZUtleSgpe1xuICAgIGlmKCF0aGlzLmFwcGxpY2F0aW9uKXtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmFwcGxpY2F0aW9uICArICctc3BsYXNoLXNraXAnO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG4gICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgY29uc3Qga2V5ID0gdGhpcy5zdG9yYWdlS2V5KCk7XG4gICAgICBpZihrZXkpe1xuICAgICAgICB0aGlzLmRvTm90U2hvdyA9IHN0b3JlLmdldChrZXksZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICBpZighdGhpcy5kb05vdFNob3cpe1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNob3coKXtcbiAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKHRoaXMuc3BsYXNoVGVtcGxhdGUse1xuICAgICAgc2l6ZTonbGcnLFxuICAgICAgd2luZG93Q2xhc3M6dGhpcy5rbGFzc1xuICAgIH0pO1xuICB9XG5cbiAgY2xvc2UoKXtcbiAgICBpZighdGhpcy5jdXJyZW50KXtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnQuY2xvc2UoKTtcbiAgICB0aGlzLmN1cnJlbnQ9bnVsbDtcbiAgfVxuXG4gIGRvTm90U2hvd0NsaWNrZWQoKXtcbiAgICBjb25zdCBrZXkgPSB0aGlzLnN0b3JhZ2VLZXkoKTtcbiAgICBpZigha2V5KXtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzdG9yZS5zZXQoa2V5LHRoaXMuZG9Ob3RTaG93KTtcbiAgfVxufVxuIl19