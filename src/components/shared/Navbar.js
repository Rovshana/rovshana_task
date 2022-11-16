import React from "react";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export function Navbar(props) {
  const navigate = useNavigate();
  const cartTotalQuantity = useSelector(
    (state) => state.products.cartTotalQuantity
  );
  console.log("test", cartTotalQuantity);
  return (
    <div className="w-full h-[100px] bg-black text-[#f1d5bb] ">
      <div className="flex justify-between items-center">
        <div className="ml-5">
          <p
            onClick={() => navigate("/productspage")}
            className=" cursor-pointer font-black text-[30px] underline"
          >
            SushiTime{" "}
          </p>
        </div>

        <div className="mr-5">
          <div className="cursor pointer relative">
            <BsCart4 size={50} />
{
    cartTotalQuantity === 0? " " :  <span className="absolute top-0 right-0 text-black rounded-full bg-[#f1d5bb] text-center text-[20px] w-[30px] h-[30px]">
    { cartTotalQuantity}
  </span>
}
           
          </div>
        </div>
      </div>
    </div>
  );
}
