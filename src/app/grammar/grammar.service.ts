import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs';
import { BASE_API_URL } from '../shared/vars';
import { GrammarData, TensePage } from '../shared/tense.model';

@Injectable({
  providedIn: 'root',
})
export class GrammarService {
  constructor(private http: HttpClient) {}

  getGrammar() {
    return this.http
      .get<GrammarData>(`${BASE_API_URL}/grammar.json`)
      .pipe(tap(data => console.log(data)));
  }

  getTense(tense: string) {
    return this.http
      .get<TensePage>(`${BASE_API_URL}/${tense}.json`)
      .pipe(tap(data => console.log(data)));
  }
}
