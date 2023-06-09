import { StatusBar } from 'react-native';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Drawers from './components/Drawers';
import Message from './screens/Message';

export default function App() {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer style={styles.container} theme={{ colors: { background: '#e8e7de' } }}>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />

            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name='drawer' children={() => <Drawers/>}/>
                <Stack.Screen name='message' children={(props) => <Message {...props}/>}/>
            </Stack.Navigator>

        </NavigationContainer>
    );
}
