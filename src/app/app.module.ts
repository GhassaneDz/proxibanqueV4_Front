import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http' ;
import { SurveyService } from './survey.service';
import {RouterModule} from '@angular/router' ;
import { ROUTES } from './route';

import { FormsModule } from '@angular/forms'
import { PositiveFeedBackComponent } from './positive-feed-back/positive-feed-back.component';
import { NegativeFeedBackComponent } from './negative-feed-back/negative-feed-back.component';
import { ViewPositiveFeedBackComponent } from './view-positive-feed-back/view-positive-feed-back.component';
import { ViewNegativeFeedBackComponent } from './view-negative-feed-back/view-negative-feed-back.component';
import { FeedbackService } from './feedback.service';
import { ClientService } from './client.service';
import { ViewHomeComponent } from './view-home/view-home.component';

@NgModule({
  declarations: [
    AppComponent,
    PositiveFeedBackComponent,
    NegativeFeedBackComponent,
    ViewPositiveFeedBackComponent,
    ViewNegativeFeedBackComponent,
    ViewHomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule, 
    HttpClientModule, 
    RouterModule.forRoot(ROUTES)
  ],
  providers: [SurveyService, FeedbackService, ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
