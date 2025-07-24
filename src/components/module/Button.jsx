import React from 'react'

const Button = ({ name, onClick }) => {
    return (
        <div>

            <button
                type="button"
                onClick={onClick}
                className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded shadow transition duration-300"
            >
                {name}
            </button>
        </div>
    )
}

export default Button