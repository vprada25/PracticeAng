import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonagesComponent } from './personages/personages.component';
import { AddPersonagesComponent } from './add-personages/add-personages.component';


@NgModule({
  declarations: [
    MainPageComponent,
    PersonagesComponent,
    AddPersonagesComponent,
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
