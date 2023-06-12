import { StyleSheet, Image, Dimensions } from 'react-native'
import Texto from '../../Texto/Texto'

import topo from '../../../../assets/frutas/topo.png'

const width = Dimensions.get('screen').width;

export default function Topo({ titulo }){
    return <>
        <Image source={topo} style={ estilo.topo } />
        <Texto style={ estilo.titulo }> {titulo} </Texto>
    </>
}

const estilo = StyleSheet.create({
    titulo: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: '#fff',
        fontWeight: 'bold',
        padding: 16
    },
    topo: {
        width: '100%',
        height: (578 / 768) * width,
    },
})