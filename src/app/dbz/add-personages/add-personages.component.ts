import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add-personages',
  templateUrl: './add-personages.component.html',
  styleUrls: ['./add-personages.component.css']
})
export class AddPersonagesComponent {



  @Input()
  nuevo: Personaje = {
    name: '',
    can: 0
  }

  constructor(private dbzService: DbzService) { }

  /*   @Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter();
   */

  addfighter() {
    if (this.nuevo.name.trim().length === 0) { return }
    /* this.onNewCharacter.emit(this.nuevo) */
    this.dbzService.addCharacteres(this.nuevo);
    this.nuevo = {
      name: '',
      can: 0
    }
  }
}
