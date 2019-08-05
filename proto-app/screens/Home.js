import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

class HomeScreen extends React.Component {
    
    constructor(props) {
 
      super(props)
     
      // variaveis que irão receber as informações digitadas pelo usuário
      this.state = {
        
       
		
      }
    } 
  render() {
   
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>
        <Button
            raised
            onPress={() => this.props.navigation.navigate("Dashboard")}
          >
            <Text>Get Started</Text>
        </Button>
      </View>
    );
  }
}

export default HomeScreen;
