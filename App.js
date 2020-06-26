
// import React, { Component } from 'react';
// import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';

// // import {createStackNavigator} from 'react-navigation';

// export default
//  class App extends Component {
//   constructor(props) {
//     super(props);
    
//     this.state = {
//       username: '',
//       password: '',
//     };
//   }
  
//   onLogin() {
//     const { username, password } = this.state;

//     Alert.alert('Credentials', `${username} + ${password}`);
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <TextInput
//           value={this.state.username}
//           onChangeText={(username) => this.setState({ username })}
//           placeholder={'Username'}
//           placeholderTextColor = "#ffffff"
//           style={styles.input} 
//         />
//         <TextInput
//           value={this.state.password}
//           onChangeText={(password) => this.setState({ password })}
//           placeholder={'Password'}
//           placeholderTextColor = "#ffffff"
//           secureTextEntry={true}
//           style={styles.input}
//         />
//         <View style={styles.login}>
//         <Button 
//           title={'Login'}
//           color='darkgreen'
          
         
//       // style={styles.input}
//       onPress={() => {
//         Alert.alert('Logged Successfully!');
//       }}
//           // onPress={this.onLogin.bind(this)}
//         /></View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#708090',
//   },
//   input: {
//     width: 300,
//     height: 54,
//     padding:10,
//     // borderWidth: 1,
//     //  borderColor: 'red',
//     borderRadius:30,
//     marginBottom: 25,
//   paddingHorizontal:16,
//   fontSize:20,
//     backgroundColor:'rgba(255, 255, 255,0.3)',
//   },
//   login:{
//     // marginRight:50,
//     // marginLeft:40,
//     marginTop:10,
//      paddingTop:5,
//       paddingLeft:10,
//      paddingRight:10,
//      paddingBottom:5,
//     backgroundColor:'darkgreen',
    
//     borderRadius:70,
//     width:150,

//     // borderWidth: 1,
//     borderColor: 'darkgreen'
//   },
// });

// // // export default createStackNavigator({
// // //     home: App
// // // })
// import 'react-native-gesture-handler';
// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator, HeaderTitle} from 'react-navigation-stack';
// import {createAppContainer} from 'react-navigation';
// import {
//   Header,
//   // LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

//  import Home from './Screen/Home'
//  import Profile from './Screen/Profile'
//  import Login from './Screen/Login'


// const MainNavigator = createStackNavigator({
//   Home:{screen:Home},
//   Profile:{screen:Profile},
//   Login:{screen:Login},
   


  

// },{

//   headerMode:{
//     headerLeft: null,
//     gesturesEnabled: false,
//     headerMode: 'none',
//   }
// }); 


// const App = createAppContainer(MainNavigator);


// const MainApp = () => <App  />;
// export default App;

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './Screen/Login'

function HomeScreen({navigation}) {
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}


function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator> */}
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
        <Drawer.Screen name="Login" component={Login} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;