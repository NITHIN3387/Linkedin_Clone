import { Animated, Image, Text, View } from "react-native";
import styles from '../styles/Header.css'
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { DrawerActions } from "@react-navigation/native";

export default function Header(props) {
    return(
        <Animated.View style={styles.header}>
            <TouchableWithoutFeedback onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}>
                <Image 
                    source={{uri: 'https://artofheadshots.com/wp-content/uploads/2022/03/0141Sam-Mehrbod-PRINT-scaled.jpg'}}
                    style={styles.profilePic}
                />
            </TouchableWithoutFeedback>
            <View style={styles.searchBar} >
                <Image 
                    source={{uri: 'https://cdn-icons-png.flaticon.com/512/151/151773.png'}}
                    style={styles.searchIcon}
                />
                <Text style={{fontSize: 17, color: '#767a7e'}}>Search</Text>
            </View>
            <TouchableWithoutFeedback onPress={() => props.navigation.navigate('message')}>
                <Image
                    source={{uri: 'https://cdn-icons-png.flaticon.com/512/3115/3115518.png'}}
                    style={styles.msgIcon}
                />
            </TouchableWithoutFeedback>
        </Animated.View>
    )
}