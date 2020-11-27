import { AfterViewInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import * as i0 from "@angular/core";
export declare class OneTimeSplashComponent implements AfterViewInit {
    private modalService;
    splashTemplate: any;
    application: string;
    label: string;
    hideMessage: string;
    klass: string;
    doNotShow: boolean;
    current: NgbModalRef;
    constructor(modalService: NgbModal);
    storageKey(): string;
    ngAfterViewInit(): void;
    show(): void;
    close(): void;
    doNotShowClicked(): void;
    static ɵfac: i0.ɵɵFactoryDef<OneTimeSplashComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<OneTimeSplashComponent, "one-time-splash", never, { "application": "application"; "label": "label"; "hideMessage": "hideMessage"; "klass": "klass"; }, {}, never, ["*"]>;
}
