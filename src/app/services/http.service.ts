import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseURL = 'https://shop-api.ngminds.com';

  constructor(
    private http: HttpClient,
    private userService: LocalstorageService
  ) {}

  post(formData: any, url: string): Observable<any> {
    return this.http.post(`${this.baseURL}${url}`, formData);
  }

  get(url: string): Observable<any> {
    return this.http.get(`${this.baseURL}${url}`);
  }

  delete(url: string) {
    return this.http.delete(`${this.baseURL}${url}`);
  }

  patch(url: string, formData: any) {
    // console.log(formData);
    return this.http.patch(`${this.baseURL}${url}`, formData);
  }
}
