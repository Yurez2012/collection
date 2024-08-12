import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from "react";
import * as Facebook from "expo-auth-session/providers/facebook";
import Ionicons from "@expo/vector-icons/Ionicons";
import {router, Stack} from "expo-router";
import HeaderFriend from "@/components/navigation/HeaderFriend";
import api from "@/interceptor/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "@/config/app";

export default function SignIn() {
    const [user, setUser] = useState(null);

    const [request, response, promptAsync] = Facebook.useAuthRequest({
        clientId: config.bf_client_id,
        scopes: ['public_profile', 'email', 'user_friends'],
    });

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('userToken');
            if (token) {
                router.replace('collection');
            }
        };

        checkToken();
    }, []);


    useEffect(() => {
        if (response && response.type === 'success' && response.authentication) {
            login();
        }
    }, [response]);

    const login = async () => {
        try {
            const userInfoResponse = await fetch(
                `https://graph.facebook.com/v20.0/me?access_token=${response.authentication?.accessToken}&fields=id,name,picture,email`
            );
            const userInfo = await userInfoResponse.json();
            await AsyncStorage.setItem('fbToken', response.authentication?.accessToken);

            setUser(userInfo);
        } catch (error) {
            console.error('Помилка авторизації', error);
        }
    };

    useEffect(() => {
        if (user) {
            postUserData();
        }
    }, [user]);

    const postUserData = async () => {
        try {
            const response = await api.post('/login', {
                facebook_uuid: user.id,
                name: user.name,
                email: user.email,
                url: user.picture.data.url,
            });
            await AsyncStorage.setItem('userToken', response.data.api_token);
            router.replace('collection');
        } catch (error) {
            console.error('Axios error:', error);
        }
    };

    const handlePressAsync = async () => {
        await promptAsync();
    };

    return (
        <>
            <Stack.Screen options={{
                header: () => <HeaderFriend/>
            }}/>
            <View style={styles.container}>
                <Pressable
                    style={styles.fb_btn}
                    title={'Login Facebook'}
                    onPress={handlePressAsync}>
                    <Ionicons name="logo-facebook" size={22} color="white"/>
                    <Text style={styles.text}>
                        Login with Facebook
                    </Text>
                </Pressable>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    fb_btn: {
        flexDirection: "row",
        padding: 10,
        gap: 3,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#0866ff',
        height: 50,
    },
    text: {
        color: '#FFFFFF',
        fontSize: 22
    }
});
