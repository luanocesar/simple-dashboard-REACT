import { useState, useEffect } from 'react';

const useFetch = (url)=>{

    const [data , setData] = useState(null)

    useEffect(
        ()=>{
            const response = async ()=>
            {
                await fetch(url);
                //alert(response)
                const result = await response.json();
                //alert("after result = await response.json(), codigo : "+JSON.stringify(result))
                setData(result)
            }
        },
        [url]
    )

    return(data)
}

export default useFetch