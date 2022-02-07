import React, { useState } from 'react';
import { ActivityIndicator, Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Background } from '../components/Background';
import { PokemonCard } from '../components/PokemonCard';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

import { styles as globalStyles } from '../theme/appTheme';
import { useEffect } from 'react';

const width = Dimensions.get('window').width;


export const SearchScreen = () => {
    
    const { top } = useSafeAreaInsets();
    const { isFetching, simplePokemonList } = usePokemonSearch();

    const [filterPokemon, setFilterPokemon] = useState<SimplePokemon[]>([]);

    const [term, setTerm] = useState('');


    useEffect(() => {

        if (term.length === 0) {
            return setFilterPokemon([]);
        }

        if ( isNaN( Number( term ) ) ) {
            setFilterPokemon(
                simplePokemonList.filter( 
                    ( poke ) => poke.name.toLocaleLowerCase().includes( term.toLocaleLowerCase() )
                )
            );

        } else {
            const pokemon = simplePokemonList.find( poke  => poke.id === term );
            setFilterPokemon(
                ( pokemon ) ? [ pokemon ] : []
            );
        }

        
    }, [term]);
    


    if ( isFetching ) {
        return (
            <View
                style={ styles.container }
            >
                <ActivityIndicator
                    size={ 150 }
                    color={ '#c7c5c5' }
                />
                <Text style={{fontSize: 30}}>Loading...</Text>
            </View>
        )
    }

  return (
    <View style={{
        flex: 1,
        marginHorizontal: 20,
    }}>
        <Background />
        <SearchInput 
            onDebounce={ ( value ) => setTerm( value ) }
            style={{
                position: 'absolute',
                zIndex: 999,
                width: width - 40,
            }}
        />
        <FlatList
            data={ filterPokemon }
            keyExtractor={ (pokemon) => pokemon.id }
            showsVerticalScrollIndicator={ false }
            numColumns={ 2 }
            // Header
            ListHeaderComponent={(
                <Text style={{
                    ...globalStyles.title,
                    ...globalStyles.globalMargin,
                    paddingBottom: 10,
                    marginTop: top + 100,
                }}>
                    { term }
                </Text>
            )}

            renderItem={ ({ item }) => (
                <PokemonCard pokemon={ item }/>
            )}
        />
    </View>
  )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }
})