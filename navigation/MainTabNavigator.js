import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"ios-person"} />
  )
};

HomeStack.path = "";

const VehicleStack = createStackNavigator(
  {
    Links: HomeScreen
  },
  config
);

VehicleStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"ios-car"} />
};

VehicleStack.path = "";

const MailStack = createStackNavigator(
  {
    Links: HomeScreen
  },
  config
);

MailStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"ios-mail"} />
  )
};

MailStack.path = "";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"ios-settings"} />
  )
};

SettingsStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  VehicleStack,
  MailStack,
  SettingsStack
});

tabNavigator.path = "";

export default tabNavigator;
