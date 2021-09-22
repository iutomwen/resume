import React from 'react'
import Link from 'next/link'

function MenuItem() {
    return (
        <div className="flex items-center justify-center flex-shrink-0 space-x-4 font-normal cursor-pointer ">
            <p>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </p>
            <p>
                <Link href="/resume">
                    <a>Resume</a>
                </Link>
            </p>

            <p>
                <Link href="/projects">
                    <a>Projects</a>
                </Link>
            </p>
            <p>
                <Link href="/contacts">
                    <a>Contact</a>
                </Link>
            </p>
        </div>
    )
}

export default MenuItem
