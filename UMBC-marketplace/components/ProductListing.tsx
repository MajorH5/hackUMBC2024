import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { TabBarIcon } from "./navigation/TabBarIcon";
import { useState } from "react";

export default function ProductListing() {
    const [isFavorited, setIsFavorited] = useState(false);

    return (
        <View style={styles.listingCell}>
            <TouchableOpacity onPress={() => setIsFavorited(!isFavorited)}>
                <TabBarIcon style={styles.heartIcon} name={isFavorited ? "heart" : "heart-outline"}></TabBarIcon>
            </TouchableOpacity>
            <Text className='text-gray-100 absolute bottom-0 mb-2 ml-2 text-md font-bold'>$420.69</Text>
            <Image className="w-full h-full" source={require("@/assets/images/paw.png")} />
        </View>
    );
}

const styles = StyleSheet.create({
    heartIcon: {
        position: 'absolute',
        left: 180 - 40,
        top: 10,
        zIndex: 2
    },
    listingCell: {
        minWidth: 180,
        maxWidth: 180,
        minHeight: 180,
        maxHeight: 180,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: '#302F30'
    }
});
