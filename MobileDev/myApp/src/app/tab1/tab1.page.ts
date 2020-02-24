import { Component, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IonReorderGroup } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild(IonReorderGroup,{static: false}) reorderGroup: IonReorderGroup;
  // reorderGroup: IonReorderGroup;
  constructor(public alertController: AlertController) { }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK', 'Maybe', 'No']
    });

    alert.present();
  }

  doReorder(ev: any) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }

  toggleReorderGroup() {
    this.reorderGroup.disabled = !this.reorderGroup.disabled;
  }
}

 
//   toggleReorder() {
//     const reorderGroup = document.getElementById('reorder');
//     this.reorderGroup.disabled = !this.reorderGroup.disabled;
//     reorderGroup.addEventListener('ionItemReorder', ({detail}) => {
//       detail.complete(true);
//     });
// }
