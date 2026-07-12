export const fetchCityBusImage = async (keyword) => {
  const accessKey = "fm6u5N5FNI2VudwcI5Hk3tL-ySV7BD4ixc6ARS4tG-Y"; // Aapka Unsplash API key
  const url = `https://api.unsplash.com/photos/random?query=${keyword}&client_id=${accessKey}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.urls.regular; // Ye aapko high-quality image ka link de dega
  } catch (error) {
    console.error("Image nahi mili:", error);
    return "https://via.placeholder.com/600x400"; // Fallback image
  }
};

//secret_key =CNJTedn0WRk7DUGhP-VpLlosXEfjCswcVi-a9Ym879A

fetchCityBusImage("bhindi").then((imageUrl) => {
  console.log("Random City Bus Image URL:", imageUrl);
});
