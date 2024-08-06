import {StyleSheet, Text, SafeAreaView, View, Image, ScrollView} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const HeaderFriend = () => {
    return (
        <SafeAreaView style={styles.bg}>

        </SafeAreaView>
    )
}

export default HeaderFriend

const styles = StyleSheet.create({
    bg: {
        backgroundColor: Colors.slate_gray,
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