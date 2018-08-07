import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ConsumesApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConsumesApiProvider {

  private baseRoute:string = 'http://localhost:4000/';

  constructor(public http: Http) {}

}
