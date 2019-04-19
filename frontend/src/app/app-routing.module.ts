import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBarcodeFormatComponent } from './add-barcode-format/add-barcode-format.component';

const routes: Routes = [{
  path: '',
  component: AddBarcodeFormatComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
