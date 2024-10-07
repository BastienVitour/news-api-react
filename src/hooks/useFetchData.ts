import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export default async function useFetchData(url: string) {

    let apiKey = import.meta.env.VITE_API_KEY;

    const axiosOptions: AxiosRequestConfig = {
        headers: {
            "X-api-key": apiKey
        }
    }

    try {
        const response: AxiosResponse = await axios.get(url, axiosOptions);
        
        console.log(response.data);
    }
    catch(error: any) {
        console.error(error);
    }

}