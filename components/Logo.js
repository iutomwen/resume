import React from 'react'
import { appName } from '../libs/constant'
import Link from 'next/link'

function Logo() {
    return (
        <Link href="/" className="cursor-pointer">
        <a>
        <div className="flex items-center justify-center flex-shrink ">
            <img src="/assets/img/logo.png" alt={appName} className="m-2 h-14 w-[70px]" />
            <p className="flex-shrink font-semibold uppercase text-center hidden text-black md:flex">
                { appName }
            </p>
        </div>
        </a>
        </Link>
    )
}

export default Logo
