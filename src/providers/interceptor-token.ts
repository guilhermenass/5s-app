import { AlertController } from 'ionic-angular';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
 
import { Observable } from 'rxjs';
import { _throw } from 'rxjs/observable/throw';
import { mergeMap } from 'rxjs/operator/mergeMap';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
 
  constructor(private storage: Storage, private alertCtrl: AlertController) { }
 
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        /* Adicionar no lugar de teste, o valor do token */
        Authorization: `Bearer teste` 
      }
    });

    return next.handle(request).do((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
            // do stuff with response if you want
        }
    },
    (err: any) => {
        if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
                // window.location.href = environment.loginUrl;
            }
        }
    });
  }
}