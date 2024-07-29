import {StyleSheet, Text, View, ScrollView, Image} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const CategoryItem = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.link}>
                <Text style={styles.category}>
                    {props.category}
                </Text>
                <Text>
                    See all
                </Text>
            </View>
            <ScrollView style={styles.list} showsHorizontalScrollIndicator={false} horizontal={true}>
                {props.items.map(item => <View style={styles.cart}>
                    <Image
                        style={styles.img}
                        key={item.id}
                        source={{
                            uri: item.img,
                        }}
                    />
                    <Text style={styles.title}>
                        Title
                    </Text>
                </View>)}
            </ScrollView>
        </View>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 15,
        backgroundColor: Colors.platinum,
        padding: 10,
    },
    link: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    category: {
        marginBottom: 10,
        color: Colors.licorice,
        textTransform: "uppercase",
        fontWeight: 'bold'
    },
    title: {
        color: Colors.slate_gray,
        textTransform: "uppercase",
        marginTop: 8,
        fontSize: 9
    },
    cart: {
        marginRight: 10,
    },
    img: {
        width: 130,
        height: 150,
        resizeMode: 'stretch',
    }
})
