import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import { Audit } from '../model/audit';

@Injectable()
export class AuditServiceProvider {

  apiUrl = 'https://api-senai5s.herokuapp.com/';

  constructor(public http: Http) {}  

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
        return Observable.throw(error.json().error || 'Server error');
    }
}