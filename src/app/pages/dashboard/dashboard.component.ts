import { Component } from '@angular/core';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

    barChartData = [['Year', 'Visitations','test', { role: 'style' } ],
    ['2012', 10,15,""],
    ['2013', 14,20,""],
    ['2014', 16,5,""],
    ['2014', 10,15,""],
    ['2015', 14,20,""],
    ['2016', 16,5,""],
    ['2017', 16,5,""],
    ]
    private happyColor ="#2962ff";
    private sadColor = "#dd2c00";
    pieChartData = [
        ["Area", "Consumption"],
        ["Riyadh", 80],
        ["Sharyah",20]
    ]
}