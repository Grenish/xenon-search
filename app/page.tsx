"use client";

import React, { useState } from "react";
import Toggler from "@/components/Toggler";
import { Search, Settings, Settings2 } from "lucide-react";
import Link from "next/link";
import PointerModal from "@/components/pointer-modal";

export default function Home() {
  const [isPointerModalOpen, setIsPointerModalOpen] = useState(false);

  const handlePointerModal = () => {
    setIsPointerModalOpen(!isPointerModalOpen);
  };

  return (
    <div className="w-full h-screen bg-gray-200 dark:bg-neutral-950 flex flex-col items-center justify-center relative">
      <div className="absolute top-2 right-5 flex items-center space-x-4">
        <Toggler />
        <Link href={"/settings"}>
          <Settings size={20} className="cursor-pointer dark:text-gray-500" />
        </Link>
      </div>
      <div className="select-none dark:text-gray-300">
        <h1 className="text-6xl">XENON</h1>
        <h1 className="text-xs text-center capitalize">
          Search anything to the point
        </h1>
      </div>

      <div className="w-1/2 overflow-hidden border-2 border-gray-900 rounded-xl mt-5 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-700">
        <div className="w-full flex items-center px-2">
          <input
            type="text"
            className="w-full p-2 rounded-lg outline-none bg-transparent"
            placeholder="Search..."
          />
          <button className="cursor-pointer">
            <Search size={20} className="text-gray-500" />
          </button>
        </div>
        <div className="p-1 px-2 flex gap-3">
          <button className="inline-flex items-center gap-1 select-auto cursor-pointer">
            <Settings2 size={15} className="dark:text-gray-400" />
            <h2 className="text-xs dark:text-gray-400">Search Settings</h2>
          </button>
          <div className="flex items-center gap-2 dark:text-gray-400">
            <button
              className="text-xs cursor-pointer"
              onClick={handlePointerModal}
            >
              Point: Everywhere
            </button>
          </div>
          {isPointerModalOpen && <PointerModal />}
        </div>
      </div>
      <div className="mt-2">
        <button className="p-2 border-2 border-gray-500 dark:text-gray-400 hover:dark:text-gray-200 hover:dark:border-gray-200 px-10 rounded-lg text-sm cursor-pointer">
          Search
        </button>
      </div>
    </div>
  );
}
