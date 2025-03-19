import { Button } from 'antd';
import {meals , drinks , salat} from '../../Constants'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useState, useSyncExternalStore } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOrder } from '../../store/OrderSlice';
import { Link, useParams } from 'react-router-dom';
import Check from './Check';


 const Meals = ()=> {
   
    const selector = useSelector((state)=> (state?.OrderSlice))
    const dispatch = useDispatch()
    const params = useParams()
    
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
     

    const setCart = () => {
        if (!params?.id) {
            console.error("Mijoz ID topilmadi!");
            return;
        }
      
        const filtered = productList.filter(item => item.count > 0);
    
        dispatch(setOrder({
            client: params.id,
            orders: filtered
        }));
    };
    



    return (
        <div className="max-w-screen-lg mx-auto p-4">      
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
         <div className='flex justify-end gap-6'>
         <div className='flex  pt-9'>
  <button 
    onClick={() => setCart()} 
    className="bg-blue-500 hover:bg-blue-300 text-white font-bold text-lg py-3 px-11 rounded-xl transition duration-300 shadow-lg"
  >
    Tasdiqlash
  </button>
</div>
<div className='flex  pt-9'>
  <button 
    
    className="bg-[#5B3A1D] hover:bg-[#9B3D11] !text-white font-bold text-lg py-3 px-11 rounded-xl transition duration-300 shadow-lg"
  >
    <Link to={'/check'}>
    🛒 Korzinka
    </Link>
   
  </button>
</div>

         </div>

      
        </div>
      );     
}

export default Meals