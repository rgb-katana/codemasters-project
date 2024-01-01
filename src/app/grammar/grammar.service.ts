import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { GrammarData } from '../shared/tense.model';

@Injectable({
  providedIn: 'root',
})
export class GrammarService {
  constructor(private http: HttpClient) {}

  getGrammar() {
    return this.http
      .get<any>(
        `https://codemasters-project-default-rtdb.europe-west1.firebasedatabase.app/grammar.json`
      )
      .pipe(tap((data) => console.log(data)));
    // .subscribe();
  }
}
