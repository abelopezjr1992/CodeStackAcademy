import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FaqComponent } from './pages/faq/faq.component';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "faq", component: FaqComponent },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",},
    {path: "***", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
