import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button} from 'react-native';
import './global.css'
import { useEffect, useState } from 'react';
import RestaurantList from './components/RestaurantList';
import { getLocation } from './utils/LocationService';
import { getRestaurants } from './api/restaurantApi';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LoadingScreen from './components/LoadingScreen';


export default function App() {
const[restaurants,setRestaurants]=useState({})
const[currentRestaurant,setCurrentRestaurant]=useState(0)
const[location,setLocation]=useState(null)
const[errorMsg,setErrorMsg]=useState(null)
const[loading,setLoading]=useState(false)



useEffect(()=>{
  setLoading(true)
  getLocation()
  .then(
    location=>{
      setLocation(location)
      if(location){getRestaurantData(location.coords.latitude,location.coords.longitude)//Use location service coordinates
    }
    setLoading(false)
}
  )
  .catch(
    errorMsg=>setErrorMsg(errorMsg)
  )


  

},[])
const getRestaurantData= async(latitude,longitude)=>{
  const data = await getRestaurants(latitude,longitude)
  if(data)setRestaurants(data.businesses)
  
}


  

  
  const handleNext = ()=>{
   setCurrentRestaurant(prevIndex => (prevIndex < restaurants.length - 1 ? prevIndex + 1 : prevIndex));
  }
  const handlePrev = ()=>{
      setCurrentRestaurant(prevIndex => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  }
  return (
  
  //Check if loading is true  
  loading ? (
        <LoadingScreen/>
      ):(

      <View style={styles.container} >
        <Text style={styles.title}>Checkout Restaurants Near You</Text>
        <RestaurantList data={restaurants} currentRestaurant={currentRestaurant} handlePrev={handlePrev} handleNext={handleNext} />   
        
      </View>

      )
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffffff',
    justifyContent:"center",
    alignItems:"center",
    gap:24
    
 
  },
  title:{
    fontSize:hp(2.8),
    fontWeight:"bold"
  }
});
