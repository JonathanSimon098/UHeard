import { StyleSheet, Pressable, SafeAreaView, TextInput } from 'react-native';
import { Link } from 'expo-router';
import React from 'react'

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { UHeardText } from '@/components/StyledText';

export default function schoolSelection() {
  const [school, onChangeSchool] = React.useState('');

  return (
    <View style={styles.container}>
      <UHeardText></UHeardText>
      <Text style={styles.signIN}>What School do you Attend?</Text>

      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeSchool}
          value={school}
          placeholder='School Name'
        />
      </SafeAreaView>

      <Link href="/(tabs)/signup" asChild>
        <Pressable style={styles.button1}>
          <Text style={styles.continue}>CONTINUE</Text>
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
  signIN: {
    color: "#697DBB",
    fontSize: 30,
    fontWeight: "bold",
    margin: 50,
    textAlign: 'center',
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 200,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: '#5A3381',
  },
  continue: {
    color: "#ADA5B5",
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    height: 50,
    margin: 7,
    borderWidth: 1,
    padding: 10,
    minWidth: 300,
    maxWidth: 300,
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
  },
});
