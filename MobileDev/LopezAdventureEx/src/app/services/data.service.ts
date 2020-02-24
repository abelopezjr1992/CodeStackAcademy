import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  url='https://spreadsheets.google.com/feeds/list/16l4NPqMNOoymV0hcsX8fkx7Gd2-XTeUIuadaK3qVL8Q/1/public/full?alt=json';
  constructor(private http: HttpClient) { }
  getData(){
    console.log(this.http.get(this.url));
    return this.http.get(this.url);
  }
}
