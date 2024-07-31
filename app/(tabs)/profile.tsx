
import {View, Text, Image, StyleSheet, Button, Pressable} from "react-native";
import React, {useEffect, useState} from "react";
import api from "@/interceptor/api";
import {router} from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

            router.replace('/sign-in');
        } catch (error) {

        }
    };

    return (
       <View style={styles.container}>
           <Image style={styles.img} source={{uri: profile?.picture}}></Image>
           <Text style={styles.name} >{profile?.name}</Text>
           <Text style={styles.email} >{profile?.email}</Text>
           <Pressable
               style={styles.logout}
               onPress={logout}>
               <Text style={styles.text}>
                   Logout
               </Text>
           </Pressable>
       </View>
    );
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
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
    }
});
