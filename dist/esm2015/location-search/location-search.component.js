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
let LocationSearchComponent = class LocationSearchComponent {
    constructor() {
    }
    ngAfterViewInit() {
    }
};
LocationSearchComponent = __decorate([
    core_1.Component({
        selector: 'location-search',
        template: `<button class="btn btn-secondary btn-sm"
        ngbTooltip="Location search"
        placement="right"
        [disabled]="true"

><i class="fa fa-search"></i></button>
`
    }),
    __metadata("design:paramtypes", [])
], LocationSearchComponent);
exports.LocationSearchComponent = LocationSearchComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24tc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLXZpc3VhbC8iLCJzb3VyY2VzIjpbImxvY2F0aW9uLXNlYXJjaC9sb2NhdGlvbi1zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQXVGO0FBY3ZGLElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBRWxDO0lBRUEsQ0FBQztJQUVELGVBQWU7SUFFZixDQUFDO0NBQ0YsQ0FBQTtBQVRZLHVCQUF1QjtJQVRuQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixRQUFRLEVBQUU7Ozs7OztDQU1YO0tBQVksQ0FBQzs7R0FDRCx1QkFBdUIsQ0FTbkM7QUFUWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5kZWNsYXJlIHZhciBQbG90bHk6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbG9jYXRpb24tc2VhcmNoJyxcbiAgdGVtcGxhdGU6IGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCJcbiAgICAgICAgbmdiVG9vbHRpcD1cIkxvY2F0aW9uIHNlYXJjaFwiXG4gICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcbiAgICAgICAgW2Rpc2FibGVkXT1cInRydWVcIlxuXG4+PGkgY2xhc3M9XCJmYSBmYS1zZWFyY2hcIj48L2k+PC9idXR0b24+XG5gLHN0eWxlczogW119KVxuZXhwb3J0IGNsYXNzIExvY2F0aW9uU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCAge1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuXG4gIH1cbn0iXX0=