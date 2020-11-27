"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleTreeComponent = void 0;
const core_1 = require("@angular/core");
const i0 = require("@angular/core");
const i1 = require("@angular/common");
const i2 = require("../simple-tree-node/simple-tree-node.component");
function SimpleTreeComponent_div_0_div_1_ul_3_simple_tree_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "simple-tree", 7);
    i0.ɵɵlistener("nodeSelected", function SimpleTreeComponent_div_0_div_1_ul_3_simple_tree_1_Template_simple_tree_nodeSelected_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(4); return ctx_r7.childSelected($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r6 = ctx.$implicit;
    const ctx_r5 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("tree", t_r6)("inner", true)("options", ctx_r5.options);
} }
function SimpleTreeComponent_div_0_div_1_ul_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 5);
    i0.ɵɵtemplate(1, SimpleTreeComponent_div_0_div_1_ul_3_simple_tree_1_Template, 1, 3, "simple-tree", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r4.tree.children);
} }
function SimpleTreeComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "li");
    i0.ɵɵelementStart(2, "simple-tree-node", 3);
    i0.ɵɵlistener("nodeSelected", function SimpleTreeComponent_div_0_div_1_Template_simple_tree_node_nodeSelected_2_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.childSelected($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, SimpleTreeComponent_div_0_div_1_ul_3_Template, 2, 1, "ul", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("tree", ctx_r1.tree)("options", ctx_r1.options);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.tree.children && ctx_r1.tree.expanded);
} }
function SimpleTreeComponent_div_0_div_2_ul_4_simple_tree_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "simple-tree", 7);
    i0.ɵɵlistener("nodeSelected", function SimpleTreeComponent_div_0_div_2_ul_4_simple_tree_1_Template_simple_tree_nodeSelected_0_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(4); return ctx_r14.childSelected($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r13 = ctx.$implicit;
    const ctx_r12 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("tree", t_r13)("inner", true)("options", ctx_r12.options);
} }
function SimpleTreeComponent_div_0_div_2_ul_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 5);
    i0.ɵɵtemplate(1, SimpleTreeComponent_div_0_div_2_ul_4_simple_tree_1_Template, 1, 3, "simple-tree", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r11.tree.children);
} }
function SimpleTreeComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "ul", 8);
    i0.ɵɵelementStart(2, "li");
    i0.ɵɵelementStart(3, "simple-tree-node", 3);
    i0.ɵɵlistener("nodeSelected", function SimpleTreeComponent_div_0_div_2_Template_simple_tree_node_nodeSelected_3_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.childSelected($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, SimpleTreeComponent_div_0_div_2_ul_4_Template, 2, 1, "ul", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("tree", ctx_r2.tree)("options", ctx_r2.options);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.tree.children && ctx_r2.tree.expanded);
} }
function SimpleTreeComponent_div_0_div_3_ul_1_simple_tree_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "simple-tree", 7);
    i0.ɵɵlistener("nodeSelected", function SimpleTreeComponent_div_0_div_3_ul_1_simple_tree_1_Template_simple_tree_nodeSelected_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r21 = i0.ɵɵnextContext(4); return ctx_r21.childSelected($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r20 = ctx.$implicit;
    const ctx_r19 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("tree", t_r20)("inner", true)("options", ctx_r19.options);
} }
function SimpleTreeComponent_div_0_div_3_ul_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 8);
    i0.ɵɵtemplate(1, SimpleTreeComponent_div_0_div_3_ul_1_simple_tree_1_Template, 1, 3, "simple-tree", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r18.tree.children);
} }
function SimpleTreeComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, SimpleTreeComponent_div_0_div_3_ul_1_Template, 2, 1, "ul", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.tree.children && ctx_r3.tree.expanded);
} }
function SimpleTreeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, SimpleTreeComponent_div_0_div_1_Template, 4, 3, "div", 2);
    i0.ɵɵtemplate(2, SimpleTreeComponent_div_0_div_2_Template, 5, 3, "div", 2);
    i0.ɵɵtemplate(3, SimpleTreeComponent_div_0_div_3_Template, 2, 1, "div", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.inner);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.inner && ctx_r0.showTop);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.inner && !ctx_r0.showTop);
} }
class SimpleTreeComponent {
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
}
exports.SimpleTreeComponent = SimpleTreeComponent;
SimpleTreeComponent.ɵfac = function SimpleTreeComponent_Factory(t) { return new (t || SimpleTreeComponent)(); };
SimpleTreeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SimpleTreeComponent, selectors: [["simple-tree"]], inputs: { tree: "tree", showTop: "showTop", inner: "inner", collapsedIcon: "collapsedIcon", expandedIcon: "expandedIcon", leafIcon: "leafIcon", options: "options" }, outputs: { nodeSelected: "nodeSelected" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "simple-tree", 4, "ngIf"], [1, "simple-tree"], [4, "ngIf"], [3, "tree", "options", "nodeSelected"], ["class", "inner-list", 4, "ngIf"], [1, "inner-list"], [3, "tree", "inner", "options", "nodeSelected", 4, "ngFor", "ngForOf"], [3, "tree", "inner", "options", "nodeSelected"], [1, "outer-list"], ["class", "outer-list", 4, "ngIf"]], template: function SimpleTreeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, SimpleTreeComponent_div_0_Template, 4, 3, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.tree && ctx.tree.visible);
    } }, directives: [i1.NgIf, i2.SimpleTreeNodeComponent, i1.NgForOf, SimpleTreeComponent], styles: [".simple-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\n  list-style-type: none\n}\n\nul.outer-list[_ngcontent-%COMP%]{\n  padding-left:5px;\n}\n\nul.inner-list[_ngcontent-%COMP%]{\n  padding-left:15px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SimpleTreeComponent, [{
        type: core_1.Component,
        args: [{
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
`, styles: [`
.simple-tree ul{
  list-style-type: none
}

ul.outer-list{
  padding-left:5px;
}

ul.inner-list{
  padding-left:15px;
}`]
            }]
    }], function () { return []; }, { tree: [{
            type: core_1.Input
        }], showTop: [{
            type: core_1.Input
        }], inner: [{
            type: core_1.Input
        }], collapsedIcon: [{
            type: core_1.Input
        }], expandedIcon: [{
            type: core_1.Input
        }], leafIcon: [{
            type: core_1.Input
        }], nodeSelected: [{
            type: core_1.Output
        }], options: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLXRyZWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtdmlzdWFsLyIsInNvdXJjZXMiOlsic2ltcGxlLXRyZWUvc2ltcGxlLXRyZWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUF1STs7Ozs7O0lBYy9ILHNDQUVnQztJQURwQixtUEFBc0M7SUFDbEIsaUJBQWM7Ozs7SUFGRCwyQkFBVSxlQUFBLDJCQUFBOzs7SUFEekQsNkJBQ0U7SUFBQSxxR0FFOEM7SUFDaEQsaUJBQUs7OztJQUh3QixlQUFnQjtJQUFoQiw4Q0FBZ0I7Ozs7SUFMakQsMkJBQ0U7SUFBQSwwQkFBSztJQUFBLDJDQUV5RDtJQUF2QyxzT0FBc0M7SUFBQyxpQkFBbUI7SUFDL0UsOEVBSUs7SUFDUCxpQkFBSztJQUNQLGlCQUFNOzs7SUFUbUIsZUFBYTtJQUFiLGtDQUFhLDJCQUFBO0lBRzdCLGVBQWtDO0lBQWxDLG1FQUFrQzs7OztJQWFqQyxzQ0FFb0I7SUFEcEIsc1BBQXNDO0lBQ2xCLGlCQUFjOzs7O0lBRlcsNEJBQVUsZUFBQSw0QkFBQTs7O0lBRDNELDZCQUNJO0lBQUEscUdBRWtDO0lBQ3RDLGlCQUFLOzs7SUFIMEIsZUFBZ0I7SUFBaEIsK0NBQWdCOzs7O0lBTHJELDJCQUNFO0lBQUEsNkJBQ0U7SUFBQSwwQkFBSTtJQUFBLDJDQUNxQztJQUF2Qyx3T0FBc0M7SUFBQyxpQkFBbUI7SUFDMUQsOEVBSUs7SUFDUCxpQkFBSztJQUNQLGlCQUFLO0lBQ1AsaUJBQU07OztJQVRvQixlQUFhO0lBQWIsa0NBQWEsMkJBQUE7SUFFNUIsZUFBa0M7SUFBbEMsbUVBQWtDOzs7O0lBV3JDLHNDQUVvQjtJQURwQixzUEFBc0M7SUFDbEIsaUJBQWM7Ozs7SUFGVyw0QkFBVSxlQUFBLDRCQUFBOzs7SUFEM0QsNkJBQ0k7SUFBQSxxR0FFa0M7SUFDdEMsaUJBQUs7OztJQUgwQixlQUFnQjtJQUFoQiwrQ0FBZ0I7OztJQUZuRCwyQkFDSTtJQUFBLDhFQUlLO0lBQ1AsaUJBQU07OztJQUxDLGVBQWtDO0lBQWxDLG1FQUFrQzs7O0lBNUJoQyw4QkFFWDtJQUFBLDBFQVVNO0lBRU4sMEVBV007SUFFTiwwRUFNUTtJQUVWLGlCQUFNOzs7SUFqQ0UsZUFBVztJQUFYLG1DQUFXO0lBWVgsZUFBcUI7SUFBckIsc0RBQXFCO0lBYXJCLGVBQXNCO0lBQXRCLHVEQUFzQjs7QUE3QjlCLE1Ba0RhLG1CQUFtQjtJQWE5QjtRQVhTLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsa0JBQWEsR0FBRyxtQkFBbUIsQ0FBQztRQUNwQyxpQkFBWSxHQUFHLGtCQUFrQixDQUFDO1FBQ2xDLGFBQVEsR0FBRyxhQUFhLENBQUM7UUFFeEIsaUJBQVksR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUVuQyxZQUFPLEdBQU8sRUFBRSxDQUFDO0lBSTFCLENBQUM7SUFFRCxlQUFlO0lBRWYsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUM7WUFDakIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLGFBQWEsRUFBQyxJQUFJLENBQUMsYUFBYTtZQUNoQyxZQUFZLEVBQUMsSUFBSSxDQUFDLFlBQVk7WUFDOUIsUUFBUSxFQUFDLElBQUksQ0FBQyxRQUFRO1NBQ3ZCLENBQUM7SUFDSixDQUFDO0lBRUQsYUFBYSxDQUFDLElBQWM7UUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7QUFyRkgsa0RBdUZDO3NGQXJDWSxtQkFBbUI7d0RBQW5CLG1CQUFtQjtRQWhEbkIsb0VBbUNQOztRQW5DYSxtREFBd0I7dUVBZ0Q5QixtQkFBbUI7a0RBQW5CLG1CQUFtQjtjQWxEL0IsZ0JBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FvQ1gsRUFBQyxNQUFNLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7RUFXVCxDQUFDO2FBQUM7c0NBRU8sSUFBSTtrQkFBWixZQUFLO1lBQ0csT0FBTztrQkFBZixZQUFLO1lBQ0csS0FBSztrQkFBYixZQUFLO1lBRUcsYUFBYTtrQkFBckIsWUFBSztZQUNHLFlBQVk7a0JBQXBCLFlBQUs7WUFDRyxRQUFRO2tCQUFoQixZQUFLO1lBRUksWUFBWTtrQkFBckIsYUFBTTtZQUVFLE9BQU87a0JBQWYsWUFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJlZU1vZGVsIH0gZnJvbSAnbWFwLXdhbGQnO1xuXG5kZWNsYXJlIHZhciBQbG90bHk6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2ltcGxlLXRyZWUnLFxuICB0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCJ0cmVlJiZ0cmVlLnZpc2libGVcIiBjbGFzcz1cInNpbXBsZS10cmVlXCI+XG5cbiAgPGRpdiAqbmdJZj1cImlubmVyXCI+XG4gICAgPGxpID48c2ltcGxlLXRyZWUtbm9kZSBbdHJlZV09XCJ0cmVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtvcHRpb25zXT1cIm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKG5vZGVTZWxlY3RlZCk9XCJjaGlsZFNlbGVjdGVkKCRldmVudClcIj48L3NpbXBsZS10cmVlLW5vZGU+XG4gICAgICA8dWwgKm5nSWY9XCJ0cmVlLmNoaWxkcmVuJiZ0cmVlLmV4cGFuZGVkXCIgY2xhc3M9XCJpbm5lci1saXN0XCI+XG4gICAgICAgIDxzaW1wbGUtdHJlZSAqbmdGb3I9XCJsZXQgdCBvZiB0cmVlLmNoaWxkcmVuXCIgW3RyZWVdPVwidFwiIFtpbm5lcl09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgKG5vZGVTZWxlY3RlZCk9XCJjaGlsZFNlbGVjdGVkKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICBbb3B0aW9uc109XCJvcHRpb25zXCI+PC9zaW1wbGUtdHJlZT5cbiAgICAgIDwvdWw+XG4gICAgPC9saT5cbiAgPC9kaXY+XG5cbiAgPGRpdiAqbmdJZj1cIiFpbm5lciYmc2hvd1RvcFwiPlxuICAgIDx1bCBjbGFzcz1cIm91dGVyLWxpc3RcIj5cbiAgICAgIDxsaT48c2ltcGxlLXRyZWUtbm9kZSBbdHJlZV09XCJ0cmVlXCIgW29wdGlvbnNdPVwib3B0aW9uc1wiXG4gICAgICAgIChub2RlU2VsZWN0ZWQpPVwiY2hpbGRTZWxlY3RlZCgkZXZlbnQpXCI+PC9zaW1wbGUtdHJlZS1ub2RlPlxuICAgICAgICA8dWwgKm5nSWY9XCJ0cmVlLmNoaWxkcmVuJiZ0cmVlLmV4cGFuZGVkXCIgY2xhc3M9XCJpbm5lci1saXN0XCI+XG4gICAgICAgICAgICA8c2ltcGxlLXRyZWUgKm5nRm9yPVwibGV0IHQgb2YgdHJlZS5jaGlsZHJlblwiIFt0cmVlXT1cInRcIiBbaW5uZXJdPVwidHJ1ZVwiXG4gICAgICAgICAgICAobm9kZVNlbGVjdGVkKT1cImNoaWxkU2VsZWN0ZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICBbb3B0aW9uc109XCJvcHRpb25zXCI+PC9zaW1wbGUtdHJlZT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgPC9kaXY+XG5cbiAgPGRpdiAqbmdJZj1cIiFpbm5lciYmIXNob3dUb3BcIj5cbiAgICAgIDx1bCAqbmdJZj1cInRyZWUuY2hpbGRyZW4mJnRyZWUuZXhwYW5kZWRcIiBjbGFzcz1cIm91dGVyLWxpc3RcIj5cbiAgICAgICAgICA8c2ltcGxlLXRyZWUgKm5nRm9yPVwibGV0IHQgb2YgdHJlZS5jaGlsZHJlblwiIFt0cmVlXT1cInRcIiBbaW5uZXJdPVwidHJ1ZVwiXG4gICAgICAgICAgKG5vZGVTZWxlY3RlZCk9XCJjaGlsZFNlbGVjdGVkKCRldmVudClcIlxuICAgICAgICAgIFtvcHRpb25zXT1cIm9wdGlvbnNcIj48L3NpbXBsZS10cmVlPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cblxuPC9kaXY+XG5gLHN0eWxlczogW2Bcbi5zaW1wbGUtdHJlZSB1bHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lXG59XG5cbnVsLm91dGVyLWxpc3R7XG4gIHBhZGRpbmctbGVmdDo1cHg7XG59XG5cbnVsLmlubmVyLWxpc3R7XG4gIHBhZGRpbmctbGVmdDoxNXB4O1xufWBdfSlcbmV4cG9ydCBjbGFzcyBTaW1wbGVUcmVlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgdHJlZTogVHJlZU1vZGVsO1xuICBASW5wdXQoKSBzaG93VG9wOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgaW5uZXI6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgY29sbGFwc2VkSWNvbiA9ICdmYSBmYS1jYXJldC1yaWdodCc7XG4gIEBJbnB1dCgpIGV4cGFuZGVkSWNvbiA9ICdmYSBmYS1jYXJldC1kb3duJztcbiAgQElucHV0KCkgbGVhZkljb24gPSAnZmEgZmEtbWludXMnO1xuXG4gIEBPdXRwdXQoKSBub2RlU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCkgb3B0aW9uczphbnkgPSB7fTtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuXG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYoY2hhbmdlcy5vcHRpb25zKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICBjb2xsYXBzZWRJY29uOnRoaXMuY29sbGFwc2VkSWNvbixcbiAgICAgIGV4cGFuZGVkSWNvbjp0aGlzLmV4cGFuZGVkSWNvbixcbiAgICAgIGxlYWZJY29uOnRoaXMubGVhZkljb25cbiAgICB9O1xuICB9XG5cbiAgY2hpbGRTZWxlY3RlZChub2RlOlRyZWVNb2RlbCl7XG4gICAgdGhpcy5ub2RlU2VsZWN0ZWQuZW1pdChub2RlKTtcbiAgfVxuXG59XG4iXX0=