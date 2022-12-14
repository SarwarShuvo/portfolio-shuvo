import React from "react";
import image from "../Images/internship.png";
import image2 from "../Images/seo.png";
import image3 from "../Images/coding.png";


const Experience = () => {
  return (
    <div className="bg-gradient-to-r from-sky-300 via-purple-300 to-red-300">
      <section className="container mx-auto pt-1">
        < h2 className="text-3xl font-bold ml-10 mb-5 mt-16" > Working Experience</h2 >
        <div className="grid ml-10 mr-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-0 pb-24">
          <div className="flex flex-col items-center max-w-sm p-6 bg-white border drop-shadow-lg border-gray-200 rounded-lg hover:bg-white hover:shadow-[0px_0px_20px_3px_#63b3ed]">
            <img className="h-16" src={image3} alt="" />
            <h5 class="mb-5 mt-2 text-md font-[ZenDots] whitespace-nowrap tracking-widest font-extrabold text-black dark:text-white underline underline-offset-8">
              SOFTWARE ENGINEER
            </h5>
            <small class="font-normal text-gray-700">
              Janata Bank Ltd. <br />Gazipur, Dhaka
            </small>
          </div>
          <div className="flex flex-col items-center max-w-sm p-6 bg-white border drop-shadow-lg border-gray-200 rounded-lg hover:bg-white hover:shadow-[0px_0px_20px_3px_#63b3ed]">
            <img className="h-16" src={image2} alt="" />
            <h5 class="mb-5 mt-2 text-md font-[ZenDots] whitespace-nowrap tracking-widest font-extrabold text-black dark:text-white underline underline-offset-8">
              INTERNSHIP
            </h5>
            <small class="font-normal text-gray-700">
              Janata Bank Ltd. <br />Gazipur, Dhaka
            </small>
          </div>
          <div className="flex flex-col items-center max-w-sm p-6 bg-white border drop-shadow-lg border-gray-200 rounded-lg hover:bg-white hover:shadow-[0px_0px_20px_3px_#63b3ed]">
            <img className="h-16" src={image} alt="" />
            <h5 class="mb-5 mt-2 text-md font-[ZenDots] whitespace-nowrap tracking-widest font-extrabold text-black dark:text-white underline underline-offset-8">
              INTERNSHIP
            </h5>
            <small class="font-normal text-gray-700">
              Janata Bank Ltd. <br />Gazipur, Dhaka
            </small>
          </div>
        </div>
      </section >
    </div>
  );
};

export default Experience;
