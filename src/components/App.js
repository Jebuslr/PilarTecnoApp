/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';


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
import Header from './AppHeader';
import 'react-native-gesture-handler';
import {AppStack} from '../routes/app';
import {NavigationContainer} from '@react-navigation/native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const App = () => {
  
  return (
    <NavigationContainer>
    <AppStack/>
 </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  textButton:{
    justifyContent:'center', 
    color: 'white',
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

export default App;
