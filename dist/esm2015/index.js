"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapWaldBootstrapModule = void 0;
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
const i0 = require("@angular/core");
__exportStar(require("./wms-layer/wms-layer.component"), exports);
__exportStar(require("./map-legend/map-legend.component"), exports);
__exportStar(require("./date-shifter/date-shifter.component"), exports);
__exportStar(require("./one-time-splash/one-time-splash.component"), exports);
__exportStar(require("./date-element/date-element.component"), exports);
__exportStar(require("./share-view/share-view.component"), exports);
__exportStar(require("./location-search/location-search.component"), exports);
__exportStar(require("./action-buttons/zoom-layer/zoom-layer.component"), exports);
__exportStar(require("./action-buttons/zoom-full/zoom-full.component"), exports);
__exportStar(require("./action-buttons/zoom-out/zoom-out.component"), exports);
__exportStar(require("./action-buttons/zoom-in/zoom-in.component"), exports);
__exportStar(require("./action-buttons/cycle-base-map/cycle-base-map.component"), exports);
__exportStar(require("./action-buttons/cycle-opacity/cycle-opacity.component"), exports);
__exportStar(require("./button-bar/button-bar.component"), exports);
__exportStar(require("./timeseries-chart/timeseries-chart.component"), exports);
__exportStar(require("./feature-table/feature-table.component"), exports);
__exportStar(require("./collapsible-map-control/collapsible-map-control.component"), exports);
__exportStar(require("./base-map-selection/base-map-selection.component"), exports);
__exportStar(require("./simple-tree-node/simple-tree-node.component"), exports);
__exportStar(require("./simple-tree/simple-tree.component"), exports);
__exportStar(require("./catalog/catalog.component"), exports);
__exportStar(require("./date-selection/date-selection.component"), exports);
__exportStar(require("./layer-properties/layer-properties.component"), exports);
__exportStar(require("./layer-control/layer-control.component"), exports);
__exportStar(require("./layered-map/layered-map.component"), exports);
__exportStar(require("./theme-navbar/theme-navbar.component"), exports);
__exportStar(require("./map-control/map-control.component"), exports);
__exportStar(require("./geocoding.service"), exports);
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
class MapWaldBootstrapModule {
    static forRoot(moduleInitialisation) {
        return {
            ngModule: MapWaldBootstrapModule,
            providers: services
        };
    }
}
exports.MapWaldBootstrapModule = MapWaldBootstrapModule;
MapWaldBootstrapModule.ɵmod = i0.ɵɵdefineNgModule({ type: MapWaldBootstrapModule });
MapWaldBootstrapModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MapWaldBootstrapModule_Factory(t) { return new (t || MapWaldBootstrapModule)(); }, providers: services, imports: [[
            common_1.CommonModule,
            forms_1.FormsModule,
            core_2.AgmCoreModule,
            http_1.HttpClientModule,
            ngx_pipes_1.NgPipesModule,
            ng_bootstrap_1.NgbModule,
            map_wald_1.MapWaldCoreModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MapWaldBootstrapModule, { declarations: [
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
        map_control_component_1.MapControlComponent], imports: [common_1.CommonModule,
        forms_1.FormsModule,
        core_2.AgmCoreModule,
        http_1.HttpClientModule,
        ngx_pipes_1.NgPipesModule,
        ng_bootstrap_1.NgbModule,
        map_wald_1.MapWaldCoreModule], exports: [
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
        map_control_component_1.MapControlComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MapWaldBootstrapModule, [{
        type: core_1.NgModule,
        args: [{
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
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC12aXN1YWwvIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsd0NBQThEO0FBQzlELDBDQUE2QztBQUM3Qyw2REFBdUQ7QUFDdkQsK0NBQXdEO0FBQ3hELHlDQUEwQztBQUMxQyxvQ0FBMEM7QUFDMUMsNENBQStDO0FBQy9DLHVDQUE2QztBQUU3Qyx5RUFBb0U7QUFDcEUsNEVBQXVFO0FBQ3ZFLCtFQUEwRTtBQUMxRSxrRkFBNkU7QUFDN0UsMkZBQXFGO0FBQ3JGLGtGQUE2RTtBQUM3RSw0RUFBdUU7QUFDdkUsMkZBQXNGO0FBQ3RGLDJGQUFzRjtBQUN0Rix3RkFBbUY7QUFDbkYscUZBQWdGO0FBQ2hGLGtGQUE2RTtBQUM3RSx1R0FBK0Y7QUFDL0Ysb0dBQTZGO0FBQzdGLDRFQUF1RTtBQUN2RSw4RkFBeUY7QUFDekYscUZBQWdGO0FBQ2hGLG1IQUE2RztBQUM3RyxvR0FBOEY7QUFDOUYsOEZBQXdGO0FBQ3hGLCtFQUEwRTtBQUMxRSxtRUFBK0Q7QUFDL0Qsd0ZBQW1GO0FBQ25GLDhGQUF5RjtBQUN6RixxRkFBZ0Y7QUFDaEYsK0VBQTBFO0FBQzFFLGtGQUE2RTtBQUU3RSwyREFBdUQ7O0FBRXZELGtFQUFnRDtBQUNoRCxvRUFBa0Q7QUFDbEQsd0VBQXNEO0FBQ3RELDhFQUE0RDtBQUM1RCx3RUFBc0Q7QUFDdEQsb0VBQWtEO0FBQ2xELDhFQUE0RDtBQUM1RCxtRkFBaUU7QUFDakUsaUZBQStEO0FBQy9ELCtFQUE2RDtBQUM3RCw2RUFBMkQ7QUFDM0QsMkZBQXlFO0FBQ3pFLHlGQUF1RTtBQUV2RSxvRUFBa0Q7QUFDbEQsZ0ZBQThEO0FBQzlELDBFQUF3RDtBQUN4RCw4RkFBNEU7QUFDNUUsb0ZBQWtFO0FBQ2xFLGdGQUE4RDtBQUM5RCxzRUFBb0Q7QUFDcEQsOERBQTRDO0FBQzVDLDRFQUEwRDtBQUMxRCxnRkFBOEQ7QUFDOUQs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YUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ2JNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdQaXBlc01vZHVsZSB9IGZyb20gJ25neC1waXBlcyc7XG5pbXBvcnQgeyBBZ21Db3JlTW9kdWxlIH0gZnJvbSAnQGFnbS9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXBXYWxkQ29yZU1vZHVsZSB9IGZyb20gJ21hcC13YWxkJztcblxuaW1wb3J0IHsgV01TTGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL3dtcy1sYXllci93bXMtbGF5ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1hcExlZ2VuZENvbXBvbmVudCB9IGZyb20gJy4vbWFwLWxlZ2VuZC9tYXAtbGVnZW5kLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXBDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9tYXAtY29udHJvbC9tYXAtY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZVNoaWZ0ZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtc2hpZnRlci9kYXRlLXNoaWZ0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE9uZVRpbWVTcGxhc2hDb21wb25lbnQgfSBmcm9tICcuL29uZS10aW1lLXNwbGFzaC9vbmUtdGltZS1zcGxhc2guY29tcG9uZW50JztcbmltcG9ydCB7IERhdGVFbGVtZW50Q29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLWVsZW1lbnQvZGF0ZS1lbGVtZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaGFyZVZpZXdDb21wb25lbnQgfSBmcm9tICcuL3NoYXJlLXZpZXcvc2hhcmUtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9jYXRpb25TZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL2xvY2F0aW9uLXNlYXJjaC9sb2NhdGlvbi1zZWFyY2guY29tcG9uZW50JztcbmltcG9ydCB7IFpvb21MYXllckNvbXBvbmVudCB9IGZyb20gJy4vYWN0aW9uLWJ1dHRvbnMvem9vbS1sYXllci96b29tLWxheWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBab29tRnVsbENvbXBvbmVudCB9IGZyb20gJy4vYWN0aW9uLWJ1dHRvbnMvem9vbS1mdWxsL3pvb20tZnVsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgWm9vbU91dENvbXBvbmVudCB9IGZyb20gJy4vYWN0aW9uLWJ1dHRvbnMvem9vbS1vdXQvem9vbS1vdXQuY29tcG9uZW50JztcbmltcG9ydCB7IFpvb21JbkNvbXBvbmVudCB9IGZyb20gJy4vYWN0aW9uLWJ1dHRvbnMvem9vbS1pbi96b29tLWluLmNvbXBvbmVudCc7XG5pbXBvcnQge0N5Y2xlQmFzZU1hcENvbXBvbmVudH0gZnJvbSAnLi9hY3Rpb24tYnV0dG9ucy9jeWNsZS1iYXNlLW1hcC9jeWNsZS1iYXNlLW1hcC5jb21wb25lbnQnO1xuaW1wb3J0IHtDeWNsZU9wYWNpdHlDb21wb25lbnR9IGZyb20gJy4vYWN0aW9uLWJ1dHRvbnMvY3ljbGUtb3BhY2l0eS9jeWNsZS1vcGFjaXR5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCdXR0b25CYXJDb21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi1iYXIvYnV0dG9uLWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGltZXNlcmllc0NoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi90aW1lc2VyaWVzLWNoYXJ0L3RpbWVzZXJpZXMtY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IEZlYXR1cmVUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vZmVhdHVyZS10YWJsZS9mZWF0dXJlLXRhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2xsYXBzaWJsZU1hcENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NvbGxhcHNpYmxlLW1hcC1jb250cm9sL2NvbGxhcHNpYmxlLW1hcC1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCYXNlTWFwU2VsZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlLW1hcC1zZWxlY3Rpb24vYmFzZS1tYXAtc2VsZWN0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaW1wbGVUcmVlTm9kZUNvbXBvbmVudCB9IGZyb20gJy4vc2ltcGxlLXRyZWUtbm9kZS9zaW1wbGUtdHJlZS1ub2RlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaW1wbGVUcmVlQ29tcG9uZW50IH0gZnJvbSAnLi9zaW1wbGUtdHJlZS9zaW1wbGUtdHJlZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2F0YWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vY2F0YWxvZy9jYXRhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlU2VsZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLXNlbGVjdGlvbi9kYXRlLXNlbGVjdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5ZXJQcm9wZXJ0aWVzQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllci1wcm9wZXJ0aWVzL2xheWVyLXByb3BlcnRpZXMuY29tcG9uZW50JztcbmltcG9ydCB7IExheWVyQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXItY29udHJvbC9sYXllci1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXllcmVkTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllcmVkLW1hcC9sYXllcmVkLW1hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGhlbWVOYXZiYXJDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lLW5hdmJhci90aGVtZS1uYXZiYXIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgR2VvY29kaW5nU2VydmljZSB9IGZyb20gJy4vZ2VvY29kaW5nLnNlcnZpY2UnO1xuXG5leHBvcnQgKiBmcm9tICcuL3dtcy1sYXllci93bXMtbGF5ZXIuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbWFwLWxlZ2VuZC9tYXAtbGVnZW5kLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGUtc2hpZnRlci9kYXRlLXNoaWZ0ZXIuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vb25lLXRpbWUtc3BsYXNoL29uZS10aW1lLXNwbGFzaC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRlLWVsZW1lbnQvZGF0ZS1lbGVtZW50LmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3NoYXJlLXZpZXcvc2hhcmUtdmlldy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9sb2NhdGlvbi1zZWFyY2gvbG9jYXRpb24tc2VhcmNoLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2FjdGlvbi1idXR0b25zL3pvb20tbGF5ZXIvem9vbS1sYXllci5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9hY3Rpb24tYnV0dG9ucy96b29tLWZ1bGwvem9vbS1mdWxsLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2FjdGlvbi1idXR0b25zL3pvb20tb3V0L3pvb20tb3V0LmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2FjdGlvbi1idXR0b25zL3pvb20taW4vem9vbS1pbi5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9hY3Rpb24tYnV0dG9ucy9jeWNsZS1iYXNlLW1hcC9jeWNsZS1iYXNlLW1hcC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9hY3Rpb24tYnV0dG9ucy9jeWNsZS1vcGFjaXR5L2N5Y2xlLW9wYWNpdHkuY29tcG9uZW50JztcblxuZXhwb3J0ICogZnJvbSAnLi9idXR0b24tYmFyL2J1dHRvbi1iYXIuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vdGltZXNlcmllcy1jaGFydC90aW1lc2VyaWVzLWNoYXJ0LmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmUtdGFibGUvZmVhdHVyZS10YWJsZS5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb2xsYXBzaWJsZS1tYXAtY29udHJvbC9jb2xsYXBzaWJsZS1tYXAtY29udHJvbC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9iYXNlLW1hcC1zZWxlY3Rpb24vYmFzZS1tYXAtc2VsZWN0aW9uLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3NpbXBsZS10cmVlLW5vZGUvc2ltcGxlLXRyZWUtbm9kZS5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9zaW1wbGUtdHJlZS9zaW1wbGUtdHJlZS5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jYXRhbG9nL2NhdGFsb2cuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZGF0ZS1zZWxlY3Rpb24vZGF0ZS1zZWxlY3Rpb24uY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbGF5ZXItcHJvcGVydGllcy9sYXllci1wcm9wZXJ0aWVzLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2xheWVyLWNvbnRyb2wvbGF5ZXItY29udHJvbC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9sYXllcmVkLW1hcC9sYXllcmVkLW1hcC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi90aGVtZS1uYXZiYXIvdGhlbWUtbmF2YmFyLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL21hcC1jb250cm9sL21hcC1jb250cm9sLmNvbXBvbmVudCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vZ2VvY29kaW5nLnNlcnZpY2UnO1xuXG5cbmNvbnN0IGNvbXBvbmVudHMgPSBbXG4gIC8vJGNvbXBvbmVudExpc3RcbiAgRGF0ZVNoaWZ0ZXJDb21wb25lbnQsXG4gIE9uZVRpbWVTcGxhc2hDb21wb25lbnQsXG4gIERhdGVFbGVtZW50Q29tcG9uZW50LFxuICBTaGFyZVZpZXdDb21wb25lbnQsXG4gIExvY2F0aW9uU2VhcmNoQ29tcG9uZW50LFxuICBab29tTGF5ZXJDb21wb25lbnQsXG4gIFpvb21GdWxsQ29tcG9uZW50LFxuICBab29tT3V0Q29tcG9uZW50LFxuICBab29tSW5Db21wb25lbnQsXG4gIEN5Y2xlQmFzZU1hcENvbXBvbmVudCxcbiAgQ3ljbGVPcGFjaXR5Q29tcG9uZW50LFxuICBCdXR0b25CYXJDb21wb25lbnQsXG4gIFRpbWVzZXJpZXNDaGFydENvbXBvbmVudCxcbiAgRmVhdHVyZVRhYmxlQ29tcG9uZW50LFxuICBDb2xsYXBzaWJsZU1hcENvbnRyb2xDb21wb25lbnQsXG4gIEJhc2VNYXBTZWxlY3Rpb25Db21wb25lbnQsXG4gIFNpbXBsZVRyZWVOb2RlQ29tcG9uZW50LFxuICBTaW1wbGVUcmVlQ29tcG9uZW50LFxuICBDYXRhbG9nQ29tcG9uZW50LFxuICBEYXRlU2VsZWN0aW9uQ29tcG9uZW50LFxuICBMYXllclByb3BlcnRpZXNDb21wb25lbnQsXG4gIExheWVyQ29udHJvbENvbXBvbmVudCxcbiAgTGF5ZXJlZE1hcENvbXBvbmVudCxcbiAgVGhlbWVOYXZiYXJDb21wb25lbnQsXG4gIFdNU0xheWVyQ29tcG9uZW50LFxuICBNYXBMZWdlbmRDb21wb25lbnQsXG4gIE1hcENvbnRyb2xDb21wb25lbnRcbl07XG5cbmNvbnN0IHNlcnZpY2VzID0gW1xuICAvLyRzZXJ2aWNlTGlzdFxuICBHZW9jb2RpbmdTZXJ2aWNlXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEFnbUNvcmVNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBOZ1BpcGVzTW9kdWxlLFxuICAgIE5nYk1vZHVsZSxcbiAgICBNYXBXYWxkQ29yZU1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IGNvbXBvbmVudHMsXG4gIGV4cG9ydHM6IGNvbXBvbmVudHMsXG4gIHByb3ZpZGVyczogc2VydmljZXNcbn0pXG5leHBvcnQgY2xhc3MgTWFwV2FsZEJvb3RzdHJhcE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KG1vZHVsZUluaXRpYWxpc2F0aW9uOmFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TWFwV2FsZEJvb3RzdHJhcE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTWFwV2FsZEJvb3RzdHJhcE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogc2VydmljZXNcbiAgICB9O1xuICB9XG59XG4iXX0=