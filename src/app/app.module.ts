import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PosFeedBackComponent } from './pos-feed-back/pos-feed-back.component';
import { NegFeedBackComponent } from './neg-feed-back/neg-feed-back.component';
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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
