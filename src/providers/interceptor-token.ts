import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';
import { NativeStorage } from '@ionic-native/native-storage';
 @Injectable()
export class TokenInterceptor implements HttpInterceptor {
 
    token: string;
  constructor(private storage: NativeStorage) { }
 
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.storage.getItem('token').then(data =>{
        this.token = data
    });
    request = request.clone({
        setHeaders: {
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