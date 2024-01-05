import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GrammarService } from '../grammar.service';
import { TensePage } from 'src/app/shared/tense.model';

@Component({
  selector: 'app-tense',
  templateUrl: './tense.component.html',
  styleUrls: ['./tense.component.scss'],
})
export class TenseComponent implements OnInit {
  isLoading: boolean = false;
  tense: TensePage = {
    tenseName: '',
    theory: {
      overview: '',
      structure: '',
      formation: {
        affirmative: '',
        negative: '',
        interrogative: '',
      },
      commonSignalWords: [],
    },
    examples: [],
    usage: [],
  };

  constructor(
    private route: ActivatedRoute,
    private grammarService: GrammarService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.route.params.subscribe((params: Params) => {
      this.grammarService.getTense(params['tense']).subscribe(data => {
        this.tense = data;
        this.isLoading = false;
      });
    });
  }
}
