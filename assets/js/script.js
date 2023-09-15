const content = document.querySelector("#content");
const searchInput = document.querySelector("#search");

const apiKey = "IUyqcq9JfnOFV5W1uI0plzV0jEf9IHPQ";
const apiUrl = "https://api.giphy.com/v1/gifs/search";

async function performSearch(searchTerm) {
  try {
    const query = new URLSearchParams({
      q: searchTerm,
      api_key: apiKey,
    });

    const fullApiUrl = `${apiUrl}?${query}`;

    const response = await fetch(fullApiUrl);
    const data = await response.json();

    const gifs = data.data.map((gifData) => `
      <div>
        <img class="smileItem" src="${gifData.images.original.url}" alt="${gifData.title}">
      </div>
    `);

    content.innerHTML = gifs.join('');
  } catch (error) {
    console.error("API error:", error);
  }
}

searchInput.addEventListener('input', () => {
  const search = searchInput.value.toLowerCase();
  performSearch(search);
});
