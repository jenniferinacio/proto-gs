import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Recado from "./Recado"

import {createAppContainer, createBottomTabNavigator} from 'react-navigation';

import Timeline from 'react-native-timeline-listview';

export default class Example extends Component {
    constructor() {
        super()
        //this.onEventPress = this.onEventPress.bind(this)
        this.data = [
            {

                title: 'Aluna não quis Almoçar/Gabrielle',
                description: 'A Aluna não quis comer o lanche, alegava estar com dor de barriga ', backgroundColor:'#6ebcbc'

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

          <Timeline style={styles.list} data={this.data}
               descriptionStyle={{
                  color: 'gray'
              }} separator={true} detailContainerStyle={{
                marginBottom: 20,
                paddingLeft: 5,
                paddingRight: 5,
                backgroundColor: "#def9ff",

            }}
              circleSize={-5}

              />
      </View>);
  }
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      paddingTop:65,
      backgroundColor:'white'
    },
    list: {
      flex: 1,
      marginTop:20,

    },
  });
