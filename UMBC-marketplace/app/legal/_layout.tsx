import { Stack } from "expo-router";
import React from "react";
import { View } from "react-native";

type LayoutProps = {
    children: React.ReactNode
}

export default function LegalLayout ({ children }: LayoutProps) {
    return (
        <View className='w-full h-full bg-white'>
            {children}
        </View>
    );
}