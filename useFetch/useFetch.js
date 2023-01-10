import { useEffect, useState } from "react"


export const useFetch = ( url ) => {

  const [fetchData, setData] = useState({ data:null, isLoading:true, hasError:null });  

  const { data, isLoading, hasError } = fetchData;


  const getFetch = async () =>{

    setData({...fetchData, isLoading:true});

    try {

        const resp = await fetch(url);
        
        const responseData = await resp.json();  
       
    
        setData( {...fetchData, data:responseData, isLoading:false} );
       
        
    } catch (error) {
      

        setData( {...fetchData, hasError:error.toString(), isLoading:false} );
    }
   

    
  }  

  useEffect(() => {      

    getFetch(); 
    
   
  }, [url])
    




  return {
    data,
    isLoading,
    hasError
  }
}
