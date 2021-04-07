import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonagesComponent } from './personages/personages.component';


@NgModule({
  declarations: [
    MainPageComponent,
    PersonagesComponent,
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]

})
export class DbzModule { }
