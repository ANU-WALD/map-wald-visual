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
var FeatureTableComponent = /** @class */ (function () {
    function FeatureTableComponent() {
        this.styles = {};
        this._keys = Object.keys;
    }
    FeatureTableComponent.prototype.ngAfterViewInit = function () {
    };
    FeatureTableComponent.prototype.ngOnChanges = function (changes) {
        if (!this.styles) {
            this.styles = {};
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FeatureTableComponent.prototype, "feature", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FeatureTableComponent.prototype, "styles", void 0);
    FeatureTableComponent = __decorate([
        core_1.Component({
            selector: 'feature-table',
            template: "<table *ngIf=\"feature\" class=\"table table-striped table-sm feature-table\">\n  <thead>\n    <tr>\n      <td><strong>Property</strong></td>\n      <td><strong>Value</strong></td>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td><strong>Geometry</strong></td>\n      <td>{{feature.geometry.type}}</td>\n    </tr>\n    <tr *ngFor=\"let prop of _keys(feature.properties)\">\n      <td><strong>{{prop}}</strong></td>\n      <td *ngIf=\"!styles||!styles[prop]\">{{feature.properties[prop]}}</td>\n      <td *ngIf=\"styles&&styles[prop]\">\n        <a *ngIf=\"styles[prop].hyperlink\" target=\"_blank\" [href]=\"feature.properties[prop]\">\n          {{feature.properties[prop]}}\n        </a>\n      </td>\n    </tr>\n  </tbody>\n</table>",
            styles: [".feature-table{\n  max-width:300px;\n}"]
        }),
        __metadata("design:paramtypes", [])
    ], FeatureTableComponent);
    return FeatureTableComponent;
}());
exports.FeatureTableComponent = FeatureTableComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJmZWF0dXJlLXRhYmxlL2ZlYXR1cmUtdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBGO0FBOEIxRjtJQUtFO1FBSFMsV0FBTSxHQUFzQyxFQUFFLENBQUE7UUFDdkQsVUFBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFJcEIsQ0FBQztJQUVELCtDQUFlLEdBQWY7SUFFQSxDQUFDO0lBRUQsMkNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDO1lBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7U0FDbEI7SUFDSCxDQUFDO0lBaEJRO1FBQVIsWUFBSyxFQUFFOzswREFBYztJQUNiO1FBQVIsWUFBSyxFQUFFOzt5REFBK0M7SUFGNUMscUJBQXFCO1FBM0JqQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLHV1QkFzQkg7cUJBQVUsd0NBRWpCO1NBQUUsQ0FBQzs7T0FDUSxxQkFBcUIsQ0FrQmpDO0lBQUQsNEJBQUM7Q0FBQSxBQWxCRCxJQWtCQztBQWxCWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExheWVyUHJvcGVydHlTdHlsZSB9IGZyb20gJ21hcC13YWxkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmVhdHVyZS10YWJsZScsXG4gIHRlbXBsYXRlOiBgPHRhYmxlICpuZ0lmPVwiZmVhdHVyZVwiIGNsYXNzPVwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1zbSBmZWF0dXJlLXRhYmxlXCI+XG4gIDx0aGVhZD5cbiAgICA8dHI+XG4gICAgICA8dGQ+PHN0cm9uZz5Qcm9wZXJ0eTwvc3Ryb25nPjwvdGQ+XG4gICAgICA8dGQ+PHN0cm9uZz5WYWx1ZTwvc3Ryb25nPjwvdGQ+XG4gICAgPC90cj5cbiAgPC90aGVhZD5cbiAgPHRib2R5PlxuICAgIDx0cj5cbiAgICAgIDx0ZD48c3Ryb25nPkdlb21ldHJ5PC9zdHJvbmc+PC90ZD5cbiAgICAgIDx0ZD57e2ZlYXR1cmUuZ2VvbWV0cnkudHlwZX19PC90ZD5cbiAgICA8L3RyPlxuICAgIDx0ciAqbmdGb3I9XCJsZXQgcHJvcCBvZiBfa2V5cyhmZWF0dXJlLnByb3BlcnRpZXMpXCI+XG4gICAgICA8dGQ+PHN0cm9uZz57e3Byb3B9fTwvc3Ryb25nPjwvdGQ+XG4gICAgICA8dGQgKm5nSWY9XCIhc3R5bGVzfHwhc3R5bGVzW3Byb3BdXCI+e3tmZWF0dXJlLnByb3BlcnRpZXNbcHJvcF19fTwvdGQ+XG4gICAgICA8dGQgKm5nSWY9XCJzdHlsZXMmJnN0eWxlc1twcm9wXVwiPlxuICAgICAgICA8YSAqbmdJZj1cInN0eWxlc1twcm9wXS5oeXBlcmxpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIiBbaHJlZl09XCJmZWF0dXJlLnByb3BlcnRpZXNbcHJvcF1cIj5cbiAgICAgICAgICB7e2ZlYXR1cmUucHJvcGVydGllc1twcm9wXX19XG4gICAgICAgIDwvYT5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgPC90Ym9keT5cbjwvdGFibGU+YCxzdHlsZXM6IFtgLmZlYXR1cmUtdGFibGV7XG4gIG1heC13aWR0aDozMDBweDtcbn1gXX0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZVRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgZmVhdHVyZTogYW55O1xuICBASW5wdXQoKSBzdHlsZXM6IHtba2V5OnN0cmluZ106TGF5ZXJQcm9wZXJ0eVN0eWxlfSA9IHt9XG4gIF9rZXlzID0gT2JqZWN0LmtleXM7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG5cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZighdGhpcy5zdHlsZXMpe1xuICAgICAgdGhpcy5zdHlsZXMgPSB7fTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==