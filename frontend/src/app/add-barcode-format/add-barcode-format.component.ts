import { Component, OnInit } from '@angular/core';
import { BarcodeFormat } from '../model/BarcodeFormat';
import { BarcodeFormatService } from '../barcode-format-service/barcode-format.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-add-barcode-format',
  templateUrl: './add-barcode-format.component.html',
  styleUrls: ['./add-barcode-format.component.scss']
})
export class AddBarcodeFormatComponent implements OnInit {

  public barcodeFormat: BarcodeFormat = new BarcodeFormat();

  constructor(private barcodeFormatService: BarcodeFormatService, private notifierService: NotifierService) {

  }

  async addBarcodeFormat(isValid: boolean) {
    if (isValid) {
      console.log(this.barcodeFormat);
      await this.barcodeFormatService.createBarcodeFormat(this.barcodeFormat).subscribe((response) => {
        console.log(response);
        this.notifierService.notify('success', response);

      });
    }
  }
  ngOnInit() {
  }

}
