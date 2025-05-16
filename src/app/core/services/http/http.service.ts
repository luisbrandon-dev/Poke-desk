import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  get<T>(endpoint: string, params?: HttpParams) {
    return this.http
      .get<T>(`${environment.apiUrl}/${endpoint}`, { params })
      .pipe(shareReplay(1));
  }

  post<T>(endpoint: string, body: any, params?: HttpParams) {
    return this.http.post<T>(`${environment.apiUrl}/${endpoint}`, body, {
      params,
    });
  }
}
