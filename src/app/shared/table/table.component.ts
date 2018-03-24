import {Component, ViewChild, Input } from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';

@Component({
    selector: 'table-mat',
    templateUrl: './table.component.html',
    styles: [``]
})
export class TableMatComponent {
    displayedColumns = ['regions',  '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];

      
    @Input() ELEMENT_DATA: any[] = [
        {"regions": 1, '2012':10, '2013':11, '2014':12, '2015':13,
         '2016':14, '2017':15, '2018':16, '2019':17, '2020':18, '2021':19, '2022':20,'2023':20},
         {"regions":1,
         '2012':519.3472,
         '2013':646.5944,
         '2014':695.872,
         '2015':779.7992,
         '2016':825.7096,
         '2017':870.4931,
         '2018':996.0612,
         '2019':1042.4983,
         '2020':1096.43,
         '2021':1178.154,
         '2022':1247.3562,
         '2023':1303.4488}
      ];
    @ViewChild(MatSort) sort: MatSort;
      private dataSource
      constructor(){
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      }
  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}