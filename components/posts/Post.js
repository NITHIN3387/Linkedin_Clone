import { useState } from "react";
import { Animated, Image, RefreshControl, ScrollView, Text, View } from "react-native";
import styles from '../../styles/Post.css'
import PostHeader from "./components/PostHeader";
import LikesAndCommentsCounts from "./components/LikesAndCommentsCount";
import LikeButton from "./components/LikeButton";
import Header from "../Header";

export default function Post(props) {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }

    let scrollY = new Animated.Value(0)
    let HeaderDiffClamp = Animated.diffClamp(scrollY, 0, 60)
    let HeaderTranslateY = HeaderDiffClamp.interpolate({
        inputRange: [0, 60],
        outputRange: [0, -60]
    })

    const personDetail = [
        {
            'name': 'person 1',
            'msg': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus neque laborum accusantium ipsam.'
        },
        {
            'name': 'person 2',
            'msg': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, consequuntur'
        },
        {
            'name': 'person 3',
            'msg': 'Lorem, ipsum dolor.'
        },
        {
            'name': 'person 4',
            'msg': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum blanditiis vero veniam quod, nam quibusdam.'
        },
        {
            'name': 'person 5',
            'msg': 'Lorem ipsum dolor sit amet.'
        },
    ]

    return (
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
                    props.scroll(e.nativeEvent.contentOffset.y)
                }}
            >
                <View style={{height: 65}} />
                {
                    personDetail.map((detail, index) => (
                            <View style={styles.post} key={index}>
                                <PostHeader {...detail} number={index}/>
                                <Text style={styles.discription}>{detail.msg}{/* 108 */}</Text>
                                <Image
                                    source={{ uri: 'https://picsum.photos/200/300?random=' + index }}
                                    style={styles.postImage}
                                />
                                <LikesAndCommentsCounts />
                                <LikeButton />
                            </View>
                        )
                    )
                }
            </ScrollView>
        </View>
    )
}