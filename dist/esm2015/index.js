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
var MapWaldBootstrapModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const http_1 = require("@angular/common/http");
const ngx_pipes_1 = require("ngx-pipes");
const core_2 = require("@agm/core");
const common_1 = require("@angular/common");
const map_wald_1 = require("map-wald");
const wms_layer_component_1 = require("./wms-layer/wms-layer.component");
const map_legend_component_1 = require("./map-legend/map-legend.component");
const map_control_component_1 = require("./map-control/map-control.component");
const date_shifter_component_1 = require("./date-shifter/date-shifter.component");
const one_time_splash_component_1 = require("./one-time-splash/one-time-splash.component");
const date_element_component_1 = require("./date-element/date-element.component");
const share_view_component_1 = require("./share-view/share-view.component");
const location_search_component_1 = require("./location-search/location-search.component");
const zoom_layer_component_1 = require("./action-buttons/zoom-layer/zoom-layer.component");
const zoom_full_component_1 = require("./action-buttons/zoom-full/zoom-full.component");
const zoom_out_component_1 = require("./action-buttons/zoom-out/zoom-out.component");
const zoom_in_component_1 = require("./action-buttons/zoom-in/zoom-in.component");
const cycle_base_map_component_1 = require("./action-buttons/cycle-base-map/cycle-base-map.component");
const cycle_opacity_component_1 = require("./action-buttons/cycle-opacity/cycle-opacity.component");
const button_bar_component_1 = require("./button-bar/button-bar.component");
const timeseries_chart_component_1 = require("./timeseries-chart/timeseries-chart.component");
const feature_table_component_1 = require("./feature-table/feature-table.component");
const collapsible_map_control_component_1 = require("./collapsible-map-control/collapsible-map-control.component");
const base_map_selection_component_1 = require("./base-map-selection/base-map-selection.component");
const simple_tree_node_component_1 = require("./simple-tree-node/simple-tree-node.component");
const simple_tree_component_1 = require("./simple-tree/simple-tree.component");
const catalog_component_1 = require("./catalog/catalog.component");
const date_selection_component_1 = require("./date-selection/date-selection.component");
const layer_properties_component_1 = require("./layer-properties/layer-properties.component");
const layer_control_component_1 = require("./layer-control/layer-control.component");
const layered_map_component_1 = require("./layered-map/layered-map.component");
const theme_navbar_component_1 = require("./theme-navbar/theme-navbar.component");
const geocoding_service_1 = require("./geocoding.service");
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
const components = [
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
const services = [
    //$serviceList
    geocoding_service_1.GeocodingService
];
let MapWaldBootstrapModule = MapWaldBootstrapModule_1 = class MapWaldBootstrapModule {
    static forRoot(moduleInitialisation) {
        return {
            ngModule: MapWaldBootstrapModule_1,
            providers: services
        };
    }
};
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
exports.MapWaldBootstrapModule = MapWaldBootstrapModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBOEQ7QUFDOUQsMENBQTZDO0FBQzdDLDZEQUF1RDtBQUN2RCwrQ0FBd0Q7QUFDeEQseUNBQTBDO0FBQzFDLG9DQUEwQztBQUMxQyw0Q0FBK0M7QUFDL0MsdUNBQTZDO0FBRTdDLHlFQUFvRTtBQUNwRSw0RUFBdUU7QUFDdkUsK0VBQTBFO0FBQzFFLGtGQUE2RTtBQUM3RSwyRkFBcUY7QUFDckYsa0ZBQTZFO0FBQzdFLDRFQUF1RTtBQUN2RSwyRkFBc0Y7QUFDdEYsMkZBQXNGO0FBQ3RGLHdGQUFtRjtBQUNuRixxRkFBZ0Y7QUFDaEYsa0ZBQTZFO0FBQzdFLHVHQUErRjtBQUMvRixvR0FBNkY7QUFDN0YsNEVBQXVFO0FBQ3ZFLDhGQUF5RjtBQUN6RixxRkFBZ0Y7QUFDaEYsbUhBQTZHO0FBQzdHLG9HQUE4RjtBQUM5Riw4RkFBd0Y7QUFDeEYsK0VBQTBFO0FBQzFFLG1FQUErRDtBQUMvRCx3RkFBbUY7QUFDbkYsOEZBQXlGO0FBQ3pGLHFGQUFnRjtBQUNoRiwrRUFBMEU7QUFDMUUsa0ZBQTZFO0FBRTdFLDJEQUF1RDtBQUV2RCxxREFBZ0Q7QUFDaEQsdURBQWtEO0FBQ2xELDJEQUFzRDtBQUN0RCxpRUFBNEQ7QUFDNUQsMkRBQXNEO0FBQ3RELHVEQUFrRDtBQUNsRCxpRUFBNEQ7QUFDNUQsc0VBQWlFO0FBQ2pFLG9FQUErRDtBQUMvRCxrRUFBNkQ7QUFDN0QsZ0VBQTJEO0FBQzNELDhFQUF5RTtBQUN6RSw0RUFBdUU7QUFFdkUsdURBQWtEO0FBQ2xELG1FQUE4RDtBQUM5RCw2REFBd0Q7QUFDeEQsaUZBQTRFO0FBQzVFLHVFQUFrRTtBQUNsRSxtRUFBOEQ7QUFDOUQseURBQW9EO0FBQ3BELGlEQUE0QztBQUM1QywrREFBMEQ7QUFDMUQsbUVBQThEO0FBQzlELDZEQUF3RDtBQUN4RCx5REFBb0Q7QUFDcEQsMkRBQXNEO0FBQ3RELHlEQUFvRDtBQUVwRCx5Q0FBb0M7QUFHcEMsTUFBTSxVQUFVLEdBQUc7SUFDakIsZ0JBQWdCO0lBQ2hCLDZDQUFvQjtJQUNwQixrREFBc0I7SUFDdEIsNkNBQW9CO0lBQ3BCLHlDQUFrQjtJQUNsQixtREFBdUI7SUFDdkIseUNBQWtCO0lBQ2xCLHVDQUFpQjtJQUNqQixxQ0FBZ0I7SUFDaEIsbUNBQWU7SUFDZixnREFBcUI7SUFDckIsK0NBQXFCO0lBQ3JCLHlDQUFrQjtJQUNsQixxREFBd0I7SUFDeEIsK0NBQXFCO0lBQ3JCLGtFQUE4QjtJQUM5Qix3REFBeUI7SUFDekIsb0RBQXVCO0lBQ3ZCLDJDQUFtQjtJQUNuQixvQ0FBZ0I7SUFDaEIsaURBQXNCO0lBQ3RCLHFEQUF3QjtJQUN4QiwrQ0FBcUI7SUFDckIsMkNBQW1CO0lBQ25CLDZDQUFvQjtJQUNwQix1Q0FBaUI7SUFDakIseUNBQWtCO0lBQ2xCLDJDQUFtQjtDQUNwQixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZixjQUFjO0lBQ2Qsb0NBQWdCO0NBQ2pCLENBQUM7QUFnQkYsSUFBYSxzQkFBc0IsOEJBQW5DLE1BQWEsc0JBQXNCO0lBQ2pDLE1BQU0sQ0FBQyxPQUFPLENBQUMsb0JBQXdCO1FBQ3JDLE9BQU87WUFDTCxRQUFRLEVBQUUsd0JBQXNCO1lBQ2hDLFNBQVMsRUFBRSxRQUFRO1NBQ3BCLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQVBZLHNCQUFzQjtJQWRsQyxlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxxQkFBWTtZQUNaLG1CQUFXO1lBQ1gsb0JBQWE7WUFDYix1QkFBZ0I7WUFDaEIseUJBQWE7WUFDYix3QkFBUztZQUNULDRCQUFpQjtTQUNsQjtRQUNELFlBQVksRUFBRSxVQUFVO1FBQ3hCLE9BQU8sRUFBRSxVQUFVO1FBQ25CLFNBQVMsRUFBRSxRQUFRO0tBQ3BCLENBQUM7R0FDVyxzQkFBc0IsQ0FPbEM7QUFQWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ2JNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdQaXBlc01vZHVsZSB9IGZyb20gJ25neC1waXBlcyc7XG5pbXBvcnQgeyBBZ21Db3JlTW9kdWxlIH0gZnJvbSAnQGFnbS9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXBXYWxkQ29yZU1vZHVsZSB9IGZyb20gJ21hcC13YWxkJztcblxuaW1wb3J0IHsgV01TTGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL3dtcy1sYXllci93bXMtbGF5ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1hcExlZ2VuZENvbXBvbmVudCB9IGZyb20gJy4vbWFwLWxlZ2VuZC9tYXAtbGVnZW5kLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXBDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9tYXAtY29udHJvbC9tYXAtY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZVNoaWZ0ZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtc2hpZnRlci9kYXRlLXNoaWZ0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE9uZVRpbWVTcGxhc2hDb21wb25lbnQgfSBmcm9tICcuL29uZS10aW1lLXNwbGFzaC9vbmUtdGltZS1zcGxhc2guY29tcG9uZW50JztcbmltcG9ydCB7IERhdGVFbGVtZW50Q29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLWVsZW1lbnQvZGF0ZS1lbGVtZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaGFyZVZpZXdDb21wb25lbnQgfSBmcm9tICcuL3NoYXJlLXZpZXcvc2hhcmUtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9jYXRpb25TZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL2xvY2F0aW9uLXNlYXJjaC9sb2NhdGlvbi1zZWFyY2guY29tcG9uZW50JztcbmltcG9ydCB7IFpvb21MYXllckNvbXBvbmVudCB9IGZyb20gJy4vYWN0aW9uLWJ1dHRvbnMvem9vbS1sYXllci96b29tLWxheWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBab29tRnVsbENvbXBvbmVudCB9IGZyb20gJy4vYWN0aW9uLWJ1dHRvbnMvem9vbS1mdWxsL3pvb20tZnVsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgWm9vbU91dENvbXBvbmVudCB9IGZyb20gJy4vYWN0aW9uLWJ1dHRvbnMvem9vbS1vdXQvem9vbS1vdXQuY29tcG9uZW50JztcbmltcG9ydCB7IFpvb21JbkNvbXBvbmVudCB9IGZyb20gJy4vYWN0aW9uLWJ1dHRvbnMvem9vbS1pbi96b29tLWluLmNvbXBvbmVudCc7XG5pbXBvcnQge0N5Y2xlQmFzZU1hcENvbXBvbmVudH0gZnJvbSAnLi9hY3Rpb24tYnV0dG9ucy9jeWNsZS1iYXNlLW1hcC9jeWNsZS1iYXNlLW1hcC5jb21wb25lbnQnO1xuaW1wb3J0IHtDeWNsZU9wYWNpdHlDb21wb25lbnR9IGZyb20gJy4vYWN0aW9uLWJ1dHRvbnMvY3ljbGUtb3BhY2l0eS9jeWNsZS1vcGFjaXR5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCdXR0b25CYXJDb21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi1iYXIvYnV0dG9uLWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGltZXNlcmllc0NoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi90aW1lc2VyaWVzLWNoYXJ0L3RpbWVzZXJpZXMtY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IEZlYXR1cmVUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vZmVhdHVyZS10YWJsZS9mZWF0dXJlLXRhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2xsYXBzaWJsZU1hcENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NvbGxhcHNpYmxlLW1hcC1jb250cm9sL2NvbGxhcHNpYmxlLW1hcC1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCYXNlTWFwU2VsZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlLW1hcC1zZWxlY3Rpb24vYmFzZS1tYXAtc2VsZWN0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaW1wbGVUcmVlTm9kZUNvbXBvbmVudCB9IGZyb20gJy4vc2ltcGxlLXRyZWUtbm9kZS9zaW1wbGUtdHJlZS1ub2RlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaW1wbGVUcmVlQ29tcG9uZW50IH0gZnJvbSAnLi9zaW1wbGUtdHJlZS9zaW1wbGUtdHJlZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2F0YWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vY2F0YWxvZy9jYXRhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlU2VsZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLXNlbGVjdGlvbi9kYXRlLXNlbGVjdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5ZXJQcm9wZXJ0aWVzQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllci1wcm9wZXJ0aWVzL2xheWVyLXByb3BlcnRpZXMuY29tcG9uZW50JztcbmltcG9ydCB7IExheWVyQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXItY29udHJvbC9sYXllci1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXllcmVkTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllcmVkLW1hcC9sYXllcmVkLW1hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGhlbWVOYXZiYXJDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lLW5hdmJhci90aGVtZS1uYXZiYXIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgR2VvY29kaW5nU2VydmljZSB9IGZyb20gJy4vZ2VvY29kaW5nLnNlcnZpY2UnO1xuXG5leHBvcnQgKiBmcm9tICcuL3dtcy1sYXllci93bXMtbGF5ZXIuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbWFwLWxlZ2VuZC9tYXAtbGVnZW5kLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGUtc2hpZnRlci9kYXRlLXNoaWZ0ZXIuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vb25lLXRpbWUtc3BsYXNoL29uZS10aW1lLXNwbGFzaC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRlLWVsZW1lbnQvZGF0ZS1lbGVtZW50LmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3NoYXJlLXZpZXcvc2hhcmUtdmlldy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9sb2NhdGlvbi1zZWFyY2gvbG9jYXRpb24tc2VhcmNoLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2FjdGlvbi1idXR0b25zL3pvb20tbGF5ZXIvem9vbS1sYXllci5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9hY3Rpb24tYnV0dG9ucy96b29tLWZ1bGwvem9vbS1mdWxsLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2FjdGlvbi1idXR0b25zL3pvb20tb3V0L3pvb20tb3V0LmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2FjdGlvbi1idXR0b25zL3pvb20taW4vem9vbS1pbi5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9hY3Rpb24tYnV0dG9ucy9jeWNsZS1iYXNlLW1hcC9jeWNsZS1iYXNlLW1hcC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9hY3Rpb24tYnV0dG9ucy9jeWNsZS1vcGFjaXR5L2N5Y2xlLW9wYWNpdHkuY29tcG9uZW50JztcblxuZXhwb3J0ICogZnJvbSAnLi9idXR0b24tYmFyL2J1dHRvbi1iYXIuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vdGltZXNlcmllcy1jaGFydC90aW1lc2VyaWVzLWNoYXJ0LmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmUtdGFibGUvZmVhdHVyZS10YWJsZS5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb2xsYXBzaWJsZS1tYXAtY29udHJvbC9jb2xsYXBzaWJsZS1tYXAtY29udHJvbC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9iYXNlLW1hcC1zZWxlY3Rpb24vYmFzZS1tYXAtc2VsZWN0aW9uLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3NpbXBsZS10cmVlLW5vZGUvc2ltcGxlLXRyZWUtbm9kZS5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9zaW1wbGUtdHJlZS9zaW1wbGUtdHJlZS5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jYXRhbG9nL2NhdGFsb2cuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZGF0ZS1zZWxlY3Rpb24vZGF0ZS1zZWxlY3Rpb24uY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbGF5ZXItcHJvcGVydGllcy9sYXllci1wcm9wZXJ0aWVzLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2xheWVyLWNvbnRyb2wvbGF5ZXItY29udHJvbC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9sYXllcmVkLW1hcC9sYXllcmVkLW1hcC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi90aGVtZS1uYXZiYXIvdGhlbWUtbmF2YmFyLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL21hcC1jb250cm9sL21hcC1jb250cm9sLmNvbXBvbmVudCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vZ2VvY29kaW5nLnNlcnZpY2UnO1xuXG5cbmNvbnN0IGNvbXBvbmVudHMgPSBbXG4gIC8vJGNvbXBvbmVudExpc3RcbiAgRGF0ZVNoaWZ0ZXJDb21wb25lbnQsXG4gIE9uZVRpbWVTcGxhc2hDb21wb25lbnQsXG4gIERhdGVFbGVtZW50Q29tcG9uZW50LFxuICBTaGFyZVZpZXdDb21wb25lbnQsXG4gIExvY2F0aW9uU2VhcmNoQ29tcG9uZW50LFxuICBab29tTGF5ZXJDb21wb25lbnQsXG4gIFpvb21GdWxsQ29tcG9uZW50LFxuICBab29tT3V0Q29tcG9uZW50LFxuICBab29tSW5Db21wb25lbnQsXG4gIEN5Y2xlQmFzZU1hcENvbXBvbmVudCxcbiAgQ3ljbGVPcGFjaXR5Q29tcG9uZW50LFxuICBCdXR0b25CYXJDb21wb25lbnQsXG4gIFRpbWVzZXJpZXNDaGFydENvbXBvbmVudCxcbiAgRmVhdHVyZVRhYmxlQ29tcG9uZW50LFxuICBDb2xsYXBzaWJsZU1hcENvbnRyb2xDb21wb25lbnQsXG4gIEJhc2VNYXBTZWxlY3Rpb25Db21wb25lbnQsXG4gIFNpbXBsZVRyZWVOb2RlQ29tcG9uZW50LFxuICBTaW1wbGVUcmVlQ29tcG9uZW50LFxuICBDYXRhbG9nQ29tcG9uZW50LFxuICBEYXRlU2VsZWN0aW9uQ29tcG9uZW50LFxuICBMYXllclByb3BlcnRpZXNDb21wb25lbnQsXG4gIExheWVyQ29udHJvbENvbXBvbmVudCxcbiAgTGF5ZXJlZE1hcENvbXBvbmVudCxcbiAgVGhlbWVOYXZiYXJDb21wb25lbnQsXG4gIFdNU0xheWVyQ29tcG9uZW50LFxuICBNYXBMZWdlbmRDb21wb25lbnQsXG4gIE1hcENvbnRyb2xDb21wb25lbnRcbl07XG5cbmNvbnN0IHNlcnZpY2VzID0gW1xuICAvLyRzZXJ2aWNlTGlzdFxuICBHZW9jb2RpbmdTZXJ2aWNlXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEFnbUNvcmVNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBOZ1BpcGVzTW9kdWxlLFxuICAgIE5nYk1vZHVsZSxcbiAgICBNYXBXYWxkQ29yZU1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IGNvbXBvbmVudHMsXG4gIGV4cG9ydHM6IGNvbXBvbmVudHMsXG4gIHByb3ZpZGVyczogc2VydmljZXNcbn0pXG5leHBvcnQgY2xhc3MgTWFwV2FsZEJvb3RzdHJhcE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KG1vZHVsZUluaXRpYWxpc2F0aW9uOmFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTWFwV2FsZEJvb3RzdHJhcE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogc2VydmljZXNcbiAgICB9O1xuICB9XG59XG4iXX0=