import React from "react";
import { View } from "react-native";
import Login from "./screens/Login";
import DashboardTabRoutes from "./screens/Dashboard/Routes";
import { createStackNavigator } from "react-navigation";
import CustomHeader from "./components/CustomHeader";
import HeaderStyles from "./headerStyles";

const Routes = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    Dashboard: {
      screen: DashboardTabRoutes,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "Login",
    navigationOptions: {
      ...HeaderStyles,
      animationEnabled: true
    }
  }
);

export default Routes;
