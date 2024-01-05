import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { GrammarComponent } from './grammar/grammar.component';
import { PhoneticsComponent } from './phonetics/phonetics.component';
import { FilmsComponent } from './films/films.component';
import { BooksComponent } from './books/books.component';
import { RemoveHyphenPipe } from './shared/remove-hyphen.pipe';
import { FooterComponent } from './footer/footer.component';
import { TenseComponent } from './grammar/tense/tense.component';
import { SplitByColonPipe } from './shared/split-by-colon.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    GrammarComponent,
    PhoneticsComponent,
    FilmsComponent,
    BooksComponent,
    RemoveHyphenPipe,
    FooterComponent,
    TenseComponent,
    SplitByColonPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
