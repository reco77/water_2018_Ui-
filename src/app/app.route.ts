import {Routes, Route} from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';
import { AnalysisComponent } from '@pages/anlysis/anlysis.component';

export const appRoute: Routes = [
 {
     path:"home",
    component:HomeComponent
},
 {
     path:"dashboard",
      component:DashboardComponent
     },
{
    path:"analysis",
      component:AnalysisComponent
},
 {
     path:"",
     redirectTo:"/home", 
     pathMatch: 'full'
    }
//  {path:"**",redirectTo:"/"}
]
