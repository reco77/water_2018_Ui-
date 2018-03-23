import {Routes, Route} from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';

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
     path:"",
     redirectTo:"/home", 
     pathMatch: 'full'
    }
//  {path:"**",redirectTo:"/"}
]
