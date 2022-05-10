import React, {useState} from 'react';
import { View,TextInput, Text, KeyboardAvoidingView, Image, TouchableOpacity, StyleSheet } from 'react-native';

export function RegisterUser({ navigation }){
    const [user, setUser] = useState("");
    const [emial, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
        <KeyboardAvoidingView style={style.background}>
            
            <View style={style.container}> 
                <Text style={style.title}>Register</Text>               
                <TextInput style={style.input}
                    placeholder='User'
                    value={user}
                    autoCorrect={false}
                    onChangeText={(u) => setUser(u)}
                />
                <TextInput style={style.input}
                    placeholder='Email'
                    value={emial}
                    autoCorrect={false}
                    onChangeText={(e) => setEmail(e)}
                />
                <TextInput style={style.input}
                    placeholder='Password'
                    autoCorrect={false}
                    value={password}
                    onChangeText={(p) => setPassword(p)}
                />
                <TouchableOpacity style={style.btmSumit}>
                    <Text style={style.textSumit}>Cadastra</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const style = StyleSheet.create({
    background:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#191919',
    },
    containerLogo:{
        flex: 1,
        justifyContent: 'center',
        height: '20%'
    },
    container:{
        flex: 1,
        alignItems: 'center',
        width: '90%',
        justifyContent: 'center',
        paddingBottom: 30,
    },
    input: {
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom: 30,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
    },
    btmSumit:{
          backgroundColor: '#35AAFF',
          width: '90%',
          height: 45,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 7,
    },
    textSumit:{
      color: '#FFF',
      fontSize: 27,
  },
  btmCadastro: {
      marginTop: 10,
  },
  textCadastro: {
      color: '#FFF',
  },
  title: {
    marginTop: 10,
    justifyContent: 'center',
    marginBottom: 50,
    color: '#FFF',
    fontSize: 27,
  }
});