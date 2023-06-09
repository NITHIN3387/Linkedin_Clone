import {  Image, Pressable, Text, TouchableNativeFeedback, View } from "react-native";

function Viewed() {
    return (
        <View style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 10 }}>
            <Text style={{ fontSize: 15, color: 'rgba(0, 0, 0, .85)' }}><Text style={{ fontWeight: 500, color: 'black' }}>Person 1</Text> viewed your profile</Text>
            <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? '#e2f1ff' : 'transparent', borderRadius: 20, borderColor: '#0a66c2', borderWidth: 1 }]}>
                <Text style={{ paddingHorizontal: 15, paddingVertical: 5, color: '#0a66c2', fontWeight: 500, fontSize: 16 }}>See all views</Text>
            </Pressable>
        </View>
    )
}

function ExpandNetwork() {
    return (
        <View style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 10 }}>
            <Text style={{ fontSize: 15, color: 'rgba(0, 0, 0, .85)' }}>
                <Text style={{ fontWeight: 500, color: 'black' }}>Person 2</Text> has 8 new connectios. View all Person 1's connections
            </Text>
            <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? '#e2f1ff' : 'transparent', borderRadius: 20, borderColor: '#0a66c2', borderWidth: 1 }]}>
                <Text style={{ paddingHorizontal: 15, paddingVertical: 5, color: '#0a66c2', fontWeight: 500, fontSize: 16 }}>Expand your network</Text>
            </Pressable>
        </View>
    )
}

function YouMayKnow() {
    return (
        <View style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 5 }}>
            <Text style={{ fontSize: 15, color: 'rgba(0, 0, 0, .85)' }}>
                You may know
                <Text style={{ fontWeight: 500, color: 'black' }}> Person 3. </Text>
                Add to your network
            </Text>
            <Text style={{ fontSize: 15, color: 'rgba(0, 0, 0, .5)' }}>Student at Engineering college</Text>
            <Text style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 14 }}><Text style={{fontSize: 17, fontWeight: 500 }}>⚭</Text> 500 mutual connections</Text>
        </View>
    )
}

function SimilarIntrest() {
    return (
        <View style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 5 }}>
            <Text style={{ fontSize: 15, color: 'rgba(0, 0, 0, .85)' }}>
                People with similar intrest are following
                <Text style={{ fontWeight: 500, color: 'black' }}> Person 4. </Text>
                Follow to see posts
            </Text>
            <Text style={{ fontSize: 15, color: 'rgba(0, 0, 0, .5)' }}>Follow me for the ideas on 'XYZ Top...</Text>
        </View>
    )
}

export default function NotificationBox(props) {
    return (
        <TouchableNativeFeedback>
            <View style={{ flexDirection: 'row', padding: 15, gap: 15, backgroundColor: 'white', justifyContent: 'flex-start' }}>
                <Image
                    source={{ uri: 'https://placebeard.it/640x360/' + Math.floor(Math.random() * 1000 + 1) }}
                    style={{ width: 50, height: 50, borderRadius: 50 }}
                />
                <View style={{ flexShrink: 1, flexGrow: 1, flexWrap: 'wrap' }}>
                    {
                        props.type == 'viewed' ? <Viewed /> :
                        props.type == 'expand network' ? <ExpandNetwork /> : 
                        props.type == 'you may know' ? <YouMayKnow /> : 
                        props.type == 'similar intrest' ? <SimilarIntrest /> : null
                    }
                </View>
                <View>
                    <Text>{Math.floor(Math.random() * 30 + 1)}d</Text>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2311/2311524.png' }}
                        style={{ width: 20, height: 20, tintColor: 'rgba(0, 0, 0, .7)', marginTop: 10 }}
                    />
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}