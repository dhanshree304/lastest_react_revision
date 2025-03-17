import axios from "axios";



export const GetPlaceDetails = (place) =>
  axios.get(
    // `https://api.geoapify.com/v2/places?categories=commercial.supermarket&filter=rect%3A10.716463143326969%2C48.755151258420966%2C10.835314015356737%2C48.680903341613316&limit=20&apiKey=b1d4bb46ba8343d293aa0a78a3364679`
    `https://api.geoapify.com/v1/geocode/autocomplete?text=${place}&apiKey=b1d4bb46ba8343d293aa0a78a3364679&type=locality&limit=5`
  );

  
  // axios.get(
  //   `https://maps.gomaps.pro/maps/api/place/textsearch/json?query=${place}&key=AlzaSyA0Uta0-HzpVCmZTOx07HddZhPRcYdtoAd`
  // );



//  b1d4bb46ba8343d293aa0a78a3364679;
  


   export const GetWikiImage = async (place) => {
     try {
       // Step 1: Get the best matching Wikipedia page title
       const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch=${encodeURIComponent(
         place
       )}`;
       const searchResponse = await fetch(searchUrl);
       const searchData = await searchResponse.json();

       if (!searchData.query.search.length) {
         return "No Wikipedia page found";
       }

       const bestMatchTitle = searchData.query.search[0].title;

       // Step 2: Fetch image from the best-matching page
       const imageUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=pageimages&titles=${encodeURIComponent(
         bestMatchTitle
       )}&pithumbsize=500`;
       const imageResponse = await fetch(imageUrl);
       const imageData = await imageResponse.json();

       const pages = imageData.query.pages;
       for (let pageId in pages) {
         if (pages[pageId].thumbnail) {
           return pages[pageId].thumbnail.source; // Returns the image URL
         }
       }

       return "No image found";
     } catch (error) {
       console.error("Error fetching image:", error);
     }
   };


// export const PHOTO_REF_URL = "";
