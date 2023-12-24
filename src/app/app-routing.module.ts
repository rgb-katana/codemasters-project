import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GrammarComponent } from './grammar/grammar.component';
import { PhoneticsComponent } from './phonetics/phonetics.component';
import { BooksComponent } from './books/books.component';
import { FilmsComponent } from './films/films.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'grammar', component: GrammarComponent },
  { path: 'phonetics', component: PhoneticsComponent },
  { path: 'books', component: BooksComponent },
  { path: 'films', component: FilmsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
