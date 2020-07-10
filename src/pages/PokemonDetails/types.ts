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

/*
* {
base_stat: 35,
effort: 0,
stat: {
name: "hp",
url: "https://pokeapi.co/api/v2/stat/1/"
}
},
* */
