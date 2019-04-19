import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

// retrive the environment variable `api host` which stands for the backend url
const apiHost = environment.apiHost;

@Injectable({
  providedIn: 'root'
})
export class BarcodeFormatService {

  private endpoint = apiHost + '/barcode/format/';

  constructor(private http: HttpClient) { }
}

