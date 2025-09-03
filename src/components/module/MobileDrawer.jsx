import React from 'react'

const MobileDrawer = ({ menuList, handleMenuClick, closeDrawer }) => {
    return (
        <React.Fragment>
            <div className='md:hidden shadow-2xl z-50 p-4 fixed w-56 inset-0 bg-white transition-all duration-500'>

                <div className='flex flex-col gap-3'>
                    {menuList.map((menu) => (
                        <span
                            key={menu.title}
                            onClick={() => { handleMenuClick(menu); closeDrawer() }}
                            className="hover:shadow py-1.5 px-1 font-semibold cursor-pointer hover:text-orange-500"
                        >
                            {menu.title}
                        </span>
                    ))}
                </div>

            </div>

        </React.Fragment>
    )
}

export default MobileDrawer
