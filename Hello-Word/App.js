/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ActivityIndicator,Button, Image} from 'react-native';



export default class App extends Component{

  state = {
    loading:true,
    valorAtual:0
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        loading:false
      })
    },5000)

  }
  incrementar = ()=>{
    this.setState({
      valorAtual:this.state.valorAtual+1
    })
  }
  decrementar = ()=>{
    this.setState({
      valorAtual:this.state.valorAtual-1
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" animating={this.state.loading}/>
        <Text>O valor Atual é: {this.state.valorAtual}</Text>
        <View style={{flex:1, flexDirection:'row', alignItems:'center', padding: 50}}>
        <Button title="Aumentar" onPress={()=> this.incrementar()}/>
        <Button title="Diminuir" onPress={()=> this.decrementar()}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,

  },
  nome :{
    fontSize: 45,
    color: '#cce',
  },
});
