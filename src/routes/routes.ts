type typeRoute = {
    Home: string;
    PokemonDetails: string;
    ConstructionPage: string;
};

export const ROUTE: typeRoute = {
    Home: '/',
    PokemonDetails: '/PokemonDetails/:PokemonURL',
    ConstructionPage: '/ConstructionPage',
};