import { Injectable } from '@angular/core';

@Injectable()
export class TsService {
    public data: Array<string>;
    constructor() {
        this.data = ['ts-first', 'ts-second'];
    }
}