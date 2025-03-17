import React, { Children } from 'react'
import { useParams } from 'react-router-dom'
import stol from '../../assets/images/stoll.png'
import { Tabs } from 'antd';
import Meals from './Meals';
import Osh from '../../assets/images/ovqat.png'
import drink from '../../assets/images/choynak.png'
import salat from '../../assets/images/salat.png'

export default function Menu() {
const params = useParams()
const items = [
    {
        key: "1",
        label:"Menu",
        children: <Meals />
    }
]


return (
    <div className="container mx-auto w-[85%] max-w-screen-lg p-4">
      
      {/* Stol rasmi va ID */}
      <div className="flex flex-wrap items-center  gap-4">
        <img className="w-28 h-28 object-contain" src={stol} alt="stol" />
        <span className="text-2xl sm:text-3xl font-bold text-[#5B3A1D]">{params.id}</span>
      </div>
  
      {/* Kategoriyalar */}
      <div className="flex flex-wrap justify-center sm:justify-between gap-4 mt-6">
        <div className="flex items-center bg-[#5B3A1D] text-white font-bold px-6 py-3 rounded-lg shadow-md w-52 h-20">
          <img className="w-12 h-12 object-contain" src={Osh} alt="Taomlar" />
          <span className="text-lg sm:text-xl font-bold ml-2">Taomlar</span>
        </div>
        <div className="flex items-center bg-[#C69C6D] text-white font-bold px-6 py-3 rounded-lg shadow-md w-52 h-20">
          <img className="w-12 h-12 object-contain" src={drink} alt="Ichimliklar" />
          <span className="text-lg sm:text-xl font-bold ml-2">Ichimliklar</span>
        </div>
        <div className="flex items-center bg-[#D9A96E] text-white font-bold px-6 py-3 rounded-lg shadow-md w-52 h-20">
          <img className="w-12 h-12 object-contain" src={salat} alt="Salatlar" />
          <span className="text-lg sm:text-xl font-bold ml-2">Salatlar</span>
        </div>
      </div>
  
      {/* Tabs */}
      <div className="mt-8">
        <Tabs items={items} />
      </div>
  
    </div>
  );
  
}
