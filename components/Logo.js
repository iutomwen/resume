import React from 'react'
import { appName } from '../libs/constant'
import Link from 'next/link'

function Logo() {
    return (
        <Link href="/" className="cursor-pointer">
        <a>
        <div className="flex items-center justify-center flex-shrink ">
            <img src="/assets/img/logo.png" alt={appName} width={100} height={100} className=" rounded-full"/>
            <p className="flex-shrink font-semibold uppercase text-center hidden md:flex">
                { appName }
            </p>
        </div>
        </a>
        </Link>
    )
}

export default Logo
