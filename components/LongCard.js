import { useState } from "react";
import { Image, Pressable, Text, TouchableNativeFeedback, View } from "react-native";

export default function LongCard(props) {
    const [followState, setFollowState] = useState(true)

    return (
        <TouchableNativeFeedback>
            <View style={{borderRadius: 10, backgroundColor: 'white', elevation: 3}}>
                <Image
                    source={{ uri: 'http://placeimg.com/640/360/' + props.number }}
                    style={{ height: 90 , borderTopLeftRadius: 10, borderTopRightRadius: 10}}
                />
                <View style={{flexDirection: 'row', alignItems: 'flex-end', transform: [{translateY: -45}], justifyContent: 'space-between', paddingHorizontal: 20}}>
                    <Image
                        source={{ uri: 'https://placebeard.it/640x360/' + props.number }}
                        style={{ height: 90, width: 90, borderRadius: 50 }}
                    />
                    <Pressable style={({pressed}) => [{backgroundColor: pressed ? '#e2f1ff' : 'transparent', borderRadius: 20, borderColor: followState ? '#0a66c2' : 'rgba(0, 0, 0, .5)', borderWidth: 1}]} onPress={() => setFollowState(!followState)}>
                        <Text style={{paddingHorizontal: 20, paddingVertical: 5, color: followState ? '#0a66c2' : 'rgba(0, 0, 0, .5)', fontWeight: 500, fontSize: 16}}>{followState ? 'Follow' : 'Following'}</Text>
                    </Pressable>
                </View>
                <View style={{transform: [{translateY: -32}], paddingHorizontal: 13, marginBottom: -20}}>
                    <Text style={{fontSize: 18, fontWeight: 500}}>Person {props.number}</Text>
                    <Text style={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 15}}>Co-chair, Bill & Melinda Gates Foundation</Text>
                    <Text style={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 12}}>Talks about #books, #healthcare, #innovation, #climatechange, and #sustainability</Text>
                    <View style={{flexDirection: 'row', marginTop: 7}}>
                        <Image
                            source={{ uri: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000' }}
                            style={{ width: 20, height: 20, borderRadius: 50, transform: [{ translateX: 0 }] }}
                        />
                        <Image
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Ioq4vwF7VrcROmZm3BdTD4hZ9xGSbGmoug' }}
                            style={{ width: 20, height: 20, borderRadius: 50, transform: [{ translateX: -5}]}}
                        />
                        <Text style={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 12}}>Followed by Person 1 and 1 other you know</Text>
                    </View>
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}