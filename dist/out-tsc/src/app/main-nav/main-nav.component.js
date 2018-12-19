import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
var MainNavComponent = /** @class */ (function () {
    function MainNavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
            .pipe(map(function (result) { return result.matches; }));
    }
    MainNavComponent = tslib_1.__decorate([
        Component({
            selector: 'app-main-nav',
            templateUrl: './main-nav.component.html',
            styleUrls: ['./main-nav.component.css'],
        }),
        tslib_1.__metadata("design:paramtypes", [BreakpointObserver])
    ], MainNavComponent);
    return MainNavComponent;
}());
export { MainNavComponent };
//# sourceMappingURL=main-nav.component.js.map