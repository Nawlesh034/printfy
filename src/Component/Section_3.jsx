import React from "react";
import { Image5, Image6, Image7, Image8 } from "../Constants";

function Section_3() {
    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 h-screen">
                {/* Left Image Section */}
                <div className="relative p-0 h-screen bg-green-600 flex items-center justify-center">
                    <img
                        src={Image5}
                        alt="Mug"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Text Section */}
                <div className="p-8 md:p-32 flex flex-col justify-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6">
                        Easily add your design to a wide range of products
                    </h1>
                    <p className="text-lg mb-6">
                        With our free design tools, you can easily add your custom designs to
                        t-shirts, mugs, phone cases, and hundreds of other products.
                    </p>
                    <a
                        href="#"
                        className="text-green-600 font-semibold text-lg flex items-center"
                    >
                        All products <span className="ml-2">→</span>
                    </a>
                </div>
            </section>

            {/* Down Section */}
            <div className="p-8 md:p-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="flex flex-col items-center text-center">
                        <img src={Image6} alt="Create" className="w-[156px] h-[156px]" />
                        <h6 className="font-semibold mt-4">CREATE</h6>
                        <h4 className="text-lg font-bold">Custom Products</h4>
                        <span className="text-sm text-gray-500">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, amet!
                        </span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img src={Image7} alt="Sell" className="w-[156px] h-[156px]" />
                        <h6 className="font-semibold mt-4">SELL</h6>
                        <h4 className="text-lg font-bold">On Your Terms</h4>
                        <span className="text-sm text-gray-500">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, minus?
                        </span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img src={Image8} alt="Fulfillment" className="w-[156px] h-[156px]" />
                        <h6 className="font-semibold mt-4">WE HANDLE</h6>
                        <h4 className="text-lg font-bold">Fulfillment</h4>
                        <span className="text-sm text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, nulla.
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section_3;
