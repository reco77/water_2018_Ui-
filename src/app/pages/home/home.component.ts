import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: [
        './home.component.scss',
        // '../../_app.color.scss'
    ]
})
export class HomeComponent {
    currentMode: string = "safe";
    waterConsume = 15;
}