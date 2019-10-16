"use strict";
/// <reference path="../decs.d.ts" />
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
//import * as Plotly from 'plotly.js/dist/plotly-basic';
//declare var Plotly: any;
//const Plotly = require('plotly.js/dist/plotly-basic');
var Plotly = require("plotly.js/dist/plotly-basic");
// import * as Plotly from 'plotly.js';
var TimeseriesChartComponent = /** @class */ (function () {
    function TimeseriesChartComponent(_element) {
        this._element = _element;
        this.timeSeries = [];
        this.marginLeft = 40;
        this.marginRight = 10;
        this.marginTop = 0;
        this.marginBottom = 20;
        this.titlefont = undefined;
    }
    TimeseriesChartComponent.prototype.ngAfterViewInit = function () {
        this.draw();
    };
    TimeseriesChartComponent.prototype.ngOnChanges = function (changes) {
        this.draw();
    };
    TimeseriesChartComponent.prototype.draw = function () {
        var node = this._element.nativeElement.querySelector('.our-chart');
        Plotly.purge(node);
        if (!this.timeSeries || !this.timeSeries.length) {
            return;
        }
        var seriesUnits = this.timeSeries.map(function (ts) { return ts.units; });
        var commonUnits;
        if (seriesUnits.every(function (u) { return u === seriesUnits[0]; })) {
            commonUnits = seriesUnits[0];
        }
        var layout = {
            margin: {
                t: this.marginTop + (this.title ? 30 : 0),
                l: this.marginLeft,
                r: this.marginRight,
                b: this.marginBottom
            },
            yaxis: {
                fixedrange: true,
                title: commonUnits
            },
            width: 320,
            height: 200,
            title: this.title || undefined,
            titlefont: this.titlefont
        };
        Plotly.plot(node, this.timeSeries.map(function (ts) {
            var nonNullCount = ts.values.filter(function (v) { return !isNaN(v); }).length;
            var mode = ((ts.style !== 'bar') && (nonNullCount < 365)) ?
                'lines+markers' :
                undefined;
            var suffix = commonUnits ? '' : " (" + ts.units + ")";
            return {
                type: (ts.style === 'bar') ? 'bar' : undefined,
                mode: mode,
                x: ts.dates,
                y: ts.values,
                name: ts.label + suffix
            };
        }), layout);
    };
    TimeseriesChartComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef }
    ]; };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TimeseriesChartComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], TimeseriesChartComponent.prototype, "timeSeries", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], TimeseriesChartComponent.prototype, "marginLeft", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], TimeseriesChartComponent.prototype, "marginRight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], TimeseriesChartComponent.prototype, "marginTop", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], TimeseriesChartComponent.prototype, "marginBottom", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TimeseriesChartComponent.prototype, "titlefont", void 0);
    TimeseriesChartComponent = __decorate([
        core_1.Component({
            selector: 'timeseries-chart',
            template: "<div class=\"our-chart\">\n</div>\n"
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], TimeseriesChartComponent);
    return TimeseriesChartComponent;
}());
exports.TimeseriesChartComponent = TimeseriesChartComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXNlcmllcy1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJ0aW1lc2VyaWVzLWNoYXJ0L3RpbWVzZXJpZXMtY2hhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQ0FBcUM7Ozs7Ozs7Ozs7O0FBRXJDLHNDQUFpSDtBQUVqSCx3REFBd0Q7QUFFeEQsMEJBQTBCO0FBQzFCLHdEQUF3RDtBQUV4RCxvREFBc0Q7QUFDdEQsdUNBQXVDO0FBT3ZDO0lBU0Usa0NBQW9CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFQOUIsZUFBVSxHQUFzQixFQUFFLENBQUM7UUFDbkMsZUFBVSxHQUFVLEVBQUUsQ0FBQztRQUN2QixnQkFBVyxHQUFVLEVBQUUsQ0FBQztRQUN4QixjQUFTLEdBQVUsQ0FBQyxDQUFDO1FBQ3JCLGlCQUFZLEdBQVUsRUFBRSxDQUFDO1FBQ3pCLGNBQVMsR0FBTyxTQUFTLENBQUM7SUFJbkMsQ0FBQztJQUVELGtEQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsOENBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCx1Q0FBSSxHQUFKO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRW5FLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFZixJQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFDO1lBQ2pELE9BQU87U0FDUjtRQUVELElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQUEsRUFBRSxJQUFF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PlxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGltZVNlcmllcyB9IGZyb20gJ21hcC13YWxkJztcbi8vaW1wb3J0ICogYXMgUGxvdGx5IGZyb20gJ3Bsb3RseS5qcy9kaXN0L3Bsb3RseS1iYXNpYyc7XG5cbi8vZGVjbGFyZSB2YXIgUGxvdGx5OiBhbnk7XG4vL2NvbnN0IFBsb3RseSA9IHJlcXVpcmUoJ3Bsb3RseS5qcy9kaXN0L3Bsb3RseS1iYXNpYycpO1xuXG5pbXBvcnQgKiBhcyBQbG90bHkgZnJvbSAncGxvdGx5LmpzL2Rpc3QvcGxvdGx5LWJhc2ljJztcbi8vIGltcG9ydCAqIGFzIFBsb3RseSBmcm9tICdwbG90bHkuanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aW1lc2VyaWVzLWNoYXJ0JyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwib3VyLWNoYXJ0XCI+XG48L2Rpdj5cbmAsc3R5bGVzOiBbXX0pXG5leHBvcnQgY2xhc3MgVGltZXNlcmllc0NoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzICB7XG4gIEBJbnB1dCgpIHRpdGxlOnN0cmluZztcbiAgQElucHV0KCkgdGltZVNlcmllczogQXJyYXk8VGltZVNlcmllcz4gPSBbXTtcbiAgQElucHV0KCkgbWFyZ2luTGVmdDpudW1iZXIgPSA0MDtcbiAgQElucHV0KCkgbWFyZ2luUmlnaHQ6bnVtYmVyID0gMTA7XG4gIEBJbnB1dCgpIG1hcmdpblRvcDpudW1iZXIgPSAwO1xuICBASW5wdXQoKSBtYXJnaW5Cb3R0b206bnVtYmVyID0gMjA7XG4gIEBJbnB1dCgpIHRpdGxlZm9udDphbnkgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmKXtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG4gICAgdGhpcy5kcmF3KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5kcmF3KCk7XG4gIH1cblxuICBkcmF3KCl7XG4gICAgdmFyIG5vZGUgPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLm91ci1jaGFydCcpO1xuXG4gICAgUGxvdGx5LnB1cmdlKG5vZGUpO1xuXG4gICAgICAgIGlmKCF0aGlzLnRpbWVTZXJpZXMgfHwgIXRoaXMudGltZVNlcmllcy5sZW5ndGgpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNlcmllc1VuaXRzID0gdGhpcy50aW1lU2VyaWVzLm1hcCh0cz0+dHMudW5pdHMpO1xuICAgIGxldCBjb21tb25Vbml0czpzdHJpbmc7XG4gICAgaWYoc2VyaWVzVW5pdHMuZXZlcnkodT0+dT09PXNlcmllc1VuaXRzWzBdKSl7XG4gICAgICBjb21tb25Vbml0cyA9IHNlcmllc1VuaXRzWzBdO1xuICAgIH1cblxuICAgIHZhciBsYXlvdXQ6YW55ID0ge1xuICAgICAgbWFyZ2luOiB7XG4gICAgICAgIHQ6IHRoaXMubWFyZ2luVG9wICsgKHRoaXMudGl0bGU/MzA6MCksXG4gICAgICAgIGw6dGhpcy5tYXJnaW5MZWZ0LFxuICAgICAgICByOnRoaXMubWFyZ2luUmlnaHQsXG4gICAgICAgIGI6dGhpcy5tYXJnaW5Cb3R0b21cbiAgICAgIH0sXG4gICAgICB5YXhpczp7XG4gICAgICAgIGZpeGVkcmFuZ2U6IHRydWUsXG4gICAgICAgIHRpdGxlOmNvbW1vblVuaXRzXG4gICAgICB9LFxuICAgICAgd2lkdGg6MzIwLFxuICAgICAgaGVpZ2h0OjIwMCxcbiAgICAgIHRpdGxlOnRoaXMudGl0bGUgfHwgdW5kZWZpbmVkLFxuICAgICAgdGl0bGVmb250OnRoaXMudGl0bGVmb250XG4gICAgfTtcblxuICAgIFBsb3RseS5wbG90KCBub2RlLCB0aGlzLnRpbWVTZXJpZXMubWFwKHRzPT57XG4gICAgICBjb25zdCBub25OdWxsQ291bnQgPSB0cy52YWx1ZXMuZmlsdGVyKHY9PiFpc05hTih2KSkubGVuZ3RoO1xuICAgICAgY29uc3QgbW9kZSA9ICgodHMuc3R5bGUhPT0nYmFyJykmJihub25OdWxsQ291bnQ8MzY1KSkgP1xuICAgICAgICAgICAgICAgICAgICdsaW5lcyttYXJrZXJzJyA6XG4gICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkO1xuICAgICAgY29uc3Qgc3VmZml4ID0gY29tbW9uVW5pdHM/Jyc6YCAoJHt0cy51bml0c30pYDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6KHRzLnN0eWxlPT09J2JhcicpPydiYXInOnVuZGVmaW5lZCxcbiAgICAgICAgbW9kZTptb2RlLFxuICAgICAgICB4OnRzLmRhdGVzLFxuICAgICAgICB5OnRzLnZhbHVlcyxcbiAgICAgICAgbmFtZTp0cy5sYWJlbCtzdWZmaXhcbiAgICAgIH07XG4gICAgfSksIGxheW91dCApO1xuICB9XG59XG4iXX0=