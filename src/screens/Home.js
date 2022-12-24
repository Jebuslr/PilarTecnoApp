/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
import Header from './AppHeader';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const Home = () => {
  
  return (
    <SafeAreaProvider>
      <Header />
      <View style={{flex:1}}>
      <ImageBackground style={{height: HEIGHT, width: WIDTH}} source={{uri: 'https://i.pinimg.com/originals/31/c9/77/31c977acf0dc5066b0f3d6b964051399.jpg'}}>
        <View style={{flexDirection:'row', flex:1}}>
          <View style={{...styles.viewGrid, justifyContent: 'flex-end', paddingBottom:'5%'}}>
          <TouchableOpacity style={{...styles.buttonGrid, backgroundColor:'green'}}>
            <Text style={styles.textButton}>
            Tareas
            </Text>
          </TouchableOpacity>  
          </View>
          <View style={{...styles.viewGrid,justifyContent: 'flex-end', paddingBottom:'5%'}}>
          <TouchableOpacity  style={{...styles.buttonGrid, backgroundColor:'blue'}}>
            <Text style={styles.textButton}>
            Perfil
            </Text>
          </TouchableOpacity>  
          </View>
        </View>
        <View style={{flexDirection:'row', flex:1}}>
          <View style={{...styles.viewGrid, justifyContent: 'flex-start', paddingTop:'5%'}}>
          <TouchableOpacity style={{...styles.buttonGrid, backgroundColor:'red'}}>
            <Text style={styles.textButton}>
            Pokedex
            </Text>
          </TouchableOpacity>  
          </View>
          <View style={{...styles.viewGrid, justifyContent: 'flex-start', paddingTop:'5%'}}>
          <TouchableOpacity style={{...styles.buttonGrid, backgroundColor:'aqua'}}>
            <Text style={styles.textButton}>
            Mapa
            </Text>
          </TouchableOpacity>  
          </View>
        </View>  
      </ImageBackground>
      </View>
    </SafeAreaProvider>
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

export default Home;
