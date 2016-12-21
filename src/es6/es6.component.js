import { Component } from '@angular/core';
import { Es6Data } from './es6.service';

@Component({
    selector: 'es6-component',
    template: require('./es6.html'),
    providers: [Es6Data],
})
export class Es6Component {
    static get parameters () {
        return [[Es6Data]];
    }
    constructor (Es6Data) {
        this.data = Es6Data.getData();
        this.title = 'Es6';
    }
}