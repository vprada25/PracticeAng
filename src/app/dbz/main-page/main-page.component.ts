import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      name: 'Goku',
      can: 15000
    },
    {
      name: 'Vegeta',
      can: 100000
    }
  ]

  nuevo: Personaje = {
    name: 'Maestro Victor',
    can: 0
  }

  newCharacter(arg: Personaje) {
    this.personajes.push(arg)
    console.log(arg)
  }





}
