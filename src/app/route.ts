import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { ViewPositiveFeedBackComponent } from './view-positive-feed-back/view-positive-feed-back.component';
import { ViewNegativeFeedBackComponent } from './view-negative-feed-back/view-negative-feed-back.component';
import { ViewHomeComponent } from './view-home/view-home.component';

export const ROUTES: Routes = [

    {path:'posFeedBack/:id', component:ViewPositiveFeedBackComponent},
    {path:'negFeedBack/:id', component:ViewNegativeFeedBackComponent}, 
    {path:'home', component:ViewHomeComponent}, 
    {path:'', redirectTo:'/home', pathMatch:'full'}

] ;