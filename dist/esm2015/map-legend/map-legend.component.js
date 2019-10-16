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
        var delta = (this._cbRange[1] - this._cbRange[0]) / (count - 1);
        var result = [];
        var lower = this._cbRange[0];
        let decimalPlaces = Math.max(0, 2 - (+Math.log10(this._cbRange[1] - this._cbRange[0]).toFixed()));
        decimalPlaces = Math.min(decimalPlaces, 10);
        var upper;
        for (let i = 1; i < count; i++) {
            upper = this._cbRange[0] + i * delta;
            result.push(`${this.formatValue(lower, decimalPlaces)}-${this.formatValue(upper, decimalPlaces)}`);
            lower = upper;
        }
        result.push('&ge;' + this._cbRange[1]);
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

<strong>{{title}} <span *ngIf="mapUnits" [innerHTML]="'('+mapUnits+')'"></span>
        <span *ngIf="helpText"
              [ngbTooltip]="helpText"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWxlZ2VuZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJtYXAtbGVnZW5kL21hcC1sZWdlbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQXdFO0FBQ3hFLHVDQUEwQztBQTJEMUMsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFvRzdCLFlBQW9CLFNBQXdCO1FBQXhCLGNBQVMsR0FBVCxTQUFTLENBQWU7UUFsR25DLFlBQU8sR0FBa0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELFdBQU0sR0FBa0IsRUFBRSxDQUFDLENBQUEsZ0JBQWdCO1FBQzNDLFVBQUssR0FBVyxXQUFXLENBQUM7UUFDNUIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixhQUFRLEdBQVEsWUFBWSxDQUFDO1FBQzdCLHFCQUFnQixHQUFRLE9BQU8sQ0FBQztRQUl6QyxvQkFBZSxHQUFhLEVBQUUsQ0FBQztRQW1FL0IsZ0JBQVcsR0FBRyxVQUFTLEdBQVUsRUFBQyxhQUFvQjtZQUNwRCxJQUFHLENBQUMsR0FBRyxFQUFDO2dCQUNOLElBQUcsR0FBRyxLQUFHLENBQUMsRUFBQztvQkFDVCxPQUFPLEdBQUcsQ0FBQztpQkFDWjtnQkFDRCxPQUFPLEdBQUcsQ0FBQzthQUNaO1lBQ0QsdUVBQXVFO1lBQ3ZFLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFFMUQsSUFBRyxhQUFhLEtBQUcsQ0FBQyxFQUFDO2dCQUNuQixPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNq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O0FBQzdCO0lBQVIsWUFBSyxFQUFFOzs0REFBaUM7QUFDaEM7SUFBUixZQUFLLEVBQUU7O3VEQUFxQjtBQUNwQjtJQUFSLFlBQUssRUFBRTs7MkRBQXlCO0FBUXhCO0lBQVIsWUFBSyxFQUFFOzs7bURBR1A7QUFJUTtJQUFSLFlBQUssRUFBRTs7O2lEQUdQO0FBSVE7SUFBUixZQUFLLEVBQUU7OzttREFHUDtBQUlRO0lBQVIsWUFBSyxFQUFFOzhCQUFpQixLQUFLO3FDQUFMLEtBQUs7aURBRzdCO0FBekNVLGtCQUFrQjtJQXpEOUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQStCWDtpQkFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F1QlY7S0FBRSxDQUFDO3FDQXFHNEIseUJBQWM7R0FwR2pDLGtCQUFrQixDQXdHOUI7QUF4R1ksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWxldHRlU2VydmljZSB9IGZyb20gJ21hcC13YWxkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWFwLWxlZ2VuZCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm1hcC1sZWdlbmQgcGFuZWwgcGFuZWwtZ3JvdXBcIj5cblxuPHN0cm9uZz57e3RpdGxlfX0gPHNwYW4gKm5nSWY9XCJtYXBVbml0c1wiIFtpbm5lckhUTUxdPVwiJygnK21hcFVuaXRzKycpJ1wiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJoZWxwVGV4dFwiXG4gICAgICAgICAgICAgIFtuZ2JUb29sdGlwXT1cImhlbHBUZXh0XCJcbiAgICAgICAgICAgICAgW3BsYWNlbWVudF09XCJ0b29sdGlwUGxhY2VtZW50XCJcbiAgICAgICAgICAgICAgY29udGFpbmVyPVwiYm9keVwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtaW5mby1jaXJjbGVcIj48L2k+XG4gICAgICAgIDwvc3Bhbj5cbjwvc3Ryb25nPlxuXG4gIDxkaXYgKm5nSWY9XCIhaW1hZ2VVUkxcIj5cbiAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTp0YWJsZTtsaW5lLWhlaWdodDoxNXB4XCI+XG4gICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTp0YWJsZS1yb3c7cGFkZGluZzowO1wiXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGNvbG91ciBvZiBjb2xvdXJzOyBsZXQgaT1pbmRleFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGVnZW5kLWNvbG91clwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwibGVnZW5kLWVudHJ5XCIgW25nU3R5bGVdPVwie2JhY2tncm91bmQ6Y29sb3VyfVwiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsZWdlbmQtbGFiZWxcIj5cbiAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cImdlbmVyYXRlZExhYmVsc1tpXVwiPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiAqbmdJZj1cImltYWdlVVJMXCI+XG4gICAgPGltZyBbc3JjXT1cImltYWdlVVJMXCI+XG4gIDwvZGl2PlxuICA8cCAqbmdJZj1cImF0dHJpYnV0aW9uTGlua1wiPlNvdXJjZTogPGEgW2hyZWZdPVwiYXR0cmlidXRpb25MaW5rXCI+e3thdHRyaWJ1dGlvbiB8fCAnZGV0YWlscyd9fTwvYT48L3A+XG4gIDxwICpuZ0lmPVwiYXR0cmlidXRpb24mJiFhdHRyaWJ1dGlvbkxpbmtcIj5Tb3VyY2U6IHt7YXR0cmlidXRpb259fTwvcD5cbjwvZGl2PlxuYCxzdHlsZXM6IFtgXG4ubWFwLWxlZ2VuZHtcbiAgZGlzcGxheTpibG9jaztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5sZWdlbmQtY29sb3Vye1xuICBkaXNwbGF5OnRhYmxlLWNlbGw7XG4gIHBhZGRpbmc6MHB4O1xufVxuXG4ubGVnZW5kLWxhYmVse1xuICBkaXNwbGF5OnRhYmxlLWNlbGw7XG4gIHBhZGRpbmc6MHB4IDRweCAycHggMnB4O1xuICBmb250LXNpemU6MTBweDtcbiAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xufVxuXG4ubGVnZW5kLWVudHJ5IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuYF19KVxuZXhwb3J0IGNsYXNzIE1hcExlZ2VuZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGltYWdlVVJMOiBzdHJpbmdcbiAgQElucHV0KCkgY29sb3VyczogQXJyYXk8c3RyaW5nPiA9IFsncmVkJywgJ3doaXRlJywgJ2JsdWUnXTtcbiAgQElucHV0KCkgbGFiZWxzOiBBcnJheTxzdHJpbmc+ID0gW107Ly9bJy0nLCctJywnLSddO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gJ3RoZSB0aXRsZSc7XG4gIEBJbnB1dCgpIG1hcFVuaXRzIDpzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgaGVscFRleHQ6c3RyaW5nPSdObyBjb21tZW50JztcbiAgQElucHV0KCkgdG9vbHRpcFBsYWNlbWVudDpzdHJpbmc9J3JpZ2h0JztcbiAgQElucHV0KCkgYXR0cmlidXRpb246IHN0cmluZztcbiAgQElucHV0KCkgYXR0cmlidXRpb25MaW5rOiBzdHJpbmc7XG5cbiAgZ2VuZXJhdGVkTGFiZWxzOiBzdHJpbmdbXSA9IFtdO1xuICBfY2JQYWxldHRlOnN0cmluZ1xuICBfY2JDb3VudDpudW1iZXI7XG4gIF9jYlJldmVyc2U6Ym9vbGVhbjtcbiAgX2NiUmFuZ2U6QXJyYXk8bnVtYmVyPjtcblxuICBASW5wdXQoKSBzZXQgY2JQYWxldHRlKGNicDpzdHJpbmcpe1xuICAgIHRoaXMuX2NiUGFsZXR0ZSA9IGNicDtcbiAgICB0aGlzLmdlbmVyYXRlUGFsZXR0ZSgpO1xuICB9XG5cbiAgZ2V0IGNiUGFsZXR0ZSgpOnN0cmluZ3tyZXR1cm4gdGhpcy5fY2JQYWxldHRlO31cblxuICBASW5wdXQoKSBzZXQgY2JDb3VudChjYmM6bnVtYmVyKXtcbiAgICB0aGlzLl9jYkNvdW50PWNiYztcbiAgICB0aGlzLmdlbmVyYXRlUGFsZXR0ZSgpO1xuICB9XG5cbiAgZ2V0IGNiQ291bnQoKTpudW1iZXJ7cmV0dXJuIHRoaXMuX2NiQ291bnQ7fVxuXG4gIEBJbnB1dCgpIHNldCBjYlJldmVyc2UoY2JyOmJvb2xlYW4pe1xuICAgIHRoaXMuX2NiUmV2ZXJzZT1jYnI7XG4gICAgdGhpcy5nZW5lcmF0ZVBhbGV0dGUoKTtcbiAgfVxuXG4gIGdldCBjYlJldmVyc2UoKTpib29sZWFue3JldHVybiB0aGlzLl9jYlJldmVyc2U7fVxuXG4gIEBJbnB1dCgpIHNldCBjYlJhbmdlKGNicjpBcnJheTxudW1iZXI+KXtcbiAgICB0aGlzLl9jYlJhbmdlID0gY2JyO1xuICAgIHRoaXMuZ2VuZXJhdGVQYWxldHRlKCk7XG4gIH1cblxuICBnZXQgY2JSYW5nZSgpOkFycmF5PG51bWJlcj57cmV0dXJuIHRoaXMuX2NiUmFuZ2U7fVxuXG4gIGdlbmVyYXRlTGFiZWxzKGNvdW50Om51bWJlcik6QXJyYXk8c3RyaW5nPnxudWxse1xuICAgIGlmKCF0aGlzLl9jYlJhbmdlfHwhY291bnQpe1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGRlbHRhID0gKHRoaXMuX2NiUmFuZ2VbMV0tdGhpcy5fY2JSYW5nZVswXSkvKGNvdW50LTEpO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgbG93ZXI9dGhpcy5fY2JSYW5nZVswXTtcbiAgICBsZXQgIGRlY2ltYWxQbGFjZXMgPSBNYXRoLm1heCgwLDItKCtNYXRoLmxvZzEwKHRoaXMuX2NiUmFuZ2VbMV0tdGhpcy5fY2JSYW5nZVswXSkudG9GaXhlZCgpKSk7XG4gICAgZGVjaW1hbFBsYWNlcyA9IE1hdGgubWluKGRlY2ltYWxQbGFjZXMsMTApO1xuICAgIHZhciB1cHBlcjtcbiAgICBmb3IobGV0IGk9MTtpPGNvdW50O2krKyl7XG4gICAgICB1cHBlciA9IHRoaXMuX2NiUmFuZ2VbMF0raSpkZWx0YTtcbiAgICAgIHJlc3VsdC5wdXNoKGAke3RoaXMuZm9ybWF0VmFsdWUobG93ZXIsZGVjaW1hbFBsYWNlcyl9LSR7dGhpcy5mb3JtYXRWYWx1ZSh1cHBlcixkZWNpbWFsUGxhY2VzKX1gKTtcbiAgICAgIGxvd2VyID0gdXBwZXI7XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKCcmZ2U7Jyt0aGlzLl9jYlJhbmdlWzFdKTtcbiAgICByZXN1bHQucmV2ZXJzZSgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZW5lcmF0ZVBhbGV0dGUoKXtcbiAgICBpZighdGhpcy5fY2JQYWxldHRlfHwhdGhpcy5fY2JDb3VudCl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fcGFsZXR0ZXMuZ2V0UGFsZXR0ZSh0aGlzLl9jYlBhbGV0dGUsdGhpcy5fY2JSZXZlcnNlLHRoaXMuX2NiQ291bnQpXG4gICAgICAuc3Vic2NyaWJlKHBhbGV0dGU9PntcbiAgICAgICAgdGhpcy5jb2xvdXJzID0gcGFsZXR0ZS5zbGljZSgpLnJldmVyc2UoKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZWRMYWJlbHMgPSB0aGlzLmxhYmVscyB8fCB0aGlzLmdlbmVyYXRlTGFiZWxzKHRoaXMuY29sb3Vycy5sZW5ndGgpIHx8IHBhbGV0dGU7XG4gICAgfSk7XG4gIH1cblxuICBmb3JtYXRWYWx1ZSA9IGZ1bmN0aW9uKHZhbDpudW1iZXIsZGVjaW1hbFBsYWNlczpudW1iZXIpOnN0cmluZ3tcbiAgICBpZighdmFsKXtcbiAgICAgIGlmKHZhbD09PTApe1xuICAgICAgICByZXR1cm4gJzAnO1xuICAgICAgfVxuICAgICAgcmV0dXJuICctJztcbiAgICB9XG4gICAgLy8gQWRkIHRob3VzYW5kJ3Mgc2VwYXJhdG9yLiBTb3VyY2U6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI5MDEyOThcbiAgICB2YXIgcGFydHMgPSB2YWwudG9TdHJpbmcoKS5zcGxpdChcIi5cIik7XG4gICAgcGFydHNbMF0gPSBwYXJ0c1swXS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XG5cbiAgICBpZihkZWNpbWFsUGxhY2VzPT09MCl7XG4gICAgICByZXR1cm4gcGFydHNbMF07XG4gICAgfVxuXG4gICAgaWYoKGRlY2ltYWxQbGFjZXMhPT1udWxsKSAmJihkZWNpbWFsUGxhY2VzIT09dW5kZWZpbmVkKSAmJiAocGFydHMubGVuZ3RoPT09Mikpe1xuICAgICAgcGFydHNbMV0gPSBwYXJ0c1sxXS5zdWJzdHIoMCxkZWNpbWFsUGxhY2VzKTtcbiAgICAgIHBhcnRzWzFdID0gcGFydHNbMV0ucmVwbGFjZSgvMCskLywgJycpO1xuICAgIH1cbiAgICByZXR1cm4gcGFydHMuam9pbignLicpO1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BhbGV0dGVzOlBhbGV0dGVTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHsgfVxuXG59XG4iXX0=