import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import { Audit } from '../model/audit';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuditServiceProvider {

  apiUrl = 'https://api-senai5s.herokuapp.com/audits';


  /* Temos que ver o impacto de mudar de http para httpclient.
   O interceptor só funciona com httpclient. */
  constructor(public http: HttpClient) {}  

    search(): Observable<Audit> {
         return this.http.get(this.apiUrl)
            .map((response: Response) => 
            {
                console.log('response',response);
                return <Audit>response.json();
            })
            .catch(this.handleError);      
    }
/*
    findById(id: number): Observable<Activity> {
        return this.http.post(this.url + 'activity/findById', {id: id})
            .map((response: Response) => {
             return <Activity>response.json();
            })
            .catch(this.handleError);
    }
*/
    
    private handleError(error: Response) {
        return Observable.throw(error || 'Server error');
    }
}