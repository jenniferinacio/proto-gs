const MONITOR = 1;
const PARENTE = 0;


global.TYPE_USER = 0;   //variável global usada para definir o tipo de login
global.EMAIL = '';

function autenticar_Usuario(email, senha) {
    if (email == '' || senha == '') {
        alert('usuário ou senha incorretos');
        return false;
    } else {
        if (user.search('P') != -1) {
            global.TYPE_USER = PARENTE;
        } else if (user.search('M') != -1) {
            global.TYPE_USER = MONITOR;
        } else {
            alert('erro')
            return false;
        }
    
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

        if(responseJson == 'Login Feito com Sucesso')
        {//parente
            global.EMAIL = this.state.email;
            global.TYPE_USER = 0;
            this.props.navigation.navigate('Dashboard', email = global.EMAIL);
            
            
        }
        else if(responseJson == 'Sucesso')
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
