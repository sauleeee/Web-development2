import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AuthToken} from '../models';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private client: HttpClient) {
  }


  login(username, password): Observable<AuthToken> {
    return this.client.post<AuthToken>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    });
  }

  register(username: any, password: any, email: any): Observable<AuthToken> {
    return this.client.post<AuthToken>(`${this.BASE_URL}/api/register/`, {
      username,
      password,
      email
    }, this.httpOptions);
  }

}
