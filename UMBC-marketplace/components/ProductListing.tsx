import { View, Text, StyleSheet, Image, TouchableOpacity, ImageURISource, ImageBackground } from "react-native";
import { TabBarIcon } from "./navigation/TabBarIcon";
import { useState  } from "react";
import { router } from "expo-router";

type ProductListingProps = {
    image: ImageURISource,
    price: string
}

export default function ProductListing({ image, price }: ProductListingProps) {
    const [isFavorited, setIsFavorited] = useState(false);

    return (
        <TouchableOpacity activeOpacity={1} onPress={() => router.push('/listing/2')} style={styles.listingCell}>
            <ImageBackground className="w-full h-full" source={image} />
            {/* <TouchableOpacity onPress={() => setIsFavorited(!isFavorited)}> */}
                <TabBarIcon style={styles.heartIcon} color='white' name={isFavorited ? "heart" : "heart-outline"}></TabBarIcon>
            {/* </TouchableOpacity> */}
            <Text className='text-gray-100 absolute bottom-0 mb-2 ml-2 text-md font-bold'>{price}</Text>
        </TouchableOpacity>
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
