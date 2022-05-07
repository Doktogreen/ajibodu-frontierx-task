import Image from "next/image";
import React, { useState } from "react";

export default function Buttons() {
  const [effect, setEffect] = useState(false);
  return (
      <div className="flex w-full mt-5 min-h-5 flex-wrap justify-center items-center">
        <div
          className={`${ effect && "animate-wiggle"} 
          bg-transparent-500 button-media button-media-one items-center
          px-5 mr-3 py-3 mt-2 text-white rounded hover:bg-transparent-700 
          hover:shadow-xl flex top-0 left-0 right-0 bottom-0`}
          onClick={() => {
            setEffect(true);
          }}
          onAnimationEnd={() => setEffect(false)}
        >
          <Image
            src="https://res.cloudinary.com/skiltime/image/upload/v1651817547/Vector_xvesja.png"
            width={17}
            height={17}
          />
           <p className="pl-2">Schedule call</p>
        </div>
        <div
          className={`${ effect && "animate-wiggle"} 
          bg-transparent-500 button-media button-media-two items-center
          px-5 py-3 mr-3 mt-2 text-white rounded hover:bg-transparent-700 
          hover:shadow-xl flex top-0 left-0 right-0 bottom-0`}
          onClick={() => {
            setEffect(true);
          }}
          onAnimationEnd={() => setEffect(false)}
        >
          <Image
            src="https://res.cloudinary.com/skiltime/image/upload/v1651817547/Group_ny8eou.png"
            width={17}
            height={17}
          />
           <p className="pl-2">See our demo</p>
        </div>
        <div
          className={`${ effect && "animate-wiggle"} 
          bg-transparent-500 button-media button-media-three items-center 
          px-5 py-3 mt-2 text-white rounded hover:bg-transparent-700 
          hover:shadow-xl top-0 flex left-0 right-0 bottom-0`}
          onClick={() => {
            setEffect(true);
          }}
          onAnimationEnd={() => setEffect(false)}
        >
          <Image
            src="https://res.cloudinary.com/skiltime/image/upload/v1651930893/Vector_peweui.png"
            width={17}
            height={17}
          />
          <p className="pl-2">Contact us</p>
        </div>
      </div>
  );
}
