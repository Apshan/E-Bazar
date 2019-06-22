import { TestBed } from '@angular/core/testing';
import { ProductlistService } from './productlist.service';
describe('ProductlistService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ProductlistService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=productlist.service.spec.js.map