const API_KEY = "0ce07b8b60268785a843751131e46ac0"
const BASE_URL = "https://api.themoviedb.org/3"

async function fetchJson(url) {
    const response = await fetch(url);
    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Request failed (${response.status}): ${text}`);
    }
    return response.json();
}

export const getPopularMovies = async () =>{
    const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    const data = await fetchJson(url);
    return data.results || [];
};

export const searchMovies = async (query) =>{
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&language=en-US&page=1`;
    const data = await fetchJson(url);
    return data.results || [];
};
