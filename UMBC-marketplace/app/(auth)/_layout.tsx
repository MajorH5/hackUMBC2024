import React from "react";
import { SafeAreaView } from "react-native";
import { Slot } from "expo-router";

export default function AuthLayout () {
    return (
        <SafeAreaView className='bg-white w-full h-full'>
            <Slot/>
        </SafeAreaView>
    );
}