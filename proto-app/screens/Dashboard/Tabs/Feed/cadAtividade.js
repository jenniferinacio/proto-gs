import React, { Component } from 'react';

import { StyleSheet, View, TextInput, Text, ActivityIndicator, TouchableOpacity, Alert, Picker, Button, KeyboardAvoidingView } from 'react-native';

export default class CadAtividade extends Component<{}>
{
  constructor() {
    super();
    this.state = {
      Tipo_de_atividade: '',
      Descricao: '',
      Data: '',
      Horario: '',
      ActivityIndicator_Loading: false,
    }
  }
  Insert_Data_Into_MySQL = () => {
    this.setState({ ActivityIndicator_Loading: true }, () => {
      fetch('https://coworkingsegunda.000webhostapp.com/appCadAtividade.php',
        {
          method: 'POST',
          headers:
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
            {
              Tipo_de_atividade: this.state.Tipo_de_atividade,
              Descricao: this.state.Descricao,
              Data: this.state.Data,
              Horario: this.state.Horario
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
        <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
      <View style={styles.MainContainer}>
        <Text style={styles.TextStyleClass} >Cadastro de Atividades</Text>
        <Text> </Text>
        <Text> </Text>

        <TextInput
          placeholder="Data"
          style={styles.TextInputStyleClass}
          underlineColorAndroid="transparent"
          onChangeText={(TextInputText) => this.setState({ Data: TextInputText })} />

        <TextInput
          placeholder="Horario"
          style={styles.TextInputStyleClass}
          underlineColorAndroid="transparent"
          onChangeText={(TextInputText) => this.setState({ Horario: TextInputText })} />

        <TextInput
          placeholder="Tipo de Atividade"
          style={styles.TextInputStyleClass}
          underlineColorAndroid="transparent"
          onChangeText={(TextInputText) => this.setState({ Tipo_de_atividade: TextInputText })} />

        <TextInput
          placeholder="Descrição da Atividade"
          style={styles.TextInputStyleClass}
          underlineColorAndroid="transparent"
          onChangeText={(TextInputText) => this.setState({ Descricao: TextInputText })} />

        <Text> </Text>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.TouchableOpacityStyle}
          onPress={this.Insert_Data_Into_MySQL}>
          <Text style={styles.TextStyle}>Cadastrar Atividade</Text>
        </TouchableOpacity>
        {
          this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#8C76E8' size='large' style={styles.ActivityIndicatorStyle} /> : null
          }
      </View>
          </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#8C76E8',
      justifyContent: 'center',
    },
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