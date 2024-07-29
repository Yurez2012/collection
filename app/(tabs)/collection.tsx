import {View, Image, StyleSheet, ScrollView, Text} from "react-native";
import React from "react";
import Colors from '@/constants/Colors';
import {Stack} from "expo-router";
import HeaderFriend from "@/components/navigation/HeaderFriend";
import Ionicons from "@expo/vector-icons/Ionicons";

const Collection = () => {
    return (
        <>
            <Stack.Screen options={{
                header: () => <HeaderFriend/>
            }}/>
            <ScrollView>
                <View style={styles.headline}>
                    <View style={styles.headline_left}>
                        <Ionicons name="book-outline" size={18} color="orange"/>
                        <Text style={styles.headline_left_title}>Books</Text>
                    </View>
                    <View style={styles.headline_right}>
                        <Ionicons style={styles.headline_right_title} name="arrow-back-outline" size={22}
                                  color="silver"/>
                        <Ionicons name="arrow-forward-outline" size={22} color="silver"/>
                    </View>
                </View>
                <View style={styles.container}>
                    <ScrollView horizontal={true} style={styles.scrollCustom} showsHorizontalScrollIndicator={false}>
                        <View style={styles.cart_collection}>
                            <Image
                                style={styles.img}
                                source={{
                                    uri: 'https://upload.wikimedia.org/wikipedia/uk/thumb/b/b2/Stephen_King_Christine_%282017%2C_UKR%2C_KSD%29.jpg/250px-Stephen_King_Christine_%282017%2C_UKR%2C_KSD%29.jpg',
                                }}
                            />
                            <View style={styles.cart_content}>
                                <Text style={styles.cart_content_title}>
                                    Title
                                </Text>
                                <Text style={styles.cart_content_description}>
                                    Description
                                </Text>
                            </View>
                        </View>

                        <View style={styles.cart_collection}>
                            <Image
                                style={styles.img}
                                source={{
                                    uri: 'https://static.yakaboo.ua/media/catalog/product/i/m/img014_5_98.jpg',
                                }}
                            />
                            <View style={styles.cart_content}>
                                <Text style={styles.cart_content_title}>
                                    Title
                                </Text>
                                <Text style={styles.cart_content_description}>
                                    Description
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.headline}>
                    <View style={styles.headline_left}>
                        <Ionicons name="film-outline" size={18} color="orange"/>
                        <Text style={styles.headline_left_title}>Films</Text>
                    </View>
                    <View style={styles.headline_right}>
                        <Ionicons style={styles.headline_right_title} name="arrow-back-outline" size={22}
                                  color="silver"/>
                        <Ionicons name="arrow-forward-outline" size={22} color="silver"/>
                    </View>
                </View>
                <View style={styles.container}>
                    <ScrollView horizontal={true} style={styles.scrollCustom} showsHorizontalScrollIndicator={false}>
                        <View style={styles.cart_collection}>
                            <Image
                                style={styles.img}
                                source={{
                                    uri: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/8ab9a119-dd74-44f0-baec-0629797483d7/220x330',
                                }}
                            />
                            <View style={styles.cart_content}>
                                <Text style={styles.cart_content_title}>
                                    Title
                                </Text>
                                <Text style={styles.cart_content_description}>
                                    Description
                                </Text>
                            </View>
                        </View>

                        <View style={styles.cart_collection}>
                            <Image
                                style={styles.img}
                                source={{
                                    uri: 'https://upload.wikimedia.org/wikipedia/ru/b/b2/Deadpool_film.jpg',
                                }}
                            />
                            <View style={styles.cart_content}>
                                <Text style={styles.cart_content_title}>
                                    Title
                                </Text>
                                <Text style={styles.cart_content_description}>
                                    Description
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </>
    )
}

export default Collection

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headline: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Colors.platinum,
        paddingLeft: 10,
        paddingRight: 10
    },
    headline_left: {
        flexDirection: "row",
        alignItems: "flex-end",
    },
    headline_left_title: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 5,
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
        backgroundColor: Colors.platinum,
    },
    cart_collection: {
        marginRight: 10
    },
    cart_content: {
        padding: 10
    },
    cart_content_title: {
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 4,
    },
    cart_content_description: {
        fontSize: 10,
    },
    img: {
        borderRadius: 25,
        height: 300,
        width: 220,
        resizeMode: 'stretch',
    }
})