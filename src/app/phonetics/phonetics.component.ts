import { Component, OnInit } from '@angular/core';
import { PhoneticsService } from './phonetics.service';
import { Phoneme, PhoneticCategory } from '../shared/phonetics.model';
import {
  faFolderClosed,
  faFolderOpen,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-phonetics',
  templateUrl: './phonetics.component.html',
  styleUrls: ['./phonetics.component.scss'],
})
export class PhoneticsComponent implements OnInit {
  isLoading: boolean = false;

  consonants: PhoneticCategory = {
    diphthongs: [],
    monophthongs: [],
  };
  vowels: PhoneticCategory = {
    diphthongs: [],
    monophthongs: [],
  };

  // Group each of them
  consonantMonophthongs: Phoneme[] = [];
  consonantDiphthongs: Phoneme[] = [];
  vowelMonophthongs: Phoneme[] = [];
  vowelDiphthongs: Phoneme[] = [];

  isConsonantMonophthongsSeen: boolean = false;
  isConsonantDiphthongsSeen: boolean = false;
  isVowelMonophthongsSeen: boolean = false;
  isVowelDiphthongsSeen: boolean = false;

  // icons
  faFolderClosed = faFolderClosed;
  faFolderOpen = faFolderOpen;

  constructor(private phoneticsService: PhoneticsService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.phoneticsService.getPhonetics().subscribe(phonetics => {
      this.consonants = phonetics['consonants'];
      this.vowels = phonetics['vowels'];
      this.groupPhonemes();
      this.isLoading = false;
    });
  }

  groupPhonemes() {
    this.consonantMonophthongs = this.consonants.monophthongs;
    this.consonantDiphthongs = this.consonants.diphthongs;
    this.vowelMonophthongs = this.vowels.monophthongs;
    this.vowelDiphthongs = this.vowels.diphthongs;
  }

  toggleConsonantMonophthongs() {
    this.isConsonantMonophthongsSeen = !this.isConsonantMonophthongsSeen;
  }

  toggleConsonantDiphthongs() {
    this.isConsonantDiphthongsSeen = !this.isConsonantDiphthongsSeen;
  }

  toggleVowelMonophthongs() {
    this.isVowelMonophthongsSeen = !this.isVowelMonophthongsSeen;
  }

  toggleVowelDiphthongs() {
    this.isVowelDiphthongsSeen = !this.isVowelDiphthongsSeen;
  }
}
