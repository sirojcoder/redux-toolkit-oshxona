import { Button, Form, Modal } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import Input from 'antd/es/input/Input'
import React from 'react'
import { users } from '../Constants'
import { useNavigate } from 'react-router-dom'

export default function Login() {
 const navigate = useNavigate()

 const getStorage = ()=>{
    localStorage.setItem("isAuth" , true)
 }

const loginHandle = (values)=>{
  let findedUser = users.find((user)=>(user.full_name == values.full_name && user.password == values.password))
 if(!findedUser){
    Modal.error({
        title: "Login yoki parol xato!",
        content: <p>Qayta urinib ko'ring</p>  // ✅ To‘g‘ri
     });
 }
 if(findedUser.role == "oshpaz"){
    navigate('/oshpaz')
    getStorage()
 }else if(findedUser.role == "girgitton"){
    navigate('/girgitton')
    getStorage()
 }
  
}



  return (
    <div className='container mx-auto w-[85%] h-screen flex justify-center items-center'>
        <div className='w-[450px] shadow-xl rounded-lg py-4 px-5 '>
            <p className='text-center text-blue-700 font-bold text-[28px] py-4'>Log in</p>

        <Form layout='vertical'
        size='large'
        onFinish={loginHandle}
        >
            <Form.Item
             label={"Ismingizni kiriting"}
             name={"full_name"}
             rules={[
                {
                    required:true,
                    message:"Iltimos ismingizni kiriting!"
                }
             ]}
            >
               <Input />
            </Form.Item>
            <Form.Item
            label={"Parolingizni kiriting"}
            name={"password"}
            rules={[
                {
                    required:true,
                    message:"Iltimos parolingizni kiriting!"
                }
            ]}
            >
 
                <Input.Password/>
            </Form.Item>
            <Form.Item>
                <div className='flex justify-center'>
                <Button htmlType='submit' color='primary' variant='solid'>Kirish</Button>
                </div>
            </Form.Item>
        </Form>
        </div>
    </div>
  )
}
