import React from "react";
import { View } from "react-native";
import {
  TabNavigator,
  TabBarBottom,
  createStackNavigator
} from "react-navigation";
import { Ionicons } from '@expo/vector-icons';
import Feed from "./Tabs/Feed/Feed";
import Tab1Screen from "./Tabs/Tab1Screen";
import Tab1Details from "./Tabs/Tab1Details";
import Tab2Screen from "./Tabs/Tab2Screen";
import CustomHeader from "../../components/CustomHeader";
import HeaderStyles from "../../headerStyles";
import Ocorrencia from './Tabs/Feed/Ocorrencia';
import Recado from './Tabs/Feed/Recado';


let headerDefaultNavigationConfig = {
  header: props => <CustomHeader {...props} />,
  ...HeaderStyles
};


const FeedScreen = createStackNavigator(
  {
    FeedScreen: {
      screen: Feed,
      navigationOptions: {
        headerLeft: null,
        headerTitle: 'Feed'
      }
    }
  },
  {
    navigationOptions: {
      ...headerDefaultNavigationConfig
    }
  }
);

const Tab1 = createStackNavigator(
  {
    Tab1: {
      screen: Tab1Screen,
      navigationOptions: {
        headerLeft: null,
        headerTitle: "Tab 1 Screen"
      }
    },
    Tab1Details: {
      screen: Tab1Details,
      navigationOptions: {
        headerTitle: "Tab 1 without botton bar"
      }
    }
  },
  {
    navigationOptions: {
      ...headerDefaultNavigationConfig
    }
  }
);

const Ocorrencias = createStackNavigator(
  {
    OcorrenciaScreen: {
      screen: Ocorrencia,
      navigationOptions: {
        headerLeft: null,
        headerTitle: "Ocorrencias"
      }
    }
  },
  {
    navigationOptions: {
      ...headerDefaultNavigationConfig
    }
  }
);
const Recados = createStackNavigator(
  {
    RecadoScreen: {
      screen: Recado,
      navigationOptions: {
        headerLeft: null,
        headerTitle: "Recados"
      }
    }
  },
  {
    navigationOptions: {
      ...headerDefaultNavigationConfig
    }
  }
);


const DashboardTabRoutes = TabNavigator(
  {
    Recados: Recados,
    FeedScreen: FeedScreen,
    Ocorrencias: Ocorrencias,
  },
  {
    initialRouteName: "FeedScreen",
    navigationOptions: ({ navigation }) => {
      const { routeName, routes } = navigation.state;
      let params = routes && routes[1] && routes[1].params;
      return {
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'FeedScreen') {
            iconName = `ios-paper`;
          } else if (routeName === 'Recados') {
            iconName = `ios-today`;
          } else if (routeName === 'Ocorrencias') {
            iconName = `ios-information-circle-outline`;
          }

          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
        tabBarVisible:
          params && params.hideTabBar != null ? !params.hideTabBar : true,
        swipeEnabled:
          params && params.hideTabBar != null ? !params.hideTabBar : true
      };
    },
    tabBarOptions: {
      activeTintColor: "#8C76E8",
      inactiveTintColor: "#ABB9FF",
      style: {
        height: 60,
        paddingVertical: 5,
        backgroundColor: "#fff"
      },
      labelStyle: {
        fontSize: 12,
        lineHeight: 20
      }
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    animationEnabled: true,
    swipeEnabled: true
  }
);

export default DashboardTabRoutes;
