import { NgModule } from "@angular/core";

import { CountComponent } from './counting/count.component';


@NgModule({
    declarations: [
        CountComponent
    ],
    exports: [
        CountComponent
    ]
    

})


export class CountModule { }