export interface ICountry {
  name: any;
  borders: string[];
  capital: string[];
  currencies: ICurrency[];
  flags: any;
  languages: any[];
  population: number;
  region: string;
  subregion: string;
  topLevelDomain: string[];
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
