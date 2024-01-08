import { Component, OnInit } from '@angular/core';
import { GrammarService } from './grammar.service';
import { TenseData } from '../shared/tense.model';

@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.component.html',
  styleUrls: ['./grammar.component.scss'],
})
export class GrammarComponent implements OnInit {
  isLoading: boolean = true;
  tenses: TenseData[] = [];

  constructor(private grammarService: GrammarService) {}

  ngOnInit(): void {
    this.isLoading = true;

    this.grammarService.getGrammar().subscribe((tenses) => {
      for (let tense of Object.keys(tenses)) {
        this.tenses.push(tenses[tense as keyof typeof tenses]);
      }
      this.tenses.reverse();
      this.isLoading = false;
    });
  }
}
