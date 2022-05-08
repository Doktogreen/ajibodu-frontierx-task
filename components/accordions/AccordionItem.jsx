import Image from "next/image"
import React, { useState, useEffect, useRef } from "react"
// import closedIcon from "../utilities/icons/ChevronClosed.svg"
import openedIcon from "../utilities/icons/open.svg"


const AccordionItem = ({ id, itemLayout, title, content }) => {
  const [isOpened, setOpened] = useState(false)
  const [height, setHeight] = useState("0px")
  const contentElement = useRef(null)

  // This will open and close the modal
  const HandleOpening = () => {
    setOpened(!isOpened);
    setHeight(!isOpened ? `${300}px` : "0px")
  }

  // This is meant to open the accordion when the app 
  //  component mount / load
  const Load = () => {
    HandleOpening()
  }
  useEffect(() => {
      Load();
  }, [id]);

  // This is defining the Open and close 
  // Arrow Icon for the accordion
  let opened = (
    openedIcon
  );
  // let closed = (
  //   closedIcon
  // );

  return (
    <div className="accordion  w-11/12 border-transparent-400">
      <div  onClick={() => HandleOpening()} 
        className={"bg-transparent-300 p-4 flex items-center justify-between text-white"}>
          <div className="flex items-center">
            <Image
              src="https://res.cloudinary.com/skiltime/image/upload/v1651817547/Group_ny8eou.png"
              width={17}
              height={17}
            />
            <h4 className="font-semibold tracking-wider mr-2 ml-2">Lorem Ipsum</h4>
          </div>
          
        {isOpened ? 
          <Image
            className="float-right"
            src={opened}
            width={23}
            height={23}
          />
        :
          <Image
            src={opened}
            width={23}
            height={23}
          /> 
        }
      </div>
      <div
        ref={contentElement}
        style={{ height: height }}
        className="bg-transparent-200 overflow-y-scroll transition-all duration-200"
      >
        <p className="p-4">{itemLayout}</p>
      </div>
    </div>
  )
}

export default AccordionItem
