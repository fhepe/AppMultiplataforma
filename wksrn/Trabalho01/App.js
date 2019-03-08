import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';

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
      autor: '',
      frase: '',
      data: []
    }

    // binding(amarração) da função do construtor com o da classe
    this.setarAutor = this.setarAutor.bind(this);
    this.setarFrase = this.setarFrase.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.salvar = this.salvar.bind(this);
    this.limpar = this.limpar.bind(this);        
  }

  setarAutor(texto) {
    let state = this.state;    
    state.autor = texto;
    this.setState(state);    
  }

  setarFrase(texto) {
    let state = this.state;    
    state.frase = texto;
    this.setState(state);    
  }

  salvar() {
    let state = this.state;    
    
    if (state.autor == '') {
      alert('Informa o autor.')
    } 
    else if (state.frase == '') {
      alert('Informa a frase.')
    } else {      
      state.data.push({key: this.state.data.length.toString(), autor: state.autor, frase: state.frase});
    }

    this.setState(state);    
  }

  limpar() {
    let state = this.state;    
    state.autor = '';
    state.frase = '';
    state.data = [];
    this.setState(state);        
  }

  renderItem(item) {
    return (
      <Text style={[styles.row]}>
        Autor: {item.item.autor} Frase: {item.item.frase}
      </Text>
    );
}  
  // Implementar o método render - dizendo como a tela se desenha
  render() {
    return (      
      <View style={styles.principal}>
        { /* HEADER */}
        <View style={styles.header}>
          <Text style={styles.texto}>Cadastro de frases</Text>
        </View>

        { /* CORPO */ }
        <View style={styles.corpo}>

          { /* CAMPOS */ }
          <View style={styles.campos}>
            <TextInput style={styles.textoInput} 
              autoFocus ={true}
              placeholder='Informe o autor ...'
              onChangeText={(texto) => this.setarAutor(texto)}>              
              {this.state.autor}                                        
            </TextInput>              
            <TextInput style={styles.textoInput}               
              placeholder='Informa a frase ...'
              onChangeText={(texto) => this.setarFrase(texto)}>              
              {this.state.frase}                                        
            </TextInput>        
          </View>

          { /* BOTÕES */ }
          <View style={styles.botoes}>            
            <Botao cor='#4dff88' titulo='Salvar' borda='2' onPress={this.salvar}/>
            <Botao cor='#ff8080' titulo='Limpar' borda='2' onPress={this.limpar}/>
          </View>

          { /* LISTA */ }
          <FlatList style={styles.list} data={this.state.data} renderItem={this.renderItem} extraData={this.state} />
        </View>        

        { /* FOOTER */ }
        <View style={styles.footer}> 
          <Text style={styles.texto}>by Fhelipe</Text>
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
    backgroundColor: '#66b5ff', 
    height: 40, 
    justifyContent: 'center', 
    alignItems: 'center'
  },  
  
  corpo: {
    backgroundColor: 'white', 
    flex: 1
  },  

  footer: {
    backgroundColor: '#66b5ff', 
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

  row: {
    backgroundColor: '#66b5ff',
    padding: 5,
    fontSize: 15,
    color: '#FFFFFF',    
    marginBottom: 1,    
  },

  viewInput: {
    flexDirection: 'row',
    padding: 1
  },

  itemInput: {
    backgroundColor: '#FFFFFF',
    flex: 1
  },  

  list: {
    flex: 1,
    flexDirection: 'column',
    margin: 5
  },  
});
