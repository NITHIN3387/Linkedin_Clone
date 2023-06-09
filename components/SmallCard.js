import { useState } from "react";
import { Dimensions, Image, Pressable, Text, TouchableNativeFeedback, View } from "react-native";

export default function SmallCard(props) {
    const [connectionState, setCOnnectionState] = useState(true)

    return (
        <TouchableNativeFeedback>
            <View style={{ borderRadius: 10, backgroundColor: 'white', elevation: 3, width: (Dimensions.get('window').width - 40) / 2, paddingBottom: 10 }}>
                <Image
                    source={{ uri: 'http://placeimg.com/640/360/' + props.number }}
                    style={{ height: 80, borderTopLeftRadius: 10, borderTopRightRadius: 10,}}
                />
                <View style={{flexDirection: 'row', alignItems: 'flex-end', transform: [{translateY: -40}], justifyContent: 'center', paddingHorizontal: 20}}>
                    <Image
                        source={{ uri: 'https://placebeard.it/640x360/' + props.number }}
                        style={{ height: 80, width: 80, borderRadius: 50 }}
                    />
                </View>
                <View style={{ transform: [{ translateY: -32 }], paddingHorizontal: 13, marginBottom: -20, alignItems: 'center'}}>
                    <Text style={{ fontSize: 17, fontWeight: 500 }}>Person {props.number}</Text>
                    <Text style={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: 14 }}>Co-chair, Bill & Melinda Gates Foundation</Text>
                    <Text style={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: 12, marginTop: 5 }}><Text style={{fontSize: 15, fontWeight: 500 }}>⚭</Text> 500 mutual connections</Text>
                </View>
                <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? '#e2f1ff' : 'transparent', borderRadius: 20, borderColor: connectionState ? '#0a66c2' : 'rgba(0, 0, 0, .5)', borderWidth: 1, alignItems: 'center', marginHorizontal: 10 }]} onPress={() => setCOnnectionState(!connectionState)}>
                    <Text style={{ paddingHorizontal: 15, paddingVertical: 5, color: connectionState ? '#0a66c2' : 'rgba(0, 0, 0, .5)', fontWeight: 500 }}>{connectionState ? 'Connect' : 'Pending'}</Text>
                </Pressable>
            </View>
        </TouchableNativeFeedback>
    )
}