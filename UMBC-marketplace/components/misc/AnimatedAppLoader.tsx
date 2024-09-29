// Implementation details: https://github.com/expo/examples/blob/master/with-splash-screen/App.js

import { Animated, ImageRequireSource, View, StyleSheet, ImageURISource} from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState, useMemo, useCallback } from "react";
import { Asset } from "expo-asset"
import AppConfig from "@/app.json"

type AnimatedAppLoaderProps = {
    children?: React.ReactNode,
    image: ImageURISource
}

type AnimatedSplashScreenProps =  AnimatedAppLoaderProps;

export default function AnimatedAppLoader({ children, image }: AnimatedAppLoaderProps): React.ReactNode {
    const [isSplashReady, setSplashReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            await Asset.fromURI(image.uri ? image.uri : '').downloadAsync();
            setSplashReady(true);
        }

        prepare();
    }, [image]);

    if (!isSplashReady) {
        return null;
    }

    return <AnimatedSplashScreen image={image}>{children}</AnimatedSplashScreen>;
}

function AnimatedSplashScreen({ children, image }: AnimatedSplashScreenProps) {
    const animation = useMemo(() => new Animated.Value(1), []);
    const [isAppReady, setAppReady] = useState(false);
    const [isSplashAnimationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        if (isAppReady) {
            Animated.timing(animation, {
                toValue: 2,
                duration: 1000,
                useNativeDriver: true,
            }).start(() => setAnimationComplete(true));
        }
    }, [isAppReady]);

    const onImageLoaded = useCallback(async () => {
        try {
            await SplashScreen.hideAsync();
            // Load stuff
            await Promise.all([]);
        } catch (e) {
            // handle errors
        } finally {
            setAppReady(true);
        }
    }, []);

    const opacity = animation.interpolate({
        inputRange: [1, 2],
        outputRange: [1, 0],
    });

    return (
        <View style={{ flex: 1 }}>
            {isAppReady && children}
            {!isSplashAnimationComplete && (
                <Animated.View
                    pointerEvents="none"
                    style={[
                        StyleSheet.absoluteFill,
                        {
                            backgroundColor: AppConfig.expo.splash.backgroundColor,
                            opacity: opacity,
                        },
                    ]}
                >
                    <Animated.Image
                        style={{
                            width: "100%",
                            height: "100%",
                            resizeMode: "contain",
                            transform: [
                                {
                                    scale: animation,
                                },
                            ],
                        }}
                        source={image}
                        onLoadEnd={onImageLoaded}
                        fadeDuration={0}
                    />
                </Animated.View>
            )}
        </View>
    );
}