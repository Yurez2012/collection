import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import React, {useEffect, useState} from "react";
import api from "@/interceptor/api";
import {SelectList} from "react-native-dropdown-select-list";
import Colors from "@/constants/Colors";
import {router, Stack} from "expo-router";
import HeaderBack from "@/components/navigation/HeaderBack";

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
                header: () => <HeaderBack/>
            }}/>
            <View style={styles.container}>
                <SelectList
                    boxStyles={styles.select}
                    dropdownStyles={styles.select}
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
                        dropdownStyles={styles.select}
                        data={books ? books : null}
                        setSelected={(val) => setSelectBook(val)}
                        save="key"
                        search={false}
                    />
                ) : ''}

                <View style={styles.center}>
                    <Pressable  style={styles.btn} onPress={sent}>
                        <Text style={styles.btn_title}>
                            Sent
                        </Text>
                    </Pressable>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.slate_gray,
        flexDirection: "column",
        paddingTop: 120,
        padding: 40
    },
    select: {
        marginBottom: 10,
        borderColor: Colors.licorice,
        backgroundColor: Colors.ash_gray,
        color: Colors.licorice,
        borderRadius: 10
    },
    searchInput: {
        paddingLeft: 20,
        height: 45,
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
        borderRadius: 10,
        borderColor: Colors.licorice,
        backgroundColor: Colors.ash_gray,
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
        marginLeft: 5,
        fontSize: 20,
        color: Colors.ash_gray,
        textAlign: "center"
    },
});