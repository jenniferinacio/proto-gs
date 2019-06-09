import React from "react";
import Routes from "./Routes";
import { StatusBar, View, YellowBox } from "react-native";
//import Login from "./components/Login/Login";
import Feed from "./components/Feed/Feed";


YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

const App = () => (
  <View style={{ flex: 1 }}>
    <Feed />
  </View>
);

export default App;
