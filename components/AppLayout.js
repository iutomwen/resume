import React from 'react'

function AppLayout({children}) {
    return (
        <div style={{
            position: `initial`,
          }} className=" bg-blue-500 w-full h-screen m-0 overflow-x-hidden overflow-y-auto bg-center bg-fixed">
            <div style={{
              backgroundImage: `url(/assets/img/bg.png)`,
              // backgroundPosition: `calc(50% + 2.76923px) calc(50% + 4.95359px)`
            }} className=" absolute w-full h-screen bg-cover bg-no-repeat flex items-center justify-items-center">
    
    
              <div className="min-w-full flex-1 lg:h-[95%] xl:h-[60%] h-full items-center justify-items-center">
                <div className="max-w-[1320px] xl:max-w-[2400px]  min-h-full lg:mx-10 lg:rounded-3xl  bg-white">
                  {children}
    
                </div>
              </div>
    
    
            </div>
          </div>
    )
}

export default AppLayout
