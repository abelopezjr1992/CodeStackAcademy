import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DataService } from './services/data.service';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public startingLocation = [];
  public bartInfo = [];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private dserve: DataService, ) {

    this.initializeApp();
    this.dserve.getLocations();
    this.startingLocation = this.dserve.savedLocations;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.startingLocation.findIndex(page => page.abbr.toLowerCase() === path.toLowerCase());
    }
  }

  loadInfo(abbr) {
    this.bartInfo = this.dserve.savedBartInfo;
    this.dserve.getData(abbr);
  }
}
