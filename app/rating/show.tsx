import {View, Text} from "react-native";
import React from "react";
import { useLocalSearchParams } from 'expo-router';

export default function Index() {

    const { id } = useLocalSearchParams();

    console.log(id);

    return (
        <View>
            <Text>
                asd
            </Text>
        </View>
    );
}
