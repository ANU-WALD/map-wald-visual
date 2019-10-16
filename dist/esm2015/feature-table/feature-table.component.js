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
let FeatureTableComponent = class FeatureTableComponent {
    constructor() {
        this.styles = {};
        this._keys = Object.keys;
    }
    ngAfterViewInit() {
    }
    ngOnChanges(changes) {
        if (!this.styles) {
            this.styles = {};
        }
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
        template: `<table *ngIf="feature" class="table table-striped table-sm feature-table">
  <thead>
    <tr>
      <td><strong>Property</strong></td>
      <td><strong>Value</strong></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Geometry</strong></td>
      <td>{{feature.geometry.type}}</td>
    </tr>
    <tr *ngFor="let prop of _keys(feature.properties)">
      <td><strong>{{prop}}</strong></td>
      <td *ngIf="!styles||!styles[prop]">{{feature.properties[prop]}}</td>
      <td *ngIf="styles&&styles[prop]">
        <a *ngIf="styles[prop].hyperlink" target="_blank" [href]="feature.properties[prop]">
          {{feature.properties[prop]}}
        </a>
      </td>
    </tr>
  </tbody>
</table>`,
        styles: [`.feature-table{
  max-width:300px;
}`]
    }),
    __metadata("design:paramtypes", [])
], FeatureTableComponent);
exports.FeatureTableComponent = FeatureTableComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJmZWF0dXJlLXRhYmxlL2ZlYXR1cmUtdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQTBGO0FBOEIxRixJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQUtoQztRQUhTLFdBQU0sR0FBc0MsRUFBRSxDQUFBO1FBQ3ZELFVBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBSXBCLENBQUM7SUFFRCxlQUFlO0lBRWYsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQztZQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUFqQlU7SUFBUixZQUFLLEVBQUU7O3NEQUFjO0FBQ2I7SUFBUixZQUFLLEVBQUU7O3FEQUErQztBQUY1QyxxQkFBcUI7SUEzQmpDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZUFBZTtRQUN6QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FzQkg7aUJBQVU7O0VBRWpCO0tBQUUsQ0FBQzs7R0FDUSxxQkFBcUIsQ0FrQmpDO0FBbEJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF5ZXJQcm9wZXJ0eVN0eWxlIH0gZnJvbSAnbWFwLXdhbGQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmZWF0dXJlLXRhYmxlJyxcbiAgdGVtcGxhdGU6IGA8dGFibGUgKm5nSWY9XCJmZWF0dXJlXCIgY2xhc3M9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLXNtIGZlYXR1cmUtdGFibGVcIj5cbiAgPHRoZWFkPlxuICAgIDx0cj5cbiAgICAgIDx0ZD48c3Ryb25nPlByb3BlcnR5PC9zdHJvbmc+PC90ZD5cbiAgICAgIDx0ZD48c3Ryb25nPlZhbHVlPC9zdHJvbmc+PC90ZD5cbiAgICA8L3RyPlxuICA8L3RoZWFkPlxuICA8dGJvZHk+XG4gICAgPHRyPlxuICAgICAgPHRkPjxzdHJvbmc+R2VvbWV0cnk8L3N0cm9uZz48L3RkPlxuICAgICAgPHRkPnt7ZmVhdHVyZS5nZW9tZXRyeS50eXBlfX08L3RkPlxuICAgIDwvdHI+XG4gICAgPHRyICpuZ0Zvcj1cImxldCBwcm9wIG9mIF9rZXlzKGZlYXR1cmUucHJvcGVydGllcylcIj5cbiAgICAgIDx0ZD48c3Ryb25nPnt7cHJvcH19PC9zdHJvbmc+PC90ZD5cbiAgICAgIDx0ZCAqbmdJZj1cIiFzdHlsZXN8fCFzdHlsZXNbcHJvcF1cIj57e2ZlYXR1cmUucHJvcGVydGllc1twcm9wXX19PC90ZD5cbiAgICAgIDx0ZCAqbmdJZj1cInN0eWxlcyYmc3R5bGVzW3Byb3BdXCI+XG4gICAgICAgIDxhICpuZ0lmPVwic3R5bGVzW3Byb3BdLmh5cGVybGlua1wiIHRhcmdldD1cIl9ibGFua1wiIFtocmVmXT1cImZlYXR1cmUucHJvcGVydGllc1twcm9wXVwiPlxuICAgICAgICAgIHt7ZmVhdHVyZS5wcm9wZXJ0aWVzW3Byb3BdfX1cbiAgICAgICAgPC9hPlxuICAgICAgPC90ZD5cbiAgICA8L3RyPlxuICA8L3Rib2R5PlxuPC90YWJsZT5gLHN0eWxlczogW2AuZmVhdHVyZS10YWJsZXtcbiAgbWF4LXdpZHRoOjMwMHB4O1xufWBdfSlcbmV4cG9ydCBjbGFzcyBGZWF0dXJlVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBmZWF0dXJlOiBhbnk7XG4gIEBJbnB1dCgpIHN0eWxlczoge1trZXk6c3RyaW5nXTpMYXllclByb3BlcnR5U3R5bGV9ID0ge31cbiAgX2tleXMgPSBPYmplY3Qua2V5cztcblxuICBjb25zdHJ1Y3Rvcigpe1xuXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcblxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmKCF0aGlzLnN0eWxlcyl7XG4gICAgICB0aGlzLnN0eWxlcyA9IHt9O1xuICAgIH1cbiAgfVxufVxuIl19