"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";

const Navbar = () => {
  const [car, setCar] = useState();
  useEffect(() => {
    const idsCar = localStorage.getItem("idsCar");
    if (idsCar) {
      setCar(Object.keys(JSON.parse(idsCar)).length);
    }
  }, []);

  console.log(car);

  return (
    <header className="h-16 beet flex space-x-32 bg-yellow-300 ">
      <h3 className="w-[14%]">Mercadito Liebre</h3>
      <div className="w-[1200px] flex">
        <form
          action="/items"
          className="m-auto px-4 gap-4 flex flex-1 max-w-screen-xl"
        >
          <input name="search" className="h-8 px-2 flex-1" type="text" />
          <button
            className="h-8 bg-gray-200 px-2 py-1 text-slate-700"
            type="submit"
          >
            Buscar
          </button>
        </form>
        <li className="  h-8 m-auto block mt-4 lg:inline-block  align-middle text-black hover:text-gray-700">
          <Link
            key="car-button"
            href={"/car"}
            role="button"
            className="relative flex"
          >
            <svg className="flex-1 w-8 h-8 fill-current">
              <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
            </svg>
            <p className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
              {car}
            </p>
          </Link>
        </li>
      </div>
    </header>
  );
};

export default Navbar;
