import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NotifierModule } from 'angular-notifier';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddBarcodeFormatComponent } from './add-barcode-format/add-barcode-format.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBarcodeFormatComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,

    BrowserModule,
    AppRoutingModule,


    // Notification module configuration
    NotifierModule.withConfig({
      // Custom options in here
      position: {
        horizontal: {
          position: 'right',
          distance: 12
        },
        vertical: {
          position: 'top',
          distance: 12,
          gap: 10
        }
      },
      theme: 'material',
      behaviour: {
        autoHide: 5000,
        onClick: 'hide',
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 4
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
