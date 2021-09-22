import React from 'react'
import Logo from './Logo'
import MenuItem from './MenuItem'

function Header() {
    return (
        <>
        <div className="flex justify-between shadow-md lg:shadow-none max-w-full px-[-20px]">
            <Logo />
            <MenuItem />
        </div>
        </>
    )
}

export default Header
