

import { useSelector, useDispatch } from "react-redux";
import stol from "../../assets/images/stoll.png";
import { useState } from "react";
import { Empty, Button } from "antd";
import { removeClient } from '../../store/OrderSlice' 

const Check = () => {
  const selector = useSelector((state) => state.OrderSlice);
  const dispatch = useDispatch();
  const [order, setOrder] = useState(null);
  const [activeClient, setActiveClient] = useState(null);

  const getTotalPrice = (orders) => {
    return orders?.reduce((sum, item) => {
      const price = parseInt(item.price.toString().replace(/\D/g, ""));
      const count = parseInt(item.count) || 0;
      return sum + price * count;
    }, 0);
  };

  const getOrders = (id) => {
    let finded_order = selector.value?.find((item) => item?.client === id);
    setOrder(finded_order.orders);
    setActiveClient(id);
  };

  const clearOrder = () => {
    if (activeClient) {
      dispatch(removeClient(activeClient)); 
      setOrder(null);
      setActiveClient(null);
    }
  };

  return (
    <div className="container mx-auto w-[90%] md:w-[85%] py-7">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-5">
        {/* Stollar */}
        <div className="md:col-span-1 border-r-0 md:border-r-2 border-gray-300 pr-0 md:pr-5">
          <h2 className="text-lg text-[#5B3A1D] font-semibold mb-4 text-center md:text-left">
            Stollar
          </h2>

          <div className="flex md:flex-col flex-wrap gap-3 justify-center">
            {selector?.value.map((item) => (
              <button
                key={item?.client}
                onClick={() => getOrders(item?.client)}
                className={`flex flex-col items-center p-3 border rounded-lg shadow-sm hover:bg-gray-100 transition-all w-[120px]
                ${
                  activeClient === item?.client
                    ? "border-blue-500 bg-blue-100"
                    : "border-gray-300"
                }`}
              >
                <img src={stol} alt="stol" className="w-14 h-14 mb-2" />
                <p className="text-sm font-medium">Stoll: {item?.client}</p>
              </button>
            ))}
          </div>
        </div>

        
        <div className="md:col-span-2">
          <h2 className="text-lg font-semibold mb-4 text-[#5B3A1D] text-center md:text-left">
            Buyurtmalar
          </h2>
          {order?.length > 0 ? (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {order.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-200 p-4 rounded-lg shadow-md flex flex-col items-center text-center"
                  >
                    <img
                      src={item?.image}
                      alt=""
                      className="w-20 h-20 object-contain rounded-md mb-2"
                    />
                    <p className="text-sm font-medium">Nomi: {item?.name}</p>
                    <p className="text-sm ">Narxi: {item?.price}</p>
                    <b className="text-[#5B3A1D]">Soni: {item?.count}</b>
                  </div>
                ))}
              </div>

            
              <div className="mt-5 p-4 bg-blue-100 text-[#5B3A1D] font-semibold rounded-lg shadow-md text-center flex justify-between items-center">
                <span>Umumiy narx: {getTotalPrice(order).toLocaleString()} so‘m</span>
                <Button onClick={clearOrder} type="primary" danger>
                  Yakunlash
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center h-32">
              <Empty description="Buyurtmalar mavjud emas" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Check;
