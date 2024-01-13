export interface Phoneme {
  symbol: string;
  path: string;
  example: string;
  available: boolean;
}

export interface PhoneticCategory {
  diphthongs: Phoneme[];
  monophthongs: Phoneme[];
}

export interface PhoneticAlphabet {
  consonants: PhoneticCategory;
  vowels: PhoneticCategory;
}

export interface PhonemePage {
  examples: Array<string>;
  pronunciation: {
    description: string;
    instruction: string;
  };
  symbol: string;
  video: string;
}
