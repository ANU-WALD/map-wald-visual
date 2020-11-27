"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapLegendComponent = void 0;
const core_1 = require("@angular/core");
const map_wald_1 = require("map-wald");
const i0 = require("@angular/core");
const i1 = require("map-wald");
const i2 = require("@angular/common");
const i3 = require("@ng-bootstrap/ng-bootstrap");
function MapLegendComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 5);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHtml", ctx_r1.helpText, i0.ɵɵsanitizeHtml);
} }
function MapLegendComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 6);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", "(" + ctx_r2.mapUnits + ")", i0.ɵɵsanitizeHtml);
} }
function MapLegendComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵelement(1, "i", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngbTooltip", _r0)("placement", ctx_r3.tooltipPlacement);
} }
const _c0 = function (a0) { return { background: a0 }; };
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
    const colour_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r8 = i0.ɵɵnextContext(2);
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
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.colours);
} }
function MapLegendComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "img", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
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
    const ctx_r6 = i0.ɵɵnextContext();
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
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("Source: ", ctx_r7.attribution, "");
} }
class MapLegendComponent {
    constructor(_palettes) {
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
    set cbPalette(cbp) {
        this._cbPalette = cbp;
        this.generatePalette();
    }
    get cbPalette() { return this._cbPalette; }
    set cbCount(cbc) {
        this._cbCount = cbc;
        this.generatePalette();
    }
    get cbCount() { return this._cbCount; }
    set cbReverse(cbr) {
        this._cbReverse = cbr;
        this.generatePalette();
    }
    get cbReverse() { return this._cbReverse; }
    set cbRange(cbr) {
        this._cbRange = cbr;
        this.generatePalette();
    }
    get cbRange() { return this._cbRange; }
    generateLabels(count) {
        if (!this._cbRange || !count) {
            return null;
        }
        var delta = (this._cbRange[1] - this._cbRange[0]) / (count);
        var result = [];
        var lower = this._cbRange[0];
        let decimalPlaces = Math.max(0, 2 - (+Math.log10(this._cbRange[1] - this._cbRange[0]).toFixed()));
        decimalPlaces = Math.min(decimalPlaces, 10);
        var upper;
        for (let i = 1; i < (count); i++) {
            upper = this._cbRange[0] + i * delta;
            result.push(`${this.formatValue(lower, decimalPlaces)}-${this.formatValue(upper, decimalPlaces)}`);
            lower = upper;
        }
        result.push('&ge;' + this.formatValue(upper, decimalPlaces));
        result.reverse();
        return result;
    }
    generatePalette() {
        if (!this._cbPalette || !this._cbCount) {
            return;
        }
        this._palettes.getPalette(this._cbPalette, this._cbReverse, this._cbCount)
            .subscribe(palette => {
            this.colours = palette.slice().reverse();
            this.generatedLabels = this.labels || this.generateLabels(this.colours.length) || palette;
        });
    }
    ngOnInit() { }
}
exports.MapLegendComponent = MapLegendComponent;
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MapLegendComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'map-legend',
                template: `<div class="map-legend panel panel-group">
<ng-template #tooltipContent>
  <span [innerHtml]=helpText></span>
</ng-template>
<strong>{{title}} <span *ngIf="mapUnits" [innerHTML]="'('+mapUnits+')'"></span>
        <span *ngIf="helpText"
              [ngbTooltip]="tooltipContent"
              [placement]="tooltipPlacement"
              container="body">
          <i class="fa fa-info-circle"></i>
        </span>
</strong>

  <div *ngIf="!imageURL">
    <div style="display:table;line-height:15px">
      <div style="display:table-row;padding:0;"
          *ngFor="let colour of colours; let i=index">
        <div class="legend-colour">
          <i class="legend-entry" [ngStyle]="{background:colour}"></i>
        </div>
        <div class="legend-label">
          <span [innerHTML]="generatedLabels[i]"></span>
        </div>
      </div>
    </div>
  </div>

  <div *ngIf="imageURL">
    <img [src]="imageURL">
  </div>
  <p *ngIf="attributionLink">Source: <a [href]="attributionLink">{{attribution || 'details'}}</a></p>
  <p *ngIf="attribution&&!attributionLink">Source: {{attribution}}</p>
</div>
`, styles: [`
.map-legend{
  display:block;
  background: white;
}

.legend-colour{
  display:table-cell;
  padding:0px;
}

.legend-label{
  display:table-cell;
  padding:0px 4px 2px 2px;
  font-size:10px;
  vertical-align:middle;
}

.legend-entry {
  float: left;
  width: 15px !important;
  height: 15px !important;
}
`]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWxlZ2VuZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJtYXAtbGVnZW5kL21hcC1sZWdlbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUF3RTtBQUN4RSx1Q0FBMEM7Ozs7OztJQU14QywwQkFBa0M7OztJQUE1Qiw4REFBb0I7OztJQUVWLDBCQUE2RDs7O0lBQXRDLDBFQUE4Qjs7O0lBQy9ELCtCQUlFO0lBQUEsdUJBQWlDO0lBQ25DLGlCQUFPOzs7O0lBSkQsZ0NBQTZCLHNDQUFBOzs7O0lBU3JDLCtCQUVFO0lBQUEsK0JBQ0U7SUFBQSx3QkFBNEQ7SUFDOUQsaUJBQU07SUFDTiwrQkFDRTtJQUFBLDBCQUE4QztJQUNoRCxpQkFBTTtJQUNSLGlCQUFNOzs7OztJQUxzQixlQUErQjtJQUEvQiwrREFBK0I7SUFHakQsZUFBZ0M7SUFBaEMsNEVBQWdDOzs7SUFSOUMsMkJBQ0U7SUFBQSw4QkFDRTtJQUFBLDBFQVFNO0lBQ1IsaUJBQU07SUFDUixpQkFBTTs7O0lBVHFCLGVBQVk7SUFBWix3Q0FBWTs7O0lBV3ZDLDJCQUNFO0lBQUEsMEJBQ0Y7SUFBQSxpQkFBTTs7O0lBREMsZUFBZ0I7SUFBaEIsdURBQWdCOzs7SUFFdkIseUJBQTJCO0lBQUEsd0JBQVE7SUFBQSw2QkFBNEI7SUFBQSxZQUE0QjtJQUFBLGlCQUFJO0lBQUEsaUJBQUk7OztJQUE3RCxlQUF3QjtJQUF4QiwrREFBd0I7SUFBQyxlQUE0QjtJQUE1QixxREFBNEI7OztJQUMzRix5QkFBeUM7SUFBQSxZQUF1QjtJQUFBLGlCQUFJOzs7SUFBM0IsZUFBdUI7SUFBdkIseURBQXVCOztBQWpDbEUsTUEyRGEsa0JBQWtCO0lBb0c3QixZQUFvQixTQUF3QjtRQUF4QixjQUFTLEdBQVQsU0FBUyxDQUFlO1FBbEduQyxZQUFPLEdBQWtCLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLENB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SztZQUNHLE9BQU87a0JBQWYsWUFBSztZQUNHLE1BQU07a0JBQWQsWUFBSztZQUNHLEtBQUs7a0JBQWIsWUFBSztZQUNHLFFBQVE7a0JBQWhCLFlBQUs7WUFDRyxRQUFRO2tCQUFoQixZQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixZQUFLO1lBQ0csV0FBVztrQkFBbkIsWUFBSztZQUNHLGVBQWU7a0JBQXZCLFlBQUs7WUFRTyxTQUFTO2tCQUFyQixZQUFLO1lBT08sT0FBTztrQkFBbkIsWUFBSztZQU9PLFNBQVM7a0JBQXJCLFlBQUs7WUFPTyxPQUFPO2tCQUFuQixZQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWxldHRlU2VydmljZSB9IGZyb20gJ21hcC13YWxkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWFwLWxlZ2VuZCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm1hcC1sZWdlbmQgcGFuZWwgcGFuZWwtZ3JvdXBcIj5cbjxuZy10ZW1wbGF0ZSAjdG9vbHRpcENvbnRlbnQ+XG4gIDxzcGFuIFtpbm5lckh0bWxdPWhlbHBUZXh0Pjwvc3Bhbj5cbjwvbmctdGVtcGxhdGU+XG48c3Ryb25nPnt7dGl0bGV9fSA8c3BhbiAqbmdJZj1cIm1hcFVuaXRzXCIgW2lubmVySFRNTF09XCInKCcrbWFwVW5pdHMrJyknXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiAqbmdJZj1cImhlbHBUZXh0XCJcbiAgICAgICAgICAgICAgW25nYlRvb2x0aXBdPVwidG9vbHRpcENvbnRlbnRcIlxuICAgICAgICAgICAgICBbcGxhY2VtZW50XT1cInRvb2x0aXBQbGFjZW1lbnRcIlxuICAgICAgICAgICAgICBjb250YWluZXI9XCJib2R5XCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1pbmZvLWNpcmNsZVwiPjwvaT5cbiAgICAgICAgPC9zcGFuPlxuPC9zdHJvbmc+XG5cbiAgPGRpdiAqbmdJZj1cIiFpbWFnZVVSTFwiPlxuICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OnRhYmxlO2xpbmUtaGVpZ2h0OjE1cHhcIj5cbiAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OnRhYmxlLXJvdztwYWRkaW5nOjA7XCJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgY29sb3VyIG9mIGNvbG91cnM7IGxldCBpPWluZGV4XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsZWdlbmQtY29sb3VyXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJsZWdlbmQtZW50cnlcIiBbbmdTdHlsZV09XCJ7YmFja2dyb3VuZDpjb2xvdXJ9XCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxlZ2VuZC1sYWJlbFwiPlxuICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwiZ2VuZXJhdGVkTGFiZWxzW2ldXCI+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2ICpuZ0lmPVwiaW1hZ2VVUkxcIj5cbiAgICA8aW1nIFtzcmNdPVwiaW1hZ2VVUkxcIj5cbiAgPC9kaXY+XG4gIDxwICpuZ0lmPVwiYXR0cmlidXRpb25MaW5rXCI+U291cmNlOiA8YSBbaHJlZl09XCJhdHRyaWJ1dGlvbkxpbmtcIj57e2F0dHJpYnV0aW9uIHx8ICdkZXRhaWxzJ319PC9hPjwvcD5cbiAgPHAgKm5nSWY9XCJhdHRyaWJ1dGlvbiYmIWF0dHJpYnV0aW9uTGlua1wiPlNvdXJjZToge3thdHRyaWJ1dGlvbn19PC9wPlxuPC9kaXY+XG5gLHN0eWxlczogW2Bcbi5tYXAtbGVnZW5ke1xuICBkaXNwbGF5OmJsb2NrO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmxlZ2VuZC1jb2xvdXJ7XG4gIGRpc3BsYXk6dGFibGUtY2VsbDtcbiAgcGFkZGluZzowcHg7XG59XG5cbi5sZWdlbmQtbGFiZWx7XG4gIGRpc3BsYXk6dGFibGUtY2VsbDtcbiAgcGFkZGluZzowcHggNHB4IDJweCAycHg7XG4gIGZvbnQtc2l6ZToxMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG59XG5cbi5sZWdlbmQtZW50cnkge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDE1cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5gXX0pXG5leHBvcnQgY2xhc3MgTWFwTGVnZW5kQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaW1hZ2VVUkw6IHN0cmluZ1xuICBASW5wdXQoKSBjb2xvdXJzOiBBcnJheTxzdHJpbmc+ID0gWydyZWQnLCAnd2hpdGUnLCAnYmx1ZSddO1xuICBASW5wdXQoKSBsYWJlbHM6IEFycmF5PHN0cmluZz4gPSBbXTsvL1snLScsJy0nLCctJ107XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSAndGhlIHRpdGxlJztcbiAgQElucHV0KCkgbWFwVW5pdHMgOnN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBoZWxwVGV4dDpzdHJpbmc9J05vIGNvbW1lbnQnO1xuICBASW5wdXQoKSB0b29sdGlwUGxhY2VtZW50OnN0cmluZz0ncmlnaHQnO1xuICBASW5wdXQoKSBhdHRyaWJ1dGlvbjogc3RyaW5nO1xuICBASW5wdXQoKSBhdHRyaWJ1dGlvbkxpbms6IHN0cmluZztcblxuICBnZW5lcmF0ZWRMYWJlbHM6IHN0cmluZ1tdID0gW107XG4gIF9jYlBhbGV0dGU6c3RyaW5nXG4gIF9jYkNvdW50Om51bWJlcjtcbiAgX2NiUmV2ZXJzZTpib29sZWFuO1xuICBfY2JSYW5nZTpBcnJheTxudW1iZXI+O1xuXG4gIEBJbnB1dCgpIHNldCBjYlBhbGV0dGUoY2JwOnN0cmluZyl7XG4gICAgdGhpcy5fY2JQYWxldHRlID0gY2JwO1xuICAgIHRoaXMuZ2VuZXJhdGVQYWxldHRlKCk7XG4gIH1cblxuICBnZXQgY2JQYWxldHRlKCk6c3RyaW5ne3JldHVybiB0aGlzLl9jYlBhbGV0dGU7fVxuXG4gIEBJbnB1dCgpIHNldCBjYkNvdW50KGNiYzpudW1iZXIpe1xuICAgIHRoaXMuX2NiQ291bnQ9Y2JjO1xuICAgIHRoaXMuZ2VuZXJhdGVQYWxldHRlKCk7XG4gIH1cblxuICBnZXQgY2JDb3VudCgpOm51bWJlcntyZXR1cm4gdGhpcy5fY2JDb3VudDt9XG5cbiAgQElucHV0KCkgc2V0IGNiUmV2ZXJzZShjYnI6Ym9vbGVhbil7XG4gICAgdGhpcy5fY2JSZXZlcnNlPWNicjtcbiAgICB0aGlzLmdlbmVyYXRlUGFsZXR0ZSgpO1xuICB9XG5cbiAgZ2V0IGNiUmV2ZXJzZSgpOmJvb2xlYW57cmV0dXJuIHRoaXMuX2NiUmV2ZXJzZTt9XG5cbiAgQElucHV0KCkgc2V0IGNiUmFuZ2UoY2JyOkFycmF5PG51bWJlcj4pe1xuICAgIHRoaXMuX2NiUmFuZ2UgPSBjYnI7XG4gICAgdGhpcy5nZW5lcmF0ZVBhbGV0dGUoKTtcbiAgfVxuXG4gIGdldCBjYlJhbmdlKCk6QXJyYXk8bnVtYmVyPntyZXR1cm4gdGhpcy5fY2JSYW5nZTt9XG5cbiAgZ2VuZXJhdGVMYWJlbHMoY291bnQ6bnVtYmVyKTpBcnJheTxzdHJpbmc+fG51bGx7XG4gICAgaWYoIXRoaXMuX2NiUmFuZ2V8fCFjb3VudCl7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgZGVsdGEgPSAodGhpcy5fY2JSYW5nZVsxXS10aGlzLl9jYlJhbmdlWzBdKS8oY291bnQpO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgbG93ZXI9dGhpcy5fY2JSYW5nZVswXTtcbiAgICBsZXQgIGRlY2ltYWxQbGFjZXMgPSBNYXRoLm1heCgwLDItKCtNYXRoLmxvZzEwKHRoaXMuX2NiUmFuZ2VbMV0tdGhpcy5fY2JSYW5nZVswXSkudG9GaXhlZCgpKSk7XG4gICAgZGVjaW1hbFBsYWNlcyA9IE1hdGgubWluKGRlY2ltYWxQbGFjZXMsMTApO1xuICAgIHZhciB1cHBlcjtcbiAgICBmb3IobGV0IGk9MTtpPChjb3VudCk7aSsrKXtcbiAgICAgIHVwcGVyID0gdGhpcy5fY2JSYW5nZVswXStpKmRlbHRhO1xuICAgICAgcmVzdWx0LnB1c2goYCR7dGhpcy5mb3JtYXRWYWx1ZShsb3dlcixkZWNpbWFsUGxhY2VzKX0tJHt0aGlzLmZvcm1hdFZhbHVlKHVwcGVyLGRlY2ltYWxQbGFjZXMpfWApO1xuICAgICAgbG93ZXIgPSB1cHBlcjtcbiAgICB9XG4gICAgcmVzdWx0LnB1c2goJyZnZTsnK3RoaXMuZm9ybWF0VmFsdWUodXBwZXIsZGVjaW1hbFBsYWNlcykpO1xuICAgIHJlc3VsdC5yZXZlcnNlKCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdlbmVyYXRlUGFsZXR0ZSgpe1xuICAgIGlmKCF0aGlzLl9jYlBhbGV0dGV8fCF0aGlzLl9jYkNvdW50KXtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9wYWxldHRlcy5nZXRQYWxldHRlKHRoaXMuX2NiUGFsZXR0ZSx0aGlzLl9jYlJldmVyc2UsdGhpcy5fY2JDb3VudClcbiAgICAgIC5zdWJzY3JpYmUocGFsZXR0ZT0+e1xuICAgICAgICB0aGlzLmNvbG91cnMgPSBwYWxldHRlLnNsaWNlKCkucmV2ZXJzZSgpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlZExhYmVscyA9IHRoaXMubGFiZWxzIHx8IHRoaXMuZ2VuZXJhdGVMYWJlbHModGhpcy5jb2xvdXJzLmxlbmd0aCkgfHwgcGFsZXR0ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvcm1hdFZhbHVlID0gZnVuY3Rpb24odmFsOm51bWJlcixkZWNpbWFsUGxhY2VzOm51bWJlcik6c3RyaW5ne1xuICAgIGlmKCF2YWwpe1xuICAgICAgaWYodmFsPT09MCl7XG4gICAgICAgIHJldHVybiAnMCc7XG4gICAgICB9XG4gICAgICByZXR1cm4gJy0nO1xuICAgIH1cbiAgICAvLyBBZGQgdGhvdXNhbmQncyBzZXBhcmF0b3IuIFNvdXJjZTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjkwMTI5OFxuICAgIHZhciBwYXJ0cyA9IHZhbC50b1N0cmluZygpLnNwbGl0KFwiLlwiKTtcbiAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcblxuICAgIGlmKGRlY2ltYWxQbGFjZXM9PT0wKXtcbiAgICAgIHJldHVybiBwYXJ0c1swXTtcbiAgICB9XG5cbiAgICBpZigoZGVjaW1hbFBsYWNlcyE9PW51bGwpICYmKGRlY2ltYWxQbGFjZXMhPT11bmRlZmluZWQpICYmIChwYXJ0cy5sZW5ndGg9PT0yKSl7XG4gICAgICBwYXJ0c1sxXSA9IHBhcnRzWzFdLnN1YnN0cigwLGRlY2ltYWxQbGFjZXMpO1xuICAgICAgcGFydHNbMV0gPSBwYXJ0c1sxXS5yZXBsYWNlKC8wKyQvLCAnJyk7XG4gICAgfVxuICAgIHJldHVybiBwYXJ0cy5qb2luKCcuJyk7XG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGFsZXR0ZXM6UGFsZXR0ZVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG5cbn1cbiJdfQ==