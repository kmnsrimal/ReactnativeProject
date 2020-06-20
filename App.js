import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          placeholderTextColor = "#ffffff"
          style={styles.input} 
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          placeholderTextColor = "#ffffff"
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          color='darkgreen'
          
         
      // style={styles.input}
         
          onPress={this.onLogin.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#708090',
  },
  input: {
    width: 300,
    height: 54,
    padding:10,
    // borderWidth: 1,
    //  borderColor: 'red',
    borderRadius:30,
    marginBottom: 25,
  paddingHorizontal:16,
  fontSize:20,
    backgroundColor:'rgba(255, 255, 255,0.3)',
  },
});