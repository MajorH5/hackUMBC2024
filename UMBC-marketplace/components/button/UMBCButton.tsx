import { TouchableOpacity, StyleSheet, Text, ViewStyle } from 'react-native'
import React from 'react'
import GlobalTheme from '@/themes/globalTheme'

type UMBCButtonProps = {
  children: React.ReactNode
  onPress?: () => void,
  buttonStyle?: ViewStyle
  textStyle?: ViewStyle
}

export function UMBCButton({ children, buttonStyle, textStyle, onPress}: UMBCButtonProps){
  return (
    <TouchableOpacity onPress={onPress} style={[styles.primaryButton, buttonStyle]} className='bg-black rounded-md m-2'>
        <Text style={[GlobalTheme.fontStyle.default, textStyle]} className='font-semibold mt-3 mb-3 px-4 text-center w-full'>{children}</Text>
    </TouchableOpacity>
  )
}

export const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: GlobalTheme.colors.primary
  },
  secondaryButton: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderColor: GlobalTheme.colors.primary,
    borderWidth: 2,
  },
});