import SearchField from '@/components/inputs/SearchField';
import ProductListing from '@/components/ProductListing';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, RefreshControl } from 'react-native';
import { SearchBar, SearchBarProps } from 'react-native-screens';

export default function HomeScreen({ }: SearchBarProps) {
  return (
    <SafeAreaView className='flex-1 items-center bg-white'>
      <View className='mb-2 w-full'>
        <SearchField />
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={false}></RefreshControl>
        }
      >
        <Text className='text-xl font-bold'>Featured Listings</Text>
        <View style={styles.container}>
          <ProductListing  price="$35.69" image={require("@/assets/images/examplelistings/IMG_4289.jpg")}></ProductListing>
          <ProductListing  price="$75.31" image={require("@/assets/images/examplelistings/IMG_4290.jpg")}></ProductListing>
          <ProductListing  price="$44.30" image={require("@/assets/images/examplelistings/IMG_4291.jpg")}></ProductListing>
          <ProductListing  price="$86.30" image={require("@/assets/images/examplelistings/IMG_4292.jpg")}></ProductListing>
          <ProductListing  price="$5.22" image={require("@/assets/images/examplelistings/IMG_4293.jpg")}></ProductListing>
          <ProductListing  price="$10.12" image={require("@/assets/images/examplelistings/IMG_4294.jpg")}></ProductListing>
          <ProductListing  price="$20" image={require("@/assets/images/examplelistings/IMG_4296.jpg")}></ProductListing>
          <ProductListing  price="$12.99" image={require("@/assets/images/examplelistings/IMG_6709.jpg")}></ProductListing>
          <ProductListing  price="$248.70" image={require("@/assets/images/examplelistings/IMG_6012.jpg")}></ProductListing>
          <ProductListing  price="$308.20" image={require("@/assets/images/examplelistings/IMG_5469.jpg")}></ProductListing>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  }
});