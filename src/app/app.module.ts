import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GameService } from './Core/game.service';
import { TrackerService } from './Services/tracker.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    GameService,
    TrackerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
