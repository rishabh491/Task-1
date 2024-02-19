import { useEffect, useState } from "react";




function App() {

  const[details,setDetails]=useState(null)

  useEffect(()=>{
    const data = async()=>{
    const res=await fetch(" https://randomuser.me/api/?page=1&results=1&seed=abc");
    const response= await res.json();
   
    return response;
  }

data().then(res=>{
  setDetails(res);
})},[])


	return (
    <>
   
    {details&&
      <div class="ml-80 mt-20 h-100 w-1/2   border-2 border-solid-black border-black flex ">
      <img src="https://randomuser.me/api/portraits/women/88.jpg" className="pl-10 pt-10 pb-10"></img>
      <div className="flex flex-col ml-20">
      <div className="pl-8 space-x-3 flex pt-8 text-2xl "> <p className="">{details.results[0].name.first}</p><p className="text-2x">{details.results[0].name.last}</p></div>
      <div className=" pl-8 space-x-3 flex pt-8 text-2xl">{details.results[0].gender}</div>
      {console.log(details.results[0].registered)}
      <div className="pl-8 space-x-3 flex pt-8 text-2xl">{details.results[0].phone}</div>
      </div>
      
      
</div>}
      
    </>
        
	);
}

export default App;
