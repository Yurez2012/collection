import {FlatList, TextInput, View} from "react-native";
import {Picker} from "@react-native-picker/picker";
import React, {useEffect, useRef, useState} from "react";
import api from "@/interceptor/api";
import {SelectList} from "react-native-dropdown-select-list";

export default function Store() {
    const [categories, setCategories] = useState(null);
    const [selectCategory, setSelectCategory] = useState();
    const [text, setSelectTitle] = React.useState('Useless Text');

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

    const [selected, setSelected] = React.useState("");

    const data = [
        {key:'1', value:'Mobiles', disabled:true},
        {key:'2', value:'Appliances'},
        {key:'3', value:'Cameras'},
        {key:'4', value:'Computers', disabled:true},
        {key:'5', value:'Vegetables'},
        {key:'6', value:'Diary Products'},
        {key:'7', value:'Drinks'},
    ]

    return (
        <View>
            <Picker
                selectedValue={selectCategory}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectCategory(itemValue)
                }
                mode={"dialog"}
            >
                {
                    categories ? categories.map((category, index) => {
                        return (<Picker.Item label={category.title} value={category.id} key={category.id} />);
                    }) : null
                }
            </Picker>
            <SelectList
                setSelected={(val) => setSelected(val)}
                data={data}
                save="value"
            />
        </View>
    );
}
