import {View, StyleSheet} from "react-native";
import React, {useEffect, useState} from "react";
import Colors from '@/constants/Colors';
import {Stack} from "expo-router";
import UserHistory from "@/components/user/UserHistory";
import HeaderFriend from "@/components/navigation/HeaderFriend";
import api from "@/interceptor/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Friend = () => {
    const [friends, setFriends] = useState(null);

    useEffect(() => {
        if (friends === null) {
            getCollections();
        }
    }, [friends]);

    const getCollections = async () => {
        try {
            const fbToken = await AsyncStorage.getItem('fbToken');
            const response = await api.get('/friend?fb_token=' + fbToken);

            setFriends(response.data.friends)
        } catch (error) {
            console.error('Axios error:', error);
        }
    };


    return (
        <>
            <Stack.Screen options={{
                header: () => <HeaderFriend/>
            }}/>
            <View style={styles.container}>
                {friends ? friends.map(item => <UserHistory
                    key={item.id}
                    img={item.user.url}
                    username={item.user.name}
                    description={item.description}
                    created_at={item.created_at}
                />) : ''}

            </View>
        </>
    )
}

export default Friend

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.slate_gray,
        padding: 10
    },
    tags: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 10
    }
})