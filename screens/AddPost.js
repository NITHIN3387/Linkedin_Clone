import { Animated, Text, View } from "react-native";
import Header from "../components/Header";

export default function AddPost(props) {
    let scrollY = new Animated.Value(0)
    let HeaderDiffClamp = Animated.diffClamp(scrollY, 0, 60)
    let HeaderTranslateY = HeaderDiffClamp.interpolate({
        inputRange: [0, 60],
        outputRange: [0, -60]
    })

    return(
        <View>
            <Animated.View style={{transform:[{translateY: HeaderTranslateY}], zIndex: 1}}>
            <View style={{height: 65}} />
                <Header {...props}/>
            </Animated.View>
            <Text>AddPost Page !!!</Text>
        </View>
    )
}