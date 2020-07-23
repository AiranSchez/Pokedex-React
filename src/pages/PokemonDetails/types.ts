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

export interface PokemonGeneration {
  name: string;
  url: string;
}

export interface GenerationsProps {
  limit: number;
  offset: number;
}

export const Generations = {
  first: {limit: 151, offset: 0},
  second: {limit: 101, offset: 151},
  third: {limit: 135, offset: 251},
  fourth: {limit: 107, offset: 386},
  fifth: {limit: 156, offset: 493},
  sixth: {limit: 72, offset: 649},
  seventh: {limit: 86, offset: 721},
};

export interface PokemonTypes {
  name: string;
  url: string;
}

export interface PokemonTableProps {
  sprite: string;
  name: string;
  height: number;
  id: number;
  types:{
    type:{
      name: string;
    }
  };
}