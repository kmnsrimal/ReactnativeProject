
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
class Profile extends React.Component {
constructor(props) {
super(props);
}

GoToNextScreen(){

    const {navigate} = this.props.navigation;
    navigate('Home', )
}

render() {
    return (
    <View style={styles.container}>
      <Text>This is the profile screen!</Text>
      <Button 
      onPress={this.GoToNextScreen.bind(this)}
       title="Home screen" />
    </View>
   );
}
}
const styles = StyleSheet.create({
container:{
flex:1,
alignItems:'center',
}
});
export default Profile;