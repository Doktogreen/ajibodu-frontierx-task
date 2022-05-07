import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <footer className="flex justify-center items-center bg-gray-900">
        <div className="container max-w-6xl mx-auto flex items-center px-2 py-0">
        <div className="w-full mx-auto flex justify-center flex-wrap items-center">
            <div className="footer-logo">
            <Image 
                className="top-0 left-0 right-0 bottom-0 margin-auto"
                src='https://res.cloudinary.com/skiltime/image/upload/v1651817548/image_3_bv9kh2.png'
                width={195}
                height={23}
            />
            </div>
        </div>
        </div>
    </footer>
  )
}
