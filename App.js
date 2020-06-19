import React from 'react';
import {StyleSheet,Text, View ,TextInput} from 'react-native';

export default function YourApp() {
  return (
    <View style={styles.container}>

      <View style = {styles.top}>
          <Text style={styles.bigBlue}>Login</Text>
       </View>
       <View style = {styles.bottom}>
          <Text style = {styles.bigBlue}>ID</Text>

               <TextInput style = {styles.text}

                 placeholder="Type your id!"
                />
                <Text style = {styles.bigBlue}>Name</Text>

                <TextInput style = {styles.text}

                                 placeholder="Type your name"
                                />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
   container:{
   backgroundColor:'lightblue',
//   alignItems:'center',
    flex:1,

    },
     bigBlue: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 50,
      },
    top:{

    fontSize: 30,
    height:'20%',
    backgroundColor:'blue',
    alignItems:'center',

    },

    bottom:{

    fontSize: 30,
        height:'80%',
        backgroundColor:'lightgreen',
        alignItems:'center',
//        padding:0,
//        margin:0

    },

    text:{
      height:40,
      width:300,
      backgroundColor:'white',
      borderColor:'green',
      borderWidth:1
   }

//
//    input:{
//    flex:1,
//    backgroundColor:'green',
//    width:100,
//    height:50,
//    }
});
