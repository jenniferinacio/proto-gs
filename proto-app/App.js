import React from "react";
import Routes from "./Routes";
import { StatusBar, View, YellowBox } from "react-native";
//import Login from "./screens/Login/Login";
// import Feed from "./screens/Feed/Feed";
<<<<<<< HEAD
global.EMAIL = "";
=======
global.EMAIL = '';
>>>>>>> ce1c0d3... Arrumando a tela de Login e Recado

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

const App = () => (
  <View style={{ flex: 1 }}>
    <Routes />
  </View>
);

export default App;
