import React from "react";
import { View, ScrollView, Text } from "react-native";
import { Slot, useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";

export default function LegalLayout() {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    return (
        <SafeAreaView className="mx-5 mt-10">
            <Slot/>
        </SafeAreaView>
    );
}