import React from 'react'

const PageSectionLayout = ({ id, title, bgClass, subTitle, children }) => {
    return (
        <section id={id} className={`px-2 pb-8 pt-26 ${bgClass}`}>
            <div className="text-center">
                <h2 className="sm:text-lg text-orange-500 uppercase">{title}</h2>
                <p className="sm:text-3xl font-bold text-gray-800 mb-6">{subTitle}</p>
                <div className="text-gray-700 text-base leading-relaxed px-1 sm:px-5">
                    {children} {/* ✅ render the content here */}
                </div>
            </div>
        </section>
    )
}

export default PageSectionLayout