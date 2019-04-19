import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BarcodeFormat } from '../model/BarcodeFormat';
import { ResponseObject } from '../model/Response';
import { RequestObject } from '../model/Request';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

// retrive the environment variable `api host` which stands for the backend url
const apiHost = environment.apiHost;

@Injectable({
  providedIn: 'root'
})
export class BarcodeFormatService {

  private endpoint = apiHost + '/barcode/format/';

  constructor(private http: HttpClient) { }

  /**
   *  Create Barcode format
   * @param barcodeFormat format (GITN, serial, expire date)
   */
  public createBarcodeFormat(barcodeFormat: BarcodeFormat): Observable<string> {
    return this.http.post<ResponseObject>(this.endpoint, new RequestObject(barcodeFormat))
      .pipe(
        take(1),
        map((response: ResponseObject) => {
          // in case of response error
          if (response.error) {
            return response.error;
          }
          // return the new note and the notify message
          return response.message;
        }));
  }

}

