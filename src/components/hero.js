export const heroData = {
  heading: "Welcome To Anoop Toors & Travels",
  description: "Your Journey, Our Priority.",
  bgImage: "hero.png",
  images: [
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
    "https://images.unsplash.com/photo-1552664730-d307ca884978"
  ]
  
};
export const features={
  "type": "features",
  "title": "Why Ride With Us?",
  "items": [
    {
      "icon": "🛡️",
      "title": "Safe & Secure",
      "description": "GPS-enabled buses with 24/7 support."
    },
    {
      "icon": "💺",
      "title": "Maximum Comfort",
      "description": "Push-back seats with extra legroom."
    },
    {
      "icon": "🕒",
      "title": "On-Time Guarantee",
      "description": "Never miss your schedule with us."
    }
  ]
}
export default {heroData,features};

// // Component call:
// <Hero data={heroData} />