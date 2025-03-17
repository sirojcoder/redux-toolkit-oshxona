import { Link } from "react-router-dom"
import { clients } from "../../Constants"
import stol from '../../assets/images/stoll.png'

const RootGirgitton = ()=>{


    return(
        <div className="container mx-auto w-[85%]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto">
            {
                clients.map((item)=>{
                   return(
                    <div key={item?.key}>
                        <Link to={`/client/${item.key}`}> 
                        <img className="w-full h-[300px] object-contain" src={stol}/>                  
                        </Link>
                    </div>
                   )
                })
            }
            </div>
          
        </div>
    )
}

export default RootGirgitton