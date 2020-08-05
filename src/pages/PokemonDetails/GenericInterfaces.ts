export interface Pokemon {
    data: {
        abilities: {
            ability: NameUrl,
            is_hidden: boolean,
            slot: number
        }[];
        base_experience: number
        forms: NameUrl[]
        game_indices: {
            game_index: number
            version: NameUrl
        }[]
        height: number
        held_items: {
            item: NameUrl
            version_details: {
                rarity: number
                version: NameUrl
            }[]
        }[]
        id: number
        is_default: boolean
        location_area_encounters: string
        moves: {
            move: NameUrl
            version_group_details: {
                level_learned_at: number
                move_learn_method: NameUrl
                version_group: NameUrl
            }[]
        }[]
        name: string
        order: number
        species: NameUrl
        sprites: {
            back_default: string
            back_female: string
            back_shiny: string
            back_shiny_female: string
            front_default: string
            front_female: string
            front_shiny: string
            front_shiny_female: string
        };
        stats: {
            base_stat: number
            effort: number
            stat: NameUrl
        }[];
        types: {
            slot: number
            type: NameUrl
        }[]
        weight: number
    };
}

export interface NameUrl {
    name: string;
    url: string;
}

export interface PokemonList {
    name: string;
    url: string;
}

export interface GenerationsProps {
    limit: number;
    offset: number;
    name: string;
}

export const Generations = {
    first: {limit: 151, offset: 0, name: 'generation-i'},
    second: {limit: 100, offset: 151, name: 'generation-ii'},
    third: {limit: 135, offset: 251, name: 'generation-iii'},
    fourth: {limit: 107, offset: 386, name: 'generation-iv'},
    fifth: {limit: 156, offset: 493, name: 'generation-v'},
    sixth: {limit: 72, offset: 649, name: 'generation-vi'},
    seventh: {limit: 86, offset: 721, name: 'generation-vii'},
};

export interface PokemonTypes {
    name: string;
    url: string;
}

export interface GenerationsInterface {
    name: string;
    url: string;
}