import { Component } from '@angular/core';
import { TsService } from './ts.service';

@Component({
    selector: 'ts-component',
    template: require('./ts.html')
})
export class TsComponent {
    public title: string;
    constructor (public tsService: TsService) {
        this.title = 'typescript';
    }

}
