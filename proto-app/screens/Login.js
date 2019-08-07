import React, { Component } from 'react';
import { StyleSheet, Button, View, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar } from 'react-native';
import { autenticar_Usuario } from '../components/Autenticar'
import { StyleSheet, Button, View, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar,Alert } from 'react-native';
import cadButtons from '../screens/Dashboard/Tabs/Feed/Feed';



export default class Login extends Component {
    static navigationOptions = {
        title: 'Login',
        header: null,
        
    }

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            senha: '',
        }
    }
    autenticar_Usuario = () =>{
       fetch('https://coworkingsegunda.000webhostapp.com/appVerificaUsuario.php'+ global.EMAIL, {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
           email: this.state.email,
           senha: this.state.senha
         })
       }).then((response) => response.json())
             .then((responseJson) => {
       
               // If server response message same as Data Matched
              if(responseJson == 'Login Feito com Sucesso')
               {
       
                   //Then open Profile activity and send user email to profile activity.
                   this.props.navigation.navigate('Dashboard', email = global.EMAIL);
       
               }
               else if (responseJson == 'Sucesso') {
                this.props.navigation.navigate('Dashboard', email = global.EMAIL);
               } else{
                    "Email ou Senha Incorretos"
               }
       
             }).catch((error) => {
               console.error(error);
             });
        
         }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <KeyboardAvoidingView  behavior={'padding'} style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                    style={styles.logo}
                     source={require('../assets/provisorioLogo.png')}
                     />
                     <Text style={styles.title}> Agenda Aluno</Text>
                </View>
                <View style={styles.containerInputs}>
                    <StatusBar
                    barStyle='light-content'/>
                    <TextInput
                    placeholder='Usuário ou Email'
                    placeholderTextColor='#f5f6fa'
                    returnKeyType='next'
                    style={styles.input}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={(text) => {
                        this.setState({email : text})
                    }}
                    />
                    <TextInput
                    placeholder='Senha'
                    placeholderTextColor='#f5f6fa'
                    secureTextEntry
                    returnKeyType='go'
                    style={styles.input}
                    ref={(input) => this.passwordInput= input}
                    onChangeText={(text) => {
                        this.setState({senha : text})
                    }}
                    />
                    <View style={styles.buttonContainer}>
                        <Button
                            color="#fff"
                            title="Entrar"
                            onPress={
                                () => {
                                    if (autenticar_Usuario(this.state.email, this.state.senha))
                                    {
                                        this.props.navigation.navigate("Dashboard")
                                    }
                                }
                            }
                          ></Button>
                  </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6ebcbc',
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent:'center',
    },
    logo: {
        width: 200,
        height: 200,
    },
    title: {
        color:'#f5f6fa',
        marginTop: 10,
        textAlign: 'center',
        fontSize: 30,
        justifyContent:'center',
    },
    formContainer: {
        justifyContent:'center',
    },
    buttonContainer: {
    backgroundColor: '#3b8181',
    paddingVertical: 10,
    textAlign: 'center',
    color: '#f5f6fa',
    fontWeight: '700',
    },
    input: {
        height: 40,
        backgroundColor: '#a8d7d7',
        marginBottom: 20,
        color: '#f5f6fa',
        paddingHorizontal: 10,
    },
    containerInputs: {
        padding: 20,
        justifyContent:'center',
    },
});
