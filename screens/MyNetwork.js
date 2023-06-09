import { Animated, Image, Pressable, RefreshControl, ScrollView, Text, TouchableNativeFeedback, View } from "react-native";
import Header from "../components/Header";
import { useState } from "react";
import LongCard from "../components/LongCard";
import SmallCard from "../components/SmallCard";

export default function MyNetwork(props) {
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
                contentContainerStyle={{gap: 10}}
            >
                <View style={{height: 53}} />
                <TouchableNativeFeedback>
                    <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, backgroundColor: 'white'}}>
                        <Text style={{fontSize: 18, fontWeight: 500, marginVertical: 13, color: '#0a66c2', flexGrow: 1}}>Manage my network</Text>
                        <Image 
                            source={{uri: 'https://cdn-icons-png.flaticon.com/512/3641/3641043.png'}}
                            style={{width: 30, height: 30, tintColor: 'rgba(0, 0, 0, .6)'}}
                        />
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback>
                    <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, backgroundColor: 'white'}}>
                        <Text style={{fontSize: 18, fontWeight: 500, marginVertical: 13, color: '#0a66c2', flexGrow: 1}}>Invitations (0)</Text>
                        <Image 
                            source={{uri: 'https://cdn-icons-png.flaticon.com/512/3641/3641043.png'}}
                            style={{width: 30, height: 30, tintColor: 'rgba(0, 0, 0, .6)'}}
                        />
                    </View>
                </TouchableNativeFeedback>

                <View style={{paddingHorizontal: 13, backgroundColor: 'white', paddingTop: 15, gap: 13}}>
                    <Text style={{fontSize: 17}}>Popular people to follow across Linkedin</Text>
                    <LongCard number={1}/>
                    <LongCard number={2}/>
                    <TouchableNativeFeedback style={({pressed}) => [{backgroundColor: pressed ? '#e2f1ff' : 'transparent'}]}>
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 7, paddingBottom: 10}}>
                            <Text style={{fontSize: 17, color: '#0a66c2'}}>Show all</Text>
                            <Image
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3641/3641043.png' }}
                                style={{ width: 30, height: 30, tintColor: '#0a66c2'}}
                            />
                        </View>
                    </TouchableNativeFeedback>
                </View>

                <View style={{paddingHorizontal: 13, backgroundColor: 'white', paddingTop: 15, gap: 13}}>
                    <Text style={{fontSize: 17}}>More suggestions for you</Text>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 10}}>
                        <SmallCard number={1}/>
                        <SmallCard number={2}/>
                        <SmallCard number={3}/>
                        <SmallCard number={4}/>
                        <SmallCard number={5}/>
                        <SmallCard number={6}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}