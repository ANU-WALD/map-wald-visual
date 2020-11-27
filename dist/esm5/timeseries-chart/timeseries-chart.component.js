"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeseriesChartComponent = void 0;
/// <reference path="../decs.d.ts" />
/// <reference path="../decs.d.ts" />
var core_1 = require("@angular/core");
//import * as Plotly from 'plotly.js/dist/plotly-basic';
//declare var Plotly: any;
//const Plotly = require('plotly.js/dist/plotly-basic');
var Plotly = require("plotly.js/dist/plotly-basic");
var i0 = require("@angular/core");
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
    TimeseriesChartComponent.ɵfac = function TimeseriesChartComponent_Factory(t) { return new (t || TimeseriesChartComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    TimeseriesChartComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TimeseriesChartComponent, selectors: [["timeseries-chart"]], inputs: { title: "title", timeSeries: "timeSeries", marginLeft: "marginLeft", marginRight: "marginRight", marginTop: "marginTop", marginBottom: "marginBottom", titlefont: "titlefont" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "our-chart"]], template: function TimeseriesChartComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 0);
        } }, encapsulation: 2 });
    return TimeseriesChartComponent;
}());
exports.TimeseriesChartComponent = TimeseriesChartComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TimeseriesChartComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'timeseries-chart',
                template: "<div class=\"our-chart\">\n</div>\n",
                styles: []
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { title: [{
            type: core_1.Input
        }], timeSeries: [{
            type: core_1.Input
        }], marginLeft: [{
            type: core_1.Input
        }], marginRight: [{
            type: core_1.Input
        }], marginTop: [{
            type: core_1.Input
        }], marginBottom: [{
            type: core_1.Input
        }], titlefont: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXNlcmllcy1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJ0aW1lc2VyaWVzLWNoYXJ0L3RpbWVzZXJpZXMtY2hhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUFyQyxxQ0FBcUM7QUFFckMsc0NBQWlIO0FBRWpILHdEQUF3RDtBQUV4RCwwQkFBMEI7QUFDMUIsd0RBQXdEO0FBRXhELG9EQUFzRDs7QUFDdEQsdUNBQXVDO0FBRXZDO0lBY0Usa0NBQW9CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFQOUIsZUFBVSxHQUFzQixFQUFFLENBQUM7UUFDbkMsZUFBVSxHQUFVLEVBQUUsQ0FBQztRQUN2QixnQkFBVyxHQUFVLEVBQUUsQ0FBQztRQUN4QixjQUFTLEdBQVUsQ0FBQyxDQUFDO1FBQ3JCLGlCQUFZLEdBQVUsRUFBRSxDQUFDO1FBQ3pCLGNBQVMsR0FBTyxTQUFTLENBQUM7SUFJbkMsQ0FBQztJQUVELGtEQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsOENBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCx1Q0FBSSxHQUFKO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRW5FLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFZixJQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFDO1lBQ2pELE9BQU87U0FDUjtRQUVELElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQUEsRUFBRSxJQUFFLE9BQUEsRUFBRSxDQUFDLEtBQUssRUFBUixDQUFRLENBQUMsQ0FBQztRQUN0RCxJQUFJLFdBQWtCLENBQUM7UUFDdkIsSUFBRyxXQUFXLENBQUMsS0FBSyxDQUFDLFVBQUEsQ0FBQyxJQUFFLE9BQUEsQ0FBQyxLQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxFQUFDO1lBQzFDLFdBQVcsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUI7UUFFRCxJQUFJLE1BQU0sR0FBTztZQUNmLE1BQU0sRUFBRTtnQkFDTixDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUEsQ0FBQyxDQUFBLEVBQUUsQ0FBQSxDQUFDLENBQUEsQ0FBQyxDQUFDO2dCQUNyQyxDQUFDLEVBQUMsSUFBSSxDQUFDLFVBQVU7Z0JBQ2pCLENBQUMsRUFBQyxJQUFJLENBQUMsV0FBVztnQkFDbEIsQ0FBQyxFQUFDLElBQUksQ0FBQyxZQUFZO2FBQ3BCO1lBQ0QsS0FBSyxFQUFDO2dCQUNKLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixLQUFLLEVBQUMsV0FBVzthQUNsQjtZQUNELEtBQUssRUFBQyxHQUFHO1lBQ1QsTUFBTSxFQUFDLEdBQUc7WUFDVixLQUFLLEVBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxTQUFTO1lBQzdCLFNBQVMsRUFBQyxJQUFJLENBQUMsU0FBUztTQUN6QixDQUFDO1FBRUYsTUFBTSxDQUFDLElBQUksQ0FBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBQSxFQUFFO1lBQ3ZDLElBQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFFLE9BQUEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQVQsQ0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQzNELElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxLQUFHLEtBQUssQ0FBQyxJQUFFLENBQUMsWUFBWSxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUMsZUFBZSxDQUFDLENBQUM7Z0JBQ2pCLFNBQVMsQ0FBQztZQUN2QixJQUFNLE1BQU0sR0FBRyxXQUFXLENBQUEsQ0FBQyxDQUFBLEVBQUUsQ0FBQSxDQUFDLENBQUEsT0FBSyxFQUFFLENBQUMsS0FBSyxNQUFHLENBQUM7WUFDL0MsT0FBTztnQkFDTCxJQUFJLEVBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxLQUFHLEtBQUssQ0FBQyxDQUFBLENBQUMsQ0FBQSxLQUFLLENBQUEsQ0FBQyxDQUFBLFNBQVM7Z0JBQ3ZDLElBQUksRUFBQyxJQUFJO2dCQUNULENBQUMsRUFBQyxFQUFFLENBQUMsS0FBSztnQkFDVixDQUFDLEVBQUMsRUFBRSxDQUFDLE1BQU07Z0JBQ1gsSUFBSSxFQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUMsTUFBTTthQUNyQixDQUFDO1FBQ0osQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFFLENBQUM7SUFDZixDQUFDO29HQW5FVSx3QkFBd0I7aUVBQXhCLHdCQUF3QjtZQUh4Qix5QkFDUDs7bUNBZk47Q0FxRkMsQUF6RUQsSUF5RUM7QUFwRVksNERBQXdCO2tEQUF4Qix3QkFBd0I7Y0FMcEMsZ0JBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUUscUNBRVg7Z0JBQUMsTUFBTSxFQUFFLEVBQUU7YUFBQzs2REFFRixLQUFLO2tCQUFiLFlBQUs7WUFDRyxVQUFVO2tCQUFsQixZQUFLO1lBQ0csVUFBVTtrQkFBbEIsWUFBSztZQUNHLFdBQVc7a0JBQW5CLFlBQUs7WUFDRyxTQUFTO2tCQUFqQixZQUFLO1lBQ0csWUFBWTtrQkFBcEIsWUFBSztZQUNHLFNBQVM7a0JBQWpCLFlBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vZGVjcy5kLnRzXCIgLz5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRpbWVTZXJpZXMgfSBmcm9tICdtYXAtd2FsZCc7XG4vL2ltcG9ydCAqIGFzIFBsb3RseSBmcm9tICdwbG90bHkuanMvZGlzdC9wbG90bHktYmFzaWMnO1xuXG4vL2RlY2xhcmUgdmFyIFBsb3RseTogYW55O1xuLy9jb25zdCBQbG90bHkgPSByZXF1aXJlKCdwbG90bHkuanMvZGlzdC9wbG90bHktYmFzaWMnKTtcblxuaW1wb3J0ICogYXMgUGxvdGx5IGZyb20gJ3Bsb3RseS5qcy9kaXN0L3Bsb3RseS1iYXNpYyc7XG4vLyBpbXBvcnQgKiBhcyBQbG90bHkgZnJvbSAncGxvdGx5LmpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGltZXNlcmllcy1jaGFydCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm91ci1jaGFydFwiPlxuPC9kaXY+XG5gLHN0eWxlczogW119KVxuZXhwb3J0IGNsYXNzIFRpbWVzZXJpZXNDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyAge1xuICBASW5wdXQoKSB0aXRsZTpzdHJpbmc7XG4gIEBJbnB1dCgpIHRpbWVTZXJpZXM6IEFycmF5PFRpbWVTZXJpZXM+ID0gW107XG4gIEBJbnB1dCgpIG1hcmdpbkxlZnQ6bnVtYmVyID0gNDA7XG4gIEBJbnB1dCgpIG1hcmdpblJpZ2h0Om51bWJlciA9IDEwO1xuICBASW5wdXQoKSBtYXJnaW5Ub3A6bnVtYmVyID0gMDtcbiAgQElucHV0KCkgbWFyZ2luQm90dG9tOm51bWJlciA9IDIwO1xuICBASW5wdXQoKSB0aXRsZWZvbnQ6YW55ID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnQ6RWxlbWVudFJlZil7XG5cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgIHRoaXMuZHJhdygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuZHJhdygpO1xuICB9XG5cbiAgZHJhdygpe1xuICAgIHZhciBub2RlID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdXItY2hhcnQnKTtcblxuICAgIFBsb3RseS5wdXJnZShub2RlKTtcblxuICAgICAgICBpZighdGhpcy50aW1lU2VyaWVzIHx8ICF0aGlzLnRpbWVTZXJpZXMubGVuZ3RoKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzZXJpZXNVbml0cyA9IHRoaXMudGltZVNlcmllcy5tYXAodHM9PnRzLnVuaXRzKTtcbiAgICBsZXQgY29tbW9uVW5pdHM6c3RyaW5nO1xuICAgIGlmKHNlcmllc1VuaXRzLmV2ZXJ5KHU9PnU9PT1zZXJpZXNVbml0c1swXSkpe1xuICAgICAgY29tbW9uVW5pdHMgPSBzZXJpZXNVbml0c1swXTtcbiAgICB9XG5cbiAgICB2YXIgbGF5b3V0OmFueSA9IHtcbiAgICAgIG1hcmdpbjoge1xuICAgICAgICB0OiB0aGlzLm1hcmdpblRvcCArICh0aGlzLnRpdGxlPzMwOjApLFxuICAgICAgICBsOnRoaXMubWFyZ2luTGVmdCxcbiAgICAgICAgcjp0aGlzLm1hcmdpblJpZ2h0LFxuICAgICAgICBiOnRoaXMubWFyZ2luQm90dG9tXG4gICAgICB9LFxuICAgICAgeWF4aXM6e1xuICAgICAgICBmaXhlZHJhbmdlOiB0cnVlLFxuICAgICAgICB0aXRsZTpjb21tb25Vbml0c1xuICAgICAgfSxcbiAgICAgIHdpZHRoOjMyMCxcbiAgICAgIGhlaWdodDoyMDAsXG4gICAgICB0aXRsZTp0aGlzLnRpdGxlIHx8IHVuZGVmaW5lZCxcbiAgICAgIHRpdGxlZm9udDp0aGlzLnRpdGxlZm9udFxuICAgIH07XG5cbiAgICBQbG90bHkucGxvdCggbm9kZSwgdGhpcy50aW1lU2VyaWVzLm1hcCh0cz0+e1xuICAgICAgY29uc3Qgbm9uTnVsbENvdW50ID0gdHMudmFsdWVzLmZpbHRlcih2PT4haXNOYU4odikpLmxlbmd0aDtcbiAgICAgIGNvbnN0IG1vZGUgPSAoKHRzLnN0eWxlIT09J2JhcicpJiYobm9uTnVsbENvdW50PDM2NSkpID9cbiAgICAgICAgICAgICAgICAgICAnbGluZXMrbWFya2VycycgOlxuICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZDtcbiAgICAgIGNvbnN0IHN1ZmZpeCA9IGNvbW1vblVuaXRzPycnOmAgKCR7dHMudW5pdHN9KWA7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOih0cy5zdHlsZT09PSdiYXInKT8nYmFyJzp1bmRlZmluZWQsXG4gICAgICAgIG1vZGU6bW9kZSxcbiAgICAgICAgeDp0cy5kYXRlcyxcbiAgICAgICAgeTp0cy52YWx1ZXMsXG4gICAgICAgIG5hbWU6dHMubGFiZWwrc3VmZml4XG4gICAgICB9O1xuICAgIH0pLCBsYXlvdXQgKTtcbiAgfVxufVxuIl19