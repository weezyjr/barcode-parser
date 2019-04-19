import { TestBed } from '@angular/core/testing';

import { BarcodeFormatService } from './barcode-format.service';

describe('BarcodeFormatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BarcodeFormatService = TestBed.get(BarcodeFormatService);
    expect(service).toBeTruthy();
  });
});
