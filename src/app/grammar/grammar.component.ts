import { Component, OnInit } from '@angular/core';
import { GrammarService } from './grammar.service';
import { GrammarData, TenseData } from '../shared/tense.model';
import { map } from 'rxjs';
import { RemoveHyphenPipe } from '../shared/remove-hyphen.pipe';

@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.component.html',
  styleUrls: ['./grammar.component.scss'],
})
export class GrammarComponent implements OnInit {
  isLoading: boolean = false;
  // tenses: TenseData[] | undefined;
  tenses: any = [];

  constructor(private grammarService: GrammarService) {}

  ngOnInit(): void {
    this.isLoading = true;

    this.grammarService
      .getGrammar()
      .pipe(map((data) => JSON.parse(data)))
      .subscribe((tenses) => {
        for (let tense of Object.keys(tenses)) {
          this.tenses.push(tenses[tense]);
        }
        this.isLoading = false;
      });
  }
}
