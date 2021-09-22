import React, {useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MenuLi from './MenuLi';
import TopMenu from './TopMenu';

function MenuItem() {
    const [openMenu, setOpenMenu] = useState(false);
    return (
    <>
    <div className="flex items-center justify-center lg:hidden pr-5 cursor-pointer">
        <MenuIcon onClick={()=> setOpenMenu(true)} />
    </div>
        <div className="lg:flex hidden items-center justify-center flex-shrink-0 space-x-4 font-normal cursor-pointer pr-10 ">
            
            <TopMenu page="/">Home</TopMenu>
            <TopMenu page="/resume">Resume</TopMenu>
            <TopMenu page="/projects">GitHub Projects</TopMenu>
            <TopMenu page="/">Contact</TopMenu>
            
        </div>
        <div
        style={{
            transform: openMenu ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.2s ease-in'
        }}
        className=" fixed top-0 bottom-0 bg-gray-200 w-[190px] z-50 right-0 p-5 flex-col text-justify list-none shadow-xl drop-shadow-2xl">
            <div className="flex cursor-pointer justify-end">
                <CloseIcon onClick={()=> setOpenMenu(false)} />
            </div>
            
                <MenuLi page="/"> Home </MenuLi>
                <MenuLi page="/resume"> Resume </MenuLi>
                <MenuLi page="/projects"> GitHub Projects </MenuLi>
                <MenuLi page="/contact"> Contact </MenuLi>
                
            
        </div>
        </>
    )
}

export default MenuItem
