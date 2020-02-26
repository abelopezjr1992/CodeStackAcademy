import { Component, OnInit } from '@angular/core';
import { Scene } from 'src/app/interfaces/scene';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-scene1',
  templateUrl: './scene1.page.html',
  styleUrls: ['./scene1.page.scss'],
})
export class Scene1Page implements OnInit {
  displayScene: Scene;

  constructor(private dServe: DataService) {
  }

  ngOnInit() {
    //getting the first scene
    this.displayScene = this.dServe.getFirstScene(0);
  }

  nextScene(id: number) {
    console.log(id)
    if (this.displayScene.ending == true) {
      //ending stuff
    } else {
      this.displayScene = this.dServe.getNextScene(id-1);
    }
  }
}
 