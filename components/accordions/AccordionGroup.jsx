import Image from "next/image"
import React, { useState, useEffect, useRef } from "react"
// import closedIcon from "../utilities/icons/ChevronClosed.svg"
import openedIcon from "../utilities/icons/open.svg"

const AccordionGroup = ({ id, groupLayout, accord }) => {
  const [isOpened, setOpened] = useState(false)
  const [height, setHeight] = useState("0px")
  const contentElement = useRef(null)

  // This will open and close the modal
  const HandleOpening = () => {
    setOpened(!isOpened);
    setHeight(!isOpened ? `${350}px` : "0px")
  }

  // This is meant to open the accordion when the app 
  //  component mount / load
  const Load = () => {
    HandleOpening();
  }
  useEffect(() => {
    if(id === 0 ) {
      Load();
    }
  }, [id])

  // This is defining the Open and close 
  // Arrow Icon for the accordion
  let opened = (
    openedIcon
  );
  // let closed = (
  //   closedIcon
  // );

  return (
    <div className="accordion border-transparent-400">
      <div onClick={() => HandleOpening()}
        className={`bg-transparent-300 p-4 flex 
          items-center justify-between text-white`}>
          <div className="flex items-center">
            <Image
              src="https://res.cloudinary.com/skiltime/image/upload/v1651817547/Group_ny8eou.png"
              width={17}
              height={17}
            />
            <h4 className="font-semibold 
              tracking-wider mr-2 ml-2">
              {accord.title}
            </h4>
            {id === 0 ?
              <Image
                className="margin-right mx-auto"
                src="https://res.cloudinary.com/skiltime/image/upload/v1651931327/Vector_ebj5ib.png"
                width={13}
                height={13}
              />
            : null }
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
            className="float-right"
            src={opened}
            width={23}
            height={23}
          /> 
        }
      </div>
      <div ref={contentElement}
        style={{ height: height}}
        className="bg-transparent-200 max-w-100 
        overflow-y-scroll overflow-x-hidden 
        transition-all duration-200"
      >
        <div className="p-4 flex-cards inline-flex flex-wrap 
          items-center justify-between">
          {groupLayout}
        </div>
      </div>
    </div>
  )
}

export default AccordionGroup
