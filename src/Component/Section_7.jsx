import React from "react";
import { discover, Image1, integrations, printify, startSelling } from "../Constants";

function Section_7() {
    return (
        <footer className="bg-gray-50 p-8">
            <div className="flex justify-center mb-4">
                <img src={Image1} alt="" className="w-40 h-40 md:w-60 md:h-60" />
            </div>

            <div className="flex justify-end relative -top-10 md:right-[10vw] right-[5vw] mb-4">
                <a href="#" className="mx-2">
                    <img src="/images/facebook-icon.svg" alt="Facebook" />
                </a>
                <a href="#" className="mx-2">
                    <img src="/images/instagram-icon.svg" alt="Instagram" />
                </a>
                <a href="#" className="mx-2">
                    <img src="/images/linkedin-icon.svg" alt="LinkedIn" />
                </a>
                <a href="#" className="mx-2">
                    <img src="/images/reddit-icon.svg" alt="Reddit" />
                </a>
                <a href="#" className="mx-2">
                    <img src="/images/Tiktok-1.svg" alt="TikTok" className="w-8 h-8" />
                </a>
            </div>

            {/* Footer Sections */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left text-sm text-gray-700">
                {/* Integrations Section */}
                <div>
                    <h3 className="font-bold text-green-600 mb-4 font-robo">Integrations</h3>
                    <ul>
                        {integrations.map((item, index) => (
                            <li key={index} className="font-robo mb-2">{item}</li> // Added margin-bottom
                        ))}
                    </ul>
                </div>

                {/* Discover Section */}
                <div>
                    <h3 className="font-bold text-green-600 mb-4 font-robo">Discover</h3>
                    <ul>
                        {discover.map((item, index) => (
                            <li key={index} className="font-robo mb-2">{item}</li> // Added margin-bottom
                        ))}
                    </ul>
                </div>

                {/* Start Selling Section */}
                <div>
                    <h3 className="font-bold text-green-600 mb-4 font-robo">Start Selling</h3>
                    <ul>
                        {startSelling.map((item, index) => (
                            <li key={index} className="font-robo mb-2">{item}</li> // Added margin-bottom
                        ))}
                    </ul>
                </div>

                {/* Printify Section */}
                <div>
                    <h3 className="font-bold text-green-600 mb-4 font-robo">Printify</h3>
                    <ul>
                        {printify.map((item, index) => (
                            <li key={index} className="font-robo mb-2">{item}</li> // Added margin-bottom
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Section_7;
