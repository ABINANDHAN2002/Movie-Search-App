const apiKey = "1cc6d922"; 

async function searchMovie() {
  const query = document.getElementById("searchInput").value.trim();
  if (!query) return;

  const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`);
  const data = await response.json();

  const movieContainer = document.getElementById("movieContainer");
  movieContainer.innerHTML = "";

  if (data.Response === "True") {
    data.Search.forEach(movie => {
      const movieDiv = document.createElement("div");
      movieDiv.classList.add("movie");
      movieDiv.innerHTML = `
        <img src="${movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/200x300'}" alt="${movie.Title}" />
        <h3>${movie.Title}</h3>
        <p>Year: ${movie.Year}</p>
      `;
      movieContainer.appendChild(movieDiv);
    });
  } else {
    movieContainer.innerHTML = `<p>No results found for "${query}".</p>`;
  }
}
