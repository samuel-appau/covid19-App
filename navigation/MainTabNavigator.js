import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MenuButton from '../components/Menubar'
import SearchButton from '../components/SearchButton'
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ReportScreen from '../screens/ReportScreen';
import EntryScreen from '../screens/EntryScreen'
import CountryScreen from '../screens/CountryScreen'
import CovidInformation from '../screens/information'
import SymptomsScreen from '../screens/SymptomsScreen'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="ios-home"
      
      
    />
  ),
};

HomeStack.path = '';

const NotificationStack = createStackNavigator(
  {
    Links:NotificationScreen,
  },
  config
);

NotificationStack.navigationOptions = {
  tabBarLabel: 'Notification',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="ios-notifications" />
  ),
};

NotificationStack.path = '';


const ReportStack = createStackNavigator(
  {
    Settings: ReportScreen,
  },
  config
);

ReportStack.navigationOptions = {
  tabBarLabel: 'Report',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="ios-send"/>
  ),
};

ReportStack.path = '';



const CountryStack = createStackNavigator(
  {
    Settings: CountryScreen,
  },
  config
);

CountryStack.navigationOptions = {
  tabBarLabel: 'Statistics',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="ios-stats"/>
  ),
};

CountryStack.path = '';

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  NotificationStack,
  ReportStack,
  CountryStack
});

TabNavigator.path = '';

export default TabNavigator;
