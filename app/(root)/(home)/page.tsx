//@ts-nocheck
'use client';

import MeetingTypeList from '@/components/MeetingTypeList';
import { useGetCalls } from '@/hooks/useGetCalls';
import React from 'react'
import { Call } from '@stream-io/video-react-sdk';


const Home = () => {

  const { upcomingCalls } = useGetCalls();

  let date = 'No Upcoming Calls';
  if (upcomingCalls && upcomingCalls.length > 0) {
    const latestCall = upcomingCalls[0];
    if (latestCall instanceof Call) {
      date = 'Upcoming Call at ' + latestCall.state?.startsAt?.toLocaleString();
    }
  }
  
  // console.log(date); // Print the result to check
  
    
  


  const now = new Date();
  const istTime = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' });
  const istDate = (new Intl.DateTimeFormat('en-IN', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', timeZone: 'Asia/Kolkata' })).format(now);

  // Manually add comma after the day of the week
  const istDateWithComma = istDate.replace(/\s(\d+)/, ', $1');
  
  // console.log("Indian Standard Time (IST):", istTime);
  // console.log("Indian Standard Date (IST):", istDateWithComma);

  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <div
        className='h-[300px] w-full rounded-  [20px] bg-hero bg-cover'
      >
        <div
          className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'
        >
          <h2
            className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal'
          >
            {date}
          </h2>
          <div 
            className='flex flex-col gap-2'
          >
            <h1 className='text-4xl font-extrabold lg:text-7xl uppercase'>
              {istTime} 
            </h1>
            <p
              className='text-lg font-medium text-sky-1 lg:text-2xl'
            >
              {/* {istDateWithComma} */}
              {istDate}
            </p>

          </div>
        </div>
      </div>

      <MeetingTypeList/>
    </section>
  )
}

export default Home;