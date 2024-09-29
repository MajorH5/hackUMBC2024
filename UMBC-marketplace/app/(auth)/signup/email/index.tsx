import { TextInput, Text, View, StyleSheet, Image } from "react-native"
import { UMBCButton } from "@/components/button/UMBCButton";
import { Router } from "expo-router";

export default function EmailScreen() {
    const pawRootTop = 130; 
    const pawRootLeft = 40;

    const pawPositions = [
        { top: -20, left: 120 },
        { top: 40, left: 40 },
        { top: 100, left: -40 },
        { top: 100, left: 120 },
        { top: 160, left: 40 },
        { top: 220, left: -40 },
    ];
    return (
        <View className='w-full h-full pl-10 pr-10'>
            <View className='mt-20 w-full'>
                <Text className='text-xl'>Email Address</Text>
                <TextInput
                    className='text-lg pb-2'
                    placeholderTextColor='#999999'
                    placeholder="email@example.org"
                    style={styles.textInput}
                    autoComplete="email"
                ></TextInput>
                <Text className='mt-2 text-orange-600 hidden'>Please enter a valid email address.</Text>
                <UMBCButton buttonStyle={{marginTop: 30}}>Continue</UMBCButton>
            </View>
            <View style={{maxHeight: 200}} className='relative h-full w-full'>
                {pawPositions.map((position) =>
                    <Image
                        style={{maxWidth: 128, maxHeight: 128, left: pawRootLeft + position.left, top: pawRootTop + position.top }}
                        className='absolute top-full rotate-45'
                        source={require("@/assets/images/paw.png")}>
                    </Image>
                )}
                {/* <Image style={{maxWidth: 128, maxHeight: 128 }} className='' source={require("@/assets/images/paw.png")}></Image> */}
                {/* <Image style={{maxWidth: 128, maxHeight: 128 }} className='' source={require("@/assets/images/paw.png")}></Image> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        borderBottomColor: '#aaaaaa',
        borderBottomWidth: 1,
        maxWidth: 350
    }
});