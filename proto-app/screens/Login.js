import React, { Component } from 'react';
import { StyleSheet, Button, View, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar } from 'react-native';
import { autenticarUsuario } from '../components/Autenticar'

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }

    render() {
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
                        this.setState({username : text})
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
                        this.setState({password : text})
                    }}
                    />
                    <View style={styles.buttonContainer}>
                        <Button
                            color="#fff"
                            title="Entrar"
                            onPress={
                                () => {
                                    if (autenticarUsuario(this.state.username, this.state.password))
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
