import React from 'react'

export default function GroupLayout({data}) {
  return (
    <React.Fragment>
        {data.map((item, idx) => {
            return(
            <div key={idx} className="group-item w-2/5.5 mb-2 ">
                <div className="block text-center pt-3 pb-3 rounded-lg shadow-lg accordion-item">
                    <p className="text-small leading-tight font-medium ">{item.title}</p>
                    <p className="text-white-400 font-semibold tracking-wider text-white text-base">
                        {item.content}
                    </p>
                    <p className=" text-small text-base">
                        {item.percentage}{"%"}
                    </p>
                </div>
            </div>
        )})}
    </React.Fragment>
  )
}
