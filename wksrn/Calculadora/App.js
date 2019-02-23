import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

class Botao extends Component {

  constructor(props){
    super(props);
    this.state = {};

    // estilos
    this.styles = StyleSheet.create({
      botao: {
        width: 150,
        height: 50,
        borderWidth: parseInt(props.borda),
        borderColor: props.cor,
        borderRadius: 25
      },

      botaoArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25
      },

      botaoTexto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: props.cor
      }
    });
  }

  render() {
    return (
      <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
        <View style={this.styles.botaoArea}>
          <Text style={this.styles.botaoTexto}>{this.props.titulo}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}


export default class App extends Component {

  constructor(props) {
    super(props);
    // definindo o objeto de estado
    this.state = {
      primeiroNumero: '',
      segundoNumero: '',
      resultado: ''
    }

    // binding(amarração) da função do construtor com o da classe
    this.setarPrimeiroNumero = this.setarPrimeiroNumero.bind(this);
    this.setarSegundoNumero = this.setarSegundoNumero.bind(this);
    this.calcular = this.calcular.bind(this);
    this.limpar = this.limpar.bind(this);        
  }

  setarPrimeiroNumero(texto) {
    let state = this.state;    
    state.primeiroNumero = texto;
    this.setState(state);    
  }

  setarSegundoNumero(texto) {
    let state = this.state;    
    state.segundoNumero = texto;
    this.setState(state);    
  }  

  calcular() {
    let state = this.state;    
    
    var a = 0;
    var b = 0;
    if (state.primeiroNumero != '') {
      a = parseFloat(state.primeiroNumero);
    }

    if (state.segundoNumero != '') {
      b = parseFloat(state.segundoNumero);
    }    

    if ((a > 0) || (b > 0)) {
      state.resultado = (a + b);
    } else {
      state.resultado = '';
    }

    this.setState(state);    
  }

  limpar() {
    let state = this.state;    
    state.primeiroNumero = '';
    state.segundoNumero = '';
    state.resultado = '';
    this.setState(state);        
  }

  // Implementar o método render - dizendo como a tela se desenha
  render() {
    return (      
      <View style={styles.principal}>
        { /* Testando views */ }

        { /* HEADER */}
        <View style={styles.header}>
          <Text style={styles.texto}>Calculadora</Text>
        </View>

        { /* CORPO */ }
        <View style={styles.corpo}>
          <View style={styles.campos}>
            <TextInput style={styles.textoInput} 
              autoFocus ={true}
              placeholder='Digite o primeiro numero ...'
              keyboardType = 'numeric'
              onChangeText={(texto) => this.setarPrimeiroNumero(texto)}>              
              {this.state.primeiroNumero}                                        
            </TextInput>

            <TextInput style={styles.textoInput} 
              placeholder='Digite o segundo numero ...'
              keyboardType = 'numeric'
              onChangeText={(texto) => this.setarSegundoNumero(texto)}> 
              {this.state.segundoNumero}                          
            </TextInput>            
          </View>

          <View style={styles.botoes}>            
            <Botao cor='blue' titulo='Calcular' borda='2' onPress={this.calcular}/>
            <Botao cor='red' titulo='Limpar' borda='2' onPress={this.limpar}/>
          </View>

          <View style={styles.resultado}>
            <Text style={styles.texto_resultado}>{this.state.resultado}</Text>
          </View>
        </View>        

        { /* FOOTER */ }
        <View style={styles.footer}>
          <Text style={styles.texto}>by anonimo</Text>
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

  header: {
    backgroundColor: 'green', 
    height: 40, 
    justifyContent: 'center', 
    alignItems: 'center'
  },  
  
  corpo: {
    backgroundColor: 'white', 
    flex: 1
  },  

  footer: {
    backgroundColor: 'blue', 
    height: 40, 
    justifyContent: 'center', 
    alignItems: 'center'    
  },

  campos: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  texto: {
    fontSize: 20, 
    color: 'white'
  },

  resultado: {
    flex: 1, 
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  texto_resultado:{
    fontSize: 80,
    color: 'green'
  }
});
