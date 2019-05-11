import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hello World!</Text>
        <Text>proto-gs</Text>
        <Text>(Protótipo Grupo Segunda)</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 36,
    },
  container: {
    flex: 1,
    backgroundColor: '#61deff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
