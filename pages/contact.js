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
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default contact;
