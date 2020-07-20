export interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
  stats: {
    base_stat: number;
    stat: {
      name: string
    }
  }[];
}

export interface PokemonList {
  name: string;
  url: string;
}



