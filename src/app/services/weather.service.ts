import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
   constructor(private http:HttpClient) { }
  apiKey: any = `89a74af9896c54fb270c75bd3f0db418`
  getWeatherData(cityName:string): any{
    return this.http.get<WeatherData[]>(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${this.apiKey}`)

  }
}
 
      
      
      
      
      
      
      
      
      
   