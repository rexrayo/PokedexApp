import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/Navigator'
import  Icon  from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetails } from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {};

export const PokemonScreen = ( { navigation, route }: Props ) => {
    
    const { simplePokemon, color } = route.params;
    const { name, id, picture } = simplePokemon;
    const { top } = useSafeAreaInsets();

    const { isLoading, pokemon } = usePokemon( id );

    return (
        <View style={{ flex: 1 }}>
            {/* Header */}
            <View style={{
                ...styles.headerContainer,
                backgroundColor: color,
                overflow: 'hidden'
            }}>

                {/* Back Button */}
                <TouchableOpacity
                    onPress={ () => navigation.pop() }
                    activeOpacity={ 0.8 }
                    style={{
                        ...styles.backButton,
                        top: top + 5
                    }}
                >
                    <Icon
                        name='arrow-back-outline'
                        color='white'
                        size={ 35}
                    />
                </TouchableOpacity>

                {/* Pokemon name */}
                <Text
                    style={{
                        ...styles.pokemonName,
                        top: top + 45
                    }}
                >
                    { name + '\n' } #{ id }
                </Text>

                {/* White Pokeball */}
                <Image
                    source={ require('../assets/pokebola-blanca.png')}
                    style={{
                        ...styles.pokeball,
                    }}
                />

                {/* Pokemon */}
                <FadeInImage
                    uri={ picture }
                    style={ styles.pokemonImage }
                />

            </View>
            {/* Details */}
            {
                isLoading 
                ? (
                    <View style={ styles.loadingIndicator }>
                        <ActivityIndicator
                            color={ color }
                            size= { 50 }
                        />
                    </View>
                )
                : <PokemonDetails pokemon={ pokemon }/>
            }
            
        </View>
    )
}


const styles = StyleSheet.create({
    headerContainer: {
        zIndex: 999,
        height: 320,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
    },
    backButton: {
        position: 'absolute',
        left: 20
    },
    pokemonName: {
        fontSize: 40,
        color: 'white',
        alignSelf: 'flex-start',
        left: 20
    },
    pokeball: {
        width: 250,
        height: 250,
        bottom: -20,
        opacity: 0.7
    },
    pokemonImage:{
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -15
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
