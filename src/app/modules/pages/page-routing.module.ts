import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path: 'profile',
    component : PagesComponent,
    children : [
      {
        path: '',
        component : ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
