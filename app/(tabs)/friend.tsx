import {View, Image, StyleSheet} from "react-native";
import React from "react";
import Colors from '@/constants/Colors';
import {Stack} from "expo-router";
import UserHistory from "@/components/user/UserHistory";
import HeaderFriend from "@/components/navigation/HeaderFriend";

const Friend = () => {
    return (
        <>
            <Stack.Screen options={{
                header: () => <HeaderFriend/>
            }}/>
            <View style={styles.container}>
                {data.map(item => <UserHistory
                    key={item.id}
                    img={item.img}
                    username={item.username}
                    description={item.description}
                    created_at={item.created_at}
                />)}

            </View>
        </>
    )
}

export default Friend

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.richBlack,
        padding: 10
    },
    tags: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 10
    }
})

const data = [
    {
        id: 1,
        img: 'https://www.shareicon.net/data/48x48/2016/08/05/806962_user_512x512.png',
        username: 'Yura Ludchak',
        description: '',
        created_at: '21.07.2024',
    },
    {
        id: 2,
        img: 'https://www.shareicon.net/data/48x48/2016/08/05/806962_user_512x512.png',
        username: 'Yura Ludchak',
        description: '',
        created_at: '21.07.2024',
    },
    {
        id: 3,
        img: 'https://www.shareicon.net/data/48x48/2016/08/05/806962_user_512x512.png',
        username: 'Yura Ludchak',
        description: '',
        created_at: '21.07.2024',
    }
]