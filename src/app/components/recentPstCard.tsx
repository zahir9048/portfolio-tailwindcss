"use client";
import React from "react";
// import {Heebo} from "next/font/google"
import Link from "next/link";
import Image from "next/image";
import editableCv from "../../../public/assets/editable-cv.png";
import FYP from "../../../public/assets/FYP.png";
import codeEditor from "../../../public/assets/code-editor.png";

// const heebo = Heebo({subsets:['latin']})

const RecentPostCard = () => {
  return (
    <div id="project">
      <section className="text-black body-font pb-[4rem]">
        <div className="container px-5 py-15 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-10 text-black">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-5 -mt-[5rem]">
            
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer w-[100%]">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={FYP}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-x-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-myPink mb-1">
                    FYP
                  </h2>
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                    Made by Our Team
                  </h1>
                  <p className="leading-relaxed line-clamp-2"></p>
                  <Link
                    target="_blank"
                    href={"https://webcf.netlify.app/aboutus"}
                  >
                    <p className="leading-relaxed text-myPink hover:underline">
                      View Project...
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer w-[100%]">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={editableCv}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-x-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-myPink mb-1">
                    Editable Resume Builder
                  </h2>
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                    Made by me
                  </h1>
                  <p className="leading-relaxed line-clamp-2"></p>
                  <Link
                    target="_blank"
                    href={"https://resume-builder-milestone-4-zahir-khan.vercel.app/"}
                  >
                    <p className="leading-relaxed text-myPink hover:underline">
                      View Project...
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer w-[100%]">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={codeEditor}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-x-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-myPink mb-1">
                    Code Editor App
                  </h2>
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                    Made by me
                  </h1>
                  <p className="leading-relaxed line-clamp-2"></p>
                  <Link
                    target="_blank"
                    href={"https://code-editor-gamma-gilt.vercel.app/"}
                  >
                    <p className="leading-relaxed text-myPink hover:underline">
                      View Project...
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecentPostCard;
