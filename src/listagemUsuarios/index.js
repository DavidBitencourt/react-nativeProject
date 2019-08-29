import React, {Component} from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, TouchableHighlight} from 'react-native';
import axios from "axios";
export default class App extends Component {
  state = {
    users: []
  };

  componentDidMount(){
    //Chamada na api para pegar a lista de usuários
    return axios.get('https://reqres.in/api/users?page=2')
    .then(({data}) => {
      this.setState({ users: data.data });
    });
  }

  detailsUser = (user) => {
    this.props.navigation.navigate('DetalheUsuario', user);
  }

  exit = () => {
    this.props.navigation.navigate('Login');

  }

  render(){
    const {users} = this.state;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.containerTitle}>
            Usuários
          </Text>
        </View>
        {users.map(user => (<View 
          key={user.id}
          style={styles.userList}>
          <View style={styles.imageContainer}>
              <Image
              style={styles.image}
              source={{uri: user.avatar}}
              />
          </View>
          <View style={styles.detailsContainer}>
              <Text style={styles.nameUser}>
                  {user.first_name + ' '  + user.last_name}
              </Text>
              <Text style={styles.emailUser}>
                  {user.email}
              </Text>
                <TouchableOpacity
                style={styles.buttonDetails}
                onPress={this.detailsUser(user)}
                >
                <Text style={styles.textDetails}>Detalhes</Text>
              </TouchableOpacity>
            </View> 
        </View>))}
        
        < TouchableHighlight 
            style={styles.button}
            onPress={this.exit}>
              <Text style={styles.textExit}>SAIR</Text>
          </ TouchableHighlight >
      </ScrollView>
    ) 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  header: {
    flex: 1,
    backgroundColor: '#448bc6c4',
    borderWidth: 1,
    borderColor: '#000000'
  },
  containerTitle: {
    fontSize: 30,
    fontWeight: "100",
    fontFamily: 'serif',
    color: '#FFFFFF',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  userList:{
    flex: 1,
    flexDirection: "row",
    margin: 15,
    width: 320,
    height: 100,
    padding: 10,
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: '#000000',
    backgroundColor: '#448bc6c4'
  },
  imageContainer: {
    width: 70,
    flex:0.3,
    borderWidth: 1.5,
    borderRadius: 50,
    borderColor: '#FFFFFF',
    padding: 0 
  },
  image: {
    flex: 1,
    borderRadius: 50
  },
  detailsContainer: {
    flex:1,
    padding: 0 
  },
  nameUser:{
    flex:0.7,
    marginTop: 10,
    fontSize: 17,
    color:'#FFFFFF',
    textAlign: 'center'
  },
  emailUser:{
    flex:0.7,
    color:'#FFFFFF',
    fontSize: 17,
    textAlign: 'center'
  },
  textExit:{
    fontWeight: 'bold',
    fontSize: 17,
    color:'#FFFFFF'
  },
  button: {
    marginTop: 5,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#448bc6c4',
    height: 45
  },
  buttonDetails: {
    marginTop: 5,
    alignSelf: 'flex-end',
    color: '#FFFFFF',
    width: 100,
    height: 15
  },
  textDetails:{
    fontWeight: 'bold',
    fontSize: 13,
    color:'#000000'
  }
 })


