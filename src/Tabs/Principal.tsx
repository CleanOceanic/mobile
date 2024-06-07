import { VStack, Image, Box, ScrollView, Text, Divider } from "native-base";
import Logo from '../assets/logosegundario.png';
import { Botao } from "../componentes/Botao";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Titulo } from "../componentes/Titulo";
import { depoimentos } from "../utils/mock";
import { CardConsulta } from '../componentes/CardPraia'


export default function Principal(){

  return (
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
        <Image source={Logo} alt="Logo" mt={10} />
        <Titulo color="blue.500">Boas-vindas!</Titulo>

        <Titulo color="blue.800" alignSelf="center" mb={4}>Praias esperando sua ajuda</Titulo>
        <VStack space={3} divider={<Divider />} w="100%">
        <CardConsulta
        nome="Barra da Tijuca"
        localidade='Rio de Janeiro'
        
        data='20/20/2002'
        foiAgendado
       
      />

      <CardConsulta
        nome="Ilhabela"
        localidade='São Paulo'        
        data='20/20/2002'
        foiAtendido
       
      />

        <CardConsulta
          nome="Santos"
          localidade='São Paulo'        
          
          
          data='20/20/2002'
          foiAtendido
        
        />
        </VStack>
      </VStack>
    </ScrollView>
  );
}