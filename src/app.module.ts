import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";

import { App } from './app.component';


@NgModule({
    declarations: [
        App
    ],
    bootstrap: [ App ],
    imports: [
        BrowserModule
    ],
    entryComponents: [ ],
    providers: [ ]
})
export class AppModule {
    constructor () {

    }
}