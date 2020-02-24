import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Scene1Page } from './scene1.page';

const routes: Routes = [
  {
    path: '',
    component: Scene1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Scene1PageRoutingModule {}
