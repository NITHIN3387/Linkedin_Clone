import 'react-native-gesture-handler'
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import Navbar from './Navbar';
import { Animated, Dimensions, Image, Text, View } from 'react-native';

export default function Drawers() {
    const Drawer = createDrawerNavigator()

    function scroll(v) {
        scrollY.setValue(v)
    }

    let scrollY = new Animated.Value(0)

    let NavbarDiffClamp = Animated.diffClamp(scrollY, 0, 70)
    let NavbarTranslateY = NavbarDiffClamp.interpolate({
        inputRange: [0, 70],
        outputRange: [0, -70]
    })

    function CustomDrawer(props) {
        return (
            <DrawerContentScrollView {...props} style={{ backgroundColor: 'white', zIndex: 1, borderWidth: 0 }} contentContainerStyle={{ flex: 1 }}>
                <View style={{ borderBottomWidth: 1, borderBottomColor: 'rgba(0, 0, 0, .2)' }}>
                    <View style={{ paddingTop: 28, paddingLeft: 18 }}>
                        <Image
                            source={{ uri: 'https://artofheadshots.com/wp-content/uploads/2022/03/0141Sam-Mehrbod-PRINT-scaled.jpg' }}
                            style={{ width: 75, height: 75, borderRadius: 50, marginBottom: 10 }}
                        />
                        <Text style={{ fontSize: 21, fontWeight: 500 }}>NITHIN N</Text>
                        <Text>View profile</Text>
                    </View>
                    <DrawerItem label="41 profile views" />
                </View>
                <View style={{ paddingVertical: 10, gap: 5, borderBottomWidth: 1, borderBottomColor: 'rgba(0, 0, 0, .2)', flexGrow: 1, flex: 1 }}>
                    <DrawerItem label="Groups" labelStyle={{ fontSize: 21, fontWeight: 500, color: 'black' }} />
                    <DrawerItem label="Events" labelStyle={{ fontSize: 21, fontWeight: 500, color: 'black' }} />
                </View>
                <View style={{ paddingVertical: 10 }}>
                    <DrawerItem label="Settings" labelStyle={{ fontSize: 19, fontWeight: 500, color: 'black' }} icon={() => <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/3019/3019014.png'}} style={{width: 28, height: 28, tintColor: 'rgba(0, 0, 0, .7)'}}/>}/>
                </View>
            </DrawerContentScrollView>
        );
    }

    return (
        <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            <Drawer.Screen name='navbar' children={(props) => <Navbar scroll={scroll} translate={NavbarTranslateY} {...props}/>} />
        </Drawer.Navigator>
    );
}
