import Texto from '../Texto/Texto'
import { View, Image, StyleSheet } from 'react-native'

export default function Item({ item: { nome, imagem }}) {

    return <View key={nome} style={estilo.iten}>
            <Image source={imagem} style={estilo.imagem}></Image>
            <Texto style={estilo.nome}> {nome} </Texto>
        </View> 
}

const estilo = StyleSheet.create({
    iten: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        alignItems: 'center',
        paddingVertical: 16,
        marginHorizontal: 16
    },
    imagem: {
        width: 46,
        height: 46,
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: '#464646',
    }
})
    
