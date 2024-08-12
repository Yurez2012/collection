import {View, Text, Image, StyleSheet, Button, Pressable} from "react-native";
import React, {useEffect, useState} from "react";
import api from "@/interceptor/api";
import {router, Stack} from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Colors from "@/constants/Colors";
import HeaderBack from "@/components/navigation/HeaderBack";
import HeaderFriend from "@/components/navigation/HeaderFriend";

const Profile = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/profile');

                setProfile(response.data.data);
            } catch (error) {
                console.error('Помилка при отриманні даних', error);
            }
        };

        fetchData();
    }, []);

    const logout = async () => {
        try {
            await AsyncStorage.removeItem('userToken');
            await AsyncStorage.removeItem('fbToken');

            router.replace('/sign-in');
        } catch (error) {

        }
    };

    return (
        <>
            <Stack.Screen options={{
                header: () => <HeaderFriend/>
            }}/>
            <View style={styles.container}>
                <Image style={styles.img} source={{uri: profile?.picture}}></Image>
                <Text style={styles.name}>{profile?.name}</Text>
                <Text style={styles.email}>{profile?.email}</Text>
                <Pressable
                    style={styles.btn}
                    onPress={logout}>
                    <Text style={styles.btn_title}>
                        Logout
                    </Text>
                </Pressable>
            </View>
        </>
    );
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: Colors.slate_gray,
        flexDirection: "column",
        paddingTop: 150,
        padding: 40
    },
    img: {
        borderRadius: 35,
        width: 70,
        height: 70,
        marginBottom: 10,
    },
    name: {
        fontSize: 18,
        marginBottom: 4,
    },
    email: {
        fontSize: 16,
    },
    logout: {
        flexDirection: "row",
        padding: 10,
        gap: 3,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#0866ff',
        width: 150,
        marginTop: 30
    },
    text: {
        color: '#FFFFFF'
    },
    btn: {
        marginTop: 20,
        justifyContent: "center",
        backgroundColor: Colors.licorice,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 10,
        height: 40,
        width: 150
    },
    btn_title: {
        marginLeft: 5,
        fontSize: 20,
        color: Colors.ash_gray,
        textAlign: "center"
    },
});
