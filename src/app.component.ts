import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // template: require('./app.html')
    template: '<div>{{ title }}</div>'
})
export class App {
    public title: string;
    constructor (
    ) {
        this.title = 'App root page';
    }

}
