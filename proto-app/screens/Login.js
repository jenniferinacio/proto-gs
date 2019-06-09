import React, { Component } from 'react';
import { StyleSheet, Button, View, Image, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
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
                <View style={styles.formContainer}>
                    <LoginForm />
                    <View style={styles.buttonContainer}>
                        <Button
                            color="#fff"
                            title="Entrar"
                            onPress={() => this.props.navigation.navigate("Dashboard")}
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
});
