import { TextInput, Text, View, StyleSheet, Image } from "react-native"
import { UMBCButton } from "@/components/button/UMBCButton";
import { Router, useNavigation } from "expo-router";
import Checkbox from 'expo-checkbox'
import { useEffect, useState } from "react";
import { TextInputProps } from "react-native";
import GlobalTheme from "@/themes/globalTheme";

export default function EmailScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ headerShown: false, title: 'hello' });
    }, [navigation]);

    const pawRootTop = 10;
    const pawRootLeft = 40;

    const pawPositions = [
        { top: -20, left: 120 },
        { top: 40, left: 40 },
        { top: 100, left: -40 },
        { top: 100, left: 120 },
        { top: 160, left: 40 },
        { top: 220, left: -40 },
    ];

    const InputField = (
        { placeholder, autocomplete, secureTextEntry }:
            { placeholder: string, autocomplete: TextInputProps['autoComplete'], secureTextEntry?: boolean }
    ) => (
        <TextInput
            className='text-lg pb-2'
            placeholderTextColor='#999999'
            placeholder={placeholder}
            style={styles.textInput}
            autoCorrect={false}
            autoCapitalize="none"
            autoComplete={autocomplete}
            secureTextEntry={secureTextEntry}
            returnKeyType="next"
        ></TextInput>
    );

    const [acceptedTOC, setAcceptedTOC] = useState(false);

    return (
        <View className='w-full h-full pl-10 pr-10'>
            <View className='w-full'>
                <Text className='text-xl mt-5'>Username</Text>
                <InputField placeholder="truegrit5" autocomplete="username" />
                <Text className='text-xl mt-5'>Email Address</Text>
                <InputField placeholder="meyerhoff@scholars.edu" autocomplete="email" />
                <Text className='text-xl mt-5'>Password</Text>
                <InputField secureTextEntry={true} placeholder="**********" autocomplete="password" />
                <Text className='text-xl mt-5'>Confirm Password</Text>
                <InputField secureTextEntry={true} placeholder="**********" autocomplete="password" />

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                    <Checkbox color={acceptedTOC ? GlobalTheme.colors.primary : undefined} value={acceptedTOC} onValueChange={() => setAcceptedTOC(!acceptedTOC)} className='m-4'/>
                    <Text style={{maxWidth: 280}} className="mt-3">
                        <Text>By selecting "Create Account" you agree to our </Text>
                        <Text className='font-bold'>Terms of Service</Text>
                        <Text> and </Text>
                        <Text className='font-bold'>Privacy Policy</Text>
                    </Text>
                </View>


                <Text className='mt-2 text-orange-600 hidden'>Please enter a valid email address.</Text>
                <UMBCButton buttonStyle={{ marginTop: 30 }}>Create Account</UMBCButton>
            </View>
            <View style={{ maxHeight: 200 }} className='relative h-full w-full'>
                {pawPositions.map((position, index) =>
                    <Image
                        key={index}
                        style={{ maxWidth: 128, maxHeight: 128, left: pawRootLeft + position.left, top: pawRootTop + position.top, zIndex: -1 }}
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
        maxWidth: 350,
        minHeight: 45
    }
});