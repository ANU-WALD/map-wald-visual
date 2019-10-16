"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var http_1 = require("@angular/common/http");
var ngx_pipes_1 = require("ngx-pipes");
var core_2 = require("@agm/core");
var common_1 = require("@angular/common");
var map_wald_1 = require("map-wald");
var wms_layer_component_1 = require("./wms-layer/wms-layer.component");
var map_legend_component_1 = require("./map-legend/map-legend.component");
var map_control_component_1 = require("./map-control/map-control.component");
var date_shifter_component_1 = require("./date-shifter/date-shifter.component");
var one_time_splash_component_1 = require("./one-time-splash/one-time-splash.component");
var date_element_component_1 = require("./date-element/date-element.component");
var share_view_component_1 = require("./share-view/share-view.component");
var location_search_component_1 = require("./location-search/location-search.component");
var zoom_layer_component_1 = require("./action-buttons/zoom-layer/zoom-layer.component");
var zoom_full_component_1 = require("./action-buttons/zoom-full/zoom-full.component");
var zoom_out_component_1 = require("./action-buttons/zoom-out/zoom-out.component");
var zoom_in_component_1 = require("./action-buttons/zoom-in/zoom-in.component");
var cycle_base_map_component_1 = require("./action-buttons/cycle-base-map/cycle-base-map.component");
var cycle_opacity_component_1 = require("./action-buttons/cycle-opacity/cycle-opacity.component");
var button_bar_component_1 = require("./button-bar/button-bar.component");
var timeseries_chart_component_1 = require("./timeseries-chart/timeseries-chart.component");
var feature_table_component_1 = require("./feature-table/feature-table.component");
var collapsible_map_control_component_1 = require("./collapsible-map-control/collapsible-map-control.component");
var base_map_selection_component_1 = require("./base-map-selection/base-map-selection.component");
var simple_tree_node_component_1 = require("./simple-tree-node/simple-tree-node.component");
var simple_tree_component_1 = require("./simple-tree/simple-tree.component");
var catalog_component_1 = require("./catalog/catalog.component");
var date_selection_component_1 = require("./date-selection/date-selection.component");
var layer_properties_component_1 = require("./layer-properties/layer-properties.component");
var layer_control_component_1 = require("./layer-control/layer-control.component");
var layered_map_component_1 = require("./layered-map/layered-map.component");
var theme_navbar_component_1 = require("./theme-navbar/theme-navbar.component");
var geocoding_service_1 = require("./geocoding.service");
__export(require("./wms-layer/wms-layer.component"));
__export(require("./map-legend/map-legend.component"));
__export(require("./date-shifter/date-shifter.component"));
__export(require("./one-time-splash/one-time-splash.component"));
__export(require("./date-element/date-element.component"));
__export(require("./share-view/share-view.component"));
__export(require("./location-search/location-search.component"));
__export(require("./action-buttons/zoom-layer/zoom-layer.component"));
__export(require("./action-buttons/zoom-full/zoom-full.component"));
__export(require("./action-buttons/zoom-out/zoom-out.component"));
__export(require("./action-buttons/zoom-in/zoom-in.component"));
__export(require("./action-buttons/cycle-base-map/cycle-base-map.component"));
__export(require("./action-buttons/cycle-opacity/cycle-opacity.component"));
__export(require("./button-bar/button-bar.component"));
__export(require("./timeseries-chart/timeseries-chart.component"));
__export(require("./feature-table/feature-table.component"));
__export(require("./collapsible-map-control/collapsible-map-control.component"));
__export(require("./base-map-selection/base-map-selection.component"));
__export(require("./simple-tree-node/simple-tree-node.component"));
__export(require("./simple-tree/simple-tree.component"));
__export(require("./catalog/catalog.component"));
__export(require("./date-selection/date-selection.component"));
__export(require("./layer-properties/layer-properties.component"));
__export(require("./layer-control/layer-control.component"));
__export(require("./layered-map/layered-map.component"));
__export(require("./theme-navbar/theme-navbar.component"));
__export(require("./map-control/map-control.component"));
__export(require("./geocoding.service"));
var components = [
    //$componentList
    date_shifter_component_1.DateShifterComponent,
    one_time_splash_component_1.OneTimeSplashComponent,
    date_element_component_1.DateElementComponent,
    share_view_component_1.ShareViewComponent,
    location_search_component_1.LocationSearchComponent,
    zoom_layer_component_1.ZoomLayerComponent,
    zoom_full_component_1.ZoomFullComponent,
    zoom_out_component_1.ZoomOutComponent,
    zoom_in_component_1.ZoomInComponent,
    cycle_base_map_component_1.CycleBaseMapComponent,
    cycle_opacity_component_1.CycleOpacityComponent,
    button_bar_component_1.ButtonBarComponent,
    timeseries_chart_component_1.TimeseriesChartComponent,
    feature_table_component_1.FeatureTableComponent,
    collapsible_map_control_component_1.CollapsibleMapControlComponent,
    base_map_selection_component_1.BaseMapSelectionComponent,
    simple_tree_node_component_1.SimpleTreeNodeComponent,
    simple_tree_component_1.SimpleTreeComponent,
    catalog_component_1.CatalogComponent,
    date_selection_component_1.DateSelectionComponent,
    layer_properties_component_1.LayerPropertiesComponent,
    layer_control_component_1.LayerControlComponent,
    layered_map_component_1.LayeredMapComponent,
    theme_navbar_component_1.ThemeNavbarComponent,
    wms_layer_component_1.WMSLayerComponent,
    map_legend_component_1.MapLegendComponent,
    map_control_component_1.MapControlComponent
];
var services = [
    //$serviceList
    geocoding_service_1.GeocodingService
];
var MapWaldBootstrapModule = /** @class */ (function () {
    function MapWaldBootstrapModule() {
    }
    MapWaldBootstrapModule_1 = MapWaldBootstrapModule;
    MapWaldBootstrapModule.forRoot = function (moduleInitialisation) {
        return {
            ngModule: MapWaldBootstrapModule_1,
            providers: services
        };
    };
    var MapWaldBootstrapModule_1;
    MapWaldBootstrapModule = MapWaldBootstrapModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                core_2.AgmCoreModule,
                http_1.HttpClientModule,
                ngx_pipes_1.NgPipesModule,
                ng_bootstrap_1.NgbModule,
                map_wald_1.MapWaldCoreModule
            ],
            declarations: components,
            exports: components,
            providers: services
        })
    ], MapWaldBootstrapModule);
    return MapWaldBootstrapModule;
}());
exports.MapWaldBootstrapModule = MapWaldBootstrapModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUE4RDtBQUM5RCx3Q0FBNkM7QUFDN0MsMkRBQXVEO0FBQ3ZELDZDQUF3RDtBQUN4RCx1Q0FBMEM7QUFDMUMsa0NBQTBDO0FBQzFDLDBDQUErQztBQUMvQyxxQ0FBNkM7QUFFN0MsdUVBQW9FO0FBQ3BFLDBFQUF1RTtBQUN2RSw2RUFBMEU7QUFDMUUsZ0ZBQTZFO0FBQzdFLHlGQUFxRjtBQUNyRixnRkFBNkU7QUFDN0UsMEVBQXVFO0FBQ3ZFLHlGQUFzRjtBQUN0Rix5RkFBc0Y7QUFDdEYsc0ZBQW1GO0FBQ25GLG1GQUFnRjtBQUNoRixnRkFBNkU7QUFDN0UscUdBQStGO0FBQy9GLGtHQUE2RjtBQUM3RiwwRUFBdUU7QUFDdkUsNEZBQXlGO0FBQ3pGLG1GQUFnRjtBQUNoRixpSEFBNkc7QUFDN0csa0dBQThGO0FBQzlGLDRGQUF3RjtBQUN4Riw2RUFBMEU7QUFDMUUsaUVBQStEO0FBQy9ELHNGQUFtRjtBQUNuRiw0RkFBeUY7QUFDekYsbUZBQWdGO0FBQ2hGLDZFQUEwRTtBQUMxRSxnRkFBNkU7QUFFN0UseURBQXVEO0FBRXZELHFEQUFnRDtBQUNoRCx1REFBa0Q7QUFDbEQsMkRBQXNEO0FBQ3RELGlFQUE0RDtBQUM1RCwyREFBc0Q7QUFDdEQsdURBQWtEO0FBQ2xELGlFQUE0RDtBQUM1RCxzRUFBaUU7QUFDakUsb0VBQStEO0FBQy9ELGtFQUE2RDtBQUM3RCxnRUFBMkQ7QUFDM0QsOEVBQXlFO0FBQ3pFLDRFQUF1RTtBQUV2RSx1REFBa0Q7QUFDbEQsbUVBQThEO0FBQzlELDZEQUF3RDtBQUN4RCxpRkFBNEU7QUFDNUUsdUVBQWtFO0FBQ2xFLG1FQUE4RDtBQUM5RCx5REFBb0Q7QUFDcEQsaURBQTRDO0FBQzVDLCtEQUEwRDtBQUMxRCxtRUFBOEQ7QUFDOUQsNkRBQXdEO0FBQ3hELHlEQUFvRDtBQUNwRCwyREFBc0Q7QUFDdEQseURBQW9EO0FBRXBELHlDQUFvQztBQUdwQyxJQUFNLFVBQVUsR0FBRztJQUNqQixnQkFBZ0I7SUFDaEIsNkNBQW9CO0lBQ3BCLGtEQUFzQjtJQUN0Qiw2Q0FBb0I7SUFDcEIseUNBQWtCO0lBQ2xCLG1EQUF1QjtJQUN2Qix5Q0FBa0I7SUFDbEIsdUNBQWlCO0lBQ2pCLHFDQUFnQjtJQUNoQixtQ0FBZTtJQUNmLGdEQUFxQjtJQUNyQiwrQ0FBcUI7SUFDckIseUNBQWtCO0lBQ2xCLHFEQUF3QjtJQUN4QiwrQ0FBcUI7SUFDckIsa0VBQThCO0lBQzlCLHdEQUF5QjtJQUN6QixvREFBdUI7SUFDdkIsMkNBQW1CO0lBQ25CLG9DQUFnQjtJQUNoQixpREFBc0I7SUFDdEIscURBQXdCO0lBQ3hCLCtDQUFxQjtJQUNyQiwyQ0FBbUI7SUFDbkIsNkNBQW9CO0lBQ3BCLHVDQUFpQjtJQUNqQix5Q0FBa0I7SUFDbEIsMkNBQW1CO0NBQ3BCLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBRztJQUNmLGNBQWM7SUFDZCxvQ0FBZ0I7Q0FDakIsQ0FBQztBQWdCRjtJQUFBO0lBT0EsQ0FBQzsrQkFQWSxzQkFBc0I7SUFDMUIsOEJBQU8sR0FBZCxVQUFlLG9CQUF3QjtRQUNyQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLHdCQUFzQjtZQUNoQyxTQUFTLEVBQUUsUUFBUTtTQUNwQixDQUFDO0lBQ0osQ0FBQzs7SUFOVSxzQkFBc0I7UUFkbEMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHFCQUFZO2dCQUNaLG1CQUFXO2dCQUNYLG9CQUFhO2dCQUNiLHVCQUFnQjtnQkFDaEIseUJBQWE7Z0JBQ2Isd0JBQVM7Z0JBQ1QsNEJBQWlCO2FBQ2xCO1lBQ0QsWUFBWSxFQUFFLFVBQVU7WUFDeEIsT0FBTyxFQUFFLFVBQVU7WUFDbkIsU0FBUyxFQUFFLFFBQVE7U0FDcEIsQ0FBQztPQUNXLHNCQUFzQixDQU9sQztJQUFELDZCQUFDO0NBQUEsQUFQRCxJQU9DO0FBUFksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nUGlwZXNNb2R1bGUgfSBmcm9tICduZ3gtcGlwZXMnO1xuaW1wb3J0IHsgQWdtQ29yZU1vZHVsZSB9IGZyb20gJ0BhZ20vY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWFwV2FsZENvcmVNb2R1bGUgfSBmcm9tICdtYXAtd2FsZCc7XG5cbmltcG9ydCB7IFdNU0xheWVyQ29tcG9uZW50IH0gZnJvbSAnLi93bXMtbGF5ZXIvd21zLWxheWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXBMZWdlbmRDb21wb25lbnQgfSBmcm9tICcuL21hcC1sZWdlbmQvbWFwLWxlZ2VuZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFwQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vbWFwLWNvbnRyb2wvbWFwLWNvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGVTaGlmdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLXNoaWZ0ZXIvZGF0ZS1zaGlmdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPbmVUaW1lU3BsYXNoQ29tcG9uZW50IH0gZnJvbSAnLi9vbmUtdGltZS1zcGxhc2gvb25lLXRpbWUtc3BsYXNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlRWxlbWVudENvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS1lbGVtZW50L2RhdGUtZWxlbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2hhcmVWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9zaGFyZS12aWV3L3NoYXJlLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IExvY2F0aW9uU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9sb2NhdGlvbi1zZWFyY2gvbG9jYXRpb24tc2VhcmNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBab29tTGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL2FjdGlvbi1idXR0b25zL3pvb20tbGF5ZXIvem9vbS1sYXllci5jb21wb25lbnQnO1xuaW1wb3J0IHsgWm9vbUZ1bGxDb21wb25lbnQgfSBmcm9tICcuL2FjdGlvbi1idXR0b25zL3pvb20tZnVsbC96b29tLWZ1bGwuY29tcG9uZW50JztcbmltcG9ydCB7IFpvb21PdXRDb21wb25lbnQgfSBmcm9tICcuL2FjdGlvbi1idXR0b25zL3pvb20tb3V0L3pvb20tb3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBab29tSW5Db21wb25lbnQgfSBmcm9tICcuL2FjdGlvbi1idXR0b25zL3pvb20taW4vem9vbS1pbi5jb21wb25lbnQnO1xuaW1wb3J0IHtDeWNsZUJhc2VNYXBDb21wb25lbnR9IGZyb20gJy4vYWN0aW9uLWJ1dHRvbnMvY3ljbGUtYmFzZS1tYXAvY3ljbGUtYmFzZS1tYXAuY29tcG9uZW50JztcbmltcG9ydCB7Q3ljbGVPcGFjaXR5Q29tcG9uZW50fSBmcm9tICcuL2FjdGlvbi1idXR0b25zL2N5Y2xlLW9wYWNpdHkvY3ljbGUtb3BhY2l0eS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnV0dG9uQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9idXR0b24tYmFyL2J1dHRvbi1iYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRpbWVzZXJpZXNDaGFydENvbXBvbmVudCB9IGZyb20gJy4vdGltZXNlcmllcy1jaGFydC90aW1lc2VyaWVzLWNoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGZWF0dXJlVGFibGVDb21wb25lbnQgfSBmcm9tICcuL2ZlYXR1cmUtdGFibGUvZmVhdHVyZS10YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sbGFwc2libGVNYXBDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9jb2xsYXBzaWJsZS1tYXAtY29udHJvbC9jb2xsYXBzaWJsZS1tYXAtY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmFzZU1hcFNlbGVjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vYmFzZS1tYXAtc2VsZWN0aW9uL2Jhc2UtbWFwLXNlbGVjdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2ltcGxlVHJlZU5vZGVDb21wb25lbnQgfSBmcm9tICcuL3NpbXBsZS10cmVlLW5vZGUvc2ltcGxlLXRyZWUtbm9kZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2ltcGxlVHJlZUNvbXBvbmVudCB9IGZyb20gJy4vc2ltcGxlLXRyZWUvc2ltcGxlLXRyZWUuY29tcG9uZW50JztcbmltcG9ydCB7IENhdGFsb2dDb21wb25lbnQgfSBmcm9tICcuL2NhdGFsb2cvY2F0YWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZVNlbGVjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS1zZWxlY3Rpb24vZGF0ZS1zZWxlY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7IExheWVyUHJvcGVydGllc0NvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXItcHJvcGVydGllcy9sYXllci1wcm9wZXJ0aWVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXllckNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2xheWVyLWNvbnRyb2wvbGF5ZXItY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5ZXJlZE1hcENvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXJlZC1tYXAvbGF5ZXJlZC1tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IFRoZW1lTmF2YmFyQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZS1uYXZiYXIvdGhlbWUtbmF2YmFyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEdlb2NvZGluZ1NlcnZpY2UgfSBmcm9tICcuL2dlb2NvZGluZy5zZXJ2aWNlJztcblxuZXhwb3J0ICogZnJvbSAnLi93bXMtbGF5ZXIvd21zLWxheWVyLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL21hcC1sZWdlbmQvbWFwLWxlZ2VuZC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRlLXNoaWZ0ZXIvZGF0ZS1zaGlmdGVyLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL29uZS10aW1lLXNwbGFzaC9vbmUtdGltZS1zcGxhc2guY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZGF0ZS1lbGVtZW50L2RhdGUtZWxlbWVudC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9zaGFyZS12aWV3L3NoYXJlLXZpZXcuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbG9jYXRpb24tc2VhcmNoL2xvY2F0aW9uLXNlYXJjaC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9hY3Rpb24tYnV0dG9ucy96b29tLWxheWVyL3pvb20tbGF5ZXIuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vYWN0aW9uLWJ1dHRvbnMvem9vbS1mdWxsL3pvb20tZnVsbC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9hY3Rpb24tYnV0dG9ucy96b29tLW91dC96b29tLW91dC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9hY3Rpb24tYnV0dG9ucy96b29tLWluL3pvb20taW4uY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vYWN0aW9uLWJ1dHRvbnMvY3ljbGUtYmFzZS1tYXAvY3ljbGUtYmFzZS1tYXAuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vYWN0aW9uLWJ1dHRvbnMvY3ljbGUtb3BhY2l0eS9jeWNsZS1vcGFjaXR5LmNvbXBvbmVudCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vYnV0dG9uLWJhci9idXR0b24tYmFyLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3RpbWVzZXJpZXMtY2hhcnQvdGltZXNlcmllcy1jaGFydC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlLXRhYmxlL2ZlYXR1cmUtdGFibGUuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29sbGFwc2libGUtbWFwLWNvbnRyb2wvY29sbGFwc2libGUtbWFwLWNvbnRyb2wuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vYmFzZS1tYXAtc2VsZWN0aW9uL2Jhc2UtbWFwLXNlbGVjdGlvbi5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9zaW1wbGUtdHJlZS1ub2RlL3NpbXBsZS10cmVlLW5vZGUuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vc2ltcGxlLXRyZWUvc2ltcGxlLXRyZWUuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY2F0YWxvZy9jYXRhbG9nLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGUtc2VsZWN0aW9uL2RhdGUtc2VsZWN0aW9uLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2xheWVyLXByb3BlcnRpZXMvbGF5ZXItcHJvcGVydGllcy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9sYXllci1jb250cm9sL2xheWVyLWNvbnRyb2wuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbGF5ZXJlZC1tYXAvbGF5ZXJlZC1tYXAuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vdGhlbWUtbmF2YmFyL3RoZW1lLW5hdmJhci5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9tYXAtY29udHJvbC9tYXAtY29udHJvbC5jb21wb25lbnQnO1xuXG5leHBvcnQgKiBmcm9tICcuL2dlb2NvZGluZy5zZXJ2aWNlJztcblxuXG5jb25zdCBjb21wb25lbnRzID0gW1xuICAvLyRjb21wb25lbnRMaXN0XG4gIERhdGVTaGlmdGVyQ29tcG9uZW50LFxuICBPbmVUaW1lU3BsYXNoQ29tcG9uZW50LFxuICBEYXRlRWxlbWVudENvbXBvbmVudCxcbiAgU2hhcmVWaWV3Q29tcG9uZW50LFxuICBMb2NhdGlvblNlYXJjaENvbXBvbmVudCxcbiAgWm9vbUxheWVyQ29tcG9uZW50LFxuICBab29tRnVsbENvbXBvbmVudCxcbiAgWm9vbU91dENvbXBvbmVudCxcbiAgWm9vbUluQ29tcG9uZW50LFxuICBDeWNsZUJhc2VNYXBDb21wb25lbnQsXG4gIEN5Y2xlT3BhY2l0eUNvbXBvbmVudCxcbiAgQnV0dG9uQmFyQ29tcG9uZW50LFxuICBUaW1lc2VyaWVzQ2hhcnRDb21wb25lbnQsXG4gIEZlYXR1cmVUYWJsZUNvbXBvbmVudCxcbiAgQ29sbGFwc2libGVNYXBDb250cm9sQ29tcG9uZW50LFxuICBCYXNlTWFwU2VsZWN0aW9uQ29tcG9uZW50LFxuICBTaW1wbGVUcmVlTm9kZUNvbXBvbmVudCxcbiAgU2ltcGxlVHJlZUNvbXBvbmVudCxcbiAgQ2F0YWxvZ0NvbXBvbmVudCxcbiAgRGF0ZVNlbGVjdGlvbkNvbXBvbmVudCxcbiAgTGF5ZXJQcm9wZXJ0aWVzQ29tcG9uZW50LFxuICBMYXllckNvbnRyb2xDb21wb25lbnQsXG4gIExheWVyZWRNYXBDb21wb25lbnQsXG4gIFRoZW1lTmF2YmFyQ29tcG9uZW50LFxuICBXTVNMYXllckNvbXBvbmVudCxcbiAgTWFwTGVnZW5kQ29tcG9uZW50LFxuICBNYXBDb250cm9sQ29tcG9uZW50XG5dO1xuXG5jb25zdCBzZXJ2aWNlcyA9IFtcbiAgLy8kc2VydmljZUxpc3RcbiAgR2VvY29kaW5nU2VydmljZVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBBZ21Db3JlTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgTmdQaXBlc01vZHVsZSxcbiAgICBOZ2JNb2R1bGUsXG4gICAgTWFwV2FsZENvcmVNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBjb21wb25lbnRzLFxuICBleHBvcnRzOiBjb21wb25lbnRzLFxuICBwcm92aWRlcnM6IHNlcnZpY2VzXG59KVxuZXhwb3J0IGNsYXNzIE1hcFdhbGRCb290c3RyYXBNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChtb2R1bGVJbml0aWFsaXNhdGlvbjphbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE1hcFdhbGRCb290c3RyYXBNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IHNlcnZpY2VzXG4gICAgfTtcbiAgfVxufVxuIl19