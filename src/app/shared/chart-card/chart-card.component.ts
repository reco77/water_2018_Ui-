import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'chart-card',
    templateUrl: './chart-card.component.html',
    styleUrls: ['./chart-card.component.scss']
})
export class CardChartComponent {

 @Input() title: string = "Chart";
}