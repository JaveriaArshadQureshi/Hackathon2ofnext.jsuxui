import { CheckCircle, CheckCircle2 } from "lucide-react";
import React from "react";

const Email = () => {
  return (
    <div>
      <div className="md:bg-[url('/images/Email.jpg')] bg-center pb-0 m-auto  max-sm:hidden max-sm:h-[218px] bg-no-repeat h-[600px] w-full flex items-center justify-center ]">
        <div className="w-[600px] ">
          <h2 className="text-[32px]   pt-20 text-white">
            Join the club and get the benefits
          </h2>
          <div className="w-[495px] text-center">
            <p className="text-[16px] text-white max-sm:text-xs  text-center pt-5">
              Sign up for our newsletter and receive exclusive offers on new
              ranges, sales, pop up stores and more
            </p>
          </div>

          <div className="flex gap-9 pt-6  max-sm:flex-col max-sm:pt-2  max-sm:text-xs">
            <div className="flex text-white  max-sm:text-xs max-sm:gap-1 gap-2 pt-4">
              <CheckCircle2 />
              <span>Exclusive offers</span>
            </div>
            <div className="flex text-white gap-2 pt-4">
              <CheckCircle2 />
              <span>Free events</span>
            </div>
            <div className="flex text-white gap-2 pt-4">
              <CheckCircle2 />
              <span>Large discounts</span>
            </div>
          </div>

          <div className=" pt-6 pb-[100px] ">
            <input
              type="text"
              placeholder="your@email.com"
              className=" bg-white text-white focus:outline-none bg-opacity-10 relative px-[100px] py-4"
            />
            <button className="bg-[#2A254B] text-white py-4 px-6 hover:bg-opacity-80">
              Sign up
            </button>
          </div>
        </div>
      </div>
  {/* responsive */}
      <div className="max-sm:bg-[url('/images/Emailsm.jpg')] text-white text-start py-10 px-5 md:hidden">
      <h2 className="text-xl pt-2">
            Join the club and get the benefits
          </h2>
          <p className=" text-white max-sm:text-xs  text-start pt-3">
              Sign up for our newsletter and receive exclusive offers on new
              ranges, sales, pop up stores and more
            </p>
            <div className="flex text-white  max-sm:text-xs gap-1 pt-4">
              <CheckCircle2 />
              <span className="pt-1 pl-0 ">Exclusive offers</span>
            </div>
          <div className="flex text-white  max-sm:text-xs pt-1 gap-1 ">
              <CheckCircle2 />
              <span className="pt-1 pl-0 ">Free events</span>
            </div>
            <div className="flex text-white max-sm:text-xs  gap-1 pt-1">
              <CheckCircle2 />
              <span className="pt-1 pl-0 ">Large discounts</span>
            </div>
            
      <div className="pb-2 pt-5">
            <input
              type="text"
              placeholder="your@email.com"
              className=" bg-white text-white focus:outline-none bg-opacity-10 relative px-1 py-3 "
            />
            <button className="bg-[#2A254B] text-sm text-white px-2 py-3 hover:bg-opacity-80">
              Sign up
            </button>
            </div>
      </div>
    </div>
  );
};

export default Email;
