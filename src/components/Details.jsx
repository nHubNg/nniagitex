import React from 'react'
import { images } from './images'
import { RiArrowLeftRightFill } from "react-icons/ri";
const Details = () => {
  return (
    <div className='h-screen bg-primary '>
    <img src={images.vector} className='absolute w-96 right-0 buttom-[80%] blur-xl' alt="" />

    <div className='text-center text-white '>
        <h1 className='pt-20 text-4xl w-[34rem] mx-auto'>Traed helps your business save time every day!</h1>
        <p className='mx-auto w-[45rem]'>Traed offers a simple and clear accounting software that can be used anywhere at any. This allows a maximum of flexibility and convenience for you and your customers.</p>
    </div>
    <div className='flex justify-center items-center flex-row   '>
    <div className=' w-[20rem] flex items-center flex-col text-white  ml-5'>
        <span className='m-5 p-2 bg-[#7e869379] rounded-xl'>
            <div className='w-fit  bg-third p-2 '>
            <RiArrowLeftRightFill className=' text-center mx-auto text-2xl text-white ' />
            </div>
            <p className='uppercase font-medium text-sm text-white'>Invoice Discounting</p>
            <p className='text-xs mt-2 leading-5'>a financing method where a business sells its unpaid invoices to a third party at a discount to access immediate cash flow.</p>
        </span> 
        <span className='m-5 p-2 bg-[#7e869379]'>
        <div className='w-fit  bg-third p-2 '>
            <RiArrowLeftRightFill className=' text-center mx-auto text-2xl text-white ' />
            </div>
            <p className='uppercase font-medium text-sm text-white'>Invoice Discounting</p>
            <p className='text-xs mt-2 leading-5'>a financing method where a business sells its unpaid invoices to a third party at a discount to access immediate cash flow.</p>
        </span>
    </div>
    <div className=' w-[20rem] flex items-center flex-col text-white rounded-md ml-5'>
        <span className='m-5 p-2 bg-[#7e869379]'>
            <div className='w-fit  bg-third p-2 '>
            <RiArrowLeftRightFill className=' text-center mx-auto text-2xl text-white ' />
            </div>
            <p className='uppercase font-medium text-sm text-white'>Invoice Discounting</p>
            <p className='text-xs mt-2 leading-5'>a financing method where a business sells its unpaid invoices to a third party at a discount to access immediate cash flow.</p>
        </span> 
        <span className='m-5 p-2 bg-[#7e869379]'>
        <div className='w-fit  bg-third p-2 '>
            <RiArrowLeftRightFill className=' text-center mx-auto text-2xl text-white ' />
            </div>
            <p className='uppercase font-medium text-sm text-white'>Invoice Discounting</p>
            <p className='text-xs mt-2 leading-5'>a financing method where a business sells its unpaid invoices to a third party at a discount to access immediate cash flow.</p>
        </span>
    </div>
  
  
</div>

    </div>
  )
}

export default Details
