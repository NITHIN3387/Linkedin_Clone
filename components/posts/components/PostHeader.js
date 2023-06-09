import { Image, Pressable, Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";
import styles from '../../../styles/Post.css'
import { useState } from "react";

export default function PostHeader(props) {
    const [connectState, setConnectState] = useState(true)

    return (
        <View style={styles.header}>
            <Image
                source={{ uri: 'https://placebeard.it/640x360/' +  props.number}}
                style={styles.profilePic}
            />
            <View style={styles.details}>
                <Text style={styles.name}>{props.name} <Text style={styles.connectType}>• 1st</Text></Text>
                <Text style={styles.connections}>500+ Connections</Text>
                <Text style={styles.time}>1d • <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/484/484144.png' }} style={styles.globalIcon} /></Text>
            </View>
            <Pressable style={({ pressed }) => [styles.connect, { backgroundColor: pressed ? '#e2f1ff' : 'transparent', gap: 5}]} onPress={() => setConnectState(!connectState)}>
                <Image
                    source={{ uri: !connectState ? 'https://cdn-icons-png.flaticon.com/512/992/992700.png' : 'https://cdn-icons-png.flaticon.com/512/8861/8861125.png'}}
                    style={[styles.connectIcon, {width: 22, height: 22, tintColor: !connectState ? 'rgba(0, 0, 0, .5)' : '#2a76c9'}]}
                />
                <Text style={{ fontSize: 16, color: !connectState ? 'rgba(0, 0, 0, .5)' : '#2a76c9' }} >{!connectState ? 'Pending' : 'Connect'}</Text>
            </Pressable>
            <View style={{ padding: 10, borderRadius: 50 }}>
                <TouchableNativeFeedback style={{ borderRadius: 50 }} background={TouchableNativeFeedback.Ripple('rgba(0,0,0,.2)', true)}>
                    <View>
                        <Image
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2311/2311524.png' }}
                            style={styles.optionIcon}
                        />
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>

    )
}