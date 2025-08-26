import React from 'react'

const TestimonialCardLayout = ({ name, title, message, image }) => {
    return (
        <div className="cs_carsousel border border-orange-100 bg-white rounded-xl shadow-md p-6 text-center transition-all hover:shadow-lg">
            <img
                className="w-20 h-20 mx-auto rounded-full mb-4 border-4 border-blue-100"
                src={image}
                alt={name}
            />
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-500">{title}</p>
            <p className="mt-3 text-gray-700 italic">“{message}”</p>
        </div>
    )
}

export default TestimonialCardLayout