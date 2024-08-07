import {StyleSheet, Text, SafeAreaView, View, Image, ScrollView, Pressable} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const UserHistory = (props) => {
    return (
        <View style={styles.user_history}>
            <Image
                style={styles.img}
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
                </View>
                <Pressable style={styles.btn}>
                    <Text  style={styles.btn_title}>
                        Show collection
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default UserHistory

const styles = StyleSheet.create({
    user_history: {
        flexDirection: "row",
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
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 10,
    },
    title: {
        marginBottom: 3,
        color: Colors.licorice
    },
    date_block: {
       flex: 1
    },
    img: {
        borderRadius: 25,
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

