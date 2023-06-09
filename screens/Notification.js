import { Animated, Text, View } from "react-native";
import Header from "../components/Header";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";
import { useState } from "react";
import NotificationBox from "../components/NotificationBox";

export default function Notification(props) {
    let scrollY = new Animated.Value(0)
    let HeaderDiffClamp = Animated.diffClamp(scrollY, 0, 60)
    let HeaderTranslateY = HeaderDiffClamp.interpolate({
        inputRange: [0, 60],
        outputRange: [0, -60]
    })

    let [refreshing, setRefreshing] = useState(false)

    const onRefresh = () => {
        setRefreshing(true)
        setTimeout(() => setRefreshing(false), 2000)
    }

    const temp = ['viewed', 'similar intrest', 'expand network', 'you may know', 'viewed', 'similar intrest', 'expand network', 'you may know']

    return(
        <View>
            <Animated.View style={{transform:[{translateY: HeaderTranslateY}], zIndex: 1}}>
                <Header {...props}/>
            </Animated.View>
            <ScrollView
                refreshControl={<RefreshControl 
                    refreshing={refreshing} 
                    onRefresh={onRefresh}
                    progressViewOffset={65}
                    />}
                onScroll={(e) => {
                    scrollY.setValue(e.nativeEvent.contentOffset.y)
                    props.setValue(e.nativeEvent.contentOffset.y)
                }}
            >
                <View style={{height: 63}} />
                {
                    temp.map((e, i) => (
                        <NotificationBox type={e} key={i}/>
                    ))
                }
            </ScrollView>
        </View>
    )
}