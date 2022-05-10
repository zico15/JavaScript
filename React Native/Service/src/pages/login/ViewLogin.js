
import React, {useState} from 'react';
import { View,TextInput, Text, KeyboardAvoidingView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Connection from '../../serve/Connection'
/*
const api = axios.create({
    baseURL: 'https://old-kids-feel-87-196-72-98.loca.lt'
});

api.get('/parking-spot')
  .then(function (response) {
      alert(response);
      console.log(response);
  })
  .catch(function (error) {
    alert(error);
    console.log(error);
  });
*/
export function Login({ navigation }) {
    const [emial, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const con = new Connection();

    async function list(){
       const data = await con.get("/parking-spot/7017f818-7d33-4f32-9bfe-d0a5a95fc0cf");
       //alert(JSON.parse(data));
       console.log("lis: " + data.id);
    }

    return (
        <KeyboardAvoidingView style={style.background}>
            <View style={style.containerLogo}>
                <Image source={require('../../assets/logo.png')} />
            </View >
            <View style={style.container}>
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
                <TouchableOpacity style={style.btmSumit}
                onPress={list}
                >
                    <Text style={style.textSumit}>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.btmCadastro}
                    onPress={() => navigation.navigate("RegisterUser")}
                >
                    <Text style={style.textCadastro}>Criar conta</Text>
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
          marginBottom: 15,
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
    }
  });