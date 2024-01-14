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

  apiLoaded = false;

  constructor(
    private route: ActivatedRoute,
    private phoneticsService: PhoneticsService
  ) {}

  ngOnInit(): void {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }

    console.log(this.phoneme.video);

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
