import React from 'react'
import Logo from './Logo'
import MenuItem from './MenuItem'

function Header() {
    return (
        <>
        <div className="flex justify-between">
            <Logo />
            <MenuItem />
        </div>
        </>
    )
}

export default Header
