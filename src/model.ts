export interface ICountry {
  name: string;
  region: string;
  subregion: string;
  topLevelDomain: string[];
  population: number;
  borders: string[];
  currencies: ICurrency[];
  languages: any[];
  flag: string;
}

export interface ICurrency {
  code: string;
  name: string;
  symbol: string;
}

export interface ICountryResponse {
  apiResponse: ICountry[];
}

export interface IHeader {
  onToggle: () => void;
  darkTheme: boolean;
}
