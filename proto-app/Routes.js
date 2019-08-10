import React from "react";
import { View } from "react-native";
import Login from "./screens/Login";
import CadAtividade from "./screens/Dashboard/Tabs/Feed/cadAtividade";
import CadRecado from "./screens/Dashboard/Tabs/Feed/cadRecado";
import cadOcorrencia from "./screens/Dashboard/Tabs/Feed/cadOcorrencia";
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
    },
    screenCadAtividade: {
      screen: CadAtividade,
      navigationOptions: {
        header: null
      }
    },
    screenCadOcorrencia: {
      screen: cadOcorrencia,
      navigationOptions: {
        header: null
      }
    },
    screenCadRecado: {
      screen: CadRecado,
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
