import React from 'react';
import 'react-native-gesture-handler';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from '../components/AppHeader';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const List = () => {
  
  return (
    <SafeAreaProvider>
      <Header/>
      <View style={styles.viewGrid}>
     
    <Text style={styles.textButton}>Pokemons</Text>

      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  textButton:{
    justifyContent:'center',
    fontSize:20,
    fontWeight:'700' 
  
  },
  viewGrid: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    width:'100%',
    height: '100%',
  },
  buttonGrid:{
    borderRadius: 8,
    elevation: 3,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#606060',
    width: WIDTH*.4,
    height: WIDTH*.4
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default List;
