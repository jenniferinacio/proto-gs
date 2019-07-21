const MONITOR = 1;
const PARENTE = 0;

global.TYPE_USER = 0;   //variável global usada para definir o tipo de login


function autenticarUsuario(user, password) {
    if (user == '' || password == '') {
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
    }
    return true;
}

export {
    autenticarUsuario
}
