import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Recado from "./Recado"

import {createAppContainer, createBottomTabNavigator} from 'react-navigation';

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
                time: '8:00',
                title: 'Leitura',
                description: 'Lemos o livro O Pequeno Principe ',
                lineColor: '#009688'
            }, {
                time: '8:00',
                title: 'Leitura',
                description: 'Lemos o livro O Pequeno Principe ',
                lineColor: '#009688'
            }, {
                time: '8:00',
                title: 'Leitura',
                description: 'Lemos o livro O Pequeno Principe ',
                lineColor: '#009688'
            }
        ],
        this.state = {
            selected: null
        }

    }

    // onEventPress(data){
    // this.setState({selected: data})
    //}

    renderSelected() {
        if (this.state.selected)
            return <Text style={{
                    marginTop: 10
                }}>Selected event: {this.state.selected.title}
                at {this.state.selected.time}</Text>
    }

    render() {
        return (<View style={styles.container}>

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
    }
});
