import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
// @ts-ignore
import config from '../assets/config.json';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(public httpClient: HttpClient) { }
  login(data): Observable<any> {
    return this.httpClient.post(`${config.serverUrl}Login`, data);
  }
}
