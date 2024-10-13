import { StyleSheet, Pressable} from 'react-native';
import { Link } from 'expo-router';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import HomeScreen from '@/components/HomeScreen';
import { UHeardText } from '@/components/StyledText';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <HomeScreen></HomeScreen>
      <Text></Text>
      <UHeardText></UHeardText>
      
      <Link href="/(tabs)/signin" asChild>
        <Pressable style={styles.button1}>
          <Text style={styles.signIn}>SIGN IN</Text>
        </Pressable>
      </Link>

      <Link href="/modal" asChild>
        <Pressable style={styles.button2}>
          <Text style={styles.signUp}>SIGN UP WITH SCHOOL</Text>
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
    borderRadius: 20,
    elevation: 3,
    backgroundColor: '#5A3381',
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 20,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: '#ADA5B5',
  },
  signIn: {
    color: "#ADA5B5",
    fontSize: 20,
    fontWeight: "bold",
  },
  signUp: {
    color: "#5A3381",
    fontSize: 20,
    fontWeight: "bold",
  },

});
