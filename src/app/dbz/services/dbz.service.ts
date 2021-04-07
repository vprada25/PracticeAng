import { Injectable } from "@angular/core";

import { Personaje } from '../interfaces/dbz.interface';



@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
            name: 'Goku',
            can: 15000
        },
        {
            name: 'Vegeta',
            can: 100000
        }
    ]

    get personajes(): Personaje[] {
        return [... this._personajes]
    }




    constructor() { }

    addCharacteres(arg: Personaje) {
        this._personajes.push(arg)
    }

}