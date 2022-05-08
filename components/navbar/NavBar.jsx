import React from 'react';
import Image from "next/image";
import Script from "next/script"; //  add Custom script
import SearchBox from '../search-box';

export default function NavBar() {
  const [click, setClick] = React.useState(false);

  // This is defining the opening and closing of 
  // the sidebar
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    <>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <div className="nav-logo">
            <Image 
              src='https://res.cloudinary.com/skiltime/image/upload/v1651817548/image_3_1_b3leka.png'
              width={195}
              height={23}
            />
          </div>
          <ul className={click ? "nav-menu active" 
            : "nav-menu items-center"}>
            <li className="">
              <div
                className="text-sm nav-links"
              >
              <SearchBox />
              </div>
            </li>
            <li className="nav-item">
              <div
                className="font-semibold tracking-wider text-sm nav-links"
                onClick={click ? handleClick : null}
              >
                Lorem
              </div>
            </li>
            <li className="nav-item">
              <div
                className="font-semibold tracking-wider text-sm nav-links"
                onClick={click ? handleClick : null}
              >
                Lorem
              </div>
            </li>
            <li className="nav-item">
              <div
                className="font-semibold tracking-wider text-sm nav-links"
                onClick={click ? handleClick : null}
              >
                Lorem
              </div>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
        <span className='h-1.5 w-full line'></span>
      </nav>
      <Script
        id="popper"
        src="https://unpkg.com/popper.js@1/dist/umd/popper.min.js"
      />
      <Script id="tippy" src="https://unpkg.com/tippy.js@4" />
    </>
  );
}
