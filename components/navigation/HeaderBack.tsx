
import {StyleSheet, SafeAreaView, View, Button, Text, Pressable} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import {router, useNavigation} from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const HeaderBack = () => {
    const navigation = useNavigation();

    return (
        <>
            <SafeAreaView style={styles.bg}></SafeAreaView>
            <Pressable  onPress={() => router.replace('collection')}>
                <Text style={styles.text}>
                   <Ionicons name="arrow-back-outline" size={22} color={Colors.licorice}/>
                </Text>
            </Pressable>
        </>
    )
}

export default HeaderBack

const styles = StyleSheet.create({
    bg: {
        backgroundColor: Colors.slate_gray,
        color: Colors.white,
        flex: 1,
    },
    text: {
        padding: 10,
        backgroundColor: Colors.slate_gray,
        fontSize: 25,
        fontWeight: '500',
        color: Colors.licorice,
    },
    header: {
        flexDirection: "row",
        padding: 10,
        overflow: "hidden",
    },
    badge: {
        backgroundColor: Colors.slate_gray,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderWidth: 1,
        marginRight: 10,
        borderRadius: 15,
        overflow: "hidden"
    },
})