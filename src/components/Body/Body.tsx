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

interface  PokemonTableVersion2 {
    firstgen: PokemonTable[];
    secondgen: PokemonTable[];
    thirdgen: PokemonTable[];
    fourthgen: PokemonTable[];
    fifthgen: PokemonTable[];
    sixthgen: PokemonTable[];
    seventhgen: PokemonTable[];
}
interface CheckGeneration {
    [key : string] : boolean;
}
export const Body: React.FC<{}> = () => {
    const context = useContext<ContextProps>(Context);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [type, setType] = useState<string[]>([]);
    const [selectedType, setSelectedType] = useState<string>('all');
    const [generations, setGenerations] = useState<GenerationsInterface[]>([]);
    const [pokemonTable, setPokemonTable] = useState<PokemonTableVersion2>({firstgen: [], secondgen: [], thirdgen: [], fourthgen: [], fifthgen: [], sixthgen: [], seventhgen: []}) ;
    const [checkedGeneration, setCheckedGeneration] = useState<CheckGeneration>(
        {'generation-i' : false,
        'generation-ii' : false,
        'generation-iii' : false,
        'generation-iv' : false,
        'generation-v' : false,
        'generation-vi' : false,
        'generation-vii' : false
        });
    useEffect(() => {
        getPokemonTypes().then(setType);
        getPokemonGenerations().then(setGenerations);
    }, []);
    useEffect(() => {
        if(!checkedGeneration[context.selectedGeneration.name]){
            if(!isLoading){
                setIsLoading(true);
            }
            getPokemonByGeneration(context.selectedGeneration)
                .then(response => handleGenerationSet(response))
                .then(() => setIsLoading(false));
        }
        else{
            setIsLoading(false);
        }
    }, [context.selectedGeneration]);
    const handleGenerationSet = (response: any) => {
        switch (response.length) {
            case 151: setPokemonTable({...pokemonTable, firstgen: response}); setCheckedGeneration({...checkedGeneration, 'generation-i': true}); break;
            case 100: setPokemonTable({...pokemonTable, secondgen: response}); setCheckedGeneration({...checkedGeneration, 'generation-ii': true}); break;
            case 135: setPokemonTable({...pokemonTable, thirdgen: response}); setCheckedGeneration({...checkedGeneration, 'generation-iii': true}); break;
            case 107: setPokemonTable({...pokemonTable, fourthgen: response});setCheckedGeneration({...checkedGeneration, 'generation-iv': true}); break;
            case 156: setPokemonTable({...pokemonTable, fifthgen: response});setCheckedGeneration({...checkedGeneration, 'generation-v': true}); break;
            case 72: setPokemonTable({...pokemonTable, sixthgen: response}); setCheckedGeneration({...checkedGeneration, 'generation-vi': true});break;
            case 86: setPokemonTable({...pokemonTable, seventhgen: response});setCheckedGeneration({...checkedGeneration, 'generation-vii': true}); break;
        }
    };
    const setPokemonType = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedType(event.target.value);
    };
    const handleGenerationSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
    const tableToReturn = () => {
        if (context.selectedGeneration.name === 'generation-i') {
            return pokemonTable.firstgen;
        } else if (context.selectedGeneration.name === 'generation-ii') {
            return pokemonTable.secondgen;
        } else if (context.selectedGeneration.name === 'generation-iii') {
            return pokemonTable.thirdgen;
        } else if (context.selectedGeneration.name === 'generation-iv') {
            return pokemonTable.fourthgen;
        } else if (context.selectedGeneration.name === 'generation-v') {
            return pokemonTable.fifthgen;
        } else if (context.selectedGeneration.name === 'generation-vi') {
            return pokemonTable.sixthgen;
        } else if (context.selectedGeneration.name === 'generation-vii') {
            return pokemonTable.seventhgen;
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
                <PokemonTable isLoading={isLoading} selectedType={selectedType} pokemonTable={tableToReturn()} />
                : <div className="pokeball">
                    <div className="pokeball__button"/>
                </div>
            }
        </div>
    );
};

Body.displayName = 'Body';