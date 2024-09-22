import React from "react";
import { Image2, Image3, Image4 } from "../Constants";

function Section_2() {
    return (
        <div className="py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 md:p-10 flex flex-col items-center">
                    <div className="w-[120px] h-[120px] flex justify-center items-center">
                        <img src={Image2} alt="Social conversations" />
                    </div>
                    <h2 className="uppercase mt-6 font-medium text-center mb-3">
                        Social Conversations
                    </h2>
                    <p className="font-light text-sm text-gray-500 text-center">
                        We get insulted by others, lose trust for those others. We get back
                        stabbed by friends. It becomes harder for us to give others a hand.
                    </p>
                </div>

                <div className="p-6 md:p-10 flex flex-col items-center">
                    <div className="w-[120px] h-[120px] flex justify-center items-center">
                        <img src={Image3} alt="Social conversations" />
                    </div>
                    <h2 className="uppercase mt-6 font-medium text-center mb-3">
                        Social Conversations
                    </h2>
                    <p className="font-light text-sm text-gray-500 text-center">
                        We get insulted by others, lose trust for those others. We get back
                        stabbed by friends. It becomes harder for us to give others a hand.
                    </p>
                </div>

                <div className="p-6 md:p-10 flex flex-col items-center">
                    <div className="w-[120px] h-[120px] flex justify-center items-center">
                        <img src={Image4} alt="Social conversations" />
                    </div>
                    <h2 className="uppercase mt-6 font-medium text-center mb-3">
                        Social Conversations
                    </h2>
                    <p className="font-light text-sm text-gray-500 text-center">
                        We get insulted by others, lose trust for those others. We get back
                        stabbed by friends. It becomes harder for us to give others a hand.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Section_2;
