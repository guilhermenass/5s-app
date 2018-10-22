import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import { HttpClient } from '@angular/common/http';
import { Question } from '../model/question';
import { QuestionResponsible } from '../model/questionResponsible';

@Injectable()
export class QuestionServiceProvider {
  apiUrl = 'http://localhost:4000/questions';

  constructor(public http: HttpClient) {}  

    findQuestionByEnvironmentTypeId(id: number): Observable<Array<Question>> {
        return this.http.get(this.apiUrl + `/enviromentType/${id}`)
            .map((response: Response) => {
             return response;
            })
            .catch(this.handleError);
    }

    findNonCompliancesByEvaluationId(id: number): Observable<Array<QuestionResponsible>> {
        return this.http.get(this.apiUrl + `/nonCompliances/${id}`)
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