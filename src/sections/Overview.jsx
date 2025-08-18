import React from 'react';
import image from '../assets/gallery/image7.png';
import Button from '../components/button/buttonMain';
import { useLeadTracking, LEAD_SOURCES } from '../hooks/useLeadTracking';

// Overview Component
export const Overview = ({ openContactModal }) => {
  const { trackButtonClick } = useLeadTracking();
  return (
    <div className="bg-PrestigeGrey">
      <section
        className="w-full flex flex-wrap items-center justify-center gap-[20px] mx-auto pb-10 md:py-16 px-5 md:px-[7.5rem]"
        id="Overview"
      >
        {/* Overview Text Section */}
        <div className="flex flex-col justify-center items-center text-center gap-8 h-full md:items-start md:text-left">
          <h1 className="font-subheading font-normal text-3xl md:text-5xl text-black uppercase">
            Overview
          </h1>
          <p className="max-w-2xl md:text-base text-sm text-black font-body font-light">
          <span className="font-body font-bold text-xs md:text-lg ">
         Prestige Grren Brook – Premium Plotted Development on IVC Road, North Bengaluru. <p>The plotted development extends over an area of 20 acres and hosts the best plots of dimension range of 1,500 sq. ft. to 2400 sq. ft. in the heart of the city. </p>

          </span>
          <br />
          
            <span>
            <p>The project has 40+ modern amenities, including children’s play areas, fitness centres, swimming pools, a spa, a gym, a library, etc.   </p>
            <br/>
            <p>These ready to build plots in Bangalore come with wide internal roads and underground utilities. Whether you’re planning to construct your dream home or invest in residential plots near Bangalore Airport, Prestige Green Brook is the perfect place.</p>

            

</span>
          </p>

          {/* Enquire Now Button using the reusable Button component */}
          <Button
                text="Enquire Now!"
                className=""
                onClick={() => {
                  trackButtonClick(LEAD_SOURCES.OVERVIEW, 'enquire_now', 'Overview Section CTA');
                  openContactModal(LEAD_SOURCES.OVERVIEW);
                }}
              />
          
        </div>

        {/* Image and Download Button Section */}
        <div className="hidden md:flex flex-col items-center">
          {/* Image Section */}
          <div className="w-full h-auto flex justify-center border-PrestigeDarkGrey">
            <img
              src={image}
              alt="Prestige Green Brook"
              className=" w-[420px] h-[300px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
