import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'

})
export class ListComponent {

  heros: string[] = ['Spiderman', 'Ironman', 'Thor', 'Hulk']
  heroDelete: string = ''


  DeleteHero() {
    this.heroDelete = this.heros.shift() || '';

  }

}
