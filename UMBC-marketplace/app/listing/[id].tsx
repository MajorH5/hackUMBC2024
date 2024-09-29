import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useSharedValue } from "react-native-reanimated";

const StickyBottomBar = () => {
    return (
        <View style={styles.stickyContainer} className='w-full h-full'>
            <View style={styles.stickyBar}>
                <Text style={styles.stickyBarText}>Sticky Bottom Bar</Text>
            </View>
        </View>
    );
};

export default function ListingScreen() {
    const progress = useSharedValue<number>(0);

    return (
        <View className="w-full h-full">
            <View style={{ maxHeight: 300, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} className='w-full'>
                {/* <Image source={require('@/assets/images/paw.png')} className='w-full h-full'></Image> */}
            </View>
            <StickyBottomBar></StickyBottomBar>
        </View>
    )
}

const styles = StyleSheet.create({
    stickyContainer: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    stickyBar: {
        height: 60,
        backgroundColor: '#494B52',
        justifyContent: 'center',
        alignItems: 'center',
        // position: 'absolute',
        bottom: 60, // Adjust based on tab bar height
        // left: 0,
        // right: 0,
        // zIndex: 1, // Ensure it is above the tabs
    },
    stickyBarText: {
        color: '#fff',
        fontSize: 18,
    },
});
