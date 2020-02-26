import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { getLocaleDateFormat } from '@angular/common';
import { Locations } from '../interfaces/locations';
import { BartData } from '../interfaces/bart-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  abbreviations = "https://api.bart.gov/api/stn.aspx?cmd=stns&key=ZYR9-576X-86QT-DWE9&json=y";
  url_part1 = "http://api.bart.gov/api/etd.aspx?cmd=etd&orig=";
  //Make  url_part2 Blank to stop getData() from loading info that isn't needed using an if statement
  url_part2 = "12th";
  url_part3 = "&key=ZYR9-576X-86QT-DWE9&json=y";
  url = this.url_part1 + this.url_part2 + this.url_part3;

  bartInfo;
  savedBartInfo = [];
  locations;
  savedLocations: Locations[] = [];
  constructor(private http: HttpClient) {
  }
  getLocations() {
    this.locations = this.http.get(this.abbreviations);
    this.locations.subscribe(
      x => {
        for (let s of x.root.stations.station) {
          let locationInfo: Locations = {
            name: s.name,
            abbr: s.abbr,
            address: s.address,
            city: s.city,
            county: s.county,
            state: s.state,
            zipcode: s.zipcode,
          };
          this.savedLocations.push(locationInfo);
        }
        //console.log(this.savedLocations);
      }
    );
  }

  getData(abbr) {
    this.url_part2 = abbr;
    this.url = this.url_part1 + this.url_part2 + this.url_part3;
    this.bartInfo = this.http.get(this.url);
    this.bartInfo.subscribe(
      x => {
        this.savedBartInfo = x.root.station[0];
        //console.log(this.savedBartInfo);
      }
    );
  }
}


