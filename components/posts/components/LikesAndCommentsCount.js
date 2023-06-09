import { Image, Text, TouchableNativeFeedback, View } from "react-native";
import styles from '../../../styles/Post.css'

export default function LikesAndCommentsCounts() {
    return (
        <View style={styles.likesAndCommmentsCount}>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#cce4fc', false)}>
                <View style={styles.likes}>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/9790/9790408.png' }}
                        style={{ width: 20, height: 20, borderRadius: 50, transform: [{ translateX: 0 }] }}
                    />
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3670/3670159.png' }}
                        style={{ width: 20, height: 20, borderRadius: 50, transform: [{ translateX: -5 }] }}
                    />
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/10851/10851231.png' }}
                        style={{ width: 20, height: 20, borderRadius: 50, transform: [{ translateX: -10 }] }}
                    />
                    <Text style={styles.Count}>1,733</Text>
                </View>
            </TouchableNativeFeedback>
            <View style={styles.comments}>
                <Text style={styles.Count}>19 comments</Text>
                <Text style={styles.Count}> • 28 reposts</Text>
            </View>
        </View>
    )
}