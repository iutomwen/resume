import React from "react";
import Header from "./Header";
import Head from "next/head";
import {
  appName,
  facebookUrl,
  instagramUrl,
  twitterUrl,
} from "../libs/constant";
import Bounce from "react-reveal/Bounce";
// import Roll from "react-reveal/Roll";
function AppLayout({ children }) {
  return (
    <>
      <Head>
        <title>Resume {appName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Roll bottom> */}

      <div
        style={{
          position: `initial`,
          backgroundColor: `#1a305b`, //1a305b
        }}
        className=" w-full h-screen m-0 overflow-x-hidden overflow-y-auto bg-center bg-fixed"
      >
        <div
          style={{
            backgroundImage: `url(/assets/img/bg.png)`,
            // backgroundPosition: `calc(50% + 2.76923px) calc(50% + 4.95359px)`
          }}
          className=" absolute w-full h-screen bg-cover bg-no-repeat flex items-center justify-items-center"
        >
          <div className="min-w-full flex-1 lg:h-[95%] xl:h-[87%] h-full items-center justify-items-center">
            <Bounce left>
              <div className="max-w-[1320px] relative xl:max-w-[2400px]  min-h-full lg:mx-10 lg:rounded-3xl  bg-white">
                <div className="lg:p-5 p-0 h-auto">
                  <Header />
                  <main className="px-10 mt-5 mb-20 pb-20 relative">
                    {children}
                  </main>
                  <footer className="footer bottom-[-0] left-0 w-full lg:py-0 py-10 h-16 flex items-center justify-center bg-white rounded-b-full border-t-2 bg-bottom absolute">
                    <div className="flex flex-wrap px-10 items-center  justify-between w-full text-gray-400 text-base font-normal">
                      <div className="flex justify-between w-[250px]">
                        <p>
                          <a href={twitterUrl}>Twitter</a>
                        </p>
                        <p>
                          <a href={facebookUrl}>Facebook</a>
                        </p>
                        <p>
                          <a href={instagramUrl}>Instagram</a>
                        </p>
                      </div>

                      <div>
                        <p>@ 2021 All Right Reeserved.</p>
                      </div>
                    </div>
                  </footer>
                </div>
              </div>
            </Bounce>
          </div>
        </div>
      </div>

      {/* </Roll> */}
    </>
  );
}

export default AppLayout;
