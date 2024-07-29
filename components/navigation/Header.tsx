import {StyleSheet, Text, SafeAreaView, View, Image, ScrollView} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const Header = () => {
    return (
        <SafeAreaView style={styles.bg}>
            <ScrollView style={styles.header} horizontal={true} showsHorizontalScrollIndicator={false}>
                {data.map(item => <Text style={styles.badge} key={item.id}>{item.label}</Text>)}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Header

const styles = StyleSheet.create({
    bg: {
        backgroundColor: Colors.platinum,
    },
    header: {
        flexDirection: "row",
        padding: 10,
        overflow: "hidden",
    },
    badge: {
        backgroundColor: Colors.raisinBlack,
        color: Colors.indianRed,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderWidth: 1,
        marginRight: 10,
        borderRadius: 15,
        overflow: "hidden"
    },
})

const data = [
    {
        id: 1,
        label: 'Book'
    },
    {
        id: 2,
        label: 'Mountain'
    },
    {
        id: 3,
        label: 'Music'
    },
    {
        id: 4,
        label: 'Country'
    },
    {
        id: 5,
        label: 'Coin'
    },
    {
        id: 6,
        label: 'Waterfall'
    },
    {
        id: 7,
        label: 'Work'
    },
    {
        id: 8,
        label: 'Job'
    },
]