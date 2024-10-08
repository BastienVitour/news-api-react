import { useEffect, useState } from 'react'
import useFetchData from './hooks/useFetchData'
import NewsListComponent from './components/NewsListComponent';
import SearchBarComponent from './components/SearchBarComponent';
import Article from './models/Article';
import { useGlobalContext } from './context/GlobalContext';
import ThemeSwitchComponent from './components/ThemeSwitchComponent';
import clsx from 'clsx';

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
	}, []);

	const { state, dispatch } = useGlobalContext();

	return (
		<div className={clsx({ "bg-white": state.theme==="light", "bg-black": state.theme==="dark" })}>
			<ThemeSwitchComponent />
			<SearchBarComponent />
			{
				news &&
				<NewsListComponent news={news} />
			}
		</div>
	)
}

export default App
