import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class App extends Component {

  render() {

    // declarando variavel
    let nome = 'by fhepe'
    
    return(
      <View style={{backgroundColor: 'green', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {/* Cria uma view - componente container*/}      
        <Text style={{color: 'red', fontSize: 40, fontWeight: 'bold'}}>Meu primeiro App!</Text>
        <Image source={require('./src/img/primeiroapp.png')}></Image>
        <Text style={{fontSize: 20, color: 'black'}}>{nome}</Text>
      </View>
    )

  }

}