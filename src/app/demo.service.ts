import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '@environments/environment';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(public http: HttpClient) { }

  public auth = new BehaviorSubject<any>(null);
  public authObs = this.auth.asObservable();

  login(username: string, password: string) {
    return this.http.post(`${env.url}/auth`, { username, password })
      .pipe(map(res => {
        localStorage.setItem('token_data', JSON.stringify(res));
        this.auth.next(res);
      }));
  }

  logout() {
    localStorage.clear();
    this.auth.next(null);
  }

  saveContent(content: string) {
    return this.http.post(`${env.url}/save-content`, {data: content})
      .pipe(map(res => {
        console.log("save-content")
      }));
  }

  getContent(){
    return this.http.post(`${env.url}/get-content`, null)
      .pipe(map((res: any) => {
        return res;
      }));
  }
}
