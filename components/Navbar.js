import { Animated, Image, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import Home from '../screens/Home';
import MyNetwork from '../screens/MyNetwork'
import Notification from '../screens/Notification'
import AddPost from '../screens/AddPost'
import Jobs from '../screens/Jobs'
import 'react-native-gesture-handler'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRef } from 'react';

export default function Navbar(props) {
    const Tab = createBottomTabNavigator()
    const tabList = [
        {
            name: 'Home',
            component: Home,
        },
        {
            name: 'My Network',
            component: MyNetwork,
        },
        {
            name: 'Post',
            component: AddPost,
        },
        {
            name: 'Notification',
            component: Notification,
        },
        {
            name: 'Jobs',
            component: Jobs,
        },
    ]

    const left = useRef(new Animated.Value(0)).current
    
    function navbarTracker(value) {
        Animated.timing(left, {
            toValue: value,
            duration: 600,
            useNativeDriver: false,
        }).start();
    }

    let scrollY = new Animated.Value(0)
    
    let NavbarDiffClamp = Animated.diffClamp(scrollY, 0, 70)
    let NavbarTranslateY = NavbarDiffClamp.interpolate({
        inputRange: [0, 70],
        outputRange: [0, 70]
    })

    function setValue(value){
        props.scroll(value)
    }

    function MyTabBar({ state, navigation }) {
        return (
            <Animated.View style={{ flexDirection: 'row', position: 'absolute', zIndex: 0, bottom: props.translate, backgroundColor: 'white', elevation: 15}}>
                <Animated.View style={[styles.tracker, {left: left, transform:[{translateY: NavbarTranslateY}], zIndex: 1}]} />
                {state.routes.map((route, index) => {
                    const isFocused = state.index === index;

                    const onPress = (value) => {
                        navigation.navigate(route.name);
                        navbarTracker(value)
                    };

                    const uri = route.name == 'Home' ? 'https://cdn-icons-png.flaticon.com/512/1946/1946436.png' :
                                route.name == 'My Network' ? 'https://cdn-icons-png.flaticon.com/512/3126/3126647.png' :
                                route.name == 'Post' ? 'https://cdn-icons-png.flaticon.com/512/3032/3032220.png' :
                                route.name == 'Notification' ? 'https://cdn-icons-png.flaticon.com/512/3602/3602123.png' :
                                'https://cdn-icons-png.flaticon.com/512/10770/10770608.png'

                    const value = route.name == 'Home' ? 0 :
                                route.name == 'My Network' ? 84 :
                                route.name == 'Post' ? 165 :
                                route.name == 'Notification' ? 247 :
                                328

                    return (
                        <TouchableNativeFeedback
                            onPress={() => onPress(value)}
                            key={route.key}
                        >
                            <View style={{alignItems: 'center', flexGrow: 1, justifyContent: 'center', gap: 3, paddingTop: 10, paddingBottom: 10}}>
                                <Image
                                    source={{ uri: uri }}
                                    style={{ width: 26, height: 26 , tintColor: isFocused ? 'black' : '#707171'}}
                                />
                                <Text style={{fontSize: 12}}>
                                    {route.name}
                                </Text>
                            </View>
                        </TouchableNativeFeedback>
                    );
                })}
            </Animated.View>
        );
    }

    return (
            <Tab.Navigator
                initialRouteName='Home'
                tabBar={(props) => <MyTabBar {...props} />}
                screenOptions={{
                    headerShown: false,
                }}
            >
                {
                    tabList.map((e, i) => (
                        <Tab.Screen
                            name={e.name}
                            children={() => <e.component setValue={setValue} {...props}/>}
                            key={i}
                        />
                    ))
                }
            </Tab.Navigator >
    )
}

const styles = StyleSheet.create({
    tracker:{
        backgroundColor: 'black',
        height: 5,
        width: 70,
        position: 'absolute',
        bottom: 60,
        zIndex: 1,
        borderRadius: 3,
    }
})