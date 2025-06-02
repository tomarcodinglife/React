import { useEffect, useState } from "react";

function useCurrencyInfo (currency) {
    const [data, setData] = useState({})
    useEffect(()=>{
        let apiurl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        fetch(apiurl)
        .then((response)=>{
            return response.json()
        })
        .then((response)=>{
            setData(response[currency])
        })
    },[currency])
    return data
}

export default useCurrencyInfo;