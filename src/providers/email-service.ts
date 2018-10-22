import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmailService {

   // private readonly _apiUrl: string = 'http://localhost:4000/email';
    private readonly _apiUrl: string = 'https://api-5s.herokuapp.com/email';
    
    constructor(private _httpClient: HttpClient) {
        this._httpClient = _httpClient;
     }


    sendEmailSuccessfulEvaluation(email) {
        if(email)
            return this._httpClient.post(`${this._apiUrl}/success`, {email: email});
    }

    sendEmailWithNonCompliances(emailDto) {
        
        if(emailDto)
            return this._httpClient.post(`${this._apiUrl}/nonCompliances`, {evaluationDto: emailDto});
    }
}