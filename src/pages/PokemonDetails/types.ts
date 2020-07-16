export type Pokemon = {
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
};

export type PokemonList = {
  name: string;
  url: string
};


