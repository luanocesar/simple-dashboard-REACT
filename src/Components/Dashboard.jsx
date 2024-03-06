import { useEffect, useState} from 'react';
import useFetch from './useFetch.js'

const Dashboard = ()=>{
    const [data, setData] = useState(null)
    

    useEffect(
        ()=>{
            fetch('https://dummyjson.com/products/1')
            .then(response=>response.json())
            .then(result=>setData(result))
        },
        []
    )

    useEffect(
        ()=>{
            if(data){
                alert(JSON.stringify(data))
            }
        }
        ,
        [data]
    )

    return(
        <>
            {data && JSON.stringify(data)}
        </>
    )
}

export default Dashboard;