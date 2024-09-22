import React from "react";
import { background, img1, img2, img3, img4, img5, img6, img7, img8, img9 } from "../Constants";

function Section_4() {
    return (
        <>
            <section className="relative flex h-screen items-center justify-center">
                {/* Background Image for larger screens only */}
                <div
                    className="relative w-[80%] h-[80%] mx-auto bg-no-repeat bg-center bg-contain hidden md:block"
                    style={{ backgroundImage: `url(${background})` }}
                >
                    {/* Central Icon */}
                    <div className="absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2">
                        <div className="bg-green-500 w-24 h-24 rounded-lg flex justify-center items-center">
                            <img src={img1} className="w-12 h-12 filter invert brightness-100" />
                        </div>
                    </div>

                    {/* Other icons placed around */}
                    <div className="absolute left-[30%] top-[20%] w-24 h-24">
                        <img src={img2} className="w-full h-full" />
                    </div>
                    <div className="absolute right-[30%] top-[20%] w-24 h-24">
                        <img src={img3} className="w-full h-full" />
                    </div>
                    <div className="absolute right-[20%] top-[40%] w-24 h-24">
                        <img src={img4} className="w-full h-full" />
                    </div>
                    <div className="absolute right-[10%] bottom-[30%] w-24 h-24">
                        <img src={img5} className="w-full h-full" />
                    </div>
                    <div className="absolute right-[40%] bottom-[10%] w-24 h-24">
                        <img src={img6} className="w-full h-full" />
                    </div>
                    <div className="absolute left-[20%] bottom-[30%] w-24 h-24">
                        <img src={img7} className="w-full h-full" />
                    </div>
                    <div className="absolute left-[40%] bottom-[10%] w-24 h-24">
                        <img src={img8} className="w-full h-full" />
                    </div>
                    <div className="absolute left-[50%] top-[40%] w-24 h-24">
                        <img src={img9} className="w-full h-full" />
                    </div>
                </div>

                {/* Central Icon for mobile */}
                <div className="relative w-[60%] h-[60%] mx-auto bg-transparent md:hidden">
                    <div className="flex justify-center items-center mb-4">
                        <div className="bg-green-500 w-20 h-20 rounded-lg flex justify-center items-center">
                            <img src={img1} className="w-10 h-10 filter invert brightness-100" />
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-around">
                        <div className="w-16 h-16 flex justify-center items-center mb-4">
                            <img src={img2} className="w-full h-full" />
                        </div>
                        <div className="w-16 h-16 flex justify-center items-center mb-4">
                            <img src={img3} className="w-full h-full" />
                        </div>
                        <div className="w-16 h-16 flex justify-center items-center mb-4">
                            <img src={img4} className="w-full h-full" />
                        </div>
                        <div className="w-16 h-16 flex justify-center items-center mb-4">
                            <img src={img5} className="w-full h-full" />
                        </div>
                        <div className="w-16 h-16 flex justify-center items-center mb-4">
                            <img src={img6} className="w-full h-full" />
                        </div>
                        <div className="w-16 h-16 flex justify-center items-center mb-4">
                            <img src={img7} className="w-full h-full" />
                        </div>
                        <div className="w-16 h-16 flex justify-center items-center mb-4">
                            <img src={img8} className="w-full h-full" />
                        </div>
                        <div className="w-16 h-16 flex justify-center items-center mb-4">
                            <img src={img9} className="w-full h-full" />
                        </div>
                    </div>
                </div>

                {/* Main Text */}
                <div className="absolute top-10 text-center">
                    <h4 className="text-3xl font-bold">Connect Your Store</h4>
                    <p className="text-gray-500">Printify easily integrates with major e-commerce platforms and marketplaces</p>
                </div>
            </section>

            <div className="flex justify-between items-center p-6 bg-green-100 rounded-lg h-[14vh] my-[90px] mx-[101px]">
                <div className="text-green-800 font-bold text-lg">
                    Are you a large business looking for custom solutions?
                </div>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                    Talk to sales
                </button>
            </div>
        </>
    );
}

export default Section_4;
