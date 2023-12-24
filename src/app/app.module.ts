import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { GrammarComponent } from './grammar/grammar.component';
import { PhoneticsComponent } from './phonetics/phonetics.component';
import { FilmsComponent } from './films/films.component';
import { BooksComponent } from './books/books.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, MenuComponent, GrammarComponent, PhoneticsComponent, FilmsComponent, BooksComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
