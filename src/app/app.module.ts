import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// thrid component
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


// our component
import { AppComponent } from './app.component';
import { HomeComponent } from '@pages/home/home.component';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';
import { appRoute } from '@app/app.route';
import { CardChartComponent } from '@shared/chart-card/chart-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    CardChartComponent
  ],
  imports: [
    BrowserModule,
    Ng2GoogleChartsModule,
    RouterModule.forRoot(
      appRoute,
      { enableTracing: true } // <-- debugging purposes only)
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }
