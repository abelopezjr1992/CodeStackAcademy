import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Scene1PageRoutingModule } from './scene1-routing.module';

import { Scene1Page } from './scene1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Scene1PageRoutingModule
  ],
  declarations: [Scene1Page]
})
export class Scene1PageModule {}
