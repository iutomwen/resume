import React from "react";
import AppLayout from "../components/AppLayout";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import RoomIcon from "@mui/icons-material/Room";
import MailIcon from "@mui/icons-material/Mail";
function contact() {
  return (
    <AppLayout>
      <div className="mt-10 ">
        <div className="text-black flex flex-col mb-10">
          <p className=" text-2xl">Contact</p>
          <div className="border-[1px] border-blue-800 w-12"></div>
        </div>

        <div className="flex w-full flex-wrap md:flex-nowrap space-x-8 md:space-y-0 space-y-6">
          <div className="flex flex-col space-y-6 md:w-1/3 w-full">
            <div className="flex space-x-4">
              <PhoneIphoneIcon className="text-blue-600 w-10 h-10" />
              <div className="flex flex-col">
                <div className="text-black font-bold text-lg">07591476711</div>
                <div className="text-gray-500 text-base">
                  Available 11am - 2pm Monday Till Friday
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <RoomIcon className="text-blue-600 w-10 h-10" />
              <div className="flex flex-col">
                <div className="text-black font-bold text-lg">Manchester</div>
                <div className="text-gray-500 text-base">Postcode M40</div>
              </div>
            </div>

            <div className="flex space-x-4">
              <MailIcon className="text-blue-600 w-10 h-10" />
              <div className="flex flex-col">
                <div className="text-black font-bold text-lg">
                  iutomwen@yahoo.com
                </div>
                <div className="text-gray-500 text-base">My contact email</div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap flex-col md:w-2/3 w-full">
            <div className="text-black flex flex-col mb-10">
              <p className=" text-2xl">How Can I Help You?</p>
              <div className="border-[1px] border-blue-800 w-20"></div>
            </div>
            {/* contact form */}
            <div className="flex flex-col">
              <div className="flex flex-wrap md:space-x-8 items-center space-y-4 md:space-y-0">
                <div className="md:w-1/2 w-full  flex flex-col space-y-4">
                  {/* input */}
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border-[2px] border-gray-300 rounded focus:outline-none placeholder-gray-300 p-2 text-black"
                  />
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="w-full border-[2px] border-gray-300 rounded focus:outline-none placeholder-gray-300 p-2 text-black"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full border-[2px] border-gray-300 rounded focus:outline-none placeholder-gray-300 p-2 text-black"
                  />
                </div>
                <div className="flex flex-1 max-w-full md:w-1/2">
                  {/* textarea */}
                  <textarea
                    rows={6}
                    placeholder="Message"
                    className="w-full focus:outline-none border-[2px] border-gray-300 placeholder-gray-300 p-2 rounded"
                  />
                </div>
              </div>

              <div className="my-4 text-center text-black px-6 py-2 border-2 rounded-3xl cursor-pointer border-blue-900 w-44 bg-white">
                Send message
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default contact;
