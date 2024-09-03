import { useEffect, useState } from "react"


function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency])) //setdata to store api_data in data(useState) using func_parameter currency 
        // console.log(data);  //it's have key and key value
    }, [currency])
    // console.log(data);
    return data
}

export default useCurrencyInfo;