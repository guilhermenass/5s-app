import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Answer } from '../model/answer';
import { EvaluationExecutionDto } from '../dto/evaluation-execution-dto';
import { Evaluate } from '../model/evaluate';
import { UpdateEvaluationDto } from '../dto/update-evaluation-dto';

@Injectable()
export class EvaluateServiceProvider {

  //  apiUrl = 'https://api-5s.herokuapp.com/evaluations';
    apiUrl = 'http://localhost:4000/evaluations';

  constructor(public http: HttpClient) {}  

    searchAppraiser(): Observable<Array<EvaluationExecutionDto>> {
        return this.http.get(`${this.apiUrl}/appraiser`)
            .map((response: Response) => 
            {
                return response;
            })
            .catch(this.handleError);      
    }

    searchResponsible(): Observable<Array<EvaluationExecutionDto>> {
        return this.http.get(`${this.apiUrl}/responsible`)
            .map((response: Response) => 
            {
                return response;
            })
            .catch(this.handleError);      
    }

   finishEvaluate(answers: Array<Answer>) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json'
            })
        };
        return this.http.post(`${this.apiUrl}/finish`, answers, httpOptions);
    }

    updateAnswersEvaluate(answers: Array<Answer>) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json'
            })
        };
        return this.http.put(`${this.apiUrl}/finish`, answers, httpOptions);
    }

   generateActionPlan() {
    return this.http.get(this.apiUrl)
       .map((response: Response) => 
       {
           return response;
       })
       .catch(this.handleError);      
}

    private handleError(error: Response) {
        console.log('error ',error);
        return Observable.throw(error || 'Server error');
    }

    updateEvaluation(evaluationId: number, updateEvaluationDto: UpdateEvaluationDto) {
        return this.http.put(`${this.apiUrl}/${evaluationId}`, {updateEvaluationDto: updateEvaluationDto});
    }

    verifyEvaluationStatus(evaluationId: number): Observable<Evaluate> {
        return this.http.get<Evaluate>(`${this.apiUrl}/${evaluationId}`);
    }
}
