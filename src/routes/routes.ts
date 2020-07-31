type typeRoute = {
    Home: string;
    PokemonDetails: string;
    ConstructionPage: string;
    PokemonList: string;
};

export const ROUTE: typeRoute = {
    Home: '/',
    PokemonDetails: '/PokemonDetails/:PokemonURL',
    ConstructionPage: '/ConstructionPage',
    PokemonList: '/PokemonList'
};