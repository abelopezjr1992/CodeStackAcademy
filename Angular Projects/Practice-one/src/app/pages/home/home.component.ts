import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trash=[
    {
      title:'My Project 1', desc:'Trash1', nFO:'something else1'
    },
    {
      title:'My Project 2', desc:'Trash2', nFO:'something else2'
    },
    {
      title:'My Project 3', desc:'Trash3', nFO:'something else3'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
