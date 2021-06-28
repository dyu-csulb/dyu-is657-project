import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function AddItem({addItem}) {

    const [txtInput, setTxtInput] = useState('');

    function onChange(val) {
        setTxtInput(val);
    }

    return (
      <View>
        <TextInput 
            placeholder="Add Item..." 
            style={styles.input} 
            onChangeText = {onChange}
        />
        <TouchableOpacity style={styles.btn} onPress={() => addItem(txtInput)}>
          <Text style={styles.btnText}>
            <FontAwesome
              name="plus"
              size={20}
            /> Add Item    
          </Text>
        </TouchableOpacity>
      </View>
    );

}

const styles = StyleSheet.create({
input : {
    height:60,
    padding:8,
    fontSize:16,
    margin:5,
    borderColor:'lightblue'
},
btn : {
    backgroundColor:'#c2bad8',
    padding:9,
    margin:5,
},
btnText : {
    color:'darkslateblue',
    fontSize:20,
    textAlign:'center',
},

});

export default AddItem;
