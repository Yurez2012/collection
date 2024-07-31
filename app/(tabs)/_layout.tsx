import React from "react"
import { Tabs } from 'expo-router';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import {StyleSheet} from "react-native";
import Colors from "@/constants/Colors";

export default function TabLayout() {
    return(
        <Tabs screenOptions={{
            tabBarStyle: styles.container
        }}>
            <Tabs.Screen name='index' options={{
                title: 'Home',
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
                ),
            }} />
            <Tabs.Screen name='collection' options={{
                title: 'Collection',
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'library' : 'library-outline'} color={color} />
                ),
            }} />
            <Tabs.Screen name='friend' options={{
                title: 'Friends',
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'people' : 'people-outline'} color={color} />
                ),
            }} />
        </Tabs>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: Colors.licorice,
        borderTopWidth: 0,
        borderWidth: 1,
        borderColor: Colors.licorice,
        borderTopColor: Colors.licorice,
        paddingTop: 20,
        paddingBottom: 30,
        height: 100
    }
})