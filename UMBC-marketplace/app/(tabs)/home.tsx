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
          <ProductListing></ProductListing>
          <ProductListing></ProductListing>
          <ProductListing></ProductListing>
          <ProductListing></ProductListing>
          <ProductListing></ProductListing>
          <ProductListing></ProductListing>
          <ProductListing></ProductListing>
          <ProductListing></ProductListing>
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