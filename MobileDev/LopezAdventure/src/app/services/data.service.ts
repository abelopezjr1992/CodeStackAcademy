import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Scene } from '../interfaces/scene';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'https://spreadsheets.google.com/feeds/list/16l4NPqMNOoymV0hcsX8fkx7Gd2-XTeUIuadaK3qVL8Q/1/public/full?alt=json';
  private googleSheet;
  private scenes: Scene[] = [];

  constructor(private http: HttpClient) {
    this.parseData();
  }

  // Retrieve googleSheet Data
  parseData() {
    this.googleSheet = this.http.get(this.url);
    this.googleSheet.subscribe(
      x => {
        //begin to parse Data
        console.log(x)
        for (let s of x.feed.entry) {
          let info: Scene = {
            id: s.gsx$id.$t as number,
            scene: s.gsx$scene.$t,
            option1: s.gsx$option1.$t,
            option2: s.gsx$option2.$t,
            option3: s.gsx$option3.$t,
            optionS: s.gsx$specialoption.$t,
            result1: s.gsx$result1.$t,
            result2: s.gsx$result2.$t,
            result3: s.gsx$result3.$t,
            resultS: s.gsx$specialresult.$t,
            ending: s.gsx$ending.$t as boolean
          };
          this.scenes.push(info);
        }
        console.log(this.scenes);
      }
    );

  }

  //Gets Next Scene by value being passed
  getNextScene(id: number): Scene {
    //might have to minus one to start
    return this.scenes[id];
  }

  getFirstScene(id: number): Scene {
    return this.scenes[0];
  }
}


