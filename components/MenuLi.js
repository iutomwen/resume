import React from 'react'
import Link from 'next/link'

function MenuLi({children, page}) {
    return (
        <Link href={page}>
        <li className="py-[15px] border-b-[1px] border-solid border-gray-500 px-0 font-semibold cursor-pointer">
                   <a> {children}</a>
                </li>
        </Link>
    )
}

export default MenuLi
