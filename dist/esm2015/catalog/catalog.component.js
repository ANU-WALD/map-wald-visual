"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogComponent = void 0;
const core_1 = require("@angular/core");
const map_wald_1 = require("map-wald");
const operators_1 = require("rxjs/operators");
const rxjs_1 = require("rxjs");
const i0 = require("@angular/core");
const i1 = require("map-wald");
const i2 = require("@angular/common");
const i3 = require("@angular/forms");
const i4 = require("../simple-tree/simple-tree.component");
function CatalogComponent_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 8);
} }
function CatalogComponent_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 9);
} }
class CatalogComponent {
    constructor(filterService, metadata) {
        this.metadata = metadata;
        this.showPlaceholders = true;
        this.defaultAction = 'add';
        this.layerActions = [];
        this.layerSelected = new core_1.EventEmitter();
        this.collapsedIcon = 'fa fa-caret-right';
        this.expandedIcon = 'fa fa-caret-down';
        this.leafIcon = 'fa fa-minus';
        this.layers = [];
        this.tree = { label: 'no catalog loaded' };
        this.filterText = '';
        this.filterService = filterService;
    }
    ngAfterViewInit() {
        if (this.catalog) {
            this.buildTree();
        }
    }
    ngOnChanges(changes) {
        if (changes.catalog && this.catalog) {
            this.filterText = '';
            this.buildTree();
            this.highlightLayers([], this.tree);
        }
    }
    buildTree() {
        let self = this;
        this.layers = [];
        var cat = this.catalog;
        var tree = {
            label: cat.name,
            expanded: true,
            visible: true,
        };
        var deferredLayers = cat.themes.map(t => t.layers.filter(l => l.path && !l.skip)).reduce((l, r) => l.concat(r), []);
        var deferredThemes = cat.themes.filter(t => t.path && !t.skip);
        const treeActions = this.layerActions.map(la => {
            return {
                icon: la.icon,
                tooltip: la.tooltip,
                action: (node) => this.layerClick(node.data, la.action)
            };
        });
        const layerToTree = (l) => {
            let result = {
                label: l.name,
                data: l,
                visible: true,
                actions: treeActions
            };
            const tmp = new map_wald_1.MappedLayer();
            tmp.layer = l;
            tmp.update();
            if (l.description) {
                result.tooltip = rxjs_1.of(l.description);
            }
            else {
                result.tooltip = this.metadata.getMetadata(tmp).pipe(operators_1.map(meta => meta[l.descriptionField || 'long_name']));
            }
            return result;
        };
        function themeToTree(t) {
            return {
                label: t.name,
                expanded: false,
                visible: true,
                children: t.layers.filter(l => !l.path && !l.skip)
                    .filter(l => self.showPlaceholders || !l.placeholder)
                    .map(layerToTree)
            };
        }
        tree.children = cat.themes.filter(t => !t.path && !t.skip).map(themeToTree);
        function findParent(path) {
            var components = path.split('/');
            var parent = tree;
            var index = -1;
            for (var component of components) {
                var split = component.split('@');
                component = split[0];
                index = -1;
                if (split.length > 1) {
                    index = +split[1];
                }
                var found = false;
                for (var n of parent.children) {
                    if (n.label === component) {
                        parent = n;
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    var newNode = {
                        label: component,
                        expanded: false,
                        visible: true,
                        children: []
                    };
                    addChild(parent, newNode, index);
                    parent = newNode;
                }
            }
            return [parent, index];
        }
        function addChild(parent, child, i) {
            if (i < 0) {
                parent.children.push(child);
            }
            else {
                parent.children.splice(i, 0, child);
            }
        }
        deferredThemes.forEach(t => {
            var [parent, index] = findParent(t.path);
            addChild(parent, themeToTree(t), index);
        });
        deferredLayers.forEach(l => {
            var [parent, index] = findParent(l.path);
            addChild(parent, layerToTree(l), index);
        });
        this.tree = tree;
    }
    layerClick(l, action) {
        var selection = {
            layer: l,
            action: action
        };
        this.layerSelected.emit(selection);
    }
    nodeSelected(e) {
        if (!e.data) {
            return;
        }
        var layer = e.data;
        this.layerClick(layer, this.defaultAction);
    }
    activeLayers(layers) {
        this.highlightLayers(layers, this.tree);
    }
    highlightLayers(layers, tree) {
        tree.klass = null;
        if (tree.data && (layers.indexOf(tree.data) >= 0)) {
            tree.klass = 'active-layer';
            return true;
        }
        if (tree.children) {
            let activeChild = false;
            for (let i = 0; i < tree.children.length; i++) {
                activeChild = this.highlightLayers(layers, tree.children[i]) || activeChild;
            }
            if (activeChild) {
                tree.klass = 'active-child';
            }
            tree.klass = (tree.klass || '') + ' theme';
            return activeChild;
        }
        return false;
    }
}
exports.CatalogComponent = CatalogComponent;
CatalogComponent.ɵfac = function CatalogComponent_Factory(t) { return new (t || CatalogComponent)(i0.ɵɵdirectiveInject(i1.TreeFilterService), i0.ɵɵdirectiveInject(i1.MetadataService)); };
CatalogComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CatalogComponent, selectors: [["catalog"]], inputs: { catalog: "catalog", showPlaceholders: "showPlaceholders", defaultAction: "defaultAction", layerActions: "layerActions", collapsedIcon: "collapsedIcon", expandedIcon: "expandedIcon", leafIcon: "leafIcon" }, outputs: { layerSelected: "layerSelected" }, features: [i0.ɵɵNgOnChangesFeature], decls: 8, vars: 9, consts: [[1, "input-group"], [1, "input-group-btn"], ["type", "button", 1, "btn", 3, "disabled", "click"], ["class", "fa fa-times", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-search", "aria-hidden", "true", 4, "ngIf"], ["type", "text", "placeholder", "Catalog search...", 1, "form-control", 3, "ngModel", "ngModelChange"], ["filterInput", ""], [3, "tree", "showTop", "leafIcon", "collapsedIcon", "expandedIcon", "nodeSelected"], ["aria-hidden", "true", 1, "fa", "fa-times"], ["aria-hidden", "true", 1, "fa", "fa-search"]], template: function CatalogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "span", 1);
        i0.ɵɵelementStart(2, "button", 2);
        i0.ɵɵlistener("click", function CatalogComponent_Template_button_click_2_listener() { return ctx.filterText = ""; });
        i0.ɵɵtemplate(3, CatalogComponent_i_3_Template, 1, 0, "i", 3);
        i0.ɵɵtemplate(4, CatalogComponent_i_4_Template, 1, 0, "i", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "input", 5, 6);
        i0.ɵɵlistener("ngModelChange", function CatalogComponent_Template_input_ngModelChange_5_listener($event) { return ctx.filterText = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "simple-tree", 7);
        i0.ɵɵlistener("nodeSelected", function CatalogComponent_Template_simple_tree_nodeSelected_7_listener($event) { return ctx.nodeSelected($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", !ctx.filterText);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.filterText);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.filterText);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.filterText);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("tree", ctx.filterService.filterTree(ctx.tree, ctx.filterText))("showTop", false)("leafIcon", ctx.leafIcon)("collapsedIcon", ctx.collapsedIcon)("expandedIcon", ctx.expandedIcon);
    } }, directives: [i2.NgIf, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.SimpleTreeComponent], styles: [".node-name[_ngcontent-%COMP%]{\n  font-size:1em;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CatalogComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'catalog',
                template: `<div class="input-group">
  <span class="input-group-btn">
            <button class="btn" type="button" [disabled]="!filterText"
              (click)="filterText = ''">
            <i *ngIf="filterText"class="fa fa-times" aria-hidden="true"></i>
            <i *ngIf="!filterText"class="fa fa-search" aria-hidden="true"></i>
            </button>
  </span>
  <input #filterInput type="text" class="form-control" placeholder="Catalog search..."
  [(ngModel)]="filterText"/>
</div>

<simple-tree
  [tree]="this.filterService.filterTree(tree, filterText)"
  [showTop]="false"
  [leafIcon]="leafIcon"
  [collapsedIcon]="collapsedIcon"
  [expandedIcon]="expandedIcon"
  (nodeSelected)="nodeSelected($event)">
</simple-tree>
`, styles: [`
.node-name{
  font-size:1em;
}
`],
            }]
    }], function () { return [{ type: i1.TreeFilterService }, { type: i1.MetadataService }]; }, { catalog: [{
            type: core_1.Input
        }], showPlaceholders: [{
            type: core_1.Input
        }], defaultAction: [{
            type: core_1.Input
        }], layerActions: [{
            type: core_1.Input
        }], layerSelected: [{
            type: core_1.Output
        }], collapsedIcon: [{
            type: core_1.Input
        }], expandedIcon: [{
            type: core_1.Input
        }], leafIcon: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0YWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJjYXRhbG9nL2NhdGFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUd1QjtBQUN2Qix1Q0FDb0U7QUFDcEUsOENBQXFDO0FBQ3JDLCtCQUEwQjs7Ozs7OztJQWdCZCx1QkFBZ0U7OztJQUNoRSx1QkFBa0U7O0FBUDlFLE1BMkJhLGdCQUFnQjtJQWdCM0IsWUFBWSxhQUFnQyxFQUFVLFFBQXdCO1FBQXhCLGFBQVEsR0FBUixRQUFRLENBQWdCO1FBZHJFLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixpQkFBWSxHQUF3QixFQUFFLENBQUM7UUFDdEMsa0JBQWEsR0FBaUMsSUFBSSxtQkFBWSxFQUFrQixDQUFDO1FBQ2xGLGtCQUFhLEdBQUcsbUJBQW1CLENBQUM7UUFDcEMsaUJBQVksR0FBRyxrQkFBa0IsQ0FBQztRQUNsQyxhQUFRLEdBQUcsYUFBYSxDQUFDO1FBRWxDLFdBQU0sR0FBaUIsRUFBRSxDQUFDO1FBQzFCLFNBQUksR0FBYyxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxDQUFDO1FBQ2pELGVBQVUsR0FBRyxFQUFFLENBQUM7UUFLZCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUNyQyxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEI7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixJQUFJ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O2tCQUFwQixZQUFLO1lBQ0csUUFBUTtrQkFBaEIsWUFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZixcbiAgT25DaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhdGFsb2csICBMYXllciwgVGhlbWUsIExheWVyU2VsZWN0aW9uLCBUcmVlTW9kZWwsXG4gIFRyZWVGaWx0ZXJTZXJ2aWNlLCBNZXRhZGF0YVNlcnZpY2UsIE1hcHBlZExheWVyIH0gZnJvbSAnbWFwLXdhbGQnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcblxuZGVjbGFyZSB2YXIgUGxvdGx5OiBhbnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2F0YWxvZ05vZGVBY3Rpb24ge1xuICBhY3Rpb246c3RyaW5nO1xuICBpY29uOnN0cmluZztcbiAgdG9vbHRpcDpzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NhdGFsb2cnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWJ0blwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiIHR5cGU9XCJidXR0b25cIiBbZGlzYWJsZWRdPVwiIWZpbHRlclRleHRcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwiZmlsdGVyVGV4dCA9ICcnXCI+XG4gICAgICAgICAgICA8aSAqbmdJZj1cImZpbHRlclRleHRcImNsYXNzPVwiZmEgZmEtdGltZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICA8aSAqbmdJZj1cIiFmaWx0ZXJUZXh0XCJjbGFzcz1cImZhIGZhLXNlYXJjaFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICA8L3NwYW4+XG4gIDxpbnB1dCAjZmlsdGVySW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiQ2F0YWxvZyBzZWFyY2guLi5cIlxuICBbKG5nTW9kZWwpXT1cImZpbHRlclRleHRcIi8+XG48L2Rpdj5cblxuPHNpbXBsZS10cmVlXG4gIFt0cmVlXT1cInRoaXMuZmlsdGVyU2VydmljZS5maWx0ZXJUcmVlKHRyZWUsIGZpbHRlclRleHQpXCJcbiAgW3Nob3dUb3BdPVwiZmFsc2VcIlxuICBbbGVhZkljb25dPVwibGVhZkljb25cIlxuICBbY29sbGFwc2VkSWNvbl09XCJjb2xsYXBzZWRJY29uXCJcbiAgW2V4cGFuZGVkSWNvbl09XCJleHBhbmRlZEljb25cIlxuICAobm9kZVNlbGVjdGVkKT1cIm5vZGVTZWxlY3RlZCgkZXZlbnQpXCI+XG48L3NpbXBsZS10cmVlPlxuYCxzdHlsZXM6IFtgXG4ubm9kZS1uYW1le1xuICBmb250LXNpemU6MWVtO1xufVxuYF0sfSlcbmV4cG9ydCBjbGFzcyBDYXRhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgY2F0YWxvZzogQ2F0YWxvZztcbiAgQElucHV0KCkgc2hvd1BsYWNlaG9sZGVycyA9IHRydWU7XG4gIEBJbnB1dCgpIGRlZmF1bHRBY3Rpb24gPSAnYWRkJztcbiAgQElucHV0KCkgbGF5ZXJBY3Rpb25zOiBDYXRhbG9nTm9kZUFjdGlvbltdID0gW107XG4gIEBPdXRwdXQoKSBsYXllclNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8TGF5ZXJTZWxlY3Rpb24+ID0gbmV3IEV2ZW50RW1pdHRlcjxMYXllclNlbGVjdGlvbj4oKTtcbiAgQElucHV0KCkgY29sbGFwc2VkSWNvbiA9ICdmYSBmYS1jYXJldC1yaWdodCc7XG4gIEBJbnB1dCgpIGV4cGFuZGVkSWNvbiA9ICdmYSBmYS1jYXJldC1kb3duJztcbiAgQElucHV0KCkgbGVhZkljb24gPSAnZmEgZmEtbWludXMnO1xuXG4gIGxheWVyczogQXJyYXk8TGF5ZXI+ID0gW107XG4gIHRyZWU6IFRyZWVNb2RlbCA9IHsgbGFiZWw6ICdubyBjYXRhbG9nIGxvYWRlZCcgfTtcbiAgZmlsdGVyVGV4dCA9ICcnO1xuXG4gIGZpbHRlclNlcnZpY2U6IFRyZWVGaWx0ZXJTZXJ2aWNlO1xuXG4gIGNvbnN0cnVjdG9yKGZpbHRlclNlcnZpY2U6IFRyZWVGaWx0ZXJTZXJ2aWNlLCBwcml2YXRlIG1ldGFkYXRhOk1ldGFkYXRhU2VydmljZSkge1xuICAgIHRoaXMuZmlsdGVyU2VydmljZSA9IGZpbHRlclNlcnZpY2U7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuY2F0YWxvZykge1xuICAgICAgdGhpcy5idWlsZFRyZWUoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuY2F0YWxvZyAmJiB0aGlzLmNhdGFsb2cpIHtcbiAgICAgIHRoaXMuZmlsdGVyVGV4dCA9ICcnO1xuICAgICAgdGhpcy5idWlsZFRyZWUoKTtcbiAgICAgIHRoaXMuaGlnaGxpZ2h0TGF5ZXJzKFtdLHRoaXMudHJlZSk7XG4gICAgfVxuICB9XG5cbiAgYnVpbGRUcmVlKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICB0aGlzLmxheWVycyA9IFtdO1xuICAgIHZhciBjYXQgPSB0aGlzLmNhdGFsb2c7XG4gICAgdmFyIHRyZWU6IFRyZWVNb2RlbCA9IHtcbiAgICAgIGxhYmVsOiBjYXQubmFtZSxcbiAgICAgIGV4cGFuZGVkOiB0cnVlLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIC8vIHNldHRpbmdzOntcbiAgICAgIC8vICAgc3RhdGljOnRydWUsXG4gICAgICAvLyAgIGxlZnRNZW51OmZhbHNlXG4gICAgICAvLyB9XG4gICAgfVxuXG4gICAgdmFyIGRlZmVycmVkTGF5ZXJzID0gY2F0LnRoZW1lcy5tYXAodCA9PiB0LmxheWVycy5maWx0ZXIobCA9PiBsLnBhdGgmJiFsLnNraXApKS5yZWR1Y2UoKGwsIHIpID0+IGwuY29uY2F0KHIpLCBbXSk7XG4gICAgdmFyIGRlZmVycmVkVGhlbWVzID0gY2F0LnRoZW1lcy5maWx0ZXIodCA9PiB0LnBhdGgmJiF0LnNraXApO1xuXG4gICAgY29uc3QgdHJlZUFjdGlvbnMgPSB0aGlzLmxheWVyQWN0aW9ucy5tYXAobGE9PntcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGljb246bGEuaWNvbixcbiAgICAgICAgdG9vbHRpcDpsYS50b29sdGlwLFxuICAgICAgICBhY3Rpb246KG5vZGU6IFRyZWVNb2RlbCkgPT4gdGhpcy5sYXllckNsaWNrKG5vZGUuZGF0YSxsYS5hY3Rpb24pXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgY29uc3QgbGF5ZXJUb1RyZWUgPSAobDogTGF5ZXIpPT4ge1xuICAgICAgbGV0IHJlc3VsdDpUcmVlTW9kZWwgPSB7XG4gICAgICAgIGxhYmVsOiBsLm5hbWUsXG4gICAgICAgIGRhdGE6IGwsXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgIGFjdGlvbnM6IHRyZWVBY3Rpb25zXG4gICAgICB9O1xuXG4gICAgICBjb25zdCB0bXAgPSBuZXcgTWFwcGVkTGF5ZXIoKTtcbiAgICAgIHRtcC5sYXllciA9IGw7XG4gICAgICB0bXAudXBkYXRlKCk7XG5cbiAgICAgIGlmKGwuZGVzY3JpcHRpb24pe1xuICAgICAgICByZXN1bHQudG9vbHRpcCA9IG9mKGwuZGVzY3JpcHRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0LnRvb2x0aXAgPSB0aGlzLm1ldGFkYXRhLmdldE1ldGFkYXRhKHRtcCkucGlwZShcbiAgICAgICAgICBtYXAobWV0YT0+bWV0YVtsLmRlc2NyaXB0aW9uRmllbGR8fCdsb25nX25hbWUnXSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGhlbWVUb1RyZWUodDogVGhlbWUpOiBUcmVlTW9kZWwge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGFiZWw6IHQubmFtZSxcbiAgICAgICAgZXhwYW5kZWQ6IGZhbHNlLFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICBjaGlsZHJlbjogdC5sYXllcnMuZmlsdGVyKGwgPT4gIWwucGF0aCYmIWwuc2tpcClcbiAgICAgICAgICAuZmlsdGVyKGw9PnNlbGYuc2hvd1BsYWNlaG9sZGVyc3x8IWwucGxhY2Vob2xkZXIpXG4gICAgICAgICAgLm1hcChsYXllclRvVHJlZSlcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdHJlZS5jaGlsZHJlbiA9IGNhdC50aGVtZXMuZmlsdGVyKHQgPT4gIXQucGF0aCYmIXQuc2tpcCkubWFwKHRoZW1lVG9UcmVlKTtcblxuICAgIGZ1bmN0aW9uIGZpbmRQYXJlbnQocGF0aDogc3RyaW5nKTogW1RyZWVNb2RlbCxudW1iZXJdIHtcbiAgICAgIHZhciBjb21wb25lbnRzID0gcGF0aC5zcGxpdCgnLycpO1xuICAgICAgdmFyIHBhcmVudDogVHJlZU1vZGVsID0gdHJlZTtcbiAgICAgIHZhciBpbmRleCA9IC0xO1xuXG4gICAgICBmb3IgKHZhciBjb21wb25lbnQgb2YgY29tcG9uZW50cykge1xuICAgICAgICB2YXIgc3BsaXQgPSBjb21wb25lbnQuc3BsaXQoJ0AnKTtcbiAgICAgICAgY29tcG9uZW50ID0gc3BsaXRbMF07XG4gICAgICAgIGluZGV4ID0gLTE7XG4gICAgICAgIGlmKHNwbGl0Lmxlbmd0aD4xKXtcbiAgICAgICAgICBpbmRleCA9ICtzcGxpdFsxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBuIG9mIHBhcmVudC5jaGlsZHJlbikge1xuICAgICAgICAgIGlmIChuLmxhYmVsID09PSBjb21wb25lbnQpIHtcbiAgICAgICAgICAgIHBhcmVudCA9IG47XG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgdmFyIG5ld05vZGU6IFRyZWVNb2RlbCA9IHtcbiAgICAgICAgICAgIGxhYmVsOiBjb21wb25lbnQsXG4gICAgICAgICAgICBleHBhbmRlZDogZmFsc2UsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICAgICAgfTtcbiAgICAgICAgICBhZGRDaGlsZChwYXJlbnQsbmV3Tm9kZSxpbmRleCk7XG4gICAgICAgICAgcGFyZW50ID0gbmV3Tm9kZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIFtwYXJlbnQsaW5kZXhdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZENoaWxkKHBhcmVudDpUcmVlTW9kZWwsY2hpbGQ6VHJlZU1vZGVsLGk6bnVtYmVyKXtcbiAgICAgIGlmKGk8MCl7XG4gICAgICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaSwwLGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkZWZlcnJlZFRoZW1lcy5mb3JFYWNoKHQgPT4ge1xuICAgICAgdmFyIFtwYXJlbnQsaW5kZXhdID0gZmluZFBhcmVudCh0LnBhdGgpO1xuICAgICAgYWRkQ2hpbGQocGFyZW50LHRoZW1lVG9UcmVlKHQpLGluZGV4KTtcbiAgICB9KTtcblxuICAgIGRlZmVycmVkTGF5ZXJzLmZvckVhY2gobCA9PiB7XG4gICAgICB2YXIgW3BhcmVudCxpbmRleF0gPSBmaW5kUGFyZW50KGwucGF0aCk7XG4gICAgICBhZGRDaGlsZChwYXJlbnQsbGF5ZXJUb1RyZWUobCksaW5kZXgpO1xuICAgIH0pO1xuICAgIHRoaXMudHJlZSA9IHRyZWU7XG4gIH1cblxuICBsYXllckNsaWNrKGw6IExheWVyLGFjdGlvbjpzdHJpbmcpIHtcbiAgICB2YXIgc2VsZWN0aW9uOiBMYXllclNlbGVjdGlvbiA9IHtcbiAgICAgIGxheWVyOiBsLFxuICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICB9O1xuICAgIHRoaXMubGF5ZXJTZWxlY3RlZC5lbWl0KHNlbGVjdGlvbik7XG4gIH1cblxuICBub2RlU2VsZWN0ZWQoZTogVHJlZU1vZGVsKSB7XG4gICAgaWYgKCFlLmRhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbGF5ZXIgPSA8TGF5ZXI+ZS5kYXRhO1xuICAgIHRoaXMubGF5ZXJDbGljayhsYXllcix0aGlzLmRlZmF1bHRBY3Rpb24pO1xuICB9XG5cbiAgYWN0aXZlTGF5ZXJzKGxheWVyczpMYXllcltdKXtcbiAgICB0aGlzLmhpZ2hsaWdodExheWVycyhsYXllcnMsdGhpcy50cmVlKTtcbiAgfVxuXG4gIGhpZ2hsaWdodExheWVycyhsYXllcnM6TGF5ZXJbXSx0cmVlOlRyZWVNb2RlbCk6Ym9vbGVhbntcbiAgICB0cmVlLmtsYXNzID0gbnVsbDtcblxuICAgIGlmKHRyZWUuZGF0YSYmKGxheWVycy5pbmRleE9mKHRyZWUuZGF0YSk+PTApKXtcbiAgICAgIHRyZWUua2xhc3MgPSAnYWN0aXZlLWxheWVyJztcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmKHRyZWUuY2hpbGRyZW4pe1xuICAgICAgbGV0IGFjdGl2ZUNoaWxkID0gZmFsc2U7XG4gICAgICBmb3IobGV0IGk9MDtpPHRyZWUuY2hpbGRyZW4ubGVuZ3RoO2krKyl7XG4gICAgICAgIGFjdGl2ZUNoaWxkID0gdGhpcy5oaWdobGlnaHRMYXllcnMobGF5ZXJzLHRyZWUuY2hpbGRyZW5baV0pIHx8IGFjdGl2ZUNoaWxkO1xuICAgICAgfVxuICAgICAgaWYoYWN0aXZlQ2hpbGQpe1xuICAgICAgICB0cmVlLmtsYXNzID0gJ2FjdGl2ZS1jaGlsZCc7XG4gICAgICB9XG4gICAgICB0cmVlLmtsYXNzID0gKHRyZWUua2xhc3N8fCcnKSArICcgdGhlbWUnO1xuICAgICAgcmV0dXJuIGFjdGl2ZUNoaWxkO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19