import React from "react";
import { useNavigate } from "react-router-dom";

import sushiRestaurant from '../assets/sushiRestaurant.jpg'
export function Home(props) {
 const navigate = useNavigate() 
  return (
    <div style={{ backgroundImage: `url(${sushiRestaurant})` }} className="bg-no-repeat bg-cover">
      {/* container */}
      <div
        className="w-[1000px] h-screen mx-auto flex justify-center items-center  "
        
      >
        <div>
          <h2 className="text-[60px] font-[500px] mb-4 text-center text-white">
            Welcome to Sushi Restaurant
          </h2>
          <div className="flex justify-center items-center mb-4  text-white">
            <p className="text-[25px] font-normal ">
              {" "}
              <span className="pl-6 ">
              Looking to eat something that tastes delicious and is also considered a health food? Then look no further than sushi! From now on, as you eat your sushi, you can thank yourself for doing a real service for your heart, brain, and general wellbeing.
              </span>{" "}
    
            </p>
          </div>
          <div className="flex justify-center items-center">

            <button  onClick={()=>navigate('/productspage')} className="border-none w-[250px] h-[80px] p-2 bg-white text-[30px] font-[300px]">
              Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
