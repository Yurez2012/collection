import {View, Image, StyleSheet, ScrollView, Text, Pressable} from "react-native";
import React, {useEffect, useState} from "react";
import Colors from '@/constants/Colors';
import {router, Stack} from "expo-router";
import HeaderFriend from "@/components/navigation/HeaderFriend";
import Ionicons from "@expo/vector-icons/Ionicons";
import api from "@/interceptor/api";
import UserHistory from "@/components/user/UserHistory";

const Collection = () => {
    const [collections, setCollections] = useState(null);

    useEffect(() => {
        if (collections === null) {
            getCollections();
        }
    }, [collections]);

    const getCollections = async () => {
        try {
            const response = await api.get('/collection');

            setCollections(response.data.collections)
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
                <View style={styles.header}>
                    <View style={styles.headline_right}>
                        <Ionicons name="library-outline" size={18} color={Colors.ash_gray}/>
                        <Text style={styles.header_button_title}>
                            Collection
                        </Text>
                    </View>
                    <Pressable style={styles.btn} onPress={handlePressAsync}>
                        <Text style={styles.btn_title}>
                            Add Collection
                        </Text>
                    </Pressable>
                </View>

                {collections ? collections.map(item => <ScrollView key={item.title}>
                    <View style={styles.headline}>
                        <View style={styles.headline_left}>
                            <Ionicons name="book-outline" size={18} color={Colors.ash_gray}/>
                            <Text style={styles.headline_left_title}>{item.title}</Text>
                        </View>
                        <View style={styles.headline_right}>
                            <Ionicons style={styles.headline_right_title} name="arrow-back-outline" size={22}
                                      color="silver"/>
                            <Ionicons name="arrow-forward-outline" size={22} color="silver"/>
                        </View>
                    </View>
                    <View>
                        <ScrollView horizontal={true} style={styles.scrollCustom}
                                    showsHorizontalScrollIndicator={false}>
                            {item?.collections.map(item => <View style={styles.cart_collection} key={item.model.id}>
                                    <Image
                                        style={styles.img}
                                        source={{
                                            uri: item.model?.url,
                                        }}
                                    />
                                    <View style={styles.cart_content}>
                                        <Text style={styles.cart_content_title}>
                                            {item.model.title}
                                        </Text>
                                        <Text style={styles.cart_content_description}>
                                            {item.model.description.length < 35
                                                ? `${item.model.description}`
                                                : `${item.model.description.substring(0, 35)}...`}
                                        </Text>
                                    </View>
                                </View>
                            )}
                        </ScrollView>
                    </View>
                </ScrollView>) : null}
            </View>
        </>
    )
}

export default Collection

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.slate_gray,
    },
    header: {
        backgroundColor: Colors.slate_gray,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        borderBottomColor: Colors.ash_gray,
        borderBottomWidth: 1
    },
    btn: {
        justifyContent: "center",
        backgroundColor: Colors.licorice,
        paddingVertical: 3,
        paddingHorizontal: 12,
        borderRadius: 10,
        height: 35
    },
    btn_title: {
        marginLeft: 5,
        fontSize: 16,
        color: Colors.ash_gray,
        textAlign: "center"
    },
    header_button_title: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 5,
        color: Colors.ash_gray
    },
    header_button_text: {
        color: Colors.slate_gray
    },
    headline: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Colors.slate_gray,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10
    },
    headline_left: {
        flexDirection: "row",
        alignItems: "flex-end",
    },
    headline_left_title: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 5,
        color: Colors.ash_gray
    },
    headline_right: {
        flexDirection: "row",
        alignItems: "center",
    },
    headline_right_title: {
        marginRight: 15,
    },
    scrollCustom: {
        flexDirection: "row",
        padding: 10,
        backgroundColor: Colors.slate_gray,
    },
    cart_collection: {
        marginRight: 0,
        shadowColor: Colors.licorice,
        shadowOpacity: 1,
        shadowRadius: 8,
        shadowOffset: {
            width: 15,
            height: 15,
        },
    },
    cart_content: {
        padding: 10
    },
    cart_content_title: {
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 4,
        color: Colors.ash_gray,
    },
    cart_content_description: {
        fontSize: 10,
        color: Colors.french_gray,
    },
    img: {
        borderRadius: 25,
        height: 300,
        width: 200,
        resizeMode: 'stretch',
    }
})