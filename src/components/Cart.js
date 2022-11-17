import React from "react";
import { useEffect } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseQuantity, removeItem, getTotal} from "../store/slices/ProductSlice";

export function Cart (props) {
  const product = useSelector((state) => state.products);
  console.log("cart", product);
const dispatch = useDispatch();
useEffect(() => {
  dispatch(getTotal())
}, [product, dispatch])

  return (
    <>
      {/* container */}
      <div className="w-[1200px]  mx-auto flex pt-4">
        {/* cart page products */}

        <div>
          
          <div className=" w-[600px] h-[600px]   bg-[#F1D5BB] pt-4 ">
            {product.cartItems?.map((item) => (
              <div className="flex justify-between mb-2 " key={item.id}>
                <div className="pl-3 pr-3 flex justify-between  ">
                  <img
                    src={item.photo}
                    alt="test"
                    className="rounded-full w-[70px] h-[70px]"
                  />
                  <div className="ml-3 pl-2">
                    <p className="text-black text-[20px] font-medium">
                      {item.name}
                    </p>
                    <p className="text-black text-[20px]"> ${item.price}</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="cursor-pointer">
                    {" "}
                    <AiOutlineMinus size={30} color="#00000099" onClick={()=>dispatch(decreaseQuantity(item))} />{" "}
                  </div>
                  <span className="w-[12px] h-[25px] bg-white p-3  ml-2 mr-2 flex justify-center items-center">
                    {item.cartQuantity}
                  </span>
                  <div
                    className="cursor-pointer"
                    
                  >
                    {" "}
                    <AiOutlinePlus size={30} color="#00000099" onClick={()=>dispatch(addToCart(item))} />{" "}
                  </div>
                </div>
                <div
                  className="pr-3 cursor-pointer"
                  
                >
                  <RiDeleteBin2Fill size={30} color="#00000099" onClick={()=>dispatch(removeItem(item))} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* total */}
        <div className="w-[400px] h-[550px] ml-4   border-2">
          <div className="bg-[#F1D5BB] h-[275px]">
            <h2 className="text-[40px] text-black pl-3">Your Subtotal</h2>
            <div className="pl-3 mb-8 flex">
              <h3 className="text-[20px] text-black font-medium">Subtotal:</h3>
              <span className="pl-4 text-[20px] text-black font-medium">
                ${product.cartTotalAmount}
              </span>
            </div>
            <div className="pl-3">
              <button className="border-none w-[364px] p-4 bg-black text-white">
                Confirm Order
              </button>
            </div>
          </div>
          {/* promo code  */}
          <div className="">
            <h2 className="pl-3 text-[40px] text-black">Promo Code</h2>
            <div className="pl-3 px-5 mt-5 mb-5">
              <input
                type="text"
                className="caret-white border-2 p-4"
                placeholder="Enter Promo Code"
              />
            </div>
            <div className="pl-3">
              <button className="bg-black border-none w-[166px]  text-white p-3">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
