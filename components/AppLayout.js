import React from 'react'
import Header from './Header'
import Head from 'next/head'
import { appName } from '../libs/constant'
import Bounce from 'react-reveal/Bounce';
import Roll from 'react-reveal/Roll';
function AppLayout({children}) {
    return (
        <>
        <Head>
        <title>Resume {appName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Roll bottom> */}
     
        <div style={{
            position: `initial`,
            backgroundColor: `#77dee3`
          }} className=" w-full h-screen m-0 overflow-x-hidden overflow-y-auto bg-center bg-fixed">
            <div style={{
              backgroundImage: `url(/assets/img/bg.png)`,
              // backgroundPosition: `calc(50% + 2.76923px) calc(50% + 4.95359px)`
            }} className=" absolute w-full h-screen bg-cover bg-no-repeat flex items-center justify-items-center">
    
    
              <div className="min-w-full flex-1 lg:h-[95%] xl:h-[60%] h-full items-center justify-items-center">
              <Bounce left>
                <div className="max-w-[1320px] xl:max-w-[2400px]  min-h-full lg:mx-10 lg:rounded-3xl  bg-white">
                <div className="lg:p-5 p-0">
       <Header/>
       {children}
       </div>
                  
    
                </div>
                </Bounce>
              </div>
    
    
            </div>
          </div>

      
      {/* </Roll> */}
          </>
    )
}

export default AppLayout
