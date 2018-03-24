import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// thrid component
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableDataSource, MatSort, MatTable,MatTableModule, MatTabsModule} from '@angular/material';

// our component
import { AppComponent } from './app.component';
import { HomeComponent } from '@pages/home/home.component';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';
import { appRoute } from '@app/app.route';
import { CardChartComponent } from '@shared/chart-card/chart-card.component';
import { RestService } from '@shared/services/rest.service';
import { AnalysisComponent } from '@pages/anlysis/anlysis.component';
import { TableMatComponent } from '@shared/table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    CardChartComponent,
    AnalysisComponent,
    TableMatComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Ng2GoogleChartsModule,
    RouterModule.forRoot(
      appRoute,
      { enableTracing: true } // <-- debugging purposes only)
    ),
    HttpClientModule,
    // MatTable,
    MatTableModule,
    MatTabsModule
    // HttpClient
  ],
  providers: [
    RestService,
    HttpClient
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }
