"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureTableComponent = void 0;
var core_1 = require("@angular/core");
var i0 = require("@angular/core");
var i1 = require("@angular/common");
function FeatureTableComponent_table_0_tr_16_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var prop_r2 = i0.ɵɵnextContext().$implicit;
    var ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.feature.properties[prop_r2]);
} }
function FeatureTableComponent_table_0_tr_16_td_5_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var prop_r2 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("href", ctx_r6.feature.properties[prop_r2], i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r6.feature.properties[prop_r2], " ");
} }
function FeatureTableComponent_table_0_tr_16_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, FeatureTableComponent_table_0_tr_16_td_5_a_1_Template, 2, 2, "a", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var prop_r2 = i0.ɵɵnextContext().$implicit;
    var ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.styles[prop_r2].hyperlink);
} }
function FeatureTableComponent_table_0_tr_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "td");
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, FeatureTableComponent_table_0_tr_16_td_4_Template, 2, 1, "td", 3);
    i0.ɵɵtemplate(5, FeatureTableComponent_table_0_tr_16_td_5_Template, 2, 1, "td", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var prop_r2 = ctx.$implicit;
    var ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(prop_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.styles || !ctx_r1.styles[prop_r2]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.styles && ctx_r1.styles[prop_r2]);
} }
function FeatureTableComponent_table_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 1);
    i0.ɵɵelementStart(1, "thead");
    i0.ɵɵelementStart(2, "tr");
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5, "Property");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵelementStart(7, "strong");
    i0.ɵɵtext(8, "Value");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "tbody");
    i0.ɵɵelementStart(10, "tr");
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵelementStart(12, "strong");
    i0.ɵɵtext(13, "Geometry");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(16, FeatureTableComponent_table_0_tr_16_Template, 6, 3, "tr", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(15);
    i0.ɵɵtextInterpolate(ctx_r0.feature.geometry.type);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0._keys(ctx_r0.feature.properties));
} }
var FeatureTableComponent = /** @class */ (function () {
    function FeatureTableComponent() {
        this.styles = {};
        this._keys = Object.keys;
    }
    FeatureTableComponent.prototype.ngAfterViewInit = function () {
    };
    FeatureTableComponent.prototype.ngOnChanges = function (changes) {
        if (!this.styles) {
            this.styles = {};
        }
    };
    FeatureTableComponent.ɵfac = function FeatureTableComponent_Factory(t) { return new (t || FeatureTableComponent)(); };
    FeatureTableComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FeatureTableComponent, selectors: [["feature-table"]], inputs: { feature: "feature", styles: "styles" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "table table-striped table-sm feature-table", 4, "ngIf"], [1, "table", "table-striped", "table-sm", "feature-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 3, "href"]], template: function FeatureTableComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, FeatureTableComponent_table_0_Template, 17, 2, "table", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.feature);
        } }, directives: [i1.NgIf, i1.NgForOf], styles: [".feature-table[_ngcontent-%COMP%]{\n  max-width:300px;\n}"] });
    return FeatureTableComponent;
}());
exports.FeatureTableComponent = FeatureTableComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FeatureTableComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'feature-table',
                template: "<table *ngIf=\"feature\" class=\"table table-striped table-sm feature-table\">\n  <thead>\n    <tr>\n      <td><strong>Property</strong></td>\n      <td><strong>Value</strong></td>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td><strong>Geometry</strong></td>\n      <td>{{feature.geometry.type}}</td>\n    </tr>\n    <tr *ngFor=\"let prop of _keys(feature.properties)\">\n      <td><strong>{{prop}}</strong></td>\n      <td *ngIf=\"!styles||!styles[prop]\">{{feature.properties[prop]}}</td>\n      <td *ngIf=\"styles&&styles[prop]\">\n        <a *ngIf=\"styles[prop].hyperlink\" target=\"_blank\" [href]=\"feature.properties[prop]\">\n          {{feature.properties[prop]}}\n        </a>\n      </td>\n    </tr>\n  </tbody>\n</table>", styles: [".feature-table{\n  max-width:300px;\n}"]
            }]
    }], function () { return []; }, { feature: [{
            type: core_1.Input
        }], styles: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJmZWF0dXJlLXRhYmxlL2ZlYXR1cmUtdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUEwRjs7OztJQW1CcEYsMEJBQW1DO0lBQUEsWUFBNEI7SUFBQSxpQkFBSzs7OztJQUFqQyxlQUE0QjtJQUE1Qix3REFBNEI7OztJQUU3RCw0QkFDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBSTs7OztJQUY4QywyRUFBaUM7SUFDakYsZUFDRjtJQURFLG1FQUNGOzs7SUFIRiwwQkFDRTtJQUFBLHFGQUVJO0lBQ04saUJBQUs7Ozs7SUFIQyxlQUE0QjtJQUE1Qix1REFBNEI7OztJQUpwQywwQkFDRTtJQUFBLDBCQUFJO0lBQUEsOEJBQVE7SUFBQSxZQUFRO0lBQUEsaUJBQVM7SUFBQSxpQkFBSztJQUNsQyxrRkFBb0U7SUFDcEUsa0ZBSUs7SUFDUCxpQkFBSzs7OztJQVBTLGVBQVE7SUFBUiw2QkFBUTtJQUNmLGVBQTRCO0lBQTVCLGdFQUE0QjtJQUM1QixlQUEwQjtJQUExQiw4REFBMEI7OztJQWZ4QixnQ0FDWDtJQUFBLDZCQUNFO0lBQUEsMEJBQ0U7SUFBQSwwQkFBSTtJQUFBLDhCQUFRO0lBQUEsd0JBQVE7SUFBQSxpQkFBUztJQUFBLGlCQUFLO0lBQ2xDLDBCQUFJO0lBQUEsOEJBQVE7SUFBQSxxQkFBSztJQUFBLGlCQUFTO0lBQUEsaUJBQUs7SUFDakMsaUJBQUs7SUFDUCxpQkFBUTtJQUNSLDZCQUNFO0lBQUEsMkJBQ0U7SUFBQSwyQkFBSTtJQUFBLCtCQUFRO0lBQUEseUJBQVE7SUFBQSxpQkFBUztJQUFBLGlCQUFLO0lBQ2xDLDJCQUFJO0lBQUEsYUFBeUI7SUFBQSxpQkFBSztJQUNwQyxpQkFBSztJQUNMLDhFQVFLO0lBQ1AsaUJBQVE7SUFDVixpQkFBUTs7O0lBWkUsZ0JBQXlCO0lBQXpCLGtEQUF5QjtJQUVWLGVBQTRCO0lBQTVCLGlFQUE0Qjs7QUFkckQ7SUFnQ0U7UUFIUyxXQUFNLEdBQXNDLEVBQUUsQ0FBQTtRQUN2RCxVQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztJQUlwQixDQUFDO0lBRUQsK0NBQWUsR0FBZjtJQUVBLENBQUM7SUFFRCwyQ0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUM7WUFDZCxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztTQUNsQjtJQUNILENBQUM7OEZBakJVLHFCQUFxQjs4REFBckIscUJBQXFCO1lBekJyQiwyRUFzQkw7O1lBdEJhLGtDQUFhOztnQ0FMbEM7Q0FnREMsQUE3Q0QsSUE2Q0M7QUFsQlksc0RBQXFCO2tEQUFyQixxQkFBcUI7Y0EzQmpDLGdCQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRSx1dUJBc0JILEVBQUMsTUFBTSxFQUFFLENBQUMsd0NBRWpCLENBQUM7YUFBQztzQ0FFTyxPQUFPO2tCQUFmLFlBQUs7WUFDRyxNQUFNO2tCQUFkLFlBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExheWVyUHJvcGVydHlTdHlsZSB9IGZyb20gJ21hcC13YWxkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmVhdHVyZS10YWJsZScsXG4gIHRlbXBsYXRlOiBgPHRhYmxlICpuZ0lmPVwiZmVhdHVyZVwiIGNsYXNzPVwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1zbSBmZWF0dXJlLXRhYmxlXCI+XG4gIDx0aGVhZD5cbiAgICA8dHI+XG4gICAgICA8dGQ+PHN0cm9uZz5Qcm9wZXJ0eTwvc3Ryb25nPjwvdGQ+XG4gICAgICA8dGQ+PHN0cm9uZz5WYWx1ZTwvc3Ryb25nPjwvdGQ+XG4gICAgPC90cj5cbiAgPC90aGVhZD5cbiAgPHRib2R5PlxuICAgIDx0cj5cbiAgICAgIDx0ZD48c3Ryb25nPkdlb21ldHJ5PC9zdHJvbmc+PC90ZD5cbiAgICAgIDx0ZD57e2ZlYXR1cmUuZ2VvbWV0cnkudHlwZX19PC90ZD5cbiAgICA8L3RyPlxuICAgIDx0ciAqbmdGb3I9XCJsZXQgcHJvcCBvZiBfa2V5cyhmZWF0dXJlLnByb3BlcnRpZXMpXCI+XG4gICAgICA8dGQ+PHN0cm9uZz57e3Byb3B9fTwvc3Ryb25nPjwvdGQ+XG4gICAgICA8dGQgKm5nSWY9XCIhc3R5bGVzfHwhc3R5bGVzW3Byb3BdXCI+e3tmZWF0dXJlLnByb3BlcnRpZXNbcHJvcF19fTwvdGQ+XG4gICAgICA8dGQgKm5nSWY9XCJzdHlsZXMmJnN0eWxlc1twcm9wXVwiPlxuICAgICAgICA8YSAqbmdJZj1cInN0eWxlc1twcm9wXS5oeXBlcmxpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIiBbaHJlZl09XCJmZWF0dXJlLnByb3BlcnRpZXNbcHJvcF1cIj5cbiAgICAgICAgICB7e2ZlYXR1cmUucHJvcGVydGllc1twcm9wXX19XG4gICAgICAgIDwvYT5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgPC90Ym9keT5cbjwvdGFibGU+YCxzdHlsZXM6IFtgLmZlYXR1cmUtdGFibGV7XG4gIG1heC13aWR0aDozMDBweDtcbn1gXX0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZVRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgZmVhdHVyZTogYW55O1xuICBASW5wdXQoKSBzdHlsZXM6IHtba2V5OnN0cmluZ106TGF5ZXJQcm9wZXJ0eVN0eWxlfSA9IHt9XG4gIF9rZXlzID0gT2JqZWN0LmtleXM7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG5cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZighdGhpcy5zdHlsZXMpe1xuICAgICAgdGhpcy5zdHlsZXMgPSB7fTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==