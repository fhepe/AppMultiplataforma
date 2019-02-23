import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { yellow } from 'ansi-colors';

export default class App extends Component {
  // Implementar o método render - dizendo como a tela se desenha
  render() {
    return (      
      <View style={styles.principal}>
        { /* Testando views */ }

        { /* HEADER */}
        <View style={styles.header}>
          <Text style={styles.texto}>Cabeçalho</Text>
        </View>

        { /* CORPO */ }
        <View style={styles.corpo}>
          <Text style={styles.texto_corpo}>APP</Text>
        </View>        

        { /* FOOTER */ }
        <View style={styles.footer}>
          <Text style={styles.texto}>Rodapé</Text>
        </View>                
      </View>
    );
  }
}

// estilos da aplicação
const styles = StyleSheet.create({
  principal: {
    backgroundColor: 'white', 
    flex: 1
  },

  corpo: {
    backgroundColor: 'white', 
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },  

  header: {
    backgroundColor: 'green', 
    height: 40, 
    justifyContent: 'center', 
    alignItems: 'center'
  },

  footer: {
    backgroundColor: 'blue', 
    height: 40, 
    justifyContent: 'center', 
    alignItems: 'center'    
  },

  texto: {
    fontSize: 20, 
    color: 'white'
  },

  texto_corpo:{
    fontSize: 80,
    color: 'yellow'
  }
});
