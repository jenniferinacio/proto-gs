import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
    render() {
        return (   
            <KeyboardAvoidingView behavior={'paddig'} style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                    style={styles.logo}
                     source={require('../images/provisorioLogo.png')}
                     />
                     <Text style={styles.title}> Agenda Aluno</Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm />

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
});