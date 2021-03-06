/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from './content';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../config/config';
import * as import9 from '@angular/core/src/linker/element_ref';
import * as import10 from '../app/app';
import * as import11 from '../../util/keyboard';
import * as import12 from '@angular/core/src/zone/ng_zone';
import * as import13 from '../../navigation/view-controller';
import * as import14 from '../tabs/tabs';
import * as import15 from '../../util/dom-controller';
export var Wrapper_Content = (function () {
    function Wrapper_Content(p0, p1, p2, p3, p4, p5, p6, p7, p8) {
        this._changed = false;
        this.context = new import0.Content(p0, p1, p2, p3, p4, p5, p6, p7, p8);
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
    }
    Wrapper_Content.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_Content.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
        (this.subscription0 && this.subscription0.unsubscribe());
        (this.subscription1 && this.subscription1.unsubscribe());
        (this.subscription2 && this.subscription2.unsubscribe());
        (this.subscription3 && this.subscription3.unsubscribe());
        (this.subscription4 && this.subscription4.unsubscribe());
    };
    Wrapper_Content.prototype.check_fullscreen = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.fullscreen = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_Content.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_Content.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_1 = this.context.statusbarPadding;
        if (import3.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            view.renderer.setElementClass(el, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
    };
    Wrapper_Content.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_Content.prototype.subscribe = function (view, _eventHandler, emit0, emit1, emit2, emit3, emit4) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.ionScrollStart.subscribe(_eventHandler.bind(view, 'ionScrollStart')));
        }
        if (emit1) {
            (this.subscription1 = this.context.ionScroll.subscribe(_eventHandler.bind(view, 'ionScroll')));
        }
        if (emit2) {
            (this.subscription2 = this.context.ionScrollEnd.subscribe(_eventHandler.bind(view, 'ionScrollEnd')));
        }
        if (emit3) {
            (this.subscription3 = this.context.readReady.subscribe(_eventHandler.bind(view, 'readReady')));
        }
        if (emit4) {
            (this.subscription4 = this.context.writeReady.subscribe(_eventHandler.bind(view, 'writeReady')));
        }
    };
    return Wrapper_Content;
}());
var renderType_Content_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_Content_Host0 = (function (_super) {
    __extends(View_Content_Host0, _super);
    function View_Content_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_Content_Host0, renderType_Content_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckAlways);
    }
    View_Content_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ion-content', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_Content0(this.viewUtils, this, 0, this._el_0);
        this._Content_0_3 = new Wrapper_Content(this.injectorGet(import8.Config, this.parentIndex), new import9.ElementRef(this._el_0), this.renderer, this.injectorGet(import10.App, this.parentIndex), this.injectorGet(import11.Keyboard, this.parentIndex), this.injectorGet(import12.NgZone, this.parentIndex), this.injectorGet(import13.ViewController, this.parentIndex, null), this.injectorGet(import14.Tabs, this.parentIndex, null), this.injectorGet(import15.DomController, this.parentIndex));
        this.compView_0.create(this._Content_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._Content_0_3.context);
    };
    View_Content_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Content) && (0 === requestNodeIndex))) {
            return this._Content_0_3.context;
        }
        return notFoundResult;
    };
    View_Content_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._Content_0_3.ngDoCheck(this, this._el_0, throwOnChange)) {
            this.compView_0.markAsCheckOnce();
        }
        this._Content_0_3.checkHost(this, this.compView_0, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    };
    View_Content_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._Content_0_3.ngOnDestroy();
    };
    View_Content_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_Content_Host0.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 0) && (ngContentIndex == 0))) { }
        if (((nodeIndex == 0) && (ngContentIndex == 1))) { }
        if (((nodeIndex == 0) && (ngContentIndex == 2))) { }
    };
    return View_Content_Host0;
}(import2.AppView));
export var ContentNgFactory = new import7.ComponentFactory('ion-content', View_Content_Host0, import0.Content);
var styles_Content = [];
var renderType_Content = import3.createRenderComponentType('', 3, import5.ViewEncapsulation.None, styles_Content, {});
export var View_Content0 = (function (_super) {
    __extends(View_Content0, _super);
    function View_Content0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_Content0, renderType_Content, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckOnce);
    }
    View_Content0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'fixed-content'), null);
        this.projectNodes(this._el_0, 0);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'scroll-content'), null);
        this.projectNodes(this._el_1, 1);
        this.projectNodes(parentRenderNode, 2);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1
        ]), null);
        return null;
    };
    return View_Content0;
}(import2.AppView));
//# sourceMappingURL=content.ngfactory.js.map