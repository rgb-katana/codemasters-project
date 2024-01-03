import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GrammarComponent } from './grammar/grammar.component';
import { PhoneticsComponent } from './phonetics/phonetics.component';
import { BooksComponent } from './books/books.component';
import { FilmsComponent } from './films/films.component';
import { TenseComponent } from './grammar/tense/tense.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'grammar',
    children: [
      {
        path: '',
        component: GrammarComponent,
      },
      {
        path: ':tense',
        component: TenseComponent,
      },
    ],
  },
  { path: 'phonetics', component: PhoneticsComponent },
  { path: 'books', component: BooksComponent },
  { path: 'films', component: FilmsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
