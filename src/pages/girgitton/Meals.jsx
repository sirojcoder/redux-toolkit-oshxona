import { Button } from 'antd';
import {meals , drinks , salat} from '../../Constants'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useState, useSyncExternalStore } from 'react';
import { useSelector } from 'react-redux';


 const Meals = ()=> {
   
    const selector = useSelector((state)=> (state?.OrderSlice))
    console.log(selector);
    



    const [productList, setProductList] = useState([
        ...meals.map((item, index) => ({ ...item, count: 0, id: `meal-${index}` })),
        ...drinks.map((item, index) => ({ ...item, count: 0, id: `drink-${index}` })),
        ...salat.map((item, index) => ({ ...item, count: 0, id: `salat-${index}` })),
    ]);
    

    const incr = (id) => {
        setProductList(prevList => prevList.map(item => 
            item.id === id ? { ...item, count: item.count + 1 } : item
        ));
    };
    
    const decr = (id) => {
        setProductList(prevList => prevList.map(item => 
            item.id === id && item.count > 0 ? { ...item, count: item.count - 1 } : item
        ));
    };
     

    
    return (
        <div className="max-w-screen-lg mx-auto p-4">
          
          {/* Taomlar */}
          <p className="text-center text-3xl border-b text-[#5B3A1D] font-bold mb-6">Taomlar</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList.filter(item => item.category === 'meal').map((item, i) => (
              <div 
                key={item.id} 
                className="bg-white rounded-lg shadow-lg p-4 transition-transform duration-300 hover:scale-105 text-center"
              > 
                <img className="w-full h-[209px] object-contain rounded-md" src={item.image} alt={item.name} />
                <p className="text-xl font-semibold py-3">{item.name}</p>
                <p className="text-gray-700">Narxi: <span className="font-bold">{item.price}</span></p>
               <div className='flex justify-center items-center gap-2 pt-2'>
                    <Button icon={<MinusOutlined />} onClick={()=>{decr(item.id)}}/>
                    <span className='text-2xl font-semibold'>{item.count}</span>
                    <Button  icon={<PlusOutlined />} onClick={()=>{incr(item.id)}}/>
               </div>
              </div>

            ))}
          </div>
      
          {/* Ichimliklar */}
          <p className="text-center  border-b text-3xl text-[#5B3A1D] font-bold mt-12 mb-6">Ichimliklar</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList.filter(item => item.category === 'drink').map((item, i) => (
              <div 
                key={item.id} 
                className="bg-white rounded-lg shadow-lg p-4 transition-transform duration-300 hover:scale-105 text-center"
              > 
                <img className="w-full h-[209px] object-contain rounded-md" src={item.image} alt={item.name} />
                <p className="text-xl font-semibold py-3">{item.name}</p>
                <p className="text-gray-700">Narxi: <span className="font-bold">{item.price}</span></p>
                <div className='flex justify-center items-center gap-2 pt-2'>
                            <Button icon={<MinusOutlined />} onClick={() => { decr(item.id) }} />
                            <span className='text-2xl font-semibold'>{item.count}</span>
                            <Button icon={<PlusOutlined />} onClick={() => { incr(item.id) }} />
                        </div>
              </div>
            ))}
          </div>

          <p className="text-center  border-b text-3xl text-[#5B3A1D] font-bold mt-12 mb-6">Salatlar</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList.filter(item => item.category === 'salat').map((item, i) => (
              <div 
                key={item.id} 
                className="bg-white rounded-lg shadow-lg p-4 transition-transform duration-300 hover:scale-105 text-center"
              > 
                <img className="w-full h-[209px] object-contain rounded-md" src={item.image} alt={item.name} />
                <p className="text-xl font-semibold py-3">{item.name}</p>
                <p className="text-gray-700">Narxi: <span className="font-bold">{item.price}</span></p>
                <div className='flex justify-center items-center gap-2 pt-2'>
                            <Button icon={<MinusOutlined />} onClick={() => { decr(item.id) }} />
                            <span className='text-2xl font-semibold'>{item.count}</span>
                            <Button icon={<PlusOutlined />} onClick={() => { incr(item.id) }} />
                        </div>
              </div>
            ))}
          </div>
      
        </div>
      );
      
      
}

export default Meals