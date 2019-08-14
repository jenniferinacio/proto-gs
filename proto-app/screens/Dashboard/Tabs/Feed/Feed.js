/*React Native TimeLine ListView*/
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import Timeline from 'react-native-timeline-listview';
import Icon from 'react-native-vector-icons/Ionicons';
import cadastro from '../../../Login'

export default class BasicTimeLine extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
    this.data = [{}];
  }
  componentDidMount() {
    return fetch('https://coworkingsegunda.000webhostapp.com/appListAtividade.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.data = responseJson
        this.setState({
          isLoading: false
        }, function () {
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {

    // botões apareces se 'monitor'
    let cadButtons;
    if (global.TYPE_USER) {

      cadButtons = <View style={styles.buttonsArea}>
        <TouchableOpacity style={styles.btns}
          onPress={() => {
            this.props.navigation.navigate("screenCadRecado")
          }}><Text style={styles.textStyle}><Icon name={'ios-today'} size={20}/>
             Recado</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btns}
          onPress={() => {
            this.props.navigation.navigate("screenCadAtividade")
          }}><Text style={styles.textStyle}>
            <Icon name={'ios-stopwatch'} size={20}/>
             Atividade</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btns}
          onPress={() => {
            this.props.navigation.navigate("screenCadOcorrencia")
          }}><Text style={styles.textStyle}><Icon name={'ios-information-circle-outline'} size={20}/>
             Ocorrência</Text></TouchableOpacity>
      </View>

    } else {
      cadButtons = null;
    }

    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          Linha do tempo de atividades
        </Text>

        {cadButtons}
        <Timeline style={styles.list} data={this.data} circleSize={20} circleColor='#B0A2EB' lineColor='#B0A2EB' timeStyle={{
          textAlign: 'center',
          backgroundColor: '#97C7E8',
          color: 'white',
          padding: 5,
          borderRadius: 13
        }} descriptionStyle={{
          color: 'gray'
        }} options={{
          style: {
            paddingTop: 5
          }
        }} innerCircle={'dot'} onEventPress={this.onEventPress} separator={false} detailContainerStyle={{
          marginBottom: 20,
          paddingLeft: 5,
          paddingRight: 5,
          backgroundColor: "#D4FDFE",
          borderRadius: 10
        }} columnFormat='two-column' />
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
  buttonsArea: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btns: {
    textAlign: 'center',
    backgroundColor: '#D69EF5',
    color: '#ffff',
    width: '32%',
    height: 30
  },
  textStyle: {
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center',
    color: '#fff'
  }
});
