import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
 @Injectable()
export class TokenInterceptor implements HttpInterceptor {
 
    token: string;
  constructor(private storage: Storage) { }
 
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return Observable.fromPromise(this.handleAccess(request, next));
  }

  private async handleAccess(request: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
    const token = await this.storage.get('token').then((val: string) => {
        return val;
    });
    request = request.clone({
        setHeaders: {
            Authorization: `Bearer ${token}` 
        }
    });
    let changedRequest = request;

    return next.handle(changedRequest).toPromise();
  };
} 