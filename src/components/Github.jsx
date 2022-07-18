import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Github = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [err,setErr] = useState(false);


    useEffect(() => {
        handleFetch()
    },[])
    const handleFetch = () => {
        setLoading(true)
        fetch(`https://api.github.com/users`)
        .then((res) => res.json())
        .then((res) => {
            setData(res);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setErr(true)
        })
    }
  return (
    <div>
        <h1>GitHub users List</h1>
      {
        (loading)?<h1>Loading...</h1>:(err)?<h1>Something went wrong...</h1>:data.map((e) => (
            <div>
                <h3>
                    {e.login}
                </h3>
            </div>
        ))
      }
    </div>
  )
}

export default Github
