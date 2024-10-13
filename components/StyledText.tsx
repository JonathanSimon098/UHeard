import { Text, TextProps, View } from './Themed';
import { StyleSheet} from 'react-native';

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}

export function UHeardText(){
  return (
  <View style={styles.title}>
    <Text style={styles.u_letter}>U</Text>
    <Text style={styles.rest_of_word}>HEARD</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  title: {
    backgroundColor: '#1E1E1E',
    flexDirection: 'row',
  },
  u_letter: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#697DBB',
  },
  rest_of_word:{
    fontSize: 40,
    fontWeight: 'bold',
    color: '#5A3381',
  },

});
