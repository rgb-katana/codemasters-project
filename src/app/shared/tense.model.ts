export interface TenseData {
  theory: string;
  path: string;
  tests: number;
}

export interface GrammarData {
  presentSimple: TenseData;
  presentContinuous: TenseData;
  presentPerfect: TenseData;
  pastSimple: TenseData;
  pastContinuous: TenseData;
  pastPerfect: TenseData;
  futureSimple: TenseData;
  futureContinuous: TenseData;
  futurePerfect: TenseData;
}

export interface TensePage {
  tenseName: string;
  image: string;
  theory: {
    overview: string;
    structure: string;
    formation: {
      affirmative: string;
      negative: string;
      interrogative: string;
    };
    commonSignalWords: string[];
  };
  examples: string[];
  usage: string[];
  tests: boolean | number[];
}
