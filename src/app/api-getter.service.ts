import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiGetterService {
  private apiUrl = 'https://musclewiki.p.rapidapi.com/exercises/attributes';

  private httpOptions = {
    headers: new HttpHeaders({
      'X-RapidAPI-Key': '41b8bb74a5msha93af34b1b4e55cp192f83jsn38b60916e127',
      'X-RapidAPI-Host': 'musclewiki.p.rapidapi.com',
    }),
  };

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl, this.httpOptions);
  }
}
