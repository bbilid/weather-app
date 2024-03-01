import axios from "axios";

const axiosApi = axios.create({
	baseURL: 'https://api.openweathermap.org',
});

export default axiosApi;