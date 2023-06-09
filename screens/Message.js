import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Focused from "../components/Focused";
import Other from "../components/posts/components/Other";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function TopNavbar() {
    const Tab = createMaterialTopTabNavigator()

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: 'white'
                },
                tabBarActiveTintColor: 'green',
                tabBarInactiveTintColor: 'black',
                tabBarAndroidRipple: {
                    borderless: false
                },
                tabBarIndicatorStyle: {
                    borderBottomColor: 'green',
                    borderBottomWidth: 2,
                }
            }}
        >
            <Tab.Screen name="Focused" component={Focused} />
            <Tab.Screen name="Other" component={Other} />
        </Tab.Navigator>
    )
}

function MsgHeader(props) {
    return(
        <View style={{flexDirection: 'row', backgroundColor: 'white', gap: 20, alignItems: 'center', padding: 15}}>
            <TouchableWithoutFeedback onPress={() => props.navigation.goBack()}> 
                <Image 
                    source={{uri: 'https://cdn-icons-png.flaticon.com/512/3114/3114883.png'}}
                    style={{width: 30, height: 30, tintColor: 'rgba(0, 0, 0, .6)'}}
                />
            </TouchableWithoutFeedback>
            <View style={{backgroundColor: '#eff2f7', padding: 10, flexGrow: 1, flexDirection: 'row', gap: 10, alignItems: 'center', borderRadius: 13,}} >
                <Image 
                    source={{uri: 'https://cdn-icons-png.flaticon.com/512/151/151773.png'}}
                    style={styles.searchIcon}
                />
                <Text style={{fontSize: 17, color: '#767a7e'}}>Search messages</Text>
            </View>
            <Image 
                source={{uri: 'https://cdn-icons-png.flaticon.com/512/3171/3171047.png'}}
                style={{width: 30, height: 30, tintColor: 'rgba(0, 0, 0, .6)'}}
            />
            <Image 
                source={{uri: 'https://cdn-icons-png.flaticon.com/512/2311/2311524.png'}}
                style={{width: 30, height: 30, tintColor: 'rgba(0, 0, 0, .6)'}}
            />
        </View>
    )
}

export default function Message(props) {
    const Stack = createNativeStackNavigator()

    return(
        <Stack.Navigator>
            <Stack.Screen name="top navigator" component={TopNavbar} options={{header: () => <MsgHeader {...props}/>}}/>
        </Stack.Navigator>
    )
}