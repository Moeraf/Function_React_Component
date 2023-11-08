import React, {useState,useEffect} from "react";
import axios from 'axios';
export default function UseAxiosJoin(){

    const getData = ()=>{
    //     fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // .then(json =>{
    //     console.log('hello fetch the number has changed');
    //   setData(json)
    // })

    // axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then((res)=> {
    //         // console.log(res.data);
    //         setData(res.data)
    //     })

    let urls = [
        "https://api.storyblok.com/v2/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt",
        "https://api.storyblok.com/v2/cdn/datasources/?token=wANpEQEsMYGOwLxwXQ76Ggtt",
        "https://api.storyblok.com/v2/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt",
      ];
      const requests = urls.map((url) => axios.get(url));
      axios.all(requests).then((responses) => {
        responses.forEach((resp) => {
          let msg = {
            server: resp.headers.server,
            status: resp.status,
            fields: Object.keys(resp.data).toString(),
          };
          console.info(resp.config.url);
          console.table(msg);
        });
      });
}

    const [data,setData] = useState([])
    const [name,setName] = useState(0)

    useEffect(()=>{getData()},[name])
    return(
        <>
            <h1>--------------------</h1>
            <h1>HOW TO Use Axios Join</h1>
            <h1>{data.length}</h1>
            <button onClick={()=>{setName(current=>current +1)}}>change nb</button> {name}
        </>
    )
}