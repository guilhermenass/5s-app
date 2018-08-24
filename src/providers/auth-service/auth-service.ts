import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = 'https://api-senai5s.herokuapp.com/';

@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {}
  
    login(credentials) {
      return new Promise((resolve, reject) => {
          let headers = new Headers();
          headers.append('Content-Type', 'application/json');
  
          this.http.post(apiUrl+'authenticateApp', JSON.stringify(credentials), {headers: headers})
            .subscribe(res => {
              resolve(res.json());
            }, (err) => {
              reject(err);
            });
      });
    }
    
    logout(){
      return new Promise((resolve, reject) => {
          let headers = new Headers();
          headers.append('X-Auth-Token', localStorage.getItem('token'));
  
          this.http.post(apiUrl+'logout', {}, {headers: headers})
            .subscribe(res => {
              localStorage.clear();
            }, (err) => {
              reject(err);
            });
      });
    }

    forgotPassword(email: string) {
      console.log("errouuuu")
      return new Promise((resolve, reject) => {
          let headers = new Headers();
          headers.append('Content-Type', 'application/json');
          this.http.post(apiUrl+'resetPassword', {email:email}, {headers: headers})
            .subscribe(res => {
              resolve(res.json());
            }, (err) => {
              reject(err);
            });
      });
    }

}
