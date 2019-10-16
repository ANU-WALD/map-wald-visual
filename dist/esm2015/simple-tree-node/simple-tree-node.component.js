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
let SimpleTreeNodeComponent = class SimpleTreeNodeComponent {
    constructor() {
        this.options = {};
        this.nodeSelected = new core_1.EventEmitter();
    }
    ngOnChanges(changes) {
        this.evalState();
    }
    ngAfterViewInit() {
    }
    treeClick(event) {
        event.stopPropagation();
        event.preventDefault();
        if (!this.tree) {
            return;
        }
        this.tree.expanded = !this.tree.expanded;
        this.evalState();
        if (this.tree.actions && this.tree.actions.length) {
            this.tree.actions[0].action(this.tree);
        }
        else {
            this.nodeSelected.emit(this.tree);
        }
    }
    evalState() {
        this.expanded = this.tree &&
            this.tree.expanded &&
            this.tree.children &&
            this.tree.children.length > 0;
        this.leaf = this.tree && (!this.tree.children || this.tree.children.length === 0);
        this.collapsed = this.tree &&
            !this.tree.expanded &&
            this.tree.children &&
            this.tree.children.length > 0;
        if (this.expanded) {
            this.icon = this.options.expandedIcon;
        }
        else if (this.collapsed) {
            this.icon = this.options.collapsedIcon;
        }
        else {
            this.icon = this.options.leafIcon;
        }
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SimpleTreeNodeComponent.prototype, "tree", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SimpleTreeNodeComponent.prototype, "options", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SimpleTreeNodeComponent.prototype, "nodeSelected", void 0);
SimpleTreeNodeComponent = __decorate([
    core_1.Component({
        selector: 'simple-tree-node',
        template: `<a href="#"
                (click)="treeClick($event)"
                [ngClass]="tree.klass"><i [ngClass]="icon"></i>
  &nbsp;
  <span ngbTooltip="{{tree.tooltip | async}}"
        placement="right"
        container="body">{{tree.label}}</span>
  <span *ngIf="tree.actions"
        class="float-right">
      &nbsp;
      <i *ngFor="let a of tree.actions"
       [ngClass]="a.icon"
       ngbTooltip="{{a.tooltip | async}}"
       placement="right"
       container="body"
       (click)="a.action(tree)">&nbsp;</i>
  </span>
</a>
`
    })
], SimpleTreeNodeComponent);
exports.SimpleTreeNodeComponent = SimpleTreeNodeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLXRyZWUtbm9kZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJzaW1wbGUtdHJlZS1ub2RlL3NpbXBsZS10cmVlLW5vZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQ3dFO0FBMEJ4RSxJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtJQXJCcEM7UUE4QlcsWUFBTyxHQUFPLEVBQUUsQ0FBQztRQUNoQixpQkFBWSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO0lBMkM5QyxDQUFDO0lBcERDLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELGVBQWU7SUFDZixDQUFDO0lBV0QsU0FBUyxDQUFDLEtBQVU7UUFDbEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWpCLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFDO1lBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7SUFFTyxTQUFTO1FBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSTtZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSTtZQUN4QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztTQUN2QzthQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1NBQ3hDO2FBQ0k7WUFDSCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1NBQ25DO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUE3Q1U7SUFBUixZQUFLLEVBQUU7O3FEQUFpQjtBQUNoQjtJQUFSLFlBQUssRUFBRTs7d0RBQWtCO0FBQ2hCO0lBQVQsYUFBTSxFQUFFOzs2REFBbUM7QUFWakMsdUJBQXVCO0lBckJuQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWtCWDtLQUFZLENBQUM7R0FDRCx1QkFBdUIsQ0FxRG5DO0FBckRZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJlZU1vZGVsIH0gZnJvbSAnbWFwLXdhbGQnO1xuXG5kZWNsYXJlIHZhciBQbG90bHk6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2ltcGxlLXRyZWUtbm9kZScsXG4gIHRlbXBsYXRlOiBgPGEgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJ0cmVlQ2xpY2soJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwidHJlZS5rbGFzc1wiPjxpIFtuZ0NsYXNzXT1cImljb25cIj48L2k+XG4gICZuYnNwO1xuICA8c3BhbiBuZ2JUb29sdGlwPVwie3t0cmVlLnRvb2x0aXAgfCBhc3luY319XCJcbiAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxuICAgICAgICBjb250YWluZXI9XCJib2R5XCI+e3t0cmVlLmxhYmVsfX08L3NwYW4+XG4gIDxzcGFuICpuZ0lmPVwidHJlZS5hY3Rpb25zXCJcbiAgICAgICAgY2xhc3M9XCJmbG9hdC1yaWdodFwiPlxuICAgICAgJm5ic3A7XG4gICAgICA8aSAqbmdGb3I9XCJsZXQgYSBvZiB0cmVlLmFjdGlvbnNcIlxuICAgICAgIFtuZ0NsYXNzXT1cImEuaWNvblwiXG4gICAgICAgbmdiVG9vbHRpcD1cInt7YS50b29sdGlwIHwgYXN5bmN9fVwiXG4gICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxuICAgICAgIGNvbnRhaW5lcj1cImJvZHlcIlxuICAgICAgIChjbGljayk9XCJhLmFjdGlvbih0cmVlKVwiPiZuYnNwOzwvaT5cbiAgPC9zcGFuPlxuPC9hPlxuYCxzdHlsZXM6IFtdfSlcbmV4cG9ydCBjbGFzcyBTaW1wbGVUcmVlTm9kZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlc3tcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuZXZhbFN0YXRlKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gIH1cblxuICBASW5wdXQoKSB0cmVlOiBUcmVlTW9kZWw7XG4gIEBJbnB1dCgpIG9wdGlvbnM6YW55ID0ge307XG4gIEBPdXRwdXQoKSBub2RlU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZXhwYW5kZWQ6IGJvb2xlYW47XG4gIGxlYWY6IGJvb2xlYW47XG4gIGNvbGxhcHNlZDogYm9vbGVhbjtcbiAgaWNvbjogc3RyaW5nO1xuXG4gIHRyZWVDbGljayhldmVudDogYW55KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXRoaXMudHJlZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRyZWUuZXhwYW5kZWQgPSAhdGhpcy50cmVlLmV4cGFuZGVkO1xuICAgIHRoaXMuZXZhbFN0YXRlKCk7XG5cbiAgICBpZih0aGlzLnRyZWUuYWN0aW9ucyYmdGhpcy50cmVlLmFjdGlvbnMubGVuZ3RoKXtcbiAgICAgIHRoaXMudHJlZS5hY3Rpb25zWzBdLmFjdGlvbih0aGlzLnRyZWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5vZGVTZWxlY3RlZC5lbWl0KHRoaXMudHJlZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBldmFsU3RhdGUoKSB7XG4gICAgdGhpcy5leHBhbmRlZCA9IHRoaXMudHJlZSAmJlxuICAgICAgdGhpcy50cmVlLmV4cGFuZGVkICYmXG4gICAgICB0aGlzLnRyZWUuY2hpbGRyZW4gJiZcbiAgICAgIHRoaXMudHJlZS5jaGlsZHJlbi5sZW5ndGggPiAwO1xuICAgIHRoaXMubGVhZiA9IHRoaXMudHJlZSAmJiAoIXRoaXMudHJlZS5jaGlsZHJlbiB8fCB0aGlzLnRyZWUuY2hpbGRyZW4ubGVuZ3RoID09PSAwKTtcbiAgICB0aGlzLmNvbGxhcHNlZCA9IHRoaXMudHJlZSAmJlxuICAgICAgIXRoaXMudHJlZS5leHBhbmRlZCAmJlxuICAgICAgdGhpcy50cmVlLmNoaWxkcmVuICYmXG4gICAgICB0aGlzLnRyZWUuY2hpbGRyZW4ubGVuZ3RoID4gMDtcbiAgICBpZiAodGhpcy5leHBhbmRlZCkge1xuICAgICAgdGhpcy5pY29uID0gdGhpcy5vcHRpb25zLmV4cGFuZGVkSWNvbjtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5jb2xsYXBzZWQpIHtcbiAgICAgIHRoaXMuaWNvbiA9IHRoaXMub3B0aW9ucy5jb2xsYXBzZWRJY29uO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaWNvbiA9IHRoaXMub3B0aW9ucy5sZWFmSWNvbjtcbiAgICB9XG4gIH1cbn1cbiJdfQ==