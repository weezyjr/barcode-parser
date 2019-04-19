import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(serverError => {

      let error = 'Something went wrong !';

      if (serverError) {
        if (serverError.status === 400) {
          // TODO: handle api 400 errors
        }

        // return the error message or the statusText
        if (serverError.error || serverError.statusText || serverError.message) {
          error = serverError.error.message || serverError.statusText || serverError.message;
        }

        // when the server fail to connect to the api
        if (error.startsWith('Unknown Error')) {
          error = 'Failed to connect to the server, please check your internet connection';
        }

        // log the user error
        console.error('error', error);
      }
      return throwError(error);
    }));
  }
}
