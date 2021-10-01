import React from "react";
import { appName } from "../libs/constant";
import Link from "next/link";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import LanguageIcon from "@mui/icons-material/Language";
import StorefrontIcon from "@mui/icons-material/Storefront";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
function Welcome() {
  return (
    <div className="text-black mb-10">
      {/* my intro */}
      <div className="md:flex-row flex flex-col pt-24 px-[2%] md:px-[7%] space-x-10 space-y-10 md:space-y-0 items-center">
        <div className="rounded-full flex items-center justify-center bg-red-100 h-52 w-52">
          <div className="rounded-full bg-white h-[200px] w-[200px]">
            {/* image */}
          </div>
        </div>

        <div className="flex-col space-y-5 text-center md:text-left items-center justify-center">
          <div className="text-gray-400">IT Professoinal</div>
          <div className="text-3xl text-black font-bold">{appName}</div>
          <div>
            <p className="text-gray-600 text-justify">
              A highly experienced and creative IT professional with seven years
              of experience in a variety of exciting projects. Developing and
              implementing interactive websites, innovative use of technology
              and SEO to drive traffic and engage users. Able to deliver a
              project efficiently with a rational approach to problem-solving,
              combined with a passion for innovative and fresh ideas have led to
              a portfolio of impressive website solutions.
            </p>
          </div>
          <div className="flex md:items-start md:justify-start items-center justify-center space-x-4">
            <div className=" text-black px-6 py-2 border-2 rounded-3xl cursor-pointer border-blue-900 bg-white">
              Download CV
            </div>
            <Link href="/contact">
              <div className="px-6 py-2 border-2 rounded-3xl cursor-pointer border-gray-300 bg-white">
                <a> Contact </a>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* what i do */}
      <div className="flex flex-col mt-12 md:px-0 px-10">
        <div className="text-black flex flex-col mb-10">
          <p className=" text-2xl">What I Do</p>
          <div className="border-[1px] border-blue-800 w-24"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-1 space-x-2 w-full ">
            <DeveloperModeIcon className="text-blue-500 w-8 h-8" />
            <div className="flex flex-col">
              <div className="text-xl">Mobile Development</div>
              <div className="text-gray-500 text-base">
                <p>hgdcywe uyweuyew uy uyewuwev ued vju</p>
              </div>
            </div>
          </div>
          <div className="flex flex-1 space-x-2 w-full">
            <LanguageIcon className="text-blue-500 w-8 h-8" />
            <div className="flex flex-col">
              <div className="text-xl">Web Design</div>
              <div className="text-gray-500 text-base">
                <p>
                  hgdcywe uyweuyew uy uyewuwev ued vju A highly experienced and
                  creative IT professional with seven years of experience in a
                  variety of exciting projects. Developing and implementing
                  interactive websites, innovative use of technology and SEO to
                  drive traffic and engage users. Able to deliver a project
                  efficiently with a rational approach to problem-solving,
                  combined with a passion for innovative and fresh ideas have
                  led to a portfolio of impressive website solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-1 space-x-2 w-full ">
            <StorefrontIcon className="text-blue-500 w-8 h-8" />
            <div className="flex flex-col">
              <div className="text-xl">Ecommerce</div>
              <div className="text-gray-500 text-base">
                <p>hgdcywe uyweuyew uy uyewuwev ued vju</p>
              </div>
            </div>
          </div>
          <div className="flex flex-1 space-x-2 w-full ">
            <BuildCircleIcon className="text-blue-500 w-8 h-8" />
            <div className="flex flex-col">
              <div className="text-xl">SEO Content Management</div>
              <div className="text-gray-500 text-base">
                <p>hgdcywe uyweuyew uy uyewuwev ued vju</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
