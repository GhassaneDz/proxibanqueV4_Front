import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PosFeedBackComponent } from './pos-feed-back/pos-feed-back.component';
import { NegFeedBackComponent } from './neg-feed-back/neg-feed-back.component';
import { PositivService } from './services/positiv-service.service';
import { NegativService } from './services/negativ-service.service';
import { ViewPosFeedBackComponent } from './view-pos-feed-back/view-pos-feed-back.component';
import { ViewNegFeedBackComponent } from './view-neg-feed-back/view-neg-feed-back.component';


@NgModule({
  declarations: [
    AppComponent,
    PosFeedBackComponent,
    NegFeedBackComponent,
    ViewPosFeedBackComponent,
    ViewNegFeedBackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    //RouterModule.forRoot(ROUTES)
  ],

  providers: [PositivService,NegativService],

  bootstrap: [AppComponent]
})
export class AppModule { }
