import axios from 'axios';
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
export default class App extends Component {
  state = {
    email: '',
    password: '',
    token: '',
  };

  login = async () => {
    const {email, password, token} = this.state;

    //Chamada na api para fazer login
    axios
      .post('https://reqres.in/api/login', {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      })
      .then(function(response) {
        return response;
      });
    //Condição para verificar se o emaiil e senha são o do usuário já cadastrado
    if (email == 'eve.holt@reqres.in' && password == 'cityslicka') {
      this.props.navigation.navigate('ListagemUsuarios');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>LOGIN</Text>
        <View style={styles.loginContainer}>
          <TextInput
            style={styles.input}
            value={this.state.email}
            onChangeText={email => this.setState({email})}
            placeholder="Digite o seu e-mail"
          />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            onChangeText={password => this.setState({password})}
            value={this.state.senha}
            placeholder="Digite a sua senha"
          />
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.login()}>
            <Text style={styles.textLoading}>Entrar</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 50,
    backgroundColor: '#448bc6c4',
  },
  title: {
    fontSize: 30,
    fontWeight: '100',
    color: '#FFFFFF',
  },
  input: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    padding: 15,
    width: 270,
    height: 50,
  },
  loginContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLoading: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#000000',
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    alignContent: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#000000',
    width: 130,
    height: 40,
  },
});
