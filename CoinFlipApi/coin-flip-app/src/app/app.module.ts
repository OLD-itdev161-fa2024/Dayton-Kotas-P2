import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoinFlipComponent } from './coin-flip/coin-flip.component';
import { FlipResultsComponent } from './flip-results/flip-results.component';

@NgModule({
  declarations: [
    AppComponent,
    CoinFlipComponent,
    FlipResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

