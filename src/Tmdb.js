const API_KEY = "73adcfd0bd8e5f03cb79fc39e9de711a";
const API_BASE = "https://api.themoviedb.org/3";

// originais da netflix
// recomendados(tranding)
// em alta(toprated)
// acao
// comedia
// romance
// documentarios

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getHomeList: async () => {
        return [
            {
                slug: "originals",
                title: "Originais do Netflix",
                items: await basicFetch(
                    `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
                ),
            },
            {
                slug: " trending",
                title: "Recomendados para você",
                items: await basicFetch(
                    `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
                ),
            },
            {
                slug: " toprated",
                title: "Em alta",
                items: await basicFetch(
                    `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
                ),
            },
            {
                slug: " action",
                title: "Ação",
                items: await basicFetch(
                    `/discover/movie?with_generes=28&language=pt-BR&api_key=${API_KEY}`
                ),
            },
            {
                slug: " comedy",
                title: "Comedia",
                items: await basicFetch(
                    `/discover/movie?with_generes=35&language=pt-BR&api_key=${API_KEY}`
                ),
            },
            {
                slug: " horror",
                title: "Terror",
                items: await basicFetch(
                    `/discover/movie?with_generes=27&language=pt-BR&api_key=${API_KEY}`
                ),
            },
            {
                slug: " romance",
                title: "Romance",
                items: await basicFetch(
                    `/discover/movie?with_generes=10749&language=pt-BR&api_key=${API_KEY}`
                ),
            },
            {
                slug: " documentary",
                title: "Documentarios",
                items: await basicFetch(
                    `/discover/movie?with_generes=990&language=pt-BR&api_key=${API_KEY}`
                ),
            },
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if (movieId) {
            switch (type) {
                case "movie":
                    info = await basicFetch(
                        `/movie/${movieId}?lenguage=pt-BR&api_key=${API_KEY}`
                    );
                    break;
                case "tv":
                    info = await basicFetch(
                        `/tv/${movieId}?lenguage=pt-BR&api_key=${API_KEY}`
                    );
                    break;
                default:
            }
        }
        return info;
    },
};
