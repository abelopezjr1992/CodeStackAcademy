import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Scene } from '../interfaces/scene';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'https://spreadsheets.google.com/feeds/list/16l4NPqMNOoymV0hcsX8fkx7Gd2-XTeUIuadaK3qVL8Q/1/public/full?alt=json';
  scenes: Scene[] = [];

  constructor(private http: HttpClient) {
    
    this.getData().subscribe(
      x => { 
        //let s of x.feed.entry is better for capturing the information instead of 
        // let s in x.feed.entry
        for (let s of x.feed.entry) {
          //build a scene from s here
          let data: Scene = {
            id: s.gsx$id.$t as number,
            scene: s.gsx$scene.$t as string,
            option1: s.gsx$option1.$t as string,
            option2: s.gsx$option2.$t as string,
            option3: s.gsx$option3.$t as string,
            optionS: s.gsx$specialoption.$t as string,
            result1: s.gsx$result1.$t as string,
            result2: s.gsx$result2.$t as string,
            result3: s.gsx$result1.$t as string,
            resultS: s.gsx$specialresult.$t as string,
            ending: s.gsx$ending.$t as boolean
          }
          //push scene to scenes
          this.scenes.push(data);
        };
        console.log(this.scenes)
      }
    );
  }

  //retrieve google sheets data
  getData() {
    return this.http.get<any>(this.url);
  }

  //gets next scene by the value being passed into the function 
  getScene(num: number):Scene {
    //you might have to minus 1 if you start at 1
    return this.scenes[num];
  }
}
