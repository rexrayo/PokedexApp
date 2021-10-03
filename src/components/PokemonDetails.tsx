import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: PokemonFull;
}

export const PokemonDetails = ({ pokemon }: Props ) => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={ false }
            style={{
                ...StyleSheet.absoluteFillObject,

            }}
        >
            <View
                style={{
                    ...styles.container,
                    marginTop: 320,
                }}
            >
                {/* Types */}
                <Text style={ styles.title }>Types</Text>
                <View style={{ flexDirection: 'row' }}>
                {
                    pokemon.types.map(({ type }) => {
                        return (
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10
                                }}
                                key={ type.name }
                            >
                                ·{ type.name }
                            </Text>
                        );
                    })
                }
                </View>

                {/* Weight */}
                <Text style={ styles.title }>Weight</Text>
                <Text style={{ ...styles.regularText, marginRight: 10 }}>
                    { pokemon.weight }Kg
                </Text>

                {/* Sprites */}
                <Text style={ styles.title }>Sprites</Text>
                <ScrollView
                    style={{}}
                    showsHorizontalScrollIndicator={ false }
                    horizontal={ true }
                >
                    <FadeInImage
                        uri={ pokemon.sprites.front_default}
                        style={ styles.basicSprite }
                    />
                    <FadeInImage
                        uri={ pokemon.sprites.back_default}
                        style={ styles.basicSprite }
                    />
                    <FadeInImage
                        uri={ pokemon.sprites.front_shiny}
                        style={ styles.basicSprite }
                    />
                    <FadeInImage
                        uri={ pokemon.sprites.back_shiny}
                        style={ styles.basicSprite }
                    />
                </ScrollView>

                {/* Abilities */}
                <Text style={ styles.title }>Abilities</Text>
                <View style={{ flexDirection: 'row' }}>
                {
                    pokemon.abilities.map(({ ability }) => {
                        return (
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10
                                }}
                                key={ ability.name }
                            >
                                ·{ ability.name }
                            </Text>
                        );
                    })
                }
                </View>

                {/* Moves */}
                <Text style={ styles.title }>Moves</Text>
                <View style={{ flexDirection: 'row' ,flexWrap: 'wrap' }}>
                {
                    pokemon.moves.map(({ move }) => {
                        return (
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10
                                }}
                                key={ move.name }
                            >
                                ·{ move.name }
                            </Text>
                        );
                    })
                }
                </View>

                {/* Stats */}
                <Text style={ styles.title }>Stats</Text>
                <View style={{}}>
                {
                    pokemon.stats.map(( stat, i ) => {
                        return (
                            <View 
                                key={ stat.stat.name + i }
                                style={{ flexDirection: 'row' }}
                            >
                                <Text
                                    style={{
                                        ...styles.regularText,
                                        marginRight: 10,
                                        width: 150
                                    }}
                                    key={ stat.stat.name }
                                >
                                    ·{ stat.stat.name }
                                </Text>
                                <Text
                                    style={{
                                        ...styles.regularText,
                                        fontWeight: 'bold'
                                    }}
                                >
                                    { stat.base_stat }
                                </Text>
                            </View>
                        );
                    })
                }
                </View>

                {/* Final Sprite */}
                <View
                    style={{
                        marginBottom: 20,
                        alignItems: 'center'
                    }}
                >

                    <FadeInImage
                        uri={ pokemon.sprites.front_default}
                        style={ styles.basicSprite }
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    title: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 5
    },
    regularText: {
        fontSize: 19,

    },
    basicSprite: {
        width: 150,
        height: 150,
    }

});