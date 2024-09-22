import React from "react";

function Section_6() {
    return (
        <section className="grid md:grid-cols-2 grid-cols-1 w-screen h-screen items-center bg-gray-50">
            <div className="relative left-[10vw] w-[90%] h-3/4 p-8 bg-gray-800 text-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-4">Make Money, Risk-Free</h2>
                <p className="mb-6">You pay for fulfillment only when you make a sale</p>

                <div className="bg-gray-900 p-6 rounded-lg">
                    <div className="flex justify-between mb-4">
                        <span>You sell a t-shirt</span>
                        <span>$30</span>
                    </div>
                    <div className="flex justify-between mb-4">
                        <span>You pay for its production</span>
                        <span>$12</span>
                    </div>
                    <hr className="border-gray-700 mb-4" />
                    <div className="flex justify-between text-green-500 font-bold">
                        <span>Your profit</span>
                        <span>$18</span>
                    </div>
                </div>

                <button className="mt-8 px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600">
                    Start selling
                </button>
                <p className="mt-4 text-sm">100% Free to use · 900+ Products · Largest print network</p>
            </div>

            {/* Image container adjusted for laptops */}
            <div className="w-[90%] h-3/4 flex justify-center items-center relative right-[2vw]">
                <img 
                    src="/images/Untitled design.png" 
                    alt="" 
                    className="hidden md:block w-[80%] h-auto" 
                />
            </div>
        </section>
    );
}

export default Section_6;
