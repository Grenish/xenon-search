"use client";

import React, { useState } from "react";
import Toggler from "@/components/Toggler";
import { Search, Settings, Settings2 } from "lucide-react";
import Link from "next/link";
import PointerModal from "@/components/pointer-modal";

export default function Home() {
  const [isPointerModalOpen, setIsPointerModalOpen] = useState(false);
  const [isPointVisible, setIsPointVisible] = useState(false);
  const [selectedWebsites, setSelectedWebsites] = useState<Set<string>>(
    new Set()
  );

  const handlePointerModal = () => {
    setIsPointerModalOpen(!isPointerModalOpen);
  };

  const handleModalClose = () => {
    setIsPointerModalOpen(false);
  };

  const togglePointVisibility = () => {
    setIsPointVisible(!isPointVisible);
  };

  return (
    <div className="w-full min-h-screen bg-gray-200 dark:bg-neutral-950 flex flex-col items-center justify-center relative px-4 py-6">
      <div className="absolute top-2 right-2 sm:right-5 flex items-center space-x-4">
        <Toggler />
        <Link href={"/settings"}>
          <Settings size={20} className="cursor-pointer dark:text-gray-500" />
        </Link>
      </div>
      <div className="select-none dark:text-gray-300 mb-8 sm:mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-center">XENON</h1>
        <h1 className="text-xs sm:text-sm text-center capitalize mt-2">
          Search anything to the point
        </h1>
      </div>

      <div className="w-full max-w-[95%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[60%] xl:max-w-[50%] overflow-hidden border-2 border-gray-900 rounded-xl mt-5 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-700">
        <div className="w-full flex items-center px-2">
          <input
            type="text"
            className="w-full p-2 sm:p-3 rounded-lg outline-none bg-transparent text-sm sm:text-base"
            placeholder="Search..."
          />
          <button className="cursor-pointer p-2">
            <Search size={20} className="text-gray-500" />
          </button>
        </div>
        <div className="p-1 px-2 flex items-center gap-3">
          <button 
            className="inline-flex items-center gap-1 select-auto cursor-pointer"
            onClick={togglePointVisibility}
          >
            <Settings2 size={15} className="dark:text-gray-400" />
            <h2 className="text-xs sm:text-sm dark:text-gray-400">Search Settings</h2>
          </button>
          {isPointVisible && (
            <div className="flex items-center gap-2 dark:text-gray-400">
              <button
                className="text-xs sm:text-sm cursor-pointer"
                onClick={handlePointerModal}
              >
                Point:{" "}
                {selectedWebsites.size > 0 ? selectedWebsites.size : "Everywhere"}
              </button>
            </div>
          )}
          {isPointerModalOpen && (
            <PointerModal
              onClose={handleModalClose}
              selectedWebsites={selectedWebsites}
              setSelectedWebsites={setSelectedWebsites}
            />
          )}
        </div>
      </div>
      <div className="mt-4 sm:mt-6">
        <button className="w-full sm:w-auto p-2 sm:p-3 border-2 border-gray-500 dark:text-gray-400 hover:dark:text-gray-200 hover:dark:border-gray-200 px-6 sm:px-10 rounded-lg text-sm sm:text-base cursor-pointer transition-colors duration-200">
          Search
        </button>
      </div>
    </div>
  );
}
