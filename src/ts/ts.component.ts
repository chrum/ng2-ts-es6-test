import { Component } from '@angular/core';

@Component({
    selector: 'ts-component',
    template: require('./ts.html')
})
export class TsComponent {
    public title: string;
    constructor (
    ) {
        this.title = 'typescript';
    }

}
