import { Image, ScrollView, Text, TouchableNativeFeedback, View } from "react-native";

const personDetail = [
    {
        'name': 'person 1',
        'msg': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        'name': 'person 2',
        'msg': 'Lorem ipsum dolor sit amet consectetur.'
    },
]

function Msg(props) {
    return(
        <TouchableNativeFeedback>
            <View style={{padding: 15, backgroundColor: 'white', flexDirection: 'row', gap: 15, borderBottomWidth: 1, borderColor: 'rgba(0, 0, 0, .1)', alignItems: 'stretch'}}>
                <Image 
                    source={{uri: 'https://placebeard.it/640x360/' + Math.floor(Math.random() * 1000 + 1)}}
                    style={{width: 60, height: 60, borderRadius: 50}}
                />
                <View style={{flexShrink: 1, flexGrow: 1, flexWrap: 'nowrap', justifyContent: 'flex-start'}}>
                    <Text style={{fontWeight: 500, fontSize: 17}}>{props.name}</Text>
                    <Text>{props.msg}</Text>
                </View>
                <Text >May {Math.floor(Math.random() * 30 + 1)}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}

export default function Other() {
    return(
        <ScrollView>
            {
                personDetail.map((details, i) => <Msg {...details} key={i}/>)
            }
        </ScrollView>
    )
}