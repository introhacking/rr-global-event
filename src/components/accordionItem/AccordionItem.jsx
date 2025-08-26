import React, { useState } from "react";

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="overflow-hidden border-b-1 border-orange-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between cursor-pointer items-center px-4 py-2 bg-orange-50/50 transition"
            >
                <span className={` ${isOpen && 'text-orange-600 '} text-left font-semibold`}>{title}</span>
                <svg
                    className={`w-5 h-5 transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                className={`px-4 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 py-2" : "max-h-0 py-0"
                    }`}
            >
                <p className="text-gray-700 text-left">{content}</p>
            </div>
        </div>
    );
};


export default AccordionItem;
