import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import { Audit } from '../model/audit';
import { HttpClient } from '@angular/common/http';
import { Question } from '../model/question';

@Injectable()
export class QuestionServiceProvider {
         // https://api-senai5s.herokuapp.com/questions/enviromentType/1
  apiUrl = 'https://api-senai5s.herokuapp.com/questions';


  /* Temos que ver o impacto de mudar de http para httpclient.
   O interceptor só funciona com httpclient. */
  constructor(public http: HttpClient) {}  


    findQuestionByEnvironmentTypeId(id: number): Observable<Array<Question>> {
        return this.http.get(this.apiUrl + `/enviromentType/${id}`)
            .map((response: Response) => {
             return response;
            })
            .catch(this.handleError);
    }

    
    private handleError(error: Response) {
        console.log('error ',error);
        return Observable.throw(error || 'Server error');
    }
}