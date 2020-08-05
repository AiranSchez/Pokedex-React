import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import './Body.scss';
import {SearchBar} from '../SearchBar';
import '../../assets/Pokeball/pokeball-style.css';
import {Generations, GenerationsInterface} from '../../pages/PokemonDetails/GenericInterfaces';
import {Context, ContextProps} from '../../Context';
import {getPokemonTypes} from '../../domain/services/PokemonTypes';
import {getPokemonGenerations} from '../../domain/services/PokemonGenerations';
import {PokemonTable} from '../PokemonTable';
import {getPokemonByGeneration} from '../../domain/services/Pokemon';


export const Body: React.FC<{}> = () => {
    const context = useContext<ContextProps>(Context);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [type, setType] = useState<string[]>([]);
    const [selectedType, setSelectedType] = useState<string>('all');
    const [generations, setGenerations] = useState<GenerationsInterface[]>([]);
    const [pokemonTable, setPokemonTable] = useState<PokemonTable[]>([]) ;
    useEffect(() => {
        getPokemonTypes().then(setType);
        getPokemonGenerations().then(setGenerations);
    }, []);
    useEffect(() => {
        if(!isLoading){
           setIsLoading(true);
        }
        getPokemonByGeneration(context.selectedGeneration).then(setPokemonTable).then(() => setIsLoading(false));
    }, [context.selectedGeneration]);
    const setPokemonType = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedType(event.target.value);
    };
    const handleGenerationSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setIsLoading(false);
        switch (event.target.value) {
            case 'generation-i':
                context.setSelectedGeneration({limit: Generations.first.limit, offset: Generations.first.offset, name: Generations.first.name});
                break;
            case 'generation-ii':
                context.setSelectedGeneration({limit: Generations.second.limit, offset: Generations.second.offset, name: Generations.second.name});
                break;
            case 'generation-iii':
                context.setSelectedGeneration({limit: Generations.third.limit, offset: Generations.third.offset, name: Generations.third.name});
                break;
            case 'generation-iv':
                context.setSelectedGeneration({limit: Generations.fourth.limit, offset: Generations.fourth.offset, name: Generations.fourth.name});
                break;
            case 'generation-v':
                context.setSelectedGeneration({limit: Generations.fifth.limit, offset: Generations.fifth.offset, name: Generations.fifth.name});
                break;
            case 'generation-vi':
                context.setSelectedGeneration({limit: Generations.sixth.limit, offset: Generations.sixth.offset, name: Generations.sixth.name});
                break;
            case 'generation-vii':
                context.setSelectedGeneration({limit: Generations.seventh.limit, offset: Generations.seventh.offset, name: Generations.seventh.name});
                break;
        }
    };
    return (
        <div className="Content">
            <SearchBar/>
            <div className={'Selects'}>
                <select name="TypeSelect" id="TypeSelect" onChange={setPokemonType}>
                    <option value="all">- Elige un tipo -</option>
                    {
                        type.map((typeOfPokemon: string) => <option value={typeOfPokemon}>{typeOfPokemon}</option>)
                    }
                </select>
                <select name="GenerationSelect" id="GenerationSelect" onChange={handleGenerationSelected}>
                    <option value="all">- Elige una generacion -</option>
                    {
                       generations.map((generation:any) => <option value={generation.name}>{generation.name}</option>)
                    }
                </select>
            </div>
            {!isLoading ?
                <PokemonTable isLoading={isLoading} selectedType={selectedType} pokemonTable={pokemonTable} />
                : <div className="pokeball">
                    <div className="pokeball__button"/>
                </div>
            }
        </div>
    );
};

Body.displayName = 'Body';