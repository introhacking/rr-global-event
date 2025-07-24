import React from 'react';
import { Link } from 'react-router-dom';
const BlogCard = ({ route = "#", title, date, image }) => {
    return (
        <>
            <Link to={`/blog/${route}`} className="block sm:max-w-[32%] w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <img src={image} alt={title} className="w-full h-48 object-cover" />
                <div className="p-4">
                    <p className="text-sm text-gray-500 mb-2">{date}</p>
                    <h3 className="text-lg font-semibold text-gray-800 hover:text-orange-500">{title}</h3>
                </div>
            </Link>
        </>
    );
};

export default BlogCard;
