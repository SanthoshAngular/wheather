import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { wheatherData } from '../model/wheather-model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<wheatherData> {
    const url = `https://open-weather13.p.rapidapi.com/city/${cityName}`;

    const headers = new HttpHeaders()
      .set('X-RapidAPI-Host', 'open-weather13.p.rapidapi.com')
      .set('X-RapidAPI-Key', '6d9f554597mshafa249a728dc5fbp107632jsn21578b70818b');

    const params = new HttpParams()
      .set('units', 'metric')
      .set('mode', 'json');

    return this.http.get<wheatherData>(url, { headers, params });
  }
}
