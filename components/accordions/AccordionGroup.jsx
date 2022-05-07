import Image from "next/image"
import React, { useState, useEffect, useRef } from "react"
import ChevronClosed from "../utilities/icons/ChevronClosed.svg"
import ChevronOpen from "../utilities/icons/ChevronOpen.svg"

const AccordionGroup = ({ id, groupLayout, accord }) => {
  const [isOpened, setOpened] = useState(false)
  const [height, setHeight] = useState("0px")
  const contentElement = useRef(null)

  useEffect(() => {
    if (id === 0) {
      setOpened(!isOpened)
    }
  }, [id])
  const HandleOpening = () => {
    setOpened(!isOpened)
    setHeight(!isOpened ? `${350}px` : "0px")
  }
  return (
    <div 
      className="accordion border-transparent-400">
      <div onClick={() => HandleOpening()}
        className={"bg-transparent-300 p-4 flex items-center text-white"}>
          <Image
            src="https://res.cloudinary.com/skiltime/image/upload/v1651817547/Group_ny8eou.png"
            width={17}
            height={17}
          />
        <h4 className="mr-2 ml-2">
          {accord.title}
        </h4>
        {id === 0 ?
          <Image
            src="https://res.cloudinary.com/skiltime/image/upload/v1651931327/Vector_ebj5ib.png"
            width={13}
            height={13}
          />
        : null }
        {/* {isOpened ? <ChevronOpen /> : <ChevronClosed />} */}
      </div>
      <div ref={contentElement}
        style={{ height: height}}
        className="bg-transparent-200 w-100 overflow-y-scroll 
        flex justify-between transition-all duration-200"
      >
        <div className="p-4">{groupLayout}</div>
      </div>
    </div>
  )
}

export default AccordionGroup
