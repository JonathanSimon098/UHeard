import React from 'react';
import { StyleSheet, Button, Alert} from 'react-native';

import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import {Image} from 'expo-image'

import Colors from '@/constants/Colors';

const imageSource = require("../assets/images/uheardicon.png")

export default function HomeScreen() {
  return (
    <View style={styles.background}>
      <Image
        style={styles.image}
        source={imageSource}
        contentFit="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 400,
    backgroundColor: '#1E1E1E',
  },
  background: {
    backgroundColor: "#1E1E1E",
  },
  
});
