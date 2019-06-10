import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import Recado from "./Recado"
import Icon from 'react-native-vector-icons/Ionicons';

import Timeline from 'react-native-timeline-listview';
export default class Example extends Component {
    constructor() {
        super()
        //this.onEventPress = this.onEventPress.bind(this)
        this.data = [
            {
                time: '8:00',
                title: 'Leitura',
                description: 'Lemos o livro O Pequeno Principe ',
                lineColor: '#009688'
            }, {
                time: '9:30',
                title: 'Hora do Lanche',
                description: 'As crianças comeram arroz com feijão e frango xadrez ',
                lineColor: '#009688'
            }, {
                time: '10:00',
                title: 'Hora do Soneca',

            }, {
                time: '11:00',
                title: 'Desenho',
                description: 'Pedimos para as crianças desenharem cartazes para Festa Junina ',
                lineColor: '#009688'
            }
        ],
        this.state = {
            selected: null
        }

    }

    renderSelected() {
        if (this.state.selected)
            return <Text style={{
                    marginTop: 10
                }}>Selected event: {this.state.selected.title}
                at {this.state.selected.time}</Text>
    }

    render() {
        return (<View style={styles.container}>
            <InputRecado isMonitor={global.TYPE_USER}></InputRecado>
            <Timeline style={styles.list} data={this.data} circleSize={20} circleColor='#f98b9c' lineColor='#f19e9e' timeStyle={{
                    textAlign: 'center',
                    backgroundColor: '#6ebcbc',
                    color: 'white',
                    padding: 5,
                    borderRadius: 13
                }} descriptionStyle={{
                    color: 'gray'
                }} options={{
                    style: {
                        paddingTop: 5
                    }
                }} innerCircle={'dot'} onEventPress={this.onEventPress} separator={false} detailContainerStyle={{
                    marginBottom: 20,
                    paddingLeft: 5,
                    paddingRight: 5,
                    backgroundColor: "#def9ff",
                    borderRadius: 10
                }} columnFormat='two-column'/>
        </View>);
    }
}

function InputRecado(props) {
    const isMonitor = props.isMonitor;
    var post = '';
    if (isMonitor) {
        return (
            <View style={styles.postArea} >
            <TextInput style={styles.postText} onChangeText={(text) => {
                this.post = text}}
             placeholder='digite um recado'/>
                <Icon style={{marginLeft:20}}
                    name="ios-send"
                    size={25}
                    color='#79a3c6'
                    // onPress={
                    //     () => {
                    //         alert(this.post)
                    //     }
                    // }
                    />
        </View>
    )
    } else {
        return null;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'white',
        textAlign: 'center'

    },
    list: {
        flex: 1,
        marginTop: 10
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    descriptionContainer: {
        flexDirection: 'row',
        paddingRight: 50
    },
    textDescription: {
        marginLeft: 10,
        color: 'gray'
    },
    postText: {
        flexBasis: '85%',
        borderWidth: 1,
        borderColor: '#79a3c6',
        height: 30,
        color: '#000000'
    },
    postArea: {
        flex: 1,
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexGrow: 0.1
    }
});
