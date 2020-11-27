"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeseriesChartComponent = void 0;
/// <reference path="../decs.d.ts" />
/// <reference path="../decs.d.ts" />
const core_1 = require("@angular/core");
//import * as Plotly from 'plotly.js/dist/plotly-basic';
//declare var Plotly: any;
//const Plotly = require('plotly.js/dist/plotly-basic');
const Plotly = require("plotly.js/dist/plotly-basic");
const i0 = require("@angular/core");
// import * as Plotly from 'plotly.js';
class TimeseriesChartComponent {
    constructor(_element) {
        this._element = _element;
        this.timeSeries = [];
        this.marginLeft = 40;
        this.marginRight = 10;
        this.marginTop = 0;
        this.marginBottom = 20;
        this.titlefont = undefined;
    }
    ngAfterViewInit() {
        this.draw();
    }
    ngOnChanges(changes) {
        this.draw();
    }
    draw() {
        var node = this._element.nativeElement.querySelector('.our-chart');
        Plotly.purge(node);
        if (!this.timeSeries || !this.timeSeries.length) {
            return;
        }
        const seriesUnits = this.timeSeries.map(ts => ts.units);
        let commonUnits;
        if (seriesUnits.every(u => u === seriesUnits[0])) {
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
        Plotly.plot(node, this.timeSeries.map(ts => {
            const nonNullCount = ts.values.filter(v => !isNaN(v)).length;
            const mode = ((ts.style !== 'bar') && (nonNullCount < 365)) ?
                'lines+markers' :
                undefined;
            const suffix = commonUnits ? '' : ` (${ts.units})`;
            return {
                type: (ts.style === 'bar') ? 'bar' : undefined,
                mode: mode,
                x: ts.dates,
                y: ts.values,
                name: ts.label + suffix
            };
        }), layout);
    }
}
exports.TimeseriesChartComponent = TimeseriesChartComponent;
TimeseriesChartComponent.ɵfac = function TimeseriesChartComponent_Factory(t) { return new (t || TimeseriesChartComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
TimeseriesChartComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TimeseriesChartComponent, selectors: [["timeseries-chart"]], inputs: { title: "title", timeSeries: "timeSeries", marginLeft: "marginLeft", marginRight: "marginRight", marginTop: "marginTop", marginBottom: "marginBottom", titlefont: "titlefont" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "our-chart"]], template: function TimeseriesChartComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TimeseriesChartComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'timeseries-chart',
                template: `<div class="our-chart">
</div>
`, styles: []
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXNlcmllcy1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJ0aW1lc2VyaWVzLWNoYXJ0L3RpbWVzZXJpZXMtY2hhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUFyQyxxQ0FBcUM7QUFFckMsd0NBQWlIO0FBRWpILHdEQUF3RDtBQUV4RCwwQkFBMEI7QUFDMUIsd0RBQXdEO0FBRXhELHNEQUFzRDs7QUFDdEQsdUNBQXVDO0FBRXZDLE1BS2Esd0JBQXdCO0lBU25DLFlBQW9CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFQOUIsZUFBVSxHQUFzQixFQUFFLENBQUM7UUFDbkMsZUFBVSxHQUFVLEVBQUUsQ0FBQztRQUN2QixnQkFBVyxHQUFVLEVBQUUsQ0FBQztRQUN4QixjQUFTLEdBQVUsQ0FBQyxDQUFDO1FBQ3JCLGlCQUFZLEdBQVUsRUFBRSxDQUFDO1FBQ3pCLGNBQVMsR0FBTyxTQUFTLENBQUM7SUFJbkMsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRW5FLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFZixJQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFDO1lBQ2pELE9BQU87U0FDUjtRQUVELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQSxFQUFFLENBQUEsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RELElBQUksV0FBa0IsQ0FBQztRQUN2QixJQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBLEVBQUUsQ0FBQSxDQUFDLEtBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUM7WUFDMUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QjtRQUVELElBQUksTUFBTSxHQUFPO1lBQ2YsTUFBTSxFQUFFO2dCQUNOLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQSxDQUFDLENBQUEsRUFBRSxDQUFBLENBQUMsQ0FBQSxDQUFDLENBQUM7Z0JBQ3JDLENBQUMsRUFBQyxJQUFJLENBQUMsVUFBVTtnQkFDakIsQ0FBQyxFQUFDLElBQUksQ0FBQyxXQUFXO2dCQUNsQixDQUFDLEVBQUMsSUFBSSxDQUFDLFlBQVk7YUFDcEI7WUFDRCxLQUFLLEVBQUM7Z0JBQ0osVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLEtBQUssRUFBQyxXQUFXO2FBQ2xCO1lBQ0QsS0FBSyxFQUFDLEdBQUc7WUFDVCxNQUFNLEVBQUMsR0FBRztZQUNWLEtBQUssRUFBQyxJQUFJLENBQUMsS0FBSyxJQUFJLFNBQVM7WUFDN0IsU0FBUyxFQUFDLElBQUksQ0FBQyxTQUFTO1NBQ3pCLENBQUM7UUFFRixNQUFNLENBQUMsSUFBSSxDQUFFLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUEsRUFBRTtZQUN6QyxNQUFNLFlBQVksR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUEsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQzNELE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxLQUFHLEtBQUssQ0FBQyxJQUFFLENBQUMsWUFBWSxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUMsZUFBZSxDQUFDLENBQUM7Z0JBQ2pCLFNBQVMsQ0FBQztZQUN2QixNQUFNLE1BQU0sR0FBRyxXQUFXLENBQUEsQ0FBQyxDQUFBLEVBQUUsQ0FBQSxDQUFDLENBQUEsS0FBSyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUM7WUFDL0MsT0FBTztnQkFDTCxJQUFJLEVBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxLQUFHLEtBQUssQ0FBQyxDQUFBLENBQUMsQ0FBQSxLQUFLLENBQUEsQ0FBQyxDQUFBLFNBQVM7Z0JBQ3ZDLElBQUksRUFBQyxJQUFJO2dCQUNULENBQUMsRUFBQyxFQUFFLENBQUMsS0FBSztnQkFDVixDQUFDLEVBQUMsRUFBRSxDQUFDLE1BQU07Z0JBQ1gsSUFBSSxFQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUMsTUFBTTthQUNyQixDQUFDO1FBQ0osQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFFLENBQUM7SUFDZixDQUFDOztBQXhFSCw0REF5RUM7Z0dBcEVZLHdCQUF3Qjs2REFBeEIsd0JBQXdCO1FBSHhCLHlCQUNQOztrREFFTyx3QkFBd0I7Y0FMcEMsZ0JBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7O0NBRVgsRUFBQyxNQUFNLEVBQUUsRUFBRTthQUFDOzZEQUVGLEtBQUs7a0JBQWIsWUFBSztZQUNHLFVBQVU7a0JBQWxCLFlBQUs7WUFDRyxVQUFVO2tCQUFsQixZQUFLO1lBQ0csV0FBVztrQkFBbkIsWUFBSztZQUNHLFNBQVM7a0JBQWpCLFlBQUs7WUFDRyxZQUFZO2tCQUFwQixZQUFLO1lBQ0csU0FBUztrQkFBakIsWUFBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9kZWNzLmQudHNcIiAvPlxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGltZVNlcmllcyB9IGZyb20gJ21hcC13YWxkJztcbi8vaW1wb3J0ICogYXMgUGxvdGx5IGZyb20gJ3Bsb3RseS5qcy9kaXN0L3Bsb3RseS1iYXNpYyc7XG5cbi8vZGVjbGFyZSB2YXIgUGxvdGx5OiBhbnk7XG4vL2NvbnN0IFBsb3RseSA9IHJlcXVpcmUoJ3Bsb3RseS5qcy9kaXN0L3Bsb3RseS1iYXNpYycpO1xuXG5pbXBvcnQgKiBhcyBQbG90bHkgZnJvbSAncGxvdGx5LmpzL2Rpc3QvcGxvdGx5LWJhc2ljJztcbi8vIGltcG9ydCAqIGFzIFBsb3RseSBmcm9tICdwbG90bHkuanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aW1lc2VyaWVzLWNoYXJ0JyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwib3VyLWNoYXJ0XCI+XG48L2Rpdj5cbmAsc3R5bGVzOiBbXX0pXG5leHBvcnQgY2xhc3MgVGltZXNlcmllc0NoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzICB7XG4gIEBJbnB1dCgpIHRpdGxlOnN0cmluZztcbiAgQElucHV0KCkgdGltZVNlcmllczogQXJyYXk8VGltZVNlcmllcz4gPSBbXTtcbiAgQElucHV0KCkgbWFyZ2luTGVmdDpudW1iZXIgPSA0MDtcbiAgQElucHV0KCkgbWFyZ2luUmlnaHQ6bnVtYmVyID0gMTA7XG4gIEBJbnB1dCgpIG1hcmdpblRvcDpudW1iZXIgPSAwO1xuICBASW5wdXQoKSBtYXJnaW5Cb3R0b206bnVtYmVyID0gMjA7XG4gIEBJbnB1dCgpIHRpdGxlZm9udDphbnkgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmKXtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG4gICAgdGhpcy5kcmF3KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5kcmF3KCk7XG4gIH1cblxuICBkcmF3KCl7XG4gICAgdmFyIG5vZGUgPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLm91ci1jaGFydCcpO1xuXG4gICAgUGxvdGx5LnB1cmdlKG5vZGUpO1xuXG4gICAgICAgIGlmKCF0aGlzLnRpbWVTZXJpZXMgfHwgIXRoaXMudGltZVNlcmllcy5sZW5ndGgpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNlcmllc1VuaXRzID0gdGhpcy50aW1lU2VyaWVzLm1hcCh0cz0+dHMudW5pdHMpO1xuICAgIGxldCBjb21tb25Vbml0czpzdHJpbmc7XG4gICAgaWYoc2VyaWVzVW5pdHMuZXZlcnkodT0+dT09PXNlcmllc1VuaXRzWzBdKSl7XG4gICAgICBjb21tb25Vbml0cyA9IHNlcmllc1VuaXRzWzBdO1xuICAgIH1cblxuICAgIHZhciBsYXlvdXQ6YW55ID0ge1xuICAgICAgbWFyZ2luOiB7XG4gICAgICAgIHQ6IHRoaXMubWFyZ2luVG9wICsgKHRoaXMudGl0bGU/MzA6MCksXG4gICAgICAgIGw6dGhpcy5tYXJnaW5MZWZ0LFxuICAgICAgICByOnRoaXMubWFyZ2luUmlnaHQsXG4gICAgICAgIGI6dGhpcy5tYXJnaW5Cb3R0b21cbiAgICAgIH0sXG4gICAgICB5YXhpczp7XG4gICAgICAgIGZpeGVkcmFuZ2U6IHRydWUsXG4gICAgICAgIHRpdGxlOmNvbW1vblVuaXRzXG4gICAgICB9LFxuICAgICAgd2lkdGg6MzIwLFxuICAgICAgaGVpZ2h0OjIwMCxcbiAgICAgIHRpdGxlOnRoaXMudGl0bGUgfHwgdW5kZWZpbmVkLFxuICAgICAgdGl0bGVmb250OnRoaXMudGl0bGVmb250XG4gICAgfTtcblxuICAgIFBsb3RseS5wbG90KCBub2RlLCB0aGlzLnRpbWVTZXJpZXMubWFwKHRzPT57XG4gICAgICBjb25zdCBub25OdWxsQ291bnQgPSB0cy52YWx1ZXMuZmlsdGVyKHY9PiFpc05hTih2KSkubGVuZ3RoO1xuICAgICAgY29uc3QgbW9kZSA9ICgodHMuc3R5bGUhPT0nYmFyJykmJihub25OdWxsQ291bnQ8MzY1KSkgP1xuICAgICAgICAgICAgICAgICAgICdsaW5lcyttYXJrZXJzJyA6XG4gICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkO1xuICAgICAgY29uc3Qgc3VmZml4ID0gY29tbW9uVW5pdHM/Jyc6YCAoJHt0cy51bml0c30pYDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6KHRzLnN0eWxlPT09J2JhcicpPydiYXInOnVuZGVmaW5lZCxcbiAgICAgICAgbW9kZTptb2RlLFxuICAgICAgICB4OnRzLmRhdGVzLFxuICAgICAgICB5OnRzLnZhbHVlcyxcbiAgICAgICAgbmFtZTp0cy5sYWJlbCtzdWZmaXhcbiAgICAgIH07XG4gICAgfSksIGxheW91dCApO1xuICB9XG59XG4iXX0=