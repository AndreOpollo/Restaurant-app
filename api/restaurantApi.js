import axios from "axios";
  //endpoint base url
  const BASE_URL = 'https://api.yelp.com/v3/businesses/search?'  
  
  //Dynamic Endpoint with latitude and longitude
  const restaurantEndpoint = (latitude,longitude)=>{
    return `${BASE_URL}latitude=${latitude}&longitude=${longitude}&term=restaurants&sort_by=best_match&limit=50`
  }

  //Api Hook
  const apiCall = async (endpoint)=>{
    const options = {
        method: 'GET',
        url:endpoint,
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer itoMaM6DJBtqD54BHSZQY9WdWR5xI_CnpZdxa3SG5i7N0M37VK1HklDDF4ifYh8SI-P2kI_mRj5KRSF4_FhTUAkEw322L8L8RY6bF1UB8jFx3TOR0-wW6Tk0KftNXXYx'
        }
      };
      try {
        const response = await axios.request(options)
        return response.data
        
      } catch (error) {
        console.log('Error',error)
        return        
      }
    
  }
  export const getRestaurants = (latitude,longitude)=>{
    return apiCall(restaurantEndpoint(latitude,longitude))
  }
  