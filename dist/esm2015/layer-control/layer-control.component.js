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
const layered_map_component_1 = require("../layered-map/layered-map.component");
let LayerControlComponent = class LayerControlComponent {
    constructor(metadata) {
        this.metadata = metadata;
        this.allowRemove = true;
        this.showLegends = true;
        this.allowReorder = true;
        this.layersChange = new core_1.EventEmitter();
        this.foo = 'bar';
    }
    ngAfterViewInit() {
    }
    ngOnChanges(changes) {
        if (!changes.layers || !this.layers) {
            return;
        }
        this.applyViewMode();
        this.fetchMetadata();
    }
    applyViewMode() {
        if (this.uniformViewMode === undefined) {
            return;
        }
        this.layers.forEach(l => l.options.legend = this.uniformViewMode);
    }
    allLegends(showLegend) {
        this.uniformViewMode = showLegend;
        this.layers.forEach(l => l.options.legend = showLegend);
    }
    layerLegend(layer, showLegend) {
        this.uniformViewMode = undefined;
        layer.options.legend = showLegend;
    }
    moveToTop(idx) {
        this.layers = [this.layers[idx]].concat(this.layers.slice(0, idx)).concat(this.layers.slice(idx + 1));
        this._changed();
    }
    moveUp(idx) {
        if (idx === 0) {
            return;
        }
        var layers = this.layers;
        this.layers = layers.slice(0, idx - 1).concat([layers[idx], layers[idx - 1]]).concat(layers.slice(idx + 1));
        this._changed();
    }
    moveDown(idx) {
        if (idx === (this.layers.length - 1)) {
            return;
        }
        var layers = this.layers;
        this.layers = layers.slice(0, idx).concat([layers[idx + 1], layers[idx]]).concat(layers.slice(idx + 2));
        this._changed();
    }
    moveToBottom(idx) {
        this.layers = this.layers.slice(0, idx).concat(this.layers.slice(idx + 1)).concat([this.layers[idx]]);
        this._changed();
    }
    removeLayer(idx) {
        var layers = this.layers.slice();
        layers.splice(idx, 1);
        this.layers = layers;
        this._changed();
    }
    layerPropertyChanged(l) {
        this.layers = this.layers.slice();
        this._changed();
    }
    _changed() {
        this.fetchMetadata();
        this.layersChange.emit(this.layers);
    }
    fetchMetadata() {
        this.layers.forEach(ml => {
            this.metadata.populateMetadata(ml);
        });
    }
};
LayerControlComponent.ctorParameters = () => [
    { type: map_wald_1.MetadataService }
];
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
        template: `<div class="layers-control">
  <div *ngIf="showLegends" class="layers-control-header"> <!-- header -->
    <div class="float-right">
      <!-- TODO Attach handlers and tooltips to each icon -->
      <i class="fa fa-lg fa-cog discrete-icon" (click)="allLegends(false)"></i>
      <i class="fa fa-lg fa-th-list discrete-icon" (click)="allLegends(true)"></i>
    </div>
    <br/>
  </div>

  <div *ngIf="layers">
    <div *ngFor="let l of layers; let i = index"
         class="layer-control d-flex justify-content-between">
      <div class="p-2" style="width:100%">
        <div *ngIf="showLegends&&l.options.legend">
          <div *ngIf="l.flattenedSettings?.palette || l.legendURL">
            <map-legend [title]="l.title"
              [imageURL]="l.legendURL"
              [helpText]="l.description()"
              [mapUnits]="l.flattenedSettings?.units"
              [cbPalette]="l.flattenedSettings?.palette?.name||l.flattenedSettings?.palette"
              [cbCount]="l.flattenedSettings?.numcolorbands||l.flattenedSettings?.palette?.count"
              [cbReverse]="l.flattenedSettings?.palette?.reverse"
              [cbRange]="l.flattenedSettings?.colorscalerange">
            </map-legend>
          </div>
        </div>

        <div *ngIf="!showLegends||!l.options.legend">
          <layer-properties [layer]="l"
                            [map]="map"
                            (propertyChanged)="layerPropertyChanged($event)">
          </layer-properties>
        </div>
      </div>
      <div class="p-2">
          <div>
            <!-- TODO Attach handlers and tooltips to each icon -->
            <i *ngIf="allowReorder" class="fa fa-bars discrete-icon"></i><br *ngIf="allowReorder"/>
            <i *ngIf="showLegends" class="fa fa-cog discrete-icon"
               ngbTooltip="Show layer controls" placement="right" data-container="body"
               (click)="layerLegend(l,false)"></i><br *ngIf="showLegends"/>
            <i *ngIf="showLegends" class="fa fa-th-list discrete-icon"
               ngbTooltip="Show layer data" placement="right" data-container="body"
               (click)="layerLegend(l,true)"></i><br *ngIf="showLegends"/>
            <i *ngIf="allowReorder" class="fa fa-angle-double-up discrete-icon"
               ngbTooltip="Move to top" placement="right" data-container="body"
              (click)="moveToTop(i)"></i><br *ngIf="allowReorder"/>
            <i *ngIf="allowReorder" class="fa fa-angle-up discrete-icon"
               ngbTooltip="Move up" placement="right" data-container="body"
              (click)="moveUp(i)"></i><br *ngIf="allowReorder"/>
            <i *ngIf="allowReorder" class="fa fa-angle-down discrete-icon"
               ngbTooltip="Move down" placement="right" data-container="body"
              (click)="moveDown(i)"></i><br *ngIf="allowReorder"/>
            <i *ngIf="allowReorder" class="fa fa-angle-double-down discrete-icon"
               ngbTooltip="Move to bottom" placement="right" data-container="body"
              (click)="moveToBottom(i)"></i><br *ngIf="allowReorder"/>
            <i *ngIf="allowRemove" class="fa fa-times discrete-icon"
               ngbTooltip="Remove layer" placement="right" data-container="body"
              data-toggle="tooltip" title="Remove layer"
              (click)="removeLayer(i)"></i>
          </div>
        </div>
      </div>
  </div>
</div>

<!-- Should this control be outside the map? eg to the left? -->
`,
        styles: [`.layers-control{
  width:200px;
}


.layers-control-header, .layer-control{
  border-bottom: 1.5px solid #aaa;
}`]
    }),
    __metadata("design:paramtypes", [map_wald_1.MetadataService])
], LayerControlComponent);
exports.LayerControlComponent = LayerControlComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJsYXllci1jb250cm9sL2xheWVyLWNvbnRyb2wuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQXVJO0FBQ3ZJLHVDQUF3RDtBQUN4RCxnRkFBMkU7QUFtRjNFLElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBVWhDLFlBQW9CLFFBQXdCO1FBQXhCLGFBQVEsR0FBUixRQUFRLENBQWdCO1FBUG5DLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsSUFBSSxtQkFBWSxFQUFpQixDQUFDO1FBRTNELFFBQUcsR0FBVyxLQUFLLENBQUM7SUFJcEIsQ0FBQztJQUVELGVBQWU7SUFDZixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNuQyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLFNBQVMsRUFBRTtZQUN0QyxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsVUFBVSxDQUFDLFVBQW1CO1FBQzVCLElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDO1FBQ2xDLElBQUksQ0FB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LElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFTyxRQUFRO1FBQ2QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQTs7WUFyRjhCLDBCQUFlOztBQVRuQztJQUFSLFlBQUssRUFBRTs7cURBQXVCO0FBQ3RCO0lBQVIsWUFBSyxFQUFFOzhCQUFNLDJDQUFtQjtrREFBQztBQUN6QjtJQUFSLFlBQUssRUFBRTs7MERBQW9CO0FBQ25CO0lBQVIsWUFBSyxFQUFFOzswREFBb0I7QUFDbkI7SUFBUixZQUFLLEVBQUU7OzJEQUFxQjtBQUNuQjtJQUFULGFBQU0sRUFBRTs7MkRBQWtEO0FBTmhELHFCQUFxQjtJQTlFakMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FvRVg7aUJBQVU7Ozs7Ozs7RUFPVDtLQUFFLENBQUM7cUNBVzBCLDBCQUFlO0dBVmpDLHFCQUFxQixDQStGakM7QUEvRlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXBwZWRMYXllciwgTWV0YWRhdGFTZXJ2aWNlIH0gZnJvbSBcIm1hcC13YWxkXCI7XG5pbXBvcnQgeyBMYXllcmVkTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJlZC1tYXAvbGF5ZXJlZC1tYXAuY29tcG9uZW50JztcblxuXG5kZWNsYXJlIHZhciBQbG90bHk6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGF5ZXItY29udHJvbCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImxheWVycy1jb250cm9sXCI+XG4gIDxkaXYgKm5nSWY9XCJzaG93TGVnZW5kc1wiIGNsYXNzPVwibGF5ZXJzLWNvbnRyb2wtaGVhZGVyXCI+IDwhLS0gaGVhZGVyIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJmbG9hdC1yaWdodFwiPlxuICAgICAgPCEtLSBUT0RPIEF0dGFjaCBoYW5kbGVycyBhbmQgdG9vbHRpcHMgdG8gZWFjaCBpY29uIC0tPlxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1sZyBmYS1jb2cgZGlzY3JldGUtaWNvblwiIChjbGljayk9XCJhbGxMZWdlbmRzKGZhbHNlKVwiPjwvaT5cbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbGcgZmEtdGgtbGlzdCBkaXNjcmV0ZS1pY29uXCIgKGNsaWNrKT1cImFsbExlZ2VuZHModHJ1ZSlcIj48L2k+XG4gICAgPC9kaXY+XG4gICAgPGJyLz5cbiAgPC9kaXY+XG5cbiAgPGRpdiAqbmdJZj1cImxheWVyc1wiPlxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGwgb2YgbGF5ZXJzOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgIGNsYXNzPVwibGF5ZXItY29udHJvbCBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwLTJcIiBzdHlsZT1cIndpZHRoOjEwMCVcIj5cbiAgICAgICAgPGRpdiAqbmdJZj1cInNob3dMZWdlbmRzJiZsLm9wdGlvbnMubGVnZW5kXCI+XG4gICAgICAgICAgPGRpdiAqbmdJZj1cImwuZmxhdHRlbmVkU2V0dGluZ3M/LnBhbGV0dGUgfHwgbC5sZWdlbmRVUkxcIj5cbiAgICAgICAgICAgIDxtYXAtbGVnZW5kIFt0aXRsZV09XCJsLnRpdGxlXCJcbiAgICAgICAgICAgICAgW2ltYWdlVVJMXT1cImwubGVnZW5kVVJMXCJcbiAgICAgICAgICAgICAgW2hlbHBUZXh0XT1cImwuZGVzY3JpcHRpb24oKVwiXG4gICAgICAgICAgICAgIFttYXBVbml0c109XCJsLmZsYXR0ZW5lZFNldHRpbmdzPy51bml0c1wiXG4gICAgICAgICAgICAgIFtjYlBhbGV0dGVdPVwibC5mbGF0dGVuZWRTZXR0aW5ncz8ucGFsZXR0ZT8ubmFtZXx8bC5mbGF0dGVuZWRTZXR0aW5ncz8ucGFsZXR0ZVwiXG4gICAgICAgICAgICAgIFtjYkNvdW50XT1cImwuZmxhdHRlbmVkU2V0dGluZ3M/Lm51bWNvbG9yYmFuZHN8fGwuZmxhdHRlbmVkU2V0dGluZ3M/LnBhbGV0dGU/LmNvdW50XCJcbiAgICAgICAgICAgICAgW2NiUmV2ZXJzZV09XCJsLmZsYXR0ZW5lZFNldHRpbmdzPy5wYWxldHRlPy5yZXZlcnNlXCJcbiAgICAgICAgICAgICAgW2NiUmFuZ2VdPVwibC5mbGF0dGVuZWRTZXR0aW5ncz8uY29sb3JzY2FsZXJhbmdlXCI+XG4gICAgICAgICAgICA8L21hcC1sZWdlbmQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgKm5nSWY9XCIhc2hvd0xlZ2VuZHN8fCFsLm9wdGlvbnMubGVnZW5kXCI+XG4gICAgICAgICAgPGxheWVyLXByb3BlcnRpZXMgW2xheWVyXT1cImxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttYXBdPVwibWFwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocHJvcGVydHlDaGFuZ2VkKT1cImxheWVyUHJvcGVydHlDaGFuZ2VkKCRldmVudClcIj5cbiAgICAgICAgICA8L2xheWVyLXByb3BlcnRpZXM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicC0yXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDwhLS0gVE9ETyBBdHRhY2ggaGFuZGxlcnMgYW5kIHRvb2x0aXBzIHRvIGVhY2ggaWNvbiAtLT5cbiAgICAgICAgICAgIDxpICpuZ0lmPVwiYWxsb3dSZW9yZGVyXCIgY2xhc3M9XCJmYSBmYS1iYXJzIGRpc2NyZXRlLWljb25cIj48L2k+PGJyICpuZ0lmPVwiYWxsb3dSZW9yZGVyXCIvPlxuICAgICAgICAgICAgPGkgKm5nSWY9XCJzaG93TGVnZW5kc1wiIGNsYXNzPVwiZmEgZmEtY29nIGRpc2NyZXRlLWljb25cIlxuICAgICAgICAgICAgICAgbmdiVG9vbHRpcD1cIlNob3cgbGF5ZXIgY29udHJvbHNcIiBwbGFjZW1lbnQ9XCJyaWdodFwiIGRhdGEtY29udGFpbmVyPVwiYm9keVwiXG4gICAgICAgICAgICAgICAoY2xpY2spPVwibGF5ZXJMZWdlbmQobCxmYWxzZSlcIj48L2k+PGJyICpuZ0lmPVwic2hvd0xlZ2VuZHNcIi8+XG4gICAgICAgICAgICA8aSAqbmdJZj1cInNob3dMZWdlbmRzXCIgY2xhc3M9XCJmYSBmYS10aC1saXN0IGRpc2NyZXRlLWljb25cIlxuICAgICAgICAgICAgICAgbmdiVG9vbHRpcD1cIlNob3cgbGF5ZXIgZGF0YVwiIHBsYWNlbWVudD1cInJpZ2h0XCIgZGF0YS1jb250YWluZXI9XCJib2R5XCJcbiAgICAgICAgICAgICAgIChjbGljayk9XCJsYXllckxlZ2VuZChsLHRydWUpXCI+PC9pPjxiciAqbmdJZj1cInNob3dMZWdlbmRzXCIvPlxuICAgICAgICAgICAgPGkgKm5nSWY9XCJhbGxvd1Jlb3JkZXJcIiBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvdWJsZS11cCBkaXNjcmV0ZS1pY29uXCJcbiAgICAgICAgICAgICAgIG5nYlRvb2x0aXA9XCJNb3ZlIHRvIHRvcFwiIHBsYWNlbWVudD1cInJpZ2h0XCIgZGF0YS1jb250YWluZXI9XCJib2R5XCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cIm1vdmVUb1RvcChpKVwiPjwvaT48YnIgKm5nSWY9XCJhbGxvd1Jlb3JkZXJcIi8+XG4gICAgICAgICAgICA8aSAqbmdJZj1cImFsbG93UmVvcmRlclwiIGNsYXNzPVwiZmEgZmEtYW5nbGUtdXAgZGlzY3JldGUtaWNvblwiXG4gICAgICAgICAgICAgICBuZ2JUb29sdGlwPVwiTW92ZSB1cFwiIHBsYWNlbWVudD1cInJpZ2h0XCIgZGF0YS1jb250YWluZXI9XCJib2R5XCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cIm1vdmVVcChpKVwiPjwvaT48YnIgKm5nSWY9XCJhbGxvd1Jlb3JkZXJcIi8+XG4gICAgICAgICAgICA8aSAqbmdJZj1cImFsbG93UmVvcmRlclwiIGNsYXNzPVwiZmEgZmEtYW5nbGUtZG93biBkaXNjcmV0ZS1pY29uXCJcbiAgICAgICAgICAgICAgIG5nYlRvb2x0aXA9XCJNb3ZlIGRvd25cIiBwbGFjZW1lbnQ9XCJyaWdodFwiIGRhdGEtY29udGFpbmVyPVwiYm9keVwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJtb3ZlRG93bihpKVwiPjwvaT48YnIgKm5nSWY9XCJhbGxvd1Jlb3JkZXJcIi8+XG4gICAgICAgICAgICA8aSAqbmdJZj1cImFsbG93UmVvcmRlclwiIGNsYXNzPVwiZmEgZmEtYW5nbGUtZG91YmxlLWRvd24gZGlzY3JldGUtaWNvblwiXG4gICAgICAgICAgICAgICBuZ2JUb29sdGlwPVwiTW92ZSB0byBib3R0b21cIiBwbGFjZW1lbnQ9XCJyaWdodFwiIGRhdGEtY29udGFpbmVyPVwiYm9keVwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJtb3ZlVG9Cb3R0b20oaSlcIj48L2k+PGJyICpuZ0lmPVwiYWxsb3dSZW9yZGVyXCIvPlxuICAgICAgICAgICAgPGkgKm5nSWY9XCJhbGxvd1JlbW92ZVwiIGNsYXNzPVwiZmEgZmEtdGltZXMgZGlzY3JldGUtaWNvblwiXG4gICAgICAgICAgICAgICBuZ2JUb29sdGlwPVwiUmVtb3ZlIGxheWVyXCIgcGxhY2VtZW50PVwicmlnaHRcIiBkYXRhLWNvbnRhaW5lcj1cImJvZHlcIlxuICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIlJlbW92ZSBsYXllclwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJyZW1vdmVMYXllcihpKVwiPjwvaT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPCEtLSBTaG91bGQgdGhpcyBjb250cm9sIGJlIG91dHNpZGUgdGhlIG1hcD8gZWcgdG8gdGhlIGxlZnQ/IC0tPlxuYCxzdHlsZXM6IFtgLmxheWVycy1jb250cm9se1xuICB3aWR0aDoyMDBweDtcbn1cblxuXG4ubGF5ZXJzLWNvbnRyb2wtaGVhZGVyLCAubGF5ZXItY29udHJvbHtcbiAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgI2FhYTtcbn1gXX0pXG5leHBvcnQgY2xhc3MgTGF5ZXJDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbGF5ZXJzOiBNYXBwZWRMYXllcltdO1xuICBASW5wdXQoKSBtYXA6IExheWVyZWRNYXBDb21wb25lbnQ7XG4gIEBJbnB1dCgpIGFsbG93UmVtb3ZlID0gdHJ1ZTtcbiAgQElucHV0KCkgc2hvd0xlZ2VuZHMgPSB0cnVlO1xuICBASW5wdXQoKSBhbGxvd1Jlb3JkZXIgPSB0cnVlO1xuICBAT3V0cHV0KCkgbGF5ZXJzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBwZWRMYXllcltdPigpO1xuICB1bmlmb3JtVmlld01vZGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gIGZvbzogc3RyaW5nID0gJ2Jhcic7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtZXRhZGF0YTpNZXRhZGF0YVNlcnZpY2UpIHtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICghY2hhbmdlcy5sYXllcnMgfHwgIXRoaXMubGF5ZXJzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYXBwbHlWaWV3TW9kZSgpO1xuICAgIHRoaXMuZmV0Y2hNZXRhZGF0YSgpO1xuICB9XG5cbiAgYXBwbHlWaWV3TW9kZSgpe1xuICAgIGlmICh0aGlzLnVuaWZvcm1WaWV3TW9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5sYXllcnMuZm9yRWFjaChsID0+IGwub3B0aW9ucy5sZWdlbmQgPSB0aGlzLnVuaWZvcm1WaWV3TW9kZSk7XG4gIH1cblxuICBhbGxMZWdlbmRzKHNob3dMZWdlbmQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnVuaWZvcm1WaWV3TW9kZSA9IHNob3dMZWdlbmQ7XG4gICAgdGhpcy5sYXllcnMuZm9yRWFjaChsID0+IGwub3B0aW9ucy5sZWdlbmQgPSBzaG93TGVnZW5kKTtcbiAgfVxuXG4gIGxheWVyTGVnZW5kKGxheWVyOiBNYXBwZWRMYXllciwgc2hvd0xlZ2VuZDogYm9vbGVhbikge1xuICAgIHRoaXMudW5pZm9ybVZpZXdNb2RlID0gdW5kZWZpbmVkO1xuICAgIGxheWVyLm9wdGlvbnMubGVnZW5kID0gc2hvd0xlZ2VuZDtcbiAgfVxuXG4gIG1vdmVUb1RvcChpZHg6IG51bWJlcikge1xuICAgIHRoaXMubGF5ZXJzID0gW3RoaXMubGF5ZXJzW2lkeF1dLmNvbmNhdCh0aGlzLmxheWVycy5zbGljZSgwLCBpZHgpKS5jb25jYXQodGhpcy5sYXllcnMuc2xpY2UoaWR4ICsgMSkpO1xuICAgIHRoaXMuX2NoYW5nZWQoKTtcbiAgfVxuXG4gIG1vdmVVcChpZHg6IG51bWJlcikge1xuICAgIGlmIChpZHggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbGF5ZXJzID0gdGhpcy5sYXllcnM7XG4gICAgdGhpcy5sYXllcnMgPSBsYXllcnMuc2xpY2UoMCwgaWR4IC0gMSkuY29uY2F0KFtsYXllcnNbaWR4XSwgbGF5ZXJzW2lkeCAtIDFdXSkuY29uY2F0KGxheWVycy5zbGljZShpZHggKyAxKSk7XG4gICAgdGhpcy5fY2hhbmdlZCgpO1xuICB9XG5cbiAgbW92ZURvd24oaWR4OiBudW1iZXIpIHtcbiAgICBpZiAoaWR4ID09PSAodGhpcy5sYXllcnMubGVuZ3RoIC0gMSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbGF5ZXJzID0gdGhpcy5sYXllcnM7XG4gICAgdGhpcy5sYXllcnMgPSBsYXllcnMuc2xpY2UoMCwgaWR4KS5jb25jYXQoW2xheWVyc1tpZHggKyAxXSwgbGF5ZXJzW2lkeF1dKS5jb25jYXQobGF5ZXJzLnNsaWNlKGlkeCArIDIpKTtcbiAgICB0aGlzLl9jaGFuZ2VkKCk7XG4gIH1cblxuICBtb3ZlVG9Cb3R0b20oaWR4OiBudW1iZXIpIHtcbiAgICB0aGlzLmxheWVycyA9IHRoaXMubGF5ZXJzLnNsaWNlKDAsIGlkeCkuY29uY2F0KHRoaXMubGF5ZXJzLnNsaWNlKGlkeCArIDEpKS5jb25jYXQoW3RoaXMubGF5ZXJzW2lkeF1dKTtcbiAgICB0aGlzLl9jaGFuZ2VkKCk7XG4gIH1cblxuICByZW1vdmVMYXllcihpZHg6IG51bWJlcikge1xuICAgIHZhciBsYXllcnMgPSB0aGlzLmxheWVycy5zbGljZSgpO1xuICAgIGxheWVycy5zcGxpY2UoaWR4LCAxKTtcbiAgICB0aGlzLmxheWVycyA9IGxheWVycztcbiAgICB0aGlzLl9jaGFuZ2VkKCk7XG4gIH1cblxuICBsYXllclByb3BlcnR5Q2hhbmdlZChsOiBNYXBwZWRMYXllcikge1xuICAgIHRoaXMubGF5ZXJzID0gdGhpcy5sYXllcnMuc2xpY2UoKTtcbiAgICB0aGlzLl9jaGFuZ2VkKCk7XG4gIH1cblxuICBwcml2YXRlIF9jaGFuZ2VkKCkge1xuICAgIHRoaXMuZmV0Y2hNZXRhZGF0YSgpO1xuICAgIHRoaXMubGF5ZXJzQ2hhbmdlLmVtaXQodGhpcy5sYXllcnMpO1xuICB9XG5cbiAgZmV0Y2hNZXRhZGF0YSgpe1xuICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobWw9PntcbiAgICAgIHRoaXMubWV0YWRhdGEucG9wdWxhdGVNZXRhZGF0YShtbCk7XG4gICAgfSlcbiAgfVxufVxuIl19