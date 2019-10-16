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
var DateShifterComponent = /** @class */ (function () {
    function DateShifterComponent() {
        this.interval = 2000;
        this.limits = null;
        this.date = new Date();
        this.dateChange = new core_1.EventEmitter();
        this.value = 0;
        this.label = '-';
        this.timer = 0;
        this.dateText = '-';
    }
    DateShifterComponent.prototype.ngOnChanges = function (changes) {
        if (changes.interval) {
            this.startTimer();
        }
    };
    DateShifterComponent.prototype.startTimer = function () {
        var _this = this;
        if (this.timer) {
            clearInterval(this.timer);
        }
        this.timer = window.setInterval(function () { return _this.tick(); }, this.interval);
    };
    DateShifterComponent.prototype.ngAfterViewInit = function () {
        this.startTimer();
    };
    DateShifterComponent.prototype.reset = function () {
        this.value = 0;
        this.sliderMoved();
    };
    DateShifterComponent.prototype.tick = function () {
        if (!this.value) {
            return;
        }
        var sign = this.value < 0 ? -1 : 1;
        this.date = new Date(this.date.getTime());
        switch (Math.abs(this.value)) {
            case 1:
                this.date.setDate(this.date.getDate() + sign);
                break;
            case 2:
                this.date.setDate(this.date.getDate() + 7 * sign);
                break;
            case 3:
                this.date.setMonth(this.date.getMonth() + sign);
                break;
            case 4:
                this.date.setFullYear(this.date.getFullYear() + sign);
                break;
        }
        if (this.limits && this.limits.length) {
            if (this.date.getTime() < this.limits[0].getTime()) {
                this.date = this.limits[0];
            }
            if (this.date.getTime() > this.limits[1].getTime()) {
                this.date = this.limits[1];
            }
        }
        this.setDateText();
        this.dateChange.emit(this.date);
    };
    DateShifterComponent.prototype.setDateText = function () {
        this.dateText = this.date.toLocaleDateString();
    };
    DateShifterComponent.prototype.sliderMoved = function () {
        this.setLabel();
    };
    DateShifterComponent.prototype.setLabel = function () {
        if (this.value < 0) {
            this.label = 'back 1';
        }
        else if (this.value > 0) {
            this.label = 'advance 1';
        }
        else {
            this.label = '-';
        }
        switch (Math.abs(this.value)) {
            case 1:
                this.label += 'day';
                break;
            case 2:
                this.label += 'week';
                break;
            case 3:
                this.label += 'month';
                break;
            case 4:
                this.label += 'year';
                break;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DateShifterComponent.prototype, "interval", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], DateShifterComponent.prototype, "limits", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DateShifterComponent.prototype, "date", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DateShifterComponent.prototype, "dateChange", void 0);
    DateShifterComponent = __decorate([
        core_1.Component({
            selector: 'date-shifter',
            template: "<div>\n  <h3>{{dateText}}</h3>\n  <input type=\"range\"\n         class=\"form-control\"\n         min=\"-4\"\n         [max]=\"4\"\n         step=\"1\"\n         [(ngModel)]=\"value\"\n         (ngModelChange)=\"sliderMoved()\"\n         (mouseup)=\"reset()\">\n  <h4>{{label}}</h4>\n</div>\n\n  ",
            styles: [""]
        }),
        __metadata("design:paramtypes", [])
    ], DateShifterComponent);
    return DateShifterComponent;
}());
exports.DateShifterComponent = DateShifterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1zaGlmdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLXZpc3VhbC8iLCJzb3VyY2VzIjpbImRhdGUtc2hpZnRlci9kYXRlLXNoaWZ0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXVJO0FBdUJ2STtJQVdFO1FBVlMsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixXQUFNLEdBQVUsSUFBSSxDQUFDO1FBQ3JCLFNBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxJQUFJLG1CQUFZLEVBQVEsQ0FBQztRQUVoRCxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsVUFBSyxHQUFHLEdBQUcsQ0FBQztRQUNaLFVBQUssR0FBVSxDQUFDLENBQUM7UUFDakIsYUFBUSxHQUFHLEdBQUcsQ0FBQztJQUdmLENBQUM7SUFFRCwwQ0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBRyxPQUFPLENBQUMsUUFBUSxFQUFDO1lBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjtJQUNILENBQUM7SUFFRCx5Q0FBVSxHQUFWO1FBQUEsaUJBS0M7UUFKQyxJQUFHLElBQUksQ0FBQyxLQUFLLEVBQUM7WUFDWixhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLGNBQUksT0FBQSxLQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxFQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsOENBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsb0NBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFdBQVcsRUFBRSxD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LElBQUksTUFBTSxDQUFDO2dCQUNyQixNQUFNO1lBQ1IsS0FBSyxDQUFDO2dCQUNKLElBQUksQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDO2dCQUN0QixNQUFNO1lBQ1IsS0FBSyxDQUFDO2dCQUNKLElBQUksQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDO2dCQUNyQixNQUFNO1NBQ1Q7SUFDSCxDQUFDO0lBbkdRO1FBQVIsWUFBSyxFQUFFOzswREFBaUI7SUFDaEI7UUFBUixZQUFLLEVBQUU7O3dEQUFzQjtJQUNyQjtRQUFSLFlBQUssRUFBRTs7c0RBQW1CO0lBQ2pCO1FBQVQsYUFBTSxFQUFFOzs0REFBdUM7SUFKckMsb0JBQW9CO1FBbEJoQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLDJTQWFUO3FCQUNRLEVBQUU7U0FDWixDQUFDOztPQUNXLG9CQUFvQixDQXFHaEM7SUFBRCwyQkFBQztDQUFBLEFBckdELElBcUdDO0FBckdZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgT3V0cHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbmRlY2xhcmUgdmFyIFBsb3RseTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlLXNoaWZ0ZXInLFxuICB0ZW1wbGF0ZTogYDxkaXY+XG4gIDxoMz57e2RhdGVUZXh0fX08L2gzPlxuICA8aW5wdXQgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgIG1pbj1cIi00XCJcbiAgICAgICAgIFttYXhdPVwiNFwiXG4gICAgICAgICBzdGVwPVwiMVwiXG4gICAgICAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcbiAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNsaWRlck1vdmVkKClcIlxuICAgICAgICAgKG1vdXNldXApPVwicmVzZXQoKVwiPlxuICA8aDQ+e3tsYWJlbH19PC9oND5cbjwvZGl2PlxuXG4gIGAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlU2hpZnRlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsT25DaGFuZ2VzICB7XG4gIEBJbnB1dCgpIGludGVydmFsID0gMjAwMDtcbiAgQElucHV0KCkgbGltaXRzOkRhdGVbXSA9IG51bGw7XG4gIEBJbnB1dCgpIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICBAT3V0cHV0KCkgZGF0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcblxuICB2YWx1ZSA9IDA7XG4gIGxhYmVsID0gJy0nO1xuICB0aW1lcjpudW1iZXIgPSAwO1xuICBkYXRlVGV4dCA9ICctJztcblxuICBjb25zdHJ1Y3Rvcigpe1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmKGNoYW5nZXMuaW50ZXJ2YWwpe1xuICAgICAgdGhpcy5zdGFydFRpbWVyKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRUaW1lcigpOiBhbnkge1xuICAgIGlmKHRoaXMudGltZXIpe1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICB9XG4gICAgdGhpcy50aW1lciA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKT0+dGhpcy50aWNrKCksdGhpcy5pbnRlcnZhbCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICB0aGlzLnN0YXJ0VGltZXIoKTtcbiAgfVxuXG4gIHJlc2V0KCl7XG4gICAgdGhpcy52YWx1ZSA9IDA7XG4gICAgdGhpcy5zbGlkZXJNb3ZlZCgpO1xuICB9XG5cbiAgdGljaygpOiBhbnkge1xuICAgIGlmKCF0aGlzLnZhbHVlKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgc2lnbiA9IHRoaXMudmFsdWUgPCAwID8gLTEgOiAxO1xuICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKHRoaXMuZGF0ZS5nZXRUaW1lKCkpO1xuICAgIHN3aXRjaChNYXRoLmFicyh0aGlzLnZhbHVlKSl7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHRoaXMuZGF0ZS5zZXREYXRlKHRoaXMuZGF0ZS5nZXREYXRlKCkrc2lnbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICB0aGlzLmRhdGUuc2V0RGF0ZSh0aGlzLmRhdGUuZ2V0RGF0ZSgpKzcqc2lnbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICB0aGlzLmRhdGUuc2V0TW9udGgodGhpcy5kYXRlLmdldE1vbnRoKCkrc2lnbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICB0aGlzLmRhdGUuc2V0RnVsbFllYXIodGhpcy5kYXRlLmdldEZ1bGxZZWFyKCkrc2lnbik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmKHRoaXMubGltaXRzJiZ0aGlzLmxpbWl0cy5sZW5ndGgpe1xuICAgICAgaWYodGhpcy5kYXRlLmdldFRpbWUoKTx0aGlzLmxpbWl0c1swXS5nZXRUaW1lKCkpe1xuICAgICAgICB0aGlzLmRhdGUgPSB0aGlzLmxpbWl0c1swXTtcbiAgICAgIH1cbiAgICAgIGlmKHRoaXMuZGF0ZS5nZXRUaW1lKCk+dGhpcy5saW1pdHNbMV0uZ2V0VGltZSgpKXtcbiAgICAgICAgdGhpcy5kYXRlID0gdGhpcy5saW1pdHNbMV07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0RGF0ZVRleHQoKTtcbiAgICB0aGlzLmRhdGVDaGFuZ2UuZW1pdCh0aGlzLmRhdGUpO1xuICB9XG4gIHNldERhdGVUZXh0KCk6IGFueSB7XG4gICAgdGhpcy5kYXRlVGV4dCA9IHRoaXMuZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgfVxuXG4gIHNsaWRlck1vdmVkKCl7XG4gICAgdGhpcy5zZXRMYWJlbCgpO1xuICB9XG5cbiAgc2V0TGFiZWwoKSB7XG4gICAgaWYodGhpcy52YWx1ZTwwKXtcbiAgICAgIHRoaXMubGFiZWwgPSAnYmFjayAxJztcbiAgICB9IGVsc2UgaWYodGhpcy52YWx1ZT4wKXtcbiAgICAgIHRoaXMubGFiZWwgPSAnYWR2YW5jZSAxJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sYWJlbCA9ICctJztcbiAgICB9XG5cbiAgICBzd2l0Y2goTWF0aC5hYnModGhpcy52YWx1ZSkpe1xuICAgICAgY2FzZSAxOlxuICAgICAgICB0aGlzLmxhYmVsICs9ICdkYXknO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgdGhpcy5sYWJlbCArPSAnd2Vlayc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICB0aGlzLmxhYmVsICs9ICdtb250aCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICB0aGlzLmxhYmVsICs9ICd5ZWFyJztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iXX0=