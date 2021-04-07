import { Component } from '@angular/core'

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{Title}}</h1>

    <h3>la base es : <strong>{{Base}}</strong></h3>

    <button (click)="acumular(Base)"> +{{Base}} </button>

    <span (click)="Number=0">{{Number}}</span>

    <button (click)="acumular(-Base)"> -{{Base}} </button>

  `
})


export class CountComponent {
  public Title: string = 'Contador App';
  public Number: number = 0;
  public Base: number = 5;

  /* sumar(){
    this.Number+=1
  }
  restar(){
    this.Number-=1
  } */

  acumular(valor: number) {
    this.Number += valor
  }
}