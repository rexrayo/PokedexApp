import React from 'react';
import { Image } from 'react-native';
import { styles } from '../theme/appTheme';

export const Background = () => {
  return (
      <>
        <Image
            source={ require('../assets/pokebola.png') }
            style={ styles.pokeballBG }
        />
      </>
  )
};
