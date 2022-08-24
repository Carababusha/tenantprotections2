import { BuildingType } from './building';

export interface YesNoQuestion {
  i18nNamespace?: string;
  passingAnswer: 'yes' | 'no';
  promptKey: string;
  promptVars?: {};
  yesAnswerKey: string;
  noAnswerKey: string;
}

export type BuildingEligibilityQuestions = {
  [t in BuildingType as string]?: YesNoQuestion[];
};

export interface EligibilityRules {
  builtBeforeMillis: number;
  passingBuildingTypes: string[];
  eligibilityQuestions: BuildingEligibilityQuestions;
}

export interface RentCapEntry {
  start: date;
  end: date;
  rate: float;
}

export interface RentCapHistory extends Array<RentCapEntry> {}

export interface ZipData {
  // Metropolitan Statistical Area (MSA)
  area: string;
  city: string;
  county: string;
  zip: string;
}

export interface RawLocation extends ZipData {
  type: 'raw';
}

export interface FullLocation extends ZipData {
  type: 'full';
  statewideRules: EligibilityRules;
  localRules?: EligibilityRules;
  statewideRentCap: RentCap;
  localRentCap?: RentCap;
}

export interface UnknownLocation {
  type: 'unknown';
  zip: string;
}

export type Location = UnknownLocation | RawLocation | FullLocation;
