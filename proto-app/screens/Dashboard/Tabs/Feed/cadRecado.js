import React, { Component } from 'react';

import { StyleSheet, View, TextInput, Text, ActivityIndicator, TouchableOpacity, Alert, Picker, Button } from 'react-native';

export default class App extends Component<{}>
{
  constructor() {
    super();

    this.state = {
      Descricao: '',
      Id_Turma: '',
      Id_Responsavel: '',
      ActivityIndicator_Loading: false,
    }
  }
  Insert_Data_Into_MySQL = () => {
    this.setState({ ActivityIndicator_Loading: true }, () => {
      fetch('https://coworkingsegunda.000webhostapp.com/appCadRecado.php',
        {
          method: 'POST',
          headers:
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
            {
              Descricao: this.state.Descricao,
              Id_Responsavel: this.state.Id_Responsavel,
              Id_Turma: this.state.Id_Turma
            })
        }).then((response) => response.json()).then((responseJsonFromServer) => {
          alert(responseJsonFromServer);
          this.setState({ ActivityIndicator_Loading: false });
        }).catch((error) => {
          console.error(error);
          this.setState({ ActivityIndicator_Loading: false });
        });
    });
  }
  render() {
    return (
      <View style={styles.MainContainer}>

        <Text style={styles.TextStyleClass} >Cadastro de Recados</Text>
        <Text> </Text>
        <Text> </Text>

        <TextInput
          placeholder="ID. Responsável"
          style={styles.TextInputStyleClass}
          underlineColorAndroid="transparent"
          keyboardType='numeric'
          onChangeText={(TextInputText) => this.setState({ Id_Responsavel: TextInputText })} />

        <TextInput
          placeholder="No. Turma"
          style={styles.TextInputStyleClass}
          underlineColorAndroid="transparent"
          keyboardType='numeric'
          onChangeText={(TextInputText) => this.setState({ Id_Turma: TextInputText })} />

        <TextInput
          placeholder="Descrição do Recado"
          style={styles.TextInputStyleClass}
          underlineColorAndroid="transparent"
          onChangeText={(TextInputText) => this.setState({ Descricao: TextInputText })} />

        <Text> </Text>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.TouchableOpacityStyle}
          onPress={this.Insert_Data_Into_MySQL}>
          <Text style={styles.TextStyle}>Cadastrar Recado</Text>
        </TouchableOpacity>
        {
          this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#8C76E8' size='large' style={styles.ActivityIndicatorStyle} /> : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    MainContainer:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#fff'
    },

    TextStyleClass:
    {

      textAlign: 'center',
      height: 40,
      backgroundColor: "#fff",
      marginBottom: 10,
      width: '95%',
      color: '#8C76E8',
      fontSize: 20
    },
    TextInputStyleClass:
    {

      textAlign: 'center',
      height: 40,
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor: '#8C76E8',
      borderRadius: 7,
      marginBottom: 10,
      width: '95%'
    },

    TouchableOpacityStyle:
    {
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: '#8C76E8',
      marginBottom: 20,
      width: '90%'

    },

    TextStyle:
    {
      color: '#fff',
      textAlign: 'center',
      fontSize: 18
    },

    ActivityIndicatorStyle: {

      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'

    }
  });