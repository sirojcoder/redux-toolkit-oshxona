import { useSelector } from "react-redux";
import { useState } from "react";
import { Empty } from "antd";

export default function Oshpaz() {
  const selector = useSelector((state) => state.OrderSlice);
  const [order, setOrder] = useState(null);
  const [activeClient, setActiveClient] = useState(null);

  const getOrders = (id) => {
    let finded_order = selector.value?.find((item) => item?.client == id);
    setOrder(finded_order.orders);
    setActiveClient(id);
  };

  return (
    <div className="container mx-auto w-[90%] md:w-[80%] py-7">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
        <div className="md:col-span-1">
          <h2 className="text-lg text-[#3A3A3A] font-bold mb-4 text-center md:text-left">
            Stollar
          </h2>

          <div className="flex md:flex-col flex-wrap gap-3 justify-center">
            {selector?.value.map((item) => (
              <button
                key={item?.client}
                onClick={() => getOrders(item?.client)}
                className={`flex justify-center items-center p-4 border rounded-lg shadow-md transition-all w-[130px] h-[60px] text-lg font-semibold
                ${
                  activeClient === item?.client
                    ? "border-green-500 bg-green-100 text-green-700"
                    : "border-gray-300 bg-white text-gray-600"
                }`}
              >
                Stol {item?.client}
              </button>
            ))}
          </div>
        </div>

       
        <div className="md:col-span-2">
          <h2 className="text-lg font-bold mb-4 text-[#3A3A3A] text-center md:text-left">
            Buyurtmalar
          </h2>

          {order?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {order.map((item, i) => (
                <div
                  key={i}
                  className="bg-white border-l-4 border-green-500 p-5 rounded-lg shadow-md text-lg font-semibold flex justify-between items-center"
                >
                  <p>{item?.name}</p>
                  <span className="text-green-700 text-xl">{item?.count}x</span>
                </div>
              ))}
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
}
