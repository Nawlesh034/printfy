import React from "react";

function Section_1() {
  return (
    <section className="h-[612px] max-w-[1280px] mt-[50px] mx-auto p-5 lg:p-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center h-full">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 mx-4 md:mx-[64px] mb-10 md:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Create and sell custom products</h1>
          <ul className="text-lg mb-6">
            <li className="flex items-center mb-3">
              <span className="text-green-600 mr-2">✔</span>100% Free to use
            </li>
            <li className="flex items-center mb-3">
              <span className="text-green-600 mr-2">✔</span>900+ High-Quality Products
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔</span>Largest global print network
            </li>
          </ul>
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded bg-green-600 text-white text-center"
            >
              Start for free
            </a>
            <a
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded border text-center"
            >
              How it works?
            </a>
          </div>
          <p className="mt-6 text-sm text-green-600">
            Trusted by over 8M sellers around the world
          </p>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="relative">
            <img
              src="path/to/tshirt-image.png"
              alt="Custom T-shirt"
              className="w-60 md:w-72"
            />
            <img
              src="path/to/woman-pointing.png"
              alt="Woman pointing"
              className="absolute bottom-0 right-0 w-40 md:w-48"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section_1;
