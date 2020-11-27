"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogComponent = void 0;
var core_1 = require("@angular/core");
var map_wald_1 = require("map-wald");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var i0 = require("@angular/core");
var i1 = require("map-wald");
var i2 = require("@angular/common");
var i3 = require("@angular/forms");
var i4 = require("../simple-tree/simple-tree.component");
function CatalogComponent_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 8);
} }
function CatalogComponent_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 9);
} }
var CatalogComponent = /** @class */ (function () {
    function CatalogComponent(filterService, metadata) {
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
    CatalogComponent.prototype.ngAfterViewInit = function () {
        if (this.catalog) {
            this.buildTree();
        }
    };
    CatalogComponent.prototype.ngOnChanges = function (changes) {
        if (changes.catalog && this.catalog) {
            this.filterText = '';
            this.buildTree();
            this.highlightLayers([], this.tree);
        }
    };
    CatalogComponent.prototype.buildTree = function () {
        var _this = this;
        var self = this;
        this.layers = [];
        var cat = this.catalog;
        var tree = {
            label: cat.name,
            expanded: true,
            visible: true,
        };
        var deferredLayers = cat.themes.map(function (t) { return t.layers.filter(function (l) { return l.path && !l.skip; }); }).reduce(function (l, r) { return l.concat(r); }, []);
        var deferredThemes = cat.themes.filter(function (t) { return t.path && !t.skip; });
        var treeActions = this.layerActions.map(function (la) {
            return {
                icon: la.icon,
                tooltip: la.tooltip,
                action: function (node) { return _this.layerClick(node.data, la.action); }
            };
        });
        var layerToTree = function (l) {
            var result = {
                label: l.name,
                data: l,
                visible: true,
                actions: treeActions
            };
            var tmp = new map_wald_1.MappedLayer();
            tmp.layer = l;
            tmp.update();
            if (l.description) {
                result.tooltip = rxjs_1.of(l.description);
            }
            else {
                result.tooltip = _this.metadata.getMetadata(tmp).pipe(operators_1.map(function (meta) { return meta[l.descriptionField || 'long_name']; }));
            }
            return result;
        };
        function themeToTree(t) {
            return {
                label: t.name,
                expanded: false,
                visible: true,
                children: t.layers.filter(function (l) { return !l.path && !l.skip; })
                    .filter(function (l) { return self.showPlaceholders || !l.placeholder; })
                    .map(layerToTree)
            };
        }
        tree.children = cat.themes.filter(function (t) { return !t.path && !t.skip; }).map(themeToTree);
        function findParent(path) {
            var e_1, _a, e_2, _b;
            var components = path.split('/');
            var parent = tree;
            var index = -1;
            try {
                for (var components_1 = __values(components), components_1_1 = components_1.next(); !components_1_1.done; components_1_1 = components_1.next()) {
                    var component = components_1_1.value;
                    var split = component.split('@');
                    component = split[0];
                    index = -1;
                    if (split.length > 1) {
                        index = +split[1];
                    }
                    var found = false;
                    try {
                        for (var _c = (e_2 = void 0, __values(parent.children)), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var n = _d.value;
                            if (n.label === component) {
                                parent = n;
                                found = true;
                                break;
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                        }
                        finally { if (e_2) throw e_2.error; }
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
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (components_1_1 && !components_1_1.done && (_a = components_1.return)) _a.call(components_1);
                }
                finally { if (e_1) throw e_1.error; }
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
        deferredThemes.forEach(function (t) {
            var _a = __read(findParent(t.path), 2), parent = _a[0], index = _a[1];
            addChild(parent, themeToTree(t), index);
        });
        deferredLayers.forEach(function (l) {
            var _a = __read(findParent(l.path), 2), parent = _a[0], index = _a[1];
            addChild(parent, layerToTree(l), index);
        });
        this.tree = tree;
    };
    CatalogComponent.prototype.layerClick = function (l, action) {
        var selection = {
            layer: l,
            action: action
        };
        this.layerSelected.emit(selection);
    };
    CatalogComponent.prototype.nodeSelected = function (e) {
        if (!e.data) {
            return;
        }
        var layer = e.data;
        this.layerClick(layer, this.defaultAction);
    };
    CatalogComponent.prototype.activeLayers = function (layers) {
        this.highlightLayers(layers, this.tree);
    };
    CatalogComponent.prototype.highlightLayers = function (layers, tree) {
        tree.klass = null;
        if (tree.data && (layers.indexOf(tree.data) >= 0)) {
            tree.klass = 'active-layer';
            return true;
        }
        if (tree.children) {
            var activeChild = false;
            for (var i = 0; i < tree.children.length; i++) {
                activeChild = this.highlightLayers(layers, tree.children[i]) || activeChild;
            }
            if (activeChild) {
                tree.klass = 'active-child';
            }
            tree.klass = (tree.klass || '') + ' theme';
            return activeChild;
        }
        return false;
    };
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
    return CatalogComponent;
}());
exports.CatalogComponent = CatalogComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CatalogComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'catalog',
                template: "<div class=\"input-group\">\n  <span class=\"input-group-btn\">\n            <button class=\"btn\" type=\"button\" [disabled]=\"!filterText\"\n              (click)=\"filterText = ''\">\n            <i *ngIf=\"filterText\"class=\"fa fa-times\" aria-hidden=\"true\"></i>\n            <i *ngIf=\"!filterText\"class=\"fa fa-search\" aria-hidden=\"true\"></i>\n            </button>\n  </span>\n  <input #filterInput type=\"text\" class=\"form-control\" placeholder=\"Catalog search...\"\n  [(ngModel)]=\"filterText\"/>\n</div>\n\n<simple-tree\n  [tree]=\"this.filterService.filterTree(tree, filterText)\"\n  [showTop]=\"false\"\n  [leafIcon]=\"leafIcon\"\n  [collapsedIcon]=\"collapsedIcon\"\n  [expandedIcon]=\"expandedIcon\"\n  (nodeSelected)=\"nodeSelected($event)\">\n</simple-tree>\n", styles: ["\n.node-name{\n  font-size:1em;\n}\n"],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0YWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJjYXRhbG9nL2NhdGFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUd1QjtBQUN2QixxQ0FDb0U7QUFDcEUsNENBQXFDO0FBQ3JDLDZCQUEwQjs7Ozs7OztJQWdCZCx1QkFBZ0U7OztJQUNoRSx1QkFBa0U7O0FBUDlFO0lBMkNFLDBCQUFZLGFBQWdDLEVBQVUsUUFBd0I7UUFBeEIsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFkckUscUJBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGlCQUFZLEdBQXdCLEVBQUUsQ0FBQztRQUN0QyxrQkFBYSxHQUFpQyxJQUFJLG1CQUFZLEVBQWtCLENBQUM7UUFDbEYsa0JBQWEsR0FBRyxtQkFBbUIsQ0FBQztRQUNwQyxpQkFBWSxHQUFHLGtCQUFrQixDQUFDO1FBQ2xDLGFBQVEsR0FBRyxhQUFhLENBQUM7UUFFbEMsV0FBTSxHQUFpQixFQUFFLENBQUM7UUFDMUIsU0FBSSxHQUFjLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixFQUFFLENBQUM7UUFDakQsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUtkLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3JDLENBQUM7SUFFRCwwQ0FBZSxHQUFmO1FBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQjtJQUNILENBQUM7SUFFRCxzQ0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFD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QTROQztBQWpNWSw0Q0FBZ0I7a0RBQWhCLGdCQUFnQjtjQTNCNUIsZ0JBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFLG14QkFvQlgsRUFBQyxNQUFNLEVBQUUsQ0FBQyxzQ0FJVixDQUFDO2FBQUU7a0dBRU8sT0FBTztrQkFBZixZQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixZQUFLO1lBQ0csYUFBYTtrQkFBckIsWUFBSztZQUNHLFlBQVk7a0JBQXBCLFlBQUs7WUFDSSxhQUFhO2tCQUF0QixhQUFNO1lBQ0UsYUFBYTtrQkFBckIsWUFBSztZQUNHLFlBQVk7a0JBQXBCLFlBQUs7WUFDRyxRQUFRO2tCQUFoQixZQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLFxuICBPbkNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2F0YWxvZywgIExheWVyLCBUaGVtZSwgTGF5ZXJTZWxlY3Rpb24sIFRyZWVNb2RlbCxcbiAgVHJlZUZpbHRlclNlcnZpY2UsIE1ldGFkYXRhU2VydmljZSwgTWFwcGVkTGF5ZXIgfSBmcm9tICdtYXAtd2FsZCc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuXG5kZWNsYXJlIHZhciBQbG90bHk6IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBDYXRhbG9nTm9kZUFjdGlvbiB7XG4gIGFjdGlvbjpzdHJpbmc7XG4gIGljb246c3RyaW5nO1xuICB0b29sdGlwOnN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2F0YWxvZycsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYnRuXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgdHlwZT1cImJ1dHRvblwiIFtkaXNhYmxlZF09XCIhZmlsdGVyVGV4dFwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJmaWx0ZXJUZXh0ID0gJydcIj5cbiAgICAgICAgICAgIDxpICpuZ0lmPVwiZmlsdGVyVGV4dFwiY2xhc3M9XCJmYSBmYS10aW1lc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgIDxpICpuZ0lmPVwiIWZpbHRlclRleHRcImNsYXNzPVwiZmEgZmEtc2VhcmNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gIDwvc3Bhbj5cbiAgPGlucHV0ICNmaWx0ZXJJbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJDYXRhbG9nIHNlYXJjaC4uLlwiXG4gIFsobmdNb2RlbCldPVwiZmlsdGVyVGV4dFwiLz5cbjwvZGl2PlxuXG48c2ltcGxlLXRyZWVcbiAgW3RyZWVdPVwidGhpcy5maWx0ZXJTZXJ2aWNlLmZpbHRlclRyZWUodHJlZSwgZmlsdGVyVGV4dClcIlxuICBbc2hvd1RvcF09XCJmYWxzZVwiXG4gIFtsZWFmSWNvbl09XCJsZWFmSWNvblwiXG4gIFtjb2xsYXBzZWRJY29uXT1cImNvbGxhcHNlZEljb25cIlxuICBbZXhwYW5kZWRJY29uXT1cImV4cGFuZGVkSWNvblwiXG4gIChub2RlU2VsZWN0ZWQpPVwibm9kZVNlbGVjdGVkKCRldmVudClcIj5cbjwvc2ltcGxlLXRyZWU+XG5gLHN0eWxlczogW2Bcbi5ub2RlLW5hbWV7XG4gIGZvbnQtc2l6ZToxZW07XG59XG5gXSx9KVxuZXhwb3J0IGNsYXNzIENhdGFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBjYXRhbG9nOiBDYXRhbG9nO1xuICBASW5wdXQoKSBzaG93UGxhY2Vob2xkZXJzID0gdHJ1ZTtcbiAgQElucHV0KCkgZGVmYXVsdEFjdGlvbiA9ICdhZGQnO1xuICBASW5wdXQoKSBsYXllckFjdGlvbnM6IENhdGFsb2dOb2RlQWN0aW9uW10gPSBbXTtcbiAgQE91dHB1dCgpIGxheWVyU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxMYXllclNlbGVjdGlvbj4gPSBuZXcgRXZlbnRFbWl0dGVyPExheWVyU2VsZWN0aW9uPigpO1xuICBASW5wdXQoKSBjb2xsYXBzZWRJY29uID0gJ2ZhIGZhLWNhcmV0LXJpZ2h0JztcbiAgQElucHV0KCkgZXhwYW5kZWRJY29uID0gJ2ZhIGZhLWNhcmV0LWRvd24nO1xuICBASW5wdXQoKSBsZWFmSWNvbiA9ICdmYSBmYS1taW51cyc7XG5cbiAgbGF5ZXJzOiBBcnJheTxMYXllcj4gPSBbXTtcbiAgdHJlZTogVHJlZU1vZGVsID0geyBsYWJlbDogJ25vIGNhdGFsb2cgbG9hZGVkJyB9O1xuICBmaWx0ZXJUZXh0ID0gJyc7XG5cbiAgZmlsdGVyU2VydmljZTogVHJlZUZpbHRlclNlcnZpY2U7XG5cbiAgY29uc3RydWN0b3IoZmlsdGVyU2VydmljZTogVHJlZUZpbHRlclNlcnZpY2UsIHByaXZhdGUgbWV0YWRhdGE6TWV0YWRhdGFTZXJ2aWNlKSB7XG4gICAgdGhpcy5maWx0ZXJTZXJ2aWNlID0gZmlsdGVyU2VydmljZTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5jYXRhbG9nKSB7XG4gICAgICB0aGlzLmJ1aWxkVHJlZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5jYXRhbG9nICYmIHRoaXMuY2F0YWxvZykge1xuICAgICAgdGhpcy5maWx0ZXJUZXh0ID0gJyc7XG4gICAgICB0aGlzLmJ1aWxkVHJlZSgpO1xuICAgICAgdGhpcy5oaWdobGlnaHRMYXllcnMoW10sdGhpcy50cmVlKTtcbiAgICB9XG4gIH1cblxuICBidWlsZFRyZWUoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIHRoaXMubGF5ZXJzID0gW107XG4gICAgdmFyIGNhdCA9IHRoaXMuY2F0YWxvZztcbiAgICB2YXIgdHJlZTogVHJlZU1vZGVsID0ge1xuICAgICAgbGFiZWw6IGNhdC5uYW1lLFxuICAgICAgZXhwYW5kZWQ6IHRydWUsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgLy8gc2V0dGluZ3M6e1xuICAgICAgLy8gICBzdGF0aWM6dHJ1ZSxcbiAgICAgIC8vICAgbGVmdE1lbnU6ZmFsc2VcbiAgICAgIC8vIH1cbiAgICB9XG5cbiAgICB2YXIgZGVmZXJyZWRMYXllcnMgPSBjYXQudGhlbWVzLm1hcCh0ID0+IHQubGF5ZXJzLmZpbHRlcihsID0+IGwucGF0aCYmIWwuc2tpcCkpLnJlZHVjZSgobCwgcikgPT4gbC5jb25jYXQociksIFtdKTtcbiAgICB2YXIgZGVmZXJyZWRUaGVtZXMgPSBjYXQudGhlbWVzLmZpbHRlcih0ID0+IHQucGF0aCYmIXQuc2tpcCk7XG5cbiAgICBjb25zdCB0cmVlQWN0aW9ucyA9IHRoaXMubGF5ZXJBY3Rpb25zLm1hcChsYT0+e1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWNvbjpsYS5pY29uLFxuICAgICAgICB0b29sdGlwOmxhLnRvb2x0aXAsXG4gICAgICAgIGFjdGlvbjoobm9kZTogVHJlZU1vZGVsKSA9PiB0aGlzLmxheWVyQ2xpY2sobm9kZS5kYXRhLGxhLmFjdGlvbilcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBjb25zdCBsYXllclRvVHJlZSA9IChsOiBMYXllcik9PiB7XG4gICAgICBsZXQgcmVzdWx0OlRyZWVNb2RlbCA9IHtcbiAgICAgICAgbGFiZWw6IGwubmFtZSxcbiAgICAgICAgZGF0YTogbCxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgYWN0aW9uczogdHJlZUFjdGlvbnNcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHRtcCA9IG5ldyBNYXBwZWRMYXllcigpO1xuICAgICAgdG1wLmxheWVyID0gbDtcbiAgICAgIHRtcC51cGRhdGUoKTtcblxuICAgICAgaWYobC5kZXNjcmlwdGlvbil7XG4gICAgICAgIHJlc3VsdC50b29sdGlwID0gb2YobC5kZXNjcmlwdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQudG9vbHRpcCA9IHRoaXMubWV0YWRhdGEuZ2V0TWV0YWRhdGEodG1wKS5waXBlKFxuICAgICAgICAgIG1hcChtZXRhPT5tZXRhW2wuZGVzY3JpcHRpb25GaWVsZHx8J2xvbmdfbmFtZSddKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0aGVtZVRvVHJlZSh0OiBUaGVtZSk6IFRyZWVNb2RlbCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsYWJlbDogdC5uYW1lLFxuICAgICAgICBleHBhbmRlZDogZmFsc2UsXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgIGNoaWxkcmVuOiB0LmxheWVycy5maWx0ZXIobCA9PiAhbC5wYXRoJiYhbC5za2lwKVxuICAgICAgICAgIC5maWx0ZXIobD0+c2VsZi5zaG93UGxhY2Vob2xkZXJzfHwhbC5wbGFjZWhvbGRlcilcbiAgICAgICAgICAubWFwKGxheWVyVG9UcmVlKVxuICAgICAgfTtcbiAgICB9XG5cbiAgICB0cmVlLmNoaWxkcmVuID0gY2F0LnRoZW1lcy5maWx0ZXIodCA9PiAhdC5wYXRoJiYhdC5za2lwKS5tYXAodGhlbWVUb1RyZWUpO1xuXG4gICAgZnVuY3Rpb24gZmluZFBhcmVudChwYXRoOiBzdHJpbmcpOiBbVHJlZU1vZGVsLG51bWJlcl0ge1xuICAgICAgdmFyIGNvbXBvbmVudHMgPSBwYXRoLnNwbGl0KCcvJyk7XG4gICAgICB2YXIgcGFyZW50OiBUcmVlTW9kZWwgPSB0cmVlO1xuICAgICAgdmFyIGluZGV4ID0gLTE7XG5cbiAgICAgIGZvciAodmFyIGNvbXBvbmVudCBvZiBjb21wb25lbnRzKSB7XG4gICAgICAgIHZhciBzcGxpdCA9IGNvbXBvbmVudC5zcGxpdCgnQCcpO1xuICAgICAgICBjb21wb25lbnQgPSBzcGxpdFswXTtcbiAgICAgICAgaW5kZXggPSAtMTtcbiAgICAgICAgaWYoc3BsaXQubGVuZ3RoPjEpe1xuICAgICAgICAgIGluZGV4ID0gK3NwbGl0WzFdO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZvdW5kID0gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIG4gb2YgcGFyZW50LmNoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKG4ubGFiZWwgPT09IGNvbXBvbmVudCkge1xuICAgICAgICAgICAgcGFyZW50ID0gbjtcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICB2YXIgbmV3Tm9kZTogVHJlZU1vZGVsID0ge1xuICAgICAgICAgICAgbGFiZWw6IGNvbXBvbmVudCxcbiAgICAgICAgICAgIGV4cGFuZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgICAgICB9O1xuICAgICAgICAgIGFkZENoaWxkKHBhcmVudCxuZXdOb2RlLGluZGV4KTtcbiAgICAgICAgICBwYXJlbnQgPSBuZXdOb2RlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gW3BhcmVudCxpbmRleF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkQ2hpbGQocGFyZW50OlRyZWVNb2RlbCxjaGlsZDpUcmVlTW9kZWwsaTpudW1iZXIpe1xuICAgICAgaWYoaTwwKXtcbiAgICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShpLDAsY2hpbGQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRlZmVycmVkVGhlbWVzLmZvckVhY2godCA9PiB7XG4gICAgICB2YXIgW3BhcmVudCxpbmRleF0gPSBmaW5kUGFyZW50KHQucGF0aCk7XG4gICAgICBhZGRDaGlsZChwYXJlbnQsdGhlbWVUb1RyZWUodCksaW5kZXgpO1xuICAgIH0pO1xuXG4gICAgZGVmZXJyZWRMYXllcnMuZm9yRWFjaChsID0+IHtcbiAgICAgIHZhciBbcGFyZW50LGluZGV4XSA9IGZpbmRQYXJlbnQobC5wYXRoKTtcbiAgICAgIGFkZENoaWxkKHBhcmVudCxsYXllclRvVHJlZShsKSxpbmRleCk7XG4gICAgfSk7XG4gICAgdGhpcy50cmVlID0gdHJlZTtcbiAgfVxuXG4gIGxheWVyQ2xpY2sobDogTGF5ZXIsYWN0aW9uOnN0cmluZykge1xuICAgIHZhciBzZWxlY3Rpb246IExheWVyU2VsZWN0aW9uID0ge1xuICAgICAgbGF5ZXI6IGwsXG4gICAgICBhY3Rpb246IGFjdGlvblxuICAgIH07XG4gICAgdGhpcy5sYXllclNlbGVjdGVkLmVtaXQoc2VsZWN0aW9uKTtcbiAgfVxuXG4gIG5vZGVTZWxlY3RlZChlOiBUcmVlTW9kZWwpIHtcbiAgICBpZiAoIWUuZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBsYXllciA9IDxMYXllcj5lLmRhdGE7XG4gICAgdGhpcy5sYXllckNsaWNrKGxheWVyLHRoaXMuZGVmYXVsdEFjdGlvbik7XG4gIH1cblxuICBhY3RpdmVMYXllcnMobGF5ZXJzOkxheWVyW10pe1xuICAgIHRoaXMuaGlnaGxpZ2h0TGF5ZXJzKGxheWVycyx0aGlzLnRyZWUpO1xuICB9XG5cbiAgaGlnaGxpZ2h0TGF5ZXJzKGxheWVyczpMYXllcltdLHRyZWU6VHJlZU1vZGVsKTpib29sZWFue1xuICAgIHRyZWUua2xhc3MgPSBudWxsO1xuXG4gICAgaWYodHJlZS5kYXRhJiYobGF5ZXJzLmluZGV4T2YodHJlZS5kYXRhKT49MCkpe1xuICAgICAgdHJlZS5rbGFzcyA9ICdhY3RpdmUtbGF5ZXInO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYodHJlZS5jaGlsZHJlbil7XG4gICAgICBsZXQgYWN0aXZlQ2hpbGQgPSBmYWxzZTtcbiAgICAgIGZvcihsZXQgaT0wO2k8dHJlZS5jaGlsZHJlbi5sZW5ndGg7aSsrKXtcbiAgICAgICAgYWN0aXZlQ2hpbGQgPSB0aGlzLmhpZ2hsaWdodExheWVycyhsYXllcnMsdHJlZS5jaGlsZHJlbltpXSkgfHwgYWN0aXZlQ2hpbGQ7XG4gICAgICB9XG4gICAgICBpZihhY3RpdmVDaGlsZCl7XG4gICAgICAgIHRyZWUua2xhc3MgPSAnYWN0aXZlLWNoaWxkJztcbiAgICAgIH1cbiAgICAgIHRyZWUua2xhc3MgPSAodHJlZS5rbGFzc3x8JycpICsgJyB0aGVtZSc7XG4gICAgICByZXR1cm4gYWN0aXZlQ2hpbGQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=