import { useEffect, useState } from "react"


export const useFetchDictionary = (word = "keyboard")=> {

    const [data, setData] = useState(null);

    useEffect(()=>{
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => response.json())
        .then(data => setData(data[0]))
    }, [])

     
    return { data }    
}