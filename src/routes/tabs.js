import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import GoogleMap from '../screens/GoogleMap';
import List from '../screens/List';
import {Icon} from '@rneui/themed';
import Task from '../screens/Task';

const Tab = createMaterialBottomTabNavigator();

const PRIMARY_COLOR = '#0da9ba'

export const Tabs = () => {
  return (
    <Tab.Navigator 
    activeColor='#03535c'
       barStyle={{backgroundColor: PRIMARY_COLOR}}
    >

      <Tab.Screen name='Home' component={Home} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color}) =>(
          <Icon
            name='home'
            type='font-awesome-5'
            color='#03535c'
            />

        ), 
     
 }}/>

<Tab.Screen name='Profile' component={Profile} options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({color}) =>(
          <Icon
            name='user'
            type='font-awesome-5'
            color='#03535c'
            />

        ), 
     
 }}/>
  

  <Tab.Screen name='List' component={List} options={{
        tabBarLabel: 'List',
        tabBarIcon: ({color}) =>(
          <Icon
            name='list'
            type='font-awesome-5'
            color='#03535c'
            />

        ), 
     
 }}/>

<Tab.Screen name='Map' component={GoogleMap} options={{
        tabBarLabel: 'Map',
        tabBarIcon: ({color}) =>(
          <Icon
            name='map'
            type='font-awesome-5'
            color='#03535c'
            />

        ), 
     
 }}/>

<Tab.Screen name='Task' component={Task} options={{
        tabBarLabel: 'Tareas',
        tabBarIcon: ({color}) =>(
          <Icon
            name='check'
            type='font-awesome-5'
            color='#03535c'
            />

        ), 
     
 }}/>


    </Tab.Navigator>
  );
}