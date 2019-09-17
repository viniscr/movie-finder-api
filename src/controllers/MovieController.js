const dotenv = require('dotenv');
const fetch = require('node-fetch');

dotenv.config()
const { API_URL, API_KEY } = process.env

module.exports = {
    async upcoming(req, res) {
        const { page } = req.query
        const url = `${API_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`;

        let response = await fetch(url);
        let data = await response.json();

        return res.send(data.results)
    },

    async details(req, res) {
        const { id } = req.params;
        const url = `${API_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`;

        let response = await fetch(url);
        let data = await response.json();

        return res.send(data);
    },

    async genres(req, res) {
        const url = `${API_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`;

        let response = await fetch(url);
        let data = await response.json();

        return res.send(data.genres);
    },

    async search(req, res) {
        const { query, page } = req.query
        const url = `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}&language=en-US`;

        let response = await fetch(url);
        let data = await response.json();

        return res.send(data.results);
    }

}
