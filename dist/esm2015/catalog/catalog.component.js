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
const map_wald_1 = require("map-wald");
const operators_1 = require("rxjs/operators");
const rxjs_1 = require("rxjs");
let CatalogComponent = class CatalogComponent {
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
};
CatalogComponent.ctorParameters = () => [
    { type: map_wald_1.TreeFilterService },
    { type: map_wald_1.MetadataService }
];
__decorate([
    core_1.Input(),
    __metadata("design:type", map_wald_1.Catalog)
], CatalogComponent.prototype, "catalog", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CatalogComponent.prototype, "showPlaceholders", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CatalogComponent.prototype, "defaultAction", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], CatalogComponent.prototype, "layerActions", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogComponent.prototype, "layerSelected", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CatalogComponent.prototype, "collapsedIcon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CatalogComponent.prototype, "expandedIcon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CatalogComponent.prototype, "leafIcon", void 0);
CatalogComponent = __decorate([
    core_1.Component({
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
`,
        styles: [`
.node-name{
  font-size:1em;
}
`]
    }),
    __metadata("design:paramtypes", [map_wald_1.TreeFilterService, map_wald_1.MetadataService])
], CatalogComponent);
exports.CatalogComponent = CatalogComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0YWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJjYXRhbG9nL2NhdGFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBR3VCO0FBQ3ZCLHVDQUNvRTtBQUNwRSw4Q0FBcUM7QUFDckMsK0JBQTBCO0FBcUMxQixJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQWdCM0IsWUFBWSxhQUFnQyxFQUFVLFFBQXdCO1FBQXhCLGFBQVEsR0FBUixRQUFRLENBQWdCO1FBZHJFLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixpQkFBWSxHQUF3QixFQUFFLENBQUM7UUFDdEMsa0JBQWEsR0FBaUMsSUFBSSxtQkFBWSxFQUFrQixDQUFDO1FBQ2xGLGtCQUFhLEdBQUcsbUJBQW1CLENBQUM7UUFDcEMsaUJBQVksR0FBRyxrQkFBa0IsQ0FBQztRQUNsQyxhQUFRLEdBQUcsYUFBYSxDQUFDO1FBRWxDLFdBQU0sR0FBaUIsRUFBRSxDQUFDO1FBQzFCLFNBQUksR0FBYyxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxDQUFDO1FBQ2pELGVBQVUsR0FBRyxFQUFFLENBQUM7UUFLZCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUNyQyxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEI7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsZUFB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LENBQUMsSUFBSSxXQUFXLENBQUM7YUFDNUU7WUFDRCxJQUFHLFdBQVcsRUFBQztnQkFDYixJQUFJLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQzthQUM3QjtZQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFFLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQztZQUN6QyxPQUFPLFdBQVcsQ0FBQztTQUNwQjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztDQUNGLENBQUE7O1lBakw0Qiw0QkFBaUI7WUFBbUIsMEJBQWU7O0FBZnJFO0lBQVIsWUFBSyxFQUFFOzhCQUFVLGtCQUFPO2lEQUFDO0FBQ2pCO0lBQVIsWUFBSyxFQUFFOzswREFBeUI7QUFDeEI7SUFBUixZQUFLLEVBQUU7O3VEQUF1QjtBQUN0QjtJQUFSLFlBQUssRUFBRTs7c0RBQXdDO0FBQ3RDO0lBQVQsYUFBTSxFQUFFOzhCQUFnQixtQkFBWTt1REFBc0Q7QUFDbEY7SUFBUixZQUFLLEVBQUU7O3VEQUFxQztBQUNwQztJQUFSLFlBQUssRUFBRTs7c0RBQW1DO0FBQ2xDO0lBQVIsWUFBSyxFQUFFOztrREFBMEI7QUFSdkIsZ0JBQWdCO0lBM0I1QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFNBQVM7UUFDbkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQW9CWDtpQkFBVTs7OztDQUlWO0tBQUcsQ0FBQztxQ0FpQndCLDRCQUFpQixFQUFtQiwwQkFBZTtHQWhCbkUsZ0JBQWdCLENBaU01QjtBQWpNWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsXG4gIE9uQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYXRhbG9nLCAgTGF5ZXIsIFRoZW1lLCBMYXllclNlbGVjdGlvbiwgVHJlZU1vZGVsLFxuICBUcmVlRmlsdGVyU2VydmljZSwgTWV0YWRhdGFTZXJ2aWNlLCBNYXBwZWRMYXllciB9IGZyb20gJ21hcC13YWxkJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5cbmRlY2xhcmUgdmFyIFBsb3RseTogYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIENhdGFsb2dOb2RlQWN0aW9uIHtcbiAgYWN0aW9uOnN0cmluZztcbiAgaWNvbjpzdHJpbmc7XG4gIHRvb2x0aXA6c3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjYXRhbG9nJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1idG5cIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiB0eXBlPVwiYnV0dG9uXCIgW2Rpc2FibGVkXT1cIiFmaWx0ZXJUZXh0XCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImZpbHRlclRleHQgPSAnJ1wiPlxuICAgICAgICAgICAgPGkgKm5nSWY9XCJmaWx0ZXJUZXh0XCJjbGFzcz1cImZhIGZhLXRpbWVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgPGkgKm5nSWY9XCIhZmlsdGVyVGV4dFwiY2xhc3M9XCJmYSBmYS1zZWFyY2hcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgPC9zcGFuPlxuICA8aW5wdXQgI2ZpbHRlcklucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkNhdGFsb2cgc2VhcmNoLi4uXCJcbiAgWyhuZ01vZGVsKV09XCJmaWx0ZXJUZXh0XCIvPlxuPC9kaXY+XG5cbjxzaW1wbGUtdHJlZVxuICBbdHJlZV09XCJ0aGlzLmZpbHRlclNlcnZpY2UuZmlsdGVyVHJlZSh0cmVlLCBmaWx0ZXJUZXh0KVwiXG4gIFtzaG93VG9wXT1cImZhbHNlXCJcbiAgW2xlYWZJY29uXT1cImxlYWZJY29uXCJcbiAgW2NvbGxhcHNlZEljb25dPVwiY29sbGFwc2VkSWNvblwiXG4gIFtleHBhbmRlZEljb25dPVwiZXhwYW5kZWRJY29uXCJcbiAgKG5vZGVTZWxlY3RlZCk9XCJub2RlU2VsZWN0ZWQoJGV2ZW50KVwiPlxuPC9zaW1wbGUtdHJlZT5cbmAsc3R5bGVzOiBbYFxuLm5vZGUtbmFtZXtcbiAgZm9udC1zaXplOjFlbTtcbn1cbmBdLH0pXG5leHBvcnQgY2xhc3MgQ2F0YWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGNhdGFsb2c6IENhdGFsb2c7XG4gIEBJbnB1dCgpIHNob3dQbGFjZWhvbGRlcnMgPSB0cnVlO1xuICBASW5wdXQoKSBkZWZhdWx0QWN0aW9uID0gJ2FkZCc7XG4gIEBJbnB1dCgpIGxheWVyQWN0aW9uczogQ2F0YWxvZ05vZGVBY3Rpb25bXSA9IFtdO1xuICBAT3V0cHV0KCkgbGF5ZXJTZWxlY3RlZDogRXZlbnRFbWl0dGVyPExheWVyU2VsZWN0aW9uPiA9IG5ldyBFdmVudEVtaXR0ZXI8TGF5ZXJTZWxlY3Rpb24+KCk7XG4gIEBJbnB1dCgpIGNvbGxhcHNlZEljb24gPSAnZmEgZmEtY2FyZXQtcmlnaHQnO1xuICBASW5wdXQoKSBleHBhbmRlZEljb24gPSAnZmEgZmEtY2FyZXQtZG93bic7XG4gIEBJbnB1dCgpIGxlYWZJY29uID0gJ2ZhIGZhLW1pbnVzJztcblxuICBsYXllcnM6IEFycmF5PExheWVyPiA9IFtdO1xuICB0cmVlOiBUcmVlTW9kZWwgPSB7IGxhYmVsOiAnbm8gY2F0YWxvZyBsb2FkZWQnIH07XG4gIGZpbHRlclRleHQgPSAnJztcblxuICBmaWx0ZXJTZXJ2aWNlOiBUcmVlRmlsdGVyU2VydmljZTtcblxuICBjb25zdHJ1Y3RvcihmaWx0ZXJTZXJ2aWNlOiBUcmVlRmlsdGVyU2VydmljZSwgcHJpdmF0ZSBtZXRhZGF0YTpNZXRhZGF0YVNlcnZpY2UpIHtcbiAgICB0aGlzLmZpbHRlclNlcnZpY2UgPSBmaWx0ZXJTZXJ2aWNlO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLmNhdGFsb2cpIHtcbiAgICAgIHRoaXMuYnVpbGRUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmNhdGFsb2cgJiYgdGhpcy5jYXRhbG9nKSB7XG4gICAgICB0aGlzLmZpbHRlclRleHQgPSAnJztcbiAgICAgIHRoaXMuYnVpbGRUcmVlKCk7XG4gICAgICB0aGlzLmhpZ2hsaWdodExheWVycyhbXSx0aGlzLnRyZWUpO1xuICAgIH1cbiAgfVxuXG4gIGJ1aWxkVHJlZSgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5sYXllcnMgPSBbXTtcbiAgICB2YXIgY2F0ID0gdGhpcy5jYXRhbG9nO1xuICAgIHZhciB0cmVlOiBUcmVlTW9kZWwgPSB7XG4gICAgICBsYWJlbDogY2F0Lm5hbWUsXG4gICAgICBleHBhbmRlZDogdHJ1ZSxcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAvLyBzZXR0aW5nczp7XG4gICAgICAvLyAgIHN0YXRpYzp0cnVlLFxuICAgICAgLy8gICBsZWZ0TWVudTpmYWxzZVxuICAgICAgLy8gfVxuICAgIH1cblxuICAgIHZhciBkZWZlcnJlZExheWVycyA9IGNhdC50aGVtZXMubWFwKHQgPT4gdC5sYXllcnMuZmlsdGVyKGwgPT4gbC5wYXRoJiYhbC5za2lwKSkucmVkdWNlKChsLCByKSA9PiBsLmNvbmNhdChyKSwgW10pO1xuICAgIHZhciBkZWZlcnJlZFRoZW1lcyA9IGNhdC50aGVtZXMuZmlsdGVyKHQgPT4gdC5wYXRoJiYhdC5za2lwKTtcblxuICAgIGNvbnN0IHRyZWVBY3Rpb25zID0gdGhpcy5sYXllckFjdGlvbnMubWFwKGxhPT57XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpY29uOmxhLmljb24sXG4gICAgICAgIHRvb2x0aXA6bGEudG9vbHRpcCxcbiAgICAgICAgYWN0aW9uOihub2RlOiBUcmVlTW9kZWwpID0+IHRoaXMubGF5ZXJDbGljayhub2RlLmRhdGEsbGEuYWN0aW9uKVxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGxheWVyVG9UcmVlID0gKGw6IExheWVyKT0+IHtcbiAgICAgIGxldCByZXN1bHQ6VHJlZU1vZGVsID0ge1xuICAgICAgICBsYWJlbDogbC5uYW1lLFxuICAgICAgICBkYXRhOiBsLFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICBhY3Rpb25zOiB0cmVlQWN0aW9uc1xuICAgICAgfTtcblxuICAgICAgY29uc3QgdG1wID0gbmV3IE1hcHBlZExheWVyKCk7XG4gICAgICB0bXAubGF5ZXIgPSBsO1xuICAgICAgdG1wLnVwZGF0ZSgpO1xuXG4gICAgICBpZihsLmRlc2NyaXB0aW9uKXtcbiAgICAgICAgcmVzdWx0LnRvb2x0aXAgPSBvZihsLmRlc2NyaXB0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC50b29sdGlwID0gdGhpcy5tZXRhZGF0YS5nZXRNZXRhZGF0YSh0bXApLnBpcGUoXG4gICAgICAgICAgbWFwKG1ldGE9Pm1ldGFbbC5kZXNjcmlwdGlvbkZpZWxkfHwnbG9uZ19uYW1lJ10pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRoZW1lVG9UcmVlKHQ6IFRoZW1lKTogVHJlZU1vZGVsIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxhYmVsOiB0Lm5hbWUsXG4gICAgICAgIGV4cGFuZGVkOiBmYWxzZSxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgY2hpbGRyZW46IHQubGF5ZXJzLmZpbHRlcihsID0+ICFsLnBhdGgmJiFsLnNraXApXG4gICAgICAgICAgLmZpbHRlcihsPT5zZWxmLnNob3dQbGFjZWhvbGRlcnN8fCFsLnBsYWNlaG9sZGVyKVxuICAgICAgICAgIC5tYXAobGF5ZXJUb1RyZWUpXG4gICAgICB9O1xuICAgIH1cblxuICAgIHRyZWUuY2hpbGRyZW4gPSBjYXQudGhlbWVzLmZpbHRlcih0ID0+ICF0LnBhdGgmJiF0LnNraXApLm1hcCh0aGVtZVRvVHJlZSk7XG5cbiAgICBmdW5jdGlvbiBmaW5kUGFyZW50KHBhdGg6IHN0cmluZyk6IFtUcmVlTW9kZWwsbnVtYmVyXSB7XG4gICAgICB2YXIgY29tcG9uZW50cyA9IHBhdGguc3BsaXQoJy8nKTtcbiAgICAgIHZhciBwYXJlbnQ6IFRyZWVNb2RlbCA9IHRyZWU7XG4gICAgICB2YXIgaW5kZXggPSAtMTtcblxuICAgICAgZm9yICh2YXIgY29tcG9uZW50IG9mIGNvbXBvbmVudHMpIHtcbiAgICAgICAgdmFyIHNwbGl0ID0gY29tcG9uZW50LnNwbGl0KCdAJyk7XG4gICAgICAgIGNvbXBvbmVudCA9IHNwbGl0WzBdO1xuICAgICAgICBpbmRleCA9IC0xO1xuICAgICAgICBpZihzcGxpdC5sZW5ndGg+MSl7XG4gICAgICAgICAgaW5kZXggPSArc3BsaXRbMV07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgbiBvZiBwYXJlbnQuY2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAobi5sYWJlbCA9PT0gY29tcG9uZW50KSB7XG4gICAgICAgICAgICBwYXJlbnQgPSBuO1xuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgIHZhciBuZXdOb2RlOiBUcmVlTW9kZWwgPSB7XG4gICAgICAgICAgICBsYWJlbDogY29tcG9uZW50LFxuICAgICAgICAgICAgZXhwYW5kZWQ6IGZhbHNlLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgICAgIH07XG4gICAgICAgICAgYWRkQ2hpbGQocGFyZW50LG5ld05vZGUsaW5kZXgpO1xuICAgICAgICAgIHBhcmVudCA9IG5ld05vZGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBbcGFyZW50LGluZGV4XTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRDaGlsZChwYXJlbnQ6VHJlZU1vZGVsLGNoaWxkOlRyZWVNb2RlbCxpOm51bWJlcil7XG4gICAgICBpZihpPDApe1xuICAgICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGksMCxjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZGVmZXJyZWRUaGVtZXMuZm9yRWFjaCh0ID0+IHtcbiAgICAgIHZhciBbcGFyZW50LGluZGV4XSA9IGZpbmRQYXJlbnQodC5wYXRoKTtcbiAgICAgIGFkZENoaWxkKHBhcmVudCx0aGVtZVRvVHJlZSh0KSxpbmRleCk7XG4gICAgfSk7XG5cbiAgICBkZWZlcnJlZExheWVycy5mb3JFYWNoKGwgPT4ge1xuICAgICAgdmFyIFtwYXJlbnQsaW5kZXhdID0gZmluZFBhcmVudChsLnBhdGgpO1xuICAgICAgYWRkQ2hpbGQocGFyZW50LGxheWVyVG9UcmVlKGwpLGluZGV4KTtcbiAgICB9KTtcbiAgICB0aGlzLnRyZWUgPSB0cmVlO1xuICB9XG5cbiAgbGF5ZXJDbGljayhsOiBMYXllcixhY3Rpb246c3RyaW5nKSB7XG4gICAgdmFyIHNlbGVjdGlvbjogTGF5ZXJTZWxlY3Rpb24gPSB7XG4gICAgICBsYXllcjogbCxcbiAgICAgIGFjdGlvbjogYWN0aW9uXG4gICAgfTtcbiAgICB0aGlzLmxheWVyU2VsZWN0ZWQuZW1pdChzZWxlY3Rpb24pO1xuICB9XG5cbiAgbm9kZVNlbGVjdGVkKGU6IFRyZWVNb2RlbCkge1xuICAgIGlmICghZS5kYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGxheWVyID0gPExheWVyPmUuZGF0YTtcbiAgICB0aGlzLmxheWVyQ2xpY2sobGF5ZXIsdGhpcy5kZWZhdWx0QWN0aW9uKTtcbiAgfVxuXG4gIGFjdGl2ZUxheWVycyhsYXllcnM6TGF5ZXJbXSl7XG4gICAgdGhpcy5oaWdobGlnaHRMYXllcnMobGF5ZXJzLHRoaXMudHJlZSk7XG4gIH1cblxuICBoaWdobGlnaHRMYXllcnMobGF5ZXJzOkxheWVyW10sdHJlZTpUcmVlTW9kZWwpOmJvb2xlYW57XG4gICAgdHJlZS5rbGFzcyA9IG51bGw7XG5cbiAgICBpZih0cmVlLmRhdGEmJihsYXllcnMuaW5kZXhPZih0cmVlLmRhdGEpPj0wKSl7XG4gICAgICB0cmVlLmtsYXNzID0gJ2FjdGl2ZS1sYXllcic7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZih0cmVlLmNoaWxkcmVuKXtcbiAgICAgIGxldCBhY3RpdmVDaGlsZCA9IGZhbHNlO1xuICAgICAgZm9yKGxldCBpPTA7aTx0cmVlLmNoaWxkcmVuLmxlbmd0aDtpKyspe1xuICAgICAgICBhY3RpdmVDaGlsZCA9IHRoaXMuaGlnaGxpZ2h0TGF5ZXJzKGxheWVycyx0cmVlLmNoaWxkcmVuW2ldKSB8fCBhY3RpdmVDaGlsZDtcbiAgICAgIH1cbiAgICAgIGlmKGFjdGl2ZUNoaWxkKXtcbiAgICAgICAgdHJlZS5rbGFzcyA9ICdhY3RpdmUtY2hpbGQnO1xuICAgICAgfVxuICAgICAgdHJlZS5rbGFzcyA9ICh0cmVlLmtsYXNzfHwnJykgKyAnIHRoZW1lJztcbiAgICAgIHJldHVybiBhY3RpdmVDaGlsZDtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==