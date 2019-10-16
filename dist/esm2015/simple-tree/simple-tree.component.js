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
let SimpleTreeComponent = class SimpleTreeComponent {
    constructor() {
        this.showTop = true;
        this.collapsedIcon = 'fa fa-caret-right';
        this.expandedIcon = 'fa fa-caret-down';
        this.leafIcon = 'fa fa-minus';
        this.nodeSelected = new core_1.EventEmitter();
        this.options = {};
    }
    ngAfterViewInit() {
    }
    ngOnChanges(changes) {
        if (changes.options) {
            return;
        }
        this.options = {
            collapsedIcon: this.collapsedIcon,
            expandedIcon: this.expandedIcon,
            leafIcon: this.leafIcon
        };
    }
    childSelected(node) {
        this.nodeSelected.emit(node);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SimpleTreeComponent.prototype, "tree", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SimpleTreeComponent.prototype, "showTop", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SimpleTreeComponent.prototype, "inner", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SimpleTreeComponent.prototype, "collapsedIcon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SimpleTreeComponent.prototype, "expandedIcon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SimpleTreeComponent.prototype, "leafIcon", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SimpleTreeComponent.prototype, "nodeSelected", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SimpleTreeComponent.prototype, "options", void 0);
SimpleTreeComponent = __decorate([
    core_1.Component({
        selector: 'simple-tree',
        template: `<div *ngIf="tree&&tree.visible" class="simple-tree">

  <div *ngIf="inner">
    <li ><simple-tree-node [tree]="tree"
                           [options]="options"
                           (nodeSelected)="childSelected($event)"></simple-tree-node>
      <ul *ngIf="tree.children&&tree.expanded" class="inner-list">
        <simple-tree *ngFor="let t of tree.children" [tree]="t" [inner]="true"
                    (nodeSelected)="childSelected($event)"
                    [options]="options"></simple-tree>
      </ul>
    </li>
  </div>

  <div *ngIf="!inner&&showTop">
    <ul class="outer-list">
      <li><simple-tree-node [tree]="tree" [options]="options"
        (nodeSelected)="childSelected($event)"></simple-tree-node>
        <ul *ngIf="tree.children&&tree.expanded" class="inner-list">
            <simple-tree *ngFor="let t of tree.children" [tree]="t" [inner]="true"
            (nodeSelected)="childSelected($event)"
            [options]="options"></simple-tree>
        </ul>
      </li>
    </ul>
  </div>

  <div *ngIf="!inner&&!showTop">
      <ul *ngIf="tree.children&&tree.expanded" class="outer-list">
          <simple-tree *ngFor="let t of tree.children" [tree]="t" [inner]="true"
          (nodeSelected)="childSelected($event)"
          [options]="options"></simple-tree>
      </ul>
    </div>

</div>
`,
        styles: [`
.simple-tree ul{
  list-style-type: none
}

ul.outer-list{
  padding-left:5px;
}

ul.inner-list{
  padding-left:15px;
}`]
    }),
    __metadata("design:paramtypes", [])
], SimpleTreeComponent);
exports.SimpleTreeComponent = SimpleTreeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLXRyZWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtdmlzdWFsLyIsInNvdXJjZXMiOlsic2ltcGxlLXRyZWUvc2ltcGxlLXRyZWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQXVJO0FBdUR2SSxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQWE5QjtRQVhTLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsa0JBQWEsR0FBRyxtQkFBbUIsQ0FBQztRQUNwQyxpQkFBWSxHQUFHLGtCQUFrQixDQUFDO1FBQ2xDLGFBQVEsR0FBRyxhQUFhLENBQUM7UUFFeEIsaUJBQVksR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUVuQyxZQUFPLEdBQU8sRUFBRSxDQUFDO0lBSTFCLENBQUM7SUFFRCxlQUFlO0lBRWYsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUM7WUFDakIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLGFBQWEsRUFBQyxJQUFJLENBQUMsYUFBYTtZQUNoQyxZQUFZLEVBQUMsSUFBSSxDQUFDLFlBQVk7WUFDOUIsUUFBUSxFQUFDLElBQUksQ0FBQyxRQUFRO1NBQ3ZCLENBQUM7SUFDSixDQUFDO0lBRUQsYUFBYSxDQUFDLElBQWM7UUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztDQUVGLENBQUE7QUFwQ1U7SUFBUixZQUFLLEVBQUU7O2lEQUFpQjtBQUNoQjtJQUFSLFlBQUssRUFBRTs7b0RBQXlCO0FBQ3hCO0lBQVIsWUFBSyxFQUFFOztrREFBZ0I7QUFFZjtJQUFSLFlBQUssRUFBRTs7MERBQXFDO0FBQ3BDO0lBQVIsWUFBSyxFQUFFOzt5REFBbUM7QUFDbEM7SUFBUixZQUFLLEVBQUU7O3FEQUEwQjtBQUV4QjtJQUFULGFBQU0sRUFBRTs7eURBQW1DO0FBRW5DO0lBQVIsWUFBSyxFQUFFOztvREFBa0I7QUFYZixtQkFBbUI7SUFsRC9CLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsYUFBYTtRQUN2QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQW9DWDtpQkFBVTs7Ozs7Ozs7Ozs7RUFXVDtLQUFFLENBQUM7O0dBQ1EsbUJBQW1CLENBcUMvQjtBQXJDWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyZWVNb2RlbCB9IGZyb20gJ21hcC13YWxkJztcblxuZGVjbGFyZSB2YXIgUGxvdGx5OiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpbXBsZS10cmVlJyxcbiAgdGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwidHJlZSYmdHJlZS52aXNpYmxlXCIgY2xhc3M9XCJzaW1wbGUtdHJlZVwiPlxuXG4gIDxkaXYgKm5nSWY9XCJpbm5lclwiPlxuICAgIDxsaSA+PHNpbXBsZS10cmVlLW5vZGUgW3RyZWVdPVwidHJlZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbb3B0aW9uc109XCJvcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChub2RlU2VsZWN0ZWQpPVwiY2hpbGRTZWxlY3RlZCgkZXZlbnQpXCI+PC9zaW1wbGUtdHJlZS1ub2RlPlxuICAgICAgPHVsICpuZ0lmPVwidHJlZS5jaGlsZHJlbiYmdHJlZS5leHBhbmRlZFwiIGNsYXNzPVwiaW5uZXItbGlzdFwiPlxuICAgICAgICA8c2ltcGxlLXRyZWUgKm5nRm9yPVwibGV0IHQgb2YgdHJlZS5jaGlsZHJlblwiIFt0cmVlXT1cInRcIiBbaW5uZXJdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIChub2RlU2VsZWN0ZWQpPVwiY2hpbGRTZWxlY3RlZCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgW29wdGlvbnNdPVwib3B0aW9uc1wiPjwvc2ltcGxlLXRyZWU+XG4gICAgICA8L3VsPlxuICAgIDwvbGk+XG4gIDwvZGl2PlxuXG4gIDxkaXYgKm5nSWY9XCIhaW5uZXImJnNob3dUb3BcIj5cbiAgICA8dWwgY2xhc3M9XCJvdXRlci1saXN0XCI+XG4gICAgICA8bGk+PHNpbXBsZS10cmVlLW5vZGUgW3RyZWVdPVwidHJlZVwiIFtvcHRpb25zXT1cIm9wdGlvbnNcIlxuICAgICAgICAobm9kZVNlbGVjdGVkKT1cImNoaWxkU2VsZWN0ZWQoJGV2ZW50KVwiPjwvc2ltcGxlLXRyZWUtbm9kZT5cbiAgICAgICAgPHVsICpuZ0lmPVwidHJlZS5jaGlsZHJlbiYmdHJlZS5leHBhbmRlZFwiIGNsYXNzPVwiaW5uZXItbGlzdFwiPlxuICAgICAgICAgICAgPHNpbXBsZS10cmVlICpuZ0Zvcj1cImxldCB0IG9mIHRyZWUuY2hpbGRyZW5cIiBbdHJlZV09XCJ0XCIgW2lubmVyXT1cInRydWVcIlxuICAgICAgICAgICAgKG5vZGVTZWxlY3RlZCk9XCJjaGlsZFNlbGVjdGVkKCRldmVudClcIlxuICAgICAgICAgICAgW29wdGlvbnNdPVwib3B0aW9uc1wiPjwvc2ltcGxlLXRyZWU+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gIDwvZGl2PlxuXG4gIDxkaXYgKm5nSWY9XCIhaW5uZXImJiFzaG93VG9wXCI+XG4gICAgICA8dWwgKm5nSWY9XCJ0cmVlLmNoaWxkcmVuJiZ0cmVlLmV4cGFuZGVkXCIgY2xhc3M9XCJvdXRlci1saXN0XCI+XG4gICAgICAgICAgPHNpbXBsZS10cmVlICpuZ0Zvcj1cImxldCB0IG9mIHRyZWUuY2hpbGRyZW5cIiBbdHJlZV09XCJ0XCIgW2lubmVyXT1cInRydWVcIlxuICAgICAgICAgIChub2RlU2VsZWN0ZWQpPVwiY2hpbGRTZWxlY3RlZCgkZXZlbnQpXCJcbiAgICAgICAgICBbb3B0aW9uc109XCJvcHRpb25zXCI+PC9zaW1wbGUtdHJlZT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG5cbjwvZGl2PlxuYCxzdHlsZXM6IFtgXG4uc2ltcGxlLXRyZWUgdWx7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZVxufVxuXG51bC5vdXRlci1saXN0e1xuICBwYWRkaW5nLWxlZnQ6NXB4O1xufVxuXG51bC5pbm5lci1saXN0e1xuICBwYWRkaW5nLWxlZnQ6MTVweDtcbn1gXX0pXG5leHBvcnQgY2xhc3MgU2ltcGxlVHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHRyZWU6IFRyZWVNb2RlbDtcbiAgQElucHV0KCkgc2hvd1RvcDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGlubmVyOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIGNvbGxhcHNlZEljb24gPSAnZmEgZmEtY2FyZXQtcmlnaHQnO1xuICBASW5wdXQoKSBleHBhbmRlZEljb24gPSAnZmEgZmEtY2FyZXQtZG93bic7XG4gIEBJbnB1dCgpIGxlYWZJY29uID0gJ2ZhIGZhLW1pbnVzJztcblxuICBAT3V0cHV0KCkgbm9kZVNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpIG9wdGlvbnM6YW55ID0ge307XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmKGNoYW5nZXMub3B0aW9ucyl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgY29sbGFwc2VkSWNvbjp0aGlzLmNvbGxhcHNlZEljb24sXG4gICAgICBleHBhbmRlZEljb246dGhpcy5leHBhbmRlZEljb24sXG4gICAgICBsZWFmSWNvbjp0aGlzLmxlYWZJY29uXG4gICAgfTtcbiAgfVxuXG4gIGNoaWxkU2VsZWN0ZWQobm9kZTpUcmVlTW9kZWwpe1xuICAgIHRoaXMubm9kZVNlbGVjdGVkLmVtaXQobm9kZSk7XG4gIH1cblxufVxuIl19