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
var LayerPropertiesComponent = /** @class */ (function () {
    function LayerPropertiesComponent(pointSelectionService) {
        this.pointSelectionService = pointSelectionService;
        this.getKeys = Object.keys;
        this.propertyChanged = new core_1.EventEmitter();
        this.tooltipPlacement = 'right';
        this.availableTags = null;
        this.tags = {};
        this.pointVariables = [];
    }
    Object.defineProperty(LayerPropertiesComponent.prototype, "publication", {
        get: function () {
            if (!this.layer || !this.layer.layer || !this.layer.layer.publications) {
                return null;
            }
            return this.layer.layer.publications[this.layer.options.publication || 0];
        },
        enumerable: true,
        configurable: true
    });
    LayerPropertiesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // if(this.layer){
        //   this.publication=this.layer.layer.publications[this.layer.options.publication||0];
        // }
        // if (this.layer &&
        //   this.layer.layer.options.smallExtent &&
        //   !this.layer.spatialExtent) {
        //   this.loadExtent();
        // }
        if (this.map) {
            this.selectedFeatureSubscription =
                this.map.featureSelected.subscribe(function (evt) { return _this.featureSelected(evt); });
        }
        if (this.layer) {
            setTimeout(function () {
                _this.findTags();
            });
        }
    };
    LayerPropertiesComponent.prototype.ngOnDestroy = function () {
        if (this.selectedFeatureSubscription) {
            this.selectedFeatureSubscription.unsubscribe();
        }
    };
    LayerPropertiesComponent.prototype.featureSelected = function (evt) {
        if (!this.publication || !this.publication.pointdata) {
            return;
        }
        this.selectedFeature = evt.feature;
        // No guarantee that this is from the same layer!!!!
        this.queryPointData();
    };
    LayerPropertiesComponent.prototype.publicationSelected = function (idx) {
        this.layer.options.publication = idx;
        // this.publication=this.layer.layer.publications[idx];
        if (this.publication.pointdata) {
            this.pointSelectionChanged();
            this.updateVariables();
        }
        this.update(idx);
    };
    LayerPropertiesComponent.prototype.updateLayer = function () {
        this.layer.options.tags = this.tags;
        this.layer.update();
        this.propertyChanged.emit(this.layer);
    };
    LayerPropertiesComponent.prototype.update = function (event) {
        var _this = this;
        this.updateLayer();
        setTimeout(function () {
            _this.findTags();
        });
    };
    LayerPropertiesComponent.prototype.processTags = function (tags) {
        if (!tags) {
            return null;
        }
        var result = {};
        Object.keys(tags).forEach(function (k) {
            var values = tags[k];
            result[k] = values.map(function (v) {
                var vAsTag = v;
                if (vAsTag.value && vAsTag.label) {
                    return vAsTag;
                }
                var vAsString = v;
                return {
                    value: vAsString,
                    label: vAsString
                };
            });
        });
        return result;
    };
    LayerPropertiesComponent.prototype.findTags = function () {
        if (this.publication.pointdata) {
            this.availableTags = this.processTags(this.publication.pointdata.tags);
        }
        else {
            this.availableTags = this.processTags(this.layer.flattenedSettings.options.tags);
        }
        this.setDefaultTags();
    };
    LayerPropertiesComponent.prototype.tagChanged = function (t) {
        this.queryPointData();
        this.update(null);
    };
    LayerPropertiesComponent.prototype.setDefaultTags = function () {
        var _this = this;
        if (!this.availableTags) {
            return;
        }
        Object.keys(this.availableTags).forEach(function (tag) {
            if (_this.tags[tag] === undefined) {
                _this.tags[tag] = _this.availableTags[tag][0].value;
            }
        });
        this.updateLayer();
    };
    LayerPropertiesComponent.prototype.zoomToExtent = function () {
        if (!this.map) {
            console.log('NO MAP!');
            return;
        }
        this.map.lat = this.layer.layer.lat;
        this.map.lng = this.layer.layer.lon;
        this.map.zoom = this.layer.layer.zoom || 13;
    };
    LayerPropertiesComponent.prototype.pointSelection = function () {
        return {
            catalog: this.publication.pointdata,
            variable: this.selectedVariable,
            feature: this.selectedFeature,
            tags: this.tags
        };
    };
    LayerPropertiesComponent.prototype.queryPointData = function () {
        var pointdata = this.publication && this.publication.pointdata;
        if (!this.publication || !this.publication.pointdata) {
            return;
        }
        this.pointSelectionChanged();
        this.updateVariables();
    };
    LayerPropertiesComponent.prototype.updateVariables = function () {
        var _this = this;
        var sel = this.pointSelection();
        this.pointSelectionService.timeseriesVariables(sel).subscribe(function (variables) {
            _this.pointVariables = variables.slice();
            if (_this.publication.pointdata.exclude) {
                _this.pointVariables = _this.pointVariables.filter(function (v) {
                    return !_this.publication.pointdata.exclude.some(function (pattern) {
                        return !!v.value.match(pattern);
                    });
                });
            }
            if (!_this.pointVariables.length) {
                _this.selectedVariable = null;
            }
            else if (_this.pointVariables.findIndex(function (t) { return t.value === _this.selectedVariable; }) < 0) {
                if (_this.pointVariables.findIndex(function (t) { return t.value === _this.publication.pointdata.defaultVariable; }) >= 0) {
                    _this.selectedVariable = _this.publication.pointdata.defaultVariable;
                }
                else {
                    _this.selectedVariable = _this.pointVariables[0].value;
                }
            }
            _this.pointSelectionChanged();
        });
    };
    LayerPropertiesComponent.prototype.pointSelectionChanged = function () {
        this.pointSelectionService.pointSelection(this.pointSelection());
    };
    LayerPropertiesComponent.ctorParameters = function () { return [
        { type: map_wald_1.PointSelectionService }
    ]; };
    __decorate([
        core_1.Input(),
        __metadata("design:type", map_wald_1.MappedLayer)
    ], LayerPropertiesComponent.prototype, "layer", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", layered_map_component_1.LayeredMapComponent)
    ], LayerPropertiesComponent.prototype, "map", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], LayerPropertiesComponent.prototype, "propertyChanged", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], LayerPropertiesComponent.prototype, "tooltipPlacement", void 0);
    LayerPropertiesComponent = __decorate([
        core_1.Component({
            selector: 'layer-properties',
            template: "<div class=\"container-fluid\">\n  <p><strong>{{layer?.title}}</strong>\n    <span *ngIf=\"layer.description()\"\n    [ngbTooltip]=\"layer.description()\"\n    [placement]=\"tooltipPlacement\"\n    class=\"layer-info-target\"\n    container=\"body\">\n  &nbsp;<i class=\"fa fa-info-circle\"></i>\n  </span>\n  &nbsp;<span *ngIf=\"layer.interpolatedDownloadURL\">\n    <small><a target=\"_blank\"\n              [href]=\"layer.interpolatedDownloadURL\"\n              [ngbTooltip]=\"'Download data'\"\n              container=\"body\">\n      <i class=\"fa fa-download\"></i>\n    </a></small>\n  </span>\n  </p>\n\n  <div *ngIf=\"layer?.layer.publications.length>1\">\n    <span *ngIf=\"layer.layer.publications[0].timestep\">Timestep </span>\n    <span *ngIf=\"!layer.layer.publications[0].timestep\">{{ layer.layer.options.publicationLabel || 'Variable' }} </span>\n    <select [(ngModel)]=\"layer.options.publication\" (ngModelChange)=\"publicationSelected($event)\">\n      <option *ngFor=\"let p of layer.layer.publications; let i=index\" [ngValue]=\"i\">{{p.label || p.timestep}}</option>\n    </select>\n  </div>\n  <div *ngIf=\"layer?.layer.publications.length===1\">\n    {{publication?.label}}\n  </div>\n\n  <div *ngIf=\"publication&&publication.timestep\">\n    <hr/>\n    <date-selection [(date)]=\"layer.options.date\"\n      (dateChange)=\"update($event)\"\n      [timestep]=\"publication.timestep\"\n      [stepDays]=\"publication.timestepMultiplier||1\"\n      [referenceDate]=\"publication.timestepReference\"\n      [minDate]=\"publication.options.start\"\n      [maxDate]=\"publication.options.end\"></date-selection>\n  </div>\n\n  <div *ngIf=\"layer.layer.options.smallExtent\">\n    <hr/>\n    <button class=\"btn btn-sm btn-primary\" (click)=\"zoomToExtent()\">Zoom to Extent</button>\n  </div>\n\n<!--\n  <div *ngIf=\"layer.layer.options.vectors\">\n    <p>Lets filter those {{layer.layer.options.vectors}}s, eh?</p>\n  </div>\n-->\n\n  <div *ngIf=\"availableTags\">\n    <div *ngFor=\"let tag of getKeys(availableTags)\">\n      {{tag}}\n      <select [(ngModel)]=\"tags[tag]\" (ngModelChange)=\"tagChanged(tag)\">\n        <option *ngFor=\"let val of availableTags[tag]\" [ngValue]=\"val.value\">{{val.label}}</option>\n      </select>\n    </div>\n  </div>\n\n  <div *ngIf=\"publication?.pointdata\">\n    Variable:\n    <select [(ngModel)]=\"selectedVariable\" (ngModelChange)=\"queryPointData()\">\n      <option *ngFor=\"let v of pointVariables\" [ngValue]=\"v.value\">{{v.label}}</option>\n    </select>\n  </div>\n  <!--\n  <div *ngIf=\"publication\">\n    <p>Start: {{publication.options.start}}</p>\n    <p>End: {{publication.options.end}}</p>\n    <p>{{publication|json}}</p>\n  </div>\n  <button (click)=\"update()\">Force update...</button>\n  -->\n</div>"
        }),
        __metadata("design:paramtypes", [map_wald_1.PointSelectionService])
    ], LayerPropertiesComponent);
    return LayerPropertiesComponent;
}());
exports.LayerPropertiesComponent = LayerPropertiesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItcHJvcGVydGllcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJsYXllci1wcm9wZXJ0aWVzL2xheWVyLXByb3BlcnRpZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXdIO0FBQ3hILHFDQUMwRDtBQUMxRCw4RUFBMkU7QUFvRjNFO0lBYUUsa0NBQW9CLHFCQUE0QztRQUE1QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBWmhFLFlBQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBR1osb0JBQWUsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUN0QyxxQkFBZ0IsR0FBVyxPQUFPLENBQUM7UUFDNUMsa0JBQWEsR0FBZ0IsSUFBSSxDQUFDO1FBQ2xDLFNBQUksR0FBOEIsRUFBRSxDQUFBO1FBQ3BDLG1CQUFjLEdBQW9CLEVBQUUsQ0FBQztJQU9yQyxDQUFDO0lBRUQsc0JBQUksaURBQVc7YUFBZjtZQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUU7Z0JBQ3RFLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDNUUsQ0FBQzs7O09BQUE7SUFFRCxrREFBZSxHQUFmO1FBQUEsaUJBbUJDO1FBbEJDLGtCQUFrQjtRQUNsQix1RkFBdUY7UUFDdkYsSUFBSTtRQUNKLG9CQUFvQjtRQUNwQiw0Q0FBNEM7UUFDNUMsaUNBQWlDO1FBQ2pDLHVCQUF1QjtRQUN2QixJQUFJO1FBQ0osSUFBSSxJ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QUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7O2dCQXRMMEMsZ0NBQXFCOztJQVh2RDtRQUFSLFlBQUssRUFBRTtrQ0FBUSxzQkFBVzsyREFBQztJQUNuQjtRQUFSLFlBQUssRUFBRTtrQ0FBTSwyQ0FBbUI7eURBQUM7SUFDeEI7UUFBVCxhQUFNLEVBQUU7O3FFQUFzQztJQUN0QztRQUFSLFlBQUssRUFBRTs7c0VBQW9DO0lBTGpDLHdCQUF3QjtRQS9FcEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLDJ1RkEyRUw7U0FDTixDQUFDO3lDQWMyQyxnQ0FBcUI7T0FickQsd0JBQXdCLENBb01wQztJQUFELCtCQUFDO0NBQUEsQUFwTUQsSUFvTUM7QUFwTVksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXBwZWRMYXllciwgUHVibGljYXRpb24sIExheWVyVGFnVmFsdWUsIExheWVyVGFnTWFwLFxuICBQb2ludFNlbGVjdGlvblNlcnZpY2UsIFBvaW50U2VsZWN0aW9uIH0gZnJvbSAnbWFwLXdhbGQnO1xuaW1wb3J0IHsgTGF5ZXJlZE1hcENvbXBvbmVudCB9IGZyb20gJy4uL2xheWVyZWQtbWFwL2xheWVyZWQtbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHZW9tZXRyeU9iamVjdCwgRmVhdHVyZSB9IGZyb20gJ2dlb2pzb24nO1xuXG5kZWNsYXJlIHZhciBQbG90bHk6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGF5ZXItcHJvcGVydGllcycsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxuICA8cD48c3Ryb25nPnt7bGF5ZXI/LnRpdGxlfX08L3N0cm9uZz5cbiAgICA8c3BhbiAqbmdJZj1cImxheWVyLmRlc2NyaXB0aW9uKClcIlxuICAgIFtuZ2JUb29sdGlwXT1cImxheWVyLmRlc2NyaXB0aW9uKClcIlxuICAgIFtwbGFjZW1lbnRdPVwidG9vbHRpcFBsYWNlbWVudFwiXG4gICAgY2xhc3M9XCJsYXllci1pbmZvLXRhcmdldFwiXG4gICAgY29udGFpbmVyPVwiYm9keVwiPlxuICAmbmJzcDs8aSBjbGFzcz1cImZhIGZhLWluZm8tY2lyY2xlXCI+PC9pPlxuICA8L3NwYW4+XG4gICZuYnNwOzxzcGFuICpuZ0lmPVwibGF5ZXIuaW50ZXJwb2xhdGVkRG93bmxvYWRVUkxcIj5cbiAgICA8c21hbGw+PGEgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgW2hyZWZdPVwibGF5ZXIuaW50ZXJwb2xhdGVkRG93bmxvYWRVUkxcIlxuICAgICAgICAgICAgICBbbmdiVG9vbHRpcF09XCInRG93bmxvYWQgZGF0YSdcIlxuICAgICAgICAgICAgICBjb250YWluZXI9XCJib2R5XCI+XG4gICAgICA8aSBjbGFzcz1cImZhIGZhLWRvd25sb2FkXCI+PC9pPlxuICAgIDwvYT48L3NtYWxsPlxuICA8L3NwYW4+XG4gIDwvcD5cblxuICA8ZGl2ICpuZ0lmPVwibGF5ZXI/LmxheWVyLnB1YmxpY2F0aW9ucy5sZW5ndGg+MVwiPlxuICAgIDxzcGFuICpuZ0lmPVwibGF5ZXIubGF5ZXIucHVibGljYXRpb25zWzBdLnRpbWVzdGVwXCI+VGltZXN0ZXAgPC9zcGFuPlxuICAgIDxzcGFuICpuZ0lmPVwiIWxheWVyLmxheWVyLnB1YmxpY2F0aW9uc1swXS50aW1lc3RlcFwiPnt7IGxheWVyLmxheWVyLm9wdGlvbnMucHVibGljYXRpb25MYWJlbCB8fCAnVmFyaWFibGUnIH19IDwvc3Bhbj5cbiAgICA8c2VsZWN0IFsobmdNb2RlbCldPVwibGF5ZXIub3B0aW9ucy5wdWJsaWNhdGlvblwiIChuZ01vZGVsQ2hhbmdlKT1cInB1YmxpY2F0aW9uU2VsZWN0ZWQoJGV2ZW50KVwiPlxuICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgcCBvZiBsYXllci5sYXllci5wdWJsaWNhdGlvbnM7IGxldCBpPWluZGV4XCIgW25nVmFsdWVdPVwiaVwiPnt7cC5sYWJlbCB8fCBwLnRpbWVzdGVwfX08L29wdGlvbj5cbiAgICA8L3NlbGVjdD5cbiAgPC9kaXY+XG4gIDxkaXYgKm5nSWY9XCJsYXllcj8ubGF5ZXIucHVibGljYXRpb25zLmxlbmd0aD09PTFcIj5cbiAgICB7e3B1YmxpY2F0aW9uPy5sYWJlbH19XG4gIDwvZGl2PlxuXG4gIDxkaXYgKm5nSWY9XCJwdWJsaWNhdGlvbiYmcHVibGljYXRpb24udGltZXN0ZXBcIj5cbiAgICA8aHIvPlxuICAgIDxkYXRlLXNlbGVjdGlvbiBbKGRhdGUpXT1cImxheWVyLm9wdGlvbnMuZGF0ZVwiXG4gICAgICAoZGF0ZUNoYW5nZSk9XCJ1cGRhdGUoJGV2ZW50KVwiXG4gICAgICBbdGltZXN0ZXBdPVwicHVibGljYXRpb24udGltZXN0ZXBcIlxuICAgICAgW3N0ZXBEYXlzXT1cInB1YmxpY2F0aW9uLnRpbWVzdGVwTXVsdGlwbGllcnx8MVwiXG4gICAgICBbcmVmZXJlbmNlRGF0ZV09XCJwdWJsaWNhdGlvbi50aW1lc3RlcFJlZmVyZW5jZVwiXG4gICAgICBbbWluRGF0ZV09XCJwdWJsaWNhdGlvbi5vcHRpb25zLnN0YXJ0XCJcbiAgICAgIFttYXhEYXRlXT1cInB1YmxpY2F0aW9uLm9wdGlvbnMuZW5kXCI+PC9kYXRlLXNlbGVjdGlvbj5cbiAgPC9kaXY+XG5cbiAgPGRpdiAqbmdJZj1cImxheWVyLmxheWVyLm9wdGlvbnMuc21hbGxFeHRlbnRcIj5cbiAgICA8aHIvPlxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cInpvb21Ub0V4dGVudCgpXCI+Wm9vbSB0byBFeHRlbnQ8L2J1dHRvbj5cbiAgPC9kaXY+XG5cbjwhLS1cbiAgPGRpdiAqbmdJZj1cImxheWVyLmxheWVyLm9wdGlvbnMudmVjdG9yc1wiPlxuICAgIDxwPkxldHMgZmlsdGVyIHRob3NlIHt7bGF5ZXIubGF5ZXIub3B0aW9ucy52ZWN0b3JzfX1zLCBlaD88L3A+XG4gIDwvZGl2PlxuLS0+XG5cbiAgPGRpdiAqbmdJZj1cImF2YWlsYWJsZVRhZ3NcIj5cbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCB0YWcgb2YgZ2V0S2V5cyhhdmFpbGFibGVUYWdzKVwiPlxuICAgICAge3t0YWd9fVxuICAgICAgPHNlbGVjdCBbKG5nTW9kZWwpXT1cInRhZ3NbdGFnXVwiIChuZ01vZGVsQ2hhbmdlKT1cInRhZ0NoYW5nZWQodGFnKVwiPlxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCB2YWwgb2YgYXZhaWxhYmxlVGFnc1t0YWddXCIgW25nVmFsdWVdPVwidmFsLnZhbHVlXCI+e3t2YWwubGFiZWx9fTwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgKm5nSWY9XCJwdWJsaWNhdGlvbj8ucG9pbnRkYXRhXCI+XG4gICAgVmFyaWFibGU6XG4gICAgPHNlbGVjdCBbKG5nTW9kZWwpXT1cInNlbGVjdGVkVmFyaWFibGVcIiAobmdNb2RlbENoYW5nZSk9XCJxdWVyeVBvaW50RGF0YSgpXCI+XG4gICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCB2IG9mIHBvaW50VmFyaWFibGVzXCIgW25nVmFsdWVdPVwidi52YWx1ZVwiPnt7di5sYWJlbH19PC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+XG4gIDwvZGl2PlxuICA8IS0tXG4gIDxkaXYgKm5nSWY9XCJwdWJsaWNhdGlvblwiPlxuICAgIDxwPlN0YXJ0OiB7e3B1YmxpY2F0aW9uLm9wdGlvbnMuc3RhcnR9fTwvcD5cbiAgICA8cD5FbmQ6IHt7cHVibGljYXRpb24ub3B0aW9ucy5lbmR9fTwvcD5cbiAgICA8cD57e3B1YmxpY2F0aW9ufGpzb259fTwvcD5cbiAgPC9kaXY+XG4gIDxidXR0b24gKGNsaWNrKT1cInVwZGF0ZSgpXCI+Rm9yY2UgdXBkYXRlLi4uPC9idXR0b24+XG4gIC0tPlxuPC9kaXY+YCwgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBMYXllclByb3BlcnRpZXNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBnZXRLZXlzID0gT2JqZWN0LmtleXM7XG4gIEBJbnB1dCgpIGxheWVyOiBNYXBwZWRMYXllcjtcbiAgQElucHV0KCkgbWFwOiBMYXllcmVkTWFwQ29tcG9uZW50O1xuICBAT3V0cHV0KCkgcHJvcGVydHlDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSB0b29sdGlwUGxhY2VtZW50OiBzdHJpbmcgPSAncmlnaHQnO1xuICBhdmFpbGFibGVUYWdzOiBMYXllclRhZ01hcCA9IG51bGw7XG4gIHRhZ3M6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuICBwb2ludFZhcmlhYmxlczogTGF5ZXJUYWdWYWx1ZVtdID0gW107XG4gIHNlbGVjdGVkVmFyaWFibGU6IHN0cmluZztcbiAgc2VsZWN0ZWRGZWF0dXJlOiBGZWF0dXJlPEdlb21ldHJ5T2JqZWN0PjtcbiAgc2VsZWN0ZWRGZWF0dXJlU3Vic2NyaXB0aW9uOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwb2ludFNlbGVjdGlvblNlcnZpY2U6IFBvaW50U2VsZWN0aW9uU2VydmljZSkge1xuXG4gIH1cblxuICBnZXQgcHVibGljYXRpb24oKTogKFB1YmxpY2F0aW9uIHwgbnVsbCkge1xuICAgIGlmICghdGhpcy5sYXllciB8fCAhdGhpcy5sYXllci5sYXllciB8fCAhdGhpcy5sYXllci5sYXllci5wdWJsaWNhdGlvbnMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5sYXllci5sYXllci5wdWJsaWNhdGlvbnNbdGhpcy5sYXllci5vcHRpb25zLnB1YmxpY2F0aW9uIHx8IDBdO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8vIGlmKHRoaXMubGF5ZXIpe1xuICAgIC8vICAgdGhpcy5wdWJsaWNhdGlvbj10aGlzLmxheWVyLmxheWVyLnB1YmxpY2F0aW9uc1t0aGlzLmxheWVyLm9wdGlvbnMucHVibGljYXRpb258fDBdO1xuICAgIC8vIH1cbiAgICAvLyBpZiAodGhpcy5sYXllciAmJlxuICAgIC8vICAgdGhpcy5sYXllci5sYXllci5vcHRpb25zLnNtYWxsRXh0ZW50ICYmXG4gICAgLy8gICAhdGhpcy5sYXllci5zcGF0aWFsRXh0ZW50KSB7XG4gICAgLy8gICB0aGlzLmxvYWRFeHRlbnQoKTtcbiAgICAvLyB9XG4gICAgaWYgKHRoaXMubWFwKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkRmVhdHVyZVN1YnNjcmlwdGlvbiA9XG4gICAgICAgIHRoaXMubWFwLmZlYXR1cmVTZWxlY3RlZC5zdWJzY3JpYmUoKGV2dDogeyBmZWF0dXJlOiBGZWF0dXJlPEdlb21ldHJ5T2JqZWN0PiwgbGF5ZXI/OiBNYXBwZWRMYXllciB9KSA9PiB0aGlzLmZlYXR1cmVTZWxlY3RlZChldnQpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sYXllcikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZmluZFRhZ3MoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkRmVhdHVyZVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zZWxlY3RlZEZlYXR1cmVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBmZWF0dXJlU2VsZWN0ZWQoZXZ0OiB7IGZlYXR1cmU6IEZlYXR1cmU8R2VvbWV0cnlPYmplY3Q+LCBsYXllcj86IE1hcHBlZExheWVyIH0pIHtcbiAgICBpZiAoIXRoaXMucHVibGljYXRpb24gfHwgIXRoaXMucHVibGljYXRpb24ucG9pbnRkYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWRGZWF0dXJlID0gZXZ0LmZlYXR1cmU7XG4gICAgLy8gTm8gZ3VhcmFudGVlIHRoYXQgdGhpcyBpcyBmcm9tIHRoZSBzYW1lIGxheWVyISEhIVxuICAgIHRoaXMucXVlcnlQb2ludERhdGEoKTtcbiAgfVxuXG4gIHB1YmxpY2F0aW9uU2VsZWN0ZWQoaWR4OiBudW1iZXIpIHtcbiAgICB0aGlzLmxheWVyLm9wdGlvbnMucHVibGljYXRpb24gPSBpZHg7XG4gICAgLy8gdGhpcy5wdWJsaWNhdGlvbj10aGlzLmxheWVyLmxheWVyLnB1YmxpY2F0aW9uc1tpZHhdO1xuICAgIGlmICh0aGlzLnB1YmxpY2F0aW9uLnBvaW50ZGF0YSkge1xuICAgICAgdGhpcy5wb2ludFNlbGVjdGlvbkNoYW5nZWQoKTtcbiAgICAgIHRoaXMudXBkYXRlVmFyaWFibGVzKCk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGUoaWR4KTtcbiAgfVxuXG4gIHVwZGF0ZUxheWVyKCkge1xuICAgIHRoaXMubGF5ZXIub3B0aW9ucy50YWdzID0gdGhpcy50YWdzO1xuICAgIHRoaXMubGF5ZXIudXBkYXRlKCk7XG4gICAgdGhpcy5wcm9wZXJ0eUNoYW5nZWQuZW1pdCh0aGlzLmxheWVyKTtcbiAgfVxuXG4gIHVwZGF0ZShldmVudDogYW55KSB7XG4gICAgdGhpcy51cGRhdGVMYXllcigpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmZpbmRUYWdzKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcm9jZXNzVGFncyh0YWdzOiB7IFtrZXk6IHN0cmluZ106IEFycmF5PHN0cmluZyB8IExheWVyVGFnVmFsdWU+IH0pOiBMYXllclRhZ01hcCB7XG4gICAgaWYgKCF0YWdzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0OiBMYXllclRhZ01hcCA9IHt9O1xuXG4gICAgT2JqZWN0LmtleXModGFncykuZm9yRWFjaChrID0+IHtcbiAgICAgIGxldCB2YWx1ZXM6IEFycmF5PHN0cmluZyB8IExheWVyVGFnVmFsdWU+ID0gdGFnc1trXTtcbiAgICAgIHJlc3VsdFtrXSA9IHZhbHVlcy5tYXAodiA9PiB7XG4gICAgICAgIGxldCB2QXNUYWcgPSA8TGF5ZXJUYWdWYWx1ZT52O1xuICAgICAgICBpZiAodkFzVGFnLnZhbHVlICYmIHZBc1RhZy5sYWJlbCkge1xuICAgICAgICAgIHJldHVybiB2QXNUYWc7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHZBc1N0cmluZyA9IDxzdHJpbmc+djtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogdkFzU3RyaW5nLFxuICAgICAgICAgIGxhYmVsOiB2QXNTdHJpbmdcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZmluZFRhZ3MoKSB7XG4gICAgaWYgKHRoaXMucHVibGljYXRpb24ucG9pbnRkYXRhKSB7XG4gICAgICB0aGlzLmF2YWlsYWJsZVRhZ3MgPSB0aGlzLnByb2Nlc3NUYWdzKHRoaXMucHVibGljYXRpb24ucG9pbnRkYXRhLnRhZ3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF2YWlsYWJsZVRhZ3MgPSB0aGlzLnByb2Nlc3NUYWdzKHRoaXMubGF5ZXIuZmxhdHRlbmVkU2V0dGluZ3Mub3B0aW9ucy50YWdzKTtcbiAgICB9XG4gICAgdGhpcy5zZXREZWZhdWx0VGFncygpO1xuICB9XG5cbiAgdGFnQ2hhbmdlZCh0OiBzdHJpbmcpIHtcbiAgICB0aGlzLnF1ZXJ5UG9pbnREYXRhKCk7XG4gICAgdGhpcy51cGRhdGUobnVsbCk7XG4gIH1cblxuICBzZXREZWZhdWx0VGFncygpIHtcbiAgICBpZiAoIXRoaXMuYXZhaWxhYmxlVGFncykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMuYXZhaWxhYmxlVGFncykuZm9yRWFjaCh0YWcgPT4ge1xuICAgICAgaWYgKHRoaXMudGFnc1t0YWddID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy50YWdzW3RhZ10gPSB0aGlzLmF2YWlsYWJsZVRhZ3NbdGFnXVswXS52YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMudXBkYXRlTGF5ZXIoKTtcbiAgfVxuXG4gIHpvb21Ub0V4dGVudCgpIHtcbiAgICBpZiAoIXRoaXMubWFwKSB7XG4gICAgICBjb25zb2xlLmxvZygnTk8gTUFQIScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubWFwLmxhdCA9IHRoaXMubGF5ZXIubGF5ZXIubGF0O1xuICAgIHRoaXMubWFwLmxuZyA9IHRoaXMubGF5ZXIubGF5ZXIubG9uO1xuICAgIHRoaXMubWFwLnpvb20gPSB0aGlzLmxheWVyLmxheWVyLnpvb20gfHwgMTM7XG4gIH1cblxuICBwb2ludFNlbGVjdGlvbigpOiBQb2ludFNlbGVjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhdGFsb2c6IHRoaXMucHVibGljYXRpb24ucG9pbnRkYXRhLFxuICAgICAgdmFyaWFibGU6IHRoaXMuc2VsZWN0ZWRWYXJpYWJsZSxcbiAgICAgIGZlYXR1cmU6IHRoaXMuc2VsZWN0ZWRGZWF0dXJlLFxuICAgICAgdGFnczogdGhpcy50YWdzXG4gICAgfTtcbiAgfVxuXG4gIHF1ZXJ5UG9pbnREYXRhKCkge1xuICAgIGxldCBwb2ludGRhdGEgPSB0aGlzLnB1YmxpY2F0aW9uICYmIHRoaXMucHVibGljYXRpb24ucG9pbnRkYXRhO1xuXG4gICAgaWYgKCF0aGlzLnB1YmxpY2F0aW9uIHx8ICF0aGlzLnB1YmxpY2F0aW9uLnBvaW50ZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucG9pbnRTZWxlY3Rpb25DaGFuZ2VkKCk7XG4gICAgdGhpcy51cGRhdGVWYXJpYWJsZXMoKTtcbiAgfVxuXG4gIHVwZGF0ZVZhcmlhYmxlcygpe1xuICAgIGxldCBzZWwgPSB0aGlzLnBvaW50U2VsZWN0aW9uKCk7XG4gICAgdGhpcy5wb2ludFNlbGVjdGlvblNlcnZpY2UudGltZXNlcmllc1ZhcmlhYmxlcyhcbiAgICAgIHNlbCkuc3Vic2NyaWJlKHZhcmlhYmxlcyA9PiB7XG4gICAgICAgIHRoaXMucG9pbnRWYXJpYWJsZXMgPSB2YXJpYWJsZXMuc2xpY2UoKTtcbiAgICAgICAgaWYodGhpcy5wdWJsaWNhdGlvbi5wb2ludGRhdGEuZXhjbHVkZSl7XG4gICAgICAgICAgdGhpcy5wb2ludFZhcmlhYmxlcyA9IHRoaXMucG9pbnRWYXJpYWJsZXMuZmlsdGVyKHY9PntcbiAgICAgICAgICAgIHJldHVybiAhdGhpcy5wdWJsaWNhdGlvbi5wb2ludGRhdGEuZXhjbHVkZS5zb21lKHBhdHRlcm49PntcbiAgICAgICAgICAgICAgcmV0dXJuICEhdi52YWx1ZS5tYXRjaChwYXR0ZXJuKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmKCF0aGlzLnBvaW50VmFyaWFibGVzLmxlbmd0aCl7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFZhcmlhYmxlID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBvaW50VmFyaWFibGVzLmZpbmRJbmRleCh0PT50LnZhbHVlPT09dGhpcy5zZWxlY3RlZFZhcmlhYmxlKSA8IDApIHtcbiAgICAgICAgICBpZiAodGhpcy5wb2ludFZhcmlhYmxlcy5maW5kSW5kZXgodD0+dC52YWx1ZT09PXRoaXMucHVibGljYXRpb24ucG9pbnRkYXRhLmRlZmF1bHRWYXJpYWJsZSkgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZhcmlhYmxlID0gdGhpcy5wdWJsaWNhdGlvbi5wb2ludGRhdGEuZGVmYXVsdFZhcmlhYmxlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmFyaWFibGUgPSB0aGlzLnBvaW50VmFyaWFibGVzWzBdLnZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvaW50U2VsZWN0aW9uQ2hhbmdlZCgpO1xuICAgICAgfSk7XG4gIH1cblxuICBwb2ludFNlbGVjdGlvbkNoYW5nZWQoKSB7XG4gICAgdGhpcy5wb2ludFNlbGVjdGlvblNlcnZpY2UucG9pbnRTZWxlY3Rpb24odGhpcy5wb2ludFNlbGVjdGlvbigpKTtcbiAgfVxufVxuIl19