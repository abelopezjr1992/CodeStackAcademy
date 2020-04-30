import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Scene } from '../interfaces/scene';
import { items } from '../interfaces/items';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //Previous url for old project.
  //private url = 'https://spreadsheets.google.com/feeds/list/16l4NPqMNOoymV0hcsX8fkx7Gd2-XTeUIuadaK3qVL8Q/1/public/full?alt=json';
  sqlurl=' localhost:'
  private url = 'https://spreadsheets.google.com/feeds/list/1YKM2iHaQHM0xmlEj-kQ6vLGu8FM0bKW_zKiCzWPqHIY/1/public/full?alt=json';
  private itemsURL= 'https://spreadsheets.google.com/feeds/list/1YKM2iHaQHM0xmlEj-kQ6vLGu8FM0bKW_zKiCzWPqHIY/3/public/full?alt=json';
  private googleSheet;
  private googleSheet2;
  public scenes: Scene[] = [];
  public items: items[]=[];
  private health: number = 0;
  constructor(private http: HttpClient) {
    this.parseData();
    this.parseItem();
  }

  // Retrieve googleSheet Data
  parseData() {
    this.googleSheet = this.http.get(this.url);
    this.googleSheet.subscribe(
      x => {
        //Chapter 1 information
        console.log(x)
        for (let s of x.feed.entry) {
          let info: Scene = {
            sceneid: s.gsx$id.$t as number,
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
            healthChange: s.gsx$health.$t,
            requiredItem1:s.gsx$itemrequired1.$t,
            requiredItem2:s.gsx$itemrequired2.$t,
            requiredItem3:s.gsx$itemrequired3.$t,
            requiredItem4:s.gsx$itemrequired4.$t,
          };
          this.scenes.push(info);
        }
       //console.log(this.scenes);
      }
    );

  }

  parseItem(){
    this.googleSheet2 = this.http.get(this.itemsURL);
    this.googleSheet2.subscribe(
      y => {
        //Item Information
        //console.log(y)
        for (let s of y.feed.entry) {
          let info2: items = {
            itemID: s.gsx$itemid.$t,
            Name: s.gsx$name.$t,
            Description: s.gsx$description.$t,
            Quantity: s.gsx$quantity.$t,
          };
          this.items.push(info2);
        }
        //console.log(this.items);
      }
    );
  }

  GetSQLData(){
    return this.http.get(this.url);
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


