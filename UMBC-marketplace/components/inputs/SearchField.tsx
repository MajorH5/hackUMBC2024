import { TextInput, View, StyleSheet } from "react-native";
import { TabBarIcon } from "../navigation/TabBarIcon";

type SearchFieldProps = {

}

export default function SearchField({ }: SearchFieldProps) {
    return (
        // 
        <View className='w-full mt-4'>
            {/* <TabBarIcon style={{left: 5, top: 3}} name='search' className="absolute" color='gray' /> */}
            <TextInput
                className='bg-gray-100 rounded ml-10 mr-10 px-2 py-2 border-2 border-gray-300'
                placeholderTextColor='#999999'
                placeholder='Search'
                autoCorrect={false}
                autoCapitalize='none'
                returnKeyType="search"
                // clearButtonMode="always"
            ></TextInput>
        </View>
    )
}