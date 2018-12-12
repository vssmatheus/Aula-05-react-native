/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput,Dimensions, TouchableOpacity} from 'react-native';


export default class App extends Component{
  state ={
    nome:'',
    email:''
  }
  mostraDadosCampo = ()=>{
    alert(this.state.nome+'-'+this.state.email);
  }

  apagarDadosForm = () =>{
    this.setState({
      nome:'',
      email:''
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
              <TextInput value = {this.state.nome} onChangeText = {(nome)=>this.setState({nome})} underlineColorAndroid={'transparent'} style={styles.textinput} placeholder="Digite o seu nome"></TextInput>
              <TextInput value = {this.state.email} onChangeText = {(email)=>this.setState({email})} underlineColorAndroid={'transparent'} style={styles.textinput} placeholder="Digite o seu Email"></TextInput>
        </View>

        <View style={styles.button}>

          <TouchableOpacity onPress={this.mostraDadosCampo}>
            <Text style={[styles.btn, styles.btnAdicionar]}>Adicionar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.apagarDadosForm}>
            <Text  style={[styles.btn, styles.btnCancelar]}>Cancelar</Text>
          </TouchableOpacity>
          
         
        </View>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    flexDirection:'column'

  },
  form:{
    height:100,
    flexDirection:'column',
    justifyContent: 'flex-start',
    alignItems:'center',
    backgroundColor:'green',
    
  },
  textinput:{
    width: Dimensions.get('window').width,
    borderWidth:1,
    borderColor:'#ececec',
    color:'gray',
    fontSize:14,
  },
  button:{
    flex: 1,
    flexDirection:'row',
    width:Dimensions.get("window").width,
    justifyContent:'space-around',
    paddingVertical:20,
  }, 
  btn:{
    borderWidth:1,
    borderColor:'#e5e5e5',
    borderRadius: 20,
    width:Dimensions.get('window').width/3,
    textAlign: 'center',
    fontSize:20,
  },
  btnAdicionar:{
    backgroundColor:'greenyellow'
  },
  btnCancelar:{
    backgroundColor:'tomato'
  }
      
});
