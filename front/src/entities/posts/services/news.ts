import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com'

export const fetchNews = async () => {
	const response = await axios.get(`${API_URL}/posts`)
	return response.data
}
