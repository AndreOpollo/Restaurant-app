import { View, Text,Image, Dimensions } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export default function RestaurantCard({restaurantData}) {
    
  return (
    <View className='flex justify-center items-start gap-2  rounded-3xl bg-amber-400'>
        <Image source={{uri:restaurantData?.image_url}} style={{
            height:hp(28),
            width:hp(40),
            overflow:'hidden',
            borderRadius:20
        
        }}
        resizeMode='stretch'/>
        <View className='mb-2 ml-2 flex items-start'>
        <Text style={{fontSize:hp(2.7)}} className='font-bold  text-neutral-700 tracking-wider' >{restaurantData?.name}</Text>
            {/*rating  */}
         <View className='flex-row items-center mt-3 gap-2'>
         <StarRating rating={restaurantData?.rating}numStars={5}/>
         <Text className='font-semibold text-neutral-700'>{restaurantData?.rating}</Text>         
         </View>   
            {/* Address and city */}
        <Text className='font-medium text-neutral-600 tracking-widest'>{restaurantData?.location.address1 }, 
        <Text className='font-medium text-neutral-600 tracking-widest'>
            {restaurantData?.location.city}
        </Text>
        </Text>    

        </View>
       
    </View>
  )
}

//Star-Rating Component
const StarRating = ({rating,numStars})=>{
 //Initialize an array of length numStars   
 const starArray = Array.from({ length: numStars }, (_, index) => index + 1);

 return(
    <View className='flex-row items-center'>
        {
            starArray.map((star,index)=>(
                <FontAwesome 
                key={index}
                name={rating >= star ? 'star' : rating >= star - 0.8 ? 'star-half-full' : 'star-o'}
                size={hp(2.5)}
                color={'#000000'}
                />
            ))
        }
    </View>
 )


}