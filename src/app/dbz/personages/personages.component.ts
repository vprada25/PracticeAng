import { Component, Input, OnInit } from '@angular/core';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personages',
  templateUrl: './personages.component.html',
  styleUrls: ['./personages.component.css']
})
export class PersonagesComponent {

  /* @Input('Data') 
  personages : any [] = [] */

  get personages() {
    return this.dbzService.personajes
  }

  constructor(private dbzService: DbzService) {}

}
