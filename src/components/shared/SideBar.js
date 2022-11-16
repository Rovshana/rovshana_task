import React from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { CiForkAndKnife } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { MdLocationOn, MdLogout } from "react-icons/md";

export function Sidebar(props) {
    const navigate = useNavigate()
  return (
    <div className="w-[134px] h-[700px] bg-black flex flex-col  items-center m-4  ">
      <div className="mb-10 pt-5  ">
      
      </div>
      <div  className="icon cursor-pointer w-full h-[50px] mb-10 hover:bg-[#f1d5bb] hover:text-black flex  justify-center items-center">
        <HiOutlineHome onClick={()=>navigate('/')} size={30} />
      </div>
      <div onClick={()=>navigate('/productspage')}   className="icon cursor-pointer w-full h-[50px] mb-10 hover:bg-[#f1d5bb] hover:text-black flex  justify-center items-center">
        <CiForkAndKnife  size={30} />
      </div>
      <div  onClick={()=>navigate('/cartpage')}  className="icon cursor-pointer w-full h-[50px] mb-10 hover:bg-[#f1d5bb] hover:text-black flex  justify-center items-center">
        <BsCart3 size={30} />
      </div>
      <div className="icon cursor-pointer w-full h-[50px] mb-10 hover:bg-[#f1d5bb] hover:text-black flex  justify-center items-center">
        <MdLocationOn size={30} />
      </div>
      <div className="icon cursor-pointer w-full h-[50px] mb-10 hover:bg-[#f1d5bb] hover:text-black flex  justify-center items-center">
        <MdLogout size={30} />
      </div>
    </div>
  );
}
