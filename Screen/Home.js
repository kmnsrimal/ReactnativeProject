import React, { Component } from 'react';
import {
StyleSheet,
Text,Button,
View,
TouchableHighlight,TouchableOpacity,
Image,TextInput,
Alert,
ScrollView,
} from 'react-native';
class Home extends React.Component {
constructor(props) {
super(props);
}

GoToNextScreen(){

    const {navigate} = this.props.navigation;
    navigate('Login','Profile' )
}

render() {
    return (
    <View style={styles.container}>
      <Text>This is the Home screen!</Text>
      <Button 
      onPress={this.GoToNextScreen.bind(this)}
       title="Profile screen" />
       <Button 
      onPress={this.GoToNextScreen.bind(this)}
       title="Login screen" />
    </View>
   );
}
}
const styles = StyleSheet.create({
container:{
flex:1,
alignItems:'center',
justifyContent:'center',
}
});
export default Home;
