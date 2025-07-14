const targetedCategories = [
  "furniture",
  "laptops",
  "smartphones",
  "mens-shoes",
  "womens-shoes",
  "tablets",
  "womens-bags",
];

const jsonToHisendMap = {
  title: "name",
  description: "description",
  price: "price",
  rating: "rating",
  images: "image",
  category: "category",
};

const categoryMap = {
  furniture: "furniture",
  laptops: "tech-items",
  smartphones: "tech-items",
  "mens-shoes": "shoes",
  "womens-shoes": "shoes",
  tablets: "tech-items",
  "women-bags": "bags",
};

const baseUrl = "https://dummyjson.com/products/category/";

targetedCategories.forEach((category) => {
  fetch(baseUrl + category)
    .then((response) => response.json())
    .then((data) => {
      const hisendData = data.products.map((product) => {
        const hisendProduct = {};
        for (const [jsonKey, hisendKey] of Object.entries(jsonToHisendMap)) {
          hisendProduct[hisendKey] = product[jsonKey];

          if(jsonKey === "images") {
            // Convert images array to a single string with comma-separated values
            hisendProduct[hisendKey] = product[jsonKey][0] || "";
          }
        }
        hisendProduct.category = categoryMap[category] || "other";
        // raters should be random number between 300 and 500
        hisendProduct.raters =
          Math.floor(Math.random() * (500 - 300 + 1)) + 300;


        // axios
        //   .post("https://core.hisend.hunnovate.com/api/v1/projects/shop_cart/tables/products/records?api_key=7cLG41V6vQV19gDy9w2ERhRx", hisendProduct)
        //   .then((response) => {
        //     console.log(response.data);
        //   })
        //   .catch((error) => {
        //     console.error(`Error posting data for category: ${category}`, error);
        //   });
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});
