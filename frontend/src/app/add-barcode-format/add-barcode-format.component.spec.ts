import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBarcodeFormatComponent } from './add-barcode-format.component';

describe('AddBarcodeFormatComponent', () => {
  let component: AddBarcodeFormatComponent;
  let fixture: ComponentFixture<AddBarcodeFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBarcodeFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBarcodeFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
