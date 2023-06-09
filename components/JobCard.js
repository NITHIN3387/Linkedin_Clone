import { Image, Text, TouchableNativeFeedback, View } from "react-native";

export default function JobCard() {
    return (
        <TouchableNativeFeedback>
            <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
                <Image
                    source={{ uri: 'https://media.licdn.com/dms/image/C560BAQHHBElPR3DSOA/company-logo_100_100/0/1676655485271?e=1694044800&v=beta&t=L9kvZabDI8JKmdaKmmOirTPD-lpzS2-7GIoXw3YRmRU' }}
                    style={{ width: 60, height: 60, marginVertical: 11, marginRight: 10}}
                />
                <View style={{flexGrow: 1, gap: 2, paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: 'rgba(0, 0, 0, .2)'}}>
                    <Text style={{fontSize: 20, fontWeight: 500}}>Campus Representative</Text>
                    <Text>Acmegrade</Text>
                    <Text style={{color: '#919191'}}>Bangalore Urban, Karnataka, India</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                        <Image
                            source={{ uri: 'https://scontent.fixe3-1.fna.fbcdn.net/v/t39.30808-6/300578824_442194064597631_3504348411587756095_n.png?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=J6fYkbh5FaAAX_56Wh0&_nc_ht=scontent.fixe3-1.fna&oh=00_AfCaAXo4M5F8IvG97-_IYsIUXDVPT2uuotTBSDE2Q0_2ZQ&oe=6484F49E' }}
                            style={{ width: 25, height: 25 , borderRadius: 50}}
                        />
                        <Text style={{color: '#919090'}}>Actively recruiting</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                        <Text style={{color: '#919090'}}>4 days ago </Text>
                        <Image
                            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png' }}
                            style={{ width: 17, height: 17 }}
                        />
                        <Text style={{color: '#919090'}}>Easy Apply</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', gap: 2, paddingVertical: 15, justifyContent: 'space-around', borderBottomWidth: 1, borderBottomColor: 'rgba(0, 0, 0, .2)'}}>
                    <TouchableNativeFeedback>
                        <Image
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/9513/9513802.png' }}
                            style={{ width: 27, height: 27, marginHorizontal: 7 }}
                        />
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback>
                        <Image
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6104/6104803.png' }}
                            style={{ width: 27, height: 27, marginHorizontal: 7 }}
                        />
                    </TouchableNativeFeedback>
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}