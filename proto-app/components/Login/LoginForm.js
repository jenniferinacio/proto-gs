import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, StatusBar } from 'react-native';

export default class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
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
                />
                <TextInput 
                placeholder='Senha'
                placeholderTextColor='#f5f6fa'
                secureTextEntry
                returnKeyType='go'
                style={styles.input}
                ref={(input) => this.passwordInput = input}
                />
                <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.ButtonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent:'center',
    },
    input: {
        height: 40,
        backgroundColor: '#a8d7d7',
        marginBottom: 20,
        color: '#f5f6fa',
        paddingHorizontal: 10,
    },
    buttonContainer: {
        backgroundColor: '#3b8181',
        paddingVertical: 10,

    },
    ButtonText: {
        textAlign: 'center',
        color: '#f5f6fa',
        fontWeight: '700',
    },  
});
