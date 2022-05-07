import Script from "next/script"; //  add Custom script 
// import Image from "next/image"; // import image component 

export default function post() {
    return (
      <>
        <nav className="bg-gray-900 p-4 mt-0 w-full">
          <div className="container mx-auto flex items-center">
            <div className="flex text-white font-extrabold">
              <a
                className="flex text-white text-base no-underline hover:text-white hover:no-underline"
                href="/"
              >
                <span className="hidden w-0 md:w-auto md:block pl-1">
                  Ghostwind CSS
                </span>
              </a>
            </div>
            <div className="flex pl-4 text-sm">
              <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                <li className="mr-2">
                  <a
                    className="inline-block py-2 px-2 text-white no-underline"
                    href="index.html"
                  >
                    Home
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2"
                    href="/"
                  >
                    Blog
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2"
                    href="/"
                  >
                    About
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2"
                    href="/"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  
        <div
          id="header"
          className="bg-white fixed w-full z-10 top-0 hidden animated"
          style={{ opacity: ".95" }}
        >
          <div className="bg-white">
            <div className="flex flex-wrap items-center content-center">
              <div className="flex w-1/2 justify-start text-white font-extrabold">
                <a
                  className="flex text-gray-900 no-underline hover:text-gray-900 hover:no-underline pl-2"
                  href="/"
                >
                  <span className="hidden w-0 md:w-auto md:block pl-1">
                    Ghostwind CSS
                  </span>
                </a>
              </div>
              <div className="flex w-1/2 justify-end content-center">
                <p className="hidden sm:block mr-3 text-center h-14 p-4 text-xs">
                  <span className="pr-2">Share this</span> 👉
                </p>
                <a
                  className="inline-block text-white no-underline hover:text-white hover:text-underline text-center h-10 w-10 p-2 md:h-auto md:w-16 md:p-4"
                  href="https://twitter.com/intent/tweet?url=#"
                  style={{ backgroundColor: "#33b1ff" }}
                >
                  <svg
                    className="fill-current text-white h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                  >
                    <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path>
                  </svg>
                </a>
                <a
                  className="inline-block text-white no-underline hover:text-white hover:text-underline text-center h-10 w-10 p-2 md:h-auto md:w-16 md:p-4"
                  href="https://www.facebook.com/sharer/sharer.php?u=#"
                  style={{ backgroundColor: "#005e99" }}
                >
                  <svg
                    className="fill-current text-white h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                  >
                    <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
  
          <div
            id="progress"
            className="h-1 bg-white shadow"
            style={{
              background:
                "linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0)"
            }}
          ></div>
        </div>
  
        <div className="text-center pt-16 md:pt-32">
          <p className="text-sm md:text-base text-green-500 font-bold">
            08 APRIL 2019 <span className="text-gray-900">/</span> GETTING STARTED
          </p>
          <h1 className="font-bold break-normal text-3xl md:text-5xl">
            Welcome to Ghostwind CSS
          </h1>
        </div>
  
        <div
          className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/collection/1118905/')",
            height: "75vh"
          }}
        ></div>
  
        <div className="container max-w-5xl mx-auto -mt-32">
          <div className="mx-0 sm:mx-6">
            <div
              className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal"
              style={{ fontfamily: "Georgia,serif" }}
            >
              <p className="text-2xl md:text-3xl mb-5">
                Welcome fellow{" "}
                <a
                  className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
                  href="https://www.tailwindcss.com"
                >
                  Tailwind CSS
                </a>{" "}
                and{" "}
                <a
                  className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
                  href="https://www.ghost.org"
                >
                  Ghost
                </a>{" "}
                fan. This starter template is an attempt to replicate the default
                Ghost theme{" "}
                <a
                  className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
                  href="https://demo.ghost.io/welcome"
                >
                  "Casper"
                </a>{" "}
                using Tailwind CSS and vanilla Javascript.
              </p>
  
              <p className="py-6">
                The basic blog page layout is available and all using the default
                Tailwind CSS classes (although there are a few hardcoded style
                tags). If you are going to use this in your project, you will want
                to convert the classes into components.
              </p>
  
              <p className="py-6">
                Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus
                purus, in mattis tortor sollicitudin pretium. Phasellus at diam
                posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi
                diam, pulvinar ut molestie eget, eleifend ac magna. Sed at lorem
                condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend
                turpis vel erat bibendum scelerisque. Maecenas id risus dictum,
                rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor
                molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae
                molestie quam fermentum. Donec ac pretium diam. Suspendisse sed
                odio risus. Nunc nec luctus nisi. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos. Duis
                nec nulla eget sem dictum elementum.
              </p>
  
              <ol>
                <li className="py-3">
                  Maecenas accumsan lacus sit amet elementum porta. Aliquam eu
                  libero lectus. Fusce vehicula dictum mi. In non dolor at sem
                  ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse
                  quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi
                  sit amet tellus scelerisque tortor semper posuere.
                </li>
                <li className="py-3">
                  Morbi varius posuere blandit. Praesent gravida bibendum neque
                  eget commodo. Duis auctor ornare mauris, eu accumsan odio
                  viverra in. Proin sagittis maximus pharetra. Nullam lorem
                  mauris, faucibus ut odio tempus, ultrices aliquet ex. Nam id
                  quam eget ipsum luctus hendrerit. Ut eros magna, eleifend ac
                  ornare vulputate, pretium nec felis.
                </li>
                <li className="py-3">
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                  posuere cubilia Curae; Nunc vitae pretium elit. Cras leo mauris,
                  tristique in risus ac, tristique rutrum velit. Mauris accumsan
                  tempor felis vitae gravida. Cras egestas convallis malesuada.
                  Etiam ac ante id tortor vulputate pretium. Maecenas vel sapien
                  suscipit, elementum odio et, consequat tellus.
                </li>
              </ol>
  
              <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
                Example of blockquote - Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit
                amet ligula.
              </blockquote>
  
              <p className="py-6">Example code block:</p>
              <pre className="bg-gray-900 rounded text-white font-mono text-base p-4">
                <code className="break-words whitespace-pre-wrap">
                  <header className="site-header outer">
                    <div className="inner">
                      <h2> code here </h2>
                    </div>
                  </header>
                </code>
              </pre>
            </div>
  
            <div className="container font-sans bg-green-100 rounded mt-8 p-4 md:p-24 text-center">
              <h2 className="font-bold break-normal text-2xl md:text-4xl">
                Subscribe to Ghostwind CSS
              </h2>
              <h3 className="font-bold break-normal font-normal text-gray-600 text-base md:text-xl">
                Get the latest posts delivered right to your inbox
              </h3>
              <div className="w-full text-center pt-4">
                <form action="#">
                  <div className="max-w-sm mx-auto p-1 pr-0 flex flex-wrap items-center">
                    <input
                      type="email"
                      placeholder="youremail@example.com"
                      className="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
  
            <div className="flex w-full items-center font-sans p-8 md:p-24">
              <Image
                className="w-10 h-10 rounded-full mr-4"
                src="http://i.pravatar.cc/300"
                alt="Avatar of Author"
                width={50}
                height={50}
              />
  
              <div className="flex-1">
                <p className="text-base font-bold text-base md:text-xl leading-none">
                  Ghostwind CSS
                </p>
                <p className="text-gray-600 text-xs md:text-base">
                  Tailwind CSS version of Ghost's Casper theme by{" "}
                  <a
                    className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
                    href="https://www.tailwindtoolbox.com"
                  >
                    TailwindToolbox.com
                  </a>
                </p>
              </div>
              <div className="justify-end">
                <button className="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
  
        <div className="bg-gray-200">
          <div className="container w-full max-w-6xl mx-auto px-2 py-8">
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/3 px-2 pb-12">
                <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
                  <a href="/post" className="no-underline hover:no-underline">
                    <Image
                      src="https://source.unsplash.com/_AjqGGafofE/400x200"
                      className="h-48 w-full rounded-t shadow-lg"
                      alt="image here"
                      width={500}
                      height={500}
                    />
  
                    <div className="p-6 h-auto md:h-48">
                      <p className="text-gray-600 text-xs md:text-sm">
                        GETTING STARTED
                      </p>
                      <div className="font-bold text-xl text-gray-900">
                        Lorem ipsum dolor sit amet.
                      </div>
                      <p className="text-gray-800 font-serif text-base mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam at ipsum eu nunc commodo posuere et sit amet
                        ligula.
                      </p>
                    </div>
                    <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                      <Image
                        className="w-8 h-8 rounded-full mr-4"
                        src="http://i.pravatar.cc/300"
                        alt="Avatar of Author"
                        width={50}
                        height={50}
                      />
  
                      <p className="text-gray-600 text-xs md:text-sm">
                        2 MIN READ
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-2 pb-12">
                <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
                  <a href="/post" className="no-underline hover:no-underline">
                    <Image
                      src="https://source.unsplash.com/_AjqGGafofE/400x200"
                      className="h-48 w-full rounded-t shadow"
                      alt="Avatar of Author"
                      width={500}
                      height={500}
                    />
  
                    <div className="p-6 h-auto md:h-48">
                      <p className="text-gray-600 text-xs md:text-sm">
                        UNDERWATER
                      </p>
                      <div className="font-bold text-xl text-gray-900">
                        Biolumini algae diatomeae ecology.
                      </div>
                      <p className="text-gray-800 font-serif text-base mb-5">
                        Lorem ipsum dolor sit. Aliquam at ipsum eu nunc commodo
                        posuere et sit amet ligula.
                      </p>
                    </div>
                    <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                      <Image
                        className="w-8 h-8 rounded-full mr-4"
                        src="http://i.pravatar.cc/300"
                        alt="Avatar of Author"
                        width={50}
                        height={50}
                      />
  
                      <p className="text-gray-600 text-xs md:text-sm">
                        4 MIN READ
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-2 pb-12">
                <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
                  <a href="/post" className="no-underline hover:no-underline">
                    <Image
                      src="https://source.unsplash.com/DEa8_vxKlEo/400x200"
                      className="h-48 w-full rounded-t shadow"
                      alt="Avatar of Author"
                      width={500}
                      height={500}
                    />
  
                    <div className="p-6 h-auto md:h-48">
                      <p className="text-gray-600 text-xs md:text-sm">FOREST</p>
                      <div className="font-bold text-xl text-gray-900">
                        What is life but a teardrop in the eye of infinity?
                      </div>
                      <p className="text-gray-800 font-serif text-base mb-5">
                        Mollis pretium integer eros et dui orci, lectus nec elit
                        sagittis neque. Dignissim ac nullam semper aliquet
                        volutpat, ut scelerisque.
                      </p>
                    </div>
                    <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                      <Image
                        className="w-8 h-8 rounded-full mr-4"
                        src="http://i.pravatar.cc/300"
                        alt="Avatar of Author"
                        width={50}
                        height={50}
                      />
  
                      <p className="text-gray-600 text-xs md:text-sm">
                        7 MIN READ
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <footer className="bg-gray-900">
          <div className="container max-w-6xl mx-auto flex items-center px-2 py-8">
            <div className="w-full mx-auto flex flex-wrap items-center">
              <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                <a
                  className="text-gray-900 no-underline hover:text-gray-900 hover:no-underline"
                  href="/"
                >
                  <span className="text-base text-gray-200">Ghostwind CSS</span>
                </a>
              </div>
              <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                <ul className="list-reset flex justify-center flex-1 md:flex-none items-center">
                  <li>
                    <a
                      className="inline-block py-2 px-3 text-white no-underline"
                      href="/"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3"
                      href="/"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3"
                      href="/"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3"
                      href="/"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
  
        <Script
          id="postJs"
          src=""
          onLoad={() => {
            var h = document.documentElement,
              b = document.body,
              st = "scrollTop",
              sh = "scrollHeight",
              progress = document.querySelector("#progress"),
              scroll;
            var scrollpos = window.scrollY;
            var header = document.getElementById("header");
  
            document.addEventListener("scroll", function () {
              /*Refresh scroll % width*/
              scroll =
                ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
              progress.style.setProperty("--scroll", scroll + "%");
  
              /*Apply classes for slide in bar*/
              scrollpos = window.scrollY;
  
              if (scrollpos > 100) {
                header.classList.remove("hidden");
                header.classList.remove("fadeOutUp");
                header.classList.add("slideInDown");
              } else {
                header.classList.remove("slideInDown");
                header.classList.add("fadeOutUp");
                header.classList.add("hidden");
              }
            });
          }}
        />
      </>
    );
  }
  