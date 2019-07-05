import React, { Component } from 'react';
import Recado from "./Recado"
import Icon from 'react-native-vector-icons/Ionicons';
import { AppRegistry, StyleSheet, ActivityIndicator, ListView, Text, View, Alert, Platform, TouchableOpacity } from 'react-native';
//import Recado from "./Recado";


import Timeline from 'react-native-timeline-listview';
export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    GetItem(tipo_de_atividade) {
        Alert.alert(tipo_de_atividade);
    }

    componentDidMount() {
        return fetch('https://coworkingsegunda.000webhostapp.com/consultaAtividade.php')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
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
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator/>
                </View>
            );
        }

        return (
            <View style={styles.MainContainer}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderSeparator={this.ListViewItemSeparator}
                    renderRow={(rowData) =>
                        <View style={{ flex: 1, flexDirection: 'column' }} >
                            <TouchableOpacity onPress={this.GetItem.bind(this, rowData.tipo_de_atividade)} >
                                <Text style={styles.textViewContainer} >{'Descrição = ' + rowData.descricao}</Text>
                                <Text style={styles.textViewContainer} >{'Data = ' + rowData.data}</Text>
                                <Text style={styles.textViewContainer} >{'Horario = ' + rowData.horario}</Text>
                                <Text style={styles.textViewContainer} >{'Duração = ' + rowData.duracao}</Text>
                            </TouchableOpacity>
                        </View>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        // Setting up View inside content in Vertically center.
        justifyContent: 'center',
        flex: 1,
        paddingTop: (Platform.OS === 'ios') ? 20 : 0,
        backgroundColor: '#fff',
        padding: 5,
    },

    textViewContainer: {
        textAlignVertical: 'center',
        padding: 10,
        fontSize: 20,
        color: '#000',
    }
});

AppRegistry.registerComponent('App', () => App);
