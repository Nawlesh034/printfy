import React from "react";

function Footer() {
    return (
        <section className="bg-[#F7F7F7] w-full h-28 mt-28 p-4 md:p-6 lg:p-8 flex flex-col justify-center items-center">
            <div className="flex gap-4 justify-center flex-wrap text-sm md:text-base">
                <span className="cursor-pointer hover:underline">Intellectual Property Policy</span>
                <span className="cursor-pointer hover:underline">Terms of Service</span>
                <span className="cursor-pointer hover:underline">Privacy Policy</span>
                <span className="cursor-pointer hover:underline">Security</span>
            </div>
            <div className="flex justify-center mt-2 text-xs md:text-sm">
                <span>© 2024 Printify, Inc. All rights reserved.</span>
            </div>
        </section>
    );
}

export default Footer;
