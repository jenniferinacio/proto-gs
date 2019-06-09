import React, { Component } from 'react';
import { StyleSheet, View, TextInput, StatusBar } from 'react-native';

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
                ref={(input) => this.passwordInput= input}
                />
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
    }
});
