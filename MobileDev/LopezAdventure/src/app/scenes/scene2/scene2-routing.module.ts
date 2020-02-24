import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Scene2Page } from './scene2.page';

const routes: Routes = [
  {
    path: '',
    component: Scene2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Scene2PageRoutingModule {}
