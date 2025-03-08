export const SelectionBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious,spend required",
    iconImage: "💸",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost minimal",
    iconImage: "💰",
  },

  {
    id: 3,
    title: "Luxury",
    desc: "Dont worry about expenses ",
    iconImage: "💵",
  },
];

export const SelectTravelOptions = [
  {
    id: 1,
    title: "Just Me",
    desc: "A solo traveler",
    people: "1 people",
    iconImage: "💃",
  },
  {
    id: 2,
    title: "A Couple",
    desc: " Two Traveles in Tandem",
    people: "2 people",
    iconImage: "🥂",
  },

  {
    id: 3,
    title: "Family",
    desc: "A Group of fun loving ",
    people: "3-5 people",
    iconImage: "🏡",
  },
  {
    id: 3,
    title: "Friends",
    desc: "A Group of fun loving ",
    people: "5 - 10 people",
    iconImage: "🚗",
  },
];

export const AI_PROMPT = `Generate Travel Plan for Location :{location}, for {totalDays} Days for {traveler} with a {budget} budget,give me hotels option list with HotelName, Hotel address, Price ,hotel image url,geo coordinates,rating,descriptions and suggest itinerary with placeName,Place Details, place  image Url,Geo Cordadinates,ticket Pricing,Time travel each of gthe location for 3 days with each day plan with beast time to visit in JSON format`;
