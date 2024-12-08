import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Avatar from '../components/Avatar';

function Profile() {
  
  const { userName } = useParams()
  const name = "shivam";
  const leetcodeUsername = "vashisth11shivam";
  const [data, setData] = useState();

  const colorArray = [
    "bg-pink-500",
    "bg-red-300",
    "bg-yellow-500",
    "bg-blue-400",
    "bg-indigo-400"
  ]
  const randomNumber = Math.floor(Math.random() * 5);
  const color = colorArray[randomNumber];

  const getData = async () => {
    
    const leetcodeData = await axios.get(`https://leetcode-api-faisalshohag.vercel.app/${leetcodeUsername}`)
    const data = await leetcodeData.data
    setData(data)
    console.log(data); 
  }

  useEffect(()=>{
    getData()
    
  },[])


  return (
    <div className='h-screen flex flex-col'>
        <div className='flex justify-between p-2 bg-gray-400'>
          <div className='text-2xl'>Home</div>
          <div className='text-2xl'>{name[0].toUpperCase() + name.slice(1)}'s Data </div>
          <Avatar userName={userName} color={color}/>
        </div> 
        <div className={`bg-red-300 h-full grid grid-cols-3 grid-rows-2`}>
            <div className='col-span-2 m-2 border-2 border-black bg-white justify-center items-center flex'>

            </div>
            
            <div className='m-2 border-2 border-black bg-white justify-center items-center flex'>
              {
                data ? 
                  <div>
                      Questions Solved 
                      <br />
                      Total  : {data['totalSolved']}
                      <br />
                      Hard  : {data['hardSolved']}
                      <br />
                      Medium  : {data['mediumSolved']}
                      <br />
                      Easy  : {data['easySolved']}
                      
                  </div> 
                  : 
                  <div>Loading</div>
              }
                
            </div>
            <div className='m-2 border-2 border-black bg-white justify-center items-center flex'>A</div>
            <div className='m-2 border-2 border-black bg-white justify-center items-center flex'>A</div>
            <div className='m-2 border-2 border-black bg-white justify-center items-center flex'>A</div>
          
        </div>
      
    </div>
  )
}

export default Profile