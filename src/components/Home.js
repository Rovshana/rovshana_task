import React from "react";

import sushiRestaurant from '../assets/sushiRestaurant.jpg'
export function Home(props) {
  
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
                People eat with their eyes and Sushi creates an easy way for
              </span>{" "}
              customers to order when they can see beautiful photos of your food
            </p>
          </div>
          <div className="flex justify-center items-center">

            <button  className="border-none w-[250px] h-[80px] p-2 bg-white text-[30px] font-[300px]">
              Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
