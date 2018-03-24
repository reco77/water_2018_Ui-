import { Component } from '@angular/core';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

    barChartData = [['Year', 'Visitations', { role: 'style' } ],
    ['2010', 10,""],
    ['2020', 14,""],
    ['2030', 16,""]]

    pieChartData = [
        ["Area", "Consumption"],
        ["Riyadh", 80],
        ["Sharyah",20]
    ]
}