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
var map_wald_1 = require("map-wald");
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
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapLegendComponent.prototype, "cbCount", {
        get: function () { return this._cbCount; },
        set: function (cbc) {
            this._cbCount = cbc;
            this.generatePalette();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapLegendComponent.prototype, "cbReverse", {
        get: function () { return this._cbReverse; },
        set: function (cbr) {
            this._cbReverse = cbr;
            this.generatePalette();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapLegendComponent.prototype, "cbRange", {
        get: function () { return this._cbRange; },
        set: function (cbr) {
            this._cbRange = cbr;
            this.generatePalette();
        },
        enumerable: true,
        configurable: true
    });
    MapLegendComponent.prototype.generateLabels = function (count) {
        if (!this._cbRange || !count) {
            return null;
        }
        var delta = (this._cbRange[1] - this._cbRange[0]) / (count - 1);
        var result = [];
        var lower = this._cbRange[0];
        var decimalPlaces = Math.max(0, 2 - (+Math.log10(this._cbRange[1] - this._cbRange[0]).toFixed()));
        decimalPlaces = Math.min(decimalPlaces, 10);
        var upper;
        for (var i = 1; i < count; i++) {
            upper = this._cbRange[0] + i * delta;
            result.push(this.formatValue(lower, decimalPlaces) + "-" + this.formatValue(upper, decimalPlaces));
            lower = upper;
        }
        result.push('&ge;' + this._cbRange[1]);
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
    MapLegendComponent.ctorParameters = function () { return [
        { type: map_wald_1.PaletteService }
    ]; };
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
            template: "<div class=\"map-legend panel panel-group\">\n\n<strong>{{title}} <span *ngIf=\"mapUnits\" [innerHTML]=\"'('+mapUnits+')'\"></span>\n        <span *ngIf=\"helpText\"\n              [ngbTooltip]=\"helpText\"\n              [placement]=\"tooltipPlacement\"\n              container=\"body\">\n          <i class=\"fa fa-info-circle\"></i>\n        </span>\n</strong>\n\n  <div *ngIf=\"!imageURL\">\n    <div style=\"display:table;line-height:15px\">\n      <div style=\"display:table-row;padding:0;\"\n          *ngFor=\"let colour of colours; let i=index\">\n        <div class=\"legend-colour\">\n          <i class=\"legend-entry\" [ngStyle]=\"{background:colour}\"></i>\n        </div>\n        <div class=\"legend-label\">\n          <span [innerHTML]=\"generatedLabels[i]\"></span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"imageURL\">\n    <img [src]=\"imageURL\">\n  </div>\n  <p *ngIf=\"attributionLink\">Source: <a [href]=\"attributionLink\">{{attribution || 'details'}}</a></p>\n  <p *ngIf=\"attribution&&!attributionLink\">Source: {{attribution}}</p>\n</div>\n",
            styles: ["\n.map-legend{\n  display:block;\n  background: white;\n}\n\n.legend-colour{\n  display:table-cell;\n  padding:0px;\n}\n\n.legend-label{\n  display:table-cell;\n  padding:0px 4px 2px 2px;\n  font-size:10px;\n  vertical-align:middle;\n}\n\n.legend-entry {\n  float: left;\n  width: 15px !important;\n  height: 15px !important;\n}\n"]
        }),
        __metadata("design:paramtypes", [map_wald_1.PaletteService])
    ], MapLegendComponent);
    return MapLegendComponent;
}());
exports.MapLegendComponent = MapLegendComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWxlZ2VuZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJtYXAtbGVnZW5kL21hcC1sZWdlbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXdFO0FBQ3hFLHFDQUEwQztBQTJEMUM7SUFvR0UsNEJBQW9CLFNBQXdCO1FBQXhCLGNBQVMsR0FBVCxTQUFTLENBQWU7UUFsR25DLFlBQU8sR0FBa0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELFdBQU0sR0FBa0IsRUFBRSxDQUFDLENBQUEsZ0JBQWdCO1FBQzNDLFVBQUssR0FBVyxXQUFXLENBQUM7UUFDNUIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixhQUFRLEdBQVEsWUFBWSxDQUFDO1FBQzdCLHFCQUFnQixHQUFRLE9BQU8sQ0FBQztRQUl6QyxvQkFBZSxHQUFhLEVBQUUsQ0FBQztRQW1FL0IsZ0JBQVcsR0FBRyxVQUFTLEdBQVUsRUFBQyxhQUFvQjtZQUNwRCxJQUFHLENBQUMsR0FBRyxFQUFDO2dCQUNOLElBQUcsR0FBRyxLQUFHLENBQUMsRUFBQztvQkFDVCxPQUFPLEdBQUcsQ0FBQztpQkFDWjtnQkFDRCxPQUFPLEdBQUcsQ0FBQzthQUNaO1lBQ0QsdUVBQXVFO1lBQ3ZFLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFFMUQsSUFBRyxhQUFhLEtBQUcsQ0FBQyxFQUFDO2dCQUNuQixPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqQjtZQUVELElBQUcsQ0FBQyxhQUFhLEtBQUcsSUFB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QUM3QjtRQUFSLFlBQUssRUFBRTs7Z0VBQWlDO0lBQ2hDO1FBQVIsWUFBSyxFQUFFOzsyREFBcUI7SUFDcEI7UUFBUixZQUFLLEVBQUU7OytEQUF5QjtJQVF4QjtRQUFSLFlBQUssRUFBRTs7O3VEQUdQO0lBSVE7UUFBUixZQUFLLEVBQUU7OztxREFHUDtJQUlRO1FBQVIsWUFBSyxFQUFFOzs7dURBR1A7SUFJUTtRQUFSLFlBQUssRUFBRTtrQ0FBaUIsS0FBSzt5Q0FBTCxLQUFLO3FEQUc3QjtJQXpDVSxrQkFBa0I7UUF6RDlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsNGtDQStCWDtxQkFBVSw0VUF1QlY7U0FBRSxDQUFDO3lDQXFHNEIseUJBQWM7T0FwR2pDLGtCQUFrQixDQXdHOUI7SUFBRCx5QkFBQztDQUFBLEFBeEdELElBd0dDO0FBeEdZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFsZXR0ZVNlcnZpY2UgfSBmcm9tICdtYXAtd2FsZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hcC1sZWdlbmQnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtYXAtbGVnZW5kIHBhbmVsIHBhbmVsLWdyb3VwXCI+XG5cbjxzdHJvbmc+e3t0aXRsZX19IDxzcGFuICpuZ0lmPVwibWFwVW5pdHNcIiBbaW5uZXJIVE1MXT1cIicoJyttYXBVbml0cysnKSdcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiaGVscFRleHRcIlxuICAgICAgICAgICAgICBbbmdiVG9vbHRpcF09XCJoZWxwVGV4dFwiXG4gICAgICAgICAgICAgIFtwbGFjZW1lbnRdPVwidG9vbHRpcFBsYWNlbWVudFwiXG4gICAgICAgICAgICAgIGNvbnRhaW5lcj1cImJvZHlcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWluZm8tY2lyY2xlXCI+PC9pPlxuICAgICAgICA8L3NwYW4+XG48L3N0cm9uZz5cblxuICA8ZGl2ICpuZ0lmPVwiIWltYWdlVVJMXCI+XG4gICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6dGFibGU7bGluZS1oZWlnaHQ6MTVweFwiPlxuICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6dGFibGUtcm93O3BhZGRpbmc6MDtcIlxuICAgICAgICAgICpuZ0Zvcj1cImxldCBjb2xvdXIgb2YgY29sb3VyczsgbGV0IGk9aW5kZXhcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxlZ2VuZC1jb2xvdXJcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImxlZ2VuZC1lbnRyeVwiIFtuZ1N0eWxlXT1cIntiYWNrZ3JvdW5kOmNvbG91cn1cIj48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGVnZW5kLWxhYmVsXCI+XG4gICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJnZW5lcmF0ZWRMYWJlbHNbaV1cIj48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgKm5nSWY9XCJpbWFnZVVSTFwiPlxuICAgIDxpbWcgW3NyY109XCJpbWFnZVVSTFwiPlxuICA8L2Rpdj5cbiAgPHAgKm5nSWY9XCJhdHRyaWJ1dGlvbkxpbmtcIj5Tb3VyY2U6IDxhIFtocmVmXT1cImF0dHJpYnV0aW9uTGlua1wiPnt7YXR0cmlidXRpb24gfHwgJ2RldGFpbHMnfX08L2E+PC9wPlxuICA8cCAqbmdJZj1cImF0dHJpYnV0aW9uJiYhYXR0cmlidXRpb25MaW5rXCI+U291cmNlOiB7e2F0dHJpYnV0aW9ufX08L3A+XG48L2Rpdj5cbmAsc3R5bGVzOiBbYFxuLm1hcC1sZWdlbmR7XG4gIGRpc3BsYXk6YmxvY2s7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4ubGVnZW5kLWNvbG91cntcbiAgZGlzcGxheTp0YWJsZS1jZWxsO1xuICBwYWRkaW5nOjBweDtcbn1cblxuLmxlZ2VuZC1sYWJlbHtcbiAgZGlzcGxheTp0YWJsZS1jZWxsO1xuICBwYWRkaW5nOjBweCA0cHggMnB4IDJweDtcbiAgZm9udC1zaXplOjEwcHg7XG4gIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcbn1cblxuLmxlZ2VuZC1lbnRyeSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTVweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cbmBdfSlcbmV4cG9ydCBjbGFzcyBNYXBMZWdlbmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpbWFnZVVSTDogc3RyaW5nXG4gIEBJbnB1dCgpIGNvbG91cnM6IEFycmF5PHN0cmluZz4gPSBbJ3JlZCcsICd3aGl0ZScsICdibHVlJ107XG4gIEBJbnB1dCgpIGxhYmVsczogQXJyYXk8c3RyaW5nPiA9IFtdOy8vWyctJywnLScsJy0nXTtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9ICd0aGUgdGl0bGUnO1xuICBASW5wdXQoKSBtYXBVbml0cyA6c3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGhlbHBUZXh0OnN0cmluZz0nTm8gY29tbWVudCc7XG4gIEBJbnB1dCgpIHRvb2x0aXBQbGFjZW1lbnQ6c3RyaW5nPSdyaWdodCc7XG4gIEBJbnB1dCgpIGF0dHJpYnV0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGF0dHJpYnV0aW9uTGluazogc3RyaW5nO1xuXG4gIGdlbmVyYXRlZExhYmVsczogc3RyaW5nW10gPSBbXTtcbiAgX2NiUGFsZXR0ZTpzdHJpbmdcbiAgX2NiQ291bnQ6bnVtYmVyO1xuICBfY2JSZXZlcnNlOmJvb2xlYW47XG4gIF9jYlJhbmdlOkFycmF5PG51bWJlcj47XG5cbiAgQElucHV0KCkgc2V0IGNiUGFsZXR0ZShjYnA6c3RyaW5nKXtcbiAgICB0aGlzLl9jYlBhbGV0dGUgPSBjYnA7XG4gICAgdGhpcy5nZW5lcmF0ZVBhbGV0dGUoKTtcbiAgfVxuXG4gIGdldCBjYlBhbGV0dGUoKTpzdHJpbmd7cmV0dXJuIHRoaXMuX2NiUGFsZXR0ZTt9XG5cbiAgQElucHV0KCkgc2V0IGNiQ291bnQoY2JjOm51bWJlcil7XG4gICAgdGhpcy5fY2JDb3VudD1jYmM7XG4gICAgdGhpcy5nZW5lcmF0ZVBhbGV0dGUoKTtcbiAgfVxuXG4gIGdldCBjYkNvdW50KCk6bnVtYmVye3JldHVybiB0aGlzLl9jYkNvdW50O31cblxuICBASW5wdXQoKSBzZXQgY2JSZXZlcnNlKGNicjpib29sZWFuKXtcbiAgICB0aGlzLl9jYlJldmVyc2U9Y2JyO1xuICAgIHRoaXMuZ2VuZXJhdGVQYWxldHRlKCk7XG4gIH1cblxuICBnZXQgY2JSZXZlcnNlKCk6Ym9vbGVhbntyZXR1cm4gdGhpcy5fY2JSZXZlcnNlO31cblxuICBASW5wdXQoKSBzZXQgY2JSYW5nZShjYnI6QXJyYXk8bnVtYmVyPil7XG4gICAgdGhpcy5fY2JSYW5nZSA9IGNicjtcbiAgICB0aGlzLmdlbmVyYXRlUGFsZXR0ZSgpO1xuICB9XG5cbiAgZ2V0IGNiUmFuZ2UoKTpBcnJheTxudW1iZXI+e3JldHVybiB0aGlzLl9jYlJhbmdlO31cblxuICBnZW5lcmF0ZUxhYmVscyhjb3VudDpudW1iZXIpOkFycmF5PHN0cmluZz58bnVsbHtcbiAgICBpZighdGhpcy5fY2JSYW5nZXx8IWNvdW50KXtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBkZWx0YSA9ICh0aGlzLl9jYlJhbmdlWzFdLXRoaXMuX2NiUmFuZ2VbMF0pLyhjb3VudC0xKTtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGxvd2VyPXRoaXMuX2NiUmFuZ2VbMF07XG4gICAgbGV0ICBkZWNpbWFsUGxhY2VzID0gTWF0aC5tYXgoMCwyLSgrTWF0aC5sb2cxMCh0aGlzLl9jYlJhbmdlWzFdLXRoaXMuX2NiUmFuZ2VbMF0pLnRvRml4ZWQoKSkpO1xuICAgIGRlY2ltYWxQbGFjZXMgPSBNYXRoLm1pbihkZWNpbWFsUGxhY2VzLDEwKTtcbiAgICB2YXIgdXBwZXI7XG4gICAgZm9yKGxldCBpPTE7aTxjb3VudDtpKyspe1xuICAgICAgdXBwZXIgPSB0aGlzLl9jYlJhbmdlWzBdK2kqZGVsdGE7XG4gICAgICByZXN1bHQucHVzaChgJHt0aGlzLmZvcm1hdFZhbHVlKGxvd2VyLGRlY2ltYWxQbGFjZXMpfS0ke3RoaXMuZm9ybWF0VmFsdWUodXBwZXIsZGVjaW1hbFBsYWNlcyl9YCk7XG4gICAgICBsb3dlciA9IHVwcGVyO1xuICAgIH1cbiAgICByZXN1bHQucHVzaCgnJmdlOycrdGhpcy5fY2JSYW5nZVsxXSk7XG4gICAgcmVzdWx0LnJldmVyc2UoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2VuZXJhdGVQYWxldHRlKCl7XG4gICAgaWYoIXRoaXMuX2NiUGFsZXR0ZXx8IXRoaXMuX2NiQ291bnQpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3BhbGV0dGVzLmdldFBhbGV0dGUodGhpcy5fY2JQYWxldHRlLHRoaXMuX2NiUmV2ZXJzZSx0aGlzLl9jYkNvdW50KVxuICAgICAgLnN1YnNjcmliZShwYWxldHRlPT57XG4gICAgICAgIHRoaXMuY29sb3VycyA9IHBhbGV0dGUuc2xpY2UoKS5yZXZlcnNlKCk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVkTGFiZWxzID0gdGhpcy5sYWJlbHMgfHwgdGhpcy5nZW5lcmF0ZUxhYmVscyh0aGlzLmNvbG91cnMubGVuZ3RoKSB8fCBwYWxldHRlO1xuICAgIH0pO1xuICB9XG5cbiAgZm9ybWF0VmFsdWUgPSBmdW5jdGlvbih2YWw6bnVtYmVyLGRlY2ltYWxQbGFjZXM6bnVtYmVyKTpzdHJpbmd7XG4gICAgaWYoIXZhbCl7XG4gICAgICBpZih2YWw9PT0wKXtcbiAgICAgICAgcmV0dXJuICcwJztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnLSc7XG4gICAgfVxuICAgIC8vIEFkZCB0aG91c2FuZCdzIHNlcGFyYXRvci4gU291cmNlOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yOTAxMjk4XG4gICAgdmFyIHBhcnRzID0gdmFsLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpO1xuICAgIHBhcnRzWzBdID0gcGFydHNbMF0ucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xuXG4gICAgaWYoZGVjaW1hbFBsYWNlcz09PTApe1xuICAgICAgcmV0dXJuIHBhcnRzWzBdO1xuICAgIH1cblxuICAgIGlmKChkZWNpbWFsUGxhY2VzIT09bnVsbCkgJiYoZGVjaW1hbFBsYWNlcyE9PXVuZGVmaW5lZCkgJiYgKHBhcnRzLmxlbmd0aD09PTIpKXtcbiAgICAgIHBhcnRzWzFdID0gcGFydHNbMV0uc3Vic3RyKDAsZGVjaW1hbFBsYWNlcyk7XG4gICAgICBwYXJ0c1sxXSA9IHBhcnRzWzFdLnJlcGxhY2UoLzArJC8sICcnKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnRzLmpvaW4oJy4nKTtcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYWxldHRlczpQYWxldHRlU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7IH1cblxufVxuIl19