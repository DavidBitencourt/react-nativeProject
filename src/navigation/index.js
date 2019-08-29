import {createStackNavigator, createAppContainer} from 'react-navigation';
import Login from '../login';
import ListagemUsuarios from '../listagemUsuarios';
import DetalheUsuario from '../detalheUsuario';


//Definição das rotas para a navegação entre as telas, é iniciado na tela de 'Login'
const AppNavigator = createStackNavigator({
    Login,
    ListagemUsuarios,
    DetalheUsuario,
},{initialRouteName:'Login',
defaultNavigationOptions:{
    header:null,
}});

export default createAppContainer(AppNavigator);