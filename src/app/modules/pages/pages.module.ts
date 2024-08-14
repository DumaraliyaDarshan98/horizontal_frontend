import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import { ProfileComponent } from './profile/profile.component';
import { PageRoutingModule } from './page-routing.module';

@NgModule({
  declarations: [
    PagesComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule
  ]
})
export class PagesModule { }
