import {View, Image, StyleSheet, ScrollView, Text} from "react-native";
import React from "react";
import Colors from '@/constants/Colors';
import {Stack} from "expo-router";
import HeaderFriend from "@/components/navigation/HeaderFriend";
import Ionicons from '@expo/vector-icons/Ionicons';

const Page = () => {
    return (
        <>
            <Stack.Screen options={{
                header: () => <HeaderFriend/>
            }}/>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.cart}>
                        <Image
                            style={styles.img}
                            source={{
                                uri: 'https://static.yakaboo.ua/media/catalog/product/i/m/img014_5_98.jpg',
                            }}
                        />
                        <View>
                            <Text style={styles.collection_title}>
                                Стівен Кінг - Воно
                            </Text>
                        </View>
                        <View style={styles.cart_content}>
                            <Image
                                width={36}
                                height={36}
                                source={{
                                    uri: 'https://www.shareicon.net/data/48x48/2016/08/05/806962_user_512x512.png',
                                }}
                            />
                            <View style={styles.cart_content_title}>
                                <View style={styles.cart_content_description}>
                                    <Text style={styles.cart_content_user}>
                                        Yura Ludchak
                                    </Text>
                                    <Text style={styles.cart_content_creator}>
                                        In progress
                                    </Text>
                                </View>
                                <Text>
                                    <Ionicons name="heart-outline" size={28} color="silver"  />
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.cart}>
                        <Image
                            style={styles.img}
                            source={{
                                uri: 'https://static.yakaboo.ua/media/catalog/product/i/m/img014_5_98.jpg',
                            }}
                        />
                        <View>
                            <Text style={styles.collection_title}>
                                Стівен Кінг - Воно
                            </Text>
                        </View>
                        <View style={styles.cart_content}>
                            <Image
                                width={36}
                                height={36}
                                source={{
                                    uri: 'https://www.shareicon.net/data/48x48/2016/08/05/806962_user_512x512.png',
                                }}
                            />
                            <View style={styles.cart_content_title}>
                                <View style={styles.cart_content_description}>
                                    <Text style={styles.cart_content_user}>
                                        Yura Ludchak
                                    </Text>
                                    <Text style={styles.cart_content_creator}>
                                        In progress
                                    </Text>
                                </View>
                                <Text>
                                    <Ionicons name="heart-outline" size={28} color="silver"  />
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default Page

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: Colors.platinum,
    },
    cart: {
        backgroundColor: Colors.white,
        borderRadius: 25,
        padding: 10,
    },
    cart_content: {
        flexDirection: "row",
    },
    cart_content_title: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    cart_content_description: {
        paddingLeft: 5
    },
    cart_content_user: {
        fontSize: 12,
        fontWeight: "bold"
    },
    cart_content_creator: {
        fontSize: 10,
    },
    collection_title: {
        fontSize: 18,
        marginTop: 5,
        marginBottom: 5
    },
    img: {
        borderRadius: 25,
        height: 500,
        resizeMode: 'stretch',
    }
})