import {useEffect} from "react";
import { SafeAreaView } from "react-native";
import { Slot, useNavigation } from "expo-router";

export default function AuthLayout () {
    const navigation = useNavigation();

    useEffect(() => {
      navigation.setOptions({ title: 'Sign up' });
    }, [navigation]);

    return (
        <SafeAreaView className='bg-white w-full h-full'>
            <Slot/>
        </SafeAreaView>
    );
}