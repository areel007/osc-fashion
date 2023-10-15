interface SubNav {
  name: string;
  to: string;
}

export interface Navigation {
  name: string;
  to: string;
  sub?: | SubNav[];
}

export type HandleAction =() => void
