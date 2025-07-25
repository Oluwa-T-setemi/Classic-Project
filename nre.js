async function fetchAliExpressProducts() {
  const totalToFetch = 350;
  const limit = 50;
  const totalPages = Math.ceil(totalToFetch / limit);

  for (let page = 1; page <= totalPages; page++) {
    const url = `https://ali-express1.p.rapidapi.com/search?query=shoes&page=${page}&limit=${limit}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "09c4ceaf18msh11a555db9ffbb6ap1aba6ejsn0f76e9cec267",  // Make sure you're subscribed to this API
          "X-RapidAPI-Host": "ali-express1.p.rapidapi.com"
        }
      });

      const data = await response.json();
      console.log(`Page ${page}:`, data);
    } catch (error) {
      console.error(`Page ${page} failed:`, error);
    }

    // 💤 Wait 1500ms (1.5 seconds) before next request
    await new Promise(resolve => setTimeout(resolve, 1500));
  }
}

fetchAliExpressProducts();
