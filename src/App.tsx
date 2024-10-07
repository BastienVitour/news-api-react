import { useEffect, useState } from 'react'
import useFetchData from './hooks/useFetchData'
import NewsListComponent from './components/NewsListComponent';
import SearchBarComponent from './components/SearchBarComponent';
import Article from './models/Article';
import GlobalContextProvider from './context/GlobalContext';
import ThemeSwitchComponent from './components/ThemeSwitchComponent';

function App() {

	const [news, setNews] = useState<Article[]>([]);

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
		<GlobalContextProvider>
			<ThemeSwitchComponent />
			<SearchBarComponent />
			{
				news &&
				<NewsListComponent news={news} />
			}
		</GlobalContextProvider>
	)
}

export default App
