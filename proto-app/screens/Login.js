import React, { Component } from 'react';
import { StyleSheet, Button, View, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert, StatusBar } from 'react-native';
const MONITOR = 1;
const PARENTE = 0;

global.TYPE_USER = 0;   
global.EMAIL = '';
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
 
autenticar_Usuario = () =>
    {
    if (this.state.email == '' || this.state.senha == '') {
        Alert.alert('usuário ou senha incorretos');
    } else {
       
    
        fetch('https://coworkingsegunda.000webhostapp.com/appVerificaUsuario.php',
        {
            method: 'POST',
            headers: 
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
            {
                email: this.state.email,
                senha: this.state.senha  
            })
        }).then((response) => response.json())
        .then((responseJson) => {

        if(responseJson == 'Pai')
        {//parente
            global.EMAIL = this.state.email;
            global.TYPE_USER = 0;
            this.props.navigation.navigate('Dashboard');
            
            
        }
        else if(responseJson == 'Monitor')
        {   //monitor
            global.TYPE_USER = 1;
            this.props.navigation.navigate('Dashboard');
            
            
        }
        else 
            {
                Alert.alert ("Email ou Senha Invalidos");
            }
            
        }).catch((error) =>
        {
            console.error(error);

            this.setState({ isLoading : false});
        });
    }
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
                    
					<TextInput placeholder='Email' 
					style={styles.TextInput}
					onChangeText={email => this.setState({email})}/>
          
					<TextInput placeholder='Senha' 
						style={styles.TextInput} 
						secureTextEntry
						onChangeText={senha => this.setState({senha})}
					/>
                
                    <View style={styles.buttonContainer}>
                     <TouchableOpacity 
						activeOpacity = { 0.5 } 
						style = { styles.TouchableOpacityStyle } 
						onPress = { this.autenticar_Usuario }>

                    <Text style = { styles.TextStyle }>Acessar</Text>

                </TouchableOpacity>
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
	
	TouchableOpacityStyle:
   {
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#009688',
      marginBottom: 20,
      width: '100%',
      textAlign: 'left'
 
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
