import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private dService: DataService) { }

  ngOnInit(){
    this.dService.GetSQLData().subscribe(x=> console.log(x));
  }
}
