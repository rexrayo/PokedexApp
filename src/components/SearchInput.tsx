import React, { useState } from 'react';
import { StyleProp, StyleSheet, TextInput, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebouncedValue } from '../hooks/useDebouncedValue';
import { useEffect } from 'react';

interface Props {
    style?: StyleProp<ViewStyle>;
    onDebounce: ( value: string ) => void;
}


export const SearchInput = ({ style, onDebounce }: Props) => {

    const [textValue, setTextValue] = useState('');

    const debouncedValue = useDebouncedValue( textValue );

    useEffect(() => {
        onDebounce( debouncedValue );

    }, [debouncedValue]);
    

  return (
    <View style={{ 
        ...styles.container, 
        ...style as any
    }}>
          <View style={ styles.inputContainer }>
            <TextInput
                placeholder='Search Pokemon'
                style={ styles.textInput }
                autoCapitalize='none'
                autoCorrect={ false }
                value={ textValue }
                onChangeText={ setTextValue }
            />
            <Icon
                name='search-outline'
                size={ 30 }
                color='#949494'
            />
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
    },
    inputContainer: {
        borderRadius: 50,
        height: 60,
        backgroundColor: '#ffffff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 7,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    textInput: {
        fontSize: 20,
        flex: 1,
        padding: 15
    }
})
