import { useEffect, useRef } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import clsx from "clsx";
import useFetchData from "../hooks/useFetchData";
import Article from "../models/Article";

export default function SearchBarComponent() {

    const { state, dispatch } = useGlobalContext();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
        const response = await useFetchData(baseApiUrl + `/everything?q=${state.searchTerm}&language=fr&sortBy=relevancy`);
        dispatch({ type: "SET_ARTICLES", payload: response.articles as Article[] });
    }

    const searchBar = useRef(null);

    useEffect(() => {
        searchBar.current.focus();
    }, []);

    return(

        <form onSubmit={handleSubmit} className="w-100 p-4 flex">
            <input onChange={(e) => dispatch({ type: "CHANGE_SEARCH_TERM", payload: e.target.value })} placeholder="Rechercher des mot clés" ref={searchBar} className={clsx({"w-[100%] h-10 border rounded px-3": true, "bg-gray-100 text-gray-900 border-gray-900": state.theme==="light", "bg-gray-900 text-gray-100 border-gray-100": state.theme==="dark"})} />
            <button className={clsx({"border rounded px-3 cursor-pointer": true, "bg-gray-100 text-gray-900 border-gray-900": state.theme==="light", "bg-gray-900 text-gray-100 border-gray-100": state.theme==="dark"})} type="submit">Rechercher</button>
        </form>

    );

}