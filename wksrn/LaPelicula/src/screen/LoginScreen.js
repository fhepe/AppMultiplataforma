import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LPButton} from '../component/LPButton';

export default class LoginScreen extends Component {

    // configurando opções de navegação
    static navigationOptions = ({navigation}) => ({
        title: 'Tela de Login',
        headerStyle: {
          backgroundColor: 'blue'
        },
        headerTintColor: 'white'
    });

    constructor(props) {
      super(props);
      this.state = {};

      this.proxima = this.proxima.bind(this);
    }

    proxima() {
      // Passa pra proxima tela
      this.props.navigation.navigate('Sobre');    
    }

  render(){
    return (
      <View style={styles.container}>
        <Text>Tela de Login</Text>
        <LPButton titulo = "Próxima tela"
        onPress={() => {this.proxima()}}/>         
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