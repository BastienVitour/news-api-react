import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useGlobalContext } from "../context/GlobalContext";
import Article from "../models/Article";

export default async function useFetchData(url: string) {

   // const { state, dispatch } = useGlobalContext();

    let apiKey = import.meta.env.VITE_API_KEY;

    const axiosOptions: AxiosRequestConfig = {
        headers: {
            "X-api-key": apiKey
        }
    }

    try {
        //const response = await axios.get("/data.json");
        
        const response: AxiosResponse = await axios.get(url, axiosOptions);

        if(response.status === 200) {
            //dispatch({ type: "SET_ARTICLES", payload: response.data as Article[] });
            return response.data;
        }
        else {
            return undefined;
        }

    }
    catch(error: any) {
        console.error(error);
        return undefined;
    }

}