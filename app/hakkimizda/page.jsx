import React from 'react'
import {notFound} from 'next/navigation';


// const wait=async(ms)=>{
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

const Hakkımızda = async ({searchParams}) => {
  // await wait(3000)
  // if(searchParams.error==="true"){
  //   throw new Error("This is an error");
  // }
  if(searchParams.test==="true"){
 notFound()  
}
  return (
    <div>Hakkımızda</div>
  )
}

export default Hakkımızda