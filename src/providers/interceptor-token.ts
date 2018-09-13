import { AlertController } from 'ionic-angular';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
import { Observable } from 'rxjs';
import { _throw } from 'rxjs/observable/throw';
import { mergeMap } from 'rxjs/operator/mergeMap';
import { NativeStorage } from '@ionic-native/native-storage';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
 
  constructor(private nativeStorage: NativeStorage, private alertCtrl: AlertController) { }
 
  token: string;
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  

    this.nativeStorage.getItem('token')
    .then(
      data => { this.token = data;},
      error => console.error(error)
    );
    request = request.clone({
      setHeaders: {
        /* Adicionar no lugar de teste, o valor do token */
        Authorization: `Bearer ${this.token}` 
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