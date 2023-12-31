"use client";

import React, { useEffect, useRef, useState } from "react";

import Link from "next/link";
import useStore from "@/app/store";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const Navbar = (props: Props) => {
  const handleDrawerToggle = () => {};
  const inputRef = useRef(null);

  const { carLength, setCarLength } = useStore();

  useEffect(() => {
    const idsCar = localStorage.getItem("idsCar");
    if (idsCar) {
      setCarLength(Object.keys(JSON.parse(idsCar)).length);
    }
  }, [setCarLength]);
  const handleSubmit = () => {
    // @ts-ignore
    const searchValue = inputRef.current.value;
    localStorage.setItem("lastSearch", searchValue);
  };
  return (
    <header className=" md:space-x-32 space-x-16 bg-blue-700 ">
      <div className="h-16 lg:flex hidden">
        <div className="flex w-[33wv] mx-auto justify-center items-center">
          <Link
            key="car-button"
            href={"/"}
            role="button"
            className="relative flex"
          >
            <h3 className="w-[200px] text-cyan-50 text-center leading-4 font-weight: 500 text-lg tracking-wider">
              Mercadito
            </h3>
          </Link>
        </div>
        <div className="w-[1200px] flex">
          <form action="/items" className="m-auto px-4 gap-4 flex">
            <input
              ref={inputRef}
              name="search"
              className="h-8 px-2 w-[33vw]"
              type="text"
            />
            <button
              className="h-8 bg-gray-200 px-2 py-1 text-slate-700"
              type="submit"
              onClick={handleSubmit}
            >
              Buscar
            </button>
          </form>
          <div className="items--right flex w-[33vw]">
            <li className="h-8  block mt-4 lg:inline-block text-black hover:text-gray-700">
              <Link
                key="car-button"
                href={"/car"}
                role="button"
                className="relative flex"
              >
                <svg className="flex-1 w-8 h-8 fill-current">
                  <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                </svg>
                {carLength ? (
                  <p className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                    {carLength}
                  </p>
                ) : (
                  <></>
                )}
              </Link>
            </li>
          </div>
        </div>
        {/* mobile */}
      </div>
      <div className="h-20  block lg:hidden">
        <Link
          key="car-button"
          href={"/"}
          role="button"
          className="relative flex"
        >
          <h3 className="w-[200px] text-cyan-50 text-center leading-4 font-weight: 500 text-lg tracking-wider">
            Mercadito
          </h3>
        </Link>

        <div className="w-[30%] flex">
          <form action="/items" className="m-auto px-4 gap-4 flex">
            <input
              ref={inputRef}
              name="search"
              className="h-8 px-2 w-[33vw]"
              type="text"
            />
            <button
              className="h-8 bg-gray-200 px-2 py-1 text-slate-700"
              type="submit"
              onClick={handleSubmit}
            >
              Buscar
            </button>
          </form>
          <div className=" flex w-[33vw]">
            <li className="h-8  block mt-4 lg:inline-block text-black hover:text-gray-700">
              <Link
                key="car-button"
                href={"/car"}
                role="button"
                className="relative flex"
              >
                <svg className="flex-1 w-8 h-8 fill-current">
                  <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                </svg>
                {carLength ? (
                  <p className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                    {carLength}
                  </p>
                ) : (
                  <></>
                )}
              </Link>
            </li>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
