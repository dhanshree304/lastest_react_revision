import axios from "axios";



export const GetPlaceDetails = (place) =>
  axios.get(
    `https://maps.gomaps.pro/maps/api/place/textsearch/json?query=${place}&key=AlzaSyA0Uta0-HzpVCmZTOx07HddZhPRcYdtoAd`
  );


 
  


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
