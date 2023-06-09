import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 13,
        padding: 10,
        marginBottom: 5,
        backgroundColor: 'white',
        position: 'absolute',
        zIndex: 10,
        elevation: 5
    },
    profilePic:{
        width: 40,
        height: 40,
        borderRadius: 50
    },
    searchBar:{
        backgroundColor: '#eff2f7',
        padding: 10,
        flexGrow: 1,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        borderRadius: 13,
    },
    searchIcon:{
        width: 18,
        height: 18,
        tintColor: '#767a7e'
    },
    msgIcon:{
        width: 30,
        height: 30,
        tintColor: '#646465',

    }
})