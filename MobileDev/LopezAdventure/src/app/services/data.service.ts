import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Scene } from '../interfaces/scene';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //Previous url for old project.
  //private url = 'https://spreadsheets.google.com/feeds/list/16l4NPqMNOoymV0hcsX8fkx7Gd2-XTeUIuadaK3qVL8Q/1/public/full?alt=json';
  private url = 'https://spreadsheets.google.com/feeds/list/1YKM2iHaQHM0xmlEj-kQ6vLGu8FM0bKW_zKiCzWPqHIY/1/public/full?alt=json'
  private googleSheet;
  public scenes: Scene[] = [];
  private health: number = 0;
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
            item1: s.gsx$inventory1.$t,
            item2: s.gsx$inventory2.$t,
            item3: s.gsx$inventory3.$t,
            item4: s.gsx$inventory4.$t,
            archerHealth: s.gsx$archerlp.$t,
            rougeHealth: s.gsx$roguelp.$t,
            warriorHealth: s.gsx$warriorlp.$t,
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


