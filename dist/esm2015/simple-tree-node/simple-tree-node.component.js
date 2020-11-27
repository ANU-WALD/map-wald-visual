"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleTreeNodeComponent = void 0;
const core_1 = require("@angular/core");
const i0 = require("@angular/core");
const i1 = require("@angular/common");
const i2 = require("@ng-bootstrap/ng-bootstrap");
function SimpleTreeNodeComponent_span_6_i_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 6);
    i0.ɵɵlistener("click", function SimpleTreeNodeComponent_span_6_i_2_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r4); const a_r2 = ctx.$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return a_r2.action(ctx_r3.tree); });
    i0.ɵɵpipe(1, "async");
    i0.ɵɵtext(2, "\u00A0");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const a_r2 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("ngbTooltip", i0.ɵɵpipeBind1(1, 2, a_r2.tooltip));
    i0.ɵɵproperty("ngClass", a_r2.icon);
} }
function SimpleTreeNodeComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 4);
    i0.ɵɵtext(1, " \u00A0 ");
    i0.ɵɵtemplate(2, SimpleTreeNodeComponent_span_6_i_2_Template, 3, 4, "i", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.tree.actions);
} }
class SimpleTreeNodeComponent {
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
}
exports.SimpleTreeNodeComponent = SimpleTreeNodeComponent;
SimpleTreeNodeComponent.ɵfac = function SimpleTreeNodeComponent_Factory(t) { return new (t || SimpleTreeNodeComponent)(); };
SimpleTreeNodeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SimpleTreeNodeComponent, selectors: [["simple-tree-node"]], inputs: { tree: "tree", options: "options" }, outputs: { nodeSelected: "nodeSelected" }, features: [i0.ɵɵNgOnChangesFeature], decls: 7, vars: 7, consts: [["href", "#", 3, "ngClass", "click"], [3, "ngClass"], ["placement", "right", "container", "body", 3, "ngbTooltip"], ["class", "float-right", 4, "ngIf"], [1, "float-right"], ["placement", "right", "container", "body", 3, "ngClass", "ngbTooltip", "click", 4, "ngFor", "ngForOf"], ["placement", "right", "container", "body", 3, "ngClass", "ngbTooltip", "click"]], template: function SimpleTreeNodeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "a", 0);
        i0.ɵɵlistener("click", function SimpleTreeNodeComponent_Template_a_click_0_listener($event) { return ctx.treeClick($event); });
        i0.ɵɵelement(1, "i", 1);
        i0.ɵɵtext(2, " \u00A0 ");
        i0.ɵɵelementStart(3, "span", 2);
        i0.ɵɵpipe(4, "async");
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, SimpleTreeNodeComponent_span_6_Template, 3, 1, "span", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.tree.klass);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.icon);
        i0.ɵɵadvance(2);
        i0.ɵɵpropertyInterpolate("ngbTooltip", i0.ɵɵpipeBind1(4, 5, ctx.tree.tooltip));
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.tree.label);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.tree.actions);
    } }, directives: [i1.NgClass, i2.NgbTooltip, i1.NgIf, i1.NgForOf], pipes: [i1.AsyncPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SimpleTreeNodeComponent, [{
        type: core_1.Component,
        args: [{
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
`, styles: []
            }]
    }], null, { tree: [{
            type: core_1.Input
        }], options: [{
            type: core_1.Input
        }], nodeSelected: [{
            type: core_1.Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLXRyZWUtbm9kZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJzaW1wbGUtdHJlZS1ub2RlL3NpbXBsZS10cmVlLW5vZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUN3RTs7Ozs7O0lBaUJsRSw0QkFLMEI7SUFBekIsaU1BQVMsd0JBQWMsSUFBQzs7SUFBQyxzQkFBTTtJQUFBLGlCQUFJOzs7SUFIbkMsMEVBQWtDO0lBRGxDLG1DQUFrQjs7O0lBSnZCLCtCQUVJO0lBQUEsd0JBQ0E7SUFBQSwyRUFLb0M7SUFDeEMsaUJBQU87OztJQU5jLGVBQWU7SUFBZiw2Q0FBZTs7QUFadEMsTUFxQmEsdUJBQXVCO0lBckJwQztRQThCVyxZQUFPLEdBQU8sRUFBRSxDQUFDO1FBQ2hCLGlCQUFZLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7S0EyQzdDO0lBcERDLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELGVBQWU7SUFDZixDQUFDO0lBV0QsU0FBUyxDQUFDLEtBQVU7UUFDbEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWpCLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFDO1lBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7SUFFTyxTQUFTO1FBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSTtZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSTtZQUN4QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztTQUN2QzthQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1NBQ3hDO2FBQ0k7WUFDSCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1NBQ25DO0lBQ0gsQ0FBQzs7QUF6RUgsMERBMEVDOzhGQXJEWSx1QkFBdUI7NERBQXZCLHVCQUF1QjtRQW5CdkIsNEJBRTBCO1FBRHZCLHFHQUFTLHFCQUFpQixJQUFDO1FBQ0osdUJBQXdCO1FBQzdELHdCQUNBO1FBQUEsK0JBRXVCOztRQUFBLFlBQWM7UUFBQSxpQkFBTztRQUM1QywwRUFTTztRQUNULGlCQUFJOztRQWZZLHdDQUFzQjtRQUFJLGVBQWdCO1FBQWhCLGtDQUFnQjtRQUVsRCxlQUFxQztRQUFyQyw4RUFBcUM7UUFFcEIsZUFBYztRQUFkLG9DQUFjO1FBQzlCLGVBQWtCO1FBQWxCLHVDQUFrQjs7a0RBWWQsdUJBQXVCO2NBckJuQyxnQkFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBa0JYLEVBQUMsTUFBTSxFQUFFLEVBQUU7YUFBQztnQkFTRixJQUFJO2tCQUFaLFlBQUs7WUFDRyxPQUFPO2tCQUFmLFlBQUs7WUFDSSxZQUFZO2tCQUFyQixhQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsIE91dHB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmVlTW9kZWwgfSBmcm9tICdtYXAtd2FsZCc7XG5cbmRlY2xhcmUgdmFyIFBsb3RseTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaW1wbGUtdHJlZS1ub2RlJyxcbiAgdGVtcGxhdGU6IGA8YSBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInRyZWVDbGljaygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ0cmVlLmtsYXNzXCI+PGkgW25nQ2xhc3NdPVwiaWNvblwiPjwvaT5cbiAgJm5ic3A7XG4gIDxzcGFuIG5nYlRvb2x0aXA9XCJ7e3RyZWUudG9vbHRpcCB8IGFzeW5jfX1cIlxuICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgIGNvbnRhaW5lcj1cImJvZHlcIj57e3RyZWUubGFiZWx9fTwvc3Bhbj5cbiAgPHNwYW4gKm5nSWY9XCJ0cmVlLmFjdGlvbnNcIlxuICAgICAgICBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+XG4gICAgICAmbmJzcDtcbiAgICAgIDxpICpuZ0Zvcj1cImxldCBhIG9mIHRyZWUuYWN0aW9uc1wiXG4gICAgICAgW25nQ2xhc3NdPVwiYS5pY29uXCJcbiAgICAgICBuZ2JUb29sdGlwPVwie3thLnRvb2x0aXAgfCBhc3luY319XCJcbiAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgY29udGFpbmVyPVwiYm9keVwiXG4gICAgICAgKGNsaWNrKT1cImEuYWN0aW9uKHRyZWUpXCI+Jm5ic3A7PC9pPlxuICA8L3NwYW4+XG48L2E+XG5gLHN0eWxlczogW119KVxuZXhwb3J0IGNsYXNzIFNpbXBsZVRyZWVOb2RlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2Vze1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5ldmFsU3RhdGUoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIEBJbnB1dCgpIHRyZWU6IFRyZWVNb2RlbDtcbiAgQElucHV0KCkgb3B0aW9uczphbnkgPSB7fTtcbiAgQE91dHB1dCgpIG5vZGVTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBleHBhbmRlZDogYm9vbGVhbjtcbiAgbGVhZjogYm9vbGVhbjtcbiAgY29sbGFwc2VkOiBib29sZWFuO1xuICBpY29uOiBzdHJpbmc7XG5cbiAgdHJlZUNsaWNrKGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy50cmVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudHJlZS5leHBhbmRlZCA9ICF0aGlzLnRyZWUuZXhwYW5kZWQ7XG4gICAgdGhpcy5ldmFsU3RhdGUoKTtcblxuICAgIGlmKHRoaXMudHJlZS5hY3Rpb25zJiZ0aGlzLnRyZWUuYWN0aW9ucy5sZW5ndGgpe1xuICAgICAgdGhpcy50cmVlLmFjdGlvbnNbMF0uYWN0aW9uKHRoaXMudHJlZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubm9kZVNlbGVjdGVkLmVtaXQodGhpcy50cmVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGV2YWxTdGF0ZSgpIHtcbiAgICB0aGlzLmV4cGFuZGVkID0gdGhpcy50cmVlICYmXG4gICAgICB0aGlzLnRyZWUuZXhwYW5kZWQgJiZcbiAgICAgIHRoaXMudHJlZS5jaGlsZHJlbiAmJlxuICAgICAgdGhpcy50cmVlLmNoaWxkcmVuLmxlbmd0aCA+IDA7XG4gICAgdGhpcy5sZWFmID0gdGhpcy50cmVlICYmICghdGhpcy50cmVlLmNoaWxkcmVuIHx8IHRoaXMudHJlZS5jaGlsZHJlbi5sZW5ndGggPT09IDApO1xuICAgIHRoaXMuY29sbGFwc2VkID0gdGhpcy50cmVlICYmXG4gICAgICAhdGhpcy50cmVlLmV4cGFuZGVkICYmXG4gICAgICB0aGlzLnRyZWUuY2hpbGRyZW4gJiZcbiAgICAgIHRoaXMudHJlZS5jaGlsZHJlbi5sZW5ndGggPiAwO1xuICAgIGlmICh0aGlzLmV4cGFuZGVkKSB7XG4gICAgICB0aGlzLmljb24gPSB0aGlzLm9wdGlvbnMuZXhwYW5kZWRJY29uO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmNvbGxhcHNlZCkge1xuICAgICAgdGhpcy5pY29uID0gdGhpcy5vcHRpb25zLmNvbGxhcHNlZEljb247XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pY29uID0gdGhpcy5vcHRpb25zLmxlYWZJY29uO1xuICAgIH1cbiAgfVxufVxuIl19