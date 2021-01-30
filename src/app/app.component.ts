import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;
const MOCK_API_DATA = environment.MOCK_API_DATA;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  title = 'app-check-weather';
  forecast: any;
  apiMock: any;
  daysAmount: any;
  defaultForecast: any = [];

  constructor(
    private http: HttpClient,
  ) { }



  ngOnInit() {
    this.getApiData();
    this.setApiMock();
    this.setDaysAmout(7);
  }

  getApiData() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Access-Control-Allow-Headers': 'Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
      })
    };

    this.http.get(`${API_URL}`, httpOptions).subscribe((res) => {
      this.forecast = res;
    });
  }

  setApiMock() {
    this.apiMock = MOCK_API_DATA.results;
    this.forecast = MOCK_API_DATA['results'].forecast;
  }

  setDaysAmout(daysAmount) {
    this.daysAmount = daysAmount
    this.defaultForecast = [];
    for (let i = 0; i < daysAmount; i++) {
      this.defaultForecast.push(this.forecast[i]);
    }
  }
}