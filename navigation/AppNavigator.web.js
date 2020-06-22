import React from 'react';
import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen'
import {Platform,Dimensions} from 'react-native';
import MenuDrawer from '../components/MenuDrawer'
import TabNavigator from './MainTabNavigator';
import PhoneAuth from '../screens/EntryScreen';
import  {createDrawerNavigator} from 'react-navigation-drawer'
import CovidInformation from '../screens/information'
import SymptomsScreen from '../screens/SymptomsScreen'

const WIDTH=Dimensions.get('window').width;

const DrawerConfig={
    drawerWidth: WIDTH*0.80,
    contentComponent:({navigation})=>{
      return(<MenuDrawer navigation={navigation}/>)

    }
} 




const DrawerNavigator=createDrawerNavigator({

home:{ 
        screen:TabNavigator
 },
 Info:{
   screen:CovidInformation
 },
 Symptoms:{
    screen:SymptomsScreen
  }

      },


    DrawerConfig


);




const switchNavigator = createSwitchNavigator({
  
  

    Main:DrawerNavigator,
   
    
  });
  switchNavigator.path = '';
  
  

export default createBrowserApp(switchNavigator, { history: 'hash' });