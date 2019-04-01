import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { LPButton } from '../component/LPButton';

//Component de Filmes
class Filmes extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewFilme}>
          <Text style={{ fontSize: 20, color: 'grey', fontWeight: 'bold' }}>Título: {this.props.data.Title}</Text>
          <Text style={{ fontSize: 20, color: 'grey', fontWeight: 'bold' }}>Ano: {this.props.data.Year}</Text>
        </View>
      </View>
    );  }
}

export default class ListaFilmesApiScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pesquisa: '',
      filmes: [],
      filtro: 's'
    };

    this.procurar = this.procurar.bind(this);

  }

  procurar() {
    let url = 'http://www.omdbapi.com/?s=' + this.state.pesquisa + '&apikey=a3e2854b';

    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'content-type': 'multipart/form-data'
      }
    }).then((response) => response.json())
      .then((responseJson) => {

        let ret = responseJson['Search'] == undefined ? [] : responseJson['Search'];
        this.setState({ filmes: ret })

      })
  }

  // configurando opções de navegação
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'Buscar Filme API',
    tabBarIcon: ({ focused, tintColor }) => {
      if (focused) {
        return (
          <Image source={require('../img/cadastrar_ativo.png')} style={{ width: 26, height: 26 }}></Image>
        );
      } else {
        return (
          <Image source={require('../img/cadastrar_inativo.png')} style={{ width: 26, height: 26 }}></Image>
        );
      }
    }
  });

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewCampos}>
          <TextInput style={styles.edtFilme}
            multiline={true} placeholder='Informe o título do filme'
            onChangeText={(valor) => this.setState({ pesquisa: valor })} />
        </View>
        <View>
          <LPButton titulo='Procurar' onPress={() => this.procurar()} />
        </View>
        <View style={styles.flatList}>
          <FlatList data={this.state.filmes} keyExtractor={item => item.Title.toString()} renderItem={({ item }) => <Filmes data={item}></Filmes>}></FlatList>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4'
  },
  flatList: {
    padding: 15
  }, 
  viewFilme: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderWidth: 3,
    borderColor: '#80ffdf',
    borderRadius: 4,
    paddingLeft: 5,
    margin: 3,
    paddingBottom: 5
  },  
  viewCampos: {
    width: '98%'
  },  
  edtFilme: {
    margin: 2,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'gray'
  }
});