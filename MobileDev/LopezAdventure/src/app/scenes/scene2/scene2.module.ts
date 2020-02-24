import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Scene2PageRoutingModule } from './scene2-routing.module';

import { Scene2Page } from './scene2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Scene2PageRoutingModule
  ],
  declarations: [Scene2Page]
})
export class Scene2PageModule {}
