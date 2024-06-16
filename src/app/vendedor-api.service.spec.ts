import { TestBed } from '@angular/core/testing';

import { VendedorApiService } from './vendedor-api.service';

describe('VendedorApiService', () => {
    let service: VendedorApiService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(VendedorApiService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
