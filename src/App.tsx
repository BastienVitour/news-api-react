import { useEffect } from 'react'
import './App.css'
import useFetchData from './hooks/useFetchData'

function App() {

	useEffect(() => {
		const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
		useFetchData(baseApiUrl + "/everything?q=France")
	}, [])

	return (
		<>
			<input />
		</>
	)
}

export default App
