export interface Phoneme {
  symbol: string;
  path: string;
  example: string;
}

export interface PhoneticCategory {
  diphthongs: Phoneme[];
  monophthongs: Phoneme[];
}

export interface PhoneticAlphabet {
  consonants: PhoneticCategory;
  vowels: PhoneticCategory;
}
