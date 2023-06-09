import { Animated, Image, Pressable, RefreshControl, ScrollView, Text, TouchableNativeFeedback, View } from "react-native";
import Header from "../components/Header";
import { useState } from "react";
import JobCard from "../components/JobCard";

export default function Jobs(props) {
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
                <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
                    <TouchableNativeFeedback>
                        <View style={{flexDirection: 'row', paddingVertical: 15, gap: 10, flexGrow: 1, justifyContent: 'center'}}>
                            <Image 
                                source={{uri: 'https://cdn-icons-png.flaticon.com/512/5662/5662990.png'}}
                                style={{width: 22, height: 22}}
                            />
                            <Text style={{fontSize: 17, fontWeight: 500}}>My jobs</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback>
                        <View style={{flexDirection: 'row', paddingVertical: 15, gap: 10, flexGrow: 1, justifyContent: 'center'}}>
                            <Image 
                                source={{uri: 'https://cdn-icons-png.flaticon.com/512/860/860814.png'}}
                                style={{width: 22, height: 22}}
                            />
                            <Text style={{fontSize: 17, fontWeight: 500}}>Post a job</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>

                {/*  */}
                <View style={{backgroundColor: 'white', paddingTop: 20}}>
                    <Text style={{fontSize: 23, fontWeight: 500, paddingHorizontal: 10}}>Recommended for you</Text>
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <Pressable style={({pressed}) => [{backgroundColor: pressed ? '#e2f1ff' : 'transparent', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderTopWidth: 1, borderColor: 'rgba(0, 0, 0, .2)', gap: 7}]}>
                        <Text style={{fontSize: 17, marginVertical: 13, color: '#0a66c2'}}>Show all</Text>
                        <Image
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3641/3641043.png' }}
                            style={{ width: 30, height: 30, tintColor: '#0a66c2'}}
                        />
                    </Pressable>
                </View>
                {/*  */}

                <View style={{backgroundColor: 'white', paddingTop: 20}}>
                    <Text style={{fontSize: 23, fontWeight: 500, paddingHorizontal: 10}}>Hiring in your network</Text>
                    <Text style={{color: '#919090', paddingHorizontal: 10}}>Explore relevant jobs in your network</Text>
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <Pressable style={({pressed}) => [{backgroundColor: pressed ? '#e2f1ff' : 'transparent', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderTopWidth: 1, borderColor: 'rgba(0, 0, 0, .2)', gap: 7}]}>
                        <Text style={{fontSize: 17, marginVertical: 13, color: '#0a66c2'}}>Show all</Text>
                        <Image
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3641/3641043.png' }}
                            style={{ width: 30, height: 30, tintColor: '#0a66c2'}}
                        />
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    )
}