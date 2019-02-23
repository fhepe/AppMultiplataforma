import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, TextInput } from 'react-native';


// Componente para imagem
class MinhaImagem extends Component {
  // mesmo no componente é necessário escrever um render()
  render() {
    return (
      <Image source={require('./src/img/primeiroapp.png')}
      style={{width: parseInt(this.props.largura), height: parseInt(this.props.altura)}}/>
    );
  }
}

class Botao extends Component {

  constructor(props){
    super(props);
    this.state = {};

    // estilos
    this.styles = StyleSheet.create({
      botao: {
        width: 240,
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
      texto: ''
    }

    // binding(amarração) da função do construtor com o da classe
    this.exibirTexto = this.exibirTexto.bind(this);
    this.clicar = this.clicar.bind(this);
  }

  exibirTexto(texto) {
    let state = this.state;    
    if (texto == '') {
      state.texto = 'Nenhum texto digitado!';          
    } else {
      state.texto = texto;          
    }    
    // MUITO IMPORTANTE!
    this.setState(state);    
  }

  // implementação função clicar
  clicar() {
    alert(this.state.texto);
  }

  // Implementar o método render - dizendo como a tela se desenha
  render() {
    return (      
      <View style={styles.principal}>
        { /* Testando views */ }      
        <MinhaImagem altura='200' largura='200'/>
        {/*<Button title='Clique aqui' onPress={this.clicar}/> */}

        { /* Botão customizado */ }
        <Botao cor='blue' titulo='Clique aqui!' borda='2' onPress={this.clicar}/>

        <TextInput style={styles.textoInput} 
        autoFocus ={true}
        placeholder='Digite o texto ...'
        onChangeText={(texto) => this.exibirTexto(texto)}></TextInput>
        <Text style={styles.texto}>{this.state.texto}</Text>
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
  textoInput: {
    fontSize: 15,
    borderWidth: 1
  },  
  texto: {
    fontSize: 40, 
    color: 'blue',
    fontWeight: 'bold'
  }
});
