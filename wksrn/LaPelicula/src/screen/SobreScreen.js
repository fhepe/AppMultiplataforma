import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {LPButton} from '../component/LPButton';
import {StackActions, NavigationActions} from 'react-navigation';

export default class SobreScreen extends Component {

    // configurando opções de navegação
    static navigationOptions = ({navigation}) => ({
        /* header: null // sem cabeçalho */
        tabBarLabel: 'Sobre',
        tabBarIcon: ({focused, tintColor}) => {
          if (focused) {
            return (
              <Image source={require('../img/information.png')}
              style={{width: 26, height: 26}}/>
            );
          } else {
            return (
              <Image source={require('../img/information.png')}
              style={{width: 26, height: 26}}/>
            );            
          }
        }        
    });

    constructor(props) {
      super(props);
      this.state = {};

      this.voltar        = this.voltar.bind(this);
      this.telaPrincipal = this.telaPrincipal.bind(this);
    }

    voltar() {
      // Voltar a tela
      this.props.navigation.goBack();  
    }    

    telaPrincipal() {
      this.props.navigation.dispatch( 
        StackActions.reset({
          index: 0, 
          actions: [
            NavigationActions.navigate({routeName: 'Home'})
          ]
        })
      );
    }

  render(){
    return (
      <View style={styles.container}>

        <View style={styles.viewInterna}>
           <Text style={styles.texto}>LaPelicula</Text> 
           <Text style={styles.texto}>Você terá o total controle de todos seus filmes cadastrando-os neste programa gratuito, que é simples e leve, fácil
            de configurar e muito útil.</Text> 
        </View>      

        <LPButton titulo = "Voltar"
        onPress={() => {this.voltar()}}/>                               
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },

  viewInterna: {
    flex : 1,
    margin: 5
  },

  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#80ffdf',
    textAlign: 'center'
  }
});