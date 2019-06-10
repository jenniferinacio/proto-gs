import React from 'react';
import { View, Button, Text } from 'react-native';

class Recado extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Recado</Text>
        </View>
      );
    }
  }

Recado.navigationOptions = {
  title: 'Recado',
}


export default Recado;
