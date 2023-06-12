import { StyleSheet, View, Image, TouchableOpacity } from "react-native"

import Texto from '../../Texto/Texto'

export default function Detalhes({ nome, logo, nomeFazenda, descricao, preco, botao }){
    return (
        <>
            <Texto style={ estilo.nome }> {nome} </Texto>

            <View style={ estilo.fazenda }>
                <Image style={ estilo.imagemFazenda } source={logo}/>
                <Texto style={ estilo.nomeFazenda }> {nomeFazenda} </Texto>
            </View>

            <Texto style={ estilo.descricao }>
                {descricao}
            </Texto>

            <Texto style={ estilo.preco }>
                {preco}
            </Texto>

            <TouchableOpacity style={estilo.botao}>
                <Texto style={estilo.textoBotao}> {botao} </Texto>
            </TouchableOpacity>

        </>
    )
}

const estilo = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold'
    },
    fazenda: {
        flexDirection: 'row',
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: "MontserratRegular"
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
    botao: {
        marginTop: 16,
        backgroundColor: '#2A9F85',
        paddingVertical: 16,
        borderRadius: 6,   
    },
    textoBotao: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
    }
})