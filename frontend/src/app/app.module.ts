import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NotifierModule } from 'angular-notifier';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddBarcodeFormatComponent } from './add-barcode-format/add-barcode-format.component';
import { ErrorInterceptor } from './helpers/error.interceptor';

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
  providers: [
    // to handle errors
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
