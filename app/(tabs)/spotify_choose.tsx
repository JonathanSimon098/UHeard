import { StyleSheet, Pressable, SafeAreaView, TextInput } from 'react-native';
import { Link } from 'expo-router';
import React from 'react'

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { UHeardText } from '@/components/StyledText';
import { Image } from 'expo-image';

export default function signin() {
  const imageSource = require("../../assets/images/spotify.png");
  return (
    <View style={styles.container}>
      <UHeardText></UHeardText>
      <Text style={styles.streaming}>Connect to a Streaming Service</Text>

      <Link href="/(tabs)/access" asChild>
        <Pressable style={styles.button1}>
        <Image
          style={styles.image}
          source={imageSource}
          contentFit="cover"
        />
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 20,
    borderRadius: 2,
    elevation: 3,
    backgroundColor: '#1E1E1E',
  },
  streaming: {
    color: "#697DBB",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 50,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    backgroundColor: '#1E1E1E',
  },
});
