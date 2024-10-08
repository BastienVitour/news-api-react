import NewsListComponent from './components/NewsListComponent';
import SearchBarComponent from './components/SearchBarComponent';
import { useGlobalContext } from './context/GlobalContext';
import ThemeSwitchComponent from './components/ThemeSwitchComponent';
import clsx from 'clsx';

function App() {

	const { state, dispatch } = useGlobalContext();

	return (
		<div className={clsx({ "bg-gray-100": state.theme==="light", "bg-gray-900": state.theme==="dark" })}>
			<ThemeSwitchComponent />
			<SearchBarComponent />
			{
				state.articles &&
				<NewsListComponent />
			}
		</div>
	)
}

export default App
