export interface TenseData {
  image: string;
  path: string;
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
