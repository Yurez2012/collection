import {Pressable, StyleSheet, Text, View} from 'react-native';
import { useSession } from '../ctx';
import React, {useEffect, useState} from "react";
import * as Facebook from "expo-auth-session/providers/facebook";
import Ionicons from "@expo/vector-icons/Ionicons";
import {Redirect, router, Stack} from "expo-router";
import HeaderFriend from "@/components/navigation/HeaderFriend";

export default function SignIn() {
    const { signIn } = useSession();
    const [user, setUser] = useState(null);
    const [request, response, promptAsync] = Facebook.useAuthRequest({
        clientId: "1059573258871755"
    })

    useEffect(() => {
        if(response && response.type === 'success' && response.authentication) {
            (async() => {
                const userInfoResponse = await fetch(
                    `https://graph.facebook.com/v20.0/me?access_token=${response.authentication?.accessToken}&fields=id,name,picture`
                );
                const userInfo = await userInfoResponse.json();
                setUser(userInfo);
            })();
        }
    }, [response]);

    const handlePressAsync = async () => {
        const result = await promptAsync();
        if(result.type !== 'success') {
            alert('something')
            return;
        } else {
            console.log(123123);
        }
    };

    return (
        <>
        <Stack.Screen options={{
            header: () => <HeaderFriend/>
        }}/>
        <View style={styles.container}>
            {
                user
                    ? router.replace('collection')
                    : <Pressable
                        style={styles.fb_btn}
                        title={'Login Facebook'}
                        onPress={handlePressAsync}>
                        <Ionicons name="logo-facebook" size={22} color="white"/>
                        <Text style={styles.text}>
                            Login with Facebook
                        </Text>
                    </Pressable>
            }
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
})