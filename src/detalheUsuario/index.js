import React, {Component} from 'react';
import { StyleSheet, View, Text,TouchableHighlight, ScrollView, Image} from 'react-native';
import axios from "axios";

export default class App extends Component {
state = {
    userDetails:{}
  };

  componentDidMount(){
    this.fetcUser(); 
  }

  fetcUser(){
    //Pegando o id do usuário vindo da lista de usuários 
    const idUser = this.props.navigation.getParam('id');
    
    //Chamada na api para pegar os dados do usuário
    return axios.get('https://reqres.in/api/users/' + idUser)
    .then(({data}) => {

      const {id, email, first_name, last_name, avatar} = data.data;
      const user = {
        id: String(id),
        email,
        first_name,
        last_name,
        avatar
      }
      this.setState({userDetails: user});
      return user;
    });
  }

  exit = () => {
    this.props.navigation.navigate('ListagemUsuarios');

  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.containerTitle}>
            Detalhes do usuário
          </Text>
        </View>
        <View style={styles.userContainer}>
          <View style={styles.user}>
              <View style={styles.imageContainer}>
                  <Image
                  style={styles.image}
                  source={{uri: this.state.userDetails.avatar}}
                  />
              </View>
              <View style={styles.detailsContainer}>
                  <Text style={styles.nameUser}>
                    {this.state.userDetails.first_name + ' '  + this.state.userDetails.last_name}
                  </Text>
                  <Text style={styles.emailUser}>
                    {this.state.userDetails.email}
                  </Text>
              </View>
          </View>
          < TouchableHighlight 
                style={styles.button}
                onPress={this.exit}>
                  <Text style={styles.textExit}>Voltar</Text>
            </ TouchableHighlight >
          </View>
      </View>
    ) 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#FFFFFF',
  },
  header: {
    flex: 0.1,
    backgroundColor: '#448bc6c4',
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: '#000000'
  },
  userContainer: {
    borderWidth: 1,
    flex: 0.7,
    borderColor: '#000000'
  },
  containerTitle: {
    marginTop: 30,
    fontSize: 25,
    alignItems: 'center',
    color: '#FFFFFF',
    justifyContent: 'center',
    textAlign: 'center'
  },
  user:{
    flex: 0.9,
    alignItems: 'center',
    backgroundColor: '#448bc6c4',
    margin: 15,
    width: 320,
    height: 400,
    padding: 15,
    borderColor: '#000000',
    borderRadius: 30
  },
  imageContainer: {
    width: 84,
    flex:0.4,
    marginTop: 30,
    borderWidth: 1.5,
    borderRadius: 50,
    borderColor: '#FFFFFF',
    padding: 0 
  },
  image: {
    flex: 1,
    width: 80,
    alignContent: 'center',
    borderRadius: 50
  },
  detailsContainer: {
    flex:1,
    padding: 0 
  },
  nameUser:{
    flex:0.3,
    marginTop: 30,
    fontSize: 23,
    color:'#FFFFFF',
    textAlign: 'center'
  },
  emailUser:{
    flex:0.3,
    fontSize: 23,
    color:'#FFFFFF',
    textAlign: 'center'
  },
  textExit:{
    fontWeight: 'bold',
    fontSize: 17,
    color:'#FFFFFF'
  },
  button: {
    flex: 0.1,
    paddingTop: 10,
    borderWidth: 1,
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#448bc6c4',
  }
 })


