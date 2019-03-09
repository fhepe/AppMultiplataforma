import React, {Component} from 'react';
import {View, Text, StyleSheet, BackHandler} from 'react-native';
import {LPButton} from '../component/LPButton';

export default class HomeScreen extends Component {

    // configurando opções de navegação
    static navigationOptions = ({navigation}) => ({
        title: 'Página Principal'
    });

    constructor(props) {
      super(props);
      this.state = {};

      this.proxima = this.proxima.bind(this);
      this.sair = this.sair.bind(this);
    }

    proxima() {
      // Passa pra proxima tela
      this.props.navigation.navigate('Login');    
    }

    sair() {
      BackHandler.exitApp();
    }

  render(){
    return (
      <View style={styles.container}>
        <Text>Tela Principal</Text>
        <LPButton titulo = "Próxima tela"
        onPress={() => {this.proxima()}}/> 
        <LPButton titulo = "Sair"
        onPress={() => {this.sair()}}/>         
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});