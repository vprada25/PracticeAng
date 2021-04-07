import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HerosMOdule } from './heros/heros.module';
import { CountModule } from './count/count.module';
import { DbzModule } from './dbz/dbz.module';


@NgModule({
  declarations: [
    AppComponent
    
   
  ],
  imports: [
    BrowserModule,
    HerosMOdule,
    CountModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
