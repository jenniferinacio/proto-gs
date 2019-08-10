import React, { Component } from 'react';

import { StyleSheet, View, TextInput, Text, ActivityIndicator, TouchableOpacity, Alert, Picker, Button } from 'react-native';

export default class CadAtividade extends Component<{}>
{
  constructor() {
    super();
    this.state = {
      Descricao: '',
      Id_Aluno:'',
      Data: '',
      Horario:'',
      Responsavel: '',
      ActivityIndicator_Loading: false,
    }
  }
  CadOcorrencia = () => {
    this.setState({ ActivityIndicator_Loading: true }, () => {
      fetch('https://coworkingsegunda.000webhostapp.com/appCadOcorrencia.php',
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
              Id_aluno: this.state.Id_Aluno,
              Data: this.state.Data,
              Horario: this.state.Horario,
              Responsavel: this.state.Responsavel
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

        <Text style={styles.TextStyleClass} >Cadastro de Ocorrências</Text>
        <Text> </Text>
        <Text> </Text>

        <TextInput
          placeholder="Descrição da Ocorrência"
          style={styles.TextInputStyleClass}
          underlineColorAndroid="transparent"
          onChangeText={(TextInputText) => this.setState({ Descricao: TextInputText })} />

        <TextInput
          placeholder="Id do Aluno"
          style={styles.TextInputStyleClass}
          underlineColorAndroid="transparent"
          keyboardType='numeric'
          onChangeText={(TextInputText) => this.setState({ Id_Aluno: TextInputText })} />

        <TextInput
          placeholder="Responsavel por anotar a Ocorrência"
          style={styles.TextInputStyleClass}
          underlineColorAndroid="transparent"
          onChangeText={(TextInputText) => this.setState({ Responsavel: TextInputText })} />

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

        <Text> </Text>

        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.TouchableOpacityStyle}
          onPress={this.CadOcorrencia}>
          <Text style={styles.TextStyle}>Cadastrar Ocorrência</Text>
        </TouchableOpacity>
        {
          this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#009688' size='large' style={styles.ActivityIndicatorStyle} /> : null
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
      color: '#009688',
      fontSize: 20
    },
    TextInputStyleClass:
    {

      textAlign: 'center',
      height: 40,
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor: '#009688',
      borderRadius: 7,
      marginBottom: 10,
      width: '95%'
    },

    TouchableOpacityStyle:
    {
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: '#009688',
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