import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  url = 'http://localhost:3000/data1';

  url1 = 'http://localhost:3000/data2';

  constructor(private http: HttpClient) { }

  getDb() {
    return this.http.get(this.url);
  }

  getDb1() {
    return this.http.get(this.url1);
  }

}
