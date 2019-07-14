import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
 
export default class CadRecado extends Component
{
    constructor()
    {
        super();
 
        this.state = { 
          Descricao: '', 
          ActivityIndicator_Loading: false, 
        }
    }
    Postar_Recado = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('https://coworkingsegunda.000webhostapp.com/cadastroRecado.php',
            {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  descricao : this.state.Descricao,
                })
 
            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                alert(responseJsonFromServer);
                this.setState({ ActivityIndicator_Loading : false });

            }).catch((error) =>
            {
                console.error(error);
                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }
    render()
    {
        return(

            <View style = { styles.MainContainer }>
                <TextInput 
                  placeholder = "Digite um Recado"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  onChangeText = {(TextInputText) => this.setState({ Descricao: TextInputText })} />
                <TouchableOpacity 
                  activeOpacity = { 0.5 } 
                  style = { styles.TouchableOpacityStyle } 
                  onPress = { this.Postar_Recado}>
                   <Text style = { styles.TextStyle }>Postar</Text>
                </TouchableOpacity>
                {
                this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#009688' size='large'style={styles.ActivityIndicatorStyle} /> : null
                
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
      margin: 20
    },
    TextInputStyleClass:
    {

      textAlign: 'center',
      height: 34,
      backgroundColor : "#fff",
      borderWidth: 1,
      borderColor: '#009688',
      borderRadius: 5 ,
      marginBottom: 5,
      width: '80%',
    },
    TouchableOpacityStyle:
   {
      paddingTop:5,
      paddingBottom:5,
      backgroundColor:'#009688',
      marginBottom: 5,
    },
    TextStyle:
    {
       color: '#fff',
        textAlign: 'center',
        fontSize: 18
    },
    ActivityIndicatorStyle:{
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    
  }
});