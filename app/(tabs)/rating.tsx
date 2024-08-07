import {View, Text, StyleSheet, Pressable} from "react-native";
import React, {useEffect, useState} from "react";
import Colors from '@/constants/Colors';
import {router, Stack} from "expo-router";
import UserHistory from "@/components/user/UserHistory";
import HeaderFriend from "@/components/navigation/HeaderFriend";
import api from "@/interceptor/api";

const Friend = () => {
    const [category, setCategory] = useState(null);

    useEffect(() => {
        if (category === null) {
            getCategories();
        }
    }, [category]);

    const getCategories = async () => {
        try {
            const response = await api.get('/rating');

            setCategory(response.data.category)
        } catch (error) {
            console.error('Axios error:', error);
        }
    };

    const handlePressAsync = async () => {
        router.replace('collection/store');
    };

    return (
        <>
            <Stack.Screen options={{
                header: () => <HeaderFriend/>
            }}/>
            <View style={styles.container}>
                {category ? category.map(item => <View style={styles.category} key={item.id}>
                    <Text style={styles.title}>
                        {item.title}
                    </Text>
                    <Pressable onPress={handlePressAsync} style={styles.btn}>
                        <Text  style={styles.btn_title}>
                            Show rating
                        </Text>
                    </Pressable>
                </View>) : ''}
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
    category: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Colors.slate_gray,
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        shadowColor: Colors.licorice,
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowOffset: {
            width: 1,
            height: 4,
        },
    },
    title: {
        fontSize: 20,
    },
    btn: {
        justifyContent: "center",
        backgroundColor: Colors.licorice,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 10,
        height: 40
    },
    btn_title: {
        fontSize: 20,
        color: Colors.ash_gray,
        textAlign: "center"
    },
})