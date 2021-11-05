import React from "react";
import PRODUCTS from "../mocks/products-mock";
console.log(PRODUCTS);

export default class Home extends React.Component {
   render() {
      return (
         <div className="Home">
            <div className="w-full grid grid-cols-1 gap-3 md:grid-cols-1 lg:grid-cols-2">
               <div className="self-center space-y-6 text-center my-4">
                  <h2 className="font-semibold text-4xl">We help you to grow your business</h2>
                  <p className="text-gray-600 w-3/4 mx-auto">Our online platform allows you to create amazing things. Thousands have joined us.</p>
                  <button className="py-2 px-4 font-medium text-white bg-gray-700 hover:bg-gray-800 rounded-sm shadow-md">
                     Join now
                  </button>
               </div>
               <div>
                  <img className="rounded-md" src="https://picsum.photos/id/238/1000/600" alt="landing" />
               </div>
            </div>
         </div>
      );
   }
};