import { StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import Cesta from './src/Components/Cestaa/Cesta'
import mock from './src/Components/mocks/cesta'

export default function App() {

  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold, // Atualize o nome da propriedade
  });

  if(!fonteCarregada){
    return <View />
  }

  return (

    <SafeAreaView STYLE={{ flex: 1}}>
      <StatusBar />
      <Cesta { ...mock }/>
    </SafeAreaView>

  );
}