import React, { useEffect } from 'react'

const App = () => {
let isLoading=true;
  let API ="http://hn.algolia.com/api/v1/search?query=html"
  
  const fetchApiData =async (url)=>{
try {
  const res = await fetch(url);
  const data= await res.json();
  console.log(data);
} catch (error) {
  console.log(error)
}
  }
  useEffect(()=>{
    fetchApiData(API)
  },[]);
  if(isLoading){
    return <>
    <h1>Loading....</h1>
    </>
  }
  return (
    <div>
      <h1>My tech News post     </h1>

    </div>
  )
}

export default App
