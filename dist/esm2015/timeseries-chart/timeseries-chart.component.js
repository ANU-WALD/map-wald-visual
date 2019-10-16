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
const core_1 = require("@angular/core");
//import * as Plotly from 'plotly.js/dist/plotly-basic';
//declare var Plotly: any;
//const Plotly = require('plotly.js/dist/plotly-basic');
const Plotly = require("plotly.js/dist/plotly-basic");
// import * as Plotly from 'plotly.js';
let TimeseriesChartComponent = class TimeseriesChartComponent {
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
};
TimeseriesChartComponent.ctorParameters = () => [
    { type: core_1.ElementRef }
];
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
        template: `<div class="our-chart">
</div>
`
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], TimeseriesChartComponent);
exports.TimeseriesChartComponent = TimeseriesChartComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXNlcmllcy1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJ0aW1lc2VyaWVzLWNoYXJ0L3RpbWVzZXJpZXMtY2hhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQ0FBcUM7Ozs7Ozs7Ozs7O0FBRXJDLHdDQUFpSDtBQUVqSCx3REFBd0Q7QUFFeEQsMEJBQTBCO0FBQzFCLHdEQUF3RDtBQUV4RCxzREFBc0Q7QUFDdEQsdUNBQXVDO0FBT3ZDLElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBU25DLFlBQW9CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFQOUIsZUFBVSxHQUFzQixFQUFFLENBQUM7UUFDbkMsZUFBVSxHQUFVLEVBQUUsQ0FBQztRQUN2QixnQkFBVyxHQUFVLEVBQUUsQ0FBQztRQUN4QixjQUFTLEdBQVUsQ0FBQyxDQUFDO1FBQ3JCLGlCQUFZLEdBQVUsRUFBRSxDQUFDO1FBQ3pCLGNBQVMsR0FBTyxTQUFTLENBQUM7SUFJbkMsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRW5FLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFZixJQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFDO1lBQ2pELE9BQU87U0FDUjtRQUVELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQSxFQUFFLENBQUEsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RELElBQUksV0FBa0IsQ0FBQztRQUN2QixJQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBLEVBQUUsQ0FBQSxDQUFDLEtBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUM7WUFDMUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QjtRQUVELElBQUksTUFBTSxHQUFPO1lBQ2YsTUFBTSxFQUFFO2dCQUNOLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQSxDQUFDLENBQUEsRUFBRSxDQUFBLENBQUMsQ0FBQSxDQUFDLENBQUM7Z0JBQ3JDLENBQUMsRUFBQyxJQUFJLENBQUMsVUFBVTtnQkFDakIsQ0FBQyxFQUFDLElBQUksQ0FBQyxXQUFXO2dCQUNsQixDQUFDLEVBQUMsSUFBSSxDQUFDLFlBQVk7YUFDcEI7WUFDRCxLQUFLLEVBQUM7Z0JBQ0osVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLEtBQUssRUFBQyxXQUFXO2FBQ2xCO1lBQ0QsS0FBSyxFQUFDLEdBQUc7WUFDVCxNQUFNLEVBQUMsR0FBRztZQUNWLEtBQUssRUFBQyxJQUFJLENBQUMsS0FBSyxJQUFJLFNBQVM7WUFDN0IsU0FBUyxFQUFDLElBQUksQ0FBQyxTQUFTO1NBQ3pCLENBQUM7UUFFRixNQUFNLENBQUMsSUFBSSxDQUFFLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUEsRUFBRTtZQUN6QyxNQUFNLFlBQVksR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUEsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQzNELE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxLQUFHLEtBQUssQ0FBQyxJQUFFLENBQUMsWUFBWSxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUMsZUFBZSxDQUFDLENBQUM7Z0JBQ2pCLFNBQVMsQ0FBQztZQUN2QixNQUFNLE1BQU0sR0FBRyxXQUFXLENBQUEsQ0FBQyxDQUFBLEVBQUUsQ0FBQSxDQUFDLENBQUEsS0FBSyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUM7WUFDL0MsT0FBTztnQkFDTCxJQUFJLEVBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxLQUFHLEtBQUssQ0FBQyxDQUFBLENBQUMsQ0FBQSxLQUFLLENBQUEsQ0FBQyxDQUFBLFNBQVM7Z0JBQ3ZDLElBQUksRUFBQyxJQUFJO2dCQUNULENBQUMsRUFBQyxFQUFFLENBQUMsS0FBSztnQkFDVixDQUFDLEVBQUMsRUFBRSxDQUFDLE1BQU07Z0JBQ1gsSUFBSSxFQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUMsTUFBTTthQUNyQixDQUFDO1FBQ0osQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFFLENBQUM7SUFDZixDQUFDO0NBQ0YsQ0FBQTs7WUEzRDhCLGlCQUFVOztBQVI5QjtJQUFSLFlBQUssRUFBRTs7dURBQWM7QUFDYjtJQUFSLFlBQUssRUFBRTs4QkFBYSxLQUFLOzREQUFrQjtBQUNuQztJQUFSLFlBQUssRUFBRTs7NERBQXdCO0FBQ3ZCO0lBQVIsWUFBSyxFQUFFOzs2REFBeUI7QUFDeEI7SUFBUixZQUFLLEVBQUU7OzJEQUFzQjtBQUNyQjtJQUFSLFlBQUssRUFBRTs7OERBQTBCO0FBQ3pCO0lBQVIsWUFBSyxFQUFFOzsyREFBMkI7QUFQeEIsd0JBQXdCO0lBTHBDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLFFBQVEsRUFBRTs7Q0FFWDtLQUFZLENBQUM7cUNBVWlCLGlCQUFVO0dBVDVCLHdCQUF3QixDQW9FcEM7QUFwRVksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2RlY3MuZC50c1wiIC8+XG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaW1lU2VyaWVzIH0gZnJvbSAnbWFwLXdhbGQnO1xuLy9pbXBvcnQgKiBhcyBQbG90bHkgZnJvbSAncGxvdGx5LmpzL2Rpc3QvcGxvdGx5LWJhc2ljJztcblxuLy9kZWNsYXJlIHZhciBQbG90bHk6IGFueTtcbi8vY29uc3QgUGxvdGx5ID0gcmVxdWlyZSgncGxvdGx5LmpzL2Rpc3QvcGxvdGx5LWJhc2ljJyk7XG5cbmltcG9ydCAqIGFzIFBsb3RseSBmcm9tICdwbG90bHkuanMvZGlzdC9wbG90bHktYmFzaWMnO1xuLy8gaW1wb3J0ICogYXMgUGxvdGx5IGZyb20gJ3Bsb3RseS5qcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RpbWVzZXJpZXMtY2hhcnQnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJvdXItY2hhcnRcIj5cbjwvZGl2PlxuYCxzdHlsZXM6IFtdfSlcbmV4cG9ydCBjbGFzcyBUaW1lc2VyaWVzQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMgIHtcbiAgQElucHV0KCkgdGl0bGU6c3RyaW5nO1xuICBASW5wdXQoKSB0aW1lU2VyaWVzOiBBcnJheTxUaW1lU2VyaWVzPiA9IFtdO1xuICBASW5wdXQoKSBtYXJnaW5MZWZ0Om51bWJlciA9IDQwO1xuICBASW5wdXQoKSBtYXJnaW5SaWdodDpudW1iZXIgPSAxMDtcbiAgQElucHV0KCkgbWFyZ2luVG9wOm51bWJlciA9IDA7XG4gIEBJbnB1dCgpIG1hcmdpbkJvdHRvbTpudW1iZXIgPSAyMDtcbiAgQElucHV0KCkgdGl0bGVmb250OmFueSA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50OkVsZW1lbnRSZWYpe1xuXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxuXG4gIGRyYXcoKXtcbiAgICB2YXIgbm9kZSA9IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcub3VyLWNoYXJ0Jyk7XG5cbiAgICBQbG90bHkucHVyZ2Uobm9kZSk7XG5cbiAgICAgICAgaWYoIXRoaXMudGltZVNlcmllcyB8fCAhdGhpcy50aW1lU2VyaWVzLmxlbmd0aCl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2VyaWVzVW5pdHMgPSB0aGlzLnRpbWVTZXJpZXMubWFwKHRzPT50cy51bml0cyk7XG4gICAgbGV0IGNvbW1vblVuaXRzOnN0cmluZztcbiAgICBpZihzZXJpZXNVbml0cy5ldmVyeSh1PT51PT09c2VyaWVzVW5pdHNbMF0pKXtcbiAgICAgIGNvbW1vblVuaXRzID0gc2VyaWVzVW5pdHNbMF07XG4gICAgfVxuXG4gICAgdmFyIGxheW91dDphbnkgPSB7XG4gICAgICBtYXJnaW46IHtcbiAgICAgICAgdDogdGhpcy5tYXJnaW5Ub3AgKyAodGhpcy50aXRsZT8zMDowKSxcbiAgICAgICAgbDp0aGlzLm1hcmdpbkxlZnQsXG4gICAgICAgIHI6dGhpcy5tYXJnaW5SaWdodCxcbiAgICAgICAgYjp0aGlzLm1hcmdpbkJvdHRvbVxuICAgICAgfSxcbiAgICAgIHlheGlzOntcbiAgICAgICAgZml4ZWRyYW5nZTogdHJ1ZSxcbiAgICAgICAgdGl0bGU6Y29tbW9uVW5pdHNcbiAgICAgIH0sXG4gICAgICB3aWR0aDozMjAsXG4gICAgICBoZWlnaHQ6MjAwLFxuICAgICAgdGl0bGU6dGhpcy50aXRsZSB8fCB1bmRlZmluZWQsXG4gICAgICB0aXRsZWZvbnQ6dGhpcy50aXRsZWZvbnRcbiAgICB9O1xuXG4gICAgUGxvdGx5LnBsb3QoIG5vZGUsIHRoaXMudGltZVNlcmllcy5tYXAodHM9PntcbiAgICAgIGNvbnN0IG5vbk51bGxDb3VudCA9IHRzLnZhbHVlcy5maWx0ZXIodj0+IWlzTmFOKHYpKS5sZW5ndGg7XG4gICAgICBjb25zdCBtb2RlID0gKCh0cy5zdHlsZSE9PSdiYXInKSYmKG5vbk51bGxDb3VudDwzNjUpKSA/XG4gICAgICAgICAgICAgICAgICAgJ2xpbmVzK21hcmtlcnMnIDpcbiAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQ7XG4gICAgICBjb25zdCBzdWZmaXggPSBjb21tb25Vbml0cz8nJzpgICgke3RzLnVuaXRzfSlgO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZToodHMuc3R5bGU9PT0nYmFyJyk/J2Jhcic6dW5kZWZpbmVkLFxuICAgICAgICBtb2RlOm1vZGUsXG4gICAgICAgIHg6dHMuZGF0ZXMsXG4gICAgICAgIHk6dHMudmFsdWVzLFxuICAgICAgICBuYW1lOnRzLmxhYmVsK3N1ZmZpeFxuICAgICAgfTtcbiAgICB9KSwgbGF5b3V0ICk7XG4gIH1cbn1cbiJdfQ==