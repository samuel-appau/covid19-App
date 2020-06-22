import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {Platform,Dimensions} from 'react-native';
import TabNavigator from './MainTabNavigator';
import  {createDrawerNavigator} from 'react-navigation-drawer'
import PhoneAuth from '../screens/EntryScreen'
import HomeScreen from '../screens/HomeScreen'
import MenuDrawer from '../components/MenuDrawer'
import CovidInformation from '../screens/information'
import CountryScreen from '../screens/CountryScreen'
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

export default createAppContainer(
  createSwitchNavigator({
    Main:PhoneAuth,
    // dash:TabNavigator,
    dash:DrawerNavigator,
    country:CountryScreen,
  
  }),
  
);
