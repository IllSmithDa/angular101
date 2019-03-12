import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  username: string = "default";
  constructor(private http: HttpClient) { 

  }
  getServerData () {
    // also can use post, get, put etc. and works similar to promises
    return this.http.get('http://www.google.com')
  }
}
