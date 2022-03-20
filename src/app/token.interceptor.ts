import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  // intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  //   return next.handle(request);
  // }

  // constructor(private userService: UserService, private tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!request.url.includes('auth')) {
       request = request.clone({
            setHeaders: {
                // Authorization: `Bearer ${localStorage.getItem('token')}`
                'x-access-token': `${JSON.parse(localStorage.getItem('token_data')||'')['token']}`
            }
        });
    }
    return next.handle(request);
  }
}
