import React from 'react'

export default function GroupLayout({data}) {
  return (
    <React.Fragment>
        {data.map((item, idx) => {
            return(
            <div key={idx} className="group-item mb-2 w-30">
                <div className="block text-center p-6 rounded-lg shadow-lg accordion-item">
                    <p className=" text-small leading-tight font-medium ">{item.title}</p>
                    <p className="text-white-700 text-white text-base">
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
