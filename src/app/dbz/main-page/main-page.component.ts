import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {



  nuevo: Personaje = {
    name: 'Maestro Victor',
    can: 0
  }

 /*  get personajes(): Personaje[] {
    return this.DbzService.personajes
  } */

/*   newCharacter(arg: Personaje) {
    this.personajes.push(arg)
  } */

  constructor() {

  }

}
