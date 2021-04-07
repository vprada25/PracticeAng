import { Component, OnInit } from '@angular/core';

interface Personaje {
  name: string;
  can: number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  nuevo: Personaje = {
    name: 'trunks',
    can: 14000
  }

  addfighter() {
    console.log(this.nuevo)
  }

}
