import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeListComponent } from './home/home-list/home-list.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'home', component: HomeListComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
