import { StyleSheet, Text, ImageBackground, Image, View } from 'react-native'
import { Link, router, useNavigation } from 'expo-router'
import React, { useEffect } from 'react'
import { UMBCButton, styles as UMBCButtonStyles } from '@/components/button/UMBCButton'
import GlobalTheme from '@/themes/globalTheme'

const RegisterScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false, title: '' });
  }, [navigation]);

  return (
    <ImageBackground className="absolute w-full h-full" resizeMode="repeat" source={require("@/assets/images/tile.png")}>
      <View style={styles.container} className='w-full h-full flex-1 justify-center items-center'>
        <View style={{ maxWidth: 300 }} className='flex-1 justify-center items-center space-y-20 mt-20'>
        <Image style={{maxWidth: 167, maxHeight: 148}} source={require("@/assets/images/retriever.png")}></Image>
          <View className='w-full'>
            <Text className='color-black text-center text-xl text-center font-bold'>Retriever Marketplace</Text>
            <Text className='color-black text-center text-center font-semibold'>Your Campus, Your Community — Where Retrievers buy, sell, and connect!</Text>
          </View>
          <View>
            <UMBCButton onPress={() => router.push('/signup/email')}>Sign up with email</UMBCButton>
            <Text className='text-gray-600 text-center mt-10'>Already have an account?</Text>
            <UMBCButton onPress={() => router.replace('/home')}>Login with email</UMBCButton>
          </View>
          <View>
            <Text className='text-center'>By continuing, you agree to our
              <Link href="/legal/termsandconditions">
                <Text className='font-bold'> Terms of Service</Text>
              </Link> and
              <Link href="/legal/privacypolicy">
                <Text className='font-bold'> Privacy Policy</Text>
              </Link>
            </Text>
          </View>
        </View>

      </View>
    </ImageBackground>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)'
  },
  text: {
    color: '#aaaaaa'
  }
});