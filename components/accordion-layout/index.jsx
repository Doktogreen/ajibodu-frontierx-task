import Image from 'next/image'
import React from 'react'
import { 
    AccordionGroupLayout, 
    AccordionItemLayout 
} from './layout'


export default function AccordionBoxes() {
  return (
    <div className="flex flex-wrap justify-between pt-12 ">
        <div id="mobile" className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
            <AccordionItemLayout />        
        </div>

        <div id="mobile" className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
            <AccordionGroupLayout />
        </div>
    </div>
  )
}
