// Explorer.js
import React from "react";

const Explorer = () => {
    const folders = ["project-name", "node_modules", "public", "src"];
    const files = ["package.json", "README.md"];

    return (
        <div className=" h-[400px] sm:w-[90%] w-[full] ml-6 mt-5 rounded-[5px] bg-[#1e1e1e] text-white overflow-hidden">
            {/* Top Border with Lights */}
            <div className="w-full top-0 left-0 right-0 h-8 bg-[#2d2d2d] flex items-center px-3 rounded-[5px]">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
            </div>

            {/* Main Content Area (adjusted for the top bar) */}
            <div className="flex h-full "> {/* Added mt-8 to push content down */}
                <div className="mb-4 p-2 bg-[#2a2a2] rounded-md"> {/* Added padding and a slightly different background for distinction */}
                    <div className="space-y-2 px-2 p-1 rounded-[10] bg-[#18181B] h-full"> {/* Added space-y-2 for vertical spacing between the divs */}
                        <div className="h-[30px] w-[30px] my-2 bg-[#3a3a3a] rounded-md animate-pulse"></div>
                        <div className="h-[30px] w-[30px] bg-[#3a3a3a] rounded-md animate-pulse"></div>
                        <div className="h-[30px] w-[30px] bg-[#3a3a3a] rounded-md animate-pulse"></div>
                    </div>
                </div>
                {/* Sidebar */}
                <div className="w-64  bg-[#2d2d2d] "> {/* Removed top padding as it's now part of the centered text */}
                    <h2 className="text-sm text-blue-400 mb-4 text-center py-4">EXPLORER</h2> {/* Centered and added vertical padding */}

                    {/* New Container for Three Divs (Moved Here) */}

                    {/* Folders */}
                    {folders.map((folder, idx) => (
                        <div key={idx} className="pl-2 text-center py-1 text-sm hover:bg-[#3a3a3a] rounded-sm cursor-pointer">
                            {folder}
                        </div>
                    ))}
                    {/* Files */}
                    {files.map((file, idx) => (
                        <div
                            key={idx}
                            className={`pl-2 py-1 text-sm text-center hover:bg-[#3a3a3a] rounded-sm cursor-pointer ${file === "README.md" ? "bg-[#3a3a3a]" : ""
                                }`}
                        >
                            {file}
                        </div>
                    ))}
                </div>

                {/* Content Area */}
                <div className="flex-1 bg-[#1e1e1e] p-4">
                    {/* Tab bar */}
                    <div className="flex bg-[#2d2d2d] p-2 space-x-2 rounded-md">
                        <div className="w-24 h-5 bg-[#3a3a3a] rounded-sm"></div>
                        <div className="w-24 h-5 bg-[#3a3a3a] rounded-sm"></div>
                    </div>

                    {/* Content area */}
                    <div className="mt-4 space-y-2">
                        {Array.from({ length: 7 }).map((_, i) => (
                            <div
                                key={i}
                                className={`h-4 rounded-sm bg-[#2d2d2d] ${i % 2 === 0 ? "w-5/6" : "w-3/4"
                                    }`}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explorer;
