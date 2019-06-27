import React, {Component} from 'react';
import { AppRegistry, StyleSheet, ActivityIndicator, ListView, Text, View, Alert, Platform, TouchableOpacity} from 'react-native';
//import Recado from "./Recado";


import Timeline from 'react-native-timeline-listview';
export default class App extends React.Component   {
 
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true
      }
    }
     
    GetItem (id_recado) {
     
    Alert.alert(id_recado);
     
    }
     
     
    componentDidMount() {
     
      return fetch('https://coworkingsegunda.000webhostapp.com/consultaRecados.php')
        .then((response) => response.json())
        .then((responseJson) => {
          let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          this.setState({
            isLoading: false,
            dataSource: ds.cloneWithRows(responseJson),
          }, function() {
            // In this block you can do something with new state.
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
     
    ListViewItemSeparator = () => {
      return (
        <View
          style={{
     
            height: .5,
            width: "100%",
            backgroundColor: "#000",
     
          }}
        />
      );
    }
     
     
    render() {
      if (this.state.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
          </View>
        );
      }
     
      return (
     
        <View style={styles.MainContainer}>
     
          <ListView
     
            dataSource={this.state.dataSource}
     
            renderSeparator= {this.ListViewItemSeparator}
     
            renderRow={(rowData) =>
     
           <View style={{flex:1, flexDirection: 'column'}} >
     
             <TouchableOpacity onPress={this.GetItem.bind(this, rowData.id_recado)} >
           
             <Text style={styles.textViewContainer} >{'Descrição = ' + rowData.descricao}</Text>
     
             <Text style={styles.textViewContainer} >{'Nome do Aluno = ' + rowData.nome_do_aluno}</Text>
     
             <Text style={styles.textViewContainer} >{'id_turma = ' + rowData.id_turma}</Text>
     
             <Text style={styles.textViewContainer} >{'id_responsavel = ' + rowData.id_responsavel}</Text>
     
             </TouchableOpacity>
     
           </View>
     
            }
          />
     
        </View>
      );
    }
    }
     
    const styles = StyleSheet.create({
     
    MainContainer :{
     
    // Setting up View inside content in Vertically center.
    justifyContent: 'center',
    flex:1,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#fff',
    padding: 5,
     
    },
     
    textViewContainer: {
     
     textAlignVertical:'center', 
     padding:10,
     fontSize: 20,
     color: '#000',
     
    }
     
    });
     
    AppRegistry.registerComponent('App', () => App);