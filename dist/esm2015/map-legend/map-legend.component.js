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
let MapLegendComponent = class MapLegendComponent {
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
};
MapLegendComponent.ctorParameters = () => [
    { type: map_wald_1.PaletteService }
];
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MapLegendComponent.prototype, "imageURL", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], MapLegendComponent.prototype, "colours", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], MapLegendComponent.prototype, "labels", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MapLegendComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MapLegendComponent.prototype, "mapUnits", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MapLegendComponent.prototype, "helpText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MapLegendComponent.prototype, "tooltipPlacement", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MapLegendComponent.prototype, "attribution", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MapLegendComponent.prototype, "attributionLink", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], MapLegendComponent.prototype, "cbPalette", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], MapLegendComponent.prototype, "cbCount", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], MapLegendComponent.prototype, "cbReverse", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], MapLegendComponent.prototype, "cbRange", null);
MapLegendComponent = __decorate([
    core_1.Component({
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
`,
        styles: [`
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
    }),
    __metadata("design:paramtypes", [map_wald_1.PaletteService])
], MapLegendComponent);
exports.MapLegendComponent = MapLegendComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWxlZ2VuZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJtYXAtbGVnZW5kL21hcC1sZWdlbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQXdFO0FBQ3hFLHVDQUEwQztBQTZEMUMsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFvRzdCLFlBQW9CLFNBQXdCO1FBQXhCLGNBQVMsR0FBVCxTQUFTLENBQWU7UUFsR25DLFlBQU8sR0FBa0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELFdBQU0sR0FBa0IsRUFBRSxDQUFDLENBQUEsZ0JBQWdCO1FBQzNDLFVBQUssR0FBVyxXQUFXLENBQUM7UUFDNUIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixhQUFRLEdBQVEsWUFBWSxDQUFDO1FBQzdCLHFCQUFnQixHQUFRLE9BQU8sQ0FBQztRQUl6QyxvQkFBZSxHQUFhLEVBQUUsQ0FBQztRQW1FL0IsZ0JBQVcsR0FBRyxVQUFTLEdBQVUsRUFBQyxhQUFvQjtZQUNwRCxJQUFHLENBQUMsR0FBRyxFQUFDO2dCQUNOLElBQUcsR0FBRyxLQUFHLENBQUMsRUFBQztvQkFDVCxPQUFPLEdBQUcsQ0FBQztpQkFDWjtnQkFDRCxPQUFPLEdBQUcsQ0FBQzthQUNaO1lBQ0QsdUVBQXVFO1lBQ3ZFLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFFMUQsSUFBRyxhQUFhLEtBQUcsQ0FBQyxFQUFDO2dCQUNuQixPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNq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QUU7O29EQUE4QjtBQUM3QjtJQUFSLFlBQUssRUFBRTs7NERBQWlDO0FBQ2hDO0lBQVIsWUFBSyxFQUFFOzt1REFBcUI7QUFDcEI7SUFBUixZQUFLLEVBQUU7OzJEQUF5QjtBQVF4QjtJQUFSLFlBQUssRUFBRTs7O21EQUdQO0FBSVE7SUFBUixZQUFLLEVBQUU7OztpREFHUDtBQUlRO0lBQVIsWUFBSyxFQUFFOzs7bURBR1A7QUFJUTtJQUFSLFlBQUssRUFBRTs4QkFBaUIsS0FBSztxQ0FBTCxLQUFLO2lEQUc3QjtBQXpDVSxrQkFBa0I7SUEzRDlCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsWUFBWTtRQUN0QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWlDWDtpQkFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F1QlY7S0FBRSxDQUFDO3FDQXFHNEIseUJBQWM7R0FwR2pDLGtCQUFrQixDQXdHOUI7QUF4R1ksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWxldHRlU2VydmljZSB9IGZyb20gJ21hcC13YWxkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWFwLWxlZ2VuZCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm1hcC1sZWdlbmQgcGFuZWwgcGFuZWwtZ3JvdXBcIj5cbjxuZy10ZW1wbGF0ZSAjdG9vbHRpcENvbnRlbnQ+XG4gIDxzcGFuIFtpbm5lckh0bWxdPWhlbHBUZXh0Pjwvc3Bhbj5cbjwvbmctdGVtcGxhdGU+XG48c3Ryb25nPnt7dGl0bGV9fSA8c3BhbiAqbmdJZj1cIm1hcFVuaXRzXCIgW2lubmVySFRNTF09XCInKCcrbWFwVW5pdHMrJyknXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiAqbmdJZj1cImhlbHBUZXh0XCJcbiAgICAgICAgICAgICAgW25nYlRvb2x0aXBdPVwidG9vbHRpcENvbnRlbnRcIlxuICAgICAgICAgICAgICBbcGxhY2VtZW50XT1cInRvb2x0aXBQbGFjZW1lbnRcIlxuICAgICAgICAgICAgICBjb250YWluZXI9XCJib2R5XCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1pbmZvLWNpcmNsZVwiPjwvaT5cbiAgICAgICAgPC9zcGFuPlxuPC9zdHJvbmc+XG5cbiAgPGRpdiAqbmdJZj1cIiFpbWFnZVVSTFwiPlxuICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OnRhYmxlO2xpbmUtaGVpZ2h0OjE1cHhcIj5cbiAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OnRhYmxlLXJvdztwYWRkaW5nOjA7XCJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgY29sb3VyIG9mIGNvbG91cnM7IGxldCBpPWluZGV4XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsZWdlbmQtY29sb3VyXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJsZWdlbmQtZW50cnlcIiBbbmdTdHlsZV09XCJ7YmFja2dyb3VuZDpjb2xvdXJ9XCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxlZ2VuZC1sYWJlbFwiPlxuICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwiZ2VuZXJhdGVkTGFiZWxzW2ldXCI+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2ICpuZ0lmPVwiaW1hZ2VVUkxcIj5cbiAgICA8aW1nIFtzcmNdPVwiaW1hZ2VVUkxcIj5cbiAgPC9kaXY+XG4gIDxwICpuZ0lmPVwiYXR0cmlidXRpb25MaW5rXCI+U291cmNlOiA8YSBbaHJlZl09XCJhdHRyaWJ1dGlvbkxpbmtcIj57e2F0dHJpYnV0aW9uIHx8ICdkZXRhaWxzJ319PC9hPjwvcD5cbiAgPHAgKm5nSWY9XCJhdHRyaWJ1dGlvbiYmIWF0dHJpYnV0aW9uTGlua1wiPlNvdXJjZToge3thdHRyaWJ1dGlvbn19PC9wPlxuPC9kaXY+XG5gLHN0eWxlczogW2Bcbi5tYXAtbGVnZW5ke1xuICBkaXNwbGF5OmJsb2NrO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmxlZ2VuZC1jb2xvdXJ7XG4gIGRpc3BsYXk6dGFibGUtY2VsbDtcbiAgcGFkZGluZzowcHg7XG59XG5cbi5sZWdlbmQtbGFiZWx7XG4gIGRpc3BsYXk6dGFibGUtY2VsbDtcbiAgcGFkZGluZzowcHggNHB4IDJweCAycHg7XG4gIGZvbnQtc2l6ZToxMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG59XG5cbi5sZWdlbmQtZW50cnkge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDE1cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5gXX0pXG5leHBvcnQgY2xhc3MgTWFwTGVnZW5kQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaW1hZ2VVUkw6IHN0cmluZ1xuICBASW5wdXQoKSBjb2xvdXJzOiBBcnJheTxzdHJpbmc+ID0gWydyZWQnLCAnd2hpdGUnLCAnYmx1ZSddO1xuICBASW5wdXQoKSBsYWJlbHM6IEFycmF5PHN0cmluZz4gPSBbXTsvL1snLScsJy0nLCctJ107XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSAndGhlIHRpdGxlJztcbiAgQElucHV0KCkgbWFwVW5pdHMgOnN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBoZWxwVGV4dDpzdHJpbmc9J05vIGNvbW1lbnQnO1xuICBASW5wdXQoKSB0b29sdGlwUGxhY2VtZW50OnN0cmluZz0ncmlnaHQnO1xuICBASW5wdXQoKSBhdHRyaWJ1dGlvbjogc3RyaW5nO1xuICBASW5wdXQoKSBhdHRyaWJ1dGlvbkxpbms6IHN0cmluZztcblxuICBnZW5lcmF0ZWRMYWJlbHM6IHN0cmluZ1tdID0gW107XG4gIF9jYlBhbGV0dGU6c3RyaW5nXG4gIF9jYkNvdW50Om51bWJlcjtcbiAgX2NiUmV2ZXJzZTpib29sZWFuO1xuICBfY2JSYW5nZTpBcnJheTxudW1iZXI+O1xuXG4gIEBJbnB1dCgpIHNldCBjYlBhbGV0dGUoY2JwOnN0cmluZyl7XG4gICAgdGhpcy5fY2JQYWxldHRlID0gY2JwO1xuICAgIHRoaXMuZ2VuZXJhdGVQYWxldHRlKCk7XG4gIH1cblxuICBnZXQgY2JQYWxldHRlKCk6c3RyaW5ne3JldHVybiB0aGlzLl9jYlBhbGV0dGU7fVxuXG4gIEBJbnB1dCgpIHNldCBjYkNvdW50KGNiYzpudW1iZXIpe1xuICAgIHRoaXMuX2NiQ291bnQ9Y2JjO1xuICAgIHRoaXMuZ2VuZXJhdGVQYWxldHRlKCk7XG4gIH1cblxuICBnZXQgY2JDb3VudCgpOm51bWJlcntyZXR1cm4gdGhpcy5fY2JDb3VudDt9XG5cbiAgQElucHV0KCkgc2V0IGNiUmV2ZXJzZShjYnI6Ym9vbGVhbil7XG4gICAgdGhpcy5fY2JSZXZlcnNlPWNicjtcbiAgICB0aGlzLmdlbmVyYXRlUGFsZXR0ZSgpO1xuICB9XG5cbiAgZ2V0IGNiUmV2ZXJzZSgpOmJvb2xlYW57cmV0dXJuIHRoaXMuX2NiUmV2ZXJzZTt9XG5cbiAgQElucHV0KCkgc2V0IGNiUmFuZ2UoY2JyOkFycmF5PG51bWJlcj4pe1xuICAgIHRoaXMuX2NiUmFuZ2UgPSBjYnI7XG4gICAgdGhpcy5nZW5lcmF0ZVBhbGV0dGUoKTtcbiAgfVxuXG4gIGdldCBjYlJhbmdlKCk6QXJyYXk8bnVtYmVyPntyZXR1cm4gdGhpcy5fY2JSYW5nZTt9XG5cbiAgZ2VuZXJhdGVMYWJlbHMoY291bnQ6bnVtYmVyKTpBcnJheTxzdHJpbmc+fG51bGx7XG4gICAgaWYoIXRoaXMuX2NiUmFuZ2V8fCFjb3VudCl7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgZGVsdGEgPSAodGhpcy5fY2JSYW5nZVsxXS10aGlzLl9jYlJhbmdlWzBdKS8oY291bnQpO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgbG93ZXI9dGhpcy5fY2JSYW5nZVswXTtcbiAgICBsZXQgIGRlY2ltYWxQbGFjZXMgPSBNYXRoLm1heCgwLDItKCtNYXRoLmxvZzEwKHRoaXMuX2NiUmFuZ2VbMV0tdGhpcy5fY2JSYW5nZVswXSkudG9GaXhlZCgpKSk7XG4gICAgZGVjaW1hbFBsYWNlcyA9IE1hdGgubWluKGRlY2ltYWxQbGFjZXMsMTApO1xuICAgIHZhciB1cHBlcjtcbiAgICBmb3IobGV0IGk9MTtpPChjb3VudCk7aSsrKXtcbiAgICAgIHVwcGVyID0gdGhpcy5fY2JSYW5nZVswXStpKmRlbHRhO1xuICAgICAgcmVzdWx0LnB1c2goYCR7dGhpcy5mb3JtYXRWYWx1ZShsb3dlcixkZWNpbWFsUGxhY2VzKX0tJHt0aGlzLmZvcm1hdFZhbHVlKHVwcGVyLGRlY2ltYWxQbGFjZXMpfWApO1xuICAgICAgbG93ZXIgPSB1cHBlcjtcbiAgICB9XG4gICAgcmVzdWx0LnB1c2goJyZnZTsnK3RoaXMuZm9ybWF0VmFsdWUodXBwZXIsZGVjaW1hbFBsYWNlcykpO1xuICAgIHJlc3VsdC5yZXZlcnNlKCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdlbmVyYXRlUGFsZXR0ZSgpe1xuICAgIGlmKCF0aGlzLl9jYlBhbGV0dGV8fCF0aGlzLl9jYkNvdW50KXtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9wYWxldHRlcy5nZXRQYWxldHRlKHRoaXMuX2NiUGFsZXR0ZSx0aGlzLl9jYlJldmVyc2UsdGhpcy5fY2JDb3VudClcbiAgICAgIC5zdWJzY3JpYmUocGFsZXR0ZT0+e1xuICAgICAgICB0aGlzLmNvbG91cnMgPSBwYWxldHRlLnNsaWNlKCkucmV2ZXJzZSgpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlZExhYmVscyA9IHRoaXMubGFiZWxzIHx8IHRoaXMuZ2VuZXJhdGVMYWJlbHModGhpcy5jb2xvdXJzLmxlbmd0aCkgfHwgcGFsZXR0ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvcm1hdFZhbHVlID0gZnVuY3Rpb24odmFsOm51bWJlcixkZWNpbWFsUGxhY2VzOm51bWJlcik6c3RyaW5ne1xuICAgIGlmKCF2YWwpe1xuICAgICAgaWYodmFsPT09MCl7XG4gICAgICAgIHJldHVybiAnMCc7XG4gICAgICB9XG4gICAgICByZXR1cm4gJy0nO1xuICAgIH1cbiAgICAvLyBBZGQgdGhvdXNhbmQncyBzZXBhcmF0b3IuIFNvdXJjZTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjkwMTI5OFxuICAgIHZhciBwYXJ0cyA9IHZhbC50b1N0cmluZygpLnNwbGl0KFwiLlwiKTtcbiAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcblxuICAgIGlmKGRlY2ltYWxQbGFjZXM9PT0wKXtcbiAgICAgIHJldHVybiBwYXJ0c1swXTtcbiAgICB9XG5cbiAgICBpZigoZGVjaW1hbFBsYWNlcyE9PW51bGwpICYmKGRlY2ltYWxQbGFjZXMhPT11bmRlZmluZWQpICYmIChwYXJ0cy5sZW5ndGg9PT0yKSl7XG4gICAgICBwYXJ0c1sxXSA9IHBhcnRzWzFdLnN1YnN0cigwLGRlY2ltYWxQbGFjZXMpO1xuICAgICAgcGFydHNbMV0gPSBwYXJ0c1sxXS5yZXBsYWNlKC8wKyQvLCAnJyk7XG4gICAgfVxuICAgIHJldHVybiBwYXJ0cy5qb2luKCcuJyk7XG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGFsZXR0ZXM6UGFsZXR0ZVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG5cbn1cbiJdfQ==