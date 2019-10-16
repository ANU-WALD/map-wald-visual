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
var map_wald_1 = require("map-wald");
var layered_map_component_1 = require("../layered-map/layered-map.component");
var LayerControlComponent = /** @class */ (function () {
    function LayerControlComponent(metadata) {
        this.metadata = metadata;
        this.allowRemove = true;
        this.showLegends = true;
        this.allowReorder = true;
        this.layersChange = new core_1.EventEmitter();
        this.foo = 'bar';
    }
    LayerControlComponent.prototype.ngAfterViewInit = function () {
    };
    LayerControlComponent.prototype.ngOnChanges = function (changes) {
        if (!changes.layers || !this.layers) {
            return;
        }
        this.applyViewMode();
        this.fetchMetadata();
    };
    LayerControlComponent.prototype.applyViewMode = function () {
        var _this = this;
        if (this.uniformViewMode === undefined) {
            return;
        }
        this.layers.forEach(function (l) { return l.options.legend = _this.uniformViewMode; });
    };
    LayerControlComponent.prototype.allLegends = function (showLegend) {
        this.uniformViewMode = showLegend;
        this.layers.forEach(function (l) { return l.options.legend = showLegend; });
    };
    LayerControlComponent.prototype.layerLegend = function (layer, showLegend) {
        this.uniformViewMode = undefined;
        layer.options.legend = showLegend;
    };
    LayerControlComponent.prototype.moveToTop = function (idx) {
        this.layers = [this.layers[idx]].concat(this.layers.slice(0, idx)).concat(this.layers.slice(idx + 1));
        this._changed();
    };
    LayerControlComponent.prototype.moveUp = function (idx) {
        if (idx === 0) {
            return;
        }
        var layers = this.layers;
        this.layers = layers.slice(0, idx - 1).concat([layers[idx], layers[idx - 1]]).concat(layers.slice(idx + 1));
        this._changed();
    };
    LayerControlComponent.prototype.moveDown = function (idx) {
        if (idx === (this.layers.length - 1)) {
            return;
        }
        var layers = this.layers;
        this.layers = layers.slice(0, idx).concat([layers[idx + 1], layers[idx]]).concat(layers.slice(idx + 2));
        this._changed();
    };
    LayerControlComponent.prototype.moveToBottom = function (idx) {
        this.layers = this.layers.slice(0, idx).concat(this.layers.slice(idx + 1)).concat([this.layers[idx]]);
        this._changed();
    };
    LayerControlComponent.prototype.removeLayer = function (idx) {
        var layers = this.layers.slice();
        layers.splice(idx, 1);
        this.layers = layers;
        this._changed();
    };
    LayerControlComponent.prototype.layerPropertyChanged = function (l) {
        this.layers = this.layers.slice();
        this._changed();
    };
    LayerControlComponent.prototype._changed = function () {
        this.fetchMetadata();
        this.layersChange.emit(this.layers);
    };
    LayerControlComponent.prototype.fetchMetadata = function () {
        var _this = this;
        this.layers.forEach(function (ml) {
            _this.metadata.populateMetadata(ml);
        });
    };
    LayerControlComponent.ctorParameters = function () { return [
        { type: map_wald_1.MetadataService }
    ]; };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], LayerControlComponent.prototype, "layers", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", layered_map_component_1.LayeredMapComponent)
    ], LayerControlComponent.prototype, "map", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], LayerControlComponent.prototype, "allowRemove", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], LayerControlComponent.prototype, "showLegends", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], LayerControlComponent.prototype, "allowReorder", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], LayerControlComponent.prototype, "layersChange", void 0);
    LayerControlComponent = __decorate([
        core_1.Component({
            selector: 'layer-control',
            template: "<div class=\"layers-control\">\n  <div *ngIf=\"showLegends\" class=\"layers-control-header\"> <!-- header -->\n    <div class=\"float-right\">\n      <!-- TODO Attach handlers and tooltips to each icon -->\n      <i class=\"fa fa-lg fa-cog discrete-icon\" (click)=\"allLegends(false)\"></i>\n      <i class=\"fa fa-lg fa-th-list discrete-icon\" (click)=\"allLegends(true)\"></i>\n    </div>\n    <br/>\n  </div>\n\n  <div *ngIf=\"layers\">\n    <div *ngFor=\"let l of layers; let i = index\"\n         class=\"layer-control d-flex justify-content-between\">\n      <div class=\"p-2\" style=\"width:100%\">\n        <div *ngIf=\"showLegends&&l.options.legend\">\n          <div *ngIf=\"l.flattenedSettings?.palette || l.legendURL\">\n            <map-legend [title]=\"l.title\"\n              [imageURL]=\"l.legendURL\"\n              [helpText]=\"l.description()\"\n              [mapUnits]=\"l.flattenedSettings?.units\"\n              [cbPalette]=\"l.flattenedSettings?.palette?.name||l.flattenedSettings?.palette\"\n              [cbCount]=\"l.flattenedSettings?.numcolorbands||l.flattenedSettings?.palette?.count\"\n              [cbReverse]=\"l.flattenedSettings?.palette?.reverse\"\n              [cbRange]=\"l.flattenedSettings?.colorscalerange\">\n            </map-legend>\n          </div>\n        </div>\n\n        <div *ngIf=\"!showLegends||!l.options.legend\">\n          <layer-properties [layer]=\"l\"\n                            [map]=\"map\"\n                            (propertyChanged)=\"layerPropertyChanged($event)\">\n          </layer-properties>\n        </div>\n      </div>\n      <div class=\"p-2\">\n          <div>\n            <!-- TODO Attach handlers and tooltips to each icon -->\n            <i *ngIf=\"allowReorder\" class=\"fa fa-bars discrete-icon\"></i><br *ngIf=\"allowReorder\"/>\n            <i *ngIf=\"showLegends\" class=\"fa fa-cog discrete-icon\"\n               ngbTooltip=\"Show layer controls\" placement=\"right\" data-container=\"body\"\n               (click)=\"layerLegend(l,false)\"></i><br *ngIf=\"showLegends\"/>\n            <i *ngIf=\"showLegends\" class=\"fa fa-th-list discrete-icon\"\n               ngbTooltip=\"Show layer data\" placement=\"right\" data-container=\"body\"\n               (click)=\"layerLegend(l,true)\"></i><br *ngIf=\"showLegends\"/>\n            <i *ngIf=\"allowReorder\" class=\"fa fa-angle-double-up discrete-icon\"\n               ngbTooltip=\"Move to top\" placement=\"right\" data-container=\"body\"\n              (click)=\"moveToTop(i)\"></i><br *ngIf=\"allowReorder\"/>\n            <i *ngIf=\"allowReorder\" class=\"fa fa-angle-up discrete-icon\"\n               ngbTooltip=\"Move up\" placement=\"right\" data-container=\"body\"\n              (click)=\"moveUp(i)\"></i><br *ngIf=\"allowReorder\"/>\n            <i *ngIf=\"allowReorder\" class=\"fa fa-angle-down discrete-icon\"\n               ngbTooltip=\"Move down\" placement=\"right\" data-container=\"body\"\n              (click)=\"moveDown(i)\"></i><br *ngIf=\"allowReorder\"/>\n            <i *ngIf=\"allowReorder\" class=\"fa fa-angle-double-down discrete-icon\"\n               ngbTooltip=\"Move to bottom\" placement=\"right\" data-container=\"body\"\n              (click)=\"moveToBottom(i)\"></i><br *ngIf=\"allowReorder\"/>\n            <i *ngIf=\"allowRemove\" class=\"fa fa-times discrete-icon\"\n               ngbTooltip=\"Remove layer\" placement=\"right\" data-container=\"body\"\n              data-toggle=\"tooltip\" title=\"Remove layer\"\n              (click)=\"removeLayer(i)\"></i>\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n\n<!-- Should this control be outside the map? eg to the left? -->\n",
            styles: [".layers-control{\n  width:200px;\n}\n\n\n.layers-control-header, .layer-control{\n  border-bottom: 1.5px solid #aaa;\n}"]
        }),
        __metadata("design:paramtypes", [map_wald_1.MetadataService])
    ], LayerControlComponent);
    return LayerControlComponent;
}());
exports.LayerControlComponent = LayerControlComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJsYXllci1jb250cm9sL2xheWVyLWNvbnRyb2wuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXVJO0FBQ3ZJLHFDQUF3RDtBQUN4RCw4RUFBMkU7QUFtRjNFO0lBVUUsK0JBQW9CLFFBQXdCO1FBQXhCLGFBQVEsR0FBUixRQUFRLENBQWdCO1FBUG5DLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsSUFBSSxtQkFBWSxFQUFpQixDQUFDO1FBRTNELFFBQUcsR0FBVyxLQUFLLENBQUM7SUFJcEIsQ0FBQztJQUVELCtDQUFlLEdBQWY7SUFDQSxDQUFDO0lBRUQsMkNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNuQyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCw2Q0FBYSxHQUFiO1FBQUEsaUJBTUM7UUFMQyxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssU0FBUyxFQUFFO1lBQ3RDLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLGVBQWUsRUFBdkMsQ0FBdUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCwwQ0FBVSxHQUFWLFVBQVcsVUFBbUI7UUFDNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxVQUFVLENB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RSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxvREFBb0IsR0FBcEIsVUFBcUIsQ0FBYztRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFTyx3Q0FBUSxHQUFoQjtRQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELDZDQUFhLEdBQWI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsRUFBRTtZQUNwQixLQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQzs7Z0JBcEY0QiwwQkFBZTs7SUFUbkM7UUFBUixZQUFLLEVBQUU7O3lEQUF1QjtJQUN0QjtRQUFSLFlBQUssRUFBRTtrQ0FBTSwyQ0FBbUI7c0RBQUM7SUFDekI7UUFBUixZQUFLLEVBQUU7OzhEQUFvQjtJQUNuQjtRQUFSLFlBQUssRUFBRTs7OERBQW9CO0lBQ25CO1FBQVIsWUFBSyxFQUFFOzsrREFBcUI7SUFDbkI7UUFBVCxhQUFNLEVBQUU7OytEQUFrRDtJQU5oRCxxQkFBcUI7UUE5RWpDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsNG1IQW9FWDtxQkFBVSx5SEFPVDtTQUFFLENBQUM7eUNBVzBCLDBCQUFlO09BVmpDLHFCQUFxQixDQStGakM7SUFBRCw0QkFBQztDQUFBLEFBL0ZELElBK0ZDO0FBL0ZZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFwcGVkTGF5ZXIsIE1ldGFkYXRhU2VydmljZSB9IGZyb20gXCJtYXAtd2FsZFwiO1xuaW1wb3J0IHsgTGF5ZXJlZE1hcENvbXBvbmVudCB9IGZyb20gJy4uL2xheWVyZWQtbWFwL2xheWVyZWQtbWFwLmNvbXBvbmVudCc7XG5cblxuZGVjbGFyZSB2YXIgUGxvdGx5OiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xheWVyLWNvbnRyb2wnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJsYXllcnMtY29udHJvbFwiPlxuICA8ZGl2ICpuZ0lmPVwic2hvd0xlZ2VuZHNcIiBjbGFzcz1cImxheWVycy1jb250cm9sLWhlYWRlclwiPiA8IS0tIGhlYWRlciAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiZmxvYXQtcmlnaHRcIj5cbiAgICAgIDwhLS0gVE9ETyBBdHRhY2ggaGFuZGxlcnMgYW5kIHRvb2x0aXBzIHRvIGVhY2ggaWNvbiAtLT5cbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbGcgZmEtY29nIGRpc2NyZXRlLWljb25cIiAoY2xpY2spPVwiYWxsTGVnZW5kcyhmYWxzZSlcIj48L2k+XG4gICAgICA8aSBjbGFzcz1cImZhIGZhLWxnIGZhLXRoLWxpc3QgZGlzY3JldGUtaWNvblwiIChjbGljayk9XCJhbGxMZWdlbmRzKHRydWUpXCI+PC9pPlxuICAgIDwvZGl2PlxuICAgIDxici8+XG4gIDwvZGl2PlxuXG4gIDxkaXYgKm5nSWY9XCJsYXllcnNcIj5cbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBsIG9mIGxheWVyczsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgICBjbGFzcz1cImxheWVyLWNvbnRyb2wgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicC0yXCIgc3R5bGU9XCJ3aWR0aDoxMDAlXCI+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJzaG93TGVnZW5kcyYmbC5vcHRpb25zLmxlZ2VuZFwiPlxuICAgICAgICAgIDxkaXYgKm5nSWY9XCJsLmZsYXR0ZW5lZFNldHRpbmdzPy5wYWxldHRlIHx8IGwubGVnZW5kVVJMXCI+XG4gICAgICAgICAgICA8bWFwLWxlZ2VuZCBbdGl0bGVdPVwibC50aXRsZVwiXG4gICAgICAgICAgICAgIFtpbWFnZVVSTF09XCJsLmxlZ2VuZFVSTFwiXG4gICAgICAgICAgICAgIFtoZWxwVGV4dF09XCJsLmRlc2NyaXB0aW9uKClcIlxuICAgICAgICAgICAgICBbbWFwVW5pdHNdPVwibC5mbGF0dGVuZWRTZXR0aW5ncz8udW5pdHNcIlxuICAgICAgICAgICAgICBbY2JQYWxldHRlXT1cImwuZmxhdHRlbmVkU2V0dGluZ3M/LnBhbGV0dGU/Lm5hbWV8fGwuZmxhdHRlbmVkU2V0dGluZ3M/LnBhbGV0dGVcIlxuICAgICAgICAgICAgICBbY2JDb3VudF09XCJsLmZsYXR0ZW5lZFNldHRpbmdzPy5udW1jb2xvcmJhbmRzfHxsLmZsYXR0ZW5lZFNldHRpbmdzPy5wYWxldHRlPy5jb3VudFwiXG4gICAgICAgICAgICAgIFtjYlJldmVyc2VdPVwibC5mbGF0dGVuZWRTZXR0aW5ncz8ucGFsZXR0ZT8ucmV2ZXJzZVwiXG4gICAgICAgICAgICAgIFtjYlJhbmdlXT1cImwuZmxhdHRlbmVkU2V0dGluZ3M/LmNvbG9yc2NhbGVyYW5nZVwiPlxuICAgICAgICAgICAgPC9tYXAtbGVnZW5kPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2ICpuZ0lmPVwiIXNob3dMZWdlbmRzfHwhbC5vcHRpb25zLmxlZ2VuZFwiPlxuICAgICAgICAgIDxsYXllci1wcm9wZXJ0aWVzIFtsYXllcl09XCJsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWFwXT1cIm1hcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHByb3BlcnR5Q2hhbmdlZCk9XCJsYXllclByb3BlcnR5Q2hhbmdlZCgkZXZlbnQpXCI+XG4gICAgICAgICAgPC9sYXllci1wcm9wZXJ0aWVzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInAtMlwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8IS0tIFRPRE8gQXR0YWNoIGhhbmRsZXJzIGFuZCB0b29sdGlwcyB0byBlYWNoIGljb24gLS0+XG4gICAgICAgICAgICA8aSAqbmdJZj1cImFsbG93UmVvcmRlclwiIGNsYXNzPVwiZmEgZmEtYmFycyBkaXNjcmV0ZS1pY29uXCI+PC9pPjxiciAqbmdJZj1cImFsbG93UmVvcmRlclwiLz5cbiAgICAgICAgICAgIDxpICpuZ0lmPVwic2hvd0xlZ2VuZHNcIiBjbGFzcz1cImZhIGZhLWNvZyBkaXNjcmV0ZS1pY29uXCJcbiAgICAgICAgICAgICAgIG5nYlRvb2x0aXA9XCJTaG93IGxheWVyIGNvbnRyb2xzXCIgcGxhY2VtZW50PVwicmlnaHRcIiBkYXRhLWNvbnRhaW5lcj1cImJvZHlcIlxuICAgICAgICAgICAgICAgKGNsaWNrKT1cImxheWVyTGVnZW5kKGwsZmFsc2UpXCI+PC9pPjxiciAqbmdJZj1cInNob3dMZWdlbmRzXCIvPlxuICAgICAgICAgICAgPGkgKm5nSWY9XCJzaG93TGVnZW5kc1wiIGNsYXNzPVwiZmEgZmEtdGgtbGlzdCBkaXNjcmV0ZS1pY29uXCJcbiAgICAgICAgICAgICAgIG5nYlRvb2x0aXA9XCJTaG93IGxheWVyIGRhdGFcIiBwbGFjZW1lbnQ9XCJyaWdodFwiIGRhdGEtY29udGFpbmVyPVwiYm9keVwiXG4gICAgICAgICAgICAgICAoY2xpY2spPVwibGF5ZXJMZWdlbmQobCx0cnVlKVwiPjwvaT48YnIgKm5nSWY9XCJzaG93TGVnZW5kc1wiLz5cbiAgICAgICAgICAgIDxpICpuZ0lmPVwiYWxsb3dSZW9yZGVyXCIgY2xhc3M9XCJmYSBmYS1hbmdsZS1kb3VibGUtdXAgZGlzY3JldGUtaWNvblwiXG4gICAgICAgICAgICAgICBuZ2JUb29sdGlwPVwiTW92ZSB0byB0b3BcIiBwbGFjZW1lbnQ9XCJyaWdodFwiIGRhdGEtY29udGFpbmVyPVwiYm9keVwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJtb3ZlVG9Ub3AoaSlcIj48L2k+PGJyICpuZ0lmPVwiYWxsb3dSZW9yZGVyXCIvPlxuICAgICAgICAgICAgPGkgKm5nSWY9XCJhbGxvd1Jlb3JkZXJcIiBjbGFzcz1cImZhIGZhLWFuZ2xlLXVwIGRpc2NyZXRlLWljb25cIlxuICAgICAgICAgICAgICAgbmdiVG9vbHRpcD1cIk1vdmUgdXBcIiBwbGFjZW1lbnQ9XCJyaWdodFwiIGRhdGEtY29udGFpbmVyPVwiYm9keVwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJtb3ZlVXAoaSlcIj48L2k+PGJyICpuZ0lmPVwiYWxsb3dSZW9yZGVyXCIvPlxuICAgICAgICAgICAgPGkgKm5nSWY9XCJhbGxvd1Jlb3JkZXJcIiBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvd24gZGlzY3JldGUtaWNvblwiXG4gICAgICAgICAgICAgICBuZ2JUb29sdGlwPVwiTW92ZSBkb3duXCIgcGxhY2VtZW50PVwicmlnaHRcIiBkYXRhLWNvbnRhaW5lcj1cImJvZHlcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwibW92ZURvd24oaSlcIj48L2k+PGJyICpuZ0lmPVwiYWxsb3dSZW9yZGVyXCIvPlxuICAgICAgICAgICAgPGkgKm5nSWY9XCJhbGxvd1Jlb3JkZXJcIiBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvdWJsZS1kb3duIGRpc2NyZXRlLWljb25cIlxuICAgICAgICAgICAgICAgbmdiVG9vbHRpcD1cIk1vdmUgdG8gYm90dG9tXCIgcGxhY2VtZW50PVwicmlnaHRcIiBkYXRhLWNvbnRhaW5lcj1cImJvZHlcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwibW92ZVRvQm90dG9tKGkpXCI+PC9pPjxiciAqbmdJZj1cImFsbG93UmVvcmRlclwiLz5cbiAgICAgICAgICAgIDxpICpuZ0lmPVwiYWxsb3dSZW1vdmVcIiBjbGFzcz1cImZhIGZhLXRpbWVzIGRpc2NyZXRlLWljb25cIlxuICAgICAgICAgICAgICAgbmdiVG9vbHRpcD1cIlJlbW92ZSBsYXllclwiIHBsYWNlbWVudD1cInJpZ2h0XCIgZGF0YS1jb250YWluZXI9XCJib2R5XCJcbiAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJSZW1vdmUgbGF5ZXJcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwicmVtb3ZlTGF5ZXIoaSlcIj48L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjwhLS0gU2hvdWxkIHRoaXMgY29udHJvbCBiZSBvdXRzaWRlIHRoZSBtYXA/IGVnIHRvIHRoZSBsZWZ0PyAtLT5cbmAsc3R5bGVzOiBbYC5sYXllcnMtY29udHJvbHtcbiAgd2lkdGg6MjAwcHg7XG59XG5cblxuLmxheWVycy1jb250cm9sLWhlYWRlciwgLmxheWVyLWNvbnRyb2x7XG4gIGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkICNhYWE7XG59YF19KVxuZXhwb3J0IGNsYXNzIExheWVyQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGxheWVyczogTWFwcGVkTGF5ZXJbXTtcbiAgQElucHV0KCkgbWFwOiBMYXllcmVkTWFwQ29tcG9uZW50O1xuICBASW5wdXQoKSBhbGxvd1JlbW92ZSA9IHRydWU7XG4gIEBJbnB1dCgpIHNob3dMZWdlbmRzID0gdHJ1ZTtcbiAgQElucHV0KCkgYWxsb3dSZW9yZGVyID0gdHJ1ZTtcbiAgQE91dHB1dCgpIGxheWVyc0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwcGVkTGF5ZXJbXT4oKTtcbiAgdW5pZm9ybVZpZXdNb2RlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICBmb286IHN0cmluZyA9ICdiYXInO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWV0YWRhdGE6TWV0YWRhdGFTZXJ2aWNlKSB7XG5cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoIWNoYW5nZXMubGF5ZXJzIHx8ICF0aGlzLmxheWVycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmFwcGx5Vmlld01vZGUoKTtcbiAgICB0aGlzLmZldGNoTWV0YWRhdGEoKTtcbiAgfVxuXG4gIGFwcGx5Vmlld01vZGUoKXtcbiAgICBpZiAodGhpcy51bmlmb3JtVmlld01vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobCA9PiBsLm9wdGlvbnMubGVnZW5kID0gdGhpcy51bmlmb3JtVmlld01vZGUpO1xuICB9XG5cbiAgYWxsTGVnZW5kcyhzaG93TGVnZW5kOiBib29sZWFuKSB7XG4gICAgdGhpcy51bmlmb3JtVmlld01vZGUgPSBzaG93TGVnZW5kO1xuICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobCA9PiBsLm9wdGlvbnMubGVnZW5kID0gc2hvd0xlZ2VuZCk7XG4gIH1cblxuICBsYXllckxlZ2VuZChsYXllcjogTWFwcGVkTGF5ZXIsIHNob3dMZWdlbmQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnVuaWZvcm1WaWV3TW9kZSA9IHVuZGVmaW5lZDtcbiAgICBsYXllci5vcHRpb25zLmxlZ2VuZCA9IHNob3dMZWdlbmQ7XG4gIH1cblxuICBtb3ZlVG9Ub3AoaWR4OiBudW1iZXIpIHtcbiAgICB0aGlzLmxheWVycyA9IFt0aGlzLmxheWVyc1tpZHhdXS5jb25jYXQodGhpcy5sYXllcnMuc2xpY2UoMCwgaWR4KSkuY29uY2F0KHRoaXMubGF5ZXJzLnNsaWNlKGlkeCArIDEpKTtcbiAgICB0aGlzLl9jaGFuZ2VkKCk7XG4gIH1cblxuICBtb3ZlVXAoaWR4OiBudW1iZXIpIHtcbiAgICBpZiAoaWR4ID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGxheWVycyA9IHRoaXMubGF5ZXJzO1xuICAgIHRoaXMubGF5ZXJzID0gbGF5ZXJzLnNsaWNlKDAsIGlkeCAtIDEpLmNvbmNhdChbbGF5ZXJzW2lkeF0sIGxheWVyc1tpZHggLSAxXV0pLmNvbmNhdChsYXllcnMuc2xpY2UoaWR4ICsgMSkpO1xuICAgIHRoaXMuX2NoYW5nZWQoKTtcbiAgfVxuXG4gIG1vdmVEb3duKGlkeDogbnVtYmVyKSB7XG4gICAgaWYgKGlkeCA9PT0gKHRoaXMubGF5ZXJzLmxlbmd0aCAtIDEpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGxheWVycyA9IHRoaXMubGF5ZXJzO1xuICAgIHRoaXMubGF5ZXJzID0gbGF5ZXJzLnNsaWNlKDAsIGlkeCkuY29uY2F0KFtsYXllcnNbaWR4ICsgMV0sIGxheWVyc1tpZHhdXSkuY29uY2F0KGxheWVycy5zbGljZShpZHggKyAyKSk7XG4gICAgdGhpcy5fY2hhbmdlZCgpO1xuICB9XG5cbiAgbW92ZVRvQm90dG9tKGlkeDogbnVtYmVyKSB7XG4gICAgdGhpcy5sYXllcnMgPSB0aGlzLmxheWVycy5zbGljZSgwLCBpZHgpLmNvbmNhdCh0aGlzLmxheWVycy5zbGljZShpZHggKyAxKSkuY29uY2F0KFt0aGlzLmxheWVyc1tpZHhdXSk7XG4gICAgdGhpcy5fY2hhbmdlZCgpO1xuICB9XG5cbiAgcmVtb3ZlTGF5ZXIoaWR4OiBudW1iZXIpIHtcbiAgICB2YXIgbGF5ZXJzID0gdGhpcy5sYXllcnMuc2xpY2UoKTtcbiAgICBsYXllcnMuc3BsaWNlKGlkeCwgMSk7XG4gICAgdGhpcy5sYXllcnMgPSBsYXllcnM7XG4gICAgdGhpcy5fY2hhbmdlZCgpO1xuICB9XG5cbiAgbGF5ZXJQcm9wZXJ0eUNoYW5nZWQobDogTWFwcGVkTGF5ZXIpIHtcbiAgICB0aGlzLmxheWVycyA9IHRoaXMubGF5ZXJzLnNsaWNlKCk7XG4gICAgdGhpcy5fY2hhbmdlZCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2hhbmdlZCgpIHtcbiAgICB0aGlzLmZldGNoTWV0YWRhdGEoKTtcbiAgICB0aGlzLmxheWVyc0NoYW5nZS5lbWl0KHRoaXMubGF5ZXJzKTtcbiAgfVxuXG4gIGZldGNoTWV0YWRhdGEoKXtcbiAgICB0aGlzLmxheWVycy5mb3JFYWNoKG1sPT57XG4gICAgICB0aGlzLm1ldGFkYXRhLnBvcHVsYXRlTWV0YWRhdGEobWwpO1xuICAgIH0pXG4gIH1cbn1cbiJdfQ==