import React, {useEffect} from 'react';
import type { PropsWithChildren } from 'react';
import { SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View } from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

import SplashScreen from 'react-native-splash-screen';

function App (): JSX.Element{

    useEffect(() => {
        setTimeout(()=>{
          SplashScreen.hide();
        }, 5000)
      }, []);

    return (
        <Text>Hello World</Text>
    )
}

export default App;