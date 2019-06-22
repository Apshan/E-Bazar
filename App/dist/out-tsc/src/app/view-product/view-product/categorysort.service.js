var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { productlist } from 'src/app/mock-productlist';
var CategorysortService = /** @class */ (function () {
    function CategorysortService() {
    }
    CategorysortService.prototype.getcategory = function () {
        var cato = [];
        productlist.map(function (p) {
            cato.push(p.name);
        });
        return of(cato);
    };
    CategorysortService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CategorysortService);
    return CategorysortService;
}());
export { CategorysortService };
//# sourceMappingURL=categorysort.service.js.map