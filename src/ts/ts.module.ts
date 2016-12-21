import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TsComponent } from './ts.component';
import { TsService } from './ts.service';


@NgModule({
    declarations: [
        TsComponent
    ],
    imports: [
        CommonModule
    ],
    entryComponents: [
        TsComponent
    ],
    providers: [
        TsService
    ]
})
export class TsModule {
    constructor () {

    }
}