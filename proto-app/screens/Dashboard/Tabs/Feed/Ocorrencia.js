import React, {Component} from 'react';
import { AppRegistry, StyleSheet, ActivityIndicator, ListView, Text, View, Alert, Platform, TouchableOpacity } from 'react-native';
//import Recado from "./Recado";

import Timeline from 'react-native-timeline-listview';

global.EMAIL="";

export default class Ocorrencia extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    GetItem(descricao) {

        Alert.alert(descricao);

    }

    componentDidMount() {
		  
      if(global.TYPE_USER == 1){
            return fetch('https://coworkingsegunda.000webhostapp.com/appConsultaOcorrencia.php').then((response) => response.json()).then((responseJson) => {
                let ds = new ListView.DataSource({
                    rowHasChanged: (r1, r2) => r1 !== r2
                });
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson)
                }, function() {
                    // In this block you can do something with new state.
                });
                
            })
        } else {


        return fetch('https://coworkingsegunda.000webhostapp.com/appConsultaOcorrenciaPai.php',
            {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  EMAIL : global.EMAIL
                })
 
            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                 let ds = new ListView.DataSource({
                    rowHasChanged: (r1, r2) => r1 !== r2
                });
				
				      this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJsonFromServer)
                }, function() {
                    // In this block you can do something with new state.
                });

            }).catch((error) =>
            {
                Alert.alert('Servidor não respondeu. Verifique sua conexão com a Internet.');

                this.setState({ ActivityIndicator_Loading : false});
            });
        
			
        }
       
    }

    ListViewItemSeparator = () => {
        return (<View style={{

                height: .5,
                width: "100%",
                backgroundColor: "#000"
            }}/>);
    }

    render() {
        if (this.state.isLoading) {
            return (<View style={{
                    flex: 1,
                    paddingTop: 20
                }}>
                <ActivityIndicator/>
            </View>);
        }

        return (<View style={styles.MainContainer}>

            <ListView dataSource={this.state.dataSource} renderSeparator={this.ListViewItemSeparator} renderRow={(rowData) => <View style={{
                        flex: 1,
                        flexDirection: 'column'
                    }}>

                    <TouchableOpacity onPress={this.GetItem.bind(this, rowData.id_recado)}>
                        <Text style={styles.textViewContainer}>{'Descrição = ' + rowData.descricao}</Text>
                        <Text style={styles.textViewContainer}>{'Nome do Aluno = ' + rowData.nome_do_aluno}</Text>
                        <Text style={styles.textViewContainer}>{'Data = ' + rowData.data}</Text>
                        <Text style={styles.textViewContainer}>{'Horario = ' + rowData.horario}</Text>
                        <Text style={styles.textViewContainer}>{'Responsavel = ' + rowData.responsavel}</Text>
                    </TouchableOpacity>
                </View>}/>
        </View>);
    }
}

const styles = StyleSheet.create({

    MainContainer: {
        // Setting up View inside content in Vertically center.
        justifyContent: 'center',
        flex: 1,
        paddingTop: (Platform.OS === 'ios')
            ? 20
            : 0,
        backgroundColor: '#fff',
        padding: 5
    },

    textViewContainer: {
        textAlignVertical: 'center',
        padding: 10,
        fontSize: 20,
        color: '#000'
    }

});