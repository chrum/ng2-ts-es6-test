import {Injectable} from '@angular/core';

@Injectable()
export class Es6Data {
    constructor () {}
    getData () {
        return ['first', 'second'];
    }
}