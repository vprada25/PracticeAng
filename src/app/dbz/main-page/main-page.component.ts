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
    name: '',
    can: 0
  }

  addfighter() {
    if (this.nuevo.name.trim().length === 0) { return }
    this.personajes.push(this.nuevo)
    this.nuevo = {
      name: '',
      can: 0
    }
  }

}
