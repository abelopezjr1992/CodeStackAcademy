import { Component, OnInit } from '@angular/core';
import { Scene } from 'src/app/interfaces/scene';
import { DataService } from 'src/app/services/data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-scene1',
  templateUrl: './scene1.page.html',
  styleUrls: ['./scene1.page.scss'],
})
export class Scene1Page implements OnInit {
  displayScene: Scene;
  resultScene: Scene;
  sceneCount: number = 0;
  health: number = 0;
  healthChange: number = 0;
  runOnce: boolean = true;
  inventory = [];
  public userName;

  public saveData = this.dServe.apiURL + "savedData/add";
  public saveInventory = this.dServe.apiURL + "inventory/add";
  public deleteSaveData = this.dServe.apiURL + 'savedData/' + this.userName;
  public deleteInventory = this.dServe.apiURL + 'inventory/' + this.userName;


  constructor(private dServe: DataService, private http: HttpClient, private router: Router) {
  }

  addItems(Inventory) {
    this.http.post(this.saveInventory, Inventory).subscribe(data => {
      console.log(data);
    });
  };

  addSavedData(saveFile) {
    this.http.post(this.saveData, saveFile).subscribe(data => {
      console.log(data);
    });
  };

  deleteItems() {
    this.http.delete(this.deleteInventory).subscribe(data => {
    })
  };

  deleteSave() {
    this.http.delete(this.deleteSaveData).subscribe(data => {
    })
  };


  ngOnInit() {
    //getting the first scene
    this.displayScene = this.dServe.getFirstScene(0);
    console.log(this.dServe.items);
    console.log(this.dServe.scenes);
    console.log(this.displayScene);
  }

  nextScene(id: number, classNum: number) {
    id = id - 1;
    this.displayScene = this.dServe.getNextScene(id);
    this.resultScene = this.dServe.getNextScene(id - 1);
    this.sceneCount = this.sceneCount + 1;
    this.changeHealth(id, classNum);
    this.checkInventory();
  }

  addItem(classNum) {
    //console.log(classNum);
    //console.log(this.displayScene.sceneid, this.displayScene.item1, this.displayScene.item2, this.displayScene.item3, this.displayScene.item4);
    //-----------------------This checks if item will be added depending on classnum---------------//
    if (classNum == 1 && this.displayScene.item1 != "NA") {
      //console.log("Added Item1");
      this.inventory.push((this.displayScene.item1));
    }
    else if (classNum == 2 && this.displayScene.item2 != "NA") {
      //console.log("Added Item2");
      this.inventory.push(this.displayScene.item2);
    }
    else if (classNum == 3 && this.displayScene.item3 != "NA") {
      //console.log("Added Item3");
      this.inventory.push(this.displayScene.item3);
    }
    else if (classNum == 0 && this.displayScene.item4 != "NA") {
      //console.log("Added Item4");
      this.inventory.push(this.displayScene.item4);
    }
    console.log(this.inventory);
  }

  checkInventory() {
    //-------------------------------This checks scenes if item is required---------------------//
    //console.log(this.displayScene.requiredItem1);
    //console.log(this.inventory.find(x => x.requireditem1 == this.displayScene.requiredItem1));

    if (this.displayScene.requiredItem1 != "NA" && this.inventory.includes(this.displayScene.requiredItem1) != true) {
      this.displayScene.option1 = "NA";
      console.log(this.displayScene.requiredItem1 + " was not found");
    }
    if (this.displayScene.requiredItem2 != "NA" && this.inventory.includes(this.displayScene.requiredItem2) != true) {
      this.displayScene.option2 = "NA";
      console.log(this.displayScene.requiredItem2 + " was not found");
    }
    if (this.displayScene.requiredItem3 != "NA" && this.inventory.includes(this.displayScene.requiredItem3) != true) {
      this.displayScene.option3 = "NA";
      console.log(this.displayScene.requiredItem3 + " was not found")
    }
    if (this.displayScene.requiredItem4 != "NA" && this.inventory.includes(this.displayScene.requiredItem4) != true) {
      this.displayScene.optionS = "NA";
      console.log(this.displayScene.requiredItem4 + " was not found")
    }
    // if (this.displayScene.requiredItem1 != "NA" && this.inventory.find(x => x.requireditem1 == this.displayScene.requiredItem1) != true) {
    //   this.displayScene.option1 = "NA";
    //   console.log(this.displayScene.requiredItem1 + " was not found")
    // }

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
      if (this.health == 0) {
        alert("You have Perished in combat.");
        this.deleteSave();
        this.deleteItems();
      }
    }
  }
}
