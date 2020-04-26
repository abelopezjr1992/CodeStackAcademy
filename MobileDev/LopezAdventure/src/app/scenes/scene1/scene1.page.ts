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
  inventory = [];



  constructor(private dServe: DataService) {
  }

  ngOnInit() {
    //getting the first scene
    this.displayScene = this.dServe.getFirstScene(0);
  }

  nextScene(id: number, classNum: number) {
    id=id-1;
    this.displayScene = this.dServe.getNextScene(id);
    this.sceneCount = this.sceneCount + 1;
    this.checkInventory(id, classNum);
    this.changeHealth(id, classNum);

    //console.log(id)
    //console.log(this.runOnce);
    //console.log("health change is" + this.dServe.scenes[id - 1].healthChange);
  }

  checkInventory(id, classNum) {
    //-----------------------This checks if item will be added depending on classnum---------------//
    console.log(id, classNum)
    if (this.dServe.scenes[id].item1 != "NA" && classNum == 1) {
      this.inventory.push(this.dServe.scenes[id].item1);
    }
    if (this.dServe.scenes[id].item2 != "NA" && classNum == 2) {
      this.inventory.push(this.dServe.scenes[id].item2);
    }
    if (this.dServe.scenes[id].item3 != "NA" && classNum == 3) {
      this.inventory.push(this.dServe.scenes[id].item3);
    }
    if (this.dServe.scenes[id].item4 != "NA" && classNum == 0) {
      this.inventory.push(this.dServe.scenes[id].item4);
    }
    console.log(this.inventory);

    //-------------------------------This checks scenes if item is required---------------------//
    if (this.dServe.scenes[id].requiredItem1 == "NA") {

    }
    else if (this.inventory.includes(this.dServe.scenes[id].requiredItem1)) {

    }
    if (this.dServe.scenes[id].requiredItem2 != "NA" && this.inventory.includes(this.dServe.scenes[id].requiredItem2)) {

    }
    if (this.dServe.scenes[id].requiredItem3 != "NA" && this.inventory.includes(this.dServe.scenes[id].requiredItem3)) {

    }
    if (this.dServe.scenes[id].requiredItem4 != "NA" && this.inventory.includes(this.dServe.scenes[id].requiredItem4)) {

    }
  }

  changeHealth(id: number, classNum: number) {

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
      this.health = this.health + Number(this.dServe.scenes[id - 1].healthChange);
    }
  }
}
