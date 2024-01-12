import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PhoneticsService } from '../phonetics.service';

@Component({
  selector: 'app-phoneme',
  templateUrl: './phoneme.component.html',
  styleUrls: ['./phoneme.component.scss'],
})
export class PhonemeComponent implements OnInit {
  isLoading: boolean = false;
  isError: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private phoneticsService: PhoneticsService
  ) {}

  ngOnInit(): void {}
}
