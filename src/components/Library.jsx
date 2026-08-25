import React, { useState } from "react";
import { Search, ChevronDown, MoreVertical } from "lucide-react";

const libraryCards = [
  {
    id: 1,
    title: "Untitled",
    badgeText: "04 Images",
    badgeColor: "bg-[#353535] text-[#BEBEBE] border-[#252525]",
    imgSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Protein Tracking application",
    badgeText: "24 Images",
    badgeColor: "bg-[#0D9AE9]/20 text-[#0D9AE9] border-[#252525]",
    imgSrc: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Data Management Application",
    badgeText: "72 Images",
    badgeColor: "bg-[#F5EA1F]/15 text-[#F5EA1F] border-[#252525]",
    imgSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Dashboard creation Application",
    badgeText: "224 Images",
    badgeColor: "bg-[#7BC53C]/15 text-[#7BC53C] border-[#252525]",
    imgSrc: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Untitled",
    badgeText: "04 Images",
    badgeColor: "bg-[#353535] text-[#BEBEBE] border-[#252525]",
    imgSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80",
  },
];

export default function Library() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("Sort by");

  const filteredCards = libraryCards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 h-full bg-[#161616] p-8 md:p-12 overflow-y-auto select-none">
      {/* Top Controls: Title + Search & Sort */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10 max-w-[1140px] mx-auto">
        <h1 className="text-2xl font-bold text-white tracking-tight">
          Library
        </h1>

        <div className="flex items-center gap-3 w-full md:w-auto">
          {/* Search Input Bar */}
          <div className="flex items-center w-full md:w-[275px] h-[37px] bg-[#141414] border border-[#2C2C2C] rounded-[8.5px] px-3.5 focus-within:border-[#444] transition">
            <input
              type="text"
              placeholder="Search for image names, projects . . . . ."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent text-xs text-white placeholder-[#5C5C5C] outline-none"
            />
          </div>

          {/* Sort By Dropdown Button */}
          <button className="flex items-center justify-between gap-2 h-[37px] px-3.5 bg-[#2A2A2A] border border-[#2C2C2C] rounded-[7.5px] text-xs text-[#D5D5D5] hover:bg-[#333] transition flex-shrink-0">
            <span>{sortBy}</span>
            <ChevronDown size={14} className="text-[#A0A0A0]" />
          </button>
        </div>
      </div>

      {/* Grid of Library Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1140px] mx-auto">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="w-full h-[248px] bg-[#0F0F0F] border border-[#272727] rounded-[19.3px] overflow-hidden flex flex-col justify-between hover:border-[#383838] transition duration-200 group relative cursor-pointer"
          >
            {/* Upper Thumbnail Preview Canvas */}
            <div className="flex-1 w-full bg-[#0F0F0F] relative overflow-hidden flex items-center justify-center p-3">
              <img
                src={card.imgSrc}
                alt={card.title}
                className="w-full h-full object-cover rounded-[6px] opacity-75 group-hover:opacity-100 transition duration-300"
              />
            </div>

            {/* Bottom Card Footer Area */}
            <div className="h-[75px] w-full bg-[#161616] border-t border-[#222222] p-3.5 flex flex-col justify-between flex-shrink-0 z-10">
              <div className="flex items-center justify-between">
                <span className="text-white text-xs font-medium truncate max-w-[85%]">
                  {card.title}
                </span>
                <button 
                  onClick={(e) => e.stopPropagation()} 
                  className="text-white/60 hover:text-white p-0.5 rounded transition"
                >
                  <MoreVertical size={14} />
                </button>
              </div>

              {/* Pill Metadata Badge */}
              <div className="flex items-center">
                <div
                  className={`h-[21px] px-2.5 rounded-[6.5px] border flex items-center justify-center text-[11px] font-normal leading-none ${card.badgeColor}`}
                >
                  {card.badgeText}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}