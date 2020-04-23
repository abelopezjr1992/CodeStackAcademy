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
  sceneCount: number = 0;
  health: number = 0;
  healthChange: number = 0;
  runOnce: boolean = true;

  constructor(private dServe: DataService) {
  }

  ngOnInit() {
    //getting the first scene
    this.displayScene = this.dServe.getFirstScene(0);
  }

  nextScene(id: number, classNum: number) {
    
    
    this.displayScene = this.dServe.getNextScene(id - 1);
    this.sceneCount = this.sceneCount + 1;
    
    if (this.runOnce == true) {
      if (classNum == 1) {
        this.health = 8;
        console.log("Archer Health set");
      } else if (classNum == 2) {
        this.health = 10;
        console.log("Rogue Health set");
        
      } else {
        this.health = 12;
        console.log("Warrior Health set");
      }
      this.runOnce = false;
    }
    else {
      this.health = this.health + Number(this.dServe.scenes[id - 1].archerHealth);
    }

    console.log(id)
    console.log(this.runOnce);
    console.log("health change is" + this.dServe.scenes[id - 1].archerHealth);
    console.log("health is" + this.health);
  }
}
