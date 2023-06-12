
import { Text, StyleSheet } from 'react-native'

export default function Texto({ children, style }){

    let estilo = estilos.text;

    if(style?.fontWeight === 'bold'){
        estilo = estilos.textoNegrito
    }

    return <Text style={[ style, estilo ]}> { children } </Text>
}

const estilos = StyleSheet.create({
    text: {
        fontFamily: 'MontserratRegular',
        fontWeight: 'normal'
    },
    textoNegrito: {
        fontFamily: 'MontserratBold',
        fontWeight: 'normal'
    }
})

