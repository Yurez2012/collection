import {View, Image, StyleSheet, ScrollView, Text} from "react-native";
import React, {useEffect, useState} from "react";
import Colors from '@/constants/Colors';
import {Stack} from "expo-router";
import HeaderFriend from "@/components/navigation/HeaderFriend";
import Ionicons from '@expo/vector-icons/Ionicons';
import api from "@/interceptor/api";

const Page = () => {
    const [collections, setCollections] = useState(null);

    useEffect(() => {
        if (collections === null) {
            getCollections();
        }
    }, [collections]);

    const getCollections = async () => {
        try {
            const response = await api.get('/home');

            setCollections(response.data.collections)
        } catch (error) {
            console.error('Axios error:', error);
        }
    };

    return (
        <>
            <Stack.Screen options={{
                header: () => <HeaderFriend/>
            }}/>
            <ScrollView>
                {collections ? collections.map(item => <View style={styles.container} key={item.id}>
                    <View style={styles.cart}>
                        <Image
                            style={styles.img}
                            source={{
                                uri: item?.model?.url,
                            }}
                        />
                        <View style={styles.second}>
                            <View style={styles.cart_content}>
                                <Text style={styles.collection_title}>
                                    {item?.model?.title}
                                </Text>
                                <Text style={styles.collection_description}>
                                    {item.model.description.length < 300
                                        ? `${item.model.description}`
                                        : `${item.model.description.substring(0, 300)}...`}
                                </Text>
                            </View>
                            <View style={styles.user}>
                                <View>
                                    <Text style={styles.cart_content_user}>
                                        {item?.user?.name}
                                    </Text>
                                    <Text style={styles.cart_content_creator}>
                                        {item?.created_at}
                                    </Text>
                                </View>
                                <Image
                                    style={styles.user_img}
                                    width={36}
                                    height={36}
                                    source={{
                                        uri: item?.user?.url ? item?.user?.url : null,
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                </View>) : null}
            </ScrollView>
        </>
    )
}

export default Page

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: Colors.slate_gray,
    },
    cart: {
        flexDirection: "row",
        gap: 5,
        backgroundColor: Colors.slate_gray,
        borderRadius: 25,
        padding: 10,
        shadowColor: Colors.licorice,
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowOffset: {
            width: 1,
            height: 4,
        },
    },
    cart_content: {
        flexWrap: "wrap",
    },
    cart_content_title: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    cart_content_user: {
        fontSize: 12,
        fontWeight: "bold"
    },
    cart_content_creator: {
        fontSize: 10,
    },
    collection_title: {
        width: 140,
        fontSize: 14,
        marginBottom: 10
    },
    collection_description: {
        width: 140,
        fontSize: 11,
        marginBottom: 10
    },
    second: {
        flexDirection: "column",
        justifyContent: "space-between",
        flexWrap: "wrap",
        padding: 5
    },
    user: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    img: {
        borderRadius: 20,
        height: 300,
        width: 205,
        resizeMode: 'stretch',
        backgroundColor: Colors.licorice
    },
    user_img: {
        borderRadius: 25,
    },
})