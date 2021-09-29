import React from 'react'
import Link from 'next/link'

function TopMenu({children, page}) {
    return (
        <p className="relative cursor-pointer ">
                <Link href={page} >
                    <a className=" text-black after:h-[2px] after:transition-all after:bg-gray-700 after:absolute after:origin-center  after:right-0 after:left-0 after:bottom-[-5px] after:opacity-0 after:scale-0 hover:after:scale-100
                    hover:after:opacity-100">
                        {children}
                        </a>
                </Link>
            </p>
    )
}

export default TopMenu
