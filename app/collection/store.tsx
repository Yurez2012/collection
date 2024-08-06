import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import React, {useEffect, useState} from "react";
import api from "@/interceptor/api";
import {SelectList} from "react-native-dropdown-select-list";
import Colors from "@/constants/Colors";
import {router, Stack} from "expo-router";
import HeaderFriend from "@/components/navigation/HeaderFriend";

export default function Store() {
    const [categories, setCategories] = useState(null);
    const [books, setBooks] = useState(null);
    const [selectCategory, setSelectCategory] = useState();
    const [selectBook, setSelectBook] = useState();
    const [searchBook, setSearchBook] = useState();

    useEffect(() => {
        if (categories === null) {
            getCategories();
        }
    }, [categories]);

    const getCategories = async () => {
        try {
            const response = await api.get('/category');

            setCategories(response.data.categories)
        } catch (error) {
            console.error('Axios error:', error);
        }
    };

    const searchBookFunc = async (val) => {
        try {
            const response = await api.get('/book_search?author=' + val);

            setBooks(response.data.books)
        } catch (error) {
            console.error('Axios error:', error);
        }
    };

    const search = async (val) => {
        setSearchBook(val);
        await searchBookFunc(val);
    }

    const sent = async () => {
        try {
            const response = await api.post('/collection', {
                model_type: selectCategory,
                model_id: selectBook
            });

            router.replace('collection');
        } catch (error) {
            console.error('Axios error:', error);
        }
    };


    return (
        <>
            <Stack.Screen options={{
                header: () => <HeaderFriend/>
            }}/>
            <View style={styles.container}>
                <SelectList
                    boxStyles={styles.select}
                    setSelected={(val) => setSelectCategory(val)}
                    data={categories ? categories : null}
                    save="value"
                />
                {selectCategory && selectCategory == 'Book' ? (
                    <TextInput
                        style={styles.searchInput}
                        placeholderTextColor={Colors.licorice}
                        placeholder="Search book..."
                        onChangeText={(val) => {
                            search(val);
                        }}
                    />
                ) : ''}
                {selectCategory && selectCategory == 'Book' && books && books.length > 0 ? (
                    <SelectList
                        boxStyles={styles.select}
                        data={books ? books : null}
                        setSelected={(val) => setSelectBook(val)}
                        save="key"
                        search={false}
                    />
                ) : ''}

                <Pressable onPress={sent}>
                    <Text>
                        Sent
                    </Text>
                </Pressable>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    select: {
        marginBottom: 5
    },
    searchInput: {
        paddingLeft: 20,
        height: 45,
        borderColor: Colors.licorice,
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 5,
        borderRadius: 10
    },
});