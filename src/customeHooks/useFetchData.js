import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";

const useFetchData = () => {
    const {isUrl, setIsUrl} = useState(null)
    const fetchData = async(url) =>{
        try {
            const api = await fetch(url, API_OPTIONS);
            const jsonData = await api.json()
            console.log(jsonData);
            setIsUrl(jsonData)
        } catch (error) {
            console.error("Internal Error", error);
        }
    }
    useEffect(()=>{
        fetchData();
    }, [])

    return isUrl;
}

export default useFetchData
