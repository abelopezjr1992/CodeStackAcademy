import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getLocaleDateFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { Locations } from '../interfaces/locations';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  departure: any;
  station: any;
  stationApi: any;
  spotA: any = [];
  locationInfo: any = [];
  locations: Locations[] = [];
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private dserve: DataService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    let url = `http://api.bart.gov/api/etd.aspx?cmd=etd&orig=${this.folder}&key=ZYR9-576X-86QT-DWE9&json=y`;
    let url2 = `http://api.bart.gov/api/stn.aspx?cmd=stninfo&orig=${this.folder}&key=ZYR9-576X-86QT-DWE9&json=y`
    if (this.folder != "Inbox") {
      this.getData(url);
      this.getData2(url2);

    }
    this.locations = this.dserve.savedLocations;
    console.log(this.locations);
  }


  getData(url) {
    this.stationApi = this.http.get(url);
    this.stationApi.subscribe(
      x => {
        this.station = x.root.station[0];
        console.log(this.station);
      }
    );
  }

  getData2(url2) {
    this.spotA = this.http.get(url2);
    this.spotA.subscribe(
      x => {
        this.locationInfo = x.root.stations.station;
        console.log(this.locationInfo);
      }
    )
  }
}
