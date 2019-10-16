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
var SimpleTreeComponent = /** @class */ (function () {
    function SimpleTreeComponent() {
        this.showTop = true;
        this.collapsedIcon = 'fa fa-caret-right';
        this.expandedIcon = 'fa fa-caret-down';
        this.leafIcon = 'fa fa-minus';
        this.nodeSelected = new core_1.EventEmitter();
        this.options = {};
    }
    SimpleTreeComponent.prototype.ngAfterViewInit = function () {
    };
    SimpleTreeComponent.prototype.ngOnChanges = function (changes) {
        if (changes.options) {
            return;
        }
        this.options = {
            collapsedIcon: this.collapsedIcon,
            expandedIcon: this.expandedIcon,
            leafIcon: this.leafIcon
        };
    };
    SimpleTreeComponent.prototype.childSelected = function (node) {
        this.nodeSelected.emit(node);
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
            template: "<div *ngIf=\"tree&&tree.visible\" class=\"simple-tree\">\n\n  <div *ngIf=\"inner\">\n    <li ><simple-tree-node [tree]=\"tree\"\n                           [options]=\"options\"\n                           (nodeSelected)=\"childSelected($event)\"></simple-tree-node>\n      <ul *ngIf=\"tree.children&&tree.expanded\" class=\"inner-list\">\n        <simple-tree *ngFor=\"let t of tree.children\" [tree]=\"t\" [inner]=\"true\"\n                    (nodeSelected)=\"childSelected($event)\"\n                    [options]=\"options\"></simple-tree>\n      </ul>\n    </li>\n  </div>\n\n  <div *ngIf=\"!inner&&showTop\">\n    <ul class=\"outer-list\">\n      <li><simple-tree-node [tree]=\"tree\" [options]=\"options\"\n        (nodeSelected)=\"childSelected($event)\"></simple-tree-node>\n        <ul *ngIf=\"tree.children&&tree.expanded\" class=\"inner-list\">\n            <simple-tree *ngFor=\"let t of tree.children\" [tree]=\"t\" [inner]=\"true\"\n            (nodeSelected)=\"childSelected($event)\"\n            [options]=\"options\"></simple-tree>\n        </ul>\n      </li>\n    </ul>\n  </div>\n\n  <div *ngIf=\"!inner&&!showTop\">\n      <ul *ngIf=\"tree.children&&tree.expanded\" class=\"outer-list\">\n          <simple-tree *ngFor=\"let t of tree.children\" [tree]=\"t\" [inner]=\"true\"\n          (nodeSelected)=\"childSelected($event)\"\n          [options]=\"options\"></simple-tree>\n      </ul>\n    </div>\n\n</div>\n",
            styles: ["\n.simple-tree ul{\n  list-style-type: none\n}\n\nul.outer-list{\n  padding-left:5px;\n}\n\nul.inner-list{\n  padding-left:15px;\n}"]
        }),
        __metadata("design:paramtypes", [])
    ], SimpleTreeComponent);
    return SimpleTreeComponent;
}());
exports.SimpleTreeComponent = SimpleTreeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLXRyZWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtdmlzdWFsLyIsInNvdXJjZXMiOlsic2ltcGxlLXRyZWUvc2ltcGxlLXRyZWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXVJO0FBdUR2STtJQWFFO1FBWFMsWUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixrQkFBYSxHQUFHLG1CQUFtQixDQUFDO1FBQ3BDLGlCQUFZLEdBQUcsa0JBQWtCLENBQUM7UUFDbEMsYUFBUSxHQUFHLGFBQWEsQ0FBQztRQUV4QixpQkFBWSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBRW5DLFlBQU8sR0FBTyxFQUFFLENBQUM7SUFJMUIsQ0FBQztJQUVELDZDQUFlLEdBQWY7SUFFQSxDQUFDO0lBRUQseUNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUcsT0FBTyxDQUFDLE9BQU8sRUFBQztZQUNqQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsYUFBYSxFQUFDLElBQUksQ0FBQyxhQUFhO1lBQ2hDLFlBQVksRUFBQyxJQUFJLENBQUMsWUFBWTtZQUM5QixRQUFRLEVBQUMsSUFBSSxDQUFDLFFBQVE7U0FDdkIsQ0FBQztJQUNKLENBQUM7SUFFRCwyQ0FBYSxHQUFiLFVBQWMsSUFBYztRQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBbENRO1FBQVIsWUFBSyxFQUFFOztxREFBaUI7SUFDaEI7UUFBUixZQUFLLEVBQUU7O3dEQUF5QjtJQUN4QjtRQUFSLFlBQUssRUFBRTs7c0RBQWdCO0lBRWY7UUFBUixZQUFLLEVBQUU7OzhEQUFxQztJQUNwQztRQUFSLFlBQUssRUFBRTs7NkRBQW1DO0lBQ2xDO1FBQVIsWUFBSyxFQUFFOzt5REFBMEI7SUFFeEI7UUFBVCxhQUFNLEVBQUU7OzZEQUFtQztJQUVuQztRQUFSLFlBQUssRUFBRTs7d0RBQWtCO0lBWGYsbUJBQW1CO1FBbEQvQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLDY1Q0FvQ1g7cUJBQVUscUlBV1Q7U0FBRSxDQUFDOztPQUNRLG1CQUFtQixDQXFDL0I7SUFBRCwwQkFBQztDQUFBLEFBckNELElBcUNDO0FBckNZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJlZU1vZGVsIH0gZnJvbSAnbWFwLXdhbGQnO1xuXG5kZWNsYXJlIHZhciBQbG90bHk6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2ltcGxlLXRyZWUnLFxuICB0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCJ0cmVlJiZ0cmVlLnZpc2libGVcIiBjbGFzcz1cInNpbXBsZS10cmVlXCI+XG5cbiAgPGRpdiAqbmdJZj1cImlubmVyXCI+XG4gICAgPGxpID48c2ltcGxlLXRyZWUtbm9kZSBbdHJlZV09XCJ0cmVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtvcHRpb25zXT1cIm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKG5vZGVTZWxlY3RlZCk9XCJjaGlsZFNlbGVjdGVkKCRldmVudClcIj48L3NpbXBsZS10cmVlLW5vZGU+XG4gICAgICA8dWwgKm5nSWY9XCJ0cmVlLmNoaWxkcmVuJiZ0cmVlLmV4cGFuZGVkXCIgY2xhc3M9XCJpbm5lci1saXN0XCI+XG4gICAgICAgIDxzaW1wbGUtdHJlZSAqbmdGb3I9XCJsZXQgdCBvZiB0cmVlLmNoaWxkcmVuXCIgW3RyZWVdPVwidFwiIFtpbm5lcl09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgKG5vZGVTZWxlY3RlZCk9XCJjaGlsZFNlbGVjdGVkKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICBbb3B0aW9uc109XCJvcHRpb25zXCI+PC9zaW1wbGUtdHJlZT5cbiAgICAgIDwvdWw+XG4gICAgPC9saT5cbiAgPC9kaXY+XG5cbiAgPGRpdiAqbmdJZj1cIiFpbm5lciYmc2hvd1RvcFwiPlxuICAgIDx1bCBjbGFzcz1cIm91dGVyLWxpc3RcIj5cbiAgICAgIDxsaT48c2ltcGxlLXRyZWUtbm9kZSBbdHJlZV09XCJ0cmVlXCIgW29wdGlvbnNdPVwib3B0aW9uc1wiXG4gICAgICAgIChub2RlU2VsZWN0ZWQpPVwiY2hpbGRTZWxlY3RlZCgkZXZlbnQpXCI+PC9zaW1wbGUtdHJlZS1ub2RlPlxuICAgICAgICA8dWwgKm5nSWY9XCJ0cmVlLmNoaWxkcmVuJiZ0cmVlLmV4cGFuZGVkXCIgY2xhc3M9XCJpbm5lci1saXN0XCI+XG4gICAgICAgICAgICA8c2ltcGxlLXRyZWUgKm5nRm9yPVwibGV0IHQgb2YgdHJlZS5jaGlsZHJlblwiIFt0cmVlXT1cInRcIiBbaW5uZXJdPVwidHJ1ZVwiXG4gICAgICAgICAgICAobm9kZVNlbGVjdGVkKT1cImNoaWxkU2VsZWN0ZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICBbb3B0aW9uc109XCJvcHRpb25zXCI+PC9zaW1wbGUtdHJlZT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgPC9kaXY+XG5cbiAgPGRpdiAqbmdJZj1cIiFpbm5lciYmIXNob3dUb3BcIj5cbiAgICAgIDx1bCAqbmdJZj1cInRyZWUuY2hpbGRyZW4mJnRyZWUuZXhwYW5kZWRcIiBjbGFzcz1cIm91dGVyLWxpc3RcIj5cbiAgICAgICAgICA8c2ltcGxlLXRyZWUgKm5nRm9yPVwibGV0IHQgb2YgdHJlZS5jaGlsZHJlblwiIFt0cmVlXT1cInRcIiBbaW5uZXJdPVwidHJ1ZVwiXG4gICAgICAgICAgKG5vZGVTZWxlY3RlZCk9XCJjaGlsZFNlbGVjdGVkKCRldmVudClcIlxuICAgICAgICAgIFtvcHRpb25zXT1cIm9wdGlvbnNcIj48L3NpbXBsZS10cmVlPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cblxuPC9kaXY+XG5gLHN0eWxlczogW2Bcbi5zaW1wbGUtdHJlZSB1bHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lXG59XG5cbnVsLm91dGVyLWxpc3R7XG4gIHBhZGRpbmctbGVmdDo1cHg7XG59XG5cbnVsLmlubmVyLWxpc3R7XG4gIHBhZGRpbmctbGVmdDoxNXB4O1xufWBdfSlcbmV4cG9ydCBjbGFzcyBTaW1wbGVUcmVlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgdHJlZTogVHJlZU1vZGVsO1xuICBASW5wdXQoKSBzaG93VG9wOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgaW5uZXI6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgY29sbGFwc2VkSWNvbiA9ICdmYSBmYS1jYXJldC1yaWdodCc7XG4gIEBJbnB1dCgpIGV4cGFuZGVkSWNvbiA9ICdmYSBmYS1jYXJldC1kb3duJztcbiAgQElucHV0KCkgbGVhZkljb24gPSAnZmEgZmEtbWludXMnO1xuXG4gIEBPdXRwdXQoKSBub2RlU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCkgb3B0aW9uczphbnkgPSB7fTtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuXG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYoY2hhbmdlcy5vcHRpb25zKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICBjb2xsYXBzZWRJY29uOnRoaXMuY29sbGFwc2VkSWNvbixcbiAgICAgIGV4cGFuZGVkSWNvbjp0aGlzLmV4cGFuZGVkSWNvbixcbiAgICAgIGxlYWZJY29uOnRoaXMubGVhZkljb25cbiAgICB9O1xuICB9XG5cbiAgY2hpbGRTZWxlY3RlZChub2RlOlRyZWVNb2RlbCl7XG4gICAgdGhpcy5ub2RlU2VsZWN0ZWQuZW1pdChub2RlKTtcbiAgfVxuXG59XG4iXX0=