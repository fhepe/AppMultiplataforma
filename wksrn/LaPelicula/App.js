import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './src/screen/HomeScreen';
import LoginScreen from './src/screen/LoginScreen';
import SobreScreen from './src/screen/SobreScreen';

// criar um navegador Stack
const NavegadorStack = createStackNavigator({
  Home: {screen: HomeScreen}, 
  Login: {screen: LoginScreen}, 
  Sobre: {screen: SobreScreen}
});

// container principal da aplicação
const App = createAppContainer(NavegadorStack);
export default App;