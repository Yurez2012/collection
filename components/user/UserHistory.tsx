import {StyleSheet, Text, SafeAreaView, View, Image, ScrollView} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const UserHistory = (props) => {
    return (
        <View style={styles.user_history}>
            <Image
                width={48}
                height={48}
                source={{
                    uri: props.img,
                }}
            />
            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>
                        {props.username}
                    </Text>
                    <Text style={styles.description}>
                        {props.description}
                    </Text>
                </View>
                <View style={styles.date_block}>
                    <Text style={styles.date}>
                        {props.created_at}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default UserHistory

const styles = StyleSheet.create({
    user_history: {
        flexDirection: "row",
        backgroundColor: Colors.indianRed,
        padding: 10,
        borderRadius: 5,
        marginBottom: 10
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 10,
    },
    title: {
        marginBottom: 3,
        color: Colors.gunmetal
    },
    description: {
        color: Colors.onyx
    },
    date_block: {
       flex: 1
    },
    date: {
        fontSize: 10,
        textAlign: 'right',
        color: Colors.onyx
    }
})

