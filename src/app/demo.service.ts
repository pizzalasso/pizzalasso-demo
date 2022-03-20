import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '@environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(public http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post(`${env.url}/auth`, { username, password })
      .pipe(map(res => {
          console.log(res);
      }));
  }
}
