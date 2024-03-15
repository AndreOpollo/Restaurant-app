import { View, Text, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import RestaurantCard from './RestaurantCard'
import { Ionicons } from '@expo/vector-icons';


export default function RestaurantList({data,currentRestaurant,handleNext,handlePrev}) {
  return (
    <SafeAreaView className='flex-row justify-center items-center gap-2'>
        <TouchableOpacity onPress={handlePrev} disabled={currentRestaurant===0}>
        <Ionicons name="chevron-back-circle-outline" size={hp(4.5)} color= {currentRestaurant===0?"lightgray":'black'} />
        </TouchableOpacity>
      <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item,index})=>(
        index === currentRestaurant &&
        <View>
            <RestaurantCard restaurantData={item}/>
        </View>
      )}
      />
      <TouchableOpacity onPress={handleNext} disabled={currentRestaurant>data.length-1}>
      <Ionicons name="chevron-forward-circle-outline" size={hp(4.5)} color={currentRestaurant>data.length-1?"lightgray":'black'} />
      </TouchableOpacity>

    </SafeAreaView>
  )
}