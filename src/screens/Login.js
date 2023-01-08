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
  Button,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from '../components/AppHeader';
import {useDispatch} from 'react-redux';
import { appActions } from '../redux/appRedux';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const Login = () => {
  
  const dispatch = useDispatch()
  const setAuth = () =>{
    dispatch(appActions.setUser({name:'jesus', lastname:'Solorzano' }))

  }

  return (
    <SafeAreaProvider>
     
      <View style={styles.viewGrid}>
     
    <Button title='ingresar' onPress={()=>setAuth()}/>

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

export default Login;
