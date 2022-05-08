import Image from 'next/image'
import React from 'react'

export default function ItemLayout() {

    const data = [
        {
            img: "https://res.cloudinary.com/skiltime/image/upload/v1651931161/Vector_u93v1j.png",
            content: "Lorem Ipsum.com"
        },
        {
            img: "https://res.cloudinary.com/skiltime/image/upload/v1651932446/Vector_3_u9whzq.png",
            content: "Lorem Ipsum"
        },
        {
            img: "https://res.cloudinary.com/skiltime/image/upload/v1651817547/Group_41_fqdzdb.png",
            content: "Lorem Ipsum"
        },
        {
            img: "https://res.cloudinary.com/skiltime/image/upload/v1651817547/Vector_1_smlxq4.png",
            content: "Lorem Ipsum"
        }
    ]
    return (
    <div className="flex h-full justify-center">
        <div className="flex flex-col h-full md:flex-row md:max-w-xl rounded-lg bg-transparent">
            <div className="flex flex-col h-full justify-start">
                {/* <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5> */}
                <p className="text-white-400 text-base text-white mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </p>
                <div className='flex justify-start items-full w-full'>
                    <div className='block mr-2 item-content'>
                        {data.slice(0, 2).map((item, idx) => {
                        return <div key={idx} 
                            className='flex mb-4 items-center'>
                                <Image 
                                    src={item.img}
                                    width={21}
                                    height={20}
                                />
                            <p className="text-item text-xlg ml-3">@{item.content}</p>
                        </div>
                        })}
                    </div>
                    <div className='block ml-4 item-content'>
                        {data.slice(2, 4).map((item, idx) => {
                        return <div key={idx} 
                            className='flex mb-4 w-30 items-center'>
                                <Image 
                                    src={item.img}
                                    width={23}
                                    height={20}
                                />
                            <p className={idx === 4 ? "text-sm text-white" 
                                : "text-item text-xlg ml-3"}>@{item.content}
                            </p>
                        </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
