import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'X-RapidAPI-Key': '41b8bb74a5msha93af34b1b4e55cp192f83jsn38b60916e127',
    'X-RapidAPI-Host': 'musclewiki.p.rapidapi.com',
  }),
};

@Component({
  selector: 'app-request-getter',
  templateUrl: './request-getter.component.html',
  styleUrls: ['./request-getter.component.scss'],
  standalone: true,
})
@Injectable({
  providedIn: 'root',
})
export class RequestGetterComponent implements OnInit {
  public myQuote: string | undefined;
  private apiUrl = 'https://musclewiki.p.rapidapi.com/exercises';
  data: any;

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl, httpOptions);
  }

  ngOnInit(): void {
    this.getData().subscribe((responsData) => {
      this.data = responsData;
      //this.myQuote = this.data[0]['quote'];
      let filteredData = this.data.filter(
        (item: { Category: string }) => item.Category === 'Barbell'
      );
      console.log(filteredData);
      for (let item of filteredData) {
        console.log(item);
      }
      // for (let i = 0; i < filteredData.length; i++) {
      //   console.log(filteredData[i]['Difficulty']);
      // }
      //console.log(this.myQuote);
    });
  }
}
