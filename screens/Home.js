import { View } from "react-native";
import Post from "../components/posts/Post";

export default function Home(props) {
    function scroll(value) {
        props.setValue(value)
    }

    return(
        <View>
            <Post scroll={scroll} {...props}/>
        </View>
    )
}