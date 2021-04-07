import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personages',
  templateUrl: './personages.component.html',
  styleUrls: ['./personages.component.css']
})
export class PersonagesComponent {

@Input('Data') 
personages : any [] = []

}
