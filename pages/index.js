import Image from "next/image"; // import image component
import Script from "next/script"; //  add Custom script
import Footer from "../components/footer";
import NavBar from "../components/navbar/NavBar";
import AccordionBoxes from '../components/accordion-layout'
import Buttons from "../components/buttons";
//This is  example show to add tailwind CSS in nextjs . it is not templte converting

export default function IndexPage() {
  return (
    <>
    <NavBar />
      <div
        className="h-4/5 mt-5 rounded-lg ml-4 mr-4 bg-cover bg-bottom"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/skiltime/image/upload/v1651817549/Sub_Header_Mask_o6zedg.png')",
          height: "37vh",
          maxHeight: "300px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "none",
          padding: "20px 20px"
        }}
      >
      </div>
      <div className="-my-24 mb-2
        flex items-center justify-center w-full
        bg-none rounded-t "
      >
        <Image
          src="https://res.cloudinary.com/skiltime/image/upload/v1651817548/Ellipse_37_ttayo3.jpg"
          className="h-full shadow m-auto top-0 left-0 right-0 b-0"
          alt="image here"
          width={150}
          height={150}
        />
      </div>
      
      <div className="container content-container px-16 md:px-16 max-w-10xl mx-auto mt-0">
        <div className="container w-full max-w-4xl mx-auto pt-6 text-center break-normal">
          <p className="text-white heading-top leading-loose mb-2 text-3xl md:text-5xl">
            Lorem ipsum
          </p>
          <p className="text-white text-heading2 leading-loose">
            Created by: <a id="special-text">Ajibodu Ayomide</a>
          </p>
          <p className="text-white text-heading3 leading-loose">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
          </p>
        </div>

        <Buttons />
        <AccordionBoxes />
      </div>   
      <Footer />
      <Script
        id="popper"
        src="https://unpkg.com/popper.js@1/dist/umd/popper.min.js"
      />
      <Script id="tippy" src="https://unpkg.com/tippy.js@4" />
    </>
  );
}
