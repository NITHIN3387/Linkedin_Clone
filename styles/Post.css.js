import { Dimensions, StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    post:{
        marginVertical: 10,
        flexGrow: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        paddingHorizontal: 10,
        paddingVertical: 7,
        backgroundColor: 'white',
    },
    profilePic: {
        width: 55,
        height: 55,
        borderRadius: 50,
    },
    details:{
        flexGrow: 1,
        marginLeft: 10
    },
    name: {
        fontSize: 19,
        fontWeight: 500,
        color: '#383838'
    },
    connectType:{
        fontSize: 14,
        color: '#9d9c9c',
    },
    connections: {
        color: '#909090',
    },
    time:{
        color: '#919090',
    },
    globalIcon:{
        width: 13,
        height: 13,
        tintColor: '#646465',
    },
    connectIcon:{
        width: 22,
        height: 22,
        tintColor: '#2a76c9',
    },
    connect:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 9,
        borderRadius: 7
    },
    optionIcon:{
        width: 22,
        height: 22,
        tintColor: '#7a7a7a',
        borderRadius: 50,
    },
    discription:{
        backgroundColor: 'white',
        paddingBottom: 12,
        paddingHorizontal: 12,
    },
    postImage:{
        width: Dimensions.get('window').width,
        height: 400,
    },
    likesAndCommmentsCount:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    likes:{
        flexDirection: 'row',
        flexGrow: 1,
        marginLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#d7d6d6',
        paddingVertical: 15,
    },
    comments:{
        flexDirection: 'row',
        marginRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#d7d6d6',
        paddingVertical: 15,
    },
    Count:{
        color: '#7c7c7d',
    },
    buttons:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 5,
        gap: 5
    },
    buttonImage:{
        width: 18,
        height: 18,
        tintColor: '#707171'
    },
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        paddingVertical: 5,
    },
    buttonText:{
        fontSize: 13,
    }
})