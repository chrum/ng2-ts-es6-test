import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Es6Component } from './es6.component';

@NgModule({
    declarations: [
        Es6Component
    ],
    imports: [
        CommonModule
    ],
    entryComponents: [
        Es6Component
    ],
    providers: [ ]
})
export class Es6Module {
    constructor () {

    }
}