import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from '@angular/router';

import { App } from './app.component';
import { TsModule } from './ts/ts.module';
import { Es6Module } from './es6/es6.module';
import { IntroModule } from './intro/intro.module';

import { TsComponent } from './ts/ts.component';
import { Es6Component } from './es6/es6.component';
import { IntroComponent } from './intro/intro.component';

const appRoutes: Routes = [
    { path: 'ts', component: TsComponent },
    { path: 'es6', component: Es6Component },
    { path: '**', component: IntroComponent }
];

@NgModule({
    declarations: [
        App
    ],
    bootstrap: [ App ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        TsModule,
        Es6Module,
        IntroModule
    ],
    entryComponents: [ ],
    providers: [ ]
})
export class AppModule {
    constructor () {

    }
}