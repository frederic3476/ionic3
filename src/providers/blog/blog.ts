import { HttpResponse, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'; 

/*
  Generated class for the BlogProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const urlUser = "https://jsonplaceholder.typicode.com/users";

@Injectable()
export class BlogProvider {

  constructor(public http: HttpClient) {
    console.log('Hello BlogProvider Provider');
  }

  getUsers(): Observable<any> {
    return this.http.get(urlUser);
  }

  getUser(i): Observable<any> {
    const url = urlUser+'/'+i;
    return this.http.get(url);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
  }
}
