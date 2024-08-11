import {View, Text, StyleSheet, ScrollView, TextInput} from "react-native";
import React, {useEffect, useRef, useState} from "react";
import {Stack, useLocalSearchParams} from 'expo-router';
import api from "@/interceptor/api";
import HeaderBack from "@/components/navigation/HeaderBack";
import Colors from "@/constants/Colors";

export default function Index() {
    const {id} = useLocalSearchParams();
    const [collections, setCollections] = useState(null);
    const textInputRefs = useRef([]);

    useEffect(() => {
        if (collections === null) {
            getCollections();
        }
    }, [collections]);

    const getCollections = async () => {
        try {
            const response = await api.get('/rating/' + id);

            setCollections(response.data.collections)
        } catch (error) {
            console.error('Axios error:', error);
        }
    };

    const saveValue = async (id, value) => {
        if(value <= 10 || value > 0) {
            try {
                const response = await api.put('/rating/' + id, {
                    rating: value
                });

                setCollections(response.data.collections)
            } catch (error) {
                console.error('Axios error:', error);
            }

        }

        textInputRefs.current[id].setNativeProps({ text: 0 });
    };

    return (
        <>
            <Stack.Screen options={{
                header: () => <HeaderBack/>
            }}/>
            <ScrollView style={styles.container}>
                {
                    collections ? collections.map(item => <View style={styles.cart} key={item.id}>
                        <Text style={styles.title}>
                            {item?.model?.title}
                        </Text>
                        <TextInput
                            key={item.id}
                            ref={(el) => (textInputRefs.current[item.id] = el)}
                            keyboardType='numeric'
                            placeholder={`${item.rating}`}
                            placeholderTextColor={Colors.licorice}
                            onChangeText={(value) => saveValue(item.id, value)}
                            style={styles.input} />
                    </View>) : null
                }
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    input: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: Colors.licorice,
        borderRadius: 10,
        fontSize: 16,
        color: Colors.licorice,
        backgroundColor: Colors.slate_gray,
        textAlign: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: Colors.slate_gray,
        padding: 10
    },
    cart: {
        marginBottom: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        shadowColor: Colors.licorice,
        borderRadius: 13,
        shadowOpacity: 1,
        shadowRadius: 7,
        shadowOffset: {
            width: 1,
            height: 4,
        },
        paddingRight: 2,
        paddingLeft: 10,
        paddingVertical: 2,
        borderWidth: 1,
        borderColor: Colors.licorice
    },
    title: {
        fontSize: 16
    },
})