import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'scene1',
    loadChildren: () => import('./scenes/scene1/scene1.module').then( m => m.Scene1PageModule)
  },
  {
    path: 'scene2',
    loadChildren: () => import('./scenes/scene2/scene2.module').then( m => m.Scene2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
