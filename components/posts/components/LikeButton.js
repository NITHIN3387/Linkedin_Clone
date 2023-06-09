import { Image, Text, TouchableNativeFeedback, View } from "react-native";
import styles from '../../../styles/Post.css'
import { useState } from "react";

export default function LikeButton() {
    const [likeState, setLikeState] = useState(false)

    return (
        <View style={styles.buttons}>
            <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()} onPress={() => setLikeState(!likeState)}>
                <View style={styles.button}>
                    <Image
                        source={{ uri: likeState ? 'https://cdn-icons-png.flaticon.com/512/9790/9790408.png' : 'https://cdn-icons-png.flaticon.com/512/3114/3114886.png' }}
                        style={[styles.buttonImage, {tintColor: likeState ? undefined : '#707171'}]}
                    />
                    <Text style={styles.buttonText}>Like</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={styles.button}>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2207/2207562.png' }}
                        style={styles.buttonImage}
                    />
                    <Text style={styles.buttonText}>Comment</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={styles.button}>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/89/89937.png' }}
                        style={styles.buttonImage}
                    />
                    <Text style={styles.buttonText}>Repost</Text>
                </View>
            </TouchableNativeFeedback >
            <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={styles.button}>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2907/2907795.png' }}
                        style={styles.buttonImage}
                    />
                    <Text style={styles.buttonText}>Send</Text>
                </View>
            </TouchableNativeFeedback >
        </View>
    )
}