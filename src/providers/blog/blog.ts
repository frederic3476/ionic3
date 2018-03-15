import { HttpResponse, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'; 

/*
  Generated class for the BlogProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const urlApi = "https://jsonplaceholder.typicode.com";

@Injectable()
export class BlogProvider {

  constructor(public http: HttpClient) {
    console.log('Hello BlogProvider Provider');
  }

  getUsers(): Observable<any> {
    return this.http.get(urlApi+'/users');
  }

  getUser(i): Observable<any> {
    const url = urlApi+'/users/'+i;
    return this.http.get(url);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
  }

  getPosts(userId): Observable <any> {
    const url = urlApi+'/posts/?userId='+userId;
    return this.http.get(url);
  }
}
