import React from "react";
import { Header } from "react-navigation";
import { View, Platform } from "react-native";
import { LinearGradient } from "expo";

const CustomHeader = props => {
  return (
    <View
      style={{
        height: 56,
        marginTop: Platform.OS == "ios" ? 20 : 0
      }}
    >
      <LinearGradient
        colors={["#8C76E8", "#8C76E8"]}
      >
        <Header {...props} />
      </LinearGradient>
    </View>
  );
};

export default CustomHeader;
