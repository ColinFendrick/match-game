import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatchingGameComponent } from './matching-game/matching-game.component';
import { Game1Component } from './game1/game1.component';
import { Game2Component } from './game2/game2.component';
import { ShufflePipe } from './shuffle.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MatchingGameComponent,
    Game1Component,
    Game2Component,
    ShufflePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
