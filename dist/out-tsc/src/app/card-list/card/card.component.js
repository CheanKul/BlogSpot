import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { CardModel } from '../../Models/CardModel';
var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.Collapse = false;
        this.ShowDetails = true;
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent.prototype.collapsDetails = function () {
        return {
            Collapse: this.Collapse = !this.Collapse,
            ShowDetails: this.ShowDetails = !this.ShowDetails
        };
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", CardModel)
    ], CardComponent.prototype, "Card", void 0);
    CardComponent = tslib_1.__decorate([
        Component({
            selector: 'app-card',
            templateUrl: './card.component.html',
            styleUrls: ['./card.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());
export { CardComponent };
//# sourceMappingURL=card.component.js.map