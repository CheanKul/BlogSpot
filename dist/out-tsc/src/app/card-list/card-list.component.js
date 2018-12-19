import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var CardListComponent = /** @class */ (function () {
    function CardListComponent() {
    }
    CardListComponent.prototype.ngOnInit = function () {
        debugger;
        this.CardList = [];
        this.abc();
    };
    CardListComponent.prototype.abc = function () {
        this.CardList.push({ Header: "Naruto", Content: "I Love Naruto", SubTitile: "Characters", imgURL: "/assets/Images/602092.jpg" });
        this.CardList.push({ Header: "Death Note", Content: "I Love Naruto", SubTitile: "Characters", imgURL: "/assets/Images/602092.jpg" });
        this.CardList.push({ Header: "Friend", Content: "I Love Naruto", SubTitile: "Characters", imgURL: "/assets/Images/602092.jpg" });
        this.CardList.push({ Header: "Big Bang Theory", Content: "I Love Naruto", SubTitile: "Characters", imgURL: "/assets/Images/602092.jpg" });
    };
    CardListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-card-list',
            templateUrl: 'card-list.component.html',
            styleUrls: ['card-list.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CardListComponent);
    return CardListComponent;
}());
export { CardListComponent };
//# sourceMappingURL=card-list.component.js.map