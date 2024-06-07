import { VStack, Image, Text, Box, Link } from 'native-base'
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'
import { Botao } from './componentes/Botao';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Titulo } from './componentes/Titulo';
import firebase from '../firebase';
import { useState } from 'react';

export default function Login({ navigation }) {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  

  

  const handle = async () =>{
    const Usuario = await firebase.firestore().collection("Pessoas").add({
      nome: nome,
      email: email,
      
    })

    alert(`Usuario cadastrado ${Usuario}`)
  }


  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5} bg={'blue.800'}>
      <Image source={Logo} alt="Logo Voll" />

      <Titulo>
        Faça seu cadastro
      </Titulo>
      <Box>
        <EntradaTexto
          label="nome"
          placeholder="Insira seu nome completo"
          onChangeText={text => setNome(text)}
            value={nome}
        />
        <EntradaTexto
          label="E-mail"
          placeholder="Insira seu e-mail"
          onChangeText={text => setEmail(text)}
          value={email}

        />
      </Box>
      <Botao bg={'white'} onPress={handle}>
        <Text  color={"blue.500"}>
        Criar

        </Text>
        </Botao>
        <Botao mt={2} bg={'white'} onPress={() => navigation.navigate('Tabs') }>
        <Text  color={"blue.500"}>
        Acessar

        </Text>
        </Botao>

      
    </VStack>
  );
}