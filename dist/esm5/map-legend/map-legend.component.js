"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapLegendComponent = void 0;
var core_1 = require("@angular/core");
var map_wald_1 = require("map-wald");
var i0 = require("@angular/core");
var i1 = require("map-wald");
var i2 = require("@angular/common");
var i3 = require("@ng-bootstrap/ng-bootstrap");
function MapLegendComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 5);
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHtml", ctx_r1.helpText, i0.ɵɵsanitizeHtml);
} }
function MapLegendComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 6);
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", "(" + ctx_r2.mapUnits + ")", i0.ɵɵsanitizeHtml);
} }
function MapLegendComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵelement(1, "i", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext();
    var _r0 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngbTooltip", _r0)("placement", ctx_r3.tooltipPlacement);
} }
var _c0 = function (a0) { return { background: a0 }; };
function MapLegendComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵelement(2, "i", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 14);
    i0.ɵɵelement(4, "span", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var colour_r9 = ctx.$implicit;
    var i_r10 = ctx.index;
    var ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c0, colour_r9));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", ctx_r8.generatedLabels[i_r10], i0.ɵɵsanitizeHtml);
} }
function MapLegendComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵtemplate(2, MapLegendComponent_div_7_div_2_Template, 5, 4, "div", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.colours);
} }
function MapLegendComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "img", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", ctx_r5.imageURL, i0.ɵɵsanitizeUrl);
} }
function MapLegendComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Source: ");
    i0.ɵɵelementStart(2, "a", 16);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("href", ctx_r6.attributionLink, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r6.attribution || "details");
} }
function MapLegendComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("Source: ", ctx_r7.attribution, "");
} }
var MapLegendComponent = /** @class */ (function () {
    function MapLegendComponent(_palettes) {
        this._palettes = _palettes;
        this.colours = ['red', 'white', 'blue'];
        this.labels = []; //['-','-','-'];
        this.title = 'the title';
        this.mapUnits = '';
        this.helpText = 'No comment';
        this.tooltipPlacement = 'right';
        this.generatedLabels = [];
        this.formatValue = function (val, decimalPlaces) {
            if (!val) {
                if (val === 0) {
                    return '0';
                }
                return '-';
            }
            // Add thousand's separator. Source: http://stackoverflow.com/a/2901298
            var parts = val.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            if (decimalPlaces === 0) {
                return parts[0];
            }
            if ((decimalPlaces !== null) && (decimalPlaces !== undefined) && (parts.length === 2)) {
                parts[1] = parts[1].substr(0, decimalPlaces);
                parts[1] = parts[1].replace(/0+$/, '');
            }
            return parts.join('.');
        };
    }
    Object.defineProperty(MapLegendComponent.prototype, "cbPalette", {
        get: function () { return this._cbPalette; },
        set: function (cbp) {
            this._cbPalette = cbp;
            this.generatePalette();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MapLegendComponent.prototype, "cbCount", {
        get: function () { return this._cbCount; },
        set: function (cbc) {
            this._cbCount = cbc;
            this.generatePalette();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MapLegendComponent.prototype, "cbReverse", {
        get: function () { return this._cbReverse; },
        set: function (cbr) {
            this._cbReverse = cbr;
            this.generatePalette();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MapLegendComponent.prototype, "cbRange", {
        get: function () { return this._cbRange; },
        set: function (cbr) {
            this._cbRange = cbr;
            this.generatePalette();
        },
        enumerable: false,
        configurable: true
    });
    MapLegendComponent.prototype.generateLabels = function (count) {
        if (!this._cbRange || !count) {
            return null;
        }
        var delta = (this._cbRange[1] - this._cbRange[0]) / (count);
        var result = [];
        var lower = this._cbRange[0];
        var decimalPlaces = Math.max(0, 2 - (+Math.log10(this._cbRange[1] - this._cbRange[0]).toFixed()));
        decimalPlaces = Math.min(decimalPlaces, 10);
        var upper;
        for (var i = 1; i < (count); i++) {
            upper = this._cbRange[0] + i * delta;
            result.push(this.formatValue(lower, decimalPlaces) + "-" + this.formatValue(upper, decimalPlaces));
            lower = upper;
        }
        result.push('&ge;' + this.formatValue(upper, decimalPlaces));
        result.reverse();
        return result;
    };
    MapLegendComponent.prototype.generatePalette = function () {
        var _this = this;
        if (!this._cbPalette || !this._cbCount) {
            return;
        }
        this._palettes.getPalette(this._cbPalette, this._cbReverse, this._cbCount)
            .subscribe(function (palette) {
            _this.colours = palette.slice().reverse();
            _this.generatedLabels = _this.labels || _this.generateLabels(_this.colours.length) || palette;
        });
    };
    MapLegendComponent.prototype.ngOnInit = function () { };
    MapLegendComponent.ɵfac = function MapLegendComponent_Factory(t) { return new (t || MapLegendComponent)(i0.ɵɵdirectiveInject(i1.PaletteService)); };
    MapLegendComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MapLegendComponent, selectors: [["map-legend"]], inputs: { imageURL: "imageURL", colours: "colours", labels: "labels", title: "title", mapUnits: "mapUnits", helpText: "helpText", tooltipPlacement: "tooltipPlacement", attribution: "attribution", attributionLink: "attributionLink", cbPalette: "cbPalette", cbCount: "cbCount", cbReverse: "cbReverse", cbRange: "cbRange" }, decls: 11, vars: 7, consts: [[1, "map-legend", "panel", "panel-group"], ["tooltipContent", ""], [3, "innerHTML", 4, "ngIf"], ["container", "body", 3, "ngbTooltip", "placement", 4, "ngIf"], [4, "ngIf"], [3, "innerHtml"], [3, "innerHTML"], ["container", "body", 3, "ngbTooltip", "placement"], [1, "fa", "fa-info-circle"], [2, "display", "table", "line-height", "15px"], ["style", "display:table-row;padding:0;", 4, "ngFor", "ngForOf"], [2, "display", "table-row", "padding", "0"], [1, "legend-colour"], [1, "legend-entry", 3, "ngStyle"], [1, "legend-label"], [3, "src"], [3, "href"]], template: function MapLegendComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, MapLegendComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(3, "strong");
            i0.ɵɵtext(4);
            i0.ɵɵtemplate(5, MapLegendComponent_span_5_Template, 1, 1, "span", 2);
            i0.ɵɵtemplate(6, MapLegendComponent_span_6_Template, 2, 2, "span", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, MapLegendComponent_div_7_Template, 3, 1, "div", 4);
            i0.ɵɵtemplate(8, MapLegendComponent_div_8_Template, 2, 1, "div", 4);
            i0.ɵɵtemplate(9, MapLegendComponent_p_9_Template, 4, 2, "p", 4);
            i0.ɵɵtemplate(10, MapLegendComponent_p_10_Template, 2, 1, "p", 4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1("", ctx.title, " ");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.mapUnits);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.helpText);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.imageURL);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.imageURL);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.attributionLink);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.attribution && !ctx.attributionLink);
        } }, directives: [i2.NgIf, i3.NgbTooltip, i2.NgForOf, i2.NgStyle], styles: [".map-legend[_ngcontent-%COMP%]{\n  display:block;\n  background: white;\n}\n\n.legend-colour[_ngcontent-%COMP%]{\n  display:table-cell;\n  padding:0px;\n}\n\n.legend-label[_ngcontent-%COMP%]{\n  display:table-cell;\n  padding:0px 4px 2px 2px;\n  font-size:10px;\n  vertical-align:middle;\n}\n\n.legend-entry[_ngcontent-%COMP%] {\n  float: left;\n  width: 15px !important;\n  height: 15px !important;\n}"] });
    return MapLegendComponent;
}());
exports.MapLegendComponent = MapLegendComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MapLegendComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'map-legend',
                template: "<div class=\"map-legend panel panel-group\">\n<ng-template #tooltipContent>\n  <span [innerHtml]=helpText></span>\n</ng-template>\n<strong>{{title}} <span *ngIf=\"mapUnits\" [innerHTML]=\"'('+mapUnits+')'\"></span>\n        <span *ngIf=\"helpText\"\n              [ngbTooltip]=\"tooltipContent\"\n              [placement]=\"tooltipPlacement\"\n              container=\"body\">\n          <i class=\"fa fa-info-circle\"></i>\n        </span>\n</strong>\n\n  <div *ngIf=\"!imageURL\">\n    <div style=\"display:table;line-height:15px\">\n      <div style=\"display:table-row;padding:0;\"\n          *ngFor=\"let colour of colours; let i=index\">\n        <div class=\"legend-colour\">\n          <i class=\"legend-entry\" [ngStyle]=\"{background:colour}\"></i>\n        </div>\n        <div class=\"legend-label\">\n          <span [innerHTML]=\"generatedLabels[i]\"></span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"imageURL\">\n    <img [src]=\"imageURL\">\n  </div>\n  <p *ngIf=\"attributionLink\">Source: <a [href]=\"attributionLink\">{{attribution || 'details'}}</a></p>\n  <p *ngIf=\"attribution&&!attributionLink\">Source: {{attribution}}</p>\n</div>\n", styles: ["\n.map-legend{\n  display:block;\n  background: white;\n}\n\n.legend-colour{\n  display:table-cell;\n  padding:0px;\n}\n\n.legend-label{\n  display:table-cell;\n  padding:0px 4px 2px 2px;\n  font-size:10px;\n  vertical-align:middle;\n}\n\n.legend-entry {\n  float: left;\n  width: 15px !important;\n  height: 15px !important;\n}\n"]
            }]
    }], function () { return [{ type: i1.PaletteService }]; }, { imageURL: [{
            type: core_1.Input
        }], colours: [{
            type: core_1.Input
        }], labels: [{
            type: core_1.Input
        }], title: [{
            type: core_1.Input
        }], mapUnits: [{
            type: core_1.Input
        }], helpText: [{
            type: core_1.Input
        }], tooltipPlacement: [{
            type: core_1.Input
        }], attribution: [{
            type: core_1.Input
        }], attributionLink: [{
            type: core_1.Input
        }], cbPalette: [{
            type: core_1.Input
        }], cbCount: [{
            type: core_1.Input
        }], cbReverse: [{
            type: core_1.Input
        }], cbRange: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWxlZ2VuZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJtYXAtbGVnZW5kL21hcC1sZWdlbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF3RTtBQUN4RSxxQ0FBMEM7Ozs7OztJQU14QywwQkFBa0M7OztJQUE1Qiw4REFBb0I7OztJQUVWLDBCQUE2RDs7O0lBQXRDLDBFQUE4Qjs7O0lBQy9ELCtCQUlFO0lBQUEsdUJBQWlDO0lBQ25DLGlCQUFPOzs7O0lBSkQsZ0NBQTZCLHNDQUFBOzs7O0lBU3JDLCtCQUVFO0lBQUEsK0JBQ0U7SUFBQSx3QkFBNEQ7SUFDOUQsaUJBQU07SUFDTiwrQkFDRTtJQUFBLDBCQUE4QztJQUNoRCxpQkFBTTtJQUNSLGlCQUFNOzs7OztJQUxzQixlQUErQjtJQUEvQiwrREFBK0I7SUFHakQsZUFBZ0M7SUFBaEMsNEVBQWdDOzs7SUFSOUMsMkJBQ0U7SUFBQSw4QkFDRTtJQUFBLDBFQVFNO0lBQ1IsaUJBQU07SUFDUixpQkFBTTs7O0lBVHFCLGVBQVk7SUFBWix3Q0FBWTs7O0lBV3ZDLDJCQUNFO0lBQUEsMEJBQ0Y7SUFBQSxpQkFBTTs7O0lBREMsZUFBZ0I7SUFBaEIsdURBQWdCOzs7SUFFdkIseUJBQTJCO0lBQUEsd0JBQVE7SUFBQSw2QkFBNEI7SUFBQSxZQUE0QjtJQUFBLGlCQUFJO0lBQUEsaUJBQUk7OztJQUE3RCxlQUF3QjtJQUF4QiwrREFBd0I7SUFBQyxlQUE0QjtJQUE1QixxREFBNEI7OztJQUMzRix5QkFBeUM7SUFBQSxZQUF1QjtJQUFBLGlCQUFJOzs7SUFBM0IsZUFBdUI7SUFBdkIseURBQXVCOztBQWpDbEU7SUErSkUsNEJBQW9CLFNBQXdCO1FBQXhCLGNBQVMsR0FBVCxTQUFTLENBQWU7UUFsR25DLFlBQU8sR0FBa0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2xE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SztZQUNHLE9BQU87a0JBQWYsWUFBSztZQUNHLE1BQU07a0JBQWQsWUFBSztZQUNHLEtBQUs7a0JBQWIsWUFBSztZQUNHLFFBQVE7a0JBQWhCLFlBQUs7WUFDRyxRQUFRO2tCQUFoQixZQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixZQUFLO1lBQ0csV0FBVztrQkFBbkIsWUFBSztZQUNHLGVBQWU7a0JBQXZCLFlBQUs7WUFRTyxTQUFTO2tCQUFyQixZQUFLO1lBT08sT0FBTztrQkFBbkIsWUFBSztZQU9PLFNBQVM7a0JBQXJCLFlBQUs7WUFPTyxPQUFPO2tCQUFuQixZQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWxldHRlU2VydmljZSB9IGZyb20gJ21hcC13YWxkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWFwLWxlZ2VuZCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm1hcC1sZWdlbmQgcGFuZWwgcGFuZWwtZ3JvdXBcIj5cbjxuZy10ZW1wbGF0ZSAjdG9vbHRpcENvbnRlbnQ+XG4gIDxzcGFuIFtpbm5lckh0bWxdPWhlbHBUZXh0Pjwvc3Bhbj5cbjwvbmctdGVtcGxhdGU+XG48c3Ryb25nPnt7dGl0bGV9fSA8c3BhbiAqbmdJZj1cIm1hcFVuaXRzXCIgW2lubmVySFRNTF09XCInKCcrbWFwVW5pdHMrJyknXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiAqbmdJZj1cImhlbHBUZXh0XCJcbiAgICAgICAgICAgICAgW25nYlRvb2x0aXBdPVwidG9vbHRpcENvbnRlbnRcIlxuICAgICAgICAgICAgICBbcGxhY2VtZW50XT1cInRvb2x0aXBQbGFjZW1lbnRcIlxuICAgICAgICAgICAgICBjb250YWluZXI9XCJib2R5XCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1pbmZvLWNpcmNsZVwiPjwvaT5cbiAgICAgICAgPC9zcGFuPlxuPC9zdHJvbmc+XG5cbiAgPGRpdiAqbmdJZj1cIiFpbWFnZVVSTFwiPlxuICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OnRhYmxlO2xpbmUtaGVpZ2h0OjE1cHhcIj5cbiAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OnRhYmxlLXJvdztwYWRkaW5nOjA7XCJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgY29sb3VyIG9mIGNvbG91cnM7IGxldCBpPWluZGV4XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsZWdlbmQtY29sb3VyXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJsZWdlbmQtZW50cnlcIiBbbmdTdHlsZV09XCJ7YmFja2dyb3VuZDpjb2xvdXJ9XCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxlZ2VuZC1sYWJlbFwiPlxuICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwiZ2VuZXJhdGVkTGFiZWxzW2ldXCI+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2ICpuZ0lmPVwiaW1hZ2VVUkxcIj5cbiAgICA8aW1nIFtzcmNdPVwiaW1hZ2VVUkxcIj5cbiAgPC9kaXY+XG4gIDxwICpuZ0lmPVwiYXR0cmlidXRpb25MaW5rXCI+U291cmNlOiA8YSBbaHJlZl09XCJhdHRyaWJ1dGlvbkxpbmtcIj57e2F0dHJpYnV0aW9uIHx8ICdkZXRhaWxzJ319PC9hPjwvcD5cbiAgPHAgKm5nSWY9XCJhdHRyaWJ1dGlvbiYmIWF0dHJpYnV0aW9uTGlua1wiPlNvdXJjZToge3thdHRyaWJ1dGlvbn19PC9wPlxuPC9kaXY+XG5gLHN0eWxlczogW2Bcbi5tYXAtbGVnZW5ke1xuICBkaXNwbGF5OmJsb2NrO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmxlZ2VuZC1jb2xvdXJ7XG4gIGRpc3BsYXk6dGFibGUtY2VsbDtcbiAgcGFkZGluZzowcHg7XG59XG5cbi5sZWdlbmQtbGFiZWx7XG4gIGRpc3BsYXk6dGFibGUtY2VsbDtcbiAgcGFkZGluZzowcHggNHB4IDJweCAycHg7XG4gIGZvbnQtc2l6ZToxMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG59XG5cbi5sZWdlbmQtZW50cnkge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDE1cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5gXX0pXG5leHBvcnQgY2xhc3MgTWFwTGVnZW5kQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaW1hZ2VVUkw6IHN0cmluZ1xuICBASW5wdXQoKSBjb2xvdXJzOiBBcnJheTxzdHJpbmc+ID0gWydyZWQnLCAnd2hpdGUnLCAnYmx1ZSddO1xuICBASW5wdXQoKSBsYWJlbHM6IEFycmF5PHN0cmluZz4gPSBbXTsvL1snLScsJy0nLCctJ107XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSAndGhlIHRpdGxlJztcbiAgQElucHV0KCkgbWFwVW5pdHMgOnN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBoZWxwVGV4dDpzdHJpbmc9J05vIGNvbW1lbnQnO1xuICBASW5wdXQoKSB0b29sdGlwUGxhY2VtZW50OnN0cmluZz0ncmlnaHQnO1xuICBASW5wdXQoKSBhdHRyaWJ1dGlvbjogc3RyaW5nO1xuICBASW5wdXQoKSBhdHRyaWJ1dGlvbkxpbms6IHN0cmluZztcblxuICBnZW5lcmF0ZWRMYWJlbHM6IHN0cmluZ1tdID0gW107XG4gIF9jYlBhbGV0dGU6c3RyaW5nXG4gIF9jYkNvdW50Om51bWJlcjtcbiAgX2NiUmV2ZXJzZTpib29sZWFuO1xuICBfY2JSYW5nZTpBcnJheTxudW1iZXI+O1xuXG4gIEBJbnB1dCgpIHNldCBjYlBhbGV0dGUoY2JwOnN0cmluZyl7XG4gICAgdGhpcy5fY2JQYWxldHRlID0gY2JwO1xuICAgIHRoaXMuZ2VuZXJhdGVQYWxldHRlKCk7XG4gIH1cblxuICBnZXQgY2JQYWxldHRlKCk6c3RyaW5ne3JldHVybiB0aGlzLl9jYlBhbGV0dGU7fVxuXG4gIEBJbnB1dCgpIHNldCBjYkNvdW50KGNiYzpudW1iZXIpe1xuICAgIHRoaXMuX2NiQ291bnQ9Y2JjO1xuICAgIHRoaXMuZ2VuZXJhdGVQYWxldHRlKCk7XG4gIH1cblxuICBnZXQgY2JDb3VudCgpOm51bWJlcntyZXR1cm4gdGhpcy5fY2JDb3VudDt9XG5cbiAgQElucHV0KCkgc2V0IGNiUmV2ZXJzZShjYnI6Ym9vbGVhbil7XG4gICAgdGhpcy5fY2JSZXZlcnNlPWNicjtcbiAgICB0aGlzLmdlbmVyYXRlUGFsZXR0ZSgpO1xuICB9XG5cbiAgZ2V0IGNiUmV2ZXJzZSgpOmJvb2xlYW57cmV0dXJuIHRoaXMuX2NiUmV2ZXJzZTt9XG5cbiAgQElucHV0KCkgc2V0IGNiUmFuZ2UoY2JyOkFycmF5PG51bWJlcj4pe1xuICAgIHRoaXMuX2NiUmFuZ2UgPSBjYnI7XG4gICAgdGhpcy5nZW5lcmF0ZVBhbGV0dGUoKTtcbiAgfVxuXG4gIGdldCBjYlJhbmdlKCk6QXJyYXk8bnVtYmVyPntyZXR1cm4gdGhpcy5fY2JSYW5nZTt9XG5cbiAgZ2VuZXJhdGVMYWJlbHMoY291bnQ6bnVtYmVyKTpBcnJheTxzdHJpbmc+fG51bGx7XG4gICAgaWYoIXRoaXMuX2NiUmFuZ2V8fCFjb3VudCl7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgZGVsdGEgPSAodGhpcy5fY2JSYW5nZVsxXS10aGlzLl9jYlJhbmdlWzBdKS8oY291bnQpO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgbG93ZXI9dGhpcy5fY2JSYW5nZVswXTtcbiAgICBsZXQgIGRlY2ltYWxQbGFjZXMgPSBNYXRoLm1heCgwLDItKCtNYXRoLmxvZzEwKHRoaXMuX2NiUmFuZ2VbMV0tdGhpcy5fY2JSYW5nZVswXSkudG9GaXhlZCgpKSk7XG4gICAgZGVjaW1hbFBsYWNlcyA9IE1hdGgubWluKGRlY2ltYWxQbGFjZXMsMTApO1xuICAgIHZhciB1cHBlcjtcbiAgICBmb3IobGV0IGk9MTtpPChjb3VudCk7aSsrKXtcbiAgICAgIHVwcGVyID0gdGhpcy5fY2JSYW5nZVswXStpKmRlbHRhO1xuICAgICAgcmVzdWx0LnB1c2goYCR7dGhpcy5mb3JtYXRWYWx1ZShsb3dlcixkZWNpbWFsUGxhY2VzKX0tJHt0aGlzLmZvcm1hdFZhbHVlKHVwcGVyLGRlY2ltYWxQbGFjZXMpfWApO1xuICAgICAgbG93ZXIgPSB1cHBlcjtcbiAgICB9XG4gICAgcmVzdWx0LnB1c2goJyZnZTsnK3RoaXMuZm9ybWF0VmFsdWUodXBwZXIsZGVjaW1hbFBsYWNlcykpO1xuICAgIHJlc3VsdC5yZXZlcnNlKCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdlbmVyYXRlUGFsZXR0ZSgpe1xuICAgIGlmKCF0aGlzLl9jYlBhbGV0dGV8fCF0aGlzLl9jYkNvdW50KXtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9wYWxldHRlcy5nZXRQYWxldHRlKHRoaXMuX2NiUGFsZXR0ZSx0aGlzLl9jYlJldmVyc2UsdGhpcy5fY2JDb3VudClcbiAgICAgIC5zdWJzY3JpYmUocGFsZXR0ZT0+e1xuICAgICAgICB0aGlzLmNvbG91cnMgPSBwYWxldHRlLnNsaWNlKCkucmV2ZXJzZSgpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlZExhYmVscyA9IHRoaXMubGFiZWxzIHx8IHRoaXMuZ2VuZXJhdGVMYWJlbHModGhpcy5jb2xvdXJzLmxlbmd0aCkgfHwgcGFsZXR0ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvcm1hdFZhbHVlID0gZnVuY3Rpb24odmFsOm51bWJlcixkZWNpbWFsUGxhY2VzOm51bWJlcik6c3RyaW5ne1xuICAgIGlmKCF2YWwpe1xuICAgICAgaWYodmFsPT09MCl7XG4gICAgICAgIHJldHVybiAnMCc7XG4gICAgICB9XG4gICAgICByZXR1cm4gJy0nO1xuICAgIH1cbiAgICAvLyBBZGQgdGhvdXNhbmQncyBzZXBhcmF0b3IuIFNvdXJjZTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjkwMTI5OFxuICAgIHZhciBwYXJ0cyA9IHZhbC50b1N0cmluZygpLnNwbGl0KFwiLlwiKTtcbiAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcblxuICAgIGlmKGRlY2ltYWxQbGFjZXM9PT0wKXtcbiAgICAgIHJldHVybiBwYXJ0c1swXTtcbiAgICB9XG5cbiAgICBpZigoZGVjaW1hbFBsYWNlcyE9PW51bGwpICYmKGRlY2ltYWxQbGFjZXMhPT11bmRlZmluZWQpICYmIChwYXJ0cy5sZW5ndGg9PT0yKSl7XG4gICAgICBwYXJ0c1sxXSA9IHBhcnRzWzFdLnN1YnN0cigwLGRlY2ltYWxQbGFjZXMpO1xuICAgICAgcGFydHNbMV0gPSBwYXJ0c1sxXS5yZXBsYWNlKC8wKyQvLCAnJyk7XG4gICAgfVxuICAgIHJldHVybiBwYXJ0cy5qb2luKCcuJyk7XG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGFsZXR0ZXM6UGFsZXR0ZVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG5cbn1cbiJdfQ==