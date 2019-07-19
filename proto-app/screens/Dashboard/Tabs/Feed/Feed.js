/*React Native TimeLine ListView*/
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timeline from 'react-native-timeline-listview';

export default class BasicTimeLine extends Component {
constructor(props){
    super(props);
    this.state ={ isLoading: true}
    this.data=[{}]
  }
  componentDidMount(){
    return fetch('https://coworkingsegunda.000webhostapp.com/appListAtividade.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.data=responseJson
        this.setState({
          isLoading: false
        }, function(){
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            padding: 16,
            fontSize: 20,
            textAlign: 'center', 
            fontWeight: 'bold',
          }}>
          Linha do tempo de atividades
        </Text>
        <Timeline style={{ flex: 1, fontSize: 10 }} data={this.data} />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
});
 