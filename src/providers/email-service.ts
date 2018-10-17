import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmailService {

    private readonly _apiUrl: string = 'http://localhost:4000/emails';
    
    constructor(private _httpClient: HttpClient) {
        this._httpClient = _httpClient;
     }


    sendEmailSuccessfulEvaluation() {
        this._httpClient.post(`${this._apiUrl}/success`, 'nassguilherme@gmail.com');
    }
}