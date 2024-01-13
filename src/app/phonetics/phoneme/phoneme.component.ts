import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PhoneticsService } from '../phonetics.service';
import { PhonemePage } from 'src/app/shared/phonetics.model';

@Component({
  selector: 'app-phoneme',
  templateUrl: './phoneme.component.html',
  styleUrls: [
    './phoneme.component.scss',
    '../../grammar/tense/tense.component.scss',
  ],
})
export class PhonemeComponent implements OnInit {
  isLoading: boolean = false;
  isError: boolean = false;
  phoneme: PhonemePage = {
    examples: [''],
    pronunciation: {
      description: '',
      instruction: '',
    },
    symbol: '',
    video: '',
  };

  constructor(
    private route: ActivatedRoute,
    private phoneticsService: PhoneticsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.isLoading = true;
      this.phoneticsService.getPhoneme(params['phoneme']).subscribe(data => {
        this.phoneme = data;
        if (this.phoneme.symbol === '') {
          this.isError = true;
        }
        this.isLoading = false;
      });
    });
  }
}
