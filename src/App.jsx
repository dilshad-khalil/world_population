import { useEffect, useState } from 'react'
import axios from 'axios'
import Requests from './Components/requests';
function App() {

  const [subscribers, setSubscribers] = useState('');

  const fetchData = async () => {
    axios.request(Requests).then(resp => {
      setSubscribers(resp.data)
      console.log(resp)
    }).catch(err => {
      console.log(err)
    })
  }

  
  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
  }, 400);
  return () => clearInterval(interval);
  }, []);
  

  return (
    <div className="w-screen h-screen p-2 bg-[#2A263E] flex justify-center items-center flex-col gap-4">
      <h1 className='tracking-wide text-4xl uppercase text-slate-200 text-center'>World Current Subscribers</h1>
      <div className='group flex flex-col items-center'>
        <p className='text-slate-300 text-2xl tracking-wide'>{subscribers.readable_format}</p>
        <p className='hidden group-hover:block text-slate-400 text-sm tracking-wide '>and you're still single :(</p>
      </div>
    </div>
  )
}

export default App
