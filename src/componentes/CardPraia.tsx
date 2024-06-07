import { VStack, Text, Avatar } from "native-base";
import { Botao } from "./Botao";

interface CardProps{
    nome: string;
    foto: string;
    especialidade: string;
    data?: string;
    foiAtendido?: boolean
    foiAgendado?: boolean
}

export function CardConsulta({
    nome,   
    localidade,
    data,
    foiAtendido,
    foiAgendado
}: CardProps) {
    return(
        <VStack w="100%" bg={foiAtendido ? 'blue.100': 'white'} p="5" borderRadius="lg" shadow={2} mb={5}>
            <VStack flexDir="row" >

          
            <VStack pl="4">
                <Text fontSize="md" bold>{nome}</Text>
                <Text>{localidade}</Text>
                <Text>{data}</Text>
            </VStack>
            </VStack>
            <Botao mt={4}>
                  {foiAgendado ? 'Multirão' : 'Multirão feito'}
            </Botao>
        </VStack>
    )
}