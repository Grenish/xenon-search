import Toggler from "@/components/Toggler";

export default function Home() {
  return (
    <div className="w-full h-screen bg-gray-200 dark:bg-neutral-950 flex flex-col items-center justify-center">
      <div className="select-none dark:text-gray-300">
        <h1 className="text-6xl">XENON</h1>
        <h1 className="text-xs text-center capitalize">
          Search anything to the point
        </h1>
      </div>

      <div className="w-1/2 overflow-hidden border-2 border-gray-600 rounded-xl mt-5 dark:text-gray-300">
        <input
          type="text"
          className="w-full p-2 rounded-lg outline-none bg-transparent"
          placeholder="Search..."
        />
      </div>
      <div className="mt-2">
        <button className="p-2 border-2 border-gray-500 dark:text-gray-400 hover:dark:text-gray-200 hover:dark:border-gray-200 px-10 rounded-lg text-sm cursor-pointer">
          Search
        </button>
      </div>
      <Toggler />
    </div>
  );
}
