import { Component } from "@angular/core";



@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html'

})

export class HeroComponent {

    public name: string = 'Ironman'
    public year: number = 45

    get nameUpper(): string {
        return this.name.toUpperCase();
    }

    getName(): string {
        return `${this.name} - ${this.year}`
    }

    Rename(): void {
        this.name = 'Spiderman'

    }

    ChangeAge(): void {
        this.year = 15
    }



}