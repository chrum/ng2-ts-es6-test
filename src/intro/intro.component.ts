import { Component } from '@angular/core';

@Component({
    selector: 'ts-component',
    template: require('./intro.html')
})
export class IntroComponent {
    public title: string;
    constructor (
    ) {
        this.title = 'Intro';
    }

}
