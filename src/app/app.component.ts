import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent implements OnInit {
  title="weatherapp";
  constructor(private weatherservice: WeatherService){}

  cityName: string ='chennai';
  weatherData!: WeatherData;
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }
  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName='';
  }
 getWeatherData(cityName:any){

  this.weatherservice.getWeatherData(cityName).subscribe({
   next:(response:any)=>{
     this.weatherData = response;
     console.log(response);
   }
  })

 }


}
