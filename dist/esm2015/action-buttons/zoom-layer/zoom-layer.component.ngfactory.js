"use strict";
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
const i0 = require("@angular/core");
const i1 = require("@ng-bootstrap/ng-bootstrap");
const i2 = require("@angular/common");
const i3 = require("./zoom-layer.component");
var styles_ZoomLayerComponent = [];
var RenderType_ZoomLayerComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_ZoomLayerComponent, data: {} });
exports.RenderType_ZoomLayerComponent = RenderType_ZoomLayerComponent;
function View_ZoomLayerComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 16777216, null, null, 2, "button", [["class", "btn btn-secondary btn-sm"], ["ngbTooltip", "Zoom to selected layer"], ["placement", "right"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.zoomToLayer() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 212992, null, 0, i1.NgbTooltip, [i0.ElementRef, i0.Renderer2, i0.Injector, i0.ComponentFactoryResolver, i0.ViewContainerRef, i1.NgbTooltipConfig, i0.NgZone, i2.DOCUMENT, i0.ChangeDetectorRef], { placement: [0, "placement"], ngbTooltip: [1, "ngbTooltip"] }, null), (_l()(), i0.ɵeld(2, 0, null, null, 0, "i", [["class", "fa fa-compress"]], null, null, null, null, null))], function (_ck, _v) { var currVal_1 = "right"; var currVal_2 = "Zoom to selected layer"; _ck(_v, 1, 0, currVal_1, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.layer; _ck(_v, 0, 0, currVal_0); }); }
exports.View_ZoomLayerComponent_0 = View_ZoomLayerComponent_0;
function View_ZoomLayerComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "zoom-layer", [], null, null, null, View_ZoomLayerComponent_0, RenderType_ZoomLayerComponent)), i0.ɵdid(1, 4243456, null, 0, i3.ZoomLayerComponent, [], null, null)], null, null); }
exports.View_ZoomLayerComponent_Host_0 = View_ZoomLayerComponent_Host_0;
var ZoomLayerComponentNgFactory = i0.ɵccf("zoom-layer", i3.ZoomLayerComponent, View_ZoomLayerComponent_Host_0, { map: "map", layer: "layer", fullBounds: "fullBounds" }, {}, []);
exports.ZoomLayerComponentNgFactory = ZoomLayerComponentNgFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS1sYXllci5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtdmlzdWFsLyIsInNvdXJjZXMiOlsiYWN0aW9uLWJ1dHRvbnMvem9vbS1sYXllci96b29tLWxheWVyLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJhY3Rpb24tYnV0dG9ucy96b29tLWxheWVyL3pvb20tbGF5ZXIuY29tcG9uZW50LnRzLlpvb21MYXllckNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs2RENBQSxxUkFJQyxZQURPOzt3QkFBdUI7TUFIL0IsNFNBSUMsSUFBQSxxR0FBMEIsMEJBRm5CLHVCQUFpQixFQURqQix3Q0FBbUMsRUFEM0MsWUFJQyxFQUZPLFNBQWlCLEVBRGpCLFNBQW1DLG1EQURyQixvQkFBbUIsUUFBekMsWUFJQyxFQUpxQixTQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGkwIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaTAuQ29tcG9uZW50RmFjdG9yeTtcbiIsIjxidXR0b24gdHlwZT1cImJ1dHRvblwiIFtkaXNhYmxlZF09XCIhbGF5ZXJcIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiXG4gICAgICAgIG5nYlRvb2x0aXA9XCJab29tIHRvIHNlbGVjdGVkIGxheWVyXCJcbiAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxuICAgICAgICAoY2xpY2spPVwiem9vbVRvTGF5ZXIoKVwiXG4+PGkgY2xhc3M9XCJmYSBmYS1jb21wcmVzc1wiPjwvaT5cbjwvYnV0dG9uPlxuIl19