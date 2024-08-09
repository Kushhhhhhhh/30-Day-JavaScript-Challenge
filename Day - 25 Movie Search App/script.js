const apikey = "80ff02d5";
const apiUrl = `http://www.omdbapi.com/?apikey=${apikey}&`;

const fetchMovieData = async (movieTitle) => {
    try {
        const response = await fetch(`${apiUrl}t=${movieTitle}`);
        const data = await response.json();

        if (data.Response === "True") {
            displayMovieData(data);
        } else {
            document.getElementById('movieList').innerHTML = `<p>No movie found. Please try another search.</p>`;
        }
    } catch (error) {
        console.error("Error fetching movie data:", error);
        document.getElementById('movieList').innerHTML = `<p>Something went wrong. Please try again later.</p>`;
    }
};

const displayMovieData = (movie) => {
    const movieHtml = `
        <div class="movie-list__item">
            <img src="${movie.Poster}" alt="${movie.Title} Poster">
            <h2>${movie.Title}</h2>
            <p>${movie.Year}</p>
            <p>${movie.Genre}</p>
            <p>${movie.Plot}</p>
        </div>
    `;
    document.getElementById('movieList').innerHTML = movieHtml;
};

document.getElementById('searchForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const movieTitle = document.getElementById('searchInput').value.trim();
    
    if (movieTitle) {
        fetchMovieData(movieTitle);
    }
});