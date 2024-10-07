import { useEffect, useState } from 'react'
import useFetchData from './hooks/useFetchData'
import NewsListComponent from './components/NewsListComponent';

function App() {

	const [news, setNews] = useState([]);

	const callApi = async () => {
		const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
		const apiResponse = await useFetchData(baseApiUrl + "/everything?q=France&language=fr");

		if(apiResponse !== undefined) {
			setNews(apiResponse.articles);
		}
	}

	useEffect(() => {
		callApi()
	}, [])

	return (
		<>
			<input />
			{
				news &&
				<NewsListComponent news={news} />
			}
		</>
	)
}

export default App
