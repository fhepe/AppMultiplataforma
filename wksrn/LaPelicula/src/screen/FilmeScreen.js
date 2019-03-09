import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class FilmeScreen extends Component {

  render(){
    return (
      <View style={styles.container}>
        <Text>Tela de Cadastro do Filme</Text>
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