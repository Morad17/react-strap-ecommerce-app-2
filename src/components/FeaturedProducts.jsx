import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FeaturedProducts = () => {

  const [ data, setData ] = useState([])

  useEffect=(()=> {
    const fetchData = async () => {
      try{
        const res = await axios.get(process.env.REACT_APP_API_URL+"/products",{
          headers:{Autorization: "bearer" + process.env.REACT_APP_API_TOKEN,}
        })
        setData(res.data.data)
        console.log(data);
      } catch(err) {
        console.log(err) 
      }
    }
    fetchData()
    
  }, [])

  return (
    <div className="featured-products">
        <div className="top">
            <h1> products</h1>
        </div>
        <div className="bottom">
          items
            {data.map((item)=> {
              <div className="title">
                <h1>{item?.title}</h1>
              </div>
            })}
        </div>
    </div>
  )
}

export default FeaturedProducts