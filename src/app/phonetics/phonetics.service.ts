import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_API_URL } from '../shared/vars';
import { PhonemePage, PhoneticAlphabet } from '../shared/phonetics.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhoneticsService {
  constructor(private http: HttpClient) {}

  getPhonetics() {
    return this.http
      .get<PhoneticAlphabet>(`${BASE_API_URL}/phonetics.json`)
      .pipe(tap(data => console.log(data)));
  }

  getPhoneme(phoneme: string) {
    return this.http
      .get<PhonemePage>(`${BASE_API_URL}/${phoneme}.json`)
      .pipe(tap(data => console.log(data)));
  }
}
